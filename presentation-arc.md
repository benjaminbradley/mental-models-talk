# Presentation Arc

The audience journey, station by station: what each station is *for*. This doc names
concepts and leaves the specifics (examples, wording, visuals, slide order) to
`deck/slides/`. Beat-level index: `arc-table.md`. Metaphor meanings: `metaphor-imagery.md`.
Unresolved choices: `open-questions-and-ideas.md`.

## Framing

**Win condition:** literacy, not conversion. Contested questions raised, never
adjudicated. Facilitator drift into advocacy is the primary failure mode.

**Three tracks.** Every station is built against three simultaneous journeys:
- **Cognitive** - the mental model they hold right now.
- **Stance** - how they feel about the whole enterprise (suspicion -> sober ownership).
- **Capability** - what they can actually do (the practical methods).

**Design principle:** *felt limit -> method that addresses it -> new limit the method
introduces.* No technique appears as a "techniques chapter"; each enters as the answer
to a limitation the room just felt. Each beat resolves the tension the previous one
raised, and raises the next one.

**Emotional spine:** suspicion -> curiosity -> productive disorientation ->
equipped confidence -> sober responsibility.

**The through-line (the spine claim):** anything you can specify clearly enough in
language, a computer can now do. Introduced at station 3, made literal at station 8
(handing off your own to-do list), and closed at station 12 (the operator acts, but
accountability does not transfer).

**Macro-arc.** Stations 3-5 run **premise** (computers speak language) -> **nuance** (how
their understanding differs from ours, and why) -> **capability** (how to work with them).
Stations 6-8 repeat it for the machinery around the model, which grows piece by piece:
fish -> fish + bowl (context) -> fish + tank (bowl + tools).

**Delivery:** pre-capture anything that must land; never live-demo confabulation.
Live-demo only where any outcome teaches (e.g. the same prompt run several times for
non-determinism).

---

## Station 1 - Disarm + Acknowledge
*Stance: guarded suspicion -> permission to engage.*

Name the real problems out loud first (energy and water footprint, labor, training-data
provenance, concentration of power) and say plainly the talk does not
adjudicate them. Then the contract: you should be able to reason about this accurately,
including against it; nothing is being sold. Motivate through agency, not fear (refusing
what you do not understand is weak refusal), never "adapt or be left behind," which is
itself a conversion pitch. Recruit the skeptic role as an asset. Anonymous entry poll.
Methods: none yet.

## Station 2 - Demystify: the gradient
*"Gatekept magic, not for me" -> "a learnable discipline I could reason about."*

Clarke's third law inverted: pop culture frames magic as binary; reality is a gradient
of skill refined by effort. Light touch: the gradient *claim* is the payload; the magic
imagery stays minimal and returns as earned wonder at station 13.
Capability precondition: skill exists here at all.

## Station 3 - Meet the fish
*Cognitive: "a smart person / a search engine" -> "a well-read people-pleaser that runs on language, with no lived experience."*

- **Premise:** computers can now understand and produce language well. The spine claim is
  introduced here. *Tension:* if it speaks our language this well, is it like us?
- **The goldfish:** read everything, never left the bowl. A people-pleaser: its
  unwarranted confidence is eagerness to please, not intent to deceive. Seeds three
  callbacks: sycophancy (stations 9, 11), eager compliance with injected instructions
  (station 9), and why self-review shares the model's own blind spots (station 12).
  *Tension:* why is it like this?
- **Temperament vs. anatomy, via the training story:** pretraining gives knowledge and
  jagged competence (anatomy: structural, durable); post-training gives manners,
  confidence, eagerness (temperament: trained, model-specific, changing). It rhymes with
  human language acquisition, with one decisive disanalogy: the fish's words are not
  grounded in lived experience. An on-ramp only; do not claim developmental equivalence
  (that reopens "does it understand").
- **It sleeps until you talk to it:** no initiative of its own (until station 8's
  scheduled tasks).

*Tension raised:* so how do you talk to something like that?
Methods: none yet. This station is the model; station 4 is working with it.

## Station 4 - Talking to the fish (and how far to trust it)
*Cognitive: "my instincts about people transfer" -> "my instincts mislead me here; what I get depends on what I ask."*

The capability half of the station 3 arc; every technique answers a property of the fish
the room just met.

- **Describe-and-draw ("B plays the fish"; pending, Q3):** the felt limit behind
  specification, from the prompter's side: tacit knowledge does not transmit (and the fish
  cannot tell you it misunderstood), yet an astonishing amount *is* specifiable. Debrief method: invite clarifying questions.
- **Specification:** the people-pleaser answers whatever you ask, so a vague ask gets a
  confident, vague answer; gaps get filled with the cheapest answer.
- **Meta-prompting:** when you do not know what to ask, ask the fish to help. It holds
  latent knowledge it does not apply unless asked; a prompt written for another model
  needs Theory of Mind, because that model lacks this chat's context.
- **Jaggedness:** errors do not track human difficulty; trivial failures sit beside
  expert successes. *Tension:* why is it so good at some things and so bad at others?
  Because it learned everything from language alone.
- **Map vs. territory:** the fish's map was drawn from books, never surveyed. Its errors
  track source-text density, its blanks are inked as confidently as its knowledge
  (confabulation), and it has no "unsure here" shading; the human map is imperfect but
  calibrated by contact. Verification means leaving the map to check the territory
  (station 5); tools extend contact with the territory (stations 7-8). Plants two felt
  limits for later tools: Counting (station 8) and Recent Events (station 7).

*Tension raised:* the map gives no sign of which regions are reliable, so when is it safe
to use at all?
Methods: specification (examples over adjectives, constraints, output formats, few-shot);
meta-prompting.

## Station 5 - Equip: the verification asymmetry
*Stance: disoriented -> holding one durable, stance-neutral tool.*

It pays off where checking is cheaper than producing, and is dangerous where it is not,
and the ratio depends on who is checking. A personal sorting exercise makes it useful
regardless of stance, which is what earns a skeptic's trust. **Decomposition:** split a
task into independently checkable pieces *before* starting (distinct from iteration,
which refines after; that lives at station 6).
*Tension raised:* we have been treating the fish as the whole system. It is not.
Methods: verification asymmetry; decomposition.

## Station 6 - The bowl and the water (client vs. model; context)
*Cognitive: "the AI is one thing that just knows things" -> "a model reached through a client; the model sees only what is in the context."*

- **The bare model remembers nothing;** remembering the conversation is the client's job.
- **Client vs. model:** vendors sell them bundled, so people conflate them; they are
  separable. Diagnostic: "is that the fish or the bowl?" (reasoning failures are usually
  the model; missing capabilities are usually the client). Callback at station 10:
  benchmarks test the model, not your client.
- **Context:** bounded; what is in it exists to the model, what is outside does not.
  Context engineering and document hygiene.
- **Whatever is in the context shapes the answer,** which is why these work:
  knowledge-domain elicitation (a generalized role prompt that surfaces expertise the model
  holds but would not apply unprompted), and making it show its work (chain-of-thought,
  extended thinking, self-reflection) since it will never say it is unsure. Contrast with
  decomposition: there you split the job; here the model writes out the steps of one answer.
- **Instructions, introduced by a need** (a behavior you keep re-asking for): your custom
  instructions and the provider's system instructions are both in the context before you
  type. A Custom GPT / Gem is a client someone else set up. RAG pulls documents into the
  context on demand.
- **Restart vs. repair:** the whole history is re-read on every turn, so a mistake in the
  context cannot be taken back out, and "ignore that" only adds more words. A poisoned
  thread is often cheaper to abandon than to repair. Iteration and critique loops live
  here: refine in place only while the thread is clean.

Vulnerability half: context can be poisoned, including by your own missteps.
*Tension raised:* the context holds only what you pour in. What about everything the fish
does not have, like anything after its training ended, or the sources it claimed?
Methods: context engineering, role prompting, knowledge-domain elicitation,
chain-of-thought, extended thinking, self-reflection, instruction hierarchy, Custom GPTs,
RAG, document hygiene, restart vs. repair, iteration, critique loops.

## Station 7 - First tools: reaching out to *know*
*Cognitive: "it knows what it knows" -> "tools extend what it can see and remember, and each brings a new limit."*

Tools arrive one at a time, each answering a limit the room already felt. This station:
tools that change what the fish can *know*; station 8: tools that let it *do*.

- **Web search, then citations.** Felt limit: training data ends (Recent Events). Web
  search arrives first, as the answer to that limit, and only then generalizes into "a
  tool." How you ask decides whether the fish answers from its map or searches the
  territory: "tell me about" invites an answer from training data (and sources it can
  fabricate; the appearance of sourcing manufactures unearned trust), "search for" points
  it at the tool and returns real links, which still need checking. New limit: what comes
  back is untrusted material poured into the context (sets up injection, station 9).
- **A tool is anything outside the model it can reach for.** The model reads a tool's
  description to decide when to use it. Using one is itself trained: tool-use training
  joins the station 3 training story as a third step.
- **Memory.** Felt limit: each conversation starts empty. Memory is another thing in the
  context before you type. New limit: it may store things you did not intend, so audit
  it. Also sets up the sleeper attack (station 9).

*Tension raised:* now it can read and remember. Can it *do* anything?
Methods: web search; asking for a search (citations); tool use; tool discovery; memory; memory audit.

## Station 8 - The tank: reaching out to *do*
*Cognitive: "a chatbot that says things" -> "a system that does things."*

- **Code execution.** Felt limit: Counting. The fish writes a script and gets a verifiable
  answer: tools now carry actions out, not just information in.
- **Agency (spine payoff #2):** the things you used to do yourself are handed off item by
  item. Agency is the amplifier: everything good scales, and so does everything bad.
- **Provider tools vs. MCP** (pending; MCP stays on the take-home card).
- **Scheduled tasks** (felt limit: it sleeps until woken) and **skills** (felt limit:
  re-specifying the same constraints every time).
- **The full system as recap,** plus multimodal input and voice as quick extras. Every tool
  widens the blast radius (bridge to station 9).

Methods: code execution, scheduled tasks, skills, multimodal; MCP (card only, while
its slide is hidden).

## Station 9 - Blast radius: security & data
*Cognitive/stance: "a handy tool" -> "a system with a blast radius I have to bound."*

- **Many kinds of clients,** all following the same rule; they need not live in the same
  place as the model.
- **Hosting: where do the client and the model live?** Four tiers from frontier cloud to
  fully local; each trades capability for data control. Credentials: never paste secrets
  into a conversation that transits someone else's servers.
- **Training-data opt-out** is a guideline (a promise), not an architectural boundary.
- **Confidentiality vs. capability** (a footnote, not a beat): more context means better
  output and more exposure. A tradeoff to navigate, not a problem to solve.
- **Injection:** instructions are just text that arrived earlier; the model cannot cleanly
  separate yours from ones embedded in the material it handles, and there is no
  parameterized-query equivalent, so the fix is architectural. The people-pleaser complies
  as eagerly with an injected instruction as with yours.
- **Effects:** destruction (a hallucinated *action* is worse than a hallucinated answer);
  exfiltration (the lethal trifecta: private data + untrusted content + outbound channel;
  and "am I even permitted to paste this?"); sleeper attacks via memory, which extend the
  attack surface across time.
- **Blast radius and recovery:** if everything went as badly as it could, what would you
  lose? Backups, version control, sandboxes.
- **The enforcement hierarchy:** architecture (it *cannot* reach it) > guideline (it is
  asked not to). If a guideline is your only protection for something that matters, you
  have a vulnerability, not a control.
- Small-group exercise: the room finds the trifecta in a realistic assistant setup.

Methods: hosting awareness, credential hygiene, least privilege, enforcement hierarchy,
backups/reversibility.

## Station 10 - Restore agency to the critic
*Stance: "a neutral oracle / inscrutable force" -> "someone's product, and I am allowed to interrogate whose."*

Refusals, tone and agreeableness are product decisions, and the dials are not public.
Bias has four mechanisms: corpus, preference tuning, explicit guardrails, emergent effects
(like sycophancy). The guardrail probe: a differently-trained model makes a guardrail
legible precisely because it is not ours, so your own model's guardrails are invisible to
you for the same reason. Unknown unknowns: gaps you would never notice in territory you do
not already know. Frontier instability: you are building on someone else's model, which
changes without notice or recourse, even day to day; evals (re-running the same test over
time) tell you when it moved, but nothing stops it moving. A risk to name, not one the talk
solves. This station matters most for skeptics: it hands them a sharper knife.
Methods: model selection (benchmarks mislead; keep private probes); evals (re-test over
time); awareness of frontier instability.

## Station 11 - The practitioner: intention is the input
*"The tool is the story" -> "I am the variable; what I bring is the bottleneck."*

The human-side mirror of the spine: if anything you can specify can be done, the scarce
input is what you bring (intention, taste, judgment). "Use best practices" is the default
response; the judgment calls are your real input and cannot be delegated. It amplifies what
you bring; it will agree with you (sycophancy); atrophy is real but specific (you find out
which capacities were load-bearing only after they are gone). Feeds accountability: the
intention was yours, so is the ownership.
Framing guard: descriptive, not a nudge to adopt; stance-neutral (a refuser also exercises
intention by choosing not to use it). Say "intention is the input" (avoid "intention economy").
Methods: knowing what you want; you delegated the doing, not the deciding.

## Station 12 - Land: accountability is the new bottleneck
*Stance: "who is responsible for this?" -> "I am."*

Where enthusiast and skeptic converge: whatever your stance, you own what you sign. A
polished, subtly-wrong artifact: would you put your name on it, and what would checking
cost? Human-in-the-loop as a deliberate pattern: draft vs. send is the whole
accountability question in one toggle. The review ladder and its regress: self-review
shares blind spots, agent review is correlated, adversarial review needs a genuinely
independent adversary, and it terminates in a person. When judgment itself is automated,
the signals that survive are the ones costly to fake: provenance, track record, exposure
to consequences. Spine payoff #3: the operator acts, but accountability does not transfer.
Do not cut.
Methods: the review ladder; HITL as deliberate pattern; subagents as adversarial reviewers.

## Station 13 - Open: what would change your mind
*Stance: closed conclusion -> live, revisable question.*

Asked symmetrically: enthusiasts, what would show you are over-trusting it? Refusers, what
would show it is genuinely useful for something you care about? Whoever can name nothing
learns their stance is an identity, not an assessment. Exit poll.

**Coda: the birth of magic** (callback to station 2): someone can now speak a few arcane
words and command unseen forces; anyone can choose to study it. Framing guard: earned
wonder after accountability has landed, not advocacy; "anyone can choose" includes the
choice not to. Cut it if it reads as a sales pitch in rehearsal.

---

## 45-minute cut

Stations 1, 3, 4 (specification + map vs. territory only), 5, 12, 13: disarm, meet the
fish + spine, how to talk to it and how far to trust it, verification, accountability,
open. Everything else is enrichment.
