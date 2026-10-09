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
| 4 | *(HIDDEN for now)* Describe-and-draw: "B plays the fish" *(exercise)* + debrief | *(illustrate)* printed source figure for the "A" partner (candidate: architectural floor plan) | "instincts transfer" -> "instincts mislead; output depends on what I ask" | productive disorientation | invite clarifying questions *(candidate)* | *exercise:* pair; A describes, B draws, no questions; *socratic:* "what went wrong? whose fault?" |
| 4 | Say what you want & how you want it (plain vs. specified comparison) | *(illustrate)* side-by-side output comparison | | | specification; output formats; few-shot | *demo:* side-by-side comparison |
| 4 | The lazy genie: a vague wish granted to the letter ("rich for the rest of my life" -> gold + a time bomb) | *(new)* the lazy genie, lamp, sack of gold, time bomb | | | | |
| 4 | Meta-prompting + pink elephant / ToM anecdote | *(illustrate)* simulated conversation: the prompt it writes carries "don't look at mini golf"; then the Theory of Mind version | | | meta-prompting | |
| 4 | Jaggedness intro: a brilliant sonnet and a wrong letter count, outputs only (plants Counting -> St.8) | *(illustrate)* two cropped outputs | | | | *socratic:* "why is it so good at some things and so bad at others?" |
| 4 | Your brain has specialists; the fish learned only from language | *(new)* simplified brain with labeled hubs (language, movement, numbers, space, seeing); non-language hubs fade | | | | |
| 4 | Jaggedness: map vs. territory reveal, two maps at a time (territory -> territory + your map -> territory + fish map -> your map + fish map) | *(new)* three-layer map/territory visual; territory labeled "real knowledge, as a landscape" | | | | *socratic:* "notice anything?" |
| 4 | Jaggedness walkthrough, fish first then map: Poetry, Counting, Spatial (fish only), Everyday Cooking vs. Family Recipes | *(illustrate)* screencaps + per-region map zooms | | | | |
| 5 | Verification asymmetry: lean in where checking < doing; beware the reverse | *(illustrate)* two examples: a spreadsheet summary (easy to check) vs. a document summary (harder to check) | disoriented -> holding one durable tool | stabilization | verification asymmetry | *socratic:* "when IS it safe to use?" |
| 5 | Sort real work tasks on "is checking cheaper than doing?" *(exercise)* | *(illustrate)* blank task cards/worksheet | | | | *exercise:* individual then pair; sort own tasks |
| 5 | Decomposition: break tasks into verifiable sub-tasks before starting | *(illustrate)* monolithic-vs-decomposed prompt/output demo (candidate: "plan a team offsite") | | | decomposition | |
| 6 | Talking to the bare fish: it does not remember you (each message falls away) | *(illustrate)* simulated chat beside the bare fish | | | | |
| 6 | Client vs. model: the bowl and the fish; "is that the fish or the bowl?" | *(new)* the bowl and the fish (client vs. model); bare bowl, water holding the conversation so far | "one thing that just knows" -> "model + client; sees only the water" | | | *shout-out:* scenarios, audience calls "fish!" or "bowl!" |
| 6 | Context window: bounded water; inside exists, outside doesn't | *(extend)* the water level in the bowl = the context window | | | context engineering; document hygiene | |
| 6 | Many kinds of tanks: web, desktop/mobile, coding agents, open-source clients, personal agents (OpenClaw, Hermes; OpenAI Dots, Meta Muse) | *(illustrate)* client tiles | | | | |
| 6 | Which shelf does it pull from? Elicitation drawn in the bowl: role = one line; domains = the fish fills the water | *(extend)* the prompt in the bowl's water | | | role prompting; knowledge-domain elicitation | |
| 6 | Make it show its work: steps, criteria, doubts written into the water before the answer | *(extend)* the bowl's water fills before the answer | | | chain-of-thought; extended thinking; self-reflection | *socratic:* "so how do you make it more reliable?" |
| 6 | Instructions as a felt need: a behavior you keep re-asking for -> your sticky note (custom instructions); the tank maker's note (system instructions); a Custom GPT / Gem = a tank someone else set up; RAG | *(extend)* sticky notes inside the glass (yours, then the maker's); *(extend)* a pre-set-up tank | | | custom instructions; system instructions; Custom GPTs / Gems; RAG | |
| 6 | Restart vs. repair: cat food in the water (escape rooms + mini golf both in the water; "an escape room, then go-karts!"; move the fish to a fresh bowl); iteration & critique loops folded in | *(new)* cat food in the water, two color-coded kinds | | | restart vs. repair; iteration; critique loops; context management | |
| 7 | Tools: anything outside the fish it can reach for (browser, email, calendar, files, code); drawn as tubes | *(new)* tool tiles | | | tool use; tool discovery | |
| 7 | The fish has never used a tool: tool-use training (third step of the training story) | *(extend)* the fish eyes a new tube quizzically; *(extend)* training story gains a third step (tool-use practice with feedback); fish returns to the tank and uses the tube | | | | |
| 7 | The books ended (Recent Events captures), then web search + citations ladder (felt limit: Recent Events; invented sources) | *(extend)* first fitting: tubes attached to the bowl; *(illustrate)* three-rung citations demo (visual TBD; not a literal ladder) | "knows what it knows" -> "fittings extend what it can see" | | web search; verified citations | *demo:* three-rung citations |
| 7 | Notepad: memory (felt limit: bowl emptied between conversations); oversharing + memory audit | *(extend)* notepad fitting added; *(illustrate)* mockup: inflated/incorrect memory entry (resume-inflation example) | | | memory; memory audit | |
| 8 | Strawberry: the fish writes a script (felt limit: Counting region) | *(illustrate)* strawberry demo (wrong letter-count -> script -> correct count); *(extend)* tubes now carry actions out | "chatbot that says" -> "system that does" | | code execution | *demo:* live strawberry example |
| 8 | Agency: tools let the fish act; your project's to-do list (team outing: book it, email the team, calendar) ticked off via named tools (spine payoff #2) | *(extend)* tubes to browser, email, calendar, files; *(illustrate)* to-do checklist | | | tool use; tool discovery | |
| 8 | *(HIDDEN)* Provider-specific tools vs. MCPs -- too much detail; MCP stays on the take-home card | *(new)* custom-shaped vendor fittings vs. one standard coupling (MCP) | | | MCP; provider tools | |
| 8 | Alarm clock (felt limit: sleeps until woken) + recipe cards (felt limit: re-specifying) | *(extend)* alarm-clock and recipe-card fittings added, shown in use | | | scheduled tasks; skills/playbooks | |
| 8 | The tank: fittings catalog as recap (+ camera/ears, microphone as quick extras) | *(extend)* pull back: bowl -> full tank with all fittings | | | multimodal | |
| 9 | Hosting: where do the tank and the fish live? Four-step reveal split around the training slide: frontier -> your tank + their fish -> [training] -> private cloud (your fish, then your tank too) -> everything local; credential exposure | *(new)* where your data goes: corporate cloud (vendor names) with an uncuttable cord from you (unlocked padlock); fish in a uniform; padlocked private cloud; beefy local PC below the clouds | "handy tool" -> "blast radius to bound" | sober caution | hosting awareness; credential hygiene | *socratic:* "what could go wrong?" |
| 9 | Training data opt-out (between hosting steps 2 and 3): a guideline, not an architectural boundary | *(illustrate)* autocomplete mock ("who called me from" -> 555 numbers) + data-controls toggle | | | | |
| 9 | Injection: poisoned water (the LinkedIn flan bio); sycophancy callback (station 3) | *(extend)* a mocked profile page shrinks down the tube; the water turns poisoned/murky | | | | |
| 9 | Poisoned-water effects: destruction, exfiltration, sleeper/incubation via memory | *(extend)* three effect icons: ☢️ destruction, ✉️ exfiltration, 💣 tucked in the notepad (sleeper); the sleeper's source: an invoice email with a P.S. to the assistant | | | | |
| 9 | Blast radius: when tools + confabulation + agency collide; recovery stories | *(illustrate)* sourced Reddit/HN recovery-story screenshots | | | backups; version control; sandboxes | *socratic:* "how do you protect yourself?" |
| 9 | The enforcement hierarchy: architecture > guideline (policy layer dropped) | *(new)* a wall (architecture) vs. a "please keep out" sign (guideline) | | | least privilege; enforcement hierarchy | |
| 9 | Small-group exercise: assistant with mailbox access - find the trifecta *(exercise)* | *(illustrate)* mailbox-access scenario handout | | | | *exercise:* small groups; find the trifecta |
| 10 | It's a designed commercial artifact; refusals and tone are product decisions; the dials are not public | *(illustrate)* product mockup: a settings panel of refusal dials (hacking, chemistry, politics, ...); curtains close over the controls | "neutral oracle" -> "someone's product" | critical agency | | *socratic:* "who decided it should refuse that?" |
| 10 | Bias: four mechanisms (corpus, preference tuning, guardrails, emergent/sycophancy) | *(illustrate)* four mechanisms: the books (corpus), ✓/✗ paddles (preference tuning), the vendor's fence (guardrails), 🎭 masks (emergent: can help or hurt) | | | | |
| 10 | The guardrail probe: a differently-trained model reveals your model's invisible guardrails | *(illustrate)* guardrail-probe transcript demo | | | model selection; private probes | |
| 10 | Unknown unknowns: gaps you can't see unless you already know the territory | *(extend)* the fish map with a piece cut out (dotted line, scissors) | | | | |
| 10 | Frontier instability: models change without notice or recourse | *(extend)* a row of slightly different fish with version numbers; one in the middle has goofy eyes (a nerf) | | | | |
| 11 | Intention is the input: the human mirror of the spine; taste as bottleneck; "let the model decide / use best practices" = the default response | *(illustrate)* generic vs. personalized/artistic version of the same product (e.g., stock laptop vs. a modded "cyberdeck") | "tool is the story" -> "I am the variable" | | knowing what you want | *socratic:* "if it can do anything you specify, what's left?" |
| 11 | Sycophancy callback (it will agree with you); atrophy is real but specific | | | | | |
| 12 | Polished-but-wrong artifact: "would you sign it?" -> accountability is the new bottleneck *(exercise)* | *(illustrate)* polished-but-subtly-wrong artifact handout | "who's responsible?" -> "I am" | convergence | | *exercise:* evaluate artifact; *socratic:* "how would you check?" |
| 12 | Draft vs. send: the accountability toggle (station 8 callback) | *(illustrate)* draft/send UI mockup | | | HITL as deliberate pattern | |
| 12 | The review ladder: self -> correlated -> adversarial -> person (it terminates in a person) | *(illustrate)* review-ladder visual (TBD; not a literal ladder) | | | review ladder; adversarial subagents | |
| 12 | Spine payoff #3: the operator acts, accountability does not transfer | *(illustrate)* "the dog ate my homework" (blaming the tool) | | | | |
| 13 | "What would change your mind?" - asked symmetrically *(exercise)* | | closed conclusion -> live question | open | | *exercise:* individual reflection |
| 13 | Exit poll | *(extend)* reuses the entry-poll QR graphic | | | | *poll:* stance movement + model accuracy |
| 13 | Coda: the birth of magic (station 2 callback; cut if advocacy in rehearsal) | *(extend)* full-treatment return of the St.2 magic/gradient imagery | | | | |
