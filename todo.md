# To-Do

Actionable tasks (verbs). Design *questions* and their options live in
`open-questions-and-ideas.md` as stable IDs (Q1, Q2, ...); a task that is really a
decision references the ID instead of restating it. Candidate metaphors and content ideas
also live there. The take-home card content lives in `take-home.md`.

Sections are the timeline weeks (talk: Oct 13). "Now" = anything before the first named week.

Completed items are REMOVED (not marked complete) - tracked by git history.

## Now - design & decisions, begin assembly (imagery + assets)

### Finish the slides

#### Ideas and change requests


#### Design & spec work

Image specs for all metaphors: `metaphor-imagery.md` (single source of truth).

- [ ] Decide keep/cut for **describe-and-draw** ("B plays the fish", station 4; **Q3**
      reopened). If kept: find & test the figure. Criteria: spatial relationships (not artistic skill), dignified for
      adults, honest ambiguity (partners disagree about the result and both have a point).
      Leading candidate: simple architectural floor plan. Maybe 2 samples - overhead view vs PoV.
- [ ] Prototype the **decomposition demonstration** for station 5 (**Q11** resolved as a
      prototyping task). Leading candidate: "plan a team offsite" monolithic prompt vs.
      decomposed sub-tasks.

#### Pre-capture demos & transcripts

- [ ] Station 3 "then" poetry: find a pre-2020-ish example of a computer's bad poem.
- [ ] Station 3 "now" poetry: capture the poem from
      https://www.reddit.com/r/ClaudeAI/comments/1gn4u8y/i_hade_a_nice_night_with_claude_and_asked_for_a/
      and replace the slide link with the permalink to the published comment.
- [ ] Station 4 "it doesn't remember you": two one-shot local-model calls (ollama):
      introduce yourself, then "what's my name?"
- [ ] Station 4 specification demo: plain vs. specified sushi-restaurant prompts.
- [ ] Station 8 letter count: capture the follow-up ("write a script to count them") with the
      script and its output, same "Suffering Succotash" question.
- [ ] Station 7 memory: replace the illustrative "Saved memories" mock entries with the real
      resume-inflation example (or a capture of it).
- [ ] Prepare comparison demos
   - [ ] reliability-levers side-by-side: same query with/without thinking instructions (station 4)

#### Image creation

- [ ] Review the goldfish artwork (station 3, `deck/slides/03-meet-the-fish.md`; approach: Q16):
      fish look, palette, outline weight, and sleep/wake motion -- ideally on a projector.
      Adjust palette tokens in `deck/theme/talk.css`.
- [ ] Review the maps (station 4, `deck/slides/04-talking-to-the-fish.md`; encoding summarized
      in `metaphor-imagery.md` § Prototype encoding): legibility of the three-up view on the
      projector, whether each jaggedness case reads on its zoom, label/landmark overlaps.
- [ ] Review the bowl/tank artwork (stations 6-8): bowl variants, sticky notes, cat food,
      tubes and attachments (emoji icons are stand-ins), the MCP fittings, the full tank with
      mic/camera conversion boxes.
- [ ] Create images
   - [ ] confirm case ordering and map-first (current default in the deck) vs. example-first
   - [ ] citations visual (station 7; not a literal ladder) -- placeholder in the deck
   - [ ] tubes connecting at the back of the tank: show the interface the fish sees

#### Full review

- [ ] Full review pass on `slides-outline.md` (after all above are done)

### Other pre-talk work

- [ ] Design entry & exit polls (Google Forms + QR codes; measure model accuracy / stance
      movement, not satisfaction). Phone-based (projector confirmed, QR on screen works).
- [ ] Draft the one-page takeaway card (source: `take-home.md`).

### Enhancements (low priority)

- [ ] Station 1 harms: replace the emoji tiles with photos (datacenter, water, labor,
      provenance, power).
- [ ] Station 1 harms: keep the closed box visible in the corner on later slides (persistent
      reminder), not only on its own slide.

## Week of Sep 28 - Oct 2 - assembly complete

- [ ] Assemble the full slideshow with speaker notes per slide (Q8).
- [ ] Review for audience interaction -- add intro question at the beginning to initiate pairs.
- [ ] Print the one-page takeaway card.
- [ ] Lock the materials list (`materials.md`).

## Week of Oct 5 - practice

- [ ] Review final logistics -- slide control remote? Adapter for projector (USB-C)?
- [ ] Presentation prep: test the phone remote with the laptop on the phone's hotspot, on the projector's extended display, and accept the macOS firewall prompt for `node` (see `deck/README.md`). Fragments and phone lock/unlock are already verified.
- [ ] Optional, once the slides are complete: publish the deck to GitHub Pages (https://benjaminbradley.github.io/mental-models-talk/, already on the take-home card and closing slide). Pages currently serves a placeholder page: in `.github/workflows/pages.yml` switch `path: placeholder` back to `path: deck` and delete `placeholder/`, then check the Pages URL for slides, images and no console errors.
- [ ] Full run-through for real timing
   - [ ] measure overall timing
   - [ ] compare estimated timing vs. actual timing
   - [ ] assess whether stations 7/8/9 compress (**Q6**)
   - [ ] identify any trims needed
   - [ ] assess station 4 density -- after the reorder it carries the (pending) exercise, four technique families, and the map/territory reveal + walkthrough; confirm it fits or identify what to defer
   - [ ] re-check the 45-minute cut (`presentation-arc.md`) after the reorder
- [ ] Rehearse; refine speaker notes; adjust pacing.
- [ ] Get wegeekout.com ready for follow-up?

## Oct 13 - deliver

- [ ] Deliver the talk. Entry poll at the open, exit poll at the close.
- [ ] Bring: USB-C adapter (in case venue's is flaky), slide control remote, printed materials.

## After initial presentation

- [ ] Review entry/exit polls, summarize for notes
- [ ] Capture feedback / lessons
- [ ] station 11 alt example -- default vs custom
- [ ] consider a reusable recording or write-up -- or publish to GitHub Pages?
  - [ ] clean up repo - move planning docs into a doc/ subdir with its own README describing the planning/creation process - check github history for document creation order - relative timeline is more important than specific timestamps.
  - [ ] main README should link to the presentation on github pages, and on credits page(?), presentation should link back to the github repo
  - [ ] move most of CLAUDE.md contents to AGENTS.md - leave claude-specific + @AGENTS loader in CLAUDE
- [ ] re-imagine the talk experience as an improv comedy show: what would it look like to map the step1/step2 features in the presentation's narrative into an analogous setup/reveal joke rhythm? would a scripted show make more sense than improv?

## Organizer reply (EFF-Austin, received)

Venue & equipment:
- Projector: yes, HDMI + USB-C (with adapter). Can be finicky but organizer is practiced.
- Wireless mic: yes, available on-site.
- Tables: yes, writable surfaces -- participants can write at them.

Audience:
- Size: 10-30 (varies month to month; at least ~10 since new space, up to ~30).
- Politically diverse across the spectrum. Smart people, hard questions.
- Strong feelings about AI in both directions -- morally opposed AND uncritical enthusiasts
  are both possible. Most attendees are nuanced.
- Small groups / pair work: encouraged, done regularly.

Format:
- Organizer does EFF-Austin intro (what EFF-Austin is, upcoming events, news), then
  introduces Benji's bio and hands off.
- Audience participation / interaction strongly encouraged.

Note: organizer described the talk as "educating people on how to use AI as a coding tool"
-- the actual scope is broader (mental models for working with LLMs generally). Worth
clarifying in pre-talk coordination, or the intro will set wrong expectations.
