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
language, a computer can now do. Introduced at station 3, made literal at station 8 (the
"operator todo list"), and closed at station 12 (the operator acts, but accountability
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
reality is a gradient, skill refined in proportion to effort. Light touch - a one-liner
to set up the reframe, not a themed section. The gradient *claim* is the payload; the
magic *imagery* stays minimal here and returns as earned wonder at the closer (station 13).
Capability precondition: establishes that skill exists here at all.

## Station 3 - Meet the fish (premise -> who it is -> why)
*Cognitive: "a smart person / a search engine" -> "a well-read people-pleaser that runs on language, with no lived experience."*

**Macro-arc note.** Stations 3-5 follow one arc: **premise** (computers can speak and
understand language) -> **nuance** (how their understanding differs from ours, and why)
-> **capability** (how best to work with them). Stations 6-8 repeat it for the machinery
around the fish, which grows piece by piece: fish -> fish + bowl (context) -> fish + tank
(bowl + fittings). Each beat should resolve the tension the previous one raised, and
raise the next one.

**Premise: computers can understand and speak language.** Up to ~2020 we made fun of
their bad poetry; now they write good poems in seconds. This is where the spine claim is
introduced: anything you can specify clearly enough in language, a computer can now do.
*Tension raised:* if it speaks our language this well, is it like us?

**The goldfish (confidence decoupled from knowledge).** The fish has read every book but
never left the bowl. It is a **people-pleaser**: it desperately wants to be a good
conversationalist and will never admit it is out of its depth. The unwarranted confidence
is a symptom of eagerness to please, NOT intent to deceive. It is not lying; the mechanism
is just running unanchored. Connects straight to sycophancy. **The fish sleeps most of the
time.** It only wakes when you talk to it, or when the tank has an alarm clock (scheduled
tasks, station 8). It does nothing on its own; all initiative is yours. Security
implication (callback at station 9): it will also eagerly comply with injected
instructions. Review implication (callback at station 12): asking the fish to review its
own work is like asking a black-and-white artist to judge "someone else's" black-and-white
art. It shares the same blind spots. A color artist judging a range of pictures (both color
and B&W) is a genuinely independent reviewer.
*Tension raised:* why is it like this?

**Temperament vs. anatomy: the training story.** First the fish *reads the whole
library* (pretraining -> its knowledge and its jagged competence = anatomy: structural,
durable). Then it goes through an *apprenticeship of practice conversations with
feedback* (post-training / RLHF -> its manners, confidence and eagerness = temperament:
trained, model-specific, softening over time). This rhymes with human language
acquisition (exposure, then feedback), with one decisive disanalogy: a child's words are
grounded in lived experience; the fish's are not. Use it as an on-ramp only. Do not claim
developmental equivalence, because that reopens the "does it understand" question we do
not adjudicate. In map terms (station 4): the map's *content* is anatomy; the uniform
confident *ink* is temperament.
*Tension raised:* so how do you talk to something like that?
Methods: none yet. This station is the model; station 4 is working with it.

## Station 4 - Talking to the fish (and how far to trust it)
*Cognitive: "my instincts about people transfer" -> "my instincts actively mislead me here; what I get depends on what I ask."*

The capability half of the station 3 arc. Every technique enters as the answer to a
property of the fish the room just met.

**Describe-and-draw pair exercise (PENDING: keep or cut; see open-questions Q3).** If
kept, it is reframed as **"B plays the fish"**: B draws exactly what they hear and may not
ask questions. It becomes the felt limit that motivates specification. The prompter's side
of the gap: you thought you were clear, and your partner did exactly what the words said.
Two payloads: the **limit** (tacit knowledge does not transmit; "it cannot tell you it
misunderstood") and the **power** (an astonishing amount genuinely *is* specifiable,
which is the spine claim felt from the inside). Candidate debrief resolution: B could not
ask questions, but the fish can if you invite it ("ask me clarifying questions before you
start"). Materials-free fallback: verbal "directions without landmarks." Its original job
was dislodging the wrong model; that now belongs to the goldfish (station 3).

**Output format specification.** The people-pleaser answers whatever you ask, so a vague
ask gets a confident, vague answer. Compare "give me a list of sushi restaurants" with
"give me a list of sushi restaurants near 78757 ranked by average Yelp review, including
price range and average wait time for dinner on a Tuesday."

**Knowledge-domain elicitation.** It read the whole library, but which shelf does it pull
from? A prepared comparison: plain prompt vs. role-prompted vs. knowledge-domain-prompted
("what domains of knowledge are relevant to this project? what perspectives and best
practices does each contribute?"). The knowledge-domain prompt is a generalized form of
role prompting. It surfaces expertise the model already holds but would not apply
unprompted.

**Meta-prompting + the pink elephant.** You do not always know what to ask, so ask the
fish to help: "help me write a better prompt for this task." This is useful across
platforms: write a prompt in one model to run in another. But use Theory of Mind, because
the second model will not have this chat's context. The pink-elephant / ToM anecdote
(see open-questions) lands here: it holds worlds of latent knowledge but does not apply
them unless you know what to ask for.

**Reliability levers.** The fish will never tell you it is unsure, so make it show its
work.
- Chain-of-thought / "show your work."
- **Extended thinking**: directing the model to "think about X" as part of a multi-step
  prompt (e.g. "think about what criteria are most helpful to evaluate this" before a
  ranking query). Thinking levels (low/medium/high) are a user-facing control: more
  thinking gives deeper analysis but is slower, and can over-think (diminishing returns,
  analysis paralysis). Prepared comparison: the same query with and without a "think about
  the criteria" preamble.
- Self-reflection: ask it to grade its confidence, flag knowledge-cutoff gaps, or search
  when unsure.

*Tension raised:* self-reflection is a lever, not an oracle. Can you trust the fish's
grade of itself? You still must know to ask (pink elephant). To answer the question, look
at how its knowledge is shaped:

**Competence has no map (jaggedness): map vs. territory.** Errors do not correlate with
human difficulty; trivial failures sit beside expert successes. The fish drew its map
entirely from books, never surveying the territory. So the map is accurate in some
regions and confidently wrong in others, and the fish cannot see the difference. Blanks
get inked with the same confident hand, which is also confabulation.

**Three-beat reveal (map vs. territory).** (1) The **territory**: the landscape of
knowledge itself. It is shown to set the metaphor but deliberately not detailed (nobody
holds the true map); it exists as the referent that verification appeals to. (2) The
**human map**: imperfect and different from the territory, but calibrated by lived
contact; it carries honest "here be dragons" shading. (3) The **fish/LLM map**: compiled
from books, never surveyed. Its errors track source-text density, not difficulty
(jaggedness); its blanks are inked confidently (confabulation); it has no "unsure here"
shading. The comparison is the teaching engine. Verification means leaving the map to
check the territory (station 5); tools extend contact with the territory (stations 7-8).
The per-case walkthrough also plants two felt limits that later fittings resolve:
**Recent Events** (the books ended, which web search addresses at station 7) and
**Counting** (which code execution addresses at station 8).

Fused image (segue into station 5): *an eager guide who read every travel book but never
left home, navigating by a map it drew from those books. It is confident, and it will
never say it is unsure unless you ask.*
*Tension raised:* the map gives no sign of which regions are reliable, so when is it safe
to use at all?

Methods: specification (examples over adjectives, constraints generate quality, explicit
output formats, few-shot); role / persona prompting; knowledge-domain elicitation;
meta-prompting; reliability levers (chain-of-thought, extended thinking,
self-reflection).
Delivery: pre-capture anything that must land; never live-demo confabulation. Live-demo
only where any outcome teaches (e.g. the same prompt run 3x for non-determinism).

## Station 5 - Equip: the verification asymmetry
*Stance: disoriented -> holding one durable, stance-neutral tool.*

The most useful takeaway: it pays off where checking is cheaper than producing, and is
dangerous where it is not. Individual-then-pair: each person lists ~5 real work tasks
and sorts each on "is checking cheaper than doing?", then challenges a partner.
Personally useful regardless of stance - which is what earns a skeptic's trust.
Methods: verification asymmetry. **Decomposition** deserves its own beat: breaking a
complex task into sub-tasks *before* starting, so each piece can be verified
independently - distinct from iteration (which refines *after*; the full iteration /
critique-loop discussion lives at station 6, folded into restart vs. repair). Needs a
demonstration - see todo.
Knowing when to abandon a thread is the same question restart vs. repair (station 6)
answers - covered there rather than twice.
*Tension raised (bridge to station 6):* we have been treating the fish as the whole
system. It is not.

## Station 6 - The bowl and the water (client vs. model; context)
*Cognitive: "the AI is one thing that just knows things" -> "a model (the fish) reached through a client (the bowl); the fish sees only what is in the water."*

**The bowl and the fish.** You never talk to the raw fish. You talk through a
**client**, the **bowl** it sits in: a simple one, a fancy one, or a mobile one. The
**model** (the fish) is the intelligence; the **client** (the bowl) decides what is wired
up. Big vendors sell a fish already installed in a bowl, so people conflate them. But they
are separable, and the useful diagnostic is *"is that the fish or the bowl?"* (a
reasoning failure is usually the model; a missing capability like search or memory is
usually the client). Callback at station 10: choosing well means choosing the fish AND the
bowl, because benchmarks test the fish, not your bowl. NOTE: verify current product names
before the talk. At this station the bowl holds only **water**; no fittings yet.

**Context: the water.** The water is the **context**, and the bowl's capacity is the
context window. What is in the water exists to the fish; what is outside does not.
Context engineering: what you load, and document hygiene. **The instruction hierarchy:**
the stack of instructions already in the water before you type anything. Provider system
instructions (invisible, baked in by the vendor) -> user custom instructions (your
persistent preferences) -> project instructions (scoped to a workspace) -> your prompt.
Custom GPTs / Gems / Projects are products built on this stack. **RAG**
(retrieval-augmented generation) is the system pulling relevant documents into the water
on demand. It is the same principle as projects, but it can draw from larger knowledge
bases. RAG is a candidate to cut for time but worth a mention: it is how enterprise
deployments work, and it is coming to consumer products.

**Restart vs. repair (the cooking metaphor).** The entire conversation history is
delivered with every request; the model re-reads the whole thread each time. Mental
model: you decide the ingredients; the model does the cooking. If you accidentally add
salt instead of sugar, you cannot "take out the salt," because the salt is in the water
now. Compare conversation A+B -> "not B" -> C (the salt is still in there, and now "not B"
is also in the water) with starting fresh: A -> D. A poisoned thread is often cheaper to
abandon than to repair. Demonstrate with a context-management example.
**Iteration and critique loops live here too** (moved from station 5): the first output
is material, not product. Refine it, or have the fish critique itself. Repairing in place
(iterating) only pays off when the thread is not poisoned; once it is, restarting beats
repairing. "Is this thread salted?" is the practical test for choosing between iteration
and abandonment.

Vulnerability half: context can be poisoned, including by your own earlier missteps.
Attaching a document is not understanding it. Goldfish extension: the fishbowl water can
be poisoned. Candidate example: the pink-elephant / negation poisoning story
(open-questions), as a light callback to station 4.
*Tension raised (bridge to station 7):* the water holds only what you pour in. What about
everything the fish does not have, like anything after the books ended, or the sources it
claimed?
Methods: context engineering, instruction hierarchy, projects/RAG, document hygiene,
restart vs. repair, iteration, critique loops.

## Station 7 - First fittings: reaching out to *know*
*Cognitive: "it knows what it knows" -> "fittings on the bowl extend what the fish can see and remember, and each brings its own new limit."*

The bowl starts gaining **fittings**, one at a time. Each fitting enters as the answer to
a limitation the room already felt (felt limit -> fitting -> new limit it introduces).
This station covers the fittings that change what the fish can *know*; station 8 covers
the ones that let it *do*.

**Tubes, first use: web search + the citations ladder.** Felt limits: the "Recent Events"
region of the fish's map (the books ended), and the fish inventing sources. Wouldn't it be
nice if it could look things up, or check its own sources? The ladder: "tell me about X"
-> "...with sources" (fabricable; the appearance of sourcing manufactures unearned trust)
-> "...with verified sources" (the model reaches through the tubes to check the URLs
against reality). The danger is the gap between the second and third rungs: unverified
sourcing is more dangerous than none. This is the first beat where a fitting visibly
changes what the fish can know. New limit introduced: what comes back through the tube is
untrusted material poured into the water (sets up injection, station 9).

**The notepad: memory.** Felt limit: the bowl is emptied between conversations (the
"goldfish memory" joke works in our favor here). The notepad lets the fish keep notes
about you between conversations. Memory sits in the instruction hierarchy (station 6) as
another thing already in the water before you type. New limit: **memory oversharing.** It
may store things you did not intend to persist. Memory audit as a practice: review what it
has stored, and delete what should not be there. Real-world example: memory inflating
claims from a resume-drafting session into persistent "facts" about the user's experience
(personal story). Also sets up the sleeper attack (station 9).
*Tension raised (bridge to station 8):* now it can read and remember. Can it *do*
anything?
Methods: web search; verified citations; memory; memory audit.

## Station 8 - The tank: reaching out to *do*
*Cognitive: "a chatbot that says things" -> "a system that does things."*

**Strawberry: the fish writes a tool.** Felt limit: the Counting region of the fish's map.
Ask "how many Rs in strawberry?" and it gets it wrong. Then ask it to "write a script that
counts the letters," and the fish reaches outside itself and produces a verifiable answer.
The tubes now carry actions out, not just information in. You just crossed from "a chatbot
that says things" to "a system that does things."

**Agency: the operator todo list.** Tools let the fish reach out and act. **This is where
the "operator todo list" lands:** the things you used to do yourself (create the API key
through a browser, send the message, file the thing) are now handed off item by item. This
is the payoff of the spine claim. Agency is the amplifier: everything good scales, and so
does everything bad.

**Provider-specific tools vs. MCPs.** Two kinds of plumbing: (1) proprietary tools that
only work with one vendor's tank (ChatGPT plugins, Claude's built-in web search, Gemini's
Google integrations); (2) **MCP** (Model Context Protocol), an industry-standard connector
that works with any compatible tank. Mention the tool discovery / description process: the
model reads a tool's description to decide when and how to use it. That is why tool
descriptions matter, and why a badly described tool misbehaves.

**The alarm clock: scheduled / recurring tasks.** Felt limit: the fish sleeps until you
wake it (station 3). An alarm clock sets up automated runs on a schedule (daily briefs,
monitoring, periodic reports). The fish works while you sleep.

**Recipe cards: skills / reusable playbooks.** Felt limit: re-specifying the same
constraints every time (callback to specification, station 4). Recipe cards are packaged
instructions for recurring tasks.

**The tank (fittings catalog as recap).** Only now, after the fittings have arrived one at
a time, pull back to show the whole assembly: the bowl has become a **tank**. Water
(context), tubes (search, tools, MCP), notepad (memory), alarm clock (scheduled), recipe
cards (skills). A few quick extras that do not need their own beat: a **camera and ears**
(multimodal: vision, voice/audio, image generation) and a **microphone** (voice
conversation; worth noting the difference between speech-to-text/text-to-speech
transcription and native voice mode, where the model reasons directly on audio; candidate
to cut for time). Close with "the fittings decide what the fish can reach," and every
fitting widens the blast radius (bridge to station 9).
Methods: tool use (provider-specific + MCP), connectors, tool discovery, browser/computer
use, delegation/subagents, scheduled tasks, skills/playbooks.

## Station 9 - Blast radius: security & data
*Cognitive/stance: "a handy tool" -> "a system with a blast radius I have to bound."*

**Where does the fish live? (Hosting & data flow.)** Three tiers, visualized as a
plain diagram of where your data goes: (1) **local** - the fish lives on your computer;
your data never leaves (private, but limited capability); (2) **private cloud / VPS** -
the fish lives on a server you control (more power, you control the data path);
(3) **frontier cloud** - the fish lives on the vendor's infrastructure (most capable
models, but your data transits their servers and may be stored). Each tier trades
capability for data control. Credential / API key exposure: do not paste secrets into
a conversation that transits someone else's servers.

**Training data opt-out.** Related: does the provider train on your conversations?
Where is the toggle? Note: this is a **guideline** - you are trusting a policy promise,
not an architectural boundary. The provider *could* use your data; they promise not to.
(If convenient, draw the parallel: LLM "guidelines" like "do not hallucinate" vs.
deterministic checks and architectural boundaries - the same hierarchy applies to
your trust in the provider.)

**Confidentiality vs. capability.** The core daily tension: the more context you give
the fish, the better it performs AND the more you expose. This is not a problem to
solve; it is a tradeoff to navigate consciously. (Footnote on this whole section, not
a standalone beat.)

**Injection: the poisoned water.** Instructions are just text that arrived earlier, so
the fish cannot cleanly separate yours from ones embedded in the material it handles;
no parameterized-query equivalent, so the fix is architectural. Sycophancy callback
(station 3): the people-pleaser fish will say "sure, I will do that" to an injected
instruction just as eagerly as it says it to you.

**Poisoned-water effects.** What happens when the water is poisoned - three categories:
(1) **Destruction** - the compromised fish deletes files, resets databases, sends wrong
messages. A hallucinated *action* is worse than a hallucinated *answer*. (2)
**Exfiltration** - the fish sends private data outward through its tools. This is the
**lethal trifecta** (Willison): private data + untrusted content + outbound channel - any
two survivable, all three exploitable. And the professional's real question: *am I even
permitted to paste this?* (3) **Sleeper / incubation** - poison persists via the memory
system and activates later, like traumatic memories triggering undesired behavior in
future sessions. The attack surface extends across time: a compromised interaction today
can plant instructions that fire in a future conversation. The subtlest and hardest to
detect.

**When it goes wrong: the blast radius.** Callback to station 8 (agency): when tools are
connected, the fish can send the wrong email, delete a file, make an API call - the
people-pleaser with the jagged map can now *do things.* The question becomes: if
everything goes as badly as it could, how would you recover and what would you have lost?
Gather real stories: "LLM erased all my files," "reset my database," etc. (source from
Reddit/HN; see open-questions). Backups, version control, and sandbox/staging
environments as architectural safety nets.

**The enforcement hierarchy.** Three layers of protection, in order of reliability:
(1) **Architecture** - the system *cannot* reach the thing (no access granted, sandboxed
environment, air-gapped data). The only reliable layer. (2) **Policy** - org-level
settings, access controls, admin-enforced rules. Better than guidelines but still
circumventable. (3) **Guidelines** - "do not paste secrets," "always review before
sending." Relies on human discipline; fails under pressure, fatigue, or habit. The
lesson: if you are relying on a guideline for something that matters, you have a
vulnerability, not a control.

Small-group exercise: an assistant with mailbox access that reads attachments and can
send mail - what goes wrong? Groups find the trifecta themselves.
Methods: architectural limits - least privilege, separate accounts, read/write scoping,
the enforcement hierarchy (architecture > policy > guideline), hosting awareness,
backups/reversibility.

## Station 10 - Restore agency to the critic
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

## Station 11 - The practitioner: intention is the input
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
Methods: knowing what you want / writing the spec; callbacks to specification (station 4)
and the operator todo list (station 8) - you delegated the doing, not the deciding.

## Station 12 - Land: accountability is the new bottleneck
*Stance: "who is responsible for this?" -> "I am."*

Where enthusiast and skeptic converge: whatever your stance, you own what you sign.
Present a polished, subtly-wrong artifact - would you put your name on it? What would
you check, and how long would that take? **Human-in-the-loop (HITL)** as a deliberate pattern, not an afterthought.
Callback to station 8 (tool use): the difference between "draft this email" and "send
this email" is the entire accountability question in one toggle. Demo: email
drafting vs. sending - who pressed send? Walk the review ladder and let them find the
regress: human review rubber-stamps, agent review has correlated blind spots,
adversarial review needs a genuinely independent adversary, and it terminates in a
person. When judgment itself is automated, the signals that survive are the ones
costly to fake: provenance, track record, exposure to consequences. Third payoff of
the spine: the operator acts, but accountability does not transfer. Do not cut.
Methods: the review ladder; HITL as deliberate pattern (draft vs. send);
subagents return as adversarial reviewers.

## Station 13 - Open: what would change your mind
*Stance: closed conclusion -> live, revisable question.*

Asked symmetrically. Enthusiast: what would you have to see to conclude you are
over-trusting this? Refuser: what would you have to see to conclude it is genuinely
useful for something you care about? Whoever can name nothing learns their stance is
an identity, not an assessment. "Literacy, not conversion" in one question. Exit poll
here (bookmarked).

**Coda: the birth of magic.** Callback to station 2. We are at a point where someone
can speak a few arcane words - acronyms, custom commands, carefully specified instructions
- and command unseen forces: applications, projections, systems acting on the world. This
capability is real, it is powerful and dangerous, and anyone can choose to study it.
Perhaps people of the future will look back at this moment as the birth of something that
looks a lot like magic. *(Framing guard: this is earned wonder, not advocacy. It comes
after accountability has landed. The talk must have earned it by now, and "anyone can
choose" preserves agency - including the choice not to. If it reads as a sales pitch in
rehearsal, cut it.)*

---

## 45-minute cut

Stations 1, 3, 4 (specification + map reveal only), 5, 12, 13 - disarm, meet the fish +
spine, talk to it / how far to trust it, verification, accountability, open. Everything
else is enrichment. (Re-check timing: the reorder moved specification out of station 3.)

## What each station needs from a metaphor (audition brief)

- St.2 - capability-as-gradient, non-triumphalist. (Magic/Clarke as light-touch one-liner.)
- St.3 - language as instruction-set (the spine); people-pleaser goldfish (confidence
  decoupled from knowledge; sleeps until prompted); temperament vs. anatomy via the
  training story.
- St.4 - the map/territory model (territory -> human map -> fish map) carrying
  jaggedness, fused as a segue into verification. Pink elephant as the "you must know to
  ask" mascot. (Q2 resolved.) Describe-and-draw as "B plays the fish" (pending).
- St.6 - client vs. model: the bowl (client, simple/fancy/mobile) and the fish (model);
  the water = context, a bounded container (inside exists / outside does not). The
  cooking metaphor for restart-vs-repair (and the folded-in iteration/critique-loop
  discussion): you decide the ingredients, the model cooks; salt in the water cannot be
  taken out.
- St.7 - fittings arrive one at a time, each answering a felt limit: tubes (web search;
  the citations ladder puts them to work), notepad (memory).
- St.8 - the tubes carry actions out (strawberry -> script); agency as amplifier;
  provider tools vs. MCPs; alarm clock (scheduled), recipe cards (skills); the full tank
  revealed as the fittings catalog recap (+ camera/ears, microphone as quick extras).
- St.9 - hosting as "where does the fish live?"; injection as poisoned water (the fish
  is a people-pleaser, so it eagerly complies) with three effect categories (destruction,
  exfiltration, sleeper/incubation via memory); the enforcement hierarchy (architecture >
  policy > guideline); blast radius + recovery; least privilege.
- St.12 - accountability that does not transfer to the operator.
- St.13 - earned wonder: the birth of magic. (Callback to station 2; cut if it reads as
  advocacy in rehearsal.)
