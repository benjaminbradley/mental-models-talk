# Take-Home Reference

Source for the one-page card participants leave with. Format: key concept/term
+ a memory-jogging phrase, so people can look up detail if they want - not full
explanations. Covers what the talk teaches, and nothing it doesn't; update it when a method or principle
is added, removed, or renamed in the talk. Print layout: `take-home.typ` (half-letter, two-sided); mirror wording changes there.

## Links (keep on the card)

Include QR codes for both links:

- **Slides:** https://benjaminbradley.github.io/mental-models-talk/
- **Contact:** https://wegeekout.com/contact-me/
- email via education at wegeekout - com (can be displayed visually on print-out, but should not be scrapable in code)

## Contents

### Mindset

- **Language is the interface** - anything you could teach a competent stranger over the phone, it can do.
- **Intention is the input** - it amplifies what you bring; taste and intention are your contributions.
- **Accountability is the new bottleneck** - do you stand behind the work?

### Prompt engineering

- **Specification** - state the intention, requirements/criteria, priorities/constraints; provide examples and output format.
- **Role / persona prompting** - "you are a [role]" or "what knowledge domains are relevant, and what does each contribute?"
- **Few-shot** - show two or three examples of what "good" looks like.
- **Meta-prompting** - it can help you write prompts. When creating a prompt for a new session, use Theory of Mind.
- **Chain-of-thought / show your work** - ask it to reason step by step; you also get to check the steps.
- **Extended thinking** - say "think about X" to elicit additional details.
- **Iteration / critique loops** - first output is raw material; refine it, or have it critique itself.

### Quality & confidence

- **Jaggedness / the jagged frontier** - competence has no map; brilliant and clueless sit side by side.
- **Confabulation / hallucination** - confident, fluent, and wrong; fluency and accuracy are independent.
- **Verification asymmetry** - lean on it where checking is cheaper than doing; beware where it is not.
- **It will agree with you** (sycophancy) - ask it for critical feedback.
- **Ask it to check itself** - it can grade its own confidence, flag knowledge-cutoff gaps, or search when unsure.
- **(Task) decomposition** - break a complex task into sub-tasks, and verify each piece.
- **Memory audit** - review what the model has stored about you.


### Context & capability

- **Context engineering / context management** - select and manage what is in the bowl.
- **Restart vs. repair** - when the conversation history is messy, consider starting a new session.
- **Tool use / tool calling** (also: function calling) - adding external capabilities like web search, email, files.
- **MCP** (Model Context Protocol) - like USB, an industry-standard way to connect a tool.
- **Code execution** - for counting, math, and data.
- **Custom GPTs / Gems** - an app someone else set up, with their instructions and data inside.
- **RAG** (Retrieval-Augmented Generation) - the system pulls the right reference material into context on demand.
- **Scheduled / recurring tasks** - set up automated runs: daily briefs, monitoring, periodic reports.
- **Skills / reusable playbooks** - packaged instructions for recurring tasks.
- **Memory & instruction hierarchy** - provider instructions (invisible) -> your custom instructions -> memory -> your prompt.
- **Subagents / delegation** - helps with context management and running multiple tasks at the same time.

### Security and privacy

- **Prompt injection** - instructions are just text that arrived earlier; it can't tell yours from others'.
- **The lethal trifecta** - private data + untrusted content + outbound channel = exploitable.
- **The enforcement hierarchy** - architecture (an enforceable wall) > guidelines (a sign without enforcement).
- **Least privilege** - only grant access to what is needed; give the agent its own account and share only intended documents.
- **Hosting matters** - know where your data goes. Do not paste credentials into a conversation.
- **Blast radius and recovery** - what are you risking loss of? Keep backups; sandbox environments are architectural safety nets.
- **Draft vs. send / human in the loop** - Decide where you want to require human approval.

### Reliability

- **Frontier instability** - the models change without notice; a workflow that worked yesterday can break tomorrow.
- **Frontier control** - your account can be locked without notice too; export and back up what matters.
- **Evals / evaluations** - re-run the same tests over time; a model can get worse at what you rely on.
