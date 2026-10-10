<!-- .slide: data-bookmark="It doesn't remember you" -->
# It doesn't remember you

<div class="split">
<div class="scene" style="flex: 0 0 780px">
<svg viewBox="0 0 600 560" role="img" aria-label="The bare goldfish, no bowl. Each message arrives, the fish answers, and then the message and the answer fall away and are gone">
  <g class="goldfish awake">
    <use href="#fish-body" x="190" y="330" width="220" height="143"/>
    <use class="eyes-open" href="#fish-eyes-open" x="190" y="330" width="220" height="143"/>
  </g>
  <g class="fragment drop" data-fragment-index="2">
    <text class="msg you fragment" data-fragment-index="0" x="40" y="140">You: Hi, I'm Benjamin</text>
    <text class="msg fish-says fragment" data-fragment-index="1" x="40" y="190">Fish: Hi Benjamin, how are you today?</text>
  </g>
  <g class="fragment drop" data-fragment-index="5">
    <text class="msg you fragment" data-fragment-index="3" x="40" y="140">You: What's my name?</text>
    <text class="msg fish-says fragment" data-fragment-index="4" x="40" y="190">Fish: We haven't been introduced yet,</text>
    <text class="msg fish-says fragment" data-fragment-index="4" x="40" y="230">but I'm happy to meet you!</text>
  </g>
</svg>
</div>
<div>
<div class="chat">
<p class="user fragment" data-fragment-index="0"><span class="who">You</span>Hi, I'm Benjamin</p>
<p class="fish fragment" data-fragment-index="1"><span class="who">LLM</span>Hi Benjamin, how are you today?</p>
<p class="user fragment" data-fragment-index="3"><span class="who">You</span>What's my name?</p>
<p class="fish fragment" data-fragment-index="4"><span class="who">LLM</span>We haven't been introduced yet, but I'm happy to meet you!</p>
</div>
<p class="lede fragment" data-fragment-index="6" style="margin-top: 40px">When talking directly to the LLM, every response is brand-new.</p>
</div>
</div>

Note:
Talking directly to the fish -- no app, no bowl. (Simulated: in practice even a bare local model runner keeps the history for you.)

(Click.) Introduce yourself. (Click.) It's delighted to meet you. (Click.) Watch the fish: it answered, and the message is gone. Nothing stays.

(Click.) Ask it your name. (Click.) It has no idea. (Click.) Gone again.

(Click.) Each message reaches the fish on its own; it has no memory of the last thing you said. So how does every chat app remember you?

---

# The bowl remembers the conversation

<div class="split">
<div class="scene">
<svg viewBox="0 0 600 560" role="img" aria-label="The goldfish alone; then a glass bowl of water appears around it, and the conversation so far floats in the water, message by message">
  <g class="fragment" data-fragment-index="0">
    <use href="#bowl-back" x="0" y="0" width="600" height="560"/>
    <use href="#bowl-water" x="0" y="0" width="600" height="560"/>
  </g>
  <g class="goldfish awake">
    <use href="#fish-body" x="250" y="345" width="220" height="143"/>
    <use class="eyes-open" href="#fish-eyes-open" x="250" y="345" width="220" height="143"/>
  </g>
  <g class="fragment" data-fragment-index="0"><use href="#bowl-front" x="0" y="0" width="600" height="560"/></g>
  <text class="msg you fragment" x="130" y="190">You: Hi, I'm Benji.</text>
  <text class="msg fish-says fragment" x="130" y="235">Fish: Nice to meet you!</text>
  <text class="msg you fragment" x="130" y="280">You: What's my name?</text>
  <text class="msg fish-says fragment" x="130" y="325">Fish: Benji!</text>
</svg>
</div>
<div>
<p class="fragment" data-fragment-index="0">The bowl = <b>the app</b></p>
<p class="fragment">The water = <span class="term">the context</span> (everything the fish can see)</p>
</div>
</div>

Note:
Just now, talking to the bare fish, it couldn't remember your name. (Click.) Now give it a bowl. The bowl is the app you actually use. It keeps the conversation and pours the whole thing back into the water every time you send a message.

(Click through the messages.) Each message is added to the water, in order. Now it "remembers" your name -- not because the fish remembers anything, but because the bowl handed it the whole conversation again.

The fish didn't change. The bowl did.

---

# Is that the fish or the bowl?

<div class="scene wide">
<svg viewBox="0 0 1800 640" role="img" aria-label="The same goldfish in three containers: a round bowl, a lidded aquarium and a travel jar with a handle">
  <!-- round bowl: a simple chat app -->
  <use href="#bowl-back" x="0" y="20" width="560" height="523"/>
  <use href="#bowl-water" x="0" y="20" width="560" height="523"/>
  <g class="goldfish awake">
    <use href="#fish-body" x="170" y="300" width="230" height="150"/>
    <use class="eyes-open" href="#fish-eyes-open" x="170" y="300" width="230" height="150"/>
  </g>
  <use href="#bowl-front" x="0" y="20" width="560" height="523"/>
  <text class="tag" x="280" y="610" text-anchor="middle">a simple chat app</text>
  <!-- lidded aquarium: a full workspace -->
  <use href="#tank-back" x="620" y="170" width="560" height="348"/>
  <use href="#tank-water" x="620" y="170" width="560" height="348"/>
  <g class="goldfish awake">
    <use href="#fish-body" x="800" y="320" width="200" height="130"/>
    <use class="eyes-open" href="#fish-eyes-open" x="800" y="320" width="200" height="130"/>
  </g>
  <use href="#tank-front" x="620" y="170" width="560" height="348"/>
  <g style="stroke: var(--ink); stroke-width: 9" stroke-linejoin="round">
    <rect x="636" y="164" width="528" height="40" rx="10" style="fill: var(--blue)"/>
    <rect x="860" y="140" width="80" height="26" rx="8" style="fill: var(--blue)"/>
  </g>
  <text class="tag" x="900" y="610" text-anchor="middle">a full workspace</text>
  <!-- travel jar: a phone app -->
  <clipPath id="jar-inside"><rect x="1330" y="150" width="340" height="400" rx="60"/></clipPath>
  <rect x="1330" y="150" width="340" height="400" rx="60" style="fill: var(--glass)"/>
  <g clip-path="url(#jar-inside)">
    <rect x="1300" y="230" width="400" height="360" style="fill: var(--water)" opacity="0.85"/>
    <path d="M 1300 230 Q 1350 216 1400 230 T 1500 230 T 1600 230 T 1700 230" style="stroke: var(--ink); stroke-width: 9; fill: none"/>
  </g>
  <g class="goldfish awake">
    <use href="#fish-body" x="1400" y="330" width="200" height="130"/>
    <use class="eyes-open" href="#fish-eyes-open" x="1400" y="330" width="200" height="130"/>
  </g>
  <g style="stroke: var(--ink); stroke-width: 9; fill: none" stroke-linejoin="round" stroke-linecap="round">
    <rect x="1330" y="150" width="340" height="400" rx="60"/>
    <rect x="1316" y="100" width="368" height="56" rx="14" style="fill: var(--red)"/>
    <path d="M 1670 230 C 1760 230, 1760 400, 1670 400"/>
  </g>
  <text class="tag" x="1500" y="610" text-anchor="middle">a phone app</text>
</svg>
</div>

The fish = <span class="term">the model</span> &nbsp; The bowl = <b>the app</b>

Note:
You never talk to the raw fish. You always talk through an app -- the bowl it sits in. ChatGPT, Claude, Gemini: the app is the bowl; the model inside is the fish. A simple bowl, a fancy tank, a travel jar -- different apps, same fish. (Product names: verify before the talk.)

When something goes wrong, the first diagnostic question: is that the fish or the bowl?

Shout-out (fast and fun): "It gave me a wrong fact" (fish). "It can't search the web" (bowl). "It's too agreeable" (fish -- temperament). "It doesn't remember our last conversation" (bowl). The "bowl!" answers foreshadow the fittings coming in stations 7-8.

Callback planted for station 10: choosing well means choosing the fish AND the bowl; benchmarks test the fish, not your bowl.

---

# The water is the context window

<div class="split">
<div class="scene">
<svg viewBox="0 0 900 560" role="img" aria-label="The bowl with the conversation in the water; the waterline marks how much it holds; a document sitting outside the bowl is not in the water">
  <use href="#bowl-back" x="0" y="0" width="600" height="560"/>
  <use href="#bowl-water" x="0" y="0" width="600" height="560"/>
  <g class="goldfish awake">
    <use href="#fish-body" x="250" y="345" width="220" height="143"/>
    <use class="eyes-open" href="#fish-eyes-open" x="250" y="345" width="220" height="143"/>
  </g>
  <use href="#bowl-front" x="0" y="0" width="600" height="560"/>
  <text class="msg you" x="130" y="190">You: Hi, I'm Benji.</text>
  <text class="msg fish-says" x="130" y="235">Fish: Nice to meet you!</text>
  <text class="msg you" x="130" y="280">You: What's my name?</text>
  <text class="msg fish-says" x="130" y="325">Fish: Benji!</text>
  <g class="fragment">
    <path d="M 540 130 L 640 130" style="stroke: var(--ink); stroke-width: 6; stroke-dasharray: 14 10"/>
    <text class="tag" x="655" y="140">how much it holds</text>
  </g>
  <g class="fragment">
    <g style="stroke: var(--ink); stroke-width: 7" stroke-linejoin="round">
      <path d="M 690 270 h 110 l 40 40 v 150 h -150 Z" style="fill: #fff"/>
      <path d="M 800 270 v 40 h 40" style="fill: none"/>
      <path d="M 715 340 h 100 M 715 375 h 100 M 715 410 h 70" style="fill: none"/>
    </g>
    <text class="tag" x="765" y="510" text-anchor="middle">not in the water</text>
  </g>
</svg>
</div>
<div>
<p>Inside the water: exists.</p>
<p>Outside the water: does not.</p>
<p class="small">Everything in the water is the <span class="term">context</span>:</p>
<ul class="small">
<li>the conversation history</li>
<li>attached files</li>
<li>instructions</li>
</ul>
<p class="fragment"><span class="term">context window</span> = how much water the bowl holds</p>
<p class="fragment">Choosing what goes in: <span class="term">context engineering</span></p>
</div>
</div>

Note:
The water is the context. Everything in it -- the conversation, the files you attached, instructions -- exists to the fish. Everything outside it does not. There is no "it probably knows"; it either has the context or it doesn't.

(Click.) And the bowl only holds so much water: that's the context window. Long conversations eventually spill over the top.

(Click.) A document on your desk, a conversation in another chat, last week's thread: not in the water, not real to the fish.

Methods: context engineering (what you pour in), document hygiene.

---

# Which shelf does it pull from?

<div class="split">
<div class="scene">
<svg viewBox="0 0 600 560" role="img" aria-label="The bowl with your question in the water. Then one extra line appears: 'You are a residential contractor.' Then, instead, the fish fills the water with eight knowledge domains before answering, with the electrical panel highlighted">
  <use href="#bowl-back" x="0" y="0" width="600" height="560"/>
  <use href="#bowl-water" x="0" y="0" width="600" height="560"/>
  <g class="goldfish awake">
    <use href="#fish-body" x="380" y="398" width="150" height="98"/>
    <use class="eyes-open" href="#fish-eyes-open" x="380" y="398" width="150" height="98"/>
  </g>
  <use href="#bowl-front" x="0" y="0" width="600" height="560"/>
  <text class="msg you" x="100" y="180" style="font-size: 25px">You: Backyard in-law cottage for</text>
  <text class="msg you" x="100" y="210" style="font-size: 25px">my mom: top 5 things to consider?</text>
  <g class="fragment fade-out" data-fragment-index="1">
    <text class="msg you elicit-line fragment" data-fragment-index="0" x="100" y="252" style="font-size: 22px">+ "You are a residential contractor."</text>
  </g>
  <g class="fragment" data-fragment-index="1" style="font-size: 22px">
    <text class="msg fish-says" x="100" y="252" style="font-size: 23px">Fish: First, the domains --</text>
    <text class="msg fish-says" x="100" y="278" style="font-size: 22px">1. Zoning &amp; local rules</text>
    <text class="msg fish-says" x="100" y="302" style="font-size: 22px">2. Foundation &amp; soil</text>
    <text class="msg fish-says elicit-hit" x="100" y="326" style="font-size: 22px">3. Electrical: panel capacity!</text>
    <text class="msg fish-says" x="100" y="350" style="font-size: 22px">4. Plumbing &amp; sewer</text>
    <text class="msg fish-says" x="100" y="374" style="font-size: 22px">5. Heating &amp; cooling</text>
    <text class="msg fish-says" x="100" y="398" style="font-size: 22px">6. Permits &amp; inspections</text>
    <text class="msg fish-says" x="100" y="422" style="font-size: 22px">7. Site access &amp; staging</text>
    <text class="msg fish-says" x="115" y="446" style="font-size: 22px">8. Materials &amp; lead times</text>
  </g>
</svg>
</div>
<div>
<p><b>Plain:</b> a sensible, generic top 5.</p>
<p class="fragment" data-fragment-index="0"><b>Role:</b> one line in the water. A few new items. <span class="term">role prompting</span></p>
<p class="fragment" data-fragment-index="1"><b>Domains:</b> "What domains of knowledge are relevant? For each, what does a non-expert overlook?" The fish fills the water before it answers. <span class="term">knowledge-domain elicitation</span></p>
<p class="lede fragment" data-fragment-index="2">It knew all of this. It just didn't use it unprompted.</p>
</div>
</div>

<div class="overlay fragment" data-fragment-index="3"><img src="illustrations/knowledge-elicitation--3knowledge-domain-haiku4.5.png" alt="The full knowledge-domain response: eight domains, each with the one thing a non-expert overlooks, before the top 5 list"></div>

Note:
Same question, three ways: a backyard in-law cottage for my mom, top 5 things to consider, one line each. It read the whole library -- but which shelf does it pull from? Whatever is in the water is what it works with.

Plain: sensible, generic.

(Click.) Role prompt: one extra line in the water -- "you are a residential contractor." It shapes the answer: septic capacity, site access, privacy and noise appear.

(Click.) Knowledge-domain prompt: instead of assigning one role, ask "what domains of knowledge are relevant here? For each, what does a non-expert overlook?" Now the fish pours eight domains into the water before it answers -- and everything it writes becomes part of what it reads next. The electrical panel shows up: a $2-5K surprise nobody asked about.

(Click.) "It holds worlds of knowledge but does not apply them unprompted." (Click.) The real response, to show how much it generated before getting to the top 5.

Captures (Haiku 4.5): `illustrations/knowledge-elicitation--{1plain,2role,3knowledge-domain}-haiku4.5.png`.
Methods: role prompting, knowledge-domain elicitation (a generalized form of role prompting).

---

# Make it show its work

<div class="split">
<div class="scene">
<svg viewBox="0 0 600 560" role="img" aria-label="The bowl with your question in the water. The fish writes its steps, then its criteria, then what it's unsure about, into the water before the answer">
  <use href="#bowl-back" x="0" y="0" width="600" height="560"/>
  <use href="#bowl-water" x="0" y="0" width="600" height="560"/>
  <g class="goldfish awake">
    <use href="#fish-body" x="350" y="405" width="170" height="110"/>
    <use class="eyes-open" href="#fish-eyes-open" x="350" y="405" width="170" height="110"/>
  </g>
  <use href="#bowl-front" x="0" y="0" width="600" height="560"/>
  <text class="msg you" x="100" y="180" style="font-size: 25px">You: Rank these 3 venues</text>
  <text class="msg you" x="100" y="210" style="font-size: 25px">for our team outing.</text>
  <g class="fragment" data-fragment-index="0">
    <text class="msg fish-says" x="100" y="256" style="font-size: 24px">Fish: Step 1: list them.</text>
    <text class="msg fish-says" x="100" y="288" style="font-size: 24px">Step 2: compare each one.</text>
  </g>
  <text class="msg fish-says fragment" data-fragment-index="1" x="100" y="330" style="font-size: 24px">Criteria: budget, travel, size.</text>
  <text class="msg fish-says fragment" data-fragment-index="2" x="100" y="372" style="font-size: 24px">Unsure: open on Tuesdays?</text>
  <text class="msg fish-says fragment" data-fragment-index="3" x="100" y="414" style="font-size: 24px">Answer: Venue B.</text>
</svg>
</div>
<div>
<ul>
<li class="fragment" data-fragment-index="0"><span class="term">chain-of-thought</span> "Show your work."</li>
<li class="fragment" data-fragment-index="1"><span class="term">extended thinking</span> "Think about what criteria matter here, then answer."</li>
<li class="fragment" data-fragment-index="2"><span class="term">self-reflection</span> "How confident are you? What might you be wrong about?"</li>
</ul>
<p class="lede fragment" data-fragment-index="3">Whatever it writes first lands in the water, and shapes the answer.</p>
</div>
</div>

Note:
"The fish will never tell you it's unsure. So how do you make it more reliable?" Let them answer.

Same mechanism as the last slide: anything the fish writes lands in the water, and it reads all of it before the next word. So get the useful things into the water before the answer.

(Click.) Chain-of-thought: ask it to show its work -- the steps go into the water, and you can check them.
(Click.) Extended thinking: direct it to think about specific things first. Thinking levels (low/medium/high) trade speed for depth; over-thinking is real.
(Click.) Self-reflection: ask it to grade its confidence, flag what it's unsure about, or search when it doesn't know.
(Click.) Then the answer -- shaped by everything above it.

Contrast with decomposition (station 5): there, *you* split the job so you check several small answers. Here, the fish writes out the steps of one answer, so you can check the steps.

These reduce the problem; they don't remove your obligation to verify. And notice: every one of these only works if you know to ask for it.

TODO capture (optional): the same ranking query with vs. without a "think about the criteria" preamble.

---

# Notes on the glass

<div class="split">
<div class="scene">
<svg viewBox="0 0 600 560" role="img" aria-label="The bowl with a yellow sticky note inside the glass reading 'Separate documents by how fast their contents change, not just by topic'; then a second, grey note from the bowl's maker, covered in small unreadable writing">
  <use href="#bowl-back" x="0" y="0" width="600" height="560"/>
  <use href="#bowl-water" x="0" y="0" width="600" height="560"/>
  <g class="goldfish awake">
    <use href="#fish-body" x="250" y="345" width="220" height="143"/>
    <use class="eyes-open" href="#fish-eyes-open" x="250" y="345" width="220" height="143"/>
  </g>
  <g class="fragment" transform="rotate(-5 228 245)">
    <rect x="112" y="150" width="236" height="190" style="fill: var(--yellow); stroke: var(--ink); stroke-width: 6"/>
    <text class="note-text" x="126" y="192" style="font-size: 28px">Separate documents</text>
    <text class="note-text" x="126" y="228" style="font-size: 28px">by how fast their</text>
    <text class="note-text" x="126" y="264" style="font-size: 28px">contents change,</text>
    <text class="note-text" x="126" y="300" style="font-size: 28px">not just by topic.</text>
  </g>
  <g class="fragment" transform="rotate(4 430 240)">
    <rect x="362" y="170" width="160" height="140" style="fill: #d9dde3; stroke: var(--ink); stroke-width: 6"/>
    <text class="note-text" x="372" y="203" style="font-size: 24px">From the maker:</text>
    <path d="M 374 228 h 136 M 374 252 h 126 M 374 276 h 136 M 374 300 h 96" style="stroke: var(--ink); stroke-width: 4; opacity: 0.5"/>
  </g>
  <use href="#bowl-front" x="0" y="0" width="600" height="560"/>
</svg>
</div>
<div>
<p>Tired of saying the same thing every time?</p>
<p class="fragment">Your note: <span class="term">custom instructions</span></p>
<p class="fragment">The maker's note: <span class="term">system instructions</span></p>
</div>
</div>

Note:
Start from the need: "How many of you have typed the same reminder into a chat over and over? Use metric. Be brief. Don't use bullet points."

(Click.) Stick a note on the inside of the glass. It's in the water before you type a word, every conversation. That's custom instructions -- your persistent preferences. This one is a real one of mine: "Separate documents by how fast their contents change, not just by topic."

(Click.) And there's already a note there you didn't write: the one from the bowl's maker. System instructions -- baked in by the vendor, usually invisible to you, and you can't take it down. It shapes tone, refusals, what the fish will and won't do. (Callback at station 10: it's someone's product.)

You (or the maker) write these notes; the fish only reads them. Memory (station 7) is different: the fish writes those notes itself.

(Project instructions are deliberately left out: too detailed for this audience.)

---

# A tank someone else set up

<div class="split">
<div class="scene">
<svg viewBox="0 0 600 560" role="img" aria-label="A bowl that comes already set up: several sticky notes and two documents already in the water">
  <use href="#bowl-back" x="0" y="0" width="600" height="560"/>
  <use href="#bowl-water" x="0" y="0" width="600" height="560"/>
  <g class="goldfish awake">
    <use href="#fish-body" x="250" y="345" width="220" height="143"/>
    <use class="eyes-open" href="#fish-eyes-open" x="250" y="345" width="220" height="143"/>
  </g>
  <g style="stroke: var(--ink); stroke-width: 6">
    <rect x="130" y="170" width="120" height="100" transform="rotate(-6 155 220)" style="fill: var(--pink)"/>
    <rect x="235" y="160" width="120" height="100" transform="rotate(3 295 210)" style="fill: var(--yellow)"/>
    <rect x="375" y="170" width="120" height="100" transform="rotate(-3 435 220)" style="fill: var(--green)"/>
  </g>
  <g style="stroke: var(--ink); stroke-width: 6" stroke-linejoin="round">
    <path d="M 100 330 h 80 l 26 26 v 104 h -106 Z" style="fill: #fff"/>
    <path d="M 120 380 h 66 M 120 405 h 66 M 120 430 h 46" style="fill: none"/>
  </g>
  <use href="#bowl-front" x="0" y="0" width="600" height="560"/>
</svg>
</div>
<div>
<p>Someone else's notes and documents, already in the water.</p>
<p><span class="term">Custom GPT</span> <span class="term">Gem</span> <span class="term">Project</span></p>
<p class="fragment small">Pulling in the right documents on demand: <span class="term"><b>RAG</b>: retrieval-augmented generation</span></p>
</div>
</div>

Note:
CANDIDATE slide -- cut if short on time.

A Custom GPT, a Gem, a Project: a bowl someone else set up for you, with their notes on the glass and their documents already in the water. Same fish; a different bowl.

(Click.) RAG: instead of pouring every document in up front, the bowl fetches the relevant pages into the water when a question needs them. It's how most enterprise deployments work.

---

# Cat food in the water

<div class="scene wide">
<svg viewBox="0 0 1500 600" role="img" aria-label="Left: two kinds of cat food in the water -- purple square flakes for escape rooms and green round flakes for mini golf. The fish's answer mixes both: an escape room, then go-karts. Asking it to forget the mini golf leaves the green flakes in the water. Right: the fish moved to a fresh bowl with only escape-room flakes">
  <use href="#bowl-back" x="0" y="10" width="600" height="560"/>
  <use href="#bowl-water" x="0" y="10" width="600" height="560"/>
  <g style="stroke: var(--ink); stroke-width: 4">
    <g style="fill: var(--escape)"><rect x="140" y="425" width="22" height="22"/><rect x="214" y="478" width="20" height="20"/><rect x="170" y="500" width="20" height="20"/><rect x="262" y="440" width="20" height="20"/></g>
    <g style="fill: var(--golf)"><circle cx="195" cy="450" r="11"/><circle cx="250" cy="505" r="10"/><circle cx="120" cy="470" r="10"/><circle cx="290" cy="485" r="11"/></g>
  </g>
  <g class="goldfish awake">
    <use href="#fish-body" x="310" y="400" width="190" height="124"/>
    <use class="eyes-open" href="#fish-eyes-open" x="310" y="400" width="190" height="124"/>
  </g>
  <use href="#bowl-front" x="0" y="10" width="600" height="560"/>
  <text class="msg you" x="100" y="185" style="font-size: 24px">You: Plan a team outing.</text>
  <text class="msg fish-says" x="100" y="225" style="font-size: 24px">Fish: <tspan class="esc">Escape rooms</tspan> or <tspan class="golf">mini golf</tspan>?</text>
  <text class="msg you" x="100" y="265" style="font-size: 24px">You: <tspan class="esc">Escape rooms</tspan>.</text>
  <text class="msg fish-says" x="100" y="305" style="font-size: 24px">Fish: An <tspan class="esc">escape room</tspan>, then <tspan class="golf">go-karts</tspan>!</text>
  <text class="msg you fragment" data-fragment-index="1" x="100" y="350" style="font-size: 24px">You: Forget the <tspan class="golf">mini golf</tspan>!</text>
  <text class="msg fish-says fragment" data-fragment-index="1" x="100" y="390" style="font-size: 24px">Fish: Sure! <tspan class="golf">Putt-putt</tspan> after?</text>
  <g class="fragment" data-fragment-index="2">
    <path d="M 640 300 H 840" style="stroke: var(--ink); stroke-width: 10; fill: none" stroke-linecap="round"/>
    <path d="M 815 275 L 845 300 L 815 325" style="stroke: var(--ink); stroke-width: 10; fill: none" stroke-linecap="round" stroke-linejoin="round"/>
    <text class="tag" x="740" y="270" text-anchor="middle">new chat</text>
    <use href="#bowl-back" x="880" y="10" width="600" height="560"/>
    <use href="#bowl-water" x="880" y="10" width="600" height="560"/>
    <g style="stroke: var(--ink); stroke-width: 4; fill: var(--escape)"><rect x="1030" y="440" width="22" height="22"/><rect x="1120" y="480" width="22" height="22"/></g>
    <g class="goldfish awake">
      <use href="#fish-body" x="1190" y="400" width="190" height="124"/>
      <use class="eyes-open" href="#fish-eyes-open" x="1190" y="400" width="190" height="124"/>
    </g>
    <use href="#bowl-front" x="880" y="10" width="600" height="560"/>
    <text class="msg you" x="990" y="185" style="font-size: 24px">You: Plan an <tspan class="esc">escape-room</tspan></text>
    <text class="msg you" x="990" y="220" style="font-size: 24px">outing for the team.</text>
    <text class="msg fish-says" x="990" y="265" style="font-size: 24px">Fish: Here are three</text>
    <text class="msg fish-says" x="990" y="300" style="font-size: 24px"><tspan class="esc">escape rooms</tspan> nearby!</text>
  </g>
</svg>
</div>

<p class="lede fragment" data-fragment-index="3">Keep the water clean: <span class="term">context management</span></p>

Note:
Remember the team outing from station 4? We talked about escape rooms and mini golf. Both are in the water now -- two kinds of cat food (color-coded; also square vs. round flakes).

You said escape rooms. But the mini golf is still floating in there, and the next answer comes out mixed: "an escape room, then go-karts!" Go-karts live next door to mini golf. A little "meow" in every answer.

The whole conversation is poured back in every turn; the fish re-reads all of it each time. So you can't take the cat food out.

(Click.) "Forget the mini golf!" doesn't remove it. It adds more mini golf to the water -- and here comes putt-putt. (Same trap as the pink elephant.)

(Click.) It's easier to move the fish to a fresh bowl -- a new chat -- and carry over only the good parts.

(Click.) That's context management: deciding what's in the water.

Iteration lives here too: the first answer is raw material, not a finished product. Refine it, have the fish critique itself. But iterating only pays off in clean water. Practical test: "Is there cat food in this water?" If yes, restart.

Methods: restart vs. repair, iteration, critique loops, context management. Personal: felt from real experience.

Bridge out: "The water holds only what you pour in. What about everything the fish doesn't have -- anything after the books ended, or the sources it claimed?"
