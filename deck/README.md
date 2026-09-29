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

## Presenting checklist

- Laptop: `caffeinate -d` (or disable sleep); `npm run present`; open the deck URL in the
  projector-side browser, fullscreen. Accept the macOS firewall prompt for `node` the first time.
- Phone: disable auto-lock (the wake-lock API doesn't work over plain http); join the same
  network (use the phone's hotspot if the venue isolates clients); scan the terminal QR.
- Port 8765 is used by default because 8000 is taken on this machine (Colima). If the phone
  gets a strange 404 while the laptop works, check `lsof -nP -iTCP:<port> -sTCP:LISTEN` for another listener.
- Fallbacks, in order: clicker -> `S` speaker view on the laptop -> printed notes
  (`?print-pdf` with `showNotes: 'separate-page'`).
