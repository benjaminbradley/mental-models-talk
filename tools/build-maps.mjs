#!/usr/bin/env node
// Generate the station-4 map layers as static SVG: the territory, the human map, the fish map.
// All three share one set of region shapes; only the ink differs. Deterministic (seeded), so
// rerunning produces identical files. Colors are CSS custom properties (deck/theme/talk.css),
// so the maps must be inlined into the page (the deck's data-svg loader does this).
// Usage: node tools/build-maps.mjs   -> deck/art/maps/{territory,human,fish}.svg
// Spec: metaphor-imagery.md § The three-layer map/territory. Guide: deck/README.md § Artwork.
import rough from 'roughjs';
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'deck', 'art', 'maps');
const W = 1040, H = 740;
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
let seedCounter = 1;
const nextSeed = () => seedCounter++;

// ---- geography --------------------------------------------------------------------------
// Junction grid (rows x cols); regions are the cells between junctions.
const J = [
  [[135, 155], [350, 80], [640, 95], [865, 165]],
  [[55, 305], [370, 285], [625, 315], [935, 290]],
  [[80, 505], [350, 525], [655, 495], [915, 470]],
  [[175, 635], [360, 690], [640, 665], [905, 700]],
];
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
const byId = Object.fromEntries(REGIONS.map((g) => [g.id, g]));

// Territory features per region: [type, count]. The territory is detailed everywhere.
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
const RIVER = { // spatial region
  territory: [[100, 335], [165, 385], [145, 440], [245, 470], [335, 500]],
  fish: [[95, 395], [150, 470], [225, 440], [290, 485], [345, 455]],
};

// Coastline overrides: extra control points for an edge (keyed "r,c>r,c" in drawing order).
const COAST = {
  territory: { '2,3>3,3': [[995, 530], [1010, 640]] },
  fish: { '2,3>3,3': [[975, 505], [1025, 610], [960, 690]], '3,3>3,2': [[780, 640]] }, // invented
};

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

const isCoast = (a, b) => (a[0] === b[0] && (a[0] === 0 || a[0] === 3)) || (a[1] === b[1] && (a[1] === 0 || a[1] === 3));

function edgePoints(a, b, variant) {
  // Canonical direction so both neighbors get identical points.
  const fwd = a[0] < b[0] || (a[0] === b[0] && a[1] < b[1]);
  const [p, q] = fwd ? [a, b] : [b, a];
  const key = `${p}>${q}`;
  const ctrl = COAST[variant]?.[`${a}>${b}`] ?? COAST[variant]?.[`${b}>${a}`];
  const amp = isCoast(p, q) ? 40 : 13;
  let pts;
  if (ctrl) {
    const own = COAST[variant][`${a}>${b}`] ? [J[a[0]][a[1]], ...ctrl, J[b[0]][b[1]]] : [J[b[0]][b[1]], ...ctrl, J[a[0]][a[1]]].reverse();
    pts = [own[0]];
    for (let i = 1; i < own.length; i++) pts.push(...wiggle(own[i - 1], own[i], amp, `${variant}${key}${i}`, 3).slice(1));
    return pts; // already in a->b order
  }
  pts = wiggle(J[p[0]][p[1]], J[q[0]][q[1]], amp, key);
  return fwd ? pts : [...pts].reverse();
}

function regionGeometry(variant) {
  const edges = new Map(); // key -> { pts, regions: [], coast }
  const polys = {};
  for (const g of REGIONS) {
    const corners = [[g.r, g.c], [g.r, g.c + 1], [g.r + 1, g.c + 1], [g.r + 1, g.c]];
    const poly = [];
    for (let i = 0; i < 4; i++) {
      const a = corners[i], b = corners[(i + 1) % 4];
      const pts = edgePoints(a, b, variant);
      poly.push(...pts.slice(0, -1));
      const k = [String(a), String(b)].sort().join('|');
      if (!edges.has(k)) edges.set(k, { pts, regions: [], coast: isCoast(a, b) });
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
function distToPoly([x, y], poly) {
  let best = Infinity;
  for (let i = 0; i < poly.length; i++) {
    const [x1, y1] = poly[i], [x2, y2] = poly[(i + 1) % poly.length];
    const dx = x2 - x1, dy = y2 - y1, l2 = dx * dx + dy * dy || 1;
    const t = Math.max(0, Math.min(1, ((x - x1) * dx + (y - y1) * dy) / l2));
    best = Math.min(best, Math.hypot(x - x1 - t * dx, y - y1 - t * dy));
  }
  return best;
}
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
function nearLine(p, line, d) {
  return line && line.some((q, i) => i > 0 && distToPoly(p, [line[i - 1], q]) < d);
}

// Scatter n points inside poly, clear of edges, the label, a line (river), and each other.
function scatter(poly, n, key, avoid) {
  const rand = rng(key), [bx, by, bw, bh] = bbox(poly), pts = [...(avoid.points ?? [])];
  const out = [];
  for (let tries = 0; out.length < n && tries < 8000; tries++) {
    const p = [bx + rand() * bw, by + rand() * bh];
    const spacing = tries < 3000 ? 50 : 38;
    if (!inside(p, poly) || distToPoly(p, poly) < 26) continue;
    if (avoid.box && inBox(p, avoid.box)) continue;
    if (nearLine(p, avoid.line, 32)) continue;
    if (pts.some((q) => Math.hypot(p[0] - q[0], p[1] - q[1]) < spacing)) continue;
    pts.push(p); out.push(p);
  }
  return out;
}

// ---- drawing ----------------------------------------------------------------------------
const num = (s) => s.replace(/-?\d+\.\d+/g, (n) => (+n).toFixed(1));

function paths(drawable, o, extraStyle = '') {
  return gen.toPaths(drawable).map((p) => {
    const outline = p.stroke === o.stroke && p.strokeWidth === o.strokeWidth;
    const dash = outline && o.dash ? `;stroke-dasharray:${o.dash}` : '';
    return `<path d="${num(p.d)}" style="stroke:${p.stroke};stroke-width:${p.strokeWidth};fill:${p.fill ?? 'none'}${dash}${extraStyle}"/>`;
  }).join('');
}
const shape = (kind, args, o) => paths(gen[kind](...args, { ...o, seed: nextSeed() }), o);

// Glyphs. `fills` is null for ink-only maps.
function glyph(type, [x, y], ink, fills) {
  const s = 17;
  const f = (color, extra = {}) => (fills ? { fill: color, fillStyle: 'solid', ...extra } : {});
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

function label(g, [x, y], style) {
  const lh = style.size * 1.05, y0 = y - ((g.label.length - 1) * lh) / 2 + style.size * 0.35;
  const spans = g.label.map((l, i) => `<tspan x="${x.toFixed(0)}" y="${(y0 + i * lh).toFixed(0)}">${l.replace('&', '&amp;')}${style.suffix && i === g.label.length - 1 ? style.suffix : ''}</tspan>`).join('');
  return `<text style="${style.css}" text-anchor="middle">${spans}</text>`;
}

const FONT_HAND = "font-family:'Caveat',cursive";
const FONT_SANS = "font-family:'Helvetica Neue',Helvetica,Arial,sans-serif";

// ---- the three maps ---------------------------------------------------------------------
const base = regionGeometry('territory');
const LABEL_POS = Object.fromEntries(REGIONS.map((g) => [g.id, centroid(base.polys[g.id])]));
LABEL_POS.spatial[1] -= 55; LABEL_POS.spatial[0] += 40; // clear of the river
LABEL_POS.recent[0] += 30;

// Territory features, reused (filtered/moved) by the maps.
const terrFeatures = {};
for (const g of REGIONS) {
  const box = labelBox(g, LABEL_POS[g.id], 34);
  const placed = [];
  terrFeatures[g.id] = [];
  for (const [type, n] of FEATURES[g.id]) {
    for (const p of scatter(base.polys[g.id], n, `terr-${g.id}-${type}`, { box, line: g.id === 'spatial' ? RIVER.territory : null, points: placed })) {
      placed.push(p); terrFeatures[g.id].push({ type, p });
    }
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

function territory() {
  const ink = { stroke: 'var(--ink)', strokeWidth: 4, roughness: 0.7, bowing: 0.6 };
  let out = `<rect width="${W}" height="${H}" style="fill:var(--sea)"/>`;
  // waves in the sea
  const land = REGIONS.map((g) => base.polys[g.id]);
  const rand = rng('waves');
  for (let i = 0, n = 0; i < 400 && n < 16; i++) {
    const p = [30 + rand() * (W - 60), 25 + rand() * (H - 50)];
    if (land.some((poly) => inside(p, poly) || distToPoly(p, poly) < 40)) continue;
    out += shape('curve', [[[p[0] - 16, p[1]], [p[0] - 8, p[1] - 6], [p[0], p[1]], [p[0] + 8, p[1] - 6], [p[0] + 16, p[1]]]], { stroke: 'var(--blue)', strokeWidth: 3, roughness: 0.5 });
    n++;
  }
  for (const g of REGIONS) {
    const poly = base.polys[g.id];
    out += shape('polygon', [poly], { stroke: 'none', fill: `var(--land-${g.id})`, fillStyle: 'solid', roughness: 0 });
    out += `<g opacity="0.35">${shape('polygon', [poly], { stroke: 'none', fill: `var(--${g.color})`, fillStyle: 'hachure', hachureGap: 16, fillWeight: 2, hachureAngle: -41 + (hash(g.id) % 60), roughness: 1 })}</g>`;
  }
  for (const e of base.edges) out += shape('linearPath', [e.pts], e.coast ? { ...ink, strokeWidth: 6 } : ink);
  out += river(RIVER.territory, ink, true);
  for (const g of REGIONS) for (const f of terrFeatures[g.id]) out += glyph(f.type, f.p, { ...ink, strokeWidth: 3 }, true);
  const lab = { size: 30, css: `${FONT_SANS};font-weight:800;font-size:30px;fill:var(--ink);stroke:var(--paper);stroke-width:7;paint-order:stroke` };
  for (const g of REGIONS) out += label(g, LABEL_POS[g.id], lab);
  return svgDoc('territory', out);
}

// Human: calibrated by contact. firm = walked; sketchy = thin experience; blank = honest gap.
const HUMAN = {
  poetry: { conf: 'sketchy', keep: 0.3, q: true },
  history: { conf: 'sketchy', keep: 0.4 },
  law: { conf: 'blank', keep: 0 },
  spatial: { conf: 'firm', keep: 1 },
  counting: { conf: 'firm', keep: 1 },
  medicine: { conf: 'sketchy', keep: 0.35, q: true },
  regional: { conf: 'firm', keep: 1 },
  everyday: { conf: 'firm', keep: 1 },
  recent: { conf: 'firm', keep: 0.8 },
};
const TRAIL = [['spatial', 'counting', 'everyday', 'regional'], ['everyday', 'recent']];

function human() {
  const INK = {
    firm: { stroke: 'var(--ink)', strokeWidth: 3.5, roughness: 1.3, bowing: 1.2 },
    sketchy: { stroke: 'var(--ink)', strokeWidth: 2.2, roughness: 2.6, bowing: 2, dash: '12 9' },
    blank: { stroke: 'var(--ink)', strokeWidth: 2, roughness: 2.2, dash: '2 11' },
  };
  const rank = { firm: 3, sketchy: 2, blank: 1 };
  let out = `<rect width="${W}" height="${H}" style="fill:var(--parchment)"/>`;
  out += shape('rectangle', [14, 14, W - 28, H - 28], { stroke: 'var(--ink)', strokeWidth: 3, roughness: 1.2 });
  for (const e of base.edges) {
    const best = e.regions.map((id) => HUMAN[id].conf).sort((a, b) => rank[b] - rank[a])[0];
    out += shape('linearPath', [e.pts], INK[best]);
  }
  for (const g of REGIONS) {
    const h = HUMAN[g.id], poly = base.polys[g.id];
    if (h.conf === 'blank') {
      out += `<g opacity="0.5">${shape('polygon', [poly], { stroke: 'none', fill: 'var(--ink)', fillStyle: 'cross-hatch', hachureGap: 14, fillWeight: 1.3, roughness: 2.5 })}</g>`;
      const [cx, cy] = LABEL_POS[g.id];
      out += `<text x="${cx.toFixed(0)}" y="${(cy + 62).toFixed(0)}" text-anchor="middle" style="${FONT_HAND};font-weight:600;font-size:34px;fill:var(--ink);stroke:var(--parchment);stroke-width:8;paint-order:stroke">here be dragons</text>`;
    }
    const feats = terrFeatures[g.id];
    const kept = feats.slice(0, Math.round(feats.length * h.keep));
    const rand = rng(`human-${g.id}`);
    for (const f of kept) {
      const jit = h.conf === 'sketchy' ? 22 : 0; // calibrated error: grows with distance from experience
      out += glyph(f.type, [f.p[0] + (rand() - 0.5) * jit, f.p[1] + (rand() - 0.5) * jit], INK[h.conf], null);
    }
    if (g.id === 'spatial') out += river(RIVER.territory, INK.firm, null);
    if (h.q) {
      const [p] = scatter(poly, 1, `q-${g.id}`, { box: labelBox(g, LABEL_POS[g.id], 38), points: kept.map((f) => f.p) });
      if (p) out += `<text x="${p[0].toFixed(0)}" y="${(p[1] + 18).toFixed(0)}" text-anchor="middle" style="${FONT_HAND};font-weight:700;font-size:56px;fill:var(--ink)">?</text>`;
    }
  }
  // the worn path: the route this person has actually walked
  for (const route of TRAIL) {
    const pts = route.map((id) => { const [x, y] = LABEL_POS[id]; return [x, y + 72]; });
    out += shape('curve', [pts], { stroke: 'var(--red)', strokeWidth: 5, roughness: 0.8, bowing: 0.4, dash: '16 12' });
  }
  const style = (conf) => ({ size: 38, suffix: conf === 'sketchy' ? '?' : conf === 'blank' ? '??' : '', css: `${FONT_HAND};font-weight:${conf === 'firm' ? 700 : 500};font-size:38px;fill:var(--ink);stroke:var(--parchment);stroke-width:6;paint-order:stroke` });
  for (const g of REGIONS) out += label(g, LABEL_POS[g.id], style(HUMAN[g.id].conf));
  return svgDoc('human', out);
}

// Fish: drawn from books. Detail follows source density; every line is equally confident.
const FISH = {
  poetry: { keep: 1 },
  history: { keep: 1 },
  law: { keep: 1 },
  spatial: { invent: [['mountain', 2]] },                 // sparse and wrong
  counting: { invent: [['lake', 3]] },                    // miscounted: territory has 5
  medicine: { keep: 1 },
  regional: { invent: [['tree', 1], ['house', 1]] },      // drifts toward Everyday Cooking
  everyday: { keep: 1 },
  recent: { invent: [['house', 2], ['tree', 2]] },        // filled in from pattern
};

function fish() {
  const geo = regionGeometry('fish');
  const ink = { stroke: 'var(--ink)', strokeWidth: 5, roughness: 0.35, bowing: 0.3 };
  let out = `<rect width="${W}" height="${H}" style="fill:var(--parchment)"/>`;
  out += shape('rectangle', [14, 14, W - 28, H - 28], { ...ink, strokeWidth: 3 });
  for (const e of geo.edges) out += shape('linearPath', [e.pts], ink);
  for (const g of REGIONS) {
    const f = FISH[g.id];
    if (f.keep) for (const t of terrFeatures[g.id]) out += glyph(t.type, t.p, ink, null);
    if (f.invent) {
      const placed = [];
      for (const [type, n] of f.invent) {
        for (const p of scatter(geo.polys[g.id], n, `fish-${g.id}-${type}`, { box: labelBox(g, LABEL_POS[g.id], 38), line: g.id === 'spatial' ? RIVER.fish : null, points: placed })) {
          placed.push(p); out += glyph(type, p, ink, null);
        }
      }
    }
  }
  out += river(RIVER.fish, ink, null);
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
