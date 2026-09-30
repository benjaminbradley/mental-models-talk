#!/usr/bin/env node
// Generate the station-4 map layers as static SVG: the territory, the human map, the fish map.
// All three share one landscape: a highlighted patch of knowledge regions inside land that runs
// off every edge (nobody's map is the whole world). Only the ink differs:
// - human map: shows only what lies along the person's paths of experience;
// - fish map: a subset of the real landmarks (thin training data = missing landmarks), all in
//   the same bold ink, plus a few invented ones.
// Deterministic (seeded): rerunning produces identical files. Colors are CSS custom properties
// (deck/theme/talk.css), so the maps must be inlined into the page (the deck's data-svg loader).
// Usage: node tools/build-maps.mjs   -> deck/art/maps/{territory,human,fish}.svg
// Spec: metaphor-imagery.md § The three-layer map/territory. Guide: deck/README.md § Artwork.
import rough from 'roughjs';
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'deck', 'art', 'maps');
const W = 1260, H = 920;
const OX = 110, OY = 90; // where the focus regions sit inside the wider landscape
const gen = rough.generator();

// ---- seeded randomness ------------------------------------------------------------------
function hash(str) {
  let h = 2166136261;
  for (const ch of str) { h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
function rng(key) {
  let a = hash(key);
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function shuffled(list, key) {
  const rand = rng(key), out = [...list];
  for (let i = out.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [out[i], out[j]] = [out[j], out[i]]; }
  return out;
}
let seedCounter = 1;
const nextSeed = () => seedCounter++;

// ---- geography --------------------------------------------------------------------------
const at = ([x, y]) => [x + OX, y + OY];
// Junction grid (rows x cols); the focus regions are the cells between junctions.
const J = [
  [[135, 155], [350, 80], [640, 95], [865, 165]],
  [[55, 305], [370, 285], [625, 315], [935, 290]],
  [[80, 505], [350, 525], [655, 495], [915, 470]],
  [[175, 635], [360, 690], [640, 665], [905, 700]],
].map((row) => row.map(at));
const REGIONS = [
  { id: 'poetry', r: 0, c: 0, label: ['Poetry &', 'Verse'], color: 'pink' },
  { id: 'history', r: 0, c: 1, label: ['History'], color: 'orange' },
  { id: 'law', r: 0, c: 2, label: ['Law'], color: 'blue' },
  { id: 'spatial', r: 1, c: 0, label: ['Spatial', 'Reasoning'], color: 'green' },
  { id: 'counting', r: 1, c: 1, label: ['Counting &', 'Tracking'], color: 'purple' },
  { id: 'medicine', r: 1, c: 2, label: ['Medicine'], color: 'red' },
  { id: 'regional', r: 2, c: 0, label: ['Regional', 'Cooking'], color: 'yellow' },
  { id: 'everyday', r: 2, c: 1, label: ['Everyday', 'Cooking'], color: 'yellow' },
  { id: 'recent', r: 2, c: 2, label: ['Recent', 'Events'], color: 'teal' },
];

// Territory landmarks per region: [type, count]. The territory is detailed everywhere.
const FEATURES = {
  poetry: [['tree', 9]],
  history: [['house', 4], ['mountain', 3]],
  law: [['house', 6]],
  spatial: [['mountain', 5]],
  counting: [['lake', 5]],
  medicine: [['tree', 3], ['house', 3]],
  regional: [['pine', 6]],
  everyday: [['house', 3], ['tree', 3]],
  recent: [['lake', 2], ['house', 3]],
};
const OUTER_COUNT = 16; // faint landmarks in the landscape beyond the focus regions
const RIVER = { // spatial region
  territory: [[100, 335], [165, 385], [145, 440], [245, 470], [335, 500]].map(at),
  fish: [[95, 395], [150, 470], [225, 440], [290, 485], [345, 455]].map(at), // wrong course
};

// Water: a coast in the bottom-left corner and a lake off to the right, outside the focus.
const COAST_CTRL = [[0, 690], [75, 725], [125, 795], [150, 860], [170, H]];
const LAKE = { cx: 1160, cy: 470, rx: 70, ry: 36 };
const inLake = ([x, y], grow = 1) => ((x - LAKE.cx) / (LAKE.rx * grow)) ** 2 + ((y - LAKE.cy) / (LAKE.ry * grow)) ** 2 < 1;

function wiggle(a, b, amp, key, depth = 4) {
  const rand = rng(key);
  let pts = [a, b];
  for (let d = 0; d < depth; d++) {
    const next = [pts[0]];
    for (let i = 1; i < pts.length; i++) {
      const [x1, y1] = pts[i - 1], [x2, y2] = pts[i];
      const len = Math.hypot(x2 - x1, y2 - y1) || 1;
      const off = (rand() - 0.5) * 2 * amp / 2 ** d;
      next.push([(x1 + x2) / 2 - (y2 - y1) / len * off, (y1 + y2) / 2 + (x2 - x1) / len * off], pts[i]);
    }
    pts = next;
  }
  return pts;
}
function wiggleChain(ctrl, amp, key) {
  const pts = [ctrl[0]];
  for (let i = 1; i < ctrl.length; i++) pts.push(...wiggle(ctrl[i - 1], ctrl[i], amp, `${key}${i}`, 3).slice(1));
  return pts;
}
const COAST = wiggleChain(COAST_CTRL, 16, 'coast');
const SEA = [...COAST, [0, H]];

// The region grid keeps going past the focus: faint borders from each boundary junction outward.
const EXTENSIONS = [];
{
  const [cx, cy] = [W / 2, H / 2];
  J.forEach((row, r) => row.forEach((p, c) => {
    if (r > 0 && r < 3 && c > 0 && c < 3) return;
    let dx = c === 0 ? -1 : c === 3 ? 1 : 0, dy = r === 0 ? -1 : r === 3 ? 1 : 0;
    if (dx && dy) { dx = (p[0] - cx) / 400; dy = (p[1] - cy) / 400; }
    const far = [p[0] + dx * 900, p[1] + dy * 900];
    const line = wiggle(p, far, 30, `ext-${r},${c}`);
    const cut = line.findIndex((q) => q[0] < 0 || q[0] > W || q[1] < 0 || q[1] > H || inside(q, SEA) || inLake(q, 1.3));
    EXTENSIONS.push(line.slice(0, cut < 0 ? line.length : cut + 1));
  }));
}

const isOuter = (a, b) => (a[0] === b[0] && (a[0] === 0 || a[0] === 3)) || (a[1] === b[1] && (a[1] === 0 || a[1] === 3));

function regionGeometry() {
  const edges = new Map(); // key -> { pts, regions: [], outer }
  const polys = {};
  for (const g of REGIONS) {
    const corners = [[g.r, g.c], [g.r, g.c + 1], [g.r + 1, g.c + 1], [g.r + 1, g.c]];
    const poly = [];
    for (let i = 0; i < 4; i++) {
      const a = corners[i], b = corners[(i + 1) % 4];
      // Canonical direction so both neighbors get identical points.
      const fwd = a[0] < b[0] || (a[0] === b[0] && a[1] < b[1]);
      const [p, q] = fwd ? [a, b] : [b, a];
      const canon = wiggle(J[p[0]][p[1]], J[q[0]][q[1]], isOuter(p, q) ? 22 : 13, `${p}>${q}`);
      const pts = fwd ? canon : [...canon].reverse();
      poly.push(...pts.slice(0, -1));
      const k = `${p}|${q}`;
      if (!edges.has(k)) edges.set(k, { pts: canon, regions: [], outer: isOuter(p, q) });
      edges.get(k).regions.push(g.id);
    }
    polys[g.id] = poly;
  }
  return { polys, edges: [...edges.values()] };
}

// ---- geometry helpers ------------------------------------------------------------------
function inside([x, y], poly) {
  let c = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i], [xj, yj] = poly[j];
    if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) c = !c;
  }
  return c;
}
function distToSeg([x, y], [x1, y1], [x2, y2]) {
  const dx = x2 - x1, dy = y2 - y1, l2 = dx * dx + dy * dy || 1;
  const t = Math.max(0, Math.min(1, ((x - x1) * dx + (y - y1) * dy) / l2));
  return Math.hypot(x - x1 - t * dx, y - y1 - t * dy);
}
function distToLine(p, line) {
  let best = Infinity;
  for (let i = 1; i < line.length; i++) best = Math.min(best, distToSeg(p, line[i - 1], line[i]));
  return best;
}
const distToPoly = (p, poly) => distToLine(p, [...poly, poly[0]]);
const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);
const centroid = (poly) => poly.reduce(([sx, sy], [x, y]) => [sx + x / poly.length, sy + y / poly.length], [0, 0]);
function bbox(poly, pad = 0) {
  const xs = poly.map((p) => p[0]), ys = poly.map((p) => p[1]);
  const x = Math.min(...xs) - pad, y = Math.min(...ys) - pad;
  return [x, y, Math.max(...xs) + pad - x, Math.max(...ys) + pad - y].map(Math.round);
}
function labelBox(g, [cx, cy], size) {
  const w = Math.max(...g.label.map((l) => l.length)) * size * 0.55, h = g.label.length * size * 1.05;
  return [cx - w / 2 - 10, cy - h / 2 - 8, cx + w / 2 + 10, cy + h / 2 + 8];
}
const inBox = ([x, y], [x1, y1, x2, y2]) => x > x1 && x < x2 && y > y1 && y < y2;

// Scatter n points inside poly, clear of its edges, a label box, a line, a predicate, and each other.
function scatter(poly, n, key, avoid = {}) {
  const rand = rng(key), [bx, by, bw, bh] = bbox(poly), pts = [...(avoid.points ?? [])];
  const out = [];
  for (let tries = 0; out.length < n && tries < 8000; tries++) {
    const p = [bx + rand() * bw, by + rand() * bh];
    const spacing = tries < 3000 ? (avoid.spacing ?? 50) : 38;
    if (!inside(p, poly) || distToPoly(p, poly) < (avoid.margin ?? 26)) continue;
    if (avoid.box && inBox(p, avoid.box)) continue;
    if (avoid.line && distToLine(p, avoid.line) < 32) continue;
    if (avoid.reject && avoid.reject(p)) continue;
    if (pts.some((q) => dist(p, q) < spacing)) continue;
    pts.push(p); out.push(p);
  }
  return out;
}

// ---- drawing ----------------------------------------------------------------------------
const num = (s) => s.replace(/-?\d+\.\d+/g, (n) => (+n).toFixed(1));

function paths(drawable, o) {
  return gen.toPaths(drawable).map((p) => {
    const outline = p.stroke === o.stroke && p.strokeWidth === o.strokeWidth;
    const dash = outline && o.dash ? `;stroke-dasharray:${o.dash}` : '';
    return `<path d="${num(p.d)}" style="stroke:${p.stroke};stroke-width:${p.strokeWidth};fill:${p.fill ?? 'none'}${dash}"/>`;
  }).join('');
}
const shape = (kind, args, o) => paths(gen[kind](...args, { ...o, seed: nextSeed() }), o);

// Glyphs. `fills` is false for ink-only maps.
function glyph(type, [x, y], ink, fills) {
  const s = 17;
  const f = (color) => (fills ? { fill: color, fillStyle: 'solid' } : {});
  switch (type) {
    case 'mountain':
      return shape('polygon', [[[x - s * 1.3, y + s * 0.7], [x - s * 0.2, y - s], [x + s * 0.5, y - s * 0.1], [x + s * 0.9, y - s * 0.5], [x + s * 1.5, y + s * 0.7]]], { ...ink, ...f('var(--rock)') });
    case 'tree':
      return shape('line', [x, y + s * 0.2, x, y + s * 0.9], ink) + shape('circle', [x, y - s * 0.3, s * 1.3], { ...ink, ...f('var(--green)') });
    case 'pine':
      return shape('line', [x, y + s * 0.4, x, y + s * 0.9], ink) + shape('polygon', [[[x - s * 0.7, y + s * 0.45], [x, y - s * 1.1], [x + s * 0.7, y + s * 0.45]]], { ...ink, ...f('var(--green-deep)') });
    case 'house':
      return shape('polygon', [[[x - s * 0.7, y + s * 0.7], [x - s * 0.7, y - s * 0.1], [x, y - s * 0.8], [x + s * 0.7, y - s * 0.1], [x + s * 0.7, y + s * 0.7]]], { ...ink, ...f('var(--red)') });
    case 'lake':
      return shape('ellipse', [x, y, s * 2.6, s * 1.4], fills
        ? { ...ink, fill: 'var(--water)', fillStyle: 'solid' }
        : { ...ink, fill: ink.stroke, fillStyle: 'hachure', hachureGap: 6, fillWeight: 1.2 });
  }
  return '';
}

function river(pts, ink, fills) {
  if (fills) return shape('curve', [pts], { ...ink, strokeWidth: 14 }) + shape('curve', [pts], { ...ink, stroke: 'var(--water)', strokeWidth: 7 });
  return shape('curve', [pts], { ...ink, strokeWidth: ink.strokeWidth * 1.6 });
}

function waves(near, n, key, stroke, avoid = () => false) {
  const rand = rng(key);
  let out = '';
  for (let i = 0, k = 0; i < 600 && k < n; i++) {
    const p = [rand() * 200, H - rand() * 260];
    if (!inside(p, SEA) || distToLine(p, COAST) < 28 || p[0] < 30 || p[1] > H - 30 || avoid(p) || !near(p)) continue;
    out += shape('curve', [[[p[0] - 16, p[1]], [p[0] - 8, p[1] - 6], [p[0], p[1]], [p[0] + 8, p[1] - 6], [p[0] + 16, p[1]]]], { stroke, strokeWidth: 3, roughness: 0.5 });
    k++;
  }
  return out;
}

function label(g, [x, y], style) {
  const lh = style.size * 1.05, y0 = y - ((g.label.length - 1) * lh) / 2 + style.size * 0.35;
  const spans = g.label.map((l, i) => `<tspan x="${x.toFixed(0)}" y="${(y0 + i * lh).toFixed(0)}">${l.replace('&', '&amp;')}${style.suffix && i === g.label.length - 1 ? style.suffix : ''}</tspan>`).join('');
  return `<text style="${style.css}" text-anchor="middle">${spans}</text>`;
}

const FONT_HAND = "font-family:'Caveat',cursive";
const FONT_SANS = "font-family:'Helvetica Neue',Helvetica,Arial,sans-serif";
const sheet = (ink) => `<rect width="${W}" height="${H}" style="fill:var(--parchment)"/>` + shape('rectangle', [14, 14, W - 28, H - 28], ink);

// ---- the shared landscape ---------------------------------------------------------------
const base = regionGeometry();
const regionOf = (p) => REGIONS.find((g) => inside(p, base.polys[g.id]))?.id ?? 'outer';
const LABEL_POS = Object.fromEntries(REGIONS.map((g) => [g.id, centroid(base.polys[g.id])]));
LABEL_POS.spatial[1] -= 55; LABEL_POS.spatial[0] += 40; // clear of the river
LABEL_POS.recent[0] += 30;

// Every real landmark, with a stable id. Maps pick from this list.
const LANDMARKS = [];
for (const g of REGIONS) {
  const box = labelBox(g, LABEL_POS[g.id], 34), placed = [];
  for (const [type, n] of FEATURES[g.id]) {
    for (const p of scatter(base.polys[g.id], n, `terr-${g.id}-${type}`, { box, line: g.id === 'spatial' ? RIVER.territory : null, points: placed })) {
      placed.push(p); LANDMARKS.push({ id: `${g.id}-${LANDMARKS.length}`, region: g.id, type, p });
    }
  }
}
{
  const frame = [[0, 0], [W, 0], [W, H], [0, H]];
  const polys = REGIONS.map((g) => base.polys[g.id]);
  const reject = (p) => polys.some((poly) => inside(p, poly) || distToPoly(p, poly) < 34)
    || inside(p, SEA) || distToLine(p, COAST) < 34 || inLake(p, 1.6)
    || EXTENSIONS.some((l) => distToLine(p, l) < 28);
  const types = ['tree', 'mountain', 'pine', 'house'];
  const rand = rng('outer-types');
  for (const p of scatter(frame, OUTER_COUNT, 'terr-outer', { margin: 50, spacing: 70, reject })) {
    LANDMARKS.push({ id: `outer-${LANDMARKS.length}`, region: 'outer', type: types[Math.floor(rand() * types.length)], p });
  }
}
const regionBoxes = Object.fromEntries(REGIONS.map((g) => [g.id, bbox(base.polys[g.id], 40)]));

function svgDoc(name, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" class="map-${name}" data-regions='${JSON.stringify(regionBoxes)}' role="img">
<g style="stroke-linecap:round;stroke-linejoin:round">
${body}
</g>
</svg>
`;
}

// ---- territory --------------------------------------------------------------------------
function territory() {
  const ink = { stroke: 'var(--ink)', strokeWidth: 4, roughness: 0.7, bowing: 0.6 };
  let out = `<rect width="${W}" height="${H}" style="fill:var(--land-outer)"/>`;
  out += `<g opacity="0.25">${shape('rectangle', [0, 0, W, H], { stroke: 'none', fill: 'var(--green)', fillStyle: 'hachure', hachureGap: 22, fillWeight: 1.5, hachureAngle: 30, roughness: 1 })}</g>`;
  // water
  out += shape('polygon', [SEA], { stroke: 'none', fill: 'var(--sea)', fillStyle: 'solid', roughness: 0 });
  out += shape('linearPath', [COAST], { ...ink, strokeWidth: 4 });
  out += waves(() => true, 5, 'terr-waves', 'var(--blue)');
  out += shape('ellipse', [LAKE.cx, LAKE.cy, LAKE.rx * 2, LAKE.ry * 2], { ...ink, fill: 'var(--water)', fillStyle: 'solid' });
  // landscape beyond the focus: real, but out of focus
  out += `<g opacity="0.4">${EXTENSIONS.map((l) => shape('linearPath', [l], { ...ink, strokeWidth: 3 })).join('')}</g>`;
  out += `<g opacity="0.55">${LANDMARKS.filter((l) => l.region === 'outer').map((l) => glyph(l.type, l.p, { ...ink, strokeWidth: 3 }, true)).join('')}</g>`;
  // focus regions
  for (const g of REGIONS) {
    const poly = base.polys[g.id];
    out += shape('polygon', [poly], { stroke: 'none', fill: `var(--land-${g.id})`, fillStyle: 'solid', roughness: 0 });
    out += `<g opacity="0.35">${shape('polygon', [poly], { stroke: 'none', fill: `var(--${g.color})`, fillStyle: 'hachure', hachureGap: 16, fillWeight: 2, hachureAngle: -41 + (hash(g.id) % 60), roughness: 1 })}</g>`;
  }
  for (const e of base.edges) out += shape('linearPath', [e.pts], ink);
  out += river(RIVER.territory, ink, true);
  for (const l of LANDMARKS) if (l.region !== 'outer') out += glyph(l.type, l.p, { ...ink, strokeWidth: 3 }, true);
  const lab = { size: 30, css: `${FONT_SANS};font-weight:800;font-size:30px;fill:var(--ink);stroke:var(--paper);stroke-width:7;paint-order:stroke` };
  for (const g of REGIONS) out += label(g, LABEL_POS[g.id], lab);
  return svgDoc('territory', out);
}

// ---- human map: what lies along the paths of experience ---------------------------------
// How many landmarks (nearest home first) this person has walked to, per region.
const WALKED = { everyday: 6, regional: 4, counting: 4, spatial: 4, recent: 3, history: 1, poetry: 1, medicine: 1, law: 0, outer: 2 };
const NEAR_PATH = 36; // landmarks this close to a path are known too

function humanPaths() {
  const everyday = LANDMARKS.filter((l) => l.region === 'everyday' && l.type === 'house');
  const home = everyday.reduce((a, b) => (dist(a.p, LABEL_POS.everyday) < dist(b.p, LABEL_POS.everyday) ? a : b));
  const targets = [];
  for (const [region, n] of Object.entries(WALKED)) {
    targets.push(...LANDMARKS.filter((l) => l.region === region && l !== home).sort((a, b) => dist(a.p, home.p) - dist(b.p, home.p)).slice(0, n));
  }
  const beach = COAST.reduce((a, b) => (dist(a, home.p) < dist(b, home.p) ? a : b));
  targets.push({ id: 'beach', region: 'outer', type: 'beach', p: [beach[0] + 22, beach[1] - 14] });
  // Grow a tree outward from home (Prim): each place is reached from the nearest known place.
  const nodes = [home], edges = [], remaining = [...targets];
  while (remaining.length) {
    let best = null;
    for (const t of remaining) for (const n of nodes) {
      const d = dist(t.p, n.p);
      if (!best || d < best.d) best = { t, n, d };
    }
    nodes.push(best.t); edges.push({ from: best.n, to: best.t });
    remaining.splice(remaining.indexOf(best.t), 1);
  }
  // Wear: an edge is walked once for every place beyond it.
  const beyond = (node) => 1 + edges.filter((e) => e.from === node).reduce((s, e) => s + beyond(e.to), 0);
  for (const e of edges) e.walks = beyond(e.to);
  // A few trails that head off the map: the landscape keeps going.
  const leaves = nodes.filter((n) => !edges.some((e) => e.from === n) && n.id !== 'beach');
  const pick = (score) => leaves.reduce((a, b) => (score(a) > score(b) ? a : b));
  const wanders = [pick((n) => -n.p[1]), pick((n) => n.p[0]), pick((n) => n.p[1] - n.p[0] * 0.2)].map((leaf, i) => {
    const rand = rng(`wander-${i}`);
    const dir = [leaf.p[0] - home.p[0], leaf.p[1] - home.p[1]], len = Math.hypot(...dir);
    const pts = [leaf.p];
    let [x, y] = leaf.p;
    while (x > -20 && x < W + 20 && y > -20 && y < H + 20) {
      x += (dir[0] / len) * 70 + (rand() - 0.5) * 60; y += (dir[1] / len) * 70 + (rand() - 0.5) * 60;
      pts.push([x, y]);
    }
    return pts;
  });
  return { home, nodes, edges, wanders };
}

function human() {
  const INK = {
    firm: { stroke: 'var(--ink)', strokeWidth: 3.5, roughness: 1.3, bowing: 1.2 },
    sketchy: { stroke: 'var(--ink)', strokeWidth: 2.2, roughness: 2.6, bowing: 2, dash: '12 9' },
    blank: { stroke: 'var(--ink)', strokeWidth: 2, roughness: 2.2, dash: '2 11' },
  };
  const trail = { stroke: 'var(--trail)', strokeWidth: 2.6, roughness: 1.2, bowing: 1 };
  const net = humanPaths();
  const segs = [...net.edges.map((e) => [e.from.p, e.to.p]), ...net.wanders];

  // Confidence per region follows how much path runs through it.
  const walked = Object.fromEntries(REGIONS.map((g) => [g.id, 0]));
  for (const line of segs) for (let i = 1; i < line.length; i++) {
    const n = Math.ceil(dist(line[i - 1], line[i]) / 6);
    for (let k = 0; k < n; k++) {
      const t = k / n, p = [line[i - 1][0] + (line[i][0] - line[i - 1][0]) * t, line[i - 1][1] + (line[i][1] - line[i - 1][1]) * t];
      const r = regionOf(p);
      if (r !== 'outer') walked[r] += dist(line[i - 1], line[i]) / n;
    }
  }
  const conf = Object.fromEntries(REGIONS.map((g) => [g.id, walked[g.id] > 220 ? 'firm' : walked[g.id] > 0 ? 'sketchy' : 'blank']));
  const rank = { firm: 3, sketchy: 2, blank: 1 };

  let out = sheet({ stroke: 'var(--ink)', strokeWidth: 3, roughness: 1.2 });
  for (const e of base.edges) {
    const best = e.regions.map((id) => conf[id]).sort((a, b) => rank[b] - rank[a])[0];
    out += shape('linearPath', [e.pts], INK[best]);
  }
  for (const g of REGIONS) {
    if (conf[g.id] !== 'blank') continue;
    out += `<g opacity="0.5">${shape('polygon', [base.polys[g.id]], { stroke: 'none', fill: 'var(--ink)', fillStyle: 'cross-hatch', hachureGap: 14, fillWeight: 1.3, roughness: 2.5 })}</g>`;
    const [cx, cy] = LABEL_POS[g.id];
    out += `<text x="${cx.toFixed(0)}" y="${(cy + 62).toFixed(0)}" text-anchor="middle" style="${FONT_HAND};font-weight:600;font-size:34px;fill:var(--ink);stroke:var(--parchment);stroke-width:8;paint-order:stroke">here be dragons</text>`;
  }
  // the one stretch of coast this person has seen
  const beach = net.nodes.find((n) => n.id === 'beach').p;
  const seen = COAST.filter((p) => dist(p, beach) < 150);
  out += shape('linearPath', [seen], INK.firm);
  out += waves((p) => dist(p, beach) < 150, 2, 'human-waves', 'var(--ink)');
  // paths: overlapping strokes, one per walk (capped), so well-worn routes read as braided
  for (const e of net.edges) {
    const rand = rng(`walk-${e.from.id}-${e.to.id}`);
    const [a, b] = [e.from.p, e.to.p], len = dist(a, b) || 1;
    const perp = [-(b[1] - a[1]) / len, (b[0] - a[0]) / len], bend = (rand() - 0.5) * 28;
    for (let i = 0; i < Math.min(6, e.walks); i++) {
      const off = bend + (rand() - 0.5) * 18, j = () => (rand() - 0.5) * 12;
      const mid = [(a[0] + b[0]) / 2 + perp[0] * off, (a[1] + b[1]) / 2 + perp[1] * off];
      out += `<g opacity="0.8">${shape('curve', [[[a[0] + j(), a[1] + j()], mid, [b[0] + j(), b[1] + j()]]], trail)}</g>`;
    }
  }
  for (const w of net.wanders) out += shape('curve', [w], { ...trail, dash: '10 9' });
  // landmarks: only the ones along the paths
  const known = LANDMARKS.filter((l) => net.nodes.includes(l) || segs.some((s) => distToLine(l.p, s) < NEAR_PATH));
  const walks = (l) => Math.max(0, ...net.edges.filter((e) => e.to === l || e.from === l).map((e) => e.walks));
  for (const l of known) {
    const firm = l === net.home || walks(l) >= 2;
    const rand = rng(`human-${l.id}`), jit = firm ? 0 : 10; // calibrated error on the edges of experience
    out += glyph(l.type, [l.p[0] + (rand() - 0.5) * jit, l.p[1] + (rand() - 0.5) * jit], firm ? INK.firm : INK.sketchy, false);
  }
  if (conf.spatial === 'firm') out += river(RIVER.territory, INK.firm, false);
  for (const g of REGIONS) {
    if (conf[g.id] !== 'sketchy') continue;
    const [p] = scatter(base.polys[g.id], 1, `q-${g.id}`, { box: labelBox(g, LABEL_POS[g.id], 38), points: known.map((l) => l.p) });
    if (p) out += `<text x="${p[0].toFixed(0)}" y="${(p[1] + 18).toFixed(0)}" text-anchor="middle" style="${FONT_HAND};font-weight:700;font-size:56px;fill:var(--ink)">?</text>`;
  }
  const style = (c) => ({ size: 38, suffix: c === 'sketchy' ? '?' : c === 'blank' ? '??' : '', css: `${FONT_HAND};font-weight:${c === 'firm' ? 700 : 500};font-size:38px;fill:var(--ink);stroke:var(--parchment);stroke-width:6;paint-order:stroke` });
  for (const g of REGIONS) out += label(g, LABEL_POS[g.id], style(conf[g.id]));
  return svgDoc('human', out);
}

// ---- fish map: drawn from books ---------------------------------------------------------
// keep = share of the real landmarks the books covered; invent = confident landmarks that
// are not in the territory (the few exceptions).
const FISH = {
  poetry: { keep: 0.85 },
  history: { keep: 0.75 },
  law: { keep: 0.8 },
  medicine: { keep: 0.7 },
  everyday: { keep: 0.8 },
  spatial: { keep: 0.4 },                                   // plus a river on the wrong course
  counting: { keep: 0.6 },                                  // 3 of the 5 lakes
  regional: { keep: 0.34, invent: [['house', 1]] },         // drifts toward the mainstream
  recent: { keep: 0.34, invent: [['house', 1], ['tree', 1]] }, // filled in from pattern
  outer: { keep: 0.45 },
};

function fish() {
  const ink = { stroke: 'var(--ink)', strokeWidth: 5, roughness: 0.35, bowing: 0.3 };
  let out = sheet({ ...ink, strokeWidth: 3 });
  out += shape('linearPath', [COAST], ink);
  out += waves(() => true, 4, 'fish-waves', 'var(--ink)');
  out += shape('ellipse', [LAKE.cx, LAKE.cy, LAKE.rx * 2, LAKE.ry * 2], { ...ink, fill: 'var(--ink)', fillStyle: 'hachure', hachureGap: 8, fillWeight: 1.5 });
  for (const e of base.edges) out += shape('linearPath', [e.pts], ink);
  for (const [region, f] of Object.entries(FISH)) {
    const real = LANDMARKS.filter((l) => l.region === region);
    const clear = real.filter((l) => distToLine(l.p, RIVER.fish) > 40); // keep the wrong river legible
    const kept = shuffled(clear, `fish-keep-${region}`).slice(0, Math.round(real.length * f.keep));
    for (const l of kept) out += glyph(l.type, l.p, ink, false);
    const g = REGIONS.find((r) => r.id === region);
    const placed = real.map((l) => l.p); // invented landmarks never sit on a real one
    for (const [type, n] of f.invent ?? []) {
      for (const p of scatter(base.polys[region], n, `fish-${region}-${type}`, { box: labelBox(g, LABEL_POS[region], 38), points: placed, spacing: 44 })) {
        placed.push(p); out += glyph(type, p, ink, false);
      }
    }
  }
  out += river(RIVER.fish, ink, false);
  const lab = { size: 38, css: `${FONT_HAND};font-weight:700;font-size:38px;fill:var(--ink);stroke:var(--parchment);stroke-width:6;paint-order:stroke` };
  for (const g of REGIONS) out += label(g, LABEL_POS[g.id], lab);
  return svgDoc('fish', out);
}

await mkdir(OUT, { recursive: true });
for (const [name, build] of [['territory', territory], ['human', human], ['fish', fish]]) {
  seedCounter = hash(name) % 100000; // per-map seed stream, stable across runs
  const svg = build();
  await writeFile(join(OUT, `${name}.svg`), svg);
  console.log(`deck/art/maps/${name}.svg  ${(svg.length / 1024).toFixed(0)} KB`);
}
