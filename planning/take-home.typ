// Take-home card: content and print layout. Scope rules: take-home.md.
// Build (from repo root): typst compile --root . planning/take-home.typ
// One page, black and white.
// QR codes: ../deck/art/qr-slides.svg, ../deck/art/qr-contact.svg (regenerate with `make qr`).

// ---- Layout knobs ---------------------------------------------------------
// Half letter (5.5 x 8.5 in). For a full letter sheet, use "us-letter" and
// raise `base` to ~10pt.
#let paper = (width: 5.5in, height: 8.5in)
#let base = 9.2pt


#let ink = black

// Built from parts so the address is not a literal string in the public repo.
#let email = ("education", "wegeekout.com").join("@")

// ---- Styles ---------------------------------------------------------------
#set document(title: "Mental Models for Using LLMs - Take-Home")
#set page(width: paper.width, height: paper.height, margin: 0.25in)
#set text(font: ("Georgia"), size: base, fill: ink, hyphenate: false)
#set par(leading: 0.42em, justify: false)

// `/ Term: phrase` lines render as: **Term** - phrase, with a hanging indent.
#show terms: it => {
  for item in it.children {
    block(above: 0.42em, below: 0em, par(hanging-indent: 1em)[
      #text(weight: "bold")[#item.term] #h(0.15em)--#h(0.15em) #item.description
    ])
  }
}

#let section(title, body) = block(above: 0.8em, below: 0em, breakable: true)[
  #block(below: 0.25em, sticky: true)[
    #box(width: 1fr, inset: (right: 0.4em), line(length: 100%, stroke: 0.6pt + ink))
    #text(size: base * 1.1, weight: "bold")[#upper(title)]
    #box(width: 1fr, inset: (left: 0.4em), line(length: 100%, stroke: 0.6pt + ink))
  ]
  #body
]

#block(below: 0.6em, text(size: base * 1.6, weight: "bold")[Mental Models for Using LLMs])
#text(size: base * 1.05)[
  Terms from the talk to jog your memory; each is a search term for going deeper.
]

#section("Mindset")[
  / Language is the interface: if you can teach it by phone, it can do it
  / Intention is the input: it amplifies what you bring
  / Accountability is the new bottleneck: do you stand behind it?
]

#section("Prompt engineering")[
  / Specification: intent, criteria, constraints, examples, output format
  / Role / persona prompting: "you are a [role]"; which experts apply?
  / Few-shot: show two or three examples of "good"
  / Meta-prompting: have it help write the prompt (theory of mind)
  / Chain-of-thought / show your work: reason step by step; check the steps
  / Extended thinking: "think about X" draws out more detail
  / Iteration / critique loops: first output is raw material; refine it
]

#section("Quality & confidence")[
  / The jagged frontier: brilliant and clueless, side by side
  / Confabulation / hallucination: fluent is not the same as accurate
  / Verification asymmetry: use it where checking beats doing
  / Sycophancy: it will agree with you; ask for critical feedback
  / Ask it to check itself: rate confidence, flag cutoff gaps, search
  / Task decomposition: break it down; verify each piece
  / Memory audit: review what it has stored about you
]

#section("Reliability")[
  / Frontier instability: models change without notice; workflows break
  / Frontier control: accounts get locked; export and back up
  / Evals / evaluations: re-run the same tests; models can get worse
]

#section("Context & capability")[
  / Context engineering: choose and manage what is in the bowl
  / Restart vs. repair: messy history? start a new session
  / Tool use / function calling: web search, email, files, and more
  / MCP (Model Context Protocol): a USB-like standard for tools
  / Code execution: for counting, math, and data
  / Custom GPTs / Gems: someone else's instructions and data, packaged
  / RAG (retrieval-augmented generation): reference material on demand
  / Scheduled tasks: daily briefs, monitoring, periodic reports
  / Skills / playbooks: packaged instructions for recurring tasks
  / Instruction hierarchy: provider #sym.arrow your settings #sym.arrow memory #sym.arrow prompt
  / Subagents / delegation: parallel tasks, each with a clean context
]

#section("Security & privacy")[
  / Prompt injection: someone else's instructions
  / The lethal trifecta: private data + untrusted content + outbound channel
  / Enforcement hierarchy: Architecture is a wall. Guidelines are a suggestion.
  / Least privilege: only grant required access; give the agent its own account.
  / Hosting matters: know where your data goes. No credentials in chat.
  / Blast radius and recovery: what could you lose, how would you recover?
  / Draft vs. send / human in the loop: what do you want to approve first?
]

// Links footer, right after the content.
#block(above: 0.8em, breakable: false)[
  #line(length: 100%, stroke: 0.6pt + ink)
  #v(0.3em)
  #let qr(path, label, url) = grid(
    columns: (0.65in, 1fr), column-gutter: 0.7em, align: horizon,
    image(path, width: 0.65in),
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
