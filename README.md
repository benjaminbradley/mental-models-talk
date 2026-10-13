# Mental Models for Using LLMs — Talk

A ~60-90 minute in-person, participatory talk that teaches durable, generalizable
mental models for working with LLMs and AI agents. The audience ranges from
newcomers to experienced users and explicitly includes people who are skeptical
or actively opposed.

**Win condition: literacy, not conversion.** A better-informed critic is a valid
success. Contested questions (labor, environment, training data, concentration of
power, "does it really understand") are raised, never adjudicated. The primary
failure mode to guard against is facilitator drift into advocacy.

## Documents in this folder

The planning docs live in `planning/`; paths in this section are relative to the repo root.

Each doc owns one level of detail, and each fact lives in exactly one doc (others link
to it). The test for where a sentence belongs: *if the slide were redesigned, would this
still be true?* If not, it belongs further downstream. Upstream docs name concepts; the
deck holds the specifics (examples, wording, slide order, composition).

| Doc | Owns | Changes when... | Leaves out |
|---|---|---|---|
| `planning/presentation-arc.md` | Per station: the shift on each track, felt limit -> method -> new limit, the tension handed to the next station, framing guards, methods | a station's purpose changes, or a method moves between stations | examples, imagery, slide order, status |
| `planning/arc-table.md` | Bird's-eye index: one row per beat, short labels for beat, track shifts, methods, interaction (imagery per station: the index in `planning/metaphor-imagery.md`) | beats are added, removed, reordered, or change track/method | wording longer than a label |
| `planning/metaphor-imagery.md` | The visual vocabulary: what each metaphor stands for, rules that hold everywhere, which station adds what | a metaphor or one of its rules changes | slide layouts, SVG part ids, encoding values, status |
| `deck/slides/*.md` | Everything concrete: on-screen text, examples, slide order, visual composition, speaker notes, hidden slides, placeholders for unbuilt visuals | every revision | n/a |
| `planning/surveys.md` | Entry/exit survey goals, design decisions, question wording, form links, analysis plan | survey questions or settings change | slide placement of the QR codes |
| `planning/take-home.md` | Rules for the participant card: scope, item format, required links | the card's purpose or format rules change | the card's content |
| `planning/take-home.typ` | The participant card itself: the talk's methods and principles as one-line memory-jogging phrases, plus print layout and QR codes | a method or principle is added, removed, or renamed in the talk, or the print format changes | anything not taught in the talk |
| `planning/open-questions-and-ideas.md` | Unresolved design questions (stable IDs Q1, Q2, ...), resolved-decision log, candidate metaphors, unplaced stories | constantly | n/a |
| `planning/todo.md` | Tasks, status, things to verify, by timeline week (talk: Oct 13) | constantly | n/a |
| `planning/materials.md` | Physical and technical materials to bring or provide | rarely | n/a |
| `deck/README.md` | Deck authoring: how to run, conventions, artwork parts, presenting checklist | when conventions change | talk content |

**How a change flows.** Make each edit in the lowest doc that owns it, and update an
upstream doc only if the change alters something at that doc's level:

- New example, wording, or visual detail in a beat -> the deck only.
- Beat added, cut, reordered, or hidden -> the deck + `planning/arc-table.md` (any pending keep/cut decision goes in `planning/todo.md` or open-questions).
- Method moves between stations, or a station's purpose shifts -> the deck + `planning/arc-table.md` + `planning/presentation-arc.md` (+ `planning/take-home.typ` if a method or principle is added, removed, or renamed).
- New metaphor, or a change to what one means -> `planning/metaphor-imagery.md` + the deck.

`handoff.md`, when it exists, is a temporary resume bridge for continuing in a fresh chat;
read it (and this README) first.
`SLIDES-TODO.md`, when it exists, holds large slide items broken out with enough detail for a
fresh session to finish them.

History ("moved from", "replaces") belongs in git, and status ("hidden", "candidate",
"verify names") belongs in the deck or `planning/todo.md`, not in the upstream docs.

## Source material (Google Drive)

- Primary planning doc (multi-tab: Overview/notes, Concepts, Inputs, Questions):
  [LLM Curriculum notes](https://docs.google.com/document/d/1SLUYDZNG0iUk_LF5u4G4xG9ew2siHhOQugmVj9m-eCA/edit)
- Magic/game handoff doc — SECONDARY, take with a grain of salt; it over-relies on
  the prior magic-and-game framing and can pollute context:
  [LLM Mental Models - Participatory Presentation (Seed Doc)](https://docs.google.com/document/d/1qFsvkzzJvPJkaxQlZTAn3Ou4w_B502uDl8lvDE7YWwY/edit)

## Related work

The content model overlaps heavily with the "Learning Through Games" LLM-literacy
game instance. This talk is the *presentation* delivery of the same content; the two
diverge on format and framing, not substance.
