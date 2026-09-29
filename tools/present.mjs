#!/usr/bin/env node
// Static server for deck/ plus a phone-remote relay (SSE + POST), Node built-ins only
// (qrcode-terminal is optional and only used to print a QR code).
// Usage: node tools/present.mjs [--port 8765]
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join, normalize, extname, sep } from 'node:path';
import { randomBytes } from 'node:crypto';
import { networkInterfaces } from 'node:os';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'deck');
const portArg = process.argv.indexOf('--port');
const port = portArg > -1 ? Number(process.argv[portArg + 1]) : 8765;
const token = process.env.PRESENT_TOKEN || randomBytes(6).toString('hex');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
};

// --- remote relay ---------------------------------------------------------
const clients = { deck: new Set(), remote: new Set() };
let lastState = null;

function sse(res, event, data) {
  res.write(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`);
}

function broadcast(role, event, data) {
  for (const res of clients[role]) sse(res, event, data);
}

function readJson(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (c) => {
      body += c;
      if (body.length > 1e6) { reject(new Error('too large')); req.destroy(); }
    });
    req.on('end', () => {
      try { resolve(JSON.parse(body || '{}')); } catch (e) { reject(e); }
    });
    req.on('error', reject);
  });
}

const ACTIONS = new Set(['next', 'prev', 'first', 'last']);

async function handleRelay(req, res, url) {
  if (url.searchParams.get('t') !== token) { res.writeHead(403).end('Forbidden'); return; }

  if (req.method === 'GET' && url.pathname === '/events') {
    const role = url.searchParams.get('role');
    if (!clients[role]) { res.writeHead(400).end('Bad role'); return; }
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    });
    res.write(': connected\n\n');
    clients[role].add(res);
    if (role === 'remote' && lastState) sse(res, 'state', lastState);
    if (role === 'deck') broadcast('remote', 'deck', { connected: true });
    const ka = setInterval(() => res.write(': keepalive\n\n'), 15000);
    req.on('close', () => {
      clearInterval(ka);
      clients[role].delete(res);
      if (role === 'deck' && clients.deck.size === 0) broadcast('remote', 'deck', { connected: false });
    });
    return;
  }

  if (req.method === 'POST' && (url.pathname === '/state' || url.pathname === '/cmd')) {
    let data;
    try { data = await readJson(req); } catch { res.writeHead(400).end('Bad JSON'); return; }
    if (url.pathname === '/state') {
      lastState = data;
      broadcast('remote', 'state', data);
    } else {
      if (!ACTIONS.has(data.action)) { res.writeHead(400).end('Bad action'); return; }
      broadcast('deck', 'cmd', { action: data.action });
    }
    res.writeHead(204).end();
    return;
  }

  res.writeHead(404).end('Not found');
}

// --- static ---------------------------------------------------------------
async function serveStatic(req, res, rawPath) {
  let path;
  try {
    path = normalize(decodeURIComponent(rawPath));
  } catch {
    res.writeHead(400).end('Bad request');
    return;
  }
  if (path.endsWith(sep) || path.endsWith('/')) path += 'index.html';
  const file = join(root, path);
  if (!file.startsWith(root)) { res.writeHead(403).end('Forbidden'); return; }
  try {
    if (!(await stat(file)).isFile()) throw new Error('not a file');
    const body = await readFile(file);
    res.writeHead(200, {
      'Content-Type': MIME[extname(file).toLowerCase()] ?? 'application/octet-stream',
      'Cache-Control': 'no-cache',
    });
    res.end(body);
  } catch {
    res.writeHead(404).end('Not found');
  }
}

const RELAY_PATHS = new Set(['/events', '/state', '/cmd']);

createServer((req, res) => {
  const [rawPath, query = ''] = req.url.split('#')[0].split('?');
  if (RELAY_PATHS.has(rawPath)) {
    handleRelay(req, res, { pathname: rawPath, searchParams: new URLSearchParams(query) })
      .catch(() => { if (!res.headersSent) res.writeHead(500).end(); });
  } else {
    serveStatic(req, res, rawPath);
  }
}).listen(port, async () => {
  const ips = Object.values(networkInterfaces()).flat()
    .filter((i) => i && i.family === 'IPv4' && !i.internal).map((i) => i.address);
  console.log(`\nDeck (open on the laptop):\n  http://localhost:${port}/?remote=${token}\n`);
  let qr = null;
  try { qr = (await import('qrcode-terminal')).default; } catch { /* optional */ }
  for (const ip of ips) {
    const phone = `http://${ip}:${port}/remote/remote.html?t=${token}`;
    console.log(`Phone (${ip}):\n  ${phone}`);
    if (qr) qr.generate(phone, { small: true });
  }
  if (!ips.length) console.log('No LAN address found; join a network (or the phone hotspot).');
});
