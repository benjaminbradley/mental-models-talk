// Take-home card: print layout for take-home.md (the content source of truth).
// Build (from repo root): typst compile planning/take-home.typ planning/take-home.pdf
// Two-sided: page 1 = front, page 2 = back.
// QR codes: ../deck/art/qr-slides.svg, ../deck/art/qr-contact.svg (regenerate with `make qr`).

// ---- Layout knobs ---------------------------------------------------------
// Half letter (5.5 x 8.5 in). For a full letter sheet, use "us-letter" and
// raise `base` to ~10pt.
#let paper = (width: 5.5in, height: 8.5in)
#let base = 9.2pt

// Deck palette (../deck/theme/talk.css), one color per section.
#let ink = rgb("#161412")
#let c-mindset = rgb("#e0362c")   // --red
#let c-prompt = rgb("#d1520f")    // --orange-deep
#let c-quality = rgb("#8a5cc9")   // --purple
#let c-context = rgb("#2a63c9")   // --blue
#let c-security = rgb("#237a42")  // --green-deep
#let c-reliab = rgb("#1fa99a")    // --teal

// Built from parts so the address is not a literal string in the public repo.
#let email = ("education", "wegeekout.com").join("@")

// ---- Styles ---------------------------------------------------------------
#set document(title: "Mental Models for Using LLMs - Take-Home")
#set page(width: paper.width, height: paper.height, margin: (x: 0.4in, top: 0.4in, bottom: 0.4in))
#set text(font: ("Georgia"), size: base, fill: ink, hyphenate: false)
#set par(leading: 0.42em, justify: false)

// `/ Term: phrase` lines render as: **Term** - phrase, with a hanging indent.
#show terms: it => {
  for item in it.children {
    block(above: 0.62em, below: 0em, par(hanging-indent: 1em)[
      #text(weight: "bold")[#item.term] #h(0.15em)--#h(0.15em) #item.description
    ])
  }
}

#let section(title, color, body) = block(above: 1.05em, below: 0em, breakable: true)[
  #block(below: 0.35em, sticky: true)[
    #text(size: base * 1.3, weight: "bold", fill: color)[#upper(title)]
    #box(width: 1fr, inset: (left: 0.4em), line(length: 100%, stroke: 0.6pt + color))
  ]
  #body
]

// ---- Front ----------------------------------------------------------------
#block(below: 0.55em, text(size: base * 2.1, weight: "bold")[Mental Models for Using LLMs])
#text(size: base * 1.05, fill: ink.lighten(30%))[
  Terms and phrases from the talk, to jog your memory. Each one is a search term
  if you want to go deeper.
]

#section("Mindset", c-mindset)[
  / Language is the interface: anything you could teach a competent stranger over the phone, it can do.
  / Intention is the input: it amplifies what you bring; taste and intention are your contributions.
  / Accountability is the new bottleneck: do you stand behind the work?
]

#section("Prompt engineering", c-prompt)[
  / Specification: state the intention, requirements/criteria, priorities/constraints; provide examples and output format.
  / Role / persona prompting: "you are a [role]" or "what knowledge domains are relevant, and what does each contribute?"
  / Few-shot: show two or three examples of what "good" looks like.
  / Meta-prompting: it can help you write prompts. When creating a prompt for a new session, use Theory of Mind.
  / Chain-of-thought / show your work: ask it to reason step by step; you also get to check the steps.
  / Extended thinking: say "think about X" to elicit additional details.
  / Iteration / critique loops: first output is raw material; refine it, or have it critique itself.
]

#section("Quality & confidence", c-quality)[
  / Jaggedness / the jagged frontier: competence has no map; brilliant and clueless sit side by side.
  / Confabulation / hallucination: confident, fluent, and wrong; fluency and accuracy are independent.
  / Verification asymmetry: lean on it where checking is cheaper than doing; beware where it is not.
  / It will agree with you (sycophancy): ask it for critical feedback.
  / Ask it to check itself: it can grade its own confidence, flag knowledge-cutoff gaps, or search when unsure.
  / (Task) decomposition: break a complex task into sub-tasks, and verify each piece.
  / Memory audit: review what the model has stored about you.
]

#section("Reliability", c-reliab)[
  / Frontier instability: the models change without notice; a workflow that worked yesterday can break tomorrow.
  / Frontier control: your account can be locked without notice too; export and back up what matters.
  / Evals / evaluations: re-run the same tests over time; a model can get worse at what you rely on.
]

#pagebreak()

// ---- Back -----------------------------------------------------------------
#section("Context & capability", c-context)[
  / Context engineering / context management: select and manage what is in the bowl.
  / Restart vs. repair: when the conversation history is messy, consider starting a new session.
  / Tool use / tool calling (also\: function calling): adding external capabilities like web search, email, files.
  / MCP (Model Context Protocol): like USB, an industry-standard way to connect a tool.
  / Code execution: for counting, math, and data.
  / Custom GPTs / Gems: an app someone else set up, with their instructions and data inside.
  / RAG (Retrieval-Augmented Generation): the system pulls the right reference material into context on demand.
  / Scheduled / recurring tasks: set up automated runs: daily briefs, monitoring, periodic reports.
  / Skills / reusable playbooks: packaged instructions for recurring tasks.
  / Memory & instruction hierarchy: provider instructions (invisible) #sym.arrow your custom instructions #sym.arrow memory #sym.arrow your prompt.
  / Subagents / delegation: helps with context management and running multiple tasks at the same time.
]

#section("Security & privacy", c-security)[
  / Prompt injection: someone else's instructions
  / The lethal trifecta: private data + untrusted content + outbound channel
  / Enforcement hierarchy: Architecture is a wall. Guidelines are a suggestion.
  / Least privilege: only grant required access; give the agent its own account.
  / Hosting matters: know where your data goes. No credentials in chat.
  / Blast radius and recovery: what could you lose, how would you recover?
  / Draft vs. send / human in the loop: what do you want to approve first?
]

// Links footer, pinned to the bottom of the back page.
#place(bottom, float: false)[
  #line(length: 100%, stroke: 0.6pt + ink.lighten(50%))
  #v(0.4em)
  #let qr(path, label, url) = grid(
    columns: (0.85in, 1fr), column-gutter: 0.7em, align: horizon,
    image(path, width: 0.85in),
    [
      #text(weight: "bold", size: base * 1.15)[#label] \
      #text(size: base * 0.9)[#url]
    ],
  )
  #grid(
    columns: (1fr, 1fr), column-gutter: 1.2em,
    qr("../deck/art/qr-slides.svg", "Slides", "benjaminbradley.github.io/\nmental-models-talk"),
    qr("../deck/art/qr-contact.svg", "Contact", [wegeekout.com/\ contact-me \ #email]),
  )
]
