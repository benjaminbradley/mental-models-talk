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
<p class="fragment" data-fragment-index="0">The bowl = <span class="term">the client</span> (the app)</p>
<p class="fragment">The water = <span class="term">the context</span> (everything the fish can see)</p>
</div>
</div>

Note:
Callback to station 4: talking to the bare fish, it couldn't remember your name. (Click.) Now give it a bowl. The bowl is the app you actually use -- the client. It keeps the conversation and pours the whole thing back into the water every time you send a message.

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
    <rect x="636" y="132" width="528" height="40" rx="10" style="fill: var(--blue)"/>
    <rect x="860" y="108" width="80" height="26" rx="8" style="fill: var(--blue)"/>
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

The fish = <span class="term">the model</span> &nbsp; The bowl = <span class="term">the client</span>

Note:
You never talk to the raw fish. You always talk through a client -- the bowl it sits in. ChatGPT, Claude, Gemini: the app is the bowl; the model inside is the fish. A simple bowl, a fancy tank, a travel jar -- different clients, same fish. (Product names: verify before the talk.)

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
<p class="fragment"><span class="term">context window</span> = how much water the bowl holds</p>
</div>
</div>

Note:
The water is the context. Everything in it -- the conversation, the files you attached, instructions -- exists to the fish. Everything outside it does not. There is no "it probably knows"; it either has the context or it doesn't.

(Click.) And the bowl only holds so much water: that's the context window. Long conversations eventually spill over the top.

(Click.) A document on your desk, a conversation in another chat, last week's thread: not in the water, not real to the fish.

Methods: context engineering (what you pour in), document hygiene.

---

# Notes on the glass

<div class="split">
<div class="scene">
<svg viewBox="0 0 600 560" role="img" aria-label="The bowl with a yellow sticky note inside the glass reading 'Always use metric'; then a second, grey note from the bowl's maker, covered in small unreadable writing">
  <use href="#bowl-back" x="0" y="0" width="600" height="560"/>
  <use href="#bowl-water" x="0" y="0" width="600" height="560"/>
  <g class="goldfish awake">
    <use href="#fish-body" x="250" y="345" width="220" height="143"/>
    <use class="eyes-open" href="#fish-eyes-open" x="250" y="345" width="220" height="143"/>
  </g>
  <g class="fragment" transform="rotate(-5 170 230)">
    <rect x="130" y="165" width="170" height="140" style="fill: var(--yellow); stroke: var(--ink); stroke-width: 6"/>
    <text class="note-text" x="112" y="215" style="font-size: 34px">Always use</text>
    <text class="note-text" x="112" y="260" style="font-size: 34px">metric!</text>
  </g>
  <g class="fragment" transform="rotate(4 400 230)">
    <rect x="320" y="160" width="190" height="150" style="fill: #d9dde3; stroke: var(--ink); stroke-width: 6"/>
    <text class="note-text" x="335" y="195" style="font-size: 26px">From the maker:</text>
    <path d="M 335 220 h 160 M 335 245 h 150 M 335 270 h 160 M 335 295 h 110" style="stroke: var(--ink); stroke-width: 4; opacity: 0.5"/>
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

(Click.) Stick a note on the inside of the glass. It's in the water before you type a word, every conversation. That's custom instructions -- your persistent preferences.

(Click.) And there's already a note there you didn't write: the one from the bowl's maker. System instructions -- baked in by the vendor, usually invisible to you, and you can't take it down. It shapes tone, refusals, what the fish will and won't do. (Callback at station 10: it's someone's product.)

Memory (station 7) will turn out to be another kind of note.

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
<svg viewBox="0 0 1500 600" role="img" aria-label="Left: a bowl where cat food has gotten into the water; the fish's answers now include 'meow', and a note asking it to ignore the cat food doesn't remove the flakes. Right: the fish moved to a fresh bowl of clean water">
  <use href="#bowl-back" x="0" y="10" width="600" height="560"/>
  <use href="#bowl-water" x="0" y="10" width="600" height="560"/>
  <g style="fill: #8a5a2b; stroke: var(--ink); stroke-width: 4">
    <circle cx="150" cy="390" r="12"/><circle cx="210" cy="450" r="10"/><circle cx="510" cy="390" r="11"/><circle cx="160" cy="470" r="9"/><circle cx="230" cy="510" r="10"/><circle cx="300" cy="525" r="12"/>
  </g>
  <g class="goldfish awake">
    <use href="#fish-body" x="250" y="355" width="220" height="143"/>
    <use class="eyes-open" href="#fish-eyes-open" x="250" y="355" width="220" height="143"/>
  </g>
  <use href="#bowl-front" x="0" y="10" width="600" height="560"/>
  <text class="msg you" x="130" y="200">You: Plan a team outing.</text>
  <text class="msg fish-says" x="130" y="245">Fish: Escape rooms! Meow.</text>
  <text class="msg you fragment" data-fragment-index="1" x="130" y="290">You: Ignore the cat food!</text>
  <text class="msg fish-says fragment" data-fragment-index="1" x="130" y="335">Fish: Sure, meow.</text>
  <g class="fragment" data-fragment-index="2">
    <path d="M 640 300 H 840" style="stroke: var(--ink); stroke-width: 10; fill: none" stroke-linecap="round"/>
    <path d="M 815 275 L 845 300 L 815 325" style="stroke: var(--ink); stroke-width: 10; fill: none" stroke-linecap="round" stroke-linejoin="round"/>
    <text class="tag" x="740" y="270" text-anchor="middle">new chat</text>
    <use href="#bowl-back" x="880" y="10" width="600" height="560"/>
    <use href="#bowl-water" x="880" y="10" width="600" height="560"/>
    <g class="goldfish awake">
      <use href="#fish-body" x="1130" y="355" width="220" height="143"/>
      <use class="eyes-open" href="#fish-eyes-open" x="1130" y="355" width="220" height="143"/>
    </g>
    <use href="#bowl-front" x="880" y="10" width="600" height="560"/>
    <text class="msg you" x="1010" y="200">You: Plan a team outing.</text>
    <text class="msg fish-says" x="1010" y="245">Fish: Escape rooms!</text>
  </g>
</svg>
</div>

Note:
Something got into the water that doesn't belong -- call it cat food. A wrong assumption, an off-topic tangent, the wrong document pasted in. Now every answer comes out with a little "meow" in it.

The whole conversation is poured back in every turn; the fish re-reads all of it each time. So you can't take the cat food out.

(Click.) "Ignore the cat food!" doesn't remove it. It just adds more words about cat food to the water. (Same trap as the pink elephant.)

(Click.) It's easier to move the fish to a fresh bowl -- a new chat -- and carry over only the good parts.

Iteration lives here too: the first answer is raw material, not a finished product. Refine it, have the fish critique itself. But iterating only pays off in clean water. Practical test: "Is there cat food in this water?" If yes, restart.

Methods: restart vs. repair, iteration, critique loops. Personal: felt from real experience.

Bridge out: "The water holds only what you pour in. What about everything the fish doesn't have -- anything after the books ended, or the sources it claimed?"
