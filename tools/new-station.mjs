#!/usr/bin/env node
// Create a station file from a template and append it to deck/manifest.js.
// Usage: node tools/new-station.mjs <NN> <slug>   e.g. node tools/new-station.mjs 02 demystify
import { readFile, writeFile, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const [nn, slug] = process.argv.slice(2);
if (!/^\d{2}$/.test(nn ?? '') || !/^[a-z0-9-]+$/.test(slug ?? '')) {
  console.error('Usage: node tools/new-station.mjs <NN> <slug>   (NN = two digits, slug = lowercase-hyphenated)');
  process.exit(1);
}

const deck = join(dirname(fileURLToPath(import.meta.url)), '..', 'deck');
const rel = `slides/${nn}-${slug}.md`;
const file = join(deck, rel);
try { await access(file); console.error(`${rel} already exists`); process.exit(1); } catch { /* ok */ }

await writeFile(file, `# Slide title

Slide text

Note:
Speaker notes (key phrases, not a script).
`);

const manifestPath = join(deck, 'manifest.js');
const manifest = await readFile(manifestPath, 'utf8');
await writeFile(manifestPath, manifest.replace(/\n\];/, `\n  '${rel}',\n];`));
console.log(`Created deck/${rel} and added it to deck/manifest.js`);
