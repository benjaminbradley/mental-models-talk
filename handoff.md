# Handoff: deck assembly (Oct 1)

Resume bridge for finishing the initial slide deck. Read `README.md`, `deck/README.md` and
this file first. Delete this file once chunk C is done and the deck is complete.

## Plan

Build every station into `deck/slides/`, move each station's Text/Narration/Notes out of
`slides-outline.md` (leaving Visual/Animation + a pointer), and use `<div class="placeholder">TODO: ...</div>`
for anything not yet captured or drawn. Iteration on everything follows once Benji has seen it.

- **Chunk A (done):** placeholder style; art-lab removed; stations 2-5 built; station 4
  screenshots moved into `deck/illustrations/`.
- **Chunk B (next):** stations 6-8. New bowl parts in `deck/art/parts.svg` (tubes, notepad,
  alarm clock, recipe cards, tank, camera/ears, microphone), cooking metaphor, instruction
  stack, MCP diagram, citations ladder (3 captures in `illustrations/citations-ladder--*`),
  strawberry (`illustrations/jaggedness-B1-letters.png`; script output not captured).
  The bowl prototype (bowl-back / bowl-water / bowl-front + waterline label) was on the
  deleted art-lab slide; see git history (`deck/slides/art-lab.md` before this commit).
- **Chunk C:** stations 9-13 + closing slide. Diagrams and HTML/CSS mockups; poisoned water
  reuses chunk B parts. Closing slide: slides URL + QR (add the `qrcode` npm package as a dev
  dependency and commit a static SVG) and the contact form https://wegeekout.com/contact-me/
  (never the email address on anything published). Then the final sweep: outline pointers,
  `metaphor-imagery.md` status, `todo.md`, delete this file.

## Decisions from Benji (this session)

- Cheap/easy artwork: build it. Undefined artwork: gather Benji's preferences first (list
  sent in chat on Oct 1; record the answers below when they arrive).
- Describe-and-draw (Q3): built, hidden with `data-visibility="hidden"`.
- Knowledge elicitation: trimmed capture on the slide; the full version drops in as a fragment.
- Recent Events: World Series (older local model via ollama, a true hallucination) first, then
  World Cup (Haiku: starts to confabulate, notices the date, pushes toward web search).
- Cooking: French omelette = well documented; "Bradley meat pie" = family recipe (stands in for
  regional cuisine).
- Walkthrough order: map comparison first, then the capture (default; easy to flip).

## Artwork preferences (fill in from Benji's answers)

_Pending._

## Working notes

- Slides are flat (horizontal): hash `#/N` is the Nth visible slide overall; fragments are
  `#/N/0/F`. Hidden slides are not counted.
- Visual check: serve `deck/` (e.g. `python3 -m http.server 8799` from `deck/`) and screenshot
  with headless Chrome:
  `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars --window-size=1920,1080 --virtual-time-budget=4000 --screenshot=out.png "http://localhost:8799/index.html#/13"`
