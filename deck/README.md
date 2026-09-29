# Deck authoring guide

Reveal.js 5.x slides written in Markdown, one file per station. Vendored under
`vendor/reveal.js/` (version in `VERSION`; committed on purpose so the deck works offline
and needs no build step). Published to GitHub Pages by `.github/workflows/pages.yml`.

## Run

```bash
npm install        # once (only needed for the terminal QR code)
npm run present    # serves deck/ on port 8765 and prints the URLs
```

Open the printed **deck URL** (it carries `?remote=<token>`) on the laptop. Scan the QR
code with the phone for the remote: notes, next-slide title, timer, Prev/Next. The token
changes each run. Without `?remote=`, the deck is a plain static site and the remote code
never loads (this is how it runs on Pages, where no remote exists).

## Add a slide

Edit the station file in `slides/`. Add a line containing only `---` (blank line above
and below) and write the next slide.

## Add a station

```bash
node tools/new-station.mjs 02 demystify
```

This creates `slides/02-demystify.md` from a template and appends it to `manifest.js`
(the ordered list of files). Number files to match stations in `../slides-outline.md`.

## Conventions

- **Source of truth:** once a station lives here, this file owns its on-screen text and
  speaker notes. `../slides-outline.md` keeps the Visual/intent and points here.
- The first heading of each slide is its title (the phone shows the next slide's title).
- Speaker notes: everything after a line starting `Note:` until the next `---`.
  Narration goes first (key phrases, not a script), then `Tone:` / `Timing:` lines as useful.
- Fragments: `<!-- .element: class="fragment" -->` at the end of a line or list item.
- Images: `![alt](illustrations/<file>.png)`; always write alt text. Move the file from the
  repo's top-level `illustrations/` into `deck/illustrations/` (`git mv`) when a slide uses it.
- Slide attributes: `<!-- .slide: data-background-color="..." -->`.
- Theme: `theme/talk.css` (placeholder for now).

## Artwork

Decision and rationale: `../open-questions-and-ideas.md` Q16. Specs for what each image
shows: `../metaphor-imagery.md`.

- **Parts library:** `art/parts.svg` holds reusable `<symbol>`s (fish body, eye states,
  bowl layers, ...). `index.html` inlines it at load, so any slide can place a part with
  `<use href="#part-id" x=".." y=".." width=".." height=".."/>`.
- **Palette:** tokens in `theme/talk.css` `:root`. Raw colors (`--orange`, `--sky`, ...)
  feed semantic roles (`--fish`, `--water`, `--glass`, ...); artwork uses the roles. Parts
  set colors via `style="fill: var(--fish)"` (not the `fill=` attribute, which does not
  reliably accept `var()`). Custom properties inherit into `<use>`, so a scene recolors a
  part by setting the role on an ancestor.
- **States:** a part that changes (eyes, water) is its own symbol sharing its parent's
  viewBox, so layers stack exactly at the same x/y/width/height; CSS toggles them. CSS
  selectors cannot reach *inside* a `<use>` copy, so split a part or pass a custom property
  (e.g. `--water-drop` lowers the water).
- **Timing on clicks:** put `class="fragment"` on an SVG `<g>` to pop it in. For a state
  change rather than an appearance, add an empty cue fragment
  (`<span class="fragment wake-cue"></span>`) and style with
  `.scene:has(.wake-cue.visible) ...` (see the goldfish rules in `theme/talk.css`).
- **Slide markup:** wrap the SVG in `<div class="scene">` with no blank lines inside
  (a blank line ends the HTML block in Markdown). Give the `<svg>` `role="img"` and an
  `aria-label`.
- **Whole-file artwork:** `<div data-svg="art/maps/human.svg" data-label="alt text"></div>`
  inlines an SVG file after Reveal starts (inline, not `<img>`, so it can use the theme's
  colors and fonts). Add `data-zoom="<region id>"` to crop a map to one region (ids in
  `../tools/build-maps.mjs`; the per-case walkthrough images are these crops).
- **Maps (station 4):** `art/maps/{territory,human,fish}.svg` are generated. Edit
  `../tools/build-maps.mjs` (region shapes, features, per-map ink profiles), then run
  `node tools/build-maps.mjs` from the repo root (needs `npm install` once for rough.js).
  Output is deterministic, so diffs show only real changes. Colors are `--land-*`, `--sea`,
  `--parchment` in `theme/talk.css`; recoloring needs no rebuild.
- **Fonts:** Caveat (handwriting, map labels) is vendored in `vendor/fonts/` (SIL OFL).
- **Slide-to-slide motion:** `<!-- .slide: data-auto-animate -->` on consecutive slides plus a
  matching `data-id` on the element (e.g. the three-map reveal) slides it into its new place.
- **Prototype / sandbox:** `slides/art-lab.md` (last in `manifest.js`). Remove it from the
  manifest before presenting.

## Presenting checklist

- Laptop: `caffeinate -d` (or disable sleep); `npm run present`; open the deck URL in the
  projector-side browser, fullscreen. Accept the macOS firewall prompt for `node` the first time.
- Phone: disable auto-lock (the wake-lock API doesn't work over plain http); join the same
  network (use the phone's hotspot if the venue isolates clients); scan the terminal QR.
- Port 8765 is used by default because 8000 is taken on this machine (Colima). If the phone
  gets a strange 404 while the laptop works, check `lsof -nP -iTCP:<port> -sTCP:LISTEN` for another listener.
- Fallbacks, in order: clicker -> `S` speaker view on the laptop -> printed notes
  (`?print-pdf` with `showNotes: 'separate-page'`).
