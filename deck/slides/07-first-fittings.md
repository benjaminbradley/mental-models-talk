<!-- .slide: class="center-slide section-intro" data-bookmark="Tools" -->
# Reaching beyond the bowl

Note:
Section: tools. Everything the fish can do that isn't in its books comes through a tube.

---

# The books ended

<div class="shots">
<figure><img src="illustrations/confabulation-C4-current-events--world-series.png" alt="A terminal: 'Who won the 2026 World Series?' An older local model answers that the Phillies beat the Rays for their third title in four years, at Marlins Park"><figcaption>An older model, run locally</figcaption></figure>
<figure class="fragment"><img src="illustrations/confabulation-C4-current-events--world-cup.png" alt="'Who won the world cup in 2026?' A current model starts to say the tournament hasn't occurred, notices today's date is after it, and offers to search"><figcaption>A current model</figcaption></figure>
</div>

Note:
Remember Recent Events on the fish's map? The books ended before that territory existed.

First: an older model running locally (ollama). "Who won the 2026 World Series?" A crisp, specific, entirely invented answer -- Phillies over the Rays, at Marlins Park. A true hallucination: filled in from pattern.

(Click.) Second: a current model (Haiku), asked about the 2026 World Cup. It *starts* down the same road -- "the tournament hasn't occurred" -- then notices today's date is after it and pushes toward a web search instead.

Two lessons: (1) temperament is changing -- newer fish are trained to notice the edge of the map more often; (2) the anatomy isn't: the books still ended, and the fix it reaches for is a tool: web search. That's next.

---

# Looking things up

<div class="split">
<div class="scene">
<svg viewBox="0 0 800 600" role="img" aria-label="The fish swims up to the tube and uses it; the tube runs up out of the bowl to the web. Then a web page appears in the water">
  <g style="fill: none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M 400 250 V 60 Q 400 20 440 20 H 640" style="stroke: var(--ink); stroke-width: 48"/>
    <path d="M 400 250 V 60 Q 400 20 440 20 H 640" style="stroke: var(--rock); stroke-width: 30"/>
  </g>
  <use href="#bowl-back" x="0" y="40" width="600" height="560"/>
  <use href="#bowl-water" x="0" y="40" width="600" height="560"/>
  <g style="stroke: var(--ink); stroke-width: 8">
    <circle cx="715" cy="40" r="70" style="fill: var(--sky)"/>
    <path d="M 645 40 H 785 M 715 -30 V 110 M 715 -30 C 670 0, 670 80, 715 110 M 715 -30 C 760 0, 760 80, 715 110" style="fill: none"/>
  </g>
  <g class="goldfish awake">
    <use href="#fish-body" x="160" y="235" width="250" height="163"/>
    <use class="eyes-open" href="#fish-eyes-open" x="160" y="235" width="250" height="163"/>
  </g>
  <!-- a web page, poured into the water -->
  <g class="fragment" data-fragment-index="0" style="stroke: var(--ink); stroke-width: 6" stroke-linejoin="round">
    <rect x="140" y="420" width="150" height="110" rx="10" style="fill: #fff"/>
    <path d="M 140 448 H 290" style="fill: none"/>
    <circle cx="158" cy="434" r="5" style="fill: var(--red); stroke: none"/><circle cx="174" cy="434" r="5" style="fill: var(--yellow); stroke: none"/><circle cx="190" cy="434" r="5" style="fill: var(--green); stroke: none"/>
    <path d="M 158 470 H 272 M 158 490 H 272 M 158 510 H 236" style="fill: none; stroke-width: 5"/>
  </g>
  <use href="#bowl-front" x="0" y="40" width="600" height="560"/>
</svg>
</div>
<div>
<p>The books ended. The web didn't.</p>
<p><span class="term">web search</span> <span class="term">tool use</span></p>
<p class="fragment small" data-fragment-index="0">Tool results land in the water</p>
</div>
</div>

Note:
You just saw it: the books ended. Wouldn't it be nice if it could look things up? That's our first tool: web search. We draw it as a tube from the bowl out to the web. The fish reaches for it -- it decides when.

(Click.) The page it fetched lands in the water. New limit, planted for station 9: whatever comes back from a tool is poured into the water. The fish reads it just like it reads you.

---

<!-- .slide: data-visibility="hidden" -->
# "Tell me about" vs. "Search for"

<div class="shots">
<figure><div class="placeholder">TODO: capture -- "Tell me about Austin's moonlight towers": answered from the fish's own map, no search (illustrations/citations--tell-me-about.png)</div><figcaption>"Tell me about X": from the map</figcaption></figure>
<figure class="fragment"><div class="placeholder">TODO: capture -- "Search for info on Austin's moonlight towers": web search, real links (illustrations/citations--search-for-info.png)</div><figcaption>"Search for info on X": checks the territory</figcaption></figure>
</div>

<p class="lede fragment">How you ask &rarr; whether it looks <span class="term">citations</span></p>

Note:
Same question, two verbs, same app. Austin's moonlight towers.

"Tell me about..." invites the fish to answer from its map -- the books. Fluent, confident, and only as good as the books were dense. Ask it for sources this way and it can produce things that *look* like sources: the appearance of sourcing manufactures unearned trust.

(Click.) "Search for info on..." points it at the tool. It goes out to the territory, and what comes back lands in the water with real links you can click.

(Click.) How you ask decides whether it looks. In most apps the fish decides when to search -- so if facts matter, say "search," and check that it did.

Still your job: the links are real, but its summary of them can still be wrong. Click one.

HIDDEN for now (captures not made; see planning/todo.md § Hidden slides). To bring it back, delete the `data-visibility="hidden"` line above the title.

Captures to make (same app, same day): see the placeholders. Earlier local-model captures for the old three-rung version are in the top-level `illustrations/citations-ladder--*` (candidates).

Bridge: "Web search was our first tool. Let's zoom out: what's a tool?"

---

# Tools

<div class="tiles">
<div><span class="emoji">🌐</span><b>Web browser</b><span class="small">search, read pages</span></div>
<div><span class="emoji">✉️</span><b>Email</b><span class="small">read, draft, send</span></div>
<div><span class="emoji">📅</span><b>Calendar</b><span class="small">check, book</span></div>
<div><span class="emoji">📁</span><b>Files</b><span class="small">open, save</span></div>
<div><span class="emoji code">&lt;/&gt;</span><b>Code</b><span class="small">write it, run it</span></div>
</div>

<p class="lede">Tool = anything outside the fish it can reach</p>
<p class="fragment">Every tool: attached to the bowl <span class="term">tool use</span> <span class="term">tool calling</span></p>
<p class="fragment">A standard plug for tools, like USB: <span class="term"><b>MCP</b>: Model Context Protocol</span></p>

Note:
Web search was the first one. Let's zoom out. You use tools all day: a calculator when the mental math gets hard, a map when you don't know the way, a phone when you need someone else.

Same idea for the fish. A tool is anything outside the fish that it can reach for: a web browser to search and read pages, your email, your calendar, your files, a place to write and run code.

(Click.) Like the web search tube: every tool connects to the bowl with a tube -- the word is "tool"; the tube is just how we draw it. (Also called tool calling or function calling.)

(Click.) And there's a standard way to plug tools in: MCP, the Model Context Protocol. Think USB: before it, every device needed its own cable; now one plug fits everything. Build a tool's connector once and any MCP-compatible app can use it -- that's why you'll see "MCP server" in a lot of tool lists. (Its full slide, "Two kinds of plumbing", is hidden; MCP is on the take-home card.)

Tool discovery: the fish reads each tool's description to decide when and how to use it. That's why descriptions matter, and why a badly described tool misbehaves.

Bridge: "But the fish didn't come out of the library knowing how to use any of them."

---

# The fish has never used a tool

<div class="scene">
<svg viewBox="0 0 700 600" role="img" aria-label="A tube (a tool) now connects to the bowl; the fish stares at it with a question mark over its head">
  <g style="fill: none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M 400 250 V 60 Q 400 20 440 20 H 640" style="stroke: var(--ink); stroke-width: 48"/>
    <path d="M 400 250 V 60 Q 400 20 440 20 H 640" style="stroke: var(--rock); stroke-width: 30"/>
  </g>
  <use href="#bowl-back" x="0" y="40" width="600" height="560"/>
  <use href="#bowl-water" x="0" y="40" width="600" height="560"/>
  <g class="goldfish awake">
    <use href="#fish-body" x="140" y="330" width="230" height="150"/>
    <use class="eyes-open" href="#fish-eyes-open" x="140" y="330" width="230" height="150"/>
  </g>
  <text class="label" x="270" y="320" style="font-size: 90px">?</text>
  <use href="#bowl-front" x="0" y="40" width="600" height="560"/>
</svg>
</div>

Note:
Rewind to the fish straight out of the library and the apprenticeship -- the original fish, before anyone trained it on tools. Give its bowl a tube to the outside world, and the fish... just looks at it.

Nothing in the library or the apprenticeship taught it what a tool is for. So it needs another round of training.

---

# Training, step 3

<div class="shots">
<figure>
<svg viewBox="0 0 600 470" role="img" aria-label="Step 1: the fish atop a stack of books">
  <g style="stroke: var(--ink); stroke-width: 8" stroke-linejoin="round">
    <rect x="90" y="400" width="420" height="56" rx="6" style="fill: var(--blue)"/>
    <rect x="120" y="344" width="370" height="56" rx="6" style="fill: var(--red)"/>
    <rect x="100" y="288" width="400" height="56" rx="6" style="fill: var(--green)"/>
    <rect x="135" y="232" width="340" height="56" rx="6" style="fill: var(--yellow)"/>
    <rect x="115" y="176" width="380" height="56" rx="6" style="fill: var(--purple)"/>
  </g>
  <g class="goldfish awake">
    <use href="#fish-body" x="150" y="-6" width="300" height="195"/>
    <use class="eyes-open" href="#fish-eyes-open" x="150" y="-6" width="300" height="195"/>
  </g>
</svg>
<figcaption>1. Read the library<br><span class="term">pretraining</span></figcaption>
</figure>
<figure>
<svg viewBox="0 0 600 470" role="img" aria-label="Step 2: a person compares two of the fish's replies, holding up a check under one and a cross under the other">
  <g class="goldfish awake">
    <use href="#fish-body" x="-10" y="190" width="240" height="156"/>
    <use class="eyes-open" href="#fish-eyes-open" x="-10" y="190" width="240" height="156"/>
  </g>
  <!-- two candidate replies, side by side: A and B -->
  <g style="stroke: var(--ink); stroke-width: 7; fill: #fff" stroke-linejoin="round">
    <path d="M 244 14 h 136 a 22 22 0 0 1 22 22 v 66 a 22 22 0 0 1 -22 22 h -96 l -46 34 l 10 -34 h -4 a 22 22 0 0 1 -22 -22 v -66 a 22 22 0 0 1 22 -22 Z"/>
    <path d="M 436 14 h 136 a 22 22 0 0 1 22 22 v 66 a 22 22 0 0 1 -22 22 h -96 l -46 34 l 10 -34 h -4 a 22 22 0 0 1 -22 -22 v -66 a 22 22 0 0 1 22 -22 Z"/>
  </g>
  <g style="stroke: var(--ink); stroke-width: 7" stroke-linecap="round">
    <path d="M 246 52 h 130 M 246 86 h 90 M 438 52 h 130 M 438 86 h 110"/>
  </g>
  <!-- the human rater: holds up the check under A and the cross under B -->
  <g style="stroke: var(--ink); stroke-width: 7" stroke-linejoin="round" stroke-linecap="round">
    <path d="M 310 238 V 282 M 505 238 V 282"/>
    <rect x="272" y="156" width="76" height="84" rx="12" style="fill: var(--green)"/>
    <path d="M 292 199 l 14 17 l 26 -36" style="stroke: #fff; stroke-width: 10; fill: none"/>
    <rect x="467" y="156" width="76" height="84" rx="12" style="fill: var(--red)"/>
    <path d="M 489 178 l 32 42 M 521 178 l -32 42" style="stroke: #fff; stroke-width: 10"/>
  </g>
  <g style="stroke: var(--ink); stroke-width: 10; fill: none" stroke-linecap="round">
    <path d="M 384 332 Q 326 332 312 290"/>
    <path d="M 426 332 Q 488 332 503 290"/>
  </g>
  <use href="#person" x="333" y="210" width="144" height="259"/>
  <use href="#person-eyes" x="333" y="210" width="144" height="259"/>
  <g style="stroke: var(--ink); stroke-width: 6; fill: var(--skin)">
    <circle cx="310" cy="284" r="11"/><circle cx="505" cy="284" r="11"/>
  </g>
</svg>
<figcaption>2. Apprenticeship<br><span class="term">RLHF</span></figcaption>
</figure>
<figure class="fragment">
<svg viewBox="0 0 600 470" role="img" aria-label="Step 3: the fish practicing with a tool (a tube), its attempts scored with check and cross paddles">
  <g style="fill: none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M 330 0 V 120 Q 330 170 290 190" style="stroke: var(--ink); stroke-width: 48"/>
    <path d="M 330 0 V 120 Q 330 170 290 190" style="stroke: var(--rock); stroke-width: 30"/>
  </g>
  <g class="goldfish awake">
    <use href="#fish-body" x="20" y="170" width="300" height="195"/>
    <use class="eyes-open" href="#fish-eyes-open" x="20" y="170" width="300" height="195"/>
  </g>
  <g style="stroke: var(--ink); stroke-width: 7" stroke-linejoin="round" stroke-linecap="round">
    <path d="M 490 250 V 320"/><rect x="450" y="156" width="80" height="94" rx="12" style="fill: var(--green)"/>
    <path d="M 470 205 l 15 18 l 28 -38" style="stroke: #fff; stroke-width: 10; fill: none"/>
  </g>
</svg>
<figcaption>3. Practice with tools<br><span class="term">tool use</span> <span class="term">function calling</span></figcaption>
</figure>
</div>

Note:
Back to the training story from station 3. Step 1, the library; step 2, the apprenticeship. (Click.) Step 3: practice with tools. The fish tries using tools, and gets scored on whether it used them well -- when to reach for a tool, what to ask it, what to do with what comes back.

Every tool you'll see from here on is something the fish was trained to reach for. It decides when to use one, based on the tool's description. Nothing comes in through a tool unless the fish reached for it.

---

# Remember things with a notepad

<div class="split">
<div class="scene">
<svg viewBox="0 0 780 600" role="img" aria-label="The bowl with a tube running up out of it to a notepad: the fish's own notes">
  <g style="fill: none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M 400 300 V 125 Q 400 95 430 95 H 590" style="stroke: var(--ink); stroke-width: 48"/>
    <path d="M 400 300 V 125 Q 400 95 430 95 H 590" style="stroke: var(--rock); stroke-width: 30"/>
  </g>
  <use href="#bowl-back" x="0" y="40" width="600" height="560"/>
  <use href="#bowl-water" x="0" y="40" width="600" height="560"/>
  <g class="goldfish awake">
    <use href="#fish-body" x="150" y="300" width="250" height="163"/>
    <use class="eyes-open" href="#fish-eyes-open" x="150" y="300" width="250" height="163"/>
  </g>
  <use href="#bowl-front" x="0" y="40" width="600" height="560"/>
  <rect x="570" y="10" width="200" height="180" rx="22" style="fill: #fff; stroke: var(--ink); stroke-width: 9"/>
  <text class="icon" x="670" y="135" text-anchor="middle" style="font-size: 110px">📝</text>
  <text class="note-text" x="670" y="240" text-anchor="middle" style="font-size: 40px">the fish's notes</text>
</svg>
</div>
<div class="fragment">
<div class="mock">
<h4>Saved memories</h4>
<ul>
<li>Has completed several Anthropic skilljar classes.</li>
<li class="bad">Has designed and implemented RAG systems</li>
<li>Lives in Austin</li>
</ul>
</div>
<p class="scene-caption">The fish's notes about you. Accurate?</p>
<p class="scene-caption"><span class="term">memory</span></p>
</div>
</div>

Note:
Goldfish have a famous three-second memory -- and so does ours: every new chat is a fresh bowl. Unless you give it a notepad. The fish writes notes about you, and they're poured into the water at the start of every conversation. Unlike the sticky notes on the glass (station 6), which you or the maker write, the fish writes these itself -- and you may not know what's in them.

Term: memory. New limit: it may store things you never meant to persist.

(Click.) The resume story (personal; tell it as one): I was drafting resume bullets -- stretching things the way you do on a resume -- and it saved those as facts about my experience. Weeks later it was citing them back to me as things I could do. (Mock entries are illustrative; swap in the real one.)

Memory audit: go look at what it has stored about you. Delete what shouldn't be there.

Sets up the sleeper attack (station 9). Bridge out: "Now it can read and remember. Can it *do* anything?"
