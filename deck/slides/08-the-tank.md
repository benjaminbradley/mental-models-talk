# Counting letters: the fish writes a tool

<div class="shots">
<figure><img src="illustrations/jaggedness-B1-letters.png" alt="'How many S's are in Suffering Succotash?' The model answers 4, listing a fourth S that isn't there"><figcaption>Asked directly</figcaption></figure>
<figure class="fragment"><div class="placeholder">TODO: capture -- same question, "write a script to count them": the script and its output (3)</div><figcaption>"Write a script to count them"</figcaption></figure>
</div>

Note:
Remember the Counting region of the fish's map? "How many S's in Suffering Succotash?" It says 4, and helpfully shows its work -- including an S that isn't there. (There are 3.) Checking is trivial for you; the fish sees text in chunks, not letters.

(Click.) Instead of checking yourself, ask it to write a script that counts them. Now the fish reaches outside itself, runs a tool, and gets the right answer.

The tubes now carry actions out, not just information in. You just crossed from "a chatbot that says things" to "a system that does things."

Demo: pre-captured (or live; any outcome teaches). Method: code execution.

---

# The fish can act

<div class="split">
<div class="scene">
<svg viewBox="0 0 900 600" role="img" aria-label="The fish swims into a tube running out the side of the bowl to a key, an envelope and a document">
  <use href="#bowl-back" x="0" y="40" width="600" height="560"/>
  <use href="#bowl-water" x="0" y="40" width="600" height="560"/>
  <g style="fill: none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M 420 360 H 700 M 700 200 V 520 M 700 200 H 760 M 700 360 H 760 M 700 520 H 760" style="stroke: var(--ink); stroke-width: 48"/>
    <path d="M 420 360 H 700 M 700 200 V 520 M 700 200 H 760 M 700 360 H 760 M 700 520 H 760" style="stroke: var(--rock); stroke-width: 30"/>
  </g>
  <text class="icon" x="830" y="225" text-anchor="middle" style="font-size: 80px">🔑</text>
  <text class="icon" x="830" y="385" text-anchor="middle" style="font-size: 80px">✉️</text>
  <text class="icon" x="830" y="545" text-anchor="middle" style="font-size: 80px">📄</text>
  <g class="goldfish awake">
    <use href="#fish-body" x="190" y="285" width="250" height="163"/>
    <use class="eyes-open" href="#fish-eyes-open" x="190" y="285" width="250" height="163"/>
  </g>
  <use href="#bowl-front" x="0" y="40" width="600" height="560"/>
</svg>
</div>
<div>
<p>The operator to-do list:</p>
<ul class="checklist">
<li><span class="box"><span class="fragment">✓</span></span>Create the API key</li>
<li><span class="box"><span class="fragment">✓</span></span>Send the message</li>
<li><span class="box"><span class="fragment">✓</span></span>File the document</li>
</ul>
<p><span class="term">tool use</span> <span class="term">agent</span></p>
</div>
</div>

Note:
Tools let the fish act. This is where the spine claim from station 3 becomes literal: anything you can specify clearly enough, the system can now do.

(Click through.) Create the API key. Send the message. File the document. Things you used to do yourself, handed off item by item. That's the operator to-do list -- and it is powerful and dangerous for the same reason. Agency is the amplifier: everything good scales, and so does everything bad.

Spine payoff #2. Cognitive shift: "chatbot that says" -> "system that does." Methods: tool use, tool discovery.

---

# Two kinds of plumbing

<div class="scene wide">
<svg viewBox="0 0 1800 680" role="img" aria-label="Top row: three tanks, each with a differently shaped socket (star, triangle, square) that only its own tube fits. Bottom row: the same three tanks, all with the same standard hose coupling, and one hose fits them all">
  <!-- row 1: proprietary -->
  <g>
    <use href="#tank-back" x="40" y="90" width="360" height="224"/><use href="#tank-water" x="40" y="90" width="360" height="224"/>
    <g class="goldfish awake"><use href="#fish-body" x="150" y="180" width="130" height="85"/><use class="eyes-open" href="#fish-eyes-open" x="150" y="180" width="130" height="85"/></g>
    <use href="#tank-front" x="40" y="90" width="360" height="224"/>
    <use href="#tank-back" x="480" y="90" width="360" height="224"/><use href="#tank-water" x="480" y="90" width="360" height="224"/>
    <g class="goldfish awake"><use href="#fish-body" x="590" y="180" width="130" height="85"/><use class="eyes-open" href="#fish-eyes-open" x="590" y="180" width="130" height="85"/></g>
    <use href="#tank-front" x="480" y="90" width="360" height="224"/>
    <use href="#tank-back" x="920" y="90" width="360" height="224"/><use href="#tank-water" x="920" y="90" width="360" height="224"/>
    <g class="goldfish awake"><use href="#fish-body" x="1030" y="180" width="130" height="85"/><use class="eyes-open" href="#fish-eyes-open" x="1030" y="180" width="130" height="85"/></g>
    <use href="#tank-front" x="920" y="90" width="360" height="224"/>
    <g style="fill: none" stroke-linecap="round"><path d="M 220 0 V 50 M 660 0 V 50 M 1100 0 V 50" style="stroke: var(--ink); stroke-width: 34"/><path d="M 220 0 V 50 M 660 0 V 50 M 1100 0 V 50" style="stroke: var(--rock); stroke-width: 20"/></g>
    <g style="stroke: var(--ink); stroke-width: 7" stroke-linejoin="round">
      <path d="M 220 52 l 9 20 h 22 l -18 13 l 7 21 l -20 -13 l -20 13 l 7 -21 l -18 -13 h 22 Z" style="fill: var(--red)"/>
      <path d="M 660 50 l 28 50 h -56 Z" style="fill: var(--yellow)"/>
      <rect x="1076" y="52" width="48" height="48" style="fill: var(--purple)"/>
    </g>
  </g>
  <text class="tag" x="1340" y="190">Proprietary: one vendor's</text>
  <text class="tag" x="1340" y="230">tank only</text>
  <!-- row 2: MCP -->
  <g class="fragment">
    <use href="#tank-back" x="40" y="430" width="360" height="224"/><use href="#tank-water" x="40" y="430" width="360" height="224"/>
    <g class="goldfish awake"><use href="#fish-body" x="150" y="520" width="130" height="85"/><use class="eyes-open" href="#fish-eyes-open" x="150" y="520" width="130" height="85"/></g>
    <use href="#tank-front" x="40" y="430" width="360" height="224"/>
    <use href="#tank-back" x="480" y="430" width="360" height="224"/><use href="#tank-water" x="480" y="430" width="360" height="224"/>
    <g class="goldfish awake"><use href="#fish-body" x="590" y="520" width="130" height="85"/><use class="eyes-open" href="#fish-eyes-open" x="590" y="520" width="130" height="85"/></g>
    <use href="#tank-front" x="480" y="430" width="360" height="224"/>
    <use href="#tank-back" x="920" y="430" width="360" height="224"/><use href="#tank-water" x="920" y="430" width="360" height="224"/>
    <g class="goldfish awake"><use href="#fish-body" x="1030" y="520" width="130" height="85"/><use class="eyes-open" href="#fish-eyes-open" x="1030" y="520" width="130" height="85"/></g>
    <use href="#tank-front" x="920" y="430" width="360" height="224"/>
    <g style="fill: none" stroke-linecap="round"><path d="M 220 350 V 390 M 660 350 V 390 M 1100 350 V 390" style="stroke: var(--ink); stroke-width: 34"/><path d="M 220 350 V 390 M 660 350 V 390 M 1100 350 V 390" style="stroke: var(--green); stroke-width: 20"/></g>
    <g style="stroke: var(--ink); stroke-width: 7; fill: var(--yellow)" stroke-linejoin="round">
      <path d="M 196 390 h 48 l 12 20 l -12 20 h -48 l -12 -20 Z"/><path d="M 636 390 h 48 l 12 20 l -12 20 h -48 l -12 -20 Z"/><path d="M 1076 390 h 48 l 12 20 l -12 20 h -48 l -12 -20 Z"/>
    </g>
    <text class="tag" x="1340" y="530">MCP: one standard</text>
    <text class="tag" x="1340" y="570">fitting, any tank</text>
  </g>
</svg>
</div>

Note:
Two kinds of plumbing. Proprietary tools -- a vendor's built-in web search, its own integrations -- are custom-shaped fittings that only fit that vendor's tank.

(Click.) MCP, the Model Context Protocol, is a standard fitting -- think garden-hose thread, or the tagline people use: "USB-C for AI." Build the connector once, and it fits any compatible tank.

Tool discovery: the fish reads each tool's description to decide when and how to use it (station 7's training). That's why descriptions matter, and why a badly described tool misbehaves.

Keep it concise. Methods: MCP, provider tools, tool discovery.

---

# The fish sleeps; the tank doesn't have to

<div class="split">
<div class="scene">
<svg viewBox="0 0 900 600" role="img" aria-label="The tank with three attachments on its rim: a notepad, an alarm clock and a box of recipe cards">
  <use href="#tank-back" x="0" y="40" width="900" height="560"/>
  <use href="#tank-water" x="0" y="40" width="900" height="560"/>
  <g class="goldfish awake">
    <use href="#fish-body" x="330" y="300" width="280" height="182"/>
    <use class="eyes-open" href="#fish-eyes-open" x="330" y="300" width="280" height="182"/>
  </g>
  <use href="#tank-front" x="0" y="40" width="900" height="560"/>
  <g style="stroke: var(--ink); stroke-width: 9" stroke-linejoin="round">
    <rect x="110" y="20" width="170" height="150" rx="22" style="fill: #fff"/>
  </g>
  <text class="icon" x="195" y="125" text-anchor="middle" style="font-size: 90px">📝</text>
  <g class="fragment">
    <rect x="365" y="20" width="170" height="150" rx="22" style="fill: #fff; stroke: var(--ink); stroke-width: 9"/>
    <text class="icon" x="450" y="125" text-anchor="middle" style="font-size: 90px">⏰</text>
  </g>
  <g class="fragment">
    <rect x="620" y="20" width="170" height="150" rx="22" style="fill: #fff; stroke: var(--ink); stroke-width: 9"/>
    <text class="icon" x="705" y="125" text-anchor="middle" style="font-size: 90px">🗂️</text>
  </g>
</svg>
</div>
<div>
<p class="fragment">Alarm clock: <span class="term">scheduled tasks</span></p>
<p class="fragment">Recipe cards: <span class="term">skills</span></p>
</div>
</div>

Note:
The bowl is turning into a tank: everything clips onto it, and whatever it brings lands in the water. The notepad is already there.

(Click.) Remember: the fish sleeps until you talk to it. Unless the tank has an alarm clock -- scheduled tasks: daily briefings, monitoring, periodic reports. It works while you sleep.

(Click.) And if you're tired of re-specifying the same constraints every time (station 4) -- recipe cards. Skills: packaged instructions for recurring tasks, pulled into the water when the task comes up.

Brief. Methods: scheduled tasks, skills/playbooks.

---

# The tank

<div class="scene wide">
<svg viewBox="0 0 1500 700" role="img" aria-label="The fully fitted tank: the fish, the conversation in the water, notes on the glass, tubes out the top and side, and attachments on the rim; a microphone and a camera feed in through conversion boxes">
  <use href="#tank-back" x="430" y="110" width="900" height="560"/>
  <use href="#tank-water" x="430" y="110" width="900" height="560"/>
  <g style="fill: none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M 1245 300 V 40 H 1370 M 1240 480 H 1400" style="stroke: var(--ink); stroke-width: 44"/>
    <path d="M 1245 300 V 40 H 1370 M 1240 480 H 1400" style="stroke: var(--rock); stroke-width: 26"/>
  </g>
  <g style="stroke: var(--ink); stroke-width: 8">
    <circle cx="1425" cy="40" r="55" style="fill: var(--sky)"/>
    <path d="M 1370 40 H 1480 M 1425 -15 V 95 M 1425 -15 C 1390 10, 1390 70, 1425 95 M 1425 -15 C 1460 10, 1460 70, 1425 95" style="fill: none"/>
  </g>
  <text class="icon" x="1455" y="505" text-anchor="middle" style="font-size: 80px">✉️</text>
  <g style="stroke: var(--ink); stroke-width: 6">
    <rect x="520" y="270" width="120" height="100" transform="rotate(-5 580 320)" style="fill: var(--yellow)"/>
    <rect x="660" y="265" width="120" height="100" transform="rotate(4 720 315)" style="fill: #d9dde3"/>
  </g>
  <text class="msg you" x="830" y="300">You: Plan a team outing.</text>
  <text class="msg fish-says" x="830" y="345">Fish: Escape rooms!</text>
  <g class="goldfish awake">
    <use href="#fish-body" x="760" y="420" width="260" height="169"/>
    <use class="eyes-open" href="#fish-eyes-open" x="760" y="420" width="260" height="169"/>
  </g>
  <use href="#tank-front" x="430" y="110" width="900" height="560"/>
  <g style="stroke: var(--ink); stroke-width: 9; fill: #fff" stroke-linejoin="round">
    <rect x="520" y="60" width="130" height="110" rx="18"/>
    <rect x="680" y="60" width="130" height="110" rx="18"/>
    <rect x="840" y="60" width="130" height="110" rx="18"/>
  </g>
  <text class="icon" x="585" y="140" text-anchor="middle" style="font-size: 70px">📝</text>
  <text class="icon" x="745" y="140" text-anchor="middle" style="font-size: 70px">⏰</text>
  <text class="icon" x="905" y="140" text-anchor="middle" style="font-size: 70px">🗂️</text>
  <g class="fragment">
    <path d="M 140 300 H 490" style="stroke: var(--ink); stroke-width: 20" stroke-linecap="round"/>
    <text class="icon" x="70" y="325" text-anchor="middle" style="font-size: 90px">🎤</text>
    <rect x="170" y="250" width="290" height="100" rx="16" style="fill: #fff; stroke: var(--ink); stroke-width: 8"/>
    <text class="tag" x="315" y="290" text-anchor="middle" style="font-size: 26px">speech → text</text>
    <text class="tag" x="315" y="328" text-anchor="middle" style="font-size: 22px">(transcription)</text>
  </g>
  <g class="fragment">
    <path d="M 140 500 H 490" style="stroke: var(--ink); stroke-width: 20" stroke-linecap="round"/>
    <text class="icon" x="70" y="525" text-anchor="middle" style="font-size: 90px">📷</text>
    <rect x="170" y="450" width="290" height="100" rx="16" style="fill: #fff; stroke: var(--ink); stroke-width: 8"/>
    <text class="tag" x="315" y="490" text-anchor="middle" style="font-size: 26px">pixels → tokens</text>
    <text class="tag" x="315" y="528" text-anchor="middle" style="font-size: 22px">(encoder, not words)</text>
  </g>
</svg>
</div>

The fittings decide what the fish can reach. <!-- .element: class="fragment lede" -->

Note:
Pull back: the bowl has become a tank. Water: the context. Notes on the glass: instructions. Tubes: search, tools, connections to other services. The notepad: memory. The alarm clock. Recipe cards.

(Click.) A microphone: your voice goes through a converter into the water -- speech to text. (Some "native voice" modes skip that step and feed audio in directly.)

(Click.) A camera: photos and screenshots go through a converter too -- but in current models it doesn't turn them into words; an encoder turns pixels into the fish's own internal "language." (Older setups did caption the image into text first.)

(Click.) The fittings decide what the fish can reach. Big vendors sell a fish already installed in a tank, which is why people conflate them -- but they are separable.

A recap, not an introduction: everything except the mic and camera arrived on its own felt limit. Microphone is a candidate to cut. Bridge out: every fitting widens the blast radius (station 9).

TODO (art): tubes connecting at the back should show the interface the fish sees from inside the water.
