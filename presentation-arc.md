# Presentation Arc (v1)

The scoped audience journey. This is the backbone; metaphors and unresolved choices
live in `open-questions-and-ideas.md` and are linked from here.

## Framing

**Win condition:** literacy, not conversion. Contested questions raised, never
adjudicated. Facilitator drift into advocacy is the primary failure mode.

**Three tracks.** Every station is built against three simultaneous journeys:
- **Cognitive** — the mental model they hold right now.
- **Stance** — how they feel about the whole enterprise (suspicion -> sober ownership).
- **Capability** — what they can actually do (the practical methods).

**Design principle:** *felt limit -> method that addresses it -> new limit the method
introduces.* No technique appears as a "techniques chapter"; each enters as the answer
to a limitation the room just felt.

**Emotional spine:** suspicion -> curiosity -> productive disorientation ->
equipped confidence -> sober responsibility.

**The through-line (the spine claim):** anything you can specify clearly enough in
language, a computer can now do. Introduced at station 3, made literal at 6b (the
"operator todo list"), and closed at station 8 (the operator acts, but accountability
does not transfer).

---

## Station 1 - Disarm + Acknowledge
*Stance: guarded suspicion -> permission to engage.*

Name the real problems out loud first - bubble dynamics, datacenter/energy footprint,
labor displacement, training-data provenance - and say plainly the talk does not
adjudicate them. Then the contract: "The goal is that you can reason about this
accurately, including against it. I am not selling you anything." Motivate through
agency, not fear (refusing what you do not understand is weak refusal) rather than
"adapt or be left behind," which is itself a conversion pitch. Recruit the skeptic
role as an asset. Anonymous entry poll on stance/usage. *(Polls: see bookmark in
open-questions.)*
Methods: none yet.

## Station 2 - Demystify: the gradient
*Stance/cognitive: "gatekept magic, not for me" -> "a learnable discipline I could reason about."*

Clarke's third law inverted: pop culture frames magic as binary (wizards vs muggles);
reality is a gradient, skill refined in proportion to effort.
**OPEN:** whether the *magic* metaphor itself belongs here or later. The gradient
*claim* stays here regardless; the magic *imagery* may land better after the
capability multiplier is demonstrated. See open-questions.
Capability precondition: establishes that skill exists here at all.

## Station 3 - Dislodge the wrong model + install the spine
*Cognitive: "a smart person / a search engine" -> "it runs on language, which both carries more and leaks more than you think."*

The pair exercise - **describe-and-draw** primary; explain-a-work-process backup;
verbal "directions without landmarks" as the materials-free fallback. They generate
the failure themselves, so it cannot be dismissed as rigged. Two payloads at once:
the **limit** (tacit knowledge does not transmit; "it cannot tell you it
misunderstood") and the **power** (an astonishing amount genuinely *is* specifiable).
The power side is the spine claim. Placed here - the pink-elephant / Theory-of-Mind anecdote (see open-questions): it holds worlds of latent knowledge but does not apply them unless you know what to ask for.
Methods: specification - examples over adjectives, constraints generate quality,
explicit output formats, few-shot.

## Station 4 - Install the working model (and let it misbehave)
*Cognitive: "my instincts about people transfer" -> "my instincts actively mislead me here."*

The pivotal unlearning moment. One durable handle for what the thing is, which must
carry **jaggedness** (errors do not correlate with difficulty; trivial failures sit
beside expert successes) and **confabulation** (confident, fluent, wrong; fluency and
accuracy are independent axes; not lying, just the mechanism running unanchored).
No install-then-break - we want a model that shows these natively.
**Working metaphor: the goldfish who has read every book.** Chosen for its visual
potential and because it evolves across later stations: the fishbowl becomes the
context window (station 6a), tools connect to the bowl (6b), and the fish knows the
outside world only through the books it has read. Full spec and the open jaggedness
question in open-questions.
Methods: reliability levers - chain-of-thought / "show your work" (doubles as a peek
under the hood).
Delivery: pre-capture anything that must land; never live-demo confabulation.
Live-demo only where any outcome teaches (e.g. same prompt run 3x for non-determinism).

## Station 5 - Equip: the verification asymmetry
*Stance: disoriented -> holding one durable, stance-neutral tool.*

The most useful takeaway: it pays off where checking is cheaper than producing, and is
dangerous where it is not. Individual-then-pair: each person lists ~5 real work tasks
and sorts each on "is checking cheaper than doing?", then challenges a partner.
Personally useful regardless of stance - which is what earns a skeptic's trust.
Methods: verification asymmetry + iteration - first output is material not product,
decomposition, critique loops, knowing when to abandon a thread.

## Station 6a - Context: the window
*Cognitive: "it just knows things / remembers me" -> "a bounded window; what is in the circle exists, what is outside does not."*

Craft half (kept here): context engineering - what you load, document hygiene,
projects/RAG, restart-vs-repair (a poisoned thread is often cheaper to abandon than
fix). Vulnerability half: context can be poisoned, including by your own earlier
missteps; attaching a document is not understanding it. Goldfish extension: the
fishbowl water can be poisoned. Candidate example: the pink-elephant / negation
poisoning story (open-questions).
Methods: context engineering, projects/RAG, document hygiene.

## Station 6b - Agency: tool use
*Cognitive: "a chatbot that says things" -> "a system that does things."*

Tools / MCP / connectors, plus browser integration and computer use, let it reach out
and act. **This is where the "operator todo list" lands:** the things you used to do
yourself - create the API key through a browser, send the message, file the thing -
now handed off item by item. The payoff of the spine claim. Agency is the amplifier:
everything good scales, and so does everything bad. Goldfish extension: connecting
tools to the bowl to extend the fish's reach.
Methods: tool use, connectors, browser/computer use, delegation/subagents.

## Station 6c - Blast radius: security & data
*Cognitive/stance: "a handy tool" -> "a system with a blast radius I have to bound."*

Injection: instructions are just text that arrived earlier, so it cannot cleanly
separate yours from ones embedded in the material it handles; no parameterized-query
equivalent, so the fix is architectural. The **lethal trifecta** (Willison): private
data + untrusted content + outbound channel - any two survivable, all three
exploitable. And the professional's real question: *am I even permitted to paste
this?* Small-group exercise: an assistant with mailbox access that reads attachments
and can send mail - what goes wrong? Groups find the trifecta themselves.
Methods: architectural limits - least privilege, separate accounts, read/write scoping
(from the Inputs-tab recommendations).

## Station 7 - Restore agency to the critic
*Stance: "a neutral oracle / inscrutable force" -> "someone's product, and I am allowed to interrogate whose."*

A designed commercial artifact: refusals, tone, agreeableness are product decisions.
Bias stratified into four mechanisms (corpus, preference tuning, explicit guardrails,
emergent effects like sycophancy). The guardrail probe - asking a differently-trained
model about a censored topic, legible precisely because that guardrail is not ours -
immediately generalized: your own model's guardrails are invisible to you for the same
reason. Matters most for skeptics; hands them a sharper knife.
Methods: model selection - the frontier runs across models too, benchmarks mislead,
keep private probes.

> **Candidate beat - the practitioner & the intention economy (placement OPEN).**
> It amplifies what you bring; taste becomes the bottleneck; it will agree with you.
> The "intention economy" idea: your projects are bounded, and therefore defined, by
> how much intention you put in - "use best practices" is the default; your judgment
> calls about what matters and how you want it are your real input. Candidate home:
> a short beat here, feeding directly into accountability. See open-questions.

## Station 8 - Land: accountability is the new bottleneck
*Stance: "who is responsible for this?" -> "I am."*

Where enthusiast and skeptic converge: whatever your stance, you own what you sign.
Present a polished, subtly-wrong artifact - would you put your name on it? What would
you check, and how long would that take? Walk the review ladder and let them find the
regress: human review rubber-stamps, agent review has correlated blind spots,
adversarial review needs a genuinely independent adversary, and it terminates in a
person. When judgment itself is automated, the signals that survive are the ones
costly to fake: provenance, track record, exposure to consequences. Third payoff of
the spine: the operator acts, but accountability does not transfer. Do not cut.
Methods: the review ladder; subagents return as adversarial reviewers.

## Station 9 - Open: what would change your mind
*Stance: closed conclusion -> live, revisable question.*

Asked symmetrically. Enthusiast: what would you have to see to conclude you are
over-trusting this? Refuser: what would you have to see to conclude it is genuinely
useful for something you care about? Whoever can name nothing learns their stance is
an identity, not an assessment. "Literacy, not conversion" in one question. Exit poll
here (bookmarked).

---

## 45-minute cut

Stations 1, 3, 5, 8, 9 - disarm, dislodge+spine, verification, accountability, open.
Everything else is enrichment.

## What each station needs from a metaphor (audition brief)

- St.2 - capability-as-gradient, non-triumphalist. (Magic/Clarke; placement open.)
- St.3 - language as instruction-set with a tacit residue. (The spine.)
- St.4 - jaggedness + confident confabulation + no self-knowledge of error.
  (Goldfish is the working choice; jaggedness is the hard seam to verify.)
- St.6a - a bounded container, inside exists / outside does not. (Goldfish bowl.)
- St.6b/c - agency as amplifier; injection as outside voices; least privilege as
  "don't give the intern the keys."
- St.8 - accountability that does not transfer to the operator.
