# Slides TODO (temporary)

Large slide items broken out of the Oct 10 change-request pass so a fresh session can finish
them without the original chat. Delete each item when done; delete this file when empty.

Before starting: read `README.md` (doc ownership rules), `deck/README.md` (authoring
conventions, artwork parts, visual-check commands), and `metaphor-imagery.md` (visual
vocabulary rules: cartoon style, heavy black outline, bold colors, nothing ambiguous or purely
decorative, original designs only). Both items are deck-only changes unless noted.

Visual check: serve `deck/` and screenshot the slide (see `deck/README.md` § Visual check).
Find a slide's index with: `grep -n '^# ' deck/slides/*.md` (hidden slides are skipped by
Reveal in the hash numbering).

---

## 1. Station 3 "How the fish got this way" -- a human rater holding the paddles (RLHF)

File: `deck/slides/03-meet-the-fish.md`, slide "How the fish got this way", second `<figure>`
(svg viewBox 0 0 600 470): today the fish is at left and two reply bubbles are stacked
vertically, each with a score paddle at the right (green check on top, red cross below), with
no person. The "HF" (human feedback) part of RLHF is invisible.

Change: show **a person between the good/bad paddles**, holding one in each hand. Benji
suggested switching to a horizontal layout: e.g. the fish at left, the two candidate replies
side by side (reply A, reply B) across the top, and the person below/between them raising the
green check under A and the red cross under B (this also matches how preference tuning really
works: comparing two replies). Keep the house style (heavy ink outline, theme tokens). If the
layout needs a different viewBox, keep the figure the same rendered size as its sibling
(the library figure, same `.shots` row).

Apply the same redraw to the step-2 panel in `deck/slides/07-first-fittings.md` slide
"Training, step 3" (it duplicates the station 3 drawing at smaller scale), so the callback
matches. The station 10 "Four sources of bias" tile (paddles only, `What raters rewarded`) can
stay paddles-only, or add the same person if it still reads at tile size -- judgment call.

Upstream: `metaphor-imagery.md` vocabulary row "Practice conversations scored with check/cross
paddles" -> "...paddles held by a human rater". No other doc changes.

## 2. Station 1 "The real problems" -- a literal cardboard box, then "driver's ed"

File: `deck/slides/01-disarm.md` slide "The real problems"; CSS in `deck/theme/talk.css`
§ "Station 1 harms" (`.harms`, `section:has(.box-cue.visible) .harms` currently scales the tile
row into a grey rounded rectangle in the top-right corner).

Wanted:
1. Click per harm (unchanged).
2. Next click (`box-cue`): the harms shrink into the top-right corner **into an open cardboard
   box** (brown box, flaps open, drawn as inline SVG in the house style -- heavy ink outline,
   corrugated-cardboard brown; add a `--cardboard` color token in `:root` if needed). The tiles
   should look like they went *into* the box (e.g. the box is drawn in front of the shrunken
   tiles, tiles peeking over the rim).
3. New click (`box-close-cue`, a new empty cue fragment): the flaps close (CSS transform on the
   flap `<g>`s, toggled by `section:has(.box-close-cue.visible)`), and a lede appears:
   **"This is driver's ed, not Toyotathon."** (plain text; Toyotathon is a plain-text
   reference to a car sales event -- no logo artwork). The speaker notes already have the
   driving-lesson metaphor ("cars are in accidents and pollute the environment every day; this
   is a driving lesson"); rewrite them to deliver it with this line: we are learning to drive
   safely, not selling cars.

Keep the box persistent only on this slide (persisting it onto later slides is a separate
low-priority enhancement in `todo.md`). Update the speaker-notes click sequence.

Upstream: new on-screen metaphor -> `metaphor-imagery.md` vocabulary row:
`| Cardboard box, closed | the real problems: named, set aside, not adjudicated | 1 |` and
`| Driver's ed, not a sales event | literacy, not conversion | 1 |`, plus § Image index by
station row for station 1.
