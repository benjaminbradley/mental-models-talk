# To-Do

Actionable tasks (verbs). Design *questions* and their options live in
`open-questions-and-ideas.md` as stable IDs (Q1, Q2, ...); a task that is really a
decision references the ID instead of restating it. Candidate metaphors and content ideas
also live there. The take-home card content lives in `take-home.md`.

Sections are the timeline weeks (talk: Oct 13). "Now" = anything before the first named week.

Completed items are REMOVED (not marked complete) - tracked by git history.

When specific slides are mentioned, add the direct URL for a server running on http://localhost:8765/?remote=X

## Now - critical

### Finish the slides


#### Evaluate - finished / needed / defer: Pre-capture demos & transcripts

- [ ] Station 7 citations: capture "Tell me about Austin's moonlight towers" vs. "Search for info
      on Austin's moonlight towers" in the same app (filenames in the slide's placeholders).
- [ ] Station 3 "now" poetry: optionally replace the slide link with the permalink to the
      published reddit comment (the capture is a tall phone screenshot; small when projected).

### Prep for presentation

- [ ] Full run-through for real timing
   - [ ] measure overall timing
   - [ ] compare estimated timing vs. actual timing
   - [ ] assess whether stations 7/8/9 compress (**Q6**)
   - [ ] identify any trims needed
   - [ ] assess station 4 density -- after the reorder it carries the (pending) exercise, four technique families, and the map/territory reveal + walkthrough; confirm it fits or identify what to defer
   - [ ] re-check the 45-minute cut (`presentation-arc.md`) after the reorder
- [ ] Rehearse; refine speaker notes; adjust pacing.

- [ ] Draft the one-page takeaway card (source: `take-home.md`).
- [ ] Print the one-page takeaway card.

- [ ] Review final logistics -- slide control remote? Adapter for projector (USB-C)?
- [ ] Lock the materials list (`materials.md`) & acquire them.
- [ ] Hotspot test: Test the phone remote with the laptop on the phone's hotspot, on the projector's extended display, and accept the macOS firewall prompt for `node` (see `deck/README.md`). Fragments and phone lock/unlock are already verified.

- [ ] Publish the deck to GitHub Pages (https://benjaminbradley.github.io/mental-models-talk/, already on the take-home card and closing slide). Pages currently serves a placeholder page: in `.github/workflows/pages.yml` switch `path: placeholder` back to `path: deck` and delete `placeholder/`, then check the Pages URL for slides, images and no console errors.

## Now optional

### Slide review/improvements

- [ ] Review for audience interaction opportunities - add notes on slides (ask audience questions - socratic style, yeah!)

### Hidden slides: re-evaluate if there's time

In the deck with `data-visibility="hidden"`; bring back by deleting that line above the title.

- [ ] Station 4: "B plays the fish" + "What went wrong? Whose fault was it?" (describe-and-draw; **Q3**, see below)
- [ ] Station 5: "Sort your own work" (verification-asymmetry exercise; hidden for time)
- [ ] Station 8: "Two kinds of plumbing" (provider tools vs. MCP; MCP is now a line on the Tools slide and on the take-home card)
- [ ] Station 4: "Ask the fish to help you ask" + "...using Theory of Mind" (folded into station 6 "Too much salt in the soup": HANDOFF.md, Theory of Mind, meta-prompting)
- [ ] Station 9: "Is that the fish or the tank?" (hidden for now)

Orphaned assets (no visible slide uses them; delete once the slides above are decided):

- [ ] `deck/illustrations/knowledge-elicitation--1plain-haiku4.5.png`, `--2role-haiku4.5.png`,
      `--3knowledge-domain-haiku4.5.png`, `--3knowledge-domain-haiku4.5-trimmed.png` (station 6
      "Which shelf" captures; the slide draws the answer instead; the notes still cite them)
- [ ] `deck/illustrations/unstable--fable-suspended.png` (the suspension is set as a quote card on "The fish changes without notice")
- [ ] `person-eyes-left` symbol in `deck/art/parts.svg` (was the human artists on "Who checks the fish?"; now fish)
- [ ] `.chat .pink-elephant` in `deck/theme/talk.css` (used only by the hidden station 4 chat slides)
- [ ] `deck/slides/11-intention.md` (no longer in `manifest.js`: Intention moved to station 8, the two warnings split into stations 10 and 12)

- [ ] Decide keep/cut for **describe-and-draw** ("B plays the fish", station 4; **Q3**
      reopened; HIDDEN in the deck for now). If kept: find & test the figure. Criteria: spatial relationships (not artistic skill), dignified for
      adults, honest ambiguity (partners disagree about the result and both have a point).
      Leading candidate: simple architectural floor plan. Maybe 2 samples - overhead view vs PoV.

### Enhancements (low priority)

- [ ] tubes connecting at the back of the tank: show the interface the fish sees
- [ ] attachments as drawn parts instead of emoji (notepad, alarm clock, recipe cards,
         mic/camera, effect icons)
- [ ] Station 4 "Counting & Tracking: the fish": mark up / highlight the capture to show exactly
      where the errors are (the $4.50 margarita).
- [ ] Station 4 "Spatial Reasoning: the fish": same -- highlight the contradiction between its
      own ordering and its answer.
- [ ] Station 1 harms: replace the emoji tiles with photos (datacenter, water, labor,
      provenance, power, noise).
- [ ] Station 10 guardrail probe: optionally highlight the "limited verifiable historical
      information" line in the thinking trace.
- [ ] Station 1 harms: keep the closed box visible in the corner on later slides (persistent
      reminder), not only on its own slide. Or bring it back on the final "muggle/magic slide" - magic is dangerous, and has a price.
- [ ] Who decided it should refuse that: on the first click, show a screenshot of people complaining that fable is too touchy and refuses basic chemistry questions
- [ ] Station 12 "Skills you hand off can fade": the 🧭 / GPS example is a stand-in; consider a drawn visual or a stronger example of a skill most people have lost

## Oct 13 - deliver

- [ ] Deliver the talk. Entry poll at the open, exit poll at the close.
- [ ] Bring: USB-C adapter (in case venue's is flaky), slide control remote, printed materials.

## After initial presentation

- [ ] Review entry/exit surveys per the analysis plan in `surveys.md`, summarize for notes
- [ ] Capture feedback / lessons
- [ ] Move Organizer reply below & other event-specific info to history/presentations.md
- [ ] station 11 alt example -- default vs custom
- [ ] consider a reusable recording or write-up -- or publish to GitHub Pages?
  - [ ] clean up open questions file - when useful, move resolved/completed items to history subdir (something like ADRs), otherwise when items are fully & clearly represented in current work, remove them from open questions.
  - [ ] clean up repo - move planning docs into a doc/ subdir with its own README describing the planning/creation process - check github history for document creation order - relative timeline is more important than specific timestamps.
  - [ ] main README should link to the presentation on github pages, and on credits page(?), presentation should link back to the github repo
  - [ ] move most of CLAUDE.md contents to AGENTS.md - leave claude-specific + @AGENTS loader in CLAUDE
- [ ] Add to portfolio on wegeekout.com

## Future possibilities

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
