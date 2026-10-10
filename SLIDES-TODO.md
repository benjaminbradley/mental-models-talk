# Slides TODO (temporary)

Large slide items broken out of the Oct 10 change-request pass so a fresh session can finish
them without the original chat. Delete each item when done; delete this file when empty.

Before starting: read `README.md` (doc ownership rules), `deck/README.md` (authoring
conventions, artwork parts, visual-check commands), and `metaphor-imagery.md` (visual
vocabulary rules: cartoon style, heavy black outline, bold colors, nothing ambiguous or purely
decorative, original designs only). All three items are deck-only changes unless noted.

Visual check: serve `deck/` and screenshot the slide (see `deck/README.md` § Visual check).
Find a slide's index with: `grep -n '^# ' deck/slides/*.md` (hidden slides are skipped by
Reveal in the hash numbering).

---

## 1. Station 12 "Who checks the fish?" -- review-ladder art + a new "turtles" slide

File: `deck/slides/12-accountability.md`. The slide currently has a dashed red
`<div class="placeholder">TODO: review-ladder visual ...</div>` above a 4-item fragment list
(self-review / another fish / an adversary / it ends with a person). Its speaker notes already
carry the analogy.

**The analogy (agreed with Benji):** failures in one model's output are invisible to the same
model. A black-and-white artist judging black-and-white art cannot see that it should have had
color. Build it as an inline SVG scene (`<div class="scene wide">`), revealed in step with the
existing list fragments (use matching `data-fragment-index` on SVG `<g class="fragment">`
groups and on the list items):

1. **Self-review:** a B&W artist (grey-only palette: beret, smock, brush) looks at their own B&W
   picture (a simple landscape: sun, hill, tree, drawn only in greys) and gives a thumbs up /
   green check.
2. **Another fish (correlated review):** a *second* B&W artist (same grey palette, slightly
   different hat) judges the same picture: also a check. Shared blind spot.
3. **An adversary (independent review):** a rainbow artist (the only colorful figure; colored
   beret/palette) looks at the same B&W picture and points at it with a "?" or a red flag:
   it notices the missing color.
4. **It ends with a person:** a plain human figure (not an artist) at the end of the row, holding
   the final pen / signing. Keep it simple; the deck currently uses emoji 🧑 for people
   elsewhere (station 9) -- an SVG figure in the house style is preferred if it reads clearly.

Constraints: do not draw it as a literal ladder (todo history: "not a literal ladder"); a
left-to-right row works. The fish itself can stand in for "the artist" in panels 1-2 if that
reads better (the fish wearing a beret), since panels 1-2 are "the fish checks itself" and
"another fish checks it" -- decide by sketching both and comparing; keep whichever is less
ambiguous. Colors: use theme tokens from `deck/theme/talk.css` `:root` via
`style="fill: var(--...)"` (never `fill=`). Greys can be literal hex (the deck already uses
`#d9dde3`, `#5b6170`).

Update the speaker notes to match the panels (they already describe B&W vs color artists; the
original wording, from open-questions-and-ideas.md "The B&W artist review analogy": a color
artist judging a range of pictures, both color and B&W, is a genuinely independent reviewer).

**New slide right after it: "Turtles all the way down"** (title suggestion; Benji's phrase).
Show a review regress as a stack:

```
Do task X according to these criteria
  Check step 1 against rubric Y
    Check step 2 against rubric Z
      Check the checker against rubric ...
        ...
```

Visual: a stack of cartoon turtles (original design, generic turtles -- not any known
character), each shell labeled with one line above (fragments, building up from the top or
bottom), and at the very bottom, instead of another turtle, a person: lede "It ends with a
person." Speaker notes: every automated check is itself a task someone specified; each rubric
is written by someone; at some point a human decides the checking is good enough, and that
human is accountable. Connects to the existing note "When judgment itself is automated, the
signals that survive are the ones costly to fake: provenance, track record, exposure to
consequences" -- move that sentence from "Who checks the fish?" notes to this slide.

Upstream (README § Documents rules): a new metaphor -> add rows to `metaphor-imagery.md`
vocabulary table ("B&W artists vs. a rainbow artist" = correlated vs independent review,
station 12; "Turtles" = the review regress, station 12) and to its § Image index by station
row 12. A new beat -> add a row to `arc-table.md` after "Who checks the fish? (review ladder)":
`| 12 | Turtles all the way down (the regress) | | | | |`. Then remove the
"review-ladder visual" line from `todo.md` § Image creation.

## 2. Station 3 "How the fish got this way" -- a human rater holding the paddles (RLHF)

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

## 3. Station 1 "The real problems" -- a literal cardboard box, then "driver's ed"

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
