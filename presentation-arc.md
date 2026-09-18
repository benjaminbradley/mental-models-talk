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
**Output format specification** - the difference between "give me a list of sushi
restaurants" and "give me a list of sushi restaurants near 78757 ranked by average Yelp
review, including price range and average wait time for dinner on a Tuesday." A prepared
comparison: plain prompt vs. role-prompted vs. knowledge-domain-prompted ("what domains of
knowledge are relevant to this project? what perspectives and best practices does each
contribute?"). The knowledge-domain prompt is a generalized form of role prompting - it
surfaces expertise the model already holds but would not apply unprompted (callback: the
pink elephant).
**Meta-prompting** - "help me write a better prompt for this task." Useful cross-platform:
write a prompt in one model to run in another, but use Theory of Mind because the second
model will not have this chat's context (callback: pink elephant again).
Methods: specification - examples over adjectives, constraints generate quality,
explicit output formats, few-shot; role / persona prompting; knowledge-domain
elicitation; meta-prompting.

## Station 4 - Install the working model (and let it misbehave)
*Cognitive: "my instincts about people transfer" -> "my instincts actively mislead me here."*

The pivotal unlearning moment. Two properties, carried by two composed images:

- **Confidence decoupled from knowledge (confabulation).** The goldfish is a
  **people-pleaser**: it desperately wants to be a good conversationalist and will never
  admit it is out of its depth. The unwarranted confidence is a symptom of
  eagerness-to-please, NOT intent to deceive - it is not lying, the mechanism is just
  running unanchored. Connects straight to sycophancy.
- **Competence has no map (jaggedness).** Errors do not correlate with human difficulty;
  trivial failures sit beside expert successes. Carried by the **map vs. territory** model
  (open-questions Q2): the fish drew its map entirely from books, never surveying the
  territory, so the map is accurate in some regions and confidently wrong in others and it
  cannot see the difference. Blanks get inked with the same confident hand - which is also
  confabulation.

Fused image (segue into 6b): *an eager guide who read every travel book but never left
home, navigating by a map it drew from those books - confidently, and it will never say it
is unsure unless you ask.*

**Three-beat reveal (map vs. territory).** (1) The **territory** - the landscape of
knowledge itself; shown to set the metaphor but deliberately not detailed (nobody holds
the true map); it exists as the referent verification appeals to. (2) The **human map** -
imperfect and different from the territory, but calibrated by lived contact; carries
honest "here be dragons" shading. (3) The **fish/LLM map** - compiled from books, never
surveyed: errors track source-text density not difficulty (jaggedness), blanks inked
confidently (confabulation), no "unsure here" shading. The teaching engine is the
comparison; verification = leaving the map to check the territory (station 5); tools =
extending contact with the territory.

**Temperament vs. anatomy**, built in via the training story: the fish first *reads the
whole library* (pretraining -> its knowledge and its jagged competence = anatomy:
structural, durable), then goes through an *apprenticeship of practice conversations with
feedback* (post-training / RLHF -> its manners, confidence and eagerness = temperament:
trained, model-specific, softening over time). Rhymes with human language acquisition
(exposure then feedback) with one decisive disanalogy: a child's words are grounded in
lived experience; the fish's are not. On-ramp only - do not claim developmental
equivalence (reopens the "does it understand" question we do not adjudicate). In map terms: the map's *content* is anatomy; the uniform confident *ink* (no "unsure here" shading) is temperament.

Beat that surfaces the jagged self-assessment - the **citations ladder**: "tell me about
X" -> "...with sources" (fabricable; the appearance of sourcing manufactures unearned
trust) -> "...with verified sources" (the model uses tools to check the URLs against
reality). The danger is the gap between the second and third: unverified sourcing is more
dangerous than none.

Methods: reliability levers - chain-of-thought / "show your work"; **extended
thinking** - directing the model to "think about X" as part of a multi-step prompt (e.g.
"think about what criteria are most helpful to evaluate this" before a ranking query).
Thinking levels (low/medium/high) are a user-facing control: more thinking = deeper
analysis but slower and sometimes *over*-thinking (diminishing returns, analysis paralysis).
Prepared comparison: same query with and without a "think about the criteria" preamble.
And self-reflection (ask it to grade its confidence, flag knowledge-cutoff gaps, or search
when unsure) - a lever, not an oracle: the self-assessment is itself jagged, so it reduces
the problem without removing your obligation to verify (station 5), and you must still know
to ask (pink elephant, station 3).
Delivery: pre-capture anything that must land; never live-demo confabulation. Live-demo
only where any outcome teaches (e.g. same prompt run 3x for non-determinism).

## Station 5 - Equip: the verification asymmetry
*Stance: disoriented -> holding one durable, stance-neutral tool.*

The most useful takeaway: it pays off where checking is cheaper than producing, and is
dangerous where it is not. Individual-then-pair: each person lists ~5 real work tasks
and sorts each on "is checking cheaper than doing?", then challenges a partner.
Personally useful regardless of stance - which is what earns a skeptic's trust.
Methods: verification asymmetry + iteration - first output is material not product;
critique loops. **Decomposition** deserves its own beat: breaking a complex task into
sub-tasks *before* starting, so each piece can be verified independently. Distinct from
iteration (which refines *after*). Needs a demonstration - see open-questions Q11.
Knowing when to abandon a thread (callback: restart vs. repair, station 6a).

## Station 6 - The bowl and the fish (client vs. model)
*Cognitive: "the AI is one thing" -> "a model (the fish) reached through a client (the bowl); the interface is not the intelligence."*

You never talk to the raw fish - you talk through a **client**, the **bowl** it sits in: a
simple one, a fancy one, or a mobile one. The **model** (the fish) is the intelligence; the
**client** (the bowl and its fittings) decides what is wired up. The bowl's **fittings**:
- the **water** it holds (**context**, 6a) - and how much water the bowl can hold (the
  context window)
- a **notepad** (memory / personalization, 6a)
- a **camera and ears** (multimodal: vision, voice/audio, image generation)
- **tubes to the outside** (tools / web / MCP, 6b)
- an **alarm clock** (scheduled / recurring tasks, 6b)
- **recipe cards** (skills / reusable playbooks, 6b)
- a **microphone** (voice conversation - worth noting the difference between
  speech-to-text/text-to-speech transcription and native voice mode, where the model
  reasons directly on audio; candidate to cut for time)
Big vendors sell a fish already installed in a bowl, so people conflate them -
but they are separable, and the useful diagnostic is *"is that the fish or the bowl?"* (a
reasoning failure is usually the model; a missing capability like search or memory is
usually the client). Callback at Station 7: choosing well means choosing the fish AND the
bowl - benchmarks test the fish, not your bowl. NOTE: verify current product names before
the talk.

## Station 6a - Context: the window
*Cognitive: "it just knows things / remembers me" -> "a bounded window; what is in the circle exists, what is outside does not."*

Craft half (kept here): context engineering - what you load, document hygiene,
projects/RAG. **Memory and the instruction hierarchy:** the stack of instructions that
shape behavior before you type anything: provider system instructions (invisible, baked
in by the vendor) -> user custom instructions (your persistent preferences) -> project
instructions (scoped to a workspace) -> your prompt. Custom GPTs / Gems / Projects are
products built on this stack. **RAG** (retrieval-augmented generation) - the system
pulling relevant documents into context on demand; same principle as projects but can
draw from larger knowledge bases. Candidate to cut for time but worth a mention: it is
how enterprise deployments work, and it is coming to consumer products.

**Restart vs. repair (the cooking metaphor).** The entire conversation history is
delivered with every request - the model re-reads the whole thread each time. Mental
model: you are deciding the ingredients; the model does the cooking. If you accidentally
add salt instead of sugar, you cannot "take out the salt" - the salt is in the water now.
Comparing: conversation A+B -> "not B" -> C (the salt is still in there, and now "not B"
is also in the water) versus starting fresh: A -> D. A poisoned thread is often cheaper
to abandon than repair. Demonstrate with a context-management example.

Vulnerability half: context can be poisoned, including by your own earlier missteps;
attaching a document is not understanding it. Goldfish extension: the fishbowl water can
be poisoned. Candidate example: the pink-elephant / negation poisoning story
(open-questions).
Methods: context engineering, memory/instruction hierarchy, projects/RAG, document
hygiene, restart vs. repair.

## Station 6b - Agency: tool use
*Cognitive: "a chatbot that says things" -> "a system that does things."*

Tools let the fish reach out and act. **This is where the "operator todo list"
lands:** the things you used to do yourself - create the API key through a browser, send
the message, file the thing - now handed off item by item. The payoff of the spine claim.

**Provider-specific tools vs. MCPs.** Two kinds of plumbing: (1) proprietary tools that
only work with one vendor's tank (ChatGPT plugins, Claude's built-in web search, Gemini's
Google integrations); (2) **MCP** (Model Context Protocol) - an industry-standard
connector that works with any compatible tank. Mention the tool discovery / description
process: the model reads a tool's description to decide when and how to use it, which is
why tool descriptions matter and why a badly described tool misbehaves.

**Scheduled / recurring tasks** - some tanks have an alarm clock: set up automated runs
on a schedule (daily briefs, monitoring, periodic reports). The fish works while you
sleep.

**Skills / reusable playbooks** - recipe cards you attach to the bowl: packaged
instructions for recurring tasks so you do not re-specify every time.

Agency is the amplifier: everything good scales, and so does everything bad. Goldfish
extension: connecting tools to the bowl to extend the fish's reach.
Methods: tool use (provider-specific + MCP), connectors, tool discovery, browser/computer
use, delegation/subagents, scheduled tasks, skills/playbooks.

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
**Frontier instability.** The models you build on are someone else's fish, and
they change without notice and without recourse. A workflow that worked yesterday can
break because the provider updated the model. Implication for anyone building business
processes on top: you are building on a service you do not control. This is a risk to
name, not a problem the talk solves.
Methods: model selection - the frontier runs across models too, benchmarks mislead,
keep private probes; awareness of frontier instability.

## Station 7b - The practitioner: intention is the input
*Stance/cognitive: "the tool is the story" -> "I am the variable; what I bring is the bottleneck."*

The human-side mirror of the spine: if anything you can specify can be done, the scarce
input becomes what you bring - **intention**, taste, judgment. "Use best practices" is a
fine default; the judgment calls (what matters, how you want it) are your real input, and
they cannot be delegated. Gathers the loose practitioner threads: it amplifies what you
bring; it will agree with you (sycophancy callback); atrophy is real but specific - some
capacities are load-bearing and you find out which only after they are gone. Feeds straight
into accountability: the intention was yours, so is the ownership.
Framing guard: descriptive, not a nudge to adopt (advocacy is the main failure mode);
stance-neutral - a refuser also exercises intention, by choosing not to use it. On-stage
phrase: "intention is the input" (avoid the loaded term "intention economy").
Methods: knowing what you want / writing the spec; callbacks to specification (station 3)
and the operator todo list (6b) - you delegated the doing, not the deciding.

## Station 8 - Land: accountability is the new bottleneck
*Stance: "who is responsible for this?" -> "I am."*

Where enthusiast and skeptic converge: whatever your stance, you own what you sign.
Present a polished, subtly-wrong artifact - would you put your name on it? What would
you check, and how long would that take? **Human-in-the-loop (HITL)** as a deliberate pattern, not an afterthought.
Callback to station 6b (tool use): the difference between "draft this email" and "send
this email" is the entire accountability question in one toggle. Demo: email
drafting vs. sending - who pressed send? Walk the review ladder and let them find the
regress: human review rubber-stamps, agent review has correlated blind spots,
adversarial review needs a genuinely independent adversary, and it terminates in a
person. When judgment itself is automated, the signals that survive are the ones
costly to fake: provenance, track record, exposure to consequences. Third payoff of
the spine: the operator acts, but accountability does not transfer. Do not cut.
Methods: the review ladder; HITL as deliberate pattern (draft vs. send);
subagents return as adversarial reviewers.

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
- St.4 - people-pleaser goldfish (confidence decoupled from knowledge) + the map/territory
  model (territory -> human map -> fish map) carrying jaggedness, fused as a segue.
  Temperament vs. anatomy via the training story. (Q2 resolved.)
- St.6 - client vs. model: the bowl (client, simple/fancy/mobile) and the fish (model).
- St.6 - fittings catalog: water (context), notepad (memory), camera/ears
  (multimodal), tubes (tools/MCP), alarm clock (scheduled), recipe cards (skills),
  microphone (voice).
- St.6a - a bounded container, inside exists / outside does not. (The water in the bowl.)
  The cooking metaphor for restart-vs-repair: you decide the ingredients, the model cooks;
  salt in the water cannot be taken out.
- St.6b/c - agency as amplifier; provider tools vs. MCPs; injection as outside voices;
  least privilege as "don't give the intern the keys."
- St.8 - accountability that does not transfer to the operator.
