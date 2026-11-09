# To-Do

Actionable tasks (verbs). Design *questions* and their options live in
`open-questions-and-ideas.md` as stable IDs (Q1, Q2, ...); a task that is really a
decision references the ID instead of restating it. Candidate metaphors and content ideas
also live there. The take-home card content lives in `take-home.typ`.

Completed items are REMOVED (not marked complete) - tracked by git history.

When specific slides are mentioned, add the direct URL for a server running on http://localhost:8765/?remote=X

## Now - prioritized

- [x] Hotspot test: Test the phone remote with the laptop on the phone's hotspot, on the projector's extended display, and accept the macOS firewall prompt for `node` (see `deck/README.md`). Fragments and phone lock/unlock are already verified.
  RESULTS: Hotspot test worked fine at home.
  On the WiFi net on-site, did NOT work - traffic between devices was blocked. But laptop was connected via long cable to projector, so remote was not needed after all.

- [ ] Review entry/exit surveys per the analysis plan in `surveys.md`, summarize for notes
- [ ] Capture feedback / lessons
- [ ] Add check-out survey QR code to take-home card
- [ ] in the future, record the questions after the event (via audio recording)
- [ ] Move Organizer reply below & other event-specific info to history/presentations.md
  - initial presentation at EFF-Austin was a great success.
  - podium had laptop stand and mic, so no clicker was needed
  - laptop display went into sleep mode after (10min?) timeout - caffeinate did not affect this - need to handle for future presentations - esp. during before/after talk, so QR codes stay on screen
  - resolution/etc was fine on projector
  - hotspot test WAS successful at home beforehand
  - local wifi did NOT work to connect remote w/ slides - communication between devices seemed to be prohibited
  - 28 take-home cards handed out, approximate attendee count

- [ ] record audio and add to slides on github with audio autoplay/manual/off setting
- [ ] clean up open questions file - when useful, move resolved/completed items to history subdir (something like ADRs), otherwise when items are fully & clearly represented in current work, remove them from open questions.
- [ ] add a planning/README.md describing the planning/creation process - check github history for document creation order - relative timeline is more important than specific timestamps. Move Sources section from main README to planning/README
- [ ] main README should link to the presentation on github pages, and on credits page(?), presentation should link back to the github repo
- [ ] move most of CLAUDE.md contents to AGENTS.md - leave claude-specific + @AGENTS loader in CLAUDE
- [ ] Add to portfolio on wegeekout.com

## Improvements

- [ ] Add context rot (term/meaning/implications) before the handoff reveal
- [ ] Explain that "thinking" is just hidden self-talk
- [ ] tubes connecting at the back of the tank: show the interface the fish sees
- [ ] Station 4 "Counting & Tracking: the fish": mark up / highlight the capture to show exactly where the errors are (the $4.50 margarita).
- [ ] Station 4 "Spatial Reasoning: the fish": same -- highlight the contradiction between its own ordering and its answer.

### Slide review/improvements

- [ ] Review for audience interaction opportunities - add notes on slides (ask audience questions - socratic style, yeah!)

### Enhancements (low priority)

- [ ] 05-verification or Accountability / turtles: Checking code - writing tests to verify the code, and calculating code coverage to verify the tests - building familiarity and trust with your harness & rubrics - shifts & shrinks the verification surface
- [ ] attachments as drawn parts instead of emoji (notepad, alarm clock, recipe cards, mic/camera, effect icons)
- [ ] Say what you want & how you want it: Highlight the detail level in the prompt
- [ ] Station 1 harms: replace the emoji tiles with photos (datacenter, water, labor, provenance, power, noise).
- [ ] Station 10 guardrail probe: optionally highlight the "limited verifiable historical information" line in the thinking trace.
- [ ] Station 1 harms: keep the closed box visible in the corner on later slides (persistent
      reminder), not only on its own slide. Or bring it back on the final "muggle/magic slide" - magic is dangerous, and has a price.
- [ ] Who decided it should refuse that: on the first click, show a screenshot of people complaining that fable is too touchy and refuses basic chemistry questions
- [ ] station 11 alt example -- default vs custom

### Hidden slides: re-evaluate if there's time

In the deck with `data-visibility="hidden"`; bring back by deleting that line above the title.

- [ ] Station 4: "B plays the fish" + "What went wrong? Whose fault was it?" (describe-and-draw; **Q3**, see below)
- [ ] Station 5: "Sort your own work" (verification-asymmetry exercise; hidden for time)
- [ ] Station 8: "Two kinds of plumbing" (provider tools vs. MCP; MCP is now a line on the Tools slide and on the take-home card)
- [ ] Station 4: "Ask the fish to help you ask" + "...using Theory of Mind" (folded into station 6 "Too much salt in the soup": HANDOFF.md, Theory of Mind, meta-prompting)
- [ ] Station 9: "Is that the fish or the tank?" (hidden for now)
- [ ] Station 7: "Tell me about" vs. "Search for" (captures not made: "Tell me about Austin's moonlight towers" vs. "Search for info on Austin's moonlight towers" in the same app; filenames in the slide's placeholders)

Orphaned assets (no visible slide uses them; delete once the slides above are decided):

- [ ] `deck/illustrations/knowledge-elicitation--1plain-haiku4.5.png`, `--2role-haiku4.5.png`,
      `--3knowledge-domain-haiku4.5.png`, `--3knowledge-domain-haiku4.5-trimmed.png` (station 6
      "Which shelf" captures; the slide draws the answer instead; the notes still cite them)
- [ ] `deck/illustrations/computers-english--claude-poetry.webp` (the tall phone capture; station 3 now uses `computers-english--claude-poetry-thumbnail.png`)

## Future possibilities

- [ ] Consider for inclusion or sequel:
  - [ ] what does running in a (strict) sandbox mean?
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
