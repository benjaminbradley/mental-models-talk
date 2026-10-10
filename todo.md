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

- [ ] Review the post-run-through changes (Oct 7) on the projector: the lazy genie, the brain,
      two-maps-at-a-time reveal and equal landmark counts, the bare fish forgetting messages,
      elicitation/show-its-work drawn in the bowl, two-color cat food, tool tubes drawn behind
      every tank, the profile page going down the tube, the P.S. email, the curtained dials, the
      cut-out map, the derpier v3 fish.


#### Hidden slides: re-evaluate if there's time

In the deck with `data-visibility="hidden"`; bring back by deleting that line above the title.

- [ ] Station 4: "B plays the fish" + "What went wrong? Whose fault was it?" (describe-and-draw; **Q3**, see below)
- [ ] Station 5: "Sort your own work" (verification-asymmetry exercise; hidden for time)
- [ ] Station 8: "Two kinds of plumbing" (provider tools vs. MCP; MCP stays on the take-home card)

#### Design & spec work

What each metaphor image means: `metaphor-imagery.md`; how each slide composes it: the deck.

- [ ] Decide keep/cut for **describe-and-draw** ("B plays the fish", station 4; **Q3**
      reopened; HIDDEN in the deck for now). If kept: find & test the figure. Criteria: spatial relationships (not artistic skill), dignified for
      adults, honest ambiguity (partners disagree about the result and both have a point).
      Leading candidate: simple architectural floor plan. Maybe 2 samples - overhead view vs PoV.

#### Pre-capture demos & transcripts

- [ ] Station 7 citations: capture "Tell me about Austin's moonlight towers" vs. "Search for info
      on Austin's moonlight towers" in the same app (filenames in the slide's placeholders).

- [ ] Station 3 "now" poetry: optionally replace the slide link with the permalink to the
      published reddit comment (the capture is a tall phone screenshot; small when projected).
- [ ] Station 10 instability: find a higher-resolution capture of the model-suspension post
      (`unstable--fable-suspended.png` is 501px wide and blurs when projected).
- [ ] Station 7 memory: replace the illustrative "Saved memories" mock entries with the real
      resume-inflation example (or a capture of it).
- [ ] Prepare comparison demos
   - [ ] (optional) show-its-work side-by-side: same query with/without thinking instructions (station 6 notes)

#### Image creation

- [ ] Review the goldfish artwork (station 3, `deck/slides/03-meet-the-fish.md`; approach: Q16):
      fish look, palette, outline weight, and sleep/wake motion -- ideally on a projector.
      Adjust palette tokens in `deck/theme/talk.css`.
- [ ] Review the maps (station 4, `deck/slides/04-talking-to-the-fish.md`; encoding in the header
      of `tools/build-maps.mjs`): legibility of the two-up views on the
      projector, whether each jaggedness case reads on its zoom, label/landmark overlaps.
- [ ] Review the station 9-13 artwork: the four-step hosting scene (is step 3 right with your
      tank on the desk and your fish in the private cloud? the fish's cap/badge uniform), the
      murky water and effect icons, wall vs. sign, the versioned fish with the nerfed v3, the
      refusal-dials and bias tiles, the report cover and drafts mockups, and the coda gradient
      filled with vocabulary chips (built without input; needs your call).
- [ ] Review the bowl/tank artwork (stations 6-8): bowl variants, sticky notes, cat food,
      tubes and attachments (emoji icons are stand-ins), the MCP fittings, the full tank with
      mic/camera conversion boxes.
- [ ] Create images
   - [ ] tubes connecting at the back of the tank: show the interface the fish sees
   - [ ] review-ladder visual (station 12; not a literal ladder) -- placeholder in the deck
   - [ ] attachments as drawn parts instead of emoji (notepad, alarm clock, recipe cards,
         mic/camera, effect icons)

#### Full review

- [ ] Full review pass on the deck (after all above are done)

### Other pre-talk work

- [ ] Design entry & exit polls (Google Forms + QR codes; measure model accuracy / stance
      movement, not satisfaction). Phone-based (projector confirmed, QR on screen works).
      Generate the QR SVGs with `make qr URL=... OUT=deck/art/qr-poll.svg` and replace the
      placeholders in `deck/slides/00-pre-talk.md` and `13-open.md`.
- [ ] Draft the one-page takeaway card (source: `take-home.md`).

### Enhancements (low priority)

- [ ] Station 4 "Counting & Tracking: the fish": mark up / highlight the capture to show exactly
      where the errors are (the $4.50 margarita).
- [ ] Station 4 "Spatial Reasoning: the fish": same -- highlight the contradiction between its
      own ordering and its answer.

- [ ] Station 1 harms: replace the emoji tiles with photos (datacenter, water, labor,
      provenance, power).
- [ ] Station 10 guardrail probe: optionally highlight the "limited verifiable historical
      information" line in the thinking trace.
- [ ] Station 1 harms: keep the closed box visible in the corner on later slides (persistent
      reminder), not only on its own slide.

## Week of Sep 28 - Oct 2 - assembly complete

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
- [ ] Verify current product names on the slides (app tiles and personal agents at
      station 6, vendor names at station 9).
- [ ] Get wegeekout.com ready for follow-up?
- [ ] credits page / slide? writing/direction/production-BB, coding,art-Opus

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
