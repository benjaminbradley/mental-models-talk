# Open Questions & Ideas

The working scratchpad: unresolved design decisions, candidate metaphors, and content
ideas/stories not yet placed. The arc (`presentation-arc.md`) links here.

## Open design questions

1. **Magic metaphor placement.** Up front (station 2) vs. later in the talk. Concern:
   skeptics may reject the "beneficial" implication of magic before any capability has
   been shown; by the end, the capability multiplier has been demonstrated. Counter:
   "powerful but dangerous" is itself a good mental model and could work early. The
   gradient *claim* stays at station 2 regardless; only the magic *imagery* is in
   question. STATUS: open, revisit later.

2. **Does the goldfish carry jaggedness?** Station 4 needs a model that shows
   jaggedness (errors uncorrelated with difficulty) natively. "Read every book but
   never lived" handles confabulation and book-vs-experience well; jaggedness is the
   weak spot. Options: (a) goldfish alone, leaning on book-vs-lived-experience to
   explain weird failures; (b) goldfish + a spatial "jagged frontier / map with no
   markings" for that one property. STATUS: open; top audition priority.

3. **Describe-and-draw figure.** Need a source figure that is dignified for adults and
   fails through honest ambiguity (not a gotcha). STATUS: to prototype/test.

4. **Intention-economy placement.** Candidate: a short practitioner beat after station
   7, feeding accountability. STATUS: open.

5. **Pink-elephant anecdote placement.** Fits station 6a (negation poisoning) and/or
   station 3 (latent knowledge needs eliciting). STATUS: open.

6. **6a/6b/6c compression.** Keep as three beats for now; revisit only after a timed
   run-through. STATUS: deferred, needs real timing.

## Bookmarks

- **Entry & exit polls / surveys.** Definitely include. Anonymous. Entry poll at
  station 1 (stance + usage), exit poll at station 9. Design later. Note: "literacy,
  not conversion" makes standard satisfaction surveys actively misleading - a session
  that leaves people accurately unimpressed should not score as a failure. Design the
  instrument to measure model accuracy / stance movement, not satisfaction.

## Candidate metaphors

- **Magic / Clarke's gradient** (station 2, placement open). Does real work: reframes
  capability as a learnable discipline, not a caste. Risk: theming reads as whimsy to a
  professional audience; "beneficial" implication may alienate skeptics early.

- **The goldfish who has read every book** (LEADING for station 4; evolves through 6a
  and 6b). Fluent from reading, no lived experience, no long-term memory. Extensions:
  the fishbowl = the context window (items in context are visually present; the water
  can be poisoned); tools connect to the bowl to extend capability; the fish's only
  knowledge of the outside world is the books it has read. Strong visual potential;
  can evolve over time. Open: whether it carries jaggedness (question 2 above).

- **The drunk intern** (from source docs). A smart intern who has read everything, has
  memory problems, and occasionally comes to work drunk and destroys or steals
  everything they can touch. Useful and deliberately wrong: an intern's errors
  correlate with difficulty; these do not - which is exactly the jaggedness lesson.
  Also carries least-privilege ("don't give the intern the keys," station 6c). May
  coexist with the goldfish or be folded in.

- **Augmentation metaphors** (hold; plug in where they fit). "Bicycle for the mind"
  (Jobs, on the PC; also seen in a recent LLM talk) - amplifies human effort/efficiency.
  "Iron man suit" (a friend's framing) - powered augmentation the human still drives.
  Both are capability-multiplier images; candidate homes near stations 3/6b (the
  amplifier) or as a recurring augmentation thread. Not yet placed.

- **Jagged frontier / map with no markings** (spatial). Not a character metaphor - a
  property of the terrain the model walks. Candidate pairing with the goldfish to carry
  jaggedness specifically (question 2).

## Content ideas / stories not yet fully placed

- **The intention economy.** Your projects are bounded, and therefore defined, by how
  much intention you put into them. "Use best practices" is a valid default, but the
  judgment calls - what matters, how you want it - are your real input. Ties to taste
  as the bottleneck and to accountability. Candidate home: practitioner beat (see
  question 4).

- **Pink elephant / Theory of Mind (real anecdote).** In chat 1, an LLM was asked to
  write prompts to seed a fresh chat 2, but the prompts included *negative* references
  to ideas from chat 1 ("don't do X") - a "don't think of a pink elephant" effect that
  risked poisoning chat 2's context. Asking the model to use Theory of Mind and rewrite
  the prompt fixed it. Teaches two things: (1) negation can poison context (station 6a);
  (2) the model holds worlds of knowledge but does not apply them unless you know what
  to ask for (station 3 / practitioner). Strong, concrete, from lived use.

- **Levels of memory** (from Inputs tab). System instructions (global to account) ->
  per-project instructions (you maintain) -> agent/Claude memory (it maintains from
  conversations). Candidate: supports station 6a context/craft.
