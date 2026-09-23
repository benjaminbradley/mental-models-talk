# Arc Table

One row per beat, one column per track. Intermediate detail between
`presentation-arc.md` (station narratives) and `slides-outline.md` (per-slide content).

**Reading conventions:** empty cognitive/stance cells carry forward from the row above.
Capability lists methods introduced at that beat. Imagery lists new or changed image
needs introduced at that beat — like Capability, it is additive rather than
carry-forward: a blank cell means no new or changed imagery at that beat, not that
the screen is blank (the most recently established/extended image is still up).
Exercises are marked with *(exercise)*.

**Interaction types:** *poll* = anonymous audience survey; *exercise* = structured activity
(pair/group/individual); *demo* = live demonstration; *socratic* = presenter question to
audience (for speaker notes); *shout-out* = audience calls out answers informally.

**Imagery types:** *(illustrate)* = sourced or generated imagery to illustrate or
demonstrate a point (a screenshot, photo, or one-off diagram); *(new)* = establishes a
new base metaphor image; *(extend)* = adds to or changes an existing metaphor image.
Cells marked *(open)* have no imagery specified in the source docs — see the note at
the end of this file.

| St | Beat | Imagery | Cognitive | Stance | Capability | Interaction |
|----|------|---------|-----------|--------|------------|-------------|
| 1 | Anonymous entry poll *(exercise)* | *(illustrate)* QR code -> entry survey | | | | *poll:* stance + usage baseline |
| 1 | Name the real problems out loud: bubble, energy, labor, provenance | *(illustrate)* harms sequence (datacenters, water, labor, provenance, power) -> boxed | | guarded -> permission to engage | | |
| 1 | The contract: literacy not conversion; recruit the skeptic | | | | | |
| 2 | Clarke's gradient one-liner: skill is a discipline, not a caste | *(new)* magic -> gradient visual (light touch; returns as earned wonder at St.13) | "magic, not for me" -> "learnable discipline" | | | |
| 3 | Describe-and-draw pair exercise *(exercise)* | *(illustrate)* printed source figure for the "A" partner (candidate: architectural floor plan) | "smart person / search" -> "runs on language" | curiosity | | *exercise:* pair; A describes, B draws |
| 3 | Debrief: tacit-knowledge limit + spine claim introduced | | | | | *socratic:* "what went wrong? whose fault?" |
| 3 | Output format specification (plain vs. specified comparison) | *(illustrate)* side-by-side output comparison | | | specification; output formats; few-shot | *demo:* side-by-side comparison |
| 3 | Knowledge-domain elicitation (comparison demo: plain vs. role vs. KD) | *(illustrate)* three-way output comparison | | | role prompting; knowledge-domain elicitation | *demo:* three-way comparison |
| 3 | Meta-prompting + pink elephant / ToM anecdote | *(new)* pink-elephant callback image | | | meta-prompting | |
| 4 | Confabulation: the people-pleaser goldfish; sleeps until prompted | *(new)* the goldfish (people-pleaser; sleeping/waking) | "instincts transfer" -> "instincts mislead" | productive disorientation | | *socratic:* "how would you know when it's wrong?" |
| 4 | Jaggedness: map vs. territory three-beat reveal (territory -> human map -> fish map) | *(new)* three-layer map/territory visual (territory -> human map -> fish map) | | | | |
| 4 | Temperament vs. anatomy via the training story (pretraining = anatomy; RLHF = temperament) | *(extend)* goldfish origin story: reads the library (pretraining) -> apprenticeship of conversations (RLHF) | | | | |
| 4 | Citations ladder demo: no sources -> unverified -> verified (the dangerous gap) | *(illustrate)* three-rung citations-ladder demo | | | | *demo:* three-rung citations |
| 4 | Reliability levers | *(open)* | | | chain-of-thought; extended thinking; self-reflection | *socratic:* "so how do you make it more reliable?" |
| 5 | Verification asymmetry: lean in where checking < doing; beware the reverse | *(open)* | disoriented -> holding one durable tool | stabilization | verification asymmetry | *socratic:* "when IS it safe to use?" |
| 5 | Sort real work tasks on "is checking cheaper than doing?" *(exercise)* | *(illustrate)* blank task cards/worksheet | | | | *exercise:* individual then pair; sort own tasks |
| 5 | Decomposition: break tasks into verifiable sub-tasks before starting | *(illustrate)* monolithic-vs-decomposed prompt/output demo (candidate: "plan a team offsite") | | | decomposition | |
| 5 | Iteration / critique loops; knowing when to abandon a thread | | | | iteration; critique loops | |
| 6 | Strawberry hook: ask it to write a script, not give the answer (bridge from 5) | *(illustrate)* strawberry demo (wrong letter-count -> script -> correct count) | "one thing" -> "model + client" | | | *demo:* live strawberry example |
| 6 | Client vs. model: the bowl and the fish; "is that the fish or the bowl?" | *(new)* the bowl and the fish (client vs. model) | | | | *shout-out:* scenarios, audience calls "fish!" or "bowl!" |
| 6 | Fittings catalog: water (context), notepad (memory), camera/ears (multimodal), tubes (tools/MCP), alarm clock (scheduled), recipe cards (skills) | *(extend)* fittings added onto the bowl (water, notepad, camera/ears, tubes, alarm clock, recipe cards) | | | | |
| 7 | Context window: bounded container; inside exists, outside doesn't | *(extend)* the water level in the bowl = the context window | "just knows / remembers" -> "bounded window; poisonable" | | context engineering; document hygiene | |
| 7 | Memory & instruction hierarchy (provider -> custom -> project -> prompt); RAG | *(illustrate)* instruction-stack diagram (provider -> custom -> project -> prompt) | | | instruction hierarchy; projects/RAG | |
| 7 | Restart vs. repair: the cooking metaphor (salt in the water) | *(new)* the cooking metaphor (salt in the water) | | | restart vs. repair | |
| 7 | Memory oversharing (personal story: resume inflation); memory audit | *(illustrate)* mockup: inflated/incorrect memory entry (resume-inflation example) | | | memory audit | |
| 8 | Agency: tools let the fish act; the operator todo list (spine payoff #2) | *(extend)* the fish reaching through the tubes fitting, in action; *(illustrate)* operator-todo-list graphic | "chatbot that says" -> "system that does" | | tool use; tool discovery | |
| 8 | Provider-specific tools vs. MCPs (industry-standard connectors) | *(illustrate)* proprietary-tool vs. MCP connector diagram | | | MCP; provider tools | |
| 8 | Scheduled / recurring tasks; skills / reusable playbooks | *(extend)* the alarm-clock and recipe-card fittings shown in use | | | scheduled tasks; skills/playbooks | |
| 9 | Hosting: where does the fish live? Three tiers (local / private / frontier); credential exposure | *(new)* three-tier hosting data-flow diagram (local -> private cloud -> frontier cloud) | "handy tool" -> "blast radius to bound" | sober caution | hosting awareness; credential hygiene | *socratic:* "what could go wrong?" |
| 9 | Training data opt-out: a guideline, not an architectural boundary | *(open)* | | | | |
| 9 | Injection: poisoned water; sycophancy callback (station 4) | *(extend)* the water turns poisoned/murky | | | | |
| 9 | Poisoned-water effects: destruction, exfiltration, sleeper/incubation via memory | *(extend)* three effect icons on the poisoned water (destruction / exfiltration / sleeper) | | | | |
| 9 | Blast radius: when tools + confabulation + agency collide; recovery stories | *(illustrate)* sourced Reddit/HN recovery-story screenshots | | | backups; version control; sandboxes | *socratic:* "how do you protect yourself?" |
| 9 | The enforcement hierarchy: architecture > policy > guideline | *(new)* enforcement-hierarchy diagram (architecture > policy > guideline) | | | least privilege; enforcement hierarchy | |
| 9 | Small-group exercise: assistant with mailbox access - find the trifecta *(exercise)* | *(illustrate)* mailbox-access scenario handout | | | | *exercise:* small groups; find the trifecta |
| 10 | It's a designed commercial artifact; refusals and tone are product decisions | *(illustrate)* product mockup: a refusal framed as a design choice | "neutral oracle" -> "someone's product" | critical agency | | *socratic:* "who decided it should refuse that?" |
| 10 | Bias: four mechanisms (corpus, preference tuning, guardrails, emergent/sycophancy) | *(illustrate)* four-mechanism bias diagram | | | | |
| 10 | The guardrail probe: a differently-trained model reveals your model's invisible guardrails | *(illustrate)* guardrail-probe transcript demo | | | model selection; private probes | |
| 10 | Frontier instability: models change without notice or recourse | *(open)* | | | | |
| 11 | Intention is the input: the human mirror of the spine; taste as bottleneck | *(open)* | "tool is the story" -> "I am the variable" | | knowing what you want | *socratic:* "if it can do anything you specify, what's left?" |
| 11 | Sycophancy callback (it will agree with you); atrophy is real but specific | | | | | |
| 12 | Polished-but-wrong artifact: "would you sign it?" *(exercise)* | *(illustrate)* polished-but-subtly-wrong artifact handout | "who's responsible?" -> "I am" | convergence | | *exercise:* evaluate artifact; *socratic:* "how would you check?" |
| 12 | Draft vs. send: the accountability toggle (station 8 callback) | *(illustrate)* draft/send UI mockup | | | HITL as deliberate pattern | |
| 12 | The review ladder: self -> correlated -> adversarial -> person (it terminates in a person) | *(extend)* reuses the citations-ladder visual (St.4) for the review-ladder rungs | | | review ladder; adversarial subagents | |
| 12 | Spine payoff #3: the operator acts, accountability does not transfer | *(open)* | | | | |
| 13 | "What would change your mind?" - asked symmetrically *(exercise)* | | closed conclusion -> live question | open | | *exercise:* individual reflection |
| 13 | Exit poll | *(extend)* reuses the entry-poll QR graphic | | | | *poll:* stance movement + model accuracy |
| 13 | Coda: the birth of magic (station 2 callback; cut if advocacy in rehearsal) | *(extend)* full-treatment return of the St.2 magic/gradient imagery | | | | |

## Open imagery questions

Seven rows are marked *(open)* above — the docs don't specify imagery for these beats,
and nothing else in the arc obviously extends to cover them:

- **St.4 Reliability levers** — chain-of-thought / extended thinking / self-reflection.
  Candidate: a UI screenshot of the thinking-level toggle (low/medium/high), or leave
  text-only.
- **St.5 Verification asymmetry** — the "one durable tool" the stance track picks up
  here. Candidate: a simple checking-cost-vs-doing-cost visual, or none (the sort
  exercise right after it may carry the point).
- **St.9 Training data opt-out** — could extend the enforcement-hierarchy diagram
  (introduced two beats later in the same station) as a "this is a guideline, not
  architecture" callout, or stay text-only.
- **St.10 Frontier instability** — no candidate in the docs.
- **St.11 Intention is the input** — the human-side mirror of the spine claim (St.3).
  Could extend whatever visual carries "the spine claim" there, if one exists, but
  the spine claim doesn't currently have a dedicated image either.
- **St.12 Spine payoff #3** — closes the spine claim; same open question as St.11.

Flagging these for a decision rather than guessing a specific image.
][