<!-- .slide: class="center-slide" -->

# A note on vocabulary

<p class="lede">Pictures: the idea</p>
<p class="fragment"><span class="term">yellow tags</span>: the real terms, to look up later</p>
<p class="fragment small">Key terms: on your take-home card</p>

Note:
Quick orientation before we start: I'll use a lot of pictures -- a goldfish, a bowl, maps. The pictures carry the idea.

(Click.) Whenever a picture stands for a real concept, the real term shows up beside it in a yellow tag like this one. You don't need to memorize them; they're the words to search for later.

(Click.) The important ones are on the take-home card, so you can leave the note-taking to the card.

Timing: 20 seconds. Sets up the convention once so it never needs explaining again.

---

# Who learns whose language?

<div class="lang-row">
<span class="emoji">🧑</span><span class="bubble binary">01001000 01101001</span><span class="arrow">→</span><span class="emoji">💻</span>
<span class="what"><b>Before:</b> people learned computer language.<br>Strict. Only about numbers.</span>
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
<figure><div class="poem">
<p class="poem-title">The pudding god and the magical dragon</p>
<p>The mighty pudding god will devour you.<br>Is in the form of this magical dragon cris<br>And in the form of this magical dragon biss<br>You will be given a magical egg</p>
</div><figcaption>Then: GPT-2, 2020 (<a href="https://www.aiweirdness.com/rhyming-is-hard-20-05-26/">"Rhyming is hard," AI Weirdness</a>)</figcaption></figure>
<figure class="fragment"><img src="illustrations/computers-english--claude-poetry.webp" alt="A poem titled 'Under Trees': 'The trees do not optimize their rustling, the wind does not justify its dance... I am allowed to simply be here, like the trees on any given day.'"><figcaption><a href="https://www.reddit.com/r/ClaudeAI/comments/1gn4u8y/i_hade_a_nice_night_with_claude_and_asked_for_a/">The first AI-generated poem to bring a tear to my eye</a> <span class="emoji">😢</span></figcaption></figure>
</div>

Specify it clearly in language &rarr; a computer can now do it <!-- .element: class="fragment lede" -->

Note:
Until about 2020 we made fun of computers' bad poetry. This is GPT-2, in 2020, trying to rhyme: "The pudding god and the magical dragon." (Read a line or two. "Cris." "Biss.") (Click.) Now they write good poems in seconds -- this is the first AI-generated poem to bring a tear to my eye.

Then the spine claim, plainly: "Here's the claim this whole talk hangs on: anything you can specify clearly enough in language, a computer can now do."

Beat. "So if it speaks our language this well -- is it like us?" End on the question; the goldfish is the answer.

Spine: introduced here; felt at station 4 (say what you want; the lazy genie); made literal at station 8; closed at station 12.

---

<!-- .slide: data-bookmark="Meet the goldfish" -->
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

Read every book. Never been outside. Just wants to talk. <!-- .element: class="fragment" -->

Note:
Meet the goldfish. It has read every book ever written -- every textbook, every novel, every Reddit thread. Astonishingly well-read. But it has never been outside: no lived experience.

All it wants to do is practice talking. It's a people-pleaser: it desperately wants to be a good conversationalist and will never admit it is out of its depth. Its confidence is not intent to deceive -- it is eagerness.

Socratic: "How would you know when it's wrong?" Let them sit with it.

Tone: productive disorientation -- instincts about people (confident = knowledgeable) actively mislead here. Answers the premise slide's "is it like us?": no -- well-read, eager, ungrounded. Leave open: "why is it like this?"

---

# How the fish got this way

<div class="shots training">
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
<p class="footnote">* Not just published books: other text data sets, too.</p>
<figcaption>1. Read the library<br><span class="term">pretraining</span> <span class="term">training data = the books*</span><br>anatomy: what it knows</figcaption>
<div class="completion fragment"><span class="term">base model</span><p>The quick brown fox <span class="out">jumps over the lazy dog.</span></p><p>What is the capital of France? <span class="out">What is the capital of Germany? What is the capital of...</span></p></div>
</figure>
<figure class="fragment">
<svg viewBox="0 0 600 470" role="img" aria-label="The goldfish's practice conversations: two of its replies side by side, and a person below them holding up a green check paddle under one reply and a red cross paddle under the other">
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
<figcaption>2. Apprenticeship with feedback<br><span class="term">post-training</span> <span class="term"><b>RLHF</b>: reinforcement learning from human feedback</span><br>temperament: how it acts</figcaption>
<div class="completion fragment"><span class="term">chat model</span><p>What is the capital of France? <span class="out">The capital of France is Paris.</span></p></div>
</figure>
</div>

Note:
Two phases. (Yellow tags: the real vocabulary.)

First, it read the entire library -- every book, every website. (The asterisk: "books" is shorthand. The library is every big text data set its makers could gather -- web pages, forums, code, transcripts -- not just published books.) That's **pretraining**, and the library is its **training data**: where its knowledge comes from, including how uneven it is. That's anatomy -- structural, durable.

(Click.) What comes out of the library alone is a **base model**: a text continuer. Give it the start of something and it writes what usually comes next. "The quick brown fox" -- "jumps over the lazy dog." Ask it a question and it may not answer it at all: in its books, a question is often followed by more questions (a quiz, an FAQ list). It isn't being difficult; it's continuing the page.

(Click.) Then an apprenticeship: practice conversations, with people scoring each reply -- thumbs up, thumbs down. That's **post-training**; the best-known kind is **RLHF**, reinforcement learning from human feedback. It's where it learned its manners -- the helpfulness, the confidence, the eagerness to please. That's temperament -- trained, model-specific, and it varies between fish.

(Click.) After the apprenticeship it's a **chat model**: it has learned the question-and-answer pattern. Same question, now it answers.

(If asked, for accuracy: post-training is several steps, not one. The Q&A format is mostly taught first by showing it example conversations to copy -- "supervised fine-tuning" or "instruction tuning" -- and RLHF then polishes which answers it prefers. The slide folds both into "apprenticeship"; the term chip names the umbrella, post-training, plus the best-known step.)

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
