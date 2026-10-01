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

| St | Beat | Imagery | Cognitive | Stance | Capability | Interaction |
|----|------|---------|-----------|--------|------------|-------------|
| 1 | Anonymous entry poll *(exercise)* | *(illustrate)* QR code -> entry survey | | | | *poll:* stance + usage baseline |
| 1 | Name the real problems out loud: bubble, energy, labor, provenance | *(illustrate)* harms sequence (datacenters, water, labor, provenance, power) -> boxed | | guarded -> permission to engage | | |
| 1 | The contract: literacy not conversion; recruit the skeptic | | | | | |
| 2 | Clarke's gradient one-liner: skill is a discipline, not a caste | *(new)* magic -> gradient visual (light touch; returns as earned wonder at St.13) | "magic, not for me" -> "learnable discipline" | | | |
| 3 | Premise: computers can understand and speak language; spine claim introduced | *(illustrate)* computer with a speech bubble; then-vs-now poetry | "smart person / search" -> "runs on language" | curiosity | | |
| 3 | The goldfish: people-pleaser who read every book | *(new)* the goldfish (awake; people-pleaser) | -> "well-read people-pleaser, no lived experience" | | | *socratic:* "how would you know when it's wrong?" |
| 3 | Temperament vs. anatomy via the training story (pretraining = anatomy; RLHF = temperament) | *(extend)* goldfish origin story: reads the library (pretraining) -> apprenticeship of conversations (RLHF) | | | | |
| 3 | It sleeps until you talk to it | *(extend)* goldfish sleeping -> waking | | | | |
| 4 | Talking to the bare fish: it does not remember you (no bowl yet) | *(illustrate)* local-model capture: introduce yourself, then it doesn't know your name | | | | *demo:* pre-captured |
| 4 | *(PENDING keep/cut)* Describe-and-draw: "B plays the fish" *(exercise)* + debrief | *(illustrate)* printed source figure for the "A" partner (candidate: architectural floor plan) | "instincts transfer" -> "instincts mislead; output depends on what I ask" | productive disorientation | invite clarifying questions *(candidate)* | *exercise:* pair; A describes, B draws, no questions; *socratic:* "what went wrong? whose fault?" |
| 4 | Output format specification (plain vs. specified comparison) | *(illustrate)* side-by-side output comparison | | | specification; output formats; few-shot | *demo:* side-by-side comparison |
| 4 | Knowledge-domain elicitation: "which shelf does it pull from?" (plain vs. role vs. KD) | *(illustrate)* three-way output comparison | | | role prompting; knowledge-domain elicitation | *demo:* three-way comparison |
| 4 | Reliability levers: "it will never say it's unsure" | *(illustrate)* side-by-side samples with vs. without a "think about the criteria" preamble | | | chain-of-thought; extended thinking; self-reflection | *socratic:* "so how do you make it more reliable?" |
| 4 | Meta-prompting + pink elephant / ToM anecdote | *(illustrate)* simulated conversation: the prompt it writes carries "don't look at mini golf"; then the Theory of Mind version | | | meta-prompting | |
| 4 | Jaggedness: map vs. territory three-beat reveal (territory -> human map -> fish map) | *(new)* three-layer map/territory visual (territory -> human map -> fish map) | | | | *socratic:* "can you trust its grade of itself?" |
| 4 | Jaggedness per-case walkthrough (plants Recent Events -> St.7 and Counting -> St.8) | *(illustrate)* per-region map comparisons + screencaps | | | | |
| 5 | Verification asymmetry: lean in where checking < doing; beware the reverse | *(illustrate)* two examples: a spreadsheet summary (easy to check) vs. a document summary (harder to check) | disoriented -> holding one durable tool | stabilization | verification asymmetry | *socratic:* "when IS it safe to use?" |
| 5 | Sort real work tasks on "is checking cheaper than doing?" *(exercise)* | *(illustrate)* blank task cards/worksheet | | | | *exercise:* individual then pair; sort own tasks |
| 5 | Decomposition: break tasks into verifiable sub-tasks before starting | *(illustrate)* monolithic-vs-decomposed prompt/output demo (candidate: "plan a team offsite") | | | decomposition | |
| 6 | Client vs. model: the bowl and the fish; "is that the fish or the bowl?" | *(new)* the bowl and the fish (client vs. model); bare bowl, water holding the conversation so far | "one thing that just knows" -> "model + client; sees only the water" | | | *shout-out:* scenarios, audience calls "fish!" or "bowl!" |
| 6 | Context window: bounded water; inside exists, outside doesn't | *(extend)* the water level in the bowl = the context window | | | context engineering; document hygiene | |
| 6 | Instruction hierarchy (provider -> custom -> project -> prompt); RAG | *(illustrate)* instruction-stack diagram (provider -> custom -> project -> prompt) | | | instruction hierarchy; projects/RAG | |
| 6 | Restart vs. repair: cat food in the water (every answer says "meow"; move the fish to a fresh bowl); iteration & critique loops folded in | *(new)* cat food in the water | | | restart vs. repair; iteration; critique loops | |
| 7 | Tubes, first use: web search + citations ladder (felt limit: Recent Events; invented sources) | *(extend)* first fitting: tubes attached to the bowl; *(illustrate)* three-rung citations-ladder demo | "knows what it knows" -> "fittings extend what it can see" | | web search; verified citations | *demo:* three-rung citations |
| 7 | Notepad: memory (felt limit: bowl emptied between conversations); oversharing + memory audit | *(extend)* notepad fitting added; *(illustrate)* mockup: inflated/incorrect memory entry (resume-inflation example) | | | memory; memory audit | |
| 8 | Strawberry: the fish writes a script (felt limit: Counting region) | *(illustrate)* strawberry demo (wrong letter-count -> script -> correct count); *(extend)* tubes now carry actions out | "chatbot that says" -> "system that does" | | code execution | *demo:* live strawberry example |
| 8 | Agency: tools let the fish act; the operator todo list (spine payoff #2) | *(extend)* the fish reaching through the tubes fitting, in action; *(illustrate)* operator-todo-list graphic | | | tool use; tool discovery | |
| 8 | Provider-specific tools vs. MCPs (industry-standard connectors) | *(illustrate)* proprietary-tool vs. MCP connector diagram | | | MCP; provider tools | |
| 8 | Alarm clock (felt limit: sleeps until woken) + recipe cards (felt limit: re-specifying) | *(extend)* alarm-clock and recipe-card fittings added, shown in use | | | scheduled tasks; skills/playbooks | |
| 8 | The tank: fittings catalog as recap (+ camera/ears, microphone as quick extras) | *(extend)* pull back: bowl -> full tank with all fittings | | | multimodal | |
| 9 | Hosting: where does the fish live? Three tiers (local / private / frontier); credential exposure | *(new)* three-tier hosting data-flow diagram (local -> private cloud -> frontier cloud) | "handy tool" -> "blast radius to bound" | sober caution | hosting awareness; credential hygiene | *socratic:* "what could go wrong?" |
| 9 | Training data opt-out: a guideline, not an architectural boundary | *(illustrate)* autocomplete/search-suggestion screenshot | | | | |
| 9 | Injection: poisoned water; sycophancy callback (station 3) | *(extend)* the water turns poisoned/murky | | | | |
| 9 | Poisoned-water effects: destruction, exfiltration, sleeper/incubation via memory | *(extend)* three effect icons on the poisoned water (destruction / exfiltration / sleeper) | | | | |
| 9 | Blast radius: when tools + confabulation + agency collide; recovery stories | *(illustrate)* sourced Reddit/HN recovery-story screenshots | | | backups; version control; sandboxes | *socratic:* "how do you protect yourself?" |
| 9 | The enforcement hierarchy: architecture > policy > guideline | *(new)* enforcement-hierarchy diagram (architecture > policy > guideline) | | | least privilege; enforcement hierarchy | |
| 9 | Small-group exercise: assistant with mailbox access - find the trifecta *(exercise)* | *(illustrate)* mailbox-access scenario handout | | | | *exercise:* small groups; find the trifecta |
| 10 | It's a designed commercial artifact; refusals and tone are product decisions | *(illustrate)* product mockup: a refusal framed as a design choice | "neutral oracle" -> "someone's product" | critical agency | | *socratic:* "who decided it should refuse that?" |
| 10 | Bias: four mechanisms (corpus, preference tuning, guardrails, emergent/sycophancy) | *(illustrate)* four-mechanism bias diagram | | | | |
| 10 | The guardrail probe: a differently-trained model reveals your model's invisible guardrails | *(illustrate)* guardrail-probe transcript demo | | | model selection; private probes | |
| 10 | Frontier instability: models change without notice or recourse | *(extend)* the fish visibly changes look/behavior between versions (version number ticks up) | | | | |
| 11 | Intention is the input: the human mirror of the spine; taste as bottleneck | *(illustrate)* generic vs. personalized/artistic version of the same product (e.g., stock laptop vs. a modded "cyberdeck") | "tool is the story" -> "I am the variable" | | knowing what you want | *socratic:* "if it can do anything you specify, what's left?" |
| 11 | Sycophancy callback (it will agree with you); atrophy is real but specific | | | | | |
| 12 | Polished-but-wrong artifact: "would you sign it?" *(exercise)* | *(illustrate)* polished-but-subtly-wrong artifact handout | "who's responsible?" -> "I am" | convergence | | *exercise:* evaluate artifact; *socratic:* "how would you check?" |
| 12 | Draft vs. send: the accountability toggle (station 8 callback) | *(illustrate)* draft/send UI mockup | | | HITL as deliberate pattern | |
| 12 | The review ladder: self -> correlated -> adversarial -> person (it terminates in a person) | *(extend)* reuses the citations-ladder visual (St.7) for the review-ladder rungs | | | review ladder; adversarial subagents | |
| 12 | Spine payoff #3: the operator acts, accountability does not transfer | *(illustrate)* someone blaming the tool for the outcome (open: find a real-world/adult example; kid-blames-the-toy as fallback) | | | | |
| 13 | "What would change your mind?" - asked symmetrically *(exercise)* | | closed conclusion -> live question | open | | *exercise:* individual reflection |
| 13 | Exit poll | *(extend)* reuses the entry-poll QR graphic | | | | *poll:* stance movement + model accuracy |
| 13 | Coda: the birth of magic (station 2 callback; cut if advocacy in rehearsal) | *(extend)* full-treatment return of the St.2 magic/gradient imagery | | | | |
