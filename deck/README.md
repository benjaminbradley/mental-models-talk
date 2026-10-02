# Deck authoring guide

Reveal.js 5.x slides written in Markdown, one file per station. Vendored under
`vendor/reveal.js/` (version in `VERSION`; committed on purpose so the deck works offline
and needs no build step). Published to GitHub Pages by `.github/workflows/pages.yml`
(temporarily publishing `placeholder/` instead until the slides are complete; see `todo.md`).

## Run

```bash
make present       # installs npm deps if needed, serves deck/ on port 8765 (PORT=...), prints the URLs
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
make station NN=02 SLUG=demystify
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
  bowl layers, rectangular tank layers, ...). Layer order for a container scene: `*-back`,
  `*-water`, then contents (fish, messages, notes), then `*-front`. Tubes are a thick ink path
  with a thinner `--rock` path on top; attachments are white rounded boxes with an emoji icon. `index.html` inlines it at load, so any slide can place a part with
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
  `.scene:has(.wake-cue.visible) ...` (see the goldfish rules in `theme/talk.css`). Poisoned water
  works the same way: a `.murk-cue` fragment turns `--water` to `--murk` on an `svg.poisonable`.
- **Fish variants:** `fish-uniform` (company cap and badge: someone else's fish) and
  `fish-face-goofy` (a nerfed version; use instead of `fish-eyes-open`) layer on `fish-body` at the
  same x/y/width/height. A scene recolors one fish with an inline `style="--fish: ...; --fish-deep: ..."`
  on its `.goldfish` group.
- **Slide markup:** wrap the SVG in `<div class="scene">` with no blank lines inside
  (a blank line ends the HTML block in Markdown). Give the `<svg>` `role="img"` and an
  `aria-label`.
- **Whole-file artwork:** `<div data-svg="art/maps/human.svg" data-label="alt text"></div>`
  inlines an SVG file after Reveal starts (inline, not `<img>`, so it can use the theme's
  colors and fonts). Add `data-zoom="<region id>"` (or several, comma-separated, for their union) to crop a map to one region (ids in
  `../tools/build-maps.mjs`; the per-case walkthrough images are these crops).
- **Maps (station 4):** `art/maps/{territory,human,fish}.svg` are generated. Edit
  `../tools/build-maps.mjs` (region shapes, features, per-map ink profiles), then run
  `make maps` from the repo root.
  Output is deterministic, so diffs show only real changes. Colors are `--land-*`, `--sea`,
  `--parchment` in `theme/talk.css`; recoloring needs no rebuild.
- **Fonts:** Caveat (handwriting, map labels) is vendored in `vendor/fonts/` (SIL OFL).
- **Slide-to-slide motion:** `<!-- .slide: data-auto-animate -->` on consecutive slides plus a
  matching `data-id` on the element (e.g. the three-map reveal) slides it into its new place.
- **Placeholders:** missing artwork or captures go in `<div class="placeholder">TODO: what goes
  here</div>` (a dashed red box). `grep -rn 'class="placeholder"' deck/slides` lists what is missing.
- **Screenshots:** wrap captures in `<div class="shots">` with one `<figure>` (img + optional
  `<figcaption>`) per capture; add `tall` for a single tall capture. `<div class="overlay fragment">`
  drops an image in over the slide (e.g. a full transcript behind a trimmed one).
- **Technical terms:** `<span class="term">pretraining</span>` puts the real term beside the
  metaphor (yellow monospace chip); use it everywhere a metaphor stands for a real concept.
- **Simulated chats:** `<div class="chat">` with `<p class="user">` / `<p class="fish">` bubbles
  (`<span class="who">` for the speaker); `<p class="new-chat">` for a fresh conversation.
- **Ledes with an inline fragment:** `<!-- .element: class="..." -->` attaches to the element just
  before it, so after an inline `<span class="fragment">` it styles the span, not the line. Write
  the paragraph as HTML instead: `<p class="lede">Text. <span class="fragment">More.</span></p>`.
- **Layouts:** `<div class="stack">` stacks wide captures vertically (each capped in height);
  `<div class="tiles">` is a row of bordered tiles (image + label + term); `<div class="trio">` is
  three answer boxes for an exercise; `<div class="mock">` is a generic mock UI card (memory list,
  toggles, dials); `<!-- .slide: class="center-slide" -->` centers a text-only slide.
- **QR codes:** `make qr URL=... OUT=deck/art/qr-<name>.svg` writes a static SVG; commit it and
  place it with `<img>` (closing slide: `art/qr-slides.svg`).
- **Hidden slides:** `<!-- .slide: data-visibility="hidden" -->` keeps a slide in the file but out
  of the deck (available for anything pending a keep/cut decision).

## Visual check

Slides are flat (horizontal): hash `#/N` is the Nth slide overall (0-based), `#/N/0/F` shows
fragments up to F. Serve `deck/` (`python3 -m http.server 8799` from `deck/`) and screenshot with
headless Chrome (one at a time; parallel runs sometimes render blank):

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars --window-size=1920,1080 --virtual-time-budget=4000 --screenshot=out.png "http://localhost:8799/index.html#/13"
```

## Presenting checklist

- Laptop: `caffeinate -d` (or disable sleep); `make present`; open the deck URL in the
  projector-side browser, fullscreen. Accept the macOS firewall prompt for `node` the first time.
- Phone: disable auto-lock (the wake-lock API doesn't work over plain http); join the same
  network (use the phone's hotspot if the venue isolates clients); scan the terminal QR.
- Port 8765 is used by default because 8000 is taken on this machine (Colima). If the phone
  gets a strange 404 while the laptop works, check `lsof -nP -iTCP:<port> -sTCP:LISTEN` for another listener.
- Fallbacks, in order: clicker -> `S` speaker view on the laptop -> printed notes
  (`?print-pdf` with `showNotes: 'separate-page'`).
