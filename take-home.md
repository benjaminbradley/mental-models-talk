# Take-Home Reference (DRAFT - placeholders)

Source material for the one-page card participants leave with. Format: key concept/term
+ a memory-jogging phrase, so people can look up detail if they want - not full
explanations. To be trimmed and prioritized later (a real card fits far fewer than this).

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
- **Verified citations** - "with sources" can be fabricated; "with verified sources"
  (tool-checked) is the real thing - know the difference.
- **Decomposition** - break a complex task into sub-tasks before starting, so each
  piece can be verified independently. Distinct from iteration (which refines after).
- **Context engineering** - curate what is in the window; garbage in, garbage out.
- **Memory & instruction hierarchy** - provider instructions (invisible) -> your custom
  instructions -> project instructions -> your prompt. Know the stack.
- **Restart vs. repair** - a derailed thread is often cheaper to abandon than to fix.
  The whole conversation is re-read every turn; you cannot "take out the salt."
- **Projects / RAG** - pull the right reference material into context on demand.
  Custom GPTs / Gems / Projects are products built on the instruction hierarchy.
- **Tool use** - provider-specific tools (one vendor only) vs. MCP (industry-standard
  connectors, any compatible platform). The model reads a tool's description to decide
  when and how to use it.
- **Browser & computer use** - it can operate the same interfaces you do.
- **Multimodal** - vision (drag in a photo or screenshot), image generation, voice
  conversation. Know the difference: transcription (speech-to-text) vs. native voice
  mode (the model reasons directly on audio).
- **Scheduled / recurring tasks** - set up automated runs: daily briefs, monitoring,
  periodic reports.
- **Skills / reusable playbooks** - packaged instructions for recurring tasks; saves
  re-specifying every time.
- **Subagents / delegation** - split a big job across focused workers (within a single
  platform, not multi-agent swarms).
- **Iteration / critique loops** - first output is raw material; refine it, or have it
  critique itself.
- **Model selection** - models differ; benchmarks mislead; keep your own private probes.

## Principles (durable mental models)

- **The gradient** - skill is a discipline refined by effort, not a wizard-vs-muggle caste.
- **Language is the interface** - anything you can specify clearly enough in language,
  it can do.
- **The tacit bound** - test: could you teach it to a competent stranger over the phone?
- **Jaggedness** - competence has no map; brilliant and clueless sit side by side.
- **Confabulation** - confident, fluent, and wrong; fluency and accuracy are independent.
- **Temperament vs. anatomy** - trained traits (confidence, agreeableness) vary by model
  and are changing; structural traits (no grounding, jagged competence) stay.
- **Non-determinism** - same prompt, different answer; run it more than once.
- **Verification asymmetry** - lean on it where checking is cheaper than doing; beware
  where it is not.
- **Context is a bounded window** - what is in it exists; it can be poisoned, including
  by you.
- **Attaching is not understanding** - a document in context is not comprehension.
- **Client vs. model** - the bowl vs. the fish; the interface is not the intelligence, and
  each client wires up different capabilities.
- **Injection** - instructions are just text that arrived earlier; it cannot tell yours
  from the material's.
- **The lethal trifecta** - private data + untrusted content + outbound channel = exploitable.
- **Agency is the amplifier** - a chatbot says; an agent does. Bound the blast radius;
  least privilege.
- **Hosting matters** - local, private cloud, or frontier cloud; each tier trades
  capability for data control. Know where your data goes.
- **It is a product** - refusals, tone, agreeableness are design decisions with
  commercial interests behind them.
- **Frontier instability** - the models change without notice; a workflow that worked
  yesterday can break tomorrow. You are building on someone else's fish.
- **It amplifies what you bring** - taste and intention become the bottleneck.
- **Draft vs. send** - human-in-the-loop is a deliberate design choice, not an
  afterthought. The accountability question in one toggle.
- **Accountability is the new bottleneck** - do you stand behind it? The review ladder
  ends in a person.
