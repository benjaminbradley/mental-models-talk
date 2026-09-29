# Deck Build Plan (handoff)

Build plan for the talk's slide deck: Reveal.js slides authored in Markdown, published to
GitHub Pages, and presented from the laptop with a **phone remote** that shows speaker notes
and controls the slides. Written for a fresh Claude Code session to execute.

Low volatility once started; retire this doc (or cut it down to a pointer) when the build is
done -- `deck/README.md` becomes the living authoring guide.

## Read first

- `README.md` -- what this repo is, doc map, SSOT/volatility conventions (follow them).
- `slides-outline.md` -- per-slide content; Station 1 is the test content for this build.
- `todo.md` -- timeline. Talk is **Oct 13**; this build should take about one working day.
- `materials.md` -- venue facts (projector, clicker, network access still unknown).

## Goals

1. Slides are plain Markdown files, one per station; adding a slide = editing one file.
2. Speaker notes live in the same Markdown (`Note:`), nowhere else.
3. Present from the laptop (projector) while a phone on the same network shows the
   current notes, the next slide's title, and a timer, and can go next/prev.
4. The same deck publishes to GitHub Pages as a static, shareable version (no remote).
5. Works fully offline at the venue (no CDNs, no runtime downloads).

## Decisions already made (do not reopen without asking Benji)

- **Reveal.js 5.x, vendored**: copy `dist/` and `plugin/` from the npm tarball into
  `deck/vendor/reveal.js/`, pin the exact version in `deck/vendor/reveal.js/VERSION`.
  No CDN (venue may be offline), no bundler / build step.
- **Custom remote, not the official plugins.** `reveal/notes-server` is (believed to be)
  view-only and lightly maintained; `reveal-multiplex` needs a socket server and shows no
  notes. Instead: a small Node server using **only Node built-ins** (http + Server-Sent
  Events + POST) plus at most one tiny dependency for terminal QR codes. Time-box an
  optional 30-min check of notes-server first; switch only if it gives two-way control
  out of the box AND is maintained -- report back either way.
- **Present from the local server, publish to Pages.** A page served over HTTPS (Pages)
  cannot call `http://<laptop-ip>` (mixed content), so the remote exists only when
  presenting locally. The deck's remote code must be inert unless explicitly enabled.
- **Network fallback = phone hotspot.** Venue guest Wi-Fi often isolates clients. The
  remote must work with the laptop joined to the phone's hotspot. Clicker + built-in
  speaker view (`S`) remain the fallback.

## Open decisions (ask Benji at the start, before the phase they block)

- **D1 (blocks phase 2): repo visibility.** GitHub Pages on a free plan requires a public
  repo, which would also publish all planning docs. Options: make the repo public;
  move the deck to a separate public repo; or a paid plan / private Pages. Check the current
  visibility (`gh repo view --json visibility` if `gh` is available) and present the options.
- **D2 (confirm, blocks phase 4 migration): content SSOT.** Proposed: once a station is
  migrated into `deck/slides/`, that file becomes the SSOT for on-screen text and notes;
  that station's Text/Narration/Notes fields in `slides-outline.md` are replaced by a pointer,
  while Visual/intent stays until the artwork is built. Confirm before removing anything
  from `slides-outline.md`.

## Target layout

```
deck/
  index.html            # Reveal init; builds <section>s from the manifest
  manifest.js           # ordered list of station files -- one line per station
  slides/
    00-pre-talk.md
    01-disarm.md        # one file per station, numbered to match slides-outline.md
  theme/talk.css        # placeholder theme now; Red Fish Blue Fish palette later
  remote/
    remote.html         # phone UI
    remote.css
    deck-remote.js      # deck-side client (loaded by index.html, inert unless enabled)
  vendor/reveal.js/     # vendored dist/ + plugin/ + VERSION
  README.md             # authoring guide (conventions below)
tools/
  present.mjs           # static server + remote relay
package.json            # only if a QR dependency is used; scripts: "present"
.github/workflows/pages.yml
```

Images stay in the existing top-level `illustrations/` (do not move or copy them in the repo).
Slides reference them as `illustrations/<file>.png` relative to the deck root; the local
server maps `/illustrations/` to the repo's folder, and the Pages workflow copies it into the
published site.

## Remote protocol

`node tools/present.mjs [--port 8000]`:

- Serves `deck/` at `/` and repo `illustrations/` at `/illustrations/`. Correct MIME types
  (html, js, css, md, png, jpg, svg, json). Markdown files must be fetchable (the Reveal
  markdown plugin loads external files over HTTP).
- On start: generate a random token; detect the LAN IPv4 address(es); print
  - deck URL: `http://localhost:<port>/?remote=<token>` (open on the laptop)
  - phone URL: `http://<lan-ip>:<port>/remote/remote.html?t=<token>` + a terminal QR code.
- Endpoints (all require the token; reject otherwise with 403):
  - `GET /events?t=<token>&role=deck|remote` -- SSE stream. Remotes receive `state` events;
    decks receive `cmd` events. Send a keepalive comment every ~15 s. On a remote connecting,
    immediately send the last cached state so a re-opened / woken phone catches up.
  - `POST /state?t=<token>` -- from the deck. JSON:
    `{h, v, f, index, total, title, nextTitle, notesHtml}`. Server caches it and broadcasts
    to remotes.
  - `POST /cmd?t=<token>` -- from the phone. JSON: `{action: "next"|"prev"|"first"|"last"}`.
    Broadcast to decks.
- Deck side (`deck-remote.js`): only activates if the URL has `?remote=<token>`. Opens
  `EventSource` as `role=deck`; maps `cmd` to `Reveal.next()` / `prev()` / `slide(...)`.
  Posts state on `ready`, `slidechanged`, `fragmentshown`, `fragmenthidden`, using
  `Reveal.getSlideNotes()` (already rendered HTML) and titles from the current / next slide's
  first heading.
- Phone UI: large Next (primary) and Prev buttons reachable one-handed; slide `n / total`;
  next slide title; notes, scrollable and readable at arm's length; elapsed timer with tap-to-reset;
  a clear connected/disconnected indicator. `EventSource` auto-reconnects; also re-sync on
  `visibilitychange`. Note: the Screen Wake Lock API needs a secure context and will NOT
  work over plain http on the LAN -- document "disable auto-lock on the phone" in the
  presenting checklist instead.

## Phases

Each phase ends with its checks passing. `[HUMAN]` checks need Benji (physical phone /
network); prepare everything, then ask him to run them. Ask before each commit; do not push
without approval.

### Phase 1 -- Bootstrap the deck

- [ ] Vendor Reveal.js 5.x (exact version pinned) into `deck/vendor/reveal.js/`.
- [ ] `index.html` + `manifest.js`: build one `<section data-markdown="slides/<file>">` per
      manifest entry BEFORE `Reveal.initialize` (the markdown plugin scans at init). Separator
      options: horizontal `^\r?\n---\r?\n$`, notes `^Note:`. Plugins: Markdown, Notes.
      Config: `hash: true` (reload keeps position), 16:9 size.
- [ ] Minimal `theme/talk.css` (heavy black outlines on light background is the eventual
      direction per `todo.md`; a placeholder is fine now).
- [ ] Port Station 1 ("The real problems", "The contract") and the Pre-talk welcome slide
      from `slides-outline.md` into `slides/00-pre-talk.md` and `slides/01-disarm.md`,
      with notes (see authoring conventions). Use one existing illustration somewhere to
      prove image paths. Do not remove content from `slides-outline.md` yet (D2).
- [ ] `tools/present.mjs` static serving (remote endpoints can come in phase 3).
- Checks: arrows navigate; `S` opens the speaker view with notes and next-slide preview;
  fragments step correctly; reload keeps position; no console errors; works with Wi-Fi off.

### Phase 2 -- Publish to GitHub Pages (after D1)

- [ ] `.github/workflows/pages.yml`: on push to `main`, stage `_site/` = `deck/` +
      `illustrations/`, then `actions/upload-pages-artifact` + `actions/deploy-pages`.
      Publishing `deck/remote/` is fine; it does nothing without the local server.
- [ ] Enable Pages (source: GitHub Actions) -- `[HUMAN]` if repo settings access is needed.
- Checks: Pages URL renders all slides and images; console shows no remote/network errors
  (remote code stays inert without `?remote=`).

### Phase 3 -- Phone remote PoC

- [ ] Implement the protocol above in `present.mjs`, `deck-remote.js`, `remote/remote.html`.
- [ ] Add `"present": "node tools/present.mjs"` to `package.json`.
- [ ] Automated check (you can run this): headless (Playwright/Chromium or plain `curl`)
      -- open the deck URL, POST `/cmd` next, assert the deck advanced and a `state`
      event arrived on a `role=remote` SSE stream; assert 403 without the token.
- Checks `[HUMAN]`:
  - phone Next/Prev moves the laptop deck (including fragments);
  - laptop keyboard / clicker navigation updates the phone within ~1 s;
  - lock and unlock the phone -> it reconnects and shows the current slide;
  - repeat with the laptop on the phone's hotspot;
  - macOS firewall prompt for `node` accepted (document it if it appears).

### Phase 4 -- Authoring ergonomics

- [ ] `deck/README.md`: how to run, add a slide, add a station, conventions below, and a
      presenting checklist (see below).
- [ ] Optional: `tools/new-station.mjs <NN> <slug>` creates the file from a template and
      appends it to `manifest.js`.
- Check: add a dummy slide by editing one file + reload; add a dummy station via manifest;
  then remove both.

### Phase 5 -- Close out

- [ ] Update docs (SSOT: link, don't copy):
  - `README.md` doc list: add `deck/README.md`; mark this plan retired or remove it.
  - `open-questions-and-ideas.md` Q8: mark resolved, pointing at `deck/README.md`.
  - `todo.md`: remove the completed "Slide tech" item (completed items are removed, per its header).
- [ ] Report to Benji: what works, what was verified by whom, any deviations from this plan.

Rehearsal hardening (full run on the projector's extended display, hotspot, fallbacks)
is already scheduled in `todo.md` for the week of Oct 5 -- not part of this build.

## Authoring conventions (seed for `deck/README.md`)

- One file per station, `NN-slug.md`, numbered to match stations in `slides-outline.md`.
- Slides separated by a line containing only `---` with a blank line above and below.
- Speaker notes: everything after a line starting `Note:` until the next separator.
  Map the outline's fields: **Narration** -> notes (key phrases, not a script);
  **Notes** -> notes, after the narration, prefixed `Tone:` / `Timing:` etc. as useful.
- The first heading of each slide is its title (the phone shows the next one).
- Fragments: `<!-- .element: class="fragment" -->` after a line/item.
- Images: `![alt](illustrations/<file>.png)`; always write alt text.
- Slide-level attributes (background, class): `<!-- .slide: data-background-color="..." -->`.

## Presenting checklist (seed for `deck/README.md`)

- Laptop: `caffeinate -d` (or disable sleep); `npm run present`; open the deck URL printed
  on the terminal in the projector-side browser, fullscreen.
- Phone: disable auto-lock; join the same network (hotspot if the venue isolates clients);
  scan the terminal QR.
- Fallbacks, in order: clicker -> `S` speaker view on the laptop -> printed notes
  (`?print-pdf` with `showNotes: 'separate-page'`).

## Out of scope

Final visual theme, artwork creation (separate `todo.md` item), audience-follow mode
(multiplex), poll/QR slides beyond the welcome slide, migrating stations 2+ (content work,
done after the pipeline exists).
