# Handoff: deck assembly, chunk C + iteration (Oct 1)

Resume bridge for finishing the initial slide deck. Read `README.md`, `deck/README.md` and
this file first. Delete this file once chunk C and the final sweep are done.

## Where things stand

Stations 0-8 are built in `deck/slides/` (listed in `deck/manifest.js`), and their
Text/Narration/Notes have moved out of `slides-outline.md` (which keeps Visual/Animation + a
pointer). Missing captures and artwork are `<div class="placeholder">TODO: ...</div>` boxes;
`grep -rn 'class="placeholder"' deck/slides` lists them. Every built slide has been checked in
headless-Chrome screenshots only; nothing has been reviewed on a projector yet.

- **Chunk A (done):** stations 1-5, revised after Benji's first review (emoji harm tiles,
  emoji gradient, who-learns-whose-language, awake intro fish, training-story art with `.term`
  chips, sleep beat, no-memory demo slot, describe-and-draw shown, pink elephant as a chat after
  the levers, gemma Bradley confabulation).
- **Chunk B (done):** stations 6-8. New parts `tank-back` / `tank-water` / `tank-front` in
  `deck/art/parts.svg`; bowl/tank scenes are inline SVG in the slide files. Station 6: the bowl
  remembers the conversation, fish-or-bowl (round bowl / lidded aquarium / travel jar), context
  window, notes on the glass, a pre-set-up tank (candidate), cat food. Station 7: quizzical fish,
  training step 3, web search, three citation slides (captures) behind a placeholder citations
  visual, the notepad + illustrative memory mock. Station 8: letter-count demo, the fish acts +
  operator checklist, proprietary vs. MCP fittings, alarm clock + recipe cards, the full tank
  with mic/camera conversion boxes.
- **Chunk C (next):** stations 9-13 + the closing slide, then the final sweep (below).

## Chunk C: what to build

Specs live in their owning docs: `metaphor-imagery.md` (artwork), `arc-table.md` (beats),
`slides-outline.md` stations 9-13 (per-slide Visual/Text/Narration/Notes still there, to be
migrated). Benji's choices, in short:

- **Station 9:** hosting = four-step reveal (frontier, both tank and fish in a corporate cloud
  with several vendor names as plain text and an uncuttable cord from you -> your tank + their
  fish in a company uniform -> your tank + your fish in a padlocked private cloud -> everything
  on a beefy local PC drawn below the clouds). Poisoned water: murk via `--murk` (`--water`
  transitions), effect icons ☢️ destruction, ✉️ exfiltration (leaving through a tube), 💣 tucked
  into the notepad (sleeper). Enforcement = a wall (architecture) vs. a "please keep out" sign
  (guideline); the policy layer is dropped everywhere. Recovery stories:
  `illustrations/blast-radius--deleted-{db,homedir}.png` + `deck/illustrations/blast-radius--deleted-files.png`.
  Mailbox trifecta exercise; training-data opt-out (autocomplete screenshot not captured).
- **Station 10:** refusal-as-product = a settings panel with several dials (hacking, chemistry,
  politics, ...); bias = four mechanisms (books, ✓/✗ paddles, vendor fence, 🎭 masks for
  emergent effects); guardrail probe = `illustrations/guardrail-station10.headline-{a,b}.png` in
  front, `illustrations/guardrail--deepseek-refusal.png` dimmed behind; instability = a row of
  versioned fish, one in the middle with goofy eyes (a nerf), plus captures
  `illustrations/unstable--{fable-suspended,silently-restricted-acct}.png`.
- **Station 11:** intention = `illustrations/intention--macbook.jpg` vs.
  `illustrations/intention--cyberdeck-rpimag.png`; sycophancy + atrophy (reuse the fish).
- **Station 12:** "Would you sign it?" cover page and the drafts-folder mockup are fully specified
  in `slides-outline.md` (build as HTML/CSS mockups); review ladder = placeholder (not a literal
  ladder); blame image = "the dog ate my homework."
- **Station 13:** what would change your mind; exit poll (placeholder QR, polls not designed);
  coda = the station 2 gradient returns in full treatment (no input yet: use a richer version of
  the emoji gradient and flag it for review).
- **Closing slide:** slides URL https://benjaminbradley.github.io/mental-models-talk/ + a QR code
  (add the `qrcode` npm package as a dev dependency, generate a static SVG once and commit it) and
  the contact form https://wegeekout.com/contact-me/. Never put the email address on anything
  published (it belongs on the printed take-home card only).

## Final sweep (after chunk C)

- `slides-outline.md`: every station a pointer + Visual/Animation; contact section stays.
- `metaphor-imagery.md` imagery status; `todo.md` (remove done items, add captures still
  missing); `deck/README.md` for any new conventions.
- Do NOT switch Pages from `placeholder/` to `deck/`; that is a separate, optional todo.
- Delete this file.

## Iteration (after the deck is complete)

Benji expects to review everything and iterate. Open items already known:
- Projector review: fish/bowl outline weight and palette, map legibility, screenshot legibility
  (the 3-up knowledge-elicitation captures are small).
- Emoji are stand-ins in several places (station 1 harms, attachments, mic/camera); the
  attachments should probably become drawn parts.
- Placeholders awaiting captures: see `todo.md` § Pre-capture demos & transcripts.
- Placeholders awaiting design: citations visual (7), review-ladder visual (12), back-connection
  "interface the fish sees" (8), describe-and-draw figure (4, still pending keep/cut Q3).
- The station 1 harms box doesn't persist onto later slides (todo § Enhancements).
- Timing: the deck is now much longer than the outline (stations 4 and 6-8 especially); the
  week-of-Oct-5 run-through decides cuts (`todo.md`).

## Decisions from Benji worth keeping in mind

- Technical terms appear beside their metaphor in the `.term` chip style.
- Every fitting is a tool the fish initiates (no inward arrows); everything attaches to the
  tank so water = context holds.
- Describe-and-draw is shown for now (pending Q3). Walkthrough order: map first, then capture.
- Cat food replaces the cooking/salt metaphor; the policy layer is gone from the enforcement
  hierarchy.

## Working notes

- Slides are flat (horizontal): hash `#/N` is the Nth visible slide overall (0-based); fragments
  are `#/N/0/F`. Stations 0-8 currently span slides 0-51 (station 8 ends at 51).
- Visual check: serve `deck/` (`python3 -m http.server 8799` from `deck/`) and screenshot with
  headless Chrome:
  `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars --window-size=1920,1080 --virtual-time-budget=4000 --screenshot=out.png "http://localhost:8799/index.html#/13"`
- In slide Markdown, keep HTML blocks free of blank lines (a blank line ends the block).
