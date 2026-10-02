#!/usr/bin/env node
// Write a static QR code SVG for a URL (closing slide; reusable for the poll QRs).
// Usage: node tools/build-qr.mjs <url> <out.svg>
import { writeFile } from 'node:fs/promises';
import QRCode from 'qrcode';

const [url, out] = process.argv.slice(2);
if (!url || !out) {
  console.error('Usage: node tools/build-qr.mjs <url> <out.svg>');
  process.exit(1);
}
const svg = await QRCode.toString(url, {
  type: 'svg', margin: 1, errorCorrectionLevel: 'M', color: { dark: '#161412', light: '#ffffff' },
});
await writeFile(out, svg);
console.log(`Wrote ${out} for ${url}`);
