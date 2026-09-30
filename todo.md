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

- Models (fish) need to be taught how to use tools (tank attachments)

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

- [ ] Prepare comparison demos
   - [ ] plain vs. role vs. knowledge-domain prompts (station 4)
   - [ ] reliability-levers side-by-side: same query with/without thinking instructions (station 4)

#### Image creation

- [ ] Review the artwork prototype (`deck/slides/art-lab.md`; approach: Q16): fish look,
      palette, outline weight, and sleep/wake motion -- ideally on a projector. Adjust
      palette tokens in `deck/theme/talk.css`.
- [ ] Review the map-layer prototype (art-lab slides 6-9; encoding summarized in
      `metaphor-imagery.md` § Prototype encoding): legibility of the three-up view on the
      projector, whether each jaggedness case reads on its zoom, label/landmark overlaps.
- [ ] Create images
   - [ ] goldfish visuals (sleeping/waking, people-pleaser)
   - [ ] the three-layer map/territory base images (territory, human map, fish map)
   - [ ] per-case map-comparison images: zoomed region on human vs. fish map for
         each jaggedness case (see `metaphor-imagery.md` § Per-case walkthrough)
   - [ ] decide case ordering and whether map-first or example-first
   - [ ] bowl + fish, water only (station 6); fittings attaching one at a time
         (stations 7-8); full-tank recap (end of station 8)

#### Full review

- [ ] Full review pass on `slides-outline.md` (after all above are done)

### Other pre-talk work

- [ ] Design entry & exit polls (Google Forms + QR codes; measure model accuracy / stance
      movement, not satisfaction). Phone-based (projector confirmed, QR on screen works).
- [ ] Draft the one-page takeaway card (source: `take-home.md`).

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
