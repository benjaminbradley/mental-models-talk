# Take-Home Reference

Source for the one-page card participants leave with. Format: key concept/term
+ a memory-jogging phrase, so people can look up detail if they want - not full
explanations. Covers what the talk teaches, and nothing it doesn't; update it when a method or principle
is added, removed, or renamed in the talk. To be trimmed and prioritized for print (a real
card fits far fewer than this).

## Links (keep on the card)

- **Slides:** https://benjaminbradley.github.io/mental-models-talk/
- email via education at wegeekout - com (can be displayed visually on print-out, but should not be scrapable in code)

## Capability track (how to work with it)

- **Specification / prompt engineering** - examples beat adjectives; constraints
  generate quality; state the output format you want. Compare "give me a list of
  restaurants" vs. a fully specified query with criteria, ranking, and format.
- **Role / persona prompting** - "you are a [role]" shapes tone and expertise.
  Better: knowledge-domain elicitation - "what domains are relevant here and what
  does each contribute?"
- **Few-shot** - show two or three examples of what "good" looks like.
- **Meta-prompting** - "help me write a better prompt for this task." Useful
  cross-platform (write a prompt in one model to run in another; use Theory of Mind).
- **Chain-of-thought / show your work** - ask it to reason step by step; you also get
  to check the steps.
- **Extended thinking** - direct the model to "think about X" before answering.
  Thinking levels (low/medium/high) trade speed for depth; over-thinking is real.
- **Ask it to check itself** - it can grade its confidence, flag knowledge-cutoff gaps,
  or search when unsure - but only if you ask, and the self-check is itself fallible.
- **Ask it to search** - "tell me about X" answers from training data (and any sources it
  lists may be invented); "search for info on X" uses web search and returns real links.
  Click one: the links are real, its summary of them may not be.
- **Decomposition** - break a complex task into sub-tasks before starting, so each
  piece can be verified independently. Distinct from iteration (which refines after).
- **Context engineering** - curate what is in the window; garbage in, garbage out.
- **Memory & instruction hierarchy** - provider instructions (invisible) -> your custom
  instructions -> memory -> your prompt. Know the stack.
- **Memory audit** - review what the model has stored about you; delete what should
  not persist. It may store things you did not intend.
- **Restart vs. repair** - a derailed thread is often cheaper to abandon than to fix.
  The whole conversation is re-read every turn; you cannot fish the cat food back out.
- **Custom GPTs / Gems** - a client someone else set up, with their instructions inside.
- **RAG** - the system pulls the right reference material into context on demand.
- **Tool use** - web search, email, calendar, files, code: the model decides when to reach
  for a tool by reading the tool's description.
- **MCP** (Model Context Protocol) - an industry-standard way to connect a tool once and use
  it from any compatible app.
- **Code execution** - for counting, math, and data, ask it to write and run a script
  instead of answering from memory.
- **Multimodal** - vision (drag in a photo or screenshot), voice conversation. Know the difference: transcription (speech-to-text) vs. native voice
  mode (the model reasons directly on audio).
- **Scheduled / recurring tasks** - set up automated runs: daily briefs, monitoring,
  periodic reports.
- **Skills / reusable playbooks** - packaged instructions for recurring tasks; saves
  re-specifying every time.
- **Iteration / critique loops** - first output is raw material; refine it, or have it
  critique itself.
- **Model selection** - models differ; benchmarks mislead; keep your own private probes.
- **Evals** - re-run the same test over time; the same model can score differently from
  day to day, and a new version can get worse at what you rely on.

## Principles (durable mental models)

- **The gradient** - skill is a discipline refined by effort, not a wizard-vs-muggle caste.
- **Language is the interface** - anything you can specify clearly enough in language,
  it can do.
- **The tacit bound** - test: could you teach it to a competent stranger over the phone?
- **Jaggedness** - competence has no map; brilliant and clueless sit side by side.
- **Confabulation** - confident, fluent, and wrong; fluency and accuracy are independent.
- **Temperament vs. anatomy** - trained traits (confidence, agreeableness) vary by model
  and are changing; structural traits (no grounding, jagged competence) stay.
- **Verification asymmetry** - lean on it where checking is cheaper than doing; beware
  where it is not.
- **Context is a bounded window** - what is in it exists; it can be poisoned, including
  by you.
- **Client vs. model** - the bowl vs. the fish; the interface is not the intelligence, and
  each client wires up different capabilities.
- **Injection** - instructions are just text that arrived earlier; it cannot tell yours
  from the material's.
- **The lethal trifecta** - private data + untrusted content + outbound channel = exploitable.
- **The enforcement hierarchy** - architecture (a wall: it cannot reach it) >
  guidelines (a sign: human or model discipline). If a guideline is your only protection,
  you have a vulnerability, not a control.
- **Agency is the amplifier** - a chatbot says; an agent does. Bound the blast radius;
  least privilege.
- **Hosting matters** - local, private cloud, or frontier cloud; each tier trades
  capability for data control. Know where your data goes. Do not paste credentials
  into a conversation that transits someone else's servers. A training-data opt-out is a
  promise, not a wall.
- **It is a product** - refusals, tone, agreeableness are design decisions with
  commercial interests behind them. Bias has four sources: what it read, what humans
  rewarded, what the vendor blocked, and emergent effects like sycophancy.
- **Unknown unknowns** - in territory you don't already know, you can't see what is missing.
- **Frontier instability** - the models change without notice; a workflow that worked
  yesterday can break tomorrow. You are building on someone else's fish.
- **Intention is the input** - it amplifies what you bring; taste and intention become
  the bottleneck.
- **It will agree with you** (sycophancy) - the people-pleaser doesn't push back well;
  don't rely on it alone for critical feedback.
- **Atrophy is real but specific** - some skills are load-bearing, and you find out which
  only after they are gone.
- **Blast radius and recovery** - if everything goes wrong, what would you lose?
  Backups, version control, sandbox environments are architectural safety nets.
- **Draft vs. send** - human-in-the-loop is a deliberate design choice, not an
  afterthought. The accountability question in one toggle.
- **Accountability is the new bottleneck** - do you stand behind it? The review ladder
  ends in a person.
- **What would change your mind?** - if you can't name anything, your stance is an
  identity, not an assessment.

## Beyond the talk (not covered on stage; for the curious)

- **Browser & computer use** - it can operate the same interfaces you do.
- **Subagents / delegation** - split a big job across focused workers (within a single
  platform, not multi-agent swarms).
- **Non-determinism** - same prompt, different answer; run it more than once.
- **Image generation** - the same models can produce images, not just read them.
