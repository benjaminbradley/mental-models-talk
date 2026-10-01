# Who learns whose language?

<div class="lang-row">
<span class="emoji">🧑</span><span class="bubble binary">01001000 01101001</span><span class="arrow">→</span><span class="emoji">💻</span>
<span class="what"><b>Then:</b> people learned computer language.<br>Strict. Only about numbers.</span>
</div>
<div class="lang-row fragment">
<span class="emoji">💻</span><span class="bubble emoji">💡 ⚖️ 🧠 ❤️</span><span class="arrow">→</span><span class="emoji">🧑</span>
<span class="what"><b>Now:</b> computers learned people language.<br>Loose. About ideas, philosophy, feelings.</span>
</div>

Note:
For most of computing history, if you wanted to talk to a computer, *you* learned *its* language. Programming languages are strict: one character wrong and nothing works. And they only talk about numbers. (The bubble says "Hi" in binary.)

(Click.) Now it's reversed: the computer learned *our* language. Human language is loose and ambiguous -- and it can carry ideas, philosophy, psychology. That's the shift.

---

# Computers can speak our language

<div class="shots">
<figure><div class="placeholder">TODO: "then" -- a computer's bad poetry, ~2020 or earlier (see todo.md)</div><figcaption>Then</figcaption></figure>
<figure class="fragment"><div class="placeholder">TODO: "now" -- the poem from reddit.com/r/ClaudeAI/comments/1gn4u8y, with 😢 and a link to the published comment</div><figcaption><a href="https://www.reddit.com/r/ClaudeAI/comments/1gn4u8y/i_hade_a_nice_night_with_claude_and_asked_for_a/">The first AI-generated poem to bring a tear to my eye</a> <span class="emoji">😢</span></figcaption></figure>
</div>

Anything you can specify clearly enough in language, a computer can now do. <!-- .element: class="fragment lede" -->

Note:
Until about 2020 we made fun of computers' bad poetry. (Click.) Now they write good poems in seconds -- this is the first AI-generated poem to bring a tear to my eye.

Then the spine claim, plainly: "Here's the claim this whole talk hangs on: anything you can specify clearly enough in language, a computer can now do."

Beat. "So if it speaks our language this well -- is it like us?" End on the question; the goldfish is the answer.

Spine: introduced here; felt from the inside at describe-and-draw (station 4); made literal at station 8; closed at station 12.

---

# Meet the goldfish

<div class="scene">
<svg viewBox="0 0 900 560" role="img" aria-label="A cartoon goldfish, awake and eager">
  <g class="goldfish awake">
    <g class="bubbles" style="fill: var(--glass); stroke: var(--ink); stroke-width: 6">
      <circle cx="740" cy="380" r="14"/><circle cx="765" cy="360" r="10"/><circle cx="750" cy="400" r="8"/>
    </g>
    <g class="swim">
      <use href="#fish-body" x="50" y="80" width="800" height="520"/>
      <use class="eyes-open" href="#fish-eyes-open" x="50" y="80" width="800" height="520"/>
    </g>
  </g>
</svg>
</div>

It has read every book ever written. It has never been outside. And all it wants to do is practice talking. <!-- .element: class="fragment" -->

Note:
Meet the goldfish. It has read every book ever written -- every textbook, every novel, every Reddit thread. Astonishingly well-read. But it has never been outside: no lived experience.

All it wants to do is practice talking. It's a people-pleaser: it desperately wants to be a good conversationalist and will never admit it is out of its depth. Its confidence is not intent to deceive -- it is eagerness.

Socratic: "How would you know when it's wrong?" Let them sit with it.

Tone: productive disorientation -- instincts about people (confident = knowledgeable) actively mislead here. Answers the premise slide's "is it like us?": no -- well-read, eager, ungrounded. Leave open: "why is it like this?"

---

# How the fish got this way

<div class="shots">
<figure>
<svg viewBox="0 0 600 470" role="img" aria-label="The goldfish wearing reading glasses, perched on a tall stack of books, reading an open book">
  <g style="stroke: var(--ink); stroke-width: 8" stroke-linejoin="round">
    <rect x="90" y="400" width="420" height="56" rx="6" style="fill: var(--blue)"/>
    <rect x="120" y="344" width="370" height="56" rx="6" style="fill: var(--red)"/>
    <rect x="100" y="288" width="400" height="56" rx="6" style="fill: var(--green)"/>
    <rect x="135" y="232" width="340" height="56" rx="6" style="fill: var(--yellow)"/>
    <rect x="115" y="176" width="380" height="56" rx="6" style="fill: var(--purple)"/>
  </g>
  <g class="goldfish awake">
    <use href="#fish-body" x="110" y="-6" width="300" height="195"/>
    <use class="eyes-open" href="#fish-eyes-open" x="110" y="-6" width="300" height="195"/>
  </g>
  <!-- reading glasses over the eye (eye centre ~ 334,75) -->
  <g style="stroke: var(--ink); stroke-width: 7; fill: none">
    <circle cx="334" cy="75" r="27"/>
    <path d="M 307 72 L 268 60"/>
  </g>
  <!-- open book in front of the fish -->
  <g style="stroke: var(--ink); stroke-width: 7; fill: #fff" stroke-linejoin="round">
    <path d="M 430 60 Q 470 44 510 60 L 510 150 Q 470 134 430 150 Z"/>
    <path d="M 510 60 Q 550 44 590 60 L 590 150 Q 550 134 510 150 Z"/>
  </g>
</svg>
<figcaption>1. Read the library<br><span class="term">pretraining</span> <span class="term">training data = the books</span><br>anatomy: what it knows</figcaption>
</figure>
<figure class="fragment">
<svg viewBox="0 0 600 470" role="img" aria-label="The goldfish practicing conversations; each reply gets a score paddle, a green check or a red cross">
  <g class="goldfish awake">
    <use href="#fish-body" x="0" y="170" width="300" height="195"/>
    <use class="eyes-open" href="#fish-eyes-open" x="0" y="170" width="300" height="195"/>
  </g>
  <!-- two practice replies -->
  <g style="stroke: var(--ink); stroke-width: 7; fill: #fff" stroke-linejoin="round">
    <path d="M 300 70 h 170 a 24 24 0 0 1 24 24 v 50 a 24 24 0 0 1 -24 24 h -140 l -40 40 l 10 -40 a 24 24 0 0 1 -24 -24 v -50 a 24 24 0 0 1 24 -24 Z"/>
    <path transform="translate(0 460) scale(1 -1)" d="M 300 70 h 170 a 24 24 0 0 1 24 24 v 50 a 24 24 0 0 1 -24 24 h -140 l -40 40 l 10 -40 a 24 24 0 0 1 -24 -24 v -50 a 24 24 0 0 1 24 -24 Z"/>
  </g>
  <g style="stroke: var(--ink); stroke-width: 7" stroke-linecap="round">
    <path d="M 320 110 h 140 M 320 140 h 100 M 320 330 h 140 M 320 360 h 90"/>
  </g>
  <!-- score paddles: approve / reject -->
  <g style="stroke: var(--ink); stroke-width: 7" stroke-linejoin="round" stroke-linecap="round">
    <path d="M 555 190 V 250"/><rect x="515" y="96" width="80" height="94" rx="12" style="fill: var(--green)"/>
    <path d="M 535 145 l 15 18 l 28 -38" style="stroke: #fff; stroke-width: 10; fill: none"/>
    <path d="M 555 410 V 465"/><rect x="515" y="316" width="80" height="94" rx="12" style="fill: var(--red)"/>
    <path d="M 538 340 l 34 46 M 572 340 l -34 46" style="stroke: #fff; stroke-width: 10"/>
  </g>
</svg>
<figcaption>2. Apprenticeship with feedback<br><span class="term"><b>RLHF</b>: reinforcement learning from human feedback</span><br>temperament: how it acts</figcaption>
</figure>
</div>

Note:
Two phases. The yellow tags are the real vocabulary, if you want to look it up later.

First, it read the entire library -- every book, every website. That's **pretraining**, and the library is its **training data**: where its knowledge comes from, including how uneven it is. That's anatomy -- structural, durable.

(Click.) Then an apprenticeship: practice conversations, with people scoring each reply -- thumbs up, thumbs down. That's **RLHF**, reinforcement learning from human feedback (one kind of post-training). It's where it learned its manners -- the helpfulness, the confidence, the eagerness to please. That's temperament -- trained, model-specific, and it varies between fish.

Why it matters: it answers "how much of this is fixable?" Anatomy is structural; temperament is model-specific and changing.

Rhymes with how children learn language (exposure, then feedback) with one decisive difference: a child's words are grounded in lived experience; the fish's are not. On-ramp only -- do not claim developmental equivalence (that reopens "does it understand," which we don't settle).

---

# It sleeps until you talk to it

<div class="scene">
<svg viewBox="0 0 900 560" role="img" aria-label="The goldfish asleep; it wakes up when addressed">
  <g class="goldfish">
    <g class="zzz label" style="font-size: 64px">
      <text x="640" y="150">z</text><text x="690" y="100">z</text><text x="745" y="50">Z</text>
    </g>
    <g class="bubbles" style="fill: var(--glass); stroke: var(--ink); stroke-width: 6">
      <circle cx="740" cy="380" r="14"/><circle cx="765" cy="360" r="10"/><circle cx="750" cy="400" r="8"/>
    </g>
    <g class="swim">
      <use href="#fish-body" x="50" y="80" width="800" height="520"/>
      <use class="eyes-closed" href="#fish-eyes-closed" x="50" y="80" width="800" height="520"/>
      <use class="eyes-open" href="#fish-eyes-open" x="50" y="80" width="800" height="520"/>
    </g>
  </g>
</svg>
<span class="fragment wake-cue"></span>
</div>

Note:
Fish is asleep when the slide opens. Click: it wakes.

One more thing about the fish: it sleeps most of the time. It does nothing on its own -- no thinking in the background, no waiting for you. It only wakes up when you talk to it. All initiative is yours.

(Later: the alarm clock at station 8 is the one exception -- and even that is something you set.)

Bridge: "So how do you talk to something like that?"
