# Open Questions & Ideas

The working scratchpad: unresolved design decisions, candidate metaphors, and content
ideas/stories not yet placed. The arc (`presentation-arc.md`) links here, and `todo.md`
references the questions below by their stable IDs (Q1, Q2, ...). IDs never get reused
or renumbered; resolved ones move to "Resolved decisions" keeping their ID.

## Open design questions

None remaining.

## Resolved decisions

**Q1. Magic metaphor placement.** RESOLVED - Clarke's third law as a light-touch
one-liner at **station 2** to set up the binary-to-gradient reframe ("pop culture frames
this as magic - wizards vs. muggles - but capability is a gradient, refined by effort").
Not themed, not a recurring motif. Callback at **station 13** (the closer) as earned
wonder: "the birth of magic" - descriptive, not prescriptive; comes after accountability
has landed. Framing guard: the callback is inspirational coda, not advocacy (the whole
talk must have earned it by then).

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

**Q3. Describe-and-draw figure.** RESOLVED as a design question - placement is confirmed
at station 3. Figure selection is a prototyping task, moved to `todo.md`.

**Q4. Intention-economy placement.** RESOLVED - its own short beat, **Station 11 "The
practitioner: intention is the input"**, between stations 10 and 12, feeding accountability.
Holds: amplifies what you bring, taste/intention as the bottleneck, "it will agree with
you," atrophy (specific). On-stage phrase "intention is the input" (avoid the loaded term
"intention economy"). Framed descriptively, not a nudge to adopt (advocacy guard).

**Q5. Pink-elephant anecdote placement.** RESOLVED - placed at **station 3**
(latent-knowledge-needs-eliciting). The negation-poisoning angle can still be referenced
lightly at station 7 if useful, but its home is station 3.

**Q6. Station 7/8/9 compression.** RESOLVED (deferred by design) - keep three beats; the
compression decision is folded into the full timing review during the week-of-Oct-5
run-through, not decided in the abstract.

**Q7. Augmentation-metaphor usage.** RESOLVED - exclude as standalone. "Bicycle for the
mind" and "iron man suit" don't do teaching work the spine + goldfish/bowl aren't already
doing, and they tilt toward advocacy. Allowed as a passing one-liner (e.g. at station 11)
but no dedicated beat, no recurring thread. One useful insight preserved: the bicycle
does nothing on its own, matching how LLMs only wake when prompted (or on a schedule).
This is folded into the goldfish metaphor as the "sleeping fish" - the fish sleeps most
of the time and only wakes when you talk to it (or if the bowl has an alarm clock).

**Q9. Client vs. model.** RESOLVED - opens the **Station 6 cluster**. Metaphor: **model =
the fish**, **client = the bowl** (simple / fancy / mobile) and its fittings; **water =
context** (poisonable); the window = how much water the bowl holds; tools, memory, projects,
multimodal = fittings on the bowl. Vendors bundle a fish-in-a-bowl; the two are separable.
Diagnostic: "is it the fish or the bowl?" Callback at Station 10 (choose the fish AND the
bowl). Verify product names before the talk.

**Q10. Hosting / infrastructure layer.** RESOLVED - placed at the top of
**station 9** as "where does the fish live?" Three tiers visualized as a data-flow
diagram: local (your computer) -> private cloud/VPS (your server) -> frontier cloud
(vendor infrastructure). Each trades capability for data control. Credential/API key
exposure covered here. Training-data opt-out mentioned as a guideline (not an
architectural boundary). Feeds the enforcement hierarchy.

**Q11. Decomposition demonstration.** RESOLVED - placed at station 5. Concrete exercise
moved to `todo.md` for prototyping (leading candidate: "plan a team offsite" monolithic
vs. decomposed).

**Drunk intern metaphor.** RETIRED - replaced by the poisoned-water metaphor extension
at station 9. The intern's useful contribution (least-privilege punchline) survives as a
standalone one-liner; the full character is dropped to avoid competing with the goldfish
as the talk's primary anthropomorphic carrier.

## Bookmarks

- **Entry & exit polls / surveys.** Definitely include. Anonymous. Entry poll at station 1
  (stance + usage), exit poll at station 13. Design later. Note: "literacy, not conversion"
  makes standard satisfaction surveys actively misleading - a session that leaves people
  accurately unimpressed should not score as a failure. Measure model accuracy / stance
  movement, not satisfaction. (Delivery idea: Google Forms + QR codes on slides.)

## Candidate metaphors

- **Magic / Clarke's gradient** (station 2; Q1 resolved). Light-touch one-liner to set up
  the binary-to-gradient reframe. Callback at station 13 (closer) as earned wonder.

- **The goldfish who has read every book** (PRIMARY for station 4; evolves through stations
  7 and 8). A **people-pleaser**: fluent from reading, eager to be a good conversationalist,
  and unwilling to admit it is out of its depth - so its confidence is a symptom of
  eagerness, not intent to deceive (ties to sycophancy). No lived experience, no long-term
  memory. **Sleeps most of the time** - the fish only wakes up when you talk to it, or if
  the bowl has an alarm clock (scheduled tasks). This matches how LLMs work: they do nothing
  on their own. It navigates by a **map it drew entirely from books**, never surveying the
  territory (Q2, map vs. territory). **Temperament vs. anatomy** via the training story:
  reading the library = pretraining = the map's content and its jagged fidelity (anatomy:
  structural, durable); an apprenticeship of practice conversations with feedback =
  post-training/RLHF = its manners and the uniform confident ink it draws with
  (temperament: trained, model-specific, softening over time). Extensions: the **bowl =
  the client** (simple/fancy/mobile; Station 6), the **water = context** (poisonable),
  the window = how much water the bowl holds; tools and other fittings on the bowl extend
  the fish's reach / contact with the territory (station 8).

- **Augmentation metaphors** (retired as standalone; Q7 resolved). "Bicycle for the mind"
  / "iron man suit" allowed as passing references only. The sleeping-fish insight (does
  nothing on its own) is folded into the goldfish.

- **The cooking metaphor** (station 7, restart-vs-repair). You are deciding the
  ingredients; the model does the cooking to combine them. If you accidentally add salt
  instead of sugar, you cannot take out the salt - it is in the dish now. The entire
  conversation history is re-read with every request, so a mistake early on persists
  through every subsequent turn. Comparing A+B -> "not B" -> C (salt still in the water,
  plus "not B" is now another ingredient) versus starting fresh A -> D. Personally felt
  by Benji working with LLMs; grounded in real experience.

- **Map vs. territory (three layers)** (spatial; WORKING carrier for jaggedness, fused
  with the fish as a segue; see Q2). Territory = reality (shown, not detailed); human map =
  calibrated by contact, honestly shaded; fish map = drawn from books, never surveyed,
  inked confidently everywhere. Jaggedness and confabulation both fall out of "the fish has
  only ever seen maps." Revealed in three beats: territory -> human map -> fish map.

## Content ideas / stories not yet fully placed

- **The intention economy.** Your projects are bounded, and therefore defined, by how much
  intention you put into them. "Use best practices" is a valid default, but the judgment
  calls - what matters, how you want it - are your real input. Ties to taste as the
  bottleneck and to accountability. PLACED: Station 11 - "intention is the input" (Q4 resolved).

- **Pink elephant / Theory of Mind (real anecdote).** PLACED: station 3. In chat 1, an LLM
  was asked to write prompts to seed a fresh chat 2, but the prompts included *negative*
  references to ideas from chat 1 ("don't do X") - a "don't think of a pink elephant"
  effect that risked poisoning chat 2's context. Asking the model to use Theory of Mind and
  rewrite the prompt fixed it. Primary lesson (station 3): the model holds worlds of
  knowledge but does not apply them unless you know what to ask for. Secondary (optional at
  station 7): negation can poison context.

- **Levels of memory** (from Inputs tab). System instructions (global to account) ->
  per-project instructions (you maintain) -> agent/Claude memory (it maintains from
  conversations). PLACED: supports station 7 context/craft (integrated into memory &
  instruction hierarchy).

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
  the talk. Home: station 4; also feeds station 10 (it is a product).

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

- **Knowledge-domain elicitation** (technique, station 3). Instead of assigning a single
  role ("you are a financial analyst"), ask: "what domains of knowledge are relevant to
  this project? what perspectives and best practices does each contribute?" A generalized
  form of role prompting that surfaces expertise the model holds but would not apply
  unprompted (callback: pink elephant). Prepared comparison: plain prompt vs. role-prompted
  vs. knowledge-domain-prompted.

- **Meta-prompting across platforms** (technique, station 3). Write a prompt in one model
  to run in another (e.g. have Claude write a research prompt for Gemini). Requires Theory
  of Mind: the target model will not have this chat's context (callback: pink elephant /
  ToM anecdote). Real workflow from Benji's practice.

- **Extended thinking / thinking levels** (technique, station 4). User-facing control:
  low/medium/high thinking depth. More thinking = deeper analysis, but diminishing returns
  and over-thinking are real. Useful to direct "think about X" as part of a multi-step
  prompt. Prepared comparison: same query with and without a "think about the criteria"
  preamble.

- **Provider-specific tools vs. MCPs** (distinction, station 8). Proprietary tools
  (ChatGPT plugins, Claude web search, Gemini Google integrations) only work with one
  vendor's tank. MCP (Model Context Protocol) is an industry-standard connector that works
  across compatible tanks. Also: tool discovery/description - the model reads a tool's
  description to decide when and how to use it.

- **Skills / reusable playbooks** (capability, station 8). Packaged instructions for
  recurring tasks - recipe cards for the fish. Saves re-specifying the same constraints
  every time.

- **Frontier instability** (risk, station 10). Models change without notice and without
  recourse. A workflow that worked yesterday can break because the provider updated the
  model. Implication: building reliable business processes on someone else's fish is a risk
  to name. Feeds "it is a product."

- **HITL as deliberate pattern** (accountability, station 12). The difference between "draft
  this email" and "send this email" is the entire accountability question in one toggle.
  Demo: email drafting vs. sending. Callback to station 8 (tool use introduced the
  capability; station 12 asks who is responsible for using it).

- **Blast-radius recovery stories** (station 9). Source real stories from Reddit/HN
  of LLMs deleting files, resetting databases, sending wrong emails, etc. Pre-capture
  screenshots for the talk. The question: if everything goes as badly as it could, how
  would you recover and what would you have lost?

- **The B&W artist review analogy** (station 4 -> 12 callback). Asking the fish to review
  its own work is like asking a black-and-white artist to judge "someone else's" B&W art -
  it shares the same blind spots. A color artist judging a range of pictures (both color
  and B&W) is a genuinely independent reviewer. Surfaces why self-review and correlated
  agent review fail.

- **Memory oversharing / resume inflation** (station 7, personal story). Memory system
  inflating claims from a resume-drafting session into persistent "facts" about the user's
  experience. Demonstrates how memory can go wrong and why memory audit matters.

- **Poisoned-water effects taxonomy** (station 9, extends the goldfish/injection metaphor).
  Three categories of what happens when the water is poisoned: (1) **Destruction** - the
  compromised fish deletes files, resets databases, sends wrong messages (blast radius);
  (2) **Exfiltration** - the fish sends private data outward through its tools (the lethal
  trifecta); (3) **Sleeper / incubation** - poison persists via memory and activates later,
  like traumatic memories triggering undesired behavior in future sessions. The third
  category is the subtlest and hardest to detect: the attack surface extends across time
  through the memory system. Replaces the "drunk intern" as the security-risk carrier.

## Presentation / format

**Q8. Presentation tech / assembly format.** Leaning: hand-built **HTML/CSS slides**
(Claude's out-of-box slideshow support is weak; HTML/CSS is flexible and publishes to
**GitHub Pages**). Reqs: per-slide **speaker notes**, and a way to load/show them in
parallel (presenter view). Not designing now - noted; revisit at assembly (week of Sep 21+).
