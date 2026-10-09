# Tools

<div class="tiles">
<div><span class="emoji">🌐</span><b>Web browser</b><span class="small">search, read pages</span></div>
<div><span class="emoji">✉️</span><b>Email</b><span class="small">read, draft, send</span></div>
<div><span class="emoji">📅</span><b>Calendar</b><span class="small">check, book</span></div>
<div><span class="emoji">📁</span><b>Files</b><span class="small">open, save</span></div>
<div><span class="emoji code">&lt;/&gt;</span><b>Code</b><span class="small">write it, run it</span></div>
</div>

<p class="lede">A tool is anything outside the fish that it can reach for.</p>
<p class="fragment">In the pictures, every tool connects to the bowl with a tube. <span class="term">tool use</span></p>

Note:
You use tools all day: a calculator when the mental math gets hard, a map when you don't know the way, a phone when you need someone else.

Same idea for the fish. A tool is anything outside the fish that it can reach for: a web browser to search and read pages, your email, your calendar, your files, a place to write and run code.

(Click.) In the pictures from here on, every tool connects to the bowl with a tube -- the word is "tool"; the tube is just how we draw it.

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
The bowl gets its first tool -- drawn as a tube to the outside world. And the fish... just looks at it.

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
<svg viewBox="0 0 600 470" role="img" aria-label="Step 2: the fish's replies scored with check and cross paddles">
  <g class="goldfish awake">
    <use href="#fish-body" x="0" y="170" width="300" height="195"/>
    <use class="eyes-open" href="#fish-eyes-open" x="0" y="170" width="300" height="195"/>
  </g>
  <g style="stroke: var(--ink); stroke-width: 7; fill: #fff" stroke-linejoin="round">
    <path d="M 300 70 h 170 a 24 24 0 0 1 24 24 v 50 a 24 24 0 0 1 -24 24 h -140 l -40 40 l 10 -40 a 24 24 0 0 1 -24 -24 v -50 a 24 24 0 0 1 24 -24 Z"/>
    <path transform="translate(0 460) scale(1 -1)" d="M 300 70 h 170 a 24 24 0 0 1 24 24 v 50 a 24 24 0 0 1 -24 24 h -140 l -40 40 l 10 -40 a 24 24 0 0 1 -24 -24 v -50 a 24 24 0 0 1 24 -24 Z"/>
  </g>
  <g style="stroke: var(--ink); stroke-width: 7" stroke-linejoin="round" stroke-linecap="round">
    <path d="M 555 190 V 250"/><rect x="515" y="96" width="80" height="94" rx="12" style="fill: var(--green)"/>
    <path d="M 535 145 l 15 18 l 28 -38" style="stroke: #fff; stroke-width: 10; fill: none"/>
    <path d="M 555 410 V 465"/><rect x="515" y="316" width="80" height="94" rx="12" style="fill: var(--red)"/>
    <path d="M 538 340 l 34 46 M 572 340 l -34 46" style="stroke: #fff; stroke-width: 10"/>
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
<svg viewBox="0 0 800 600" role="img" aria-label="The fish swims up to the tube and uses it; the tube runs up out of the bowl to the web">
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
  <use href="#bowl-front" x="0" y="40" width="600" height="560"/>
</svg>
</div>
<div>
<p>The books ended. The web didn't.</p>
<p><span class="term">web search</span></p>
<p class="fragment small">Whatever comes back from a tool lands in the water.</p>
</div>
</div>

Note:
You just saw it: the books ended. Wouldn't it be nice if it could look things up? That's the first tool: web search. The fish reaches for it -- it decides when.

(Click.) New limit, planted for station 9: whatever comes back from a tool is poured into the water. The fish reads it just like it reads you.

---

# Three ways to ask for facts

<div class="placeholder">TODO: citations visual (not a literal ladder) -- three levels of sourcing, with the gap between the 2nd and 3rd marked as the dangerous one</div>

1. "Tell me about X." <!-- .element: class="fragment" -->
2. "...with sources." <!-- .element: class="fragment" -->
3. "...with verified sources." <!-- .element: class="fragment" -->

Note:
Three levels of sourcing. Each of the next three slides is one of them, same question: Austin's moonlight towers.

The danger lives in the gap between the second and the third: unverified sourcing is more dangerous than no sourcing at all.

---

# 1. "Tell me about X"

<div class="shots tall">
<figure><img src="illustrations/citations-ladder--hallucinated-facts-gemma4.png" alt="A local model (gemma4) asked about Austin's moonlight towers decides in its thinking that they aren't a recognized landmark, then describes moonlit skyline views over Lady Bird Lake"></figure>
</div>

Note:
No sources: you're trusting the fish. A small local model (gemma4, no tools). Its own thinking says "Moonlight Towers is not a widely recognized landmark name" -- they're real, a 19th-century Austin landmark -- so it reinterprets the question and writes a lovely paragraph about moonlit skyline views. Confident, fluent, and about something that isn't the moonlight towers.

---

# 2. "...with sources"

<div class="shots tall">
<figure><img src="illustrations/citations-ladder--hallucinated-sources-gemma3.png" alt="A local model (gemma3) describes the moonlight towers as historic water tanks and lists three official-looking source URLs on austintexas.gov and atlasobscura.com"></figure>
</div>

Note:
Ask for sources (gemma3, no tools). It now says the towers are historic *water tanks* -- wrong -- and backs it with three specific, official-looking URLs. The fish can't check them; it has no tools. It produced what sources look like.

Here's where it gets dangerous: the appearance of sourcing manufactures unearned trust. Most people won't click.

---

# 3. "...with verified sources"

<div class="shots tall">
<figure><img src="illustrations/citations-ladder--verified-facts-sources-haiku4.png" alt="A model with web search gives accurate details (165-foot towers bought in 1894, 15 still operating) with three real sources and notes on a minor discrepancy between them"></figure>
</div>

Note:
Now a fish with a tool (Haiku, with web search), asked to verify. Accurate details -- 165 feet, bought in 1894, 15 still standing -- three real sources, and it even reports where the sources disagree.

The difference isn't asking more nicely. It's touching the territory: the fish used a tool and checked.

Demo: three rungs, pre-captured. Opens the "tools change what the fish can know" thread.

---

# The notepad

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
<li>Prefers metric units</li>
<li class="bad">Has led large engineering teams</li>
<li>Lives in Austin</li>
</ul>
</div>
<p class="scene-caption">The fish writes these notes about you. Are they accurate?</p>
<p class="scene-caption"><span class="term">memory</span></p>
</div>
</div>

Note:
Goldfish have a famous three-second memory -- and so does ours: every new chat is a fresh bowl. Unless you give it a notepad. The fish writes notes about you, and they're poured into the water at the start of every conversation. Unlike the sticky notes on the glass (station 6), which you or the maker write, the fish writes these itself -- and you may not know what's in them.

Term: memory. New limit: it may store things you never meant to persist.

(Click.) The resume story (personal; tell it as one): I was drafting resume bullets -- stretching things the way you do on a resume -- and it saved those as facts about my experience. Weeks later it was citing them back to me as things I could do. (Mock entries are illustrative; swap in the real one.)

Memory audit: go look at what it has stored about you. Delete what shouldn't be there.

Sets up the sleeper attack (station 9). Bridge out: "Now it can read and remember. Can it *do* anything?"
