# Open Questions & Ideas

The working scratchpad: unresolved design decisions, candidate metaphors, and content
ideas/stories not yet placed. The arc (`presentation-arc.md`) links here, and `todo.md`
references the questions below by their stable IDs (Q1, Q2, ...). IDs never get reused
or renumbered; resolved ones move to "Resolved decisions" keeping their ID.

## Open design questions

**Q1. Magic metaphor placement.** Up front (station 2) vs. later in the talk. Concern:
skeptics may reject the "beneficial" implication of magic before any capability has been
shown; by the end, the capability multiplier has been demonstrated. Counter: "powerful
but dangerous" is itself a good mental model and could work early. The gradient *claim*
stays at station 2 regardless; only the magic *imagery* is in question.

**Q3. Describe-and-draw figure.** Need a source figure that is dignified for adults and
fails through honest ambiguity (not a gotcha). To prototype/test.

**Q4. Intention-economy placement.** Candidate: a short practitioner beat after station 7,
feeding accountability.

**Q6. 6a/6b/6c compression.** Keep as three beats for now; revisit only after a timed
run-through. Deferred, needs real timing.

**Q7. Augmentation-metaphor usage.** Whether and where to use "bicycle for the mind" /
"iron man suit" (see Candidate metaphors). Candidate homes: near stations 3/6b (the
amplifier) or as a recurring thread.

## Resolved decisions

**Q2. Station 4 metaphor architecture.** RESOLVED (map vs. territory). Station 4 is built
on three layers, revealed in order: (1) **the territory** - the landscape of knowledge /
reality; shown to set the metaphor but deliberately not detailed (nobody holds the true
map); its job is to be the referent verification appeals to. (2) **the human map** -
imperfect and different from the territory, but calibrated by lived contact; carries
honest "here be dragons" shading; exemplifies a human's relationship to knowledge. (3)
**the fish/LLM map** - compiled entirely from books (others' descriptions), never surveyed
in person; errors track source-text density not human difficulty (jaggedness), blanks are
inked with the same confident hand (confabulation), and it lacks the "unsure here" shading
the human map has. Split: the fish (people-pleaser) carries confabulation; jaggedness =
the fish-map's fidelity varying region to region. Map content = anatomy; uniform confident
ink = temperament. Verification = leaving the map to check the territory (station 5); tools
= extending contact with the territory. Remaining is production only (see todo: build the
three-layer visual, pick jaggedness cases, decide reveal mechanics).

**Q5. Pink-elephant anecdote placement.** RESOLVED - placed at **station 3**
(latent-knowledge-needs-eliciting). The negation-poisoning angle can still be referenced
lightly at 6a if useful, but its home is station 3.

## Bookmarks

- **Entry & exit polls / surveys.** Definitely include. Anonymous. Entry poll at station 1
  (stance + usage), exit poll at station 9. Design later. Note: "literacy, not conversion"
  makes standard satisfaction surveys actively misleading - a session that leaves people
  accurately unimpressed should not score as a failure. Measure model accuracy / stance
  movement, not satisfaction. (Delivery idea: Google Forms + QR codes on slides.)

## Candidate metaphors

- **Magic / Clarke's gradient** (station 2, placement = Q1). Does real work: reframes
  capability as a learnable discipline, not a caste. Risk: theming reads as whimsy to a
  professional audience; "beneficial" implication may alienate skeptics early.

- **The goldfish who has read every book** (LEADING for station 4; evolves through 6a and
  6b). A **people-pleaser**: fluent from reading, eager to be a good conversationalist, and
  unwilling to admit it is out of its depth - so its confidence is a symptom of eagerness,
  not intent to deceive (ties to sycophancy). No lived experience, no long-term memory. It
  navigates by a **map it drew entirely from books**, never surveying the territory (Q2,
  map vs. territory). **Temperament vs. anatomy** via the training story: reading the
  library = pretraining = the map's content and its jagged fidelity (anatomy: structural,
  durable); an apprenticeship of practice conversations with feedback = post-training/RLHF
  = its manners and the uniform confident ink it draws with (temperament: trained,
  model-specific, softening over time). Extensions: the fishbowl = the context window
  (items visually present; water can be poisoned); tools connect to the bowl to extend the
  fish's reach / contact with the territory (6b).

- **The drunk intern** (from source docs). A smart intern who has read everything, has
  memory problems, and occasionally comes to work drunk and destroys or steals everything
  they can touch. Useful and deliberately wrong: an intern's errors correlate with
  difficulty; these do not - which is exactly the jaggedness lesson. Also carries
  least-privilege ("don't give the intern the keys," station 6c). May coexist with the
  goldfish or be folded in.

- **Augmentation metaphors** (usage = Q7). "Bicycle for the mind" (Jobs, on the PC; also
  seen in a recent LLM talk) - amplifies human effort/efficiency. "Iron man suit" (a
  friend's framing) - powered augmentation the human still drives. Both are
  capability-multiplier images.

- **Map vs. territory (three layers)** (spatial; WORKING carrier for jaggedness, fused
  with the fish as a segue; see Q2). Territory = reality (shown, not detailed); human map =
  calibrated by contact, honestly shaded; fish map = drawn from books, never surveyed,
  inked confidently everywhere. Jaggedness and confabulation both fall out of "the fish has
  only ever seen maps." Revealed in three beats: territory -> human map -> fish map.

## Content ideas / stories not yet fully placed

- **The intention economy.** Your projects are bounded, and therefore defined, by how much
  intention you put into them. "Use best practices" is a valid default, but the judgment
  calls - what matters, how you want it - are your real input. Ties to taste as the
  bottleneck and to accountability. Candidate home: practitioner beat (Q4).

- **Pink elephant / Theory of Mind (real anecdote).** PLACED: station 3. In chat 1, an LLM
  was asked to write prompts to seed a fresh chat 2, but the prompts included *negative*
  references to ideas from chat 1 ("don't do X") - a "don't think of a pink elephant"
  effect that risked poisoning chat 2's context. Asking the model to use Theory of Mind and
  rewrite the prompt fixed it. Primary lesson (station 3): the model holds worlds of
  knowledge but does not apply them unless you know what to ask for. Secondary (optional at
  6a): negation can poison context.

- **Levels of memory** (from Inputs tab). System instructions (global to account) ->
  per-project instructions (you maintain) -> agent/Claude memory (it maintains from
  conversations). Candidate: supports station 6a context/craft.

- **Training stages in the metaphor.** Reading the whole library = pretraining (a fluent
  text-continuer; knows the words, not yet the job). Apprenticeship of practice
  conversations with feedback = post-training / RLHF (learns the helpful-assistant role,
  the manners, and the eager/confident temperament - where sycophancy is instilled). This
  is the mechanism behind temperament vs. anatomy. Rhymes with human language acquisition
  (exposure then feedback) with one decisive disanalogy: a child's words are grounded in
  lived experience; the fish's are not. On-ramp only - do not claim developmental
  equivalence.

- **Temperament vs. anatomy** (accepted distinction). Temperament = trained, varies by
  model, actively changing (confidence, agreeableness, refusals, willingness to say "I
  don't know"). Anatomy = structural, durable (no grounding / cannot check reality itself;
  jagged competence). Answers "how much is model-specific vs. inherent" and future-proofs
  the talk. Home: station 4; also feeds station 7 (it is a product).

- **The citations ladder** (demo idea, station 4). "Tell me about X" -> "...with sources"
  (citations can be fabricated; the appearance of sourcing manufactures unearned trust) ->
  "...with verified sources" (the model uses tools to check the URLs against reality). The
  danger lives in the gap between the second and third: unverified sourcing is more
  dangerous than none. Shows self-assessment is jagged and that the fix requires touching
  reality (tools), not asking nicely.

- **Self-reflection = a lever, not an oracle** (capability). It can grade confidence, flag
  knowledge-cutoff gaps, or search when unsure - but only if you ask (pink elephant), and
  the self-assessment is itself jagged. Reduces the problem; does not remove the obligation
  to verify (station 5).
