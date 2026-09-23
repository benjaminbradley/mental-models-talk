# Arc Table

One row per beat, one column per track. Intermediate detail between
`presentation-arc.md` (station narratives) and `slides-outline.md` (per-slide content).

**Reading conventions:** empty cognitive/stance cells carry forward from the row above.
Capability lists methods introduced at that beat. Exercises are marked with *(exercise)*.

**Interaction types:** *poll* = anonymous audience survey; *exercise* = structured activity
(pair/group/individual); *demo* = live demonstration; *socratic* = presenter question to
audience (for speaker notes); *shout-out* = audience calls out answers informally.

| St | Beat | Cognitive | Stance | Capability | Interaction |
|----|------|-----------|--------|------------|-------------|
| 1 | Anonymous entry poll *(exercise)* | | | | *poll:* stance + usage baseline |
| 1 | Name the real problems out loud: bubble, energy, labor, provenance | | guarded -> permission to engage | | |
| 1 | The contract: literacy not conversion; recruit the skeptic | | | | |
| 2 | Clarke's gradient one-liner: skill is a discipline, not a caste | "magic, not for me" -> "learnable discipline" | | | |
| 3 | Describe-and-draw pair exercise *(exercise)* | "smart person / search" -> "runs on language" | curiosity | | *exercise:* pair; A describes, B draws |
| 3 | Debrief: tacit-knowledge limit + spine claim introduced | | | | *socratic:* "what went wrong? whose fault?" |
| 3 | Output format specification (plain vs. specified comparison) | | | specification; output formats; few-shot | *demo:* side-by-side comparison |
| 3 | Knowledge-domain elicitation (comparison demo: plain vs. role vs. KD) | | | role prompting; knowledge-domain elicitation | *demo:* three-way comparison |
| 3 | Meta-prompting + pink elephant / ToM anecdote | | | meta-prompting | |
| 4 | Confabulation: the people-pleaser goldfish; sleeps until prompted | "instincts transfer" -> "instincts mislead" | productive disorientation | | *socratic:* "how would you know when it's wrong?" |
| 4 | Jaggedness: map vs. territory three-beat reveal (territory -> human map -> fish map) | | | | |
| 4 | Temperament vs. anatomy via the training story (pretraining = anatomy; RLHF = temperament) | | | | |
| 4 | Citations ladder demo: no sources -> unverified -> verified (the dangerous gap) | | | | *demo:* three-rung citations |
| 4 | Reliability levers | | | chain-of-thought; extended thinking; self-reflection | *socratic:* "so how do you make it more reliable?" |
| 5 | Verification asymmetry: lean in where checking < doing; beware the reverse | disoriented -> holding one durable tool | stabilization | verification asymmetry | *socratic:* "when IS it safe to use?" |
| 5 | Sort real work tasks on "is checking cheaper than doing?" *(exercise)* | | | | *exercise:* individual then pair; sort own tasks |
| 5 | Decomposition: break tasks into verifiable sub-tasks before starting | | | decomposition | |
| 5 | Iteration / critique loops; knowing when to abandon a thread | | | iteration; critique loops | |
| 6 | Strawberry hook: ask it to write a script, not give the answer (bridge from 5) | "one thing" -> "model + client" | | | *demo:* live strawberry example |
| 6 | Client vs. model: the bowl and the fish; "is that the fish or the bowl?" | | | | *shout-out:* scenarios, audience calls "fish!" or "bowl!" |
| 6 | Fittings catalog: water (context), notepad (memory), camera/ears (multimodal), tubes (tools/MCP), alarm clock (scheduled), recipe cards (skills) | | | | |
| 7 | Context window: bounded container; inside exists, outside doesn't | "just knows / remembers" -> "bounded window; poisonable" | | context engineering; document hygiene | |
| 7 | Memory & instruction hierarchy (provider -> custom -> project -> prompt); RAG | | | instruction hierarchy; projects/RAG | |
| 7 | Restart vs. repair: the cooking metaphor (salt in the water) | | | restart vs. repair | |
| 7 | Memory oversharing (personal story: resume inflation); memory audit | | | memory audit | |
| 8 | Agency: tools let the fish act; the operator todo list (spine payoff #2) | "chatbot that says" -> "system that does" | | tool use; tool discovery | |
| 8 | Provider-specific tools vs. MCPs (industry-standard connectors) | | | MCP; provider tools | |
| 8 | Scheduled / recurring tasks; skills / reusable playbooks | | | scheduled tasks; skills/playbooks | |
| 9 | Hosting: where does the fish live? Three tiers (local / private / frontier); credential exposure | "handy tool" -> "blast radius to bound" | sober caution | hosting awareness; credential hygiene | *socratic:* "what could go wrong?" |
| 9 | Training data opt-out: a guideline, not an architectural boundary | | | | |
| 9 | Injection: poisoned water; sycophancy callback (station 4) | | | | |
| 9 | Poisoned-water effects: destruction, exfiltration, sleeper/incubation via memory | | | | |
| 9 | Blast radius: when tools + confabulation + agency collide; recovery stories | | | backups; version control; sandboxes | *socratic:* "how do you protect yourself?" |
| 9 | The enforcement hierarchy: architecture > policy > guideline | | | least privilege; enforcement hierarchy | |
| 9 | Small-group exercise: assistant with mailbox access - find the trifecta *(exercise)* | | | | *exercise:* small groups; find the trifecta |
| 10 | It's a designed commercial artifact; refusals and tone are product decisions | "neutral oracle" -> "someone's product" | critical agency | | *socratic:* "who decided it should refuse that?" |
| 10 | Bias: four mechanisms (corpus, preference tuning, guardrails, emergent/sycophancy) | | | | |
| 10 | The guardrail probe: a differently-trained model reveals your model's invisible guardrails | | | model selection; private probes | |
| 10 | Frontier instability: models change without notice or recourse | | | | |
| 11 | Intention is the input: the human mirror of the spine; taste as bottleneck | "tool is the story" -> "I am the variable" | | knowing what you want | *socratic:* "if it can do anything you specify, what's left?" |
| 11 | Sycophancy callback (it will agree with you); atrophy is real but specific | | | | |
| 12 | Polished-but-wrong artifact: "would you sign it?" *(exercise)* | "who's responsible?" -> "I am" | convergence | | *exercise:* evaluate artifact; *socratic:* "how would you check?" |
| 12 | Draft vs. send: the accountability toggle (station 8 callback) | | | HITL as deliberate pattern | |
| 12 | The review ladder: self -> correlated -> adversarial -> person (it terminates in a person) | | | review ladder; adversarial subagents | |
| 12 | Spine payoff #3: the operator acts, accountability does not transfer | | | | |
| 13 | "What would change your mind?" - asked symmetrically *(exercise)* | closed conclusion -> live question | open | | *exercise:* individual reflection |
| 13 | Exit poll | | | | *poll:* stance movement + model accuracy |
| 13 | Coda: the birth of magic (station 2 callback; cut if advocacy in rehearsal) | | | | |
