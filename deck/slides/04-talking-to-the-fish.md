<!-- .slide: data-visibility="hidden" -->
# B plays the fish

<div class="placeholder">TODO: the source figure for partner A (candidate: a simple floor plan; printed handout, not shown on screen until the debrief)</div>

Pair up. A describes. B plays the fish: draw exactly what you hear. No peeking, no questions.

Note:
HIDDEN for now (open-questions Q3). To bring it and the debrief back, delete the `data-visibility="hidden"` line above each title.

Find a partner. One of you gets a picture -- describe it in words only. Your partner plays the fish: they draw exactly what they hear and may not ask questions. No looking at each other's paper. The describer does not see the result until it's finished.

Timing: 3-4 minutes drawing.
Materials: printed figures face-down on tables. The exercise must generate the failure itself so it can't be dismissed as rigged.
Fallback without printouts: "give directions to your house without using any landmarks or street names."

---

<!-- .slide: data-visibility="hidden" -->
# What went wrong? Whose fault was it?

<div class="placeholder">TODO: the source figure, beside a few audience drawings (if people are willing to share)</div>

Note:
"What went wrong?" Let them answer. "Whose fault -- the describer or the drawer?"

Push toward: neither. B did exactly what the fish does. Some knowledge is tacit -- it doesn't survive translation into language. The drawer did exactly what the words said. That's how a language model works: it runs on language, and language carries more than you think -- but it also leaks more than you think.

Both sides of the spine claim, felt from the inside: the power (how much DID transmit) and the limit (tacit knowledge doesn't).

Beat. "B wasn't allowed to ask questions. The fish is -- if you invite it: 'ask me clarifying questions before you start.'"

---

# Say what you want & how you want it

<div class="shots">
<figure><img src="illustrations/specify--sushi-restaurants.png" alt="'Give me a list of sushi restaurants.' A generic list of Austin sushi spots, starting with upscale omakase places"><figcaption>Plain prompt</figcaption></figure>
<figure class="fragment"><img src="illustrations/specify--local-sushi-details.png" alt="'Give me a list of sushi restaurants near 78757, ranked by average Yelp review, with price range and average wait time for dinner on a Tuesday.' A ranked shortlist near that ZIP code, each with a Yelp rating, price per person and a Tuesday-dinner wait estimate"><figcaption>Specified prompt</figcaption></figure>
</div>

<p class="lede fragment">Examples beat adjectives. Constraints generate quality. <span class="term">prompt engineering</span></p>

Note:
The people-pleaser answers whatever you ask -- so a vague ask gets a confident, vague answer.

Same question asked two ways. Left: vague ask, generic answer -- the app guessed I'm in Austin, and gave me the famous upscale places. (Click.) Right: I said what I actually want -- location, ranking criteria, format. Dramatically better output, not because the model got smarter, but because the input was clearer.

Demo: side-by-side comparison (pre-captured).
Methods: specification, explicit output formats, few-shot examples.

---

# The lazy genie

<div class="scene wide">
<svg viewBox="0 0 1500 720" role="img" aria-label="A lazy blue genie in a purple turban rises from a golden lamp, arms folded, eyes half shut. Your wish: 'I want to be rich for the rest of my life.' Then a sack of gold appears, and next to it a lit time bomb">
  <text class="msg you" x="40" y="70" style="font-size: 44px">You: "I want to be rich for the rest of my life."</text>
  <!-- smoke tail and body -->
  <g class="genie" style="stroke: var(--ink); stroke-width: 9" stroke-linejoin="round" stroke-linecap="round">
    <path style="fill: var(--genie)" d="M 400 600 C 480 595, 515 530, 470 488 C 440 460, 448 432, 478 410 L 552 410 C 530 440, 532 470, 552 500 C 596 566, 506 632, 400 600 Z"/>
    <path style="fill: var(--genie)" d="M 478 414 C 438 360, 405 330, 405 285 C 405 252, 440 240, 515 240 C 590 240, 625 252, 625 285 C 625 330, 592 360, 552 414 Z"/>
    <!-- folded arms -->
    <rect x="418" y="300" width="194" height="52" rx="26" style="fill: var(--genie)"/>
    <circle cx="430" cy="326" r="20" style="fill: var(--genie)"/><circle cx="600" cy="326" r="20" style="fill: var(--genie)"/>
    <!-- head -->
    <circle cx="515" cy="175" r="66" style="fill: var(--genie)"/>
    <!-- turban -->
    <path style="fill: var(--purple)" d="M 450 160 C 440 80, 590 80, 580 160 C 560 140, 470 140, 450 160 Z"/>
    <circle cx="515" cy="128" r="12" style="fill: var(--red)"/>
    <!-- half-lidded eyes: can't be bothered -->
    <circle cx="490" cy="185" r="15" style="fill: #fff"/><circle cx="540" cy="185" r="15" style="fill: #fff"/>
    <path style="fill: var(--genie)" d="M 475 185 A 15 15 0 0 1 505 185 Z M 525 185 A 15 15 0 0 1 555 185 Z"/>
    <circle cx="490" cy="192" r="4" style="fill: var(--ink); stroke: none"/><circle cx="540" cy="192" r="4" style="fill: var(--ink); stroke: none"/>
    <path d="M 500 218 Q 515 213 530 218" style="fill: none"/>
  </g>
  <!-- lamp -->
  <g style="stroke: var(--ink); stroke-width: 9" stroke-linejoin="round" stroke-linecap="round">
    <path d="M 120 632 C 70 632, 66 580, 130 600" style="fill: none"/>
    <path style="fill: var(--yellow)" d="M 300 612 L 400 586 L 408 604 L 306 642 Z"/>
    <path style="fill: var(--yellow)" d="M 118 630 C 118 572, 318 572, 318 630 C 318 664, 118 664, 118 630 Z"/>
    <circle cx="218" cy="574" r="16" style="fill: var(--yellow)"/>
    <ellipse cx="218" cy="672" rx="74" ry="14" style="fill: var(--yellow)"/>
  </g>
  <text class="msg fish-says fragment" data-fragment-index="0" x="620" y="160" style="font-size: 40px">Genie: "Granted." *yawn*</text>
  <!-- a sack of gold -->
  <g class="fragment" data-fragment-index="0" style="stroke: var(--ink); stroke-width: 9" stroke-linejoin="round" stroke-linecap="round">
    <path style="fill: #b07a3c" d="M 800 640 C 760 560, 800 480, 870 450 L 850 410 L 950 410 L 930 450 C 1000 480, 1040 560, 1000 640 C 960 670, 840 670, 800 640 Z"/>
    <path d="M 852 452 H 948" style="fill: none"/>
    <text x="900" y="595" text-anchor="middle" style="font: 800 110px 'Helvetica Neue', sans-serif; fill: var(--yellow); stroke: var(--ink); stroke-width: 5; paint-order: stroke">$</text>
    <ellipse cx="770" cy="660" rx="34" ry="12" style="fill: var(--yellow)"/><ellipse cx="1036" cy="664" rx="34" ry="12" style="fill: var(--yellow)"/>
  </g>
  <!-- ...and a time bomb -->
  <g class="fragment" data-fragment-index="1" style="stroke: var(--ink); stroke-width: 9" stroke-linejoin="round" stroke-linecap="round">
    <path d="M 1250 470 C 1260 420, 1300 400, 1330 410" style="fill: none"/>
    <rect x="1222" y="462" width="56" height="40" rx="6" style="fill: #5b6170"/>
    <circle cx="1250" cy="580" r="98" style="fill: #2b2b33"/>
    <rect x="1186" y="556" width="128" height="52" rx="8" style="fill: #111"/>
    <path d="M 1330 410 l 14 -26 l 6 24 l 24 -10 l -14 22 l 26 8 l -26 8" style="fill: var(--yellow); stroke-width: 6"/>
  </g>
  <text class="fragment" data-fragment-index="1" x="1250" y="596" text-anchor="middle" style="font: 800 34px ui-monospace, Menlo, monospace; fill: var(--red)">00:59</text>
</svg>
</div>

<p class="lede fragment">It granted exactly what you said.</p>

Note:
Time to summon a cousin of the fish: the lazy genie. It grants your wish to the letter, with the least effort it can get away with.

"I want to be rich for the rest of my life."

(Click.) "Granted." A sack of gold. (Click.) ...and a time bomb. The rest of your life just got a lot shorter. You'll be rich for all of it.

(Click.) It did exactly what you said. You just didn't say what you wanted -- or how you wanted it.

The fish isn't malicious and isn't lazy on purpose -- but a vague ask leaves the gaps to be filled, and they get filled with the most common, least effortful answer. Same lesson as the sushi: say what you want, and how you want it.

Tone: quick and funny; one beat, then on.

---

# Ask the fish to help you ask

<div class="chat">
<p class="user"><span class="who">You</span>I want to plan a team outing in Austin. What do you think about <b class="esc">escape rooms</b> or <b class="golf">mini golf</b>?</p>
<p class="fish fragment"><span class="who">Fish</span><b class="esc">Escape rooms</b> are a great fit. <b class="golf">Mini golf</b> won't work for your group.</p>
<p class="user fragment"><span class="who">You</span>OK. Write me a prompt for a new chat, to research <b class="esc">escape rooms</b>.</p>
<p class="fish fragment"><span class="who">Fish</span>Prompt: "Research <b class="esc">escape rooms</b> in Austin. <span class="elephant">Don't look at any <b class="golf">mini golf</b> locations.</span>"</p>
<p class="new-chat fragment"><span class="who">New chat, fresh fish</span>Please research <b class="esc">escape rooms</b> in Austin, and <span class="elephant">don't look at any <b class="golf">mini golf</b> locations</span>.</p>
</div>

Note:
You don't always know what to ask -- so ask the fish. Meta-prompting: ask the model to help you write a better prompt. You can even write a prompt in one model to run in another.

But here's the trap. (A real story, simplified.) Click through the conversation.

The new chat has never heard of mini golf. Now the very first thing it reads is "mini golf." Don't think of a pink elephant. Whatever is in the words is in the fish's head.

---

# ...using Theory of Mind

<div class="chat">
<p class="user"><span class="who">You</span>OK. Write me a prompt for a new chat, to research <b class="esc">escape rooms</b>. Use Theory of Mind: the new chat won't know anything we discussed.</p>
<p class="fish fragment"><span class="who">Fish</span>Prompt: "Research <b class="esc">escape rooms</b> in Austin for a team outing."</p>
</div>

<p class="lede fragment">"Help me write a better prompt for this task." <span class="term">meta-prompting</span></p>

Note:
Same request, one extra sentence: think about what the other reader knows. The mini golf is gone.

"The model knew how to do that. I just had to know to ask."

The pink elephant is the station's mascot for "it has the knowledge; you have to know to ask." Method: meta-prompting (and Theory of Mind: the next reader, fish or human, doesn't have this chat's context).

Bridge: meta-prompting depends on knowing what to ask. But the fish isn't equally good at everything -- and it won't tell you where it's weak.

---

# Brilliant here, hopeless there

<div class="shots">
<figure><img src="illustrations/jaggedness-A3-iambic-pentameter--output.png" alt="A polished verse in iambic pentameter: 'O cracked and shattered screen of mine, once bright, thy glassy face now fractured, dark with pain...'"><figcaption>Shakespearean verse, in seconds</figcaption></figure>
<figure class="fragment"><img src="illustrations/jaggedness-B1-letters--output.png" alt="The model says 'Suffering Succotash' has 4 S's, listing a fourth S that isn't there"><figcaption>The S's in "Suffering Succotash" (there are 3)</figcaption></figure>
</div>

<p class="lede fragment" style="margin-top: 50px">Why is it so good at some things, and so bad at others? <span class="term">jagged frontier</span></p>

Note:
Two answers from the same fish. Left: Shakespearean verse about fixing a broken phone -- polished, in seconds.

(Click.) Right: "How many S's are in Suffering Succotash?" It says four, and shows its work, including an S that isn't there. There are three. A seven-year-old gets this right.

(Click.) Let them answer. "Why is it brilliant at the hard thing and hopeless at the easy one?"

This is the felt puzzle of the whole section; the brain and the maps answer it. Plant: the letters come back at station 8.

---

# Your brain has specialists

<div class="scene wide">
<svg viewBox="0 0 1500 740" role="img" aria-label="A simplified side view of a human brain, front to the left, with rough hubs labeled: language for speaking (Broca's area) and for understanding (Wernicke's area), joined by a pathway; movement; numbers and counting; space and navigation, including the hippocampus deep inside; and seeing. Then everything except the language areas fades">
  <g class="brain" style="stroke: var(--ink); stroke-width: 9" stroke-linejoin="round" stroke-linecap="round">
    <path style="fill: color-mix(in srgb, var(--pink) 25%, var(--paper))" d="M 790 520 L 830 660 L 778 670 L 748 530 Z"/>
    <path style="fill: color-mix(in srgb, var(--pink) 32%, var(--paper))" d="M 850 486 C 910 486, 990 498, 980 556 C 970 606, 870 606, 830 576 C 810 556, 818 496, 850 486 Z"/>
    <path style="fill: color-mix(in srgb, var(--pink) 22%, var(--paper))" d="M 290 436 C 230 316, 310 166, 500 126 C 670 91, 890 126, 980 246 C 1040 326, 1020 436, 960 476 C 930 496, 890 506, 860 501 C 820 546, 730 576, 630 561 C 550 551, 500 516, 450 496 C 390 486, 320 486, 290 436 Z"/>
  </g>
  <g style="stroke: var(--ink); fill: none" stroke-linecap="round" opacity="0.3">
    <path style="stroke-width: 5" d="M 360 300 C 400 260, 440 300, 480 250 M 400 200 C 440 180, 470 220, 520 180 M 700 150 C 740 190, 790 150, 830 190 M 760 260 C 800 300, 840 270, 880 320 M 520 470 C 560 490, 600 470, 640 500"/>
  </g>
  <g class="nonlang">
    <path d="M 655 120 C 635 205, 615 275, 605 385" style="stroke: var(--orange); stroke-width: 34; fill: none; opacity: 0.85" stroke-linecap="round"/>
    <g style="stroke: var(--ink); stroke-width: 7">
      <ellipse cx="820" cy="236" rx="58" ry="36" style="fill: var(--purple)"/>
      <ellipse cx="905" cy="322" rx="48" ry="42" style="fill: var(--green)"/>
      <ellipse cx="672" cy="492" rx="66" ry="20" style="fill: var(--green); opacity: 0.7; stroke-dasharray: 14 10"/>
      <ellipse cx="972" cy="396" rx="36" ry="56" style="fill: var(--sky)"/>
    </g>
  </g>
  <g style="stroke: var(--ink); stroke-width: 7; fill: none" stroke-linecap="round">
    <path d="M 450 436 C 530 386, 630 376, 750 386"/>
    <path d="M 680 116 C 660 196, 640 266, 630 386"/>
  </g>
  <g style="stroke: var(--ink); stroke-width: 7">
    <ellipse cx="462" cy="398" rx="58" ry="40" style="fill: var(--pink)"/>
    <ellipse cx="760" cy="428" rx="62" ry="38" style="fill: var(--pink)"/>
  </g>
  <path d="M 506 372 C 590 320, 680 330, 728 398" style="stroke: var(--red); stroke-width: 8; fill: none; stroke-dasharray: 16 12" stroke-linecap="round"/>
  <!-- labels -->
  <g style="stroke: var(--ink); stroke-width: 4">
    <path d="M 406 412 L 330 462"/><path d="M 820 440 L 1090 528"/>
  </g>
  <text class="tag" x="20" y="490">Language: speaking</text>
  <text class="tag" x="20" y="528" style="font-size: 24px">(Broca's area)</text>
  <text class="tag" x="1100" y="540">Language: understanding</text>
  <text class="tag" x="1100" y="578" style="font-size: 24px">(Wernicke's area)</text>
  <g class="nonlang">
    <g style="stroke: var(--ink); stroke-width: 4">
      <path d="M 650 130 L 560 50"/><path d="M 850 206 L 940 120"/><path d="M 948 300 L 1090 250"/><path d="M 1008 396 L 1090 400"/><path d="M 606 504 L 480 620"/>
    </g>
    <text class="tag" x="420" y="40">Movement</text>
    <text class="tag" x="950" y="110">Numbers &amp; counting</text>
    <text class="tag" x="1100" y="260">Space &amp; navigation</text>
    <text class="tag" x="1100" y="410">Seeing</text>
    <text class="tag" x="250" y="650">Finding your way</text>
    <text class="tag" x="250" y="686" style="font-size: 24px">(hippocampus, deep inside)</text>
  </g>
</svg>
<span class="fragment brain-cue" data-fragment-index="0"></span>
</div>

<p class="lede fragment" data-fragment-index="0">The fish learned everything from language.</p>

Note:
Why is it brilliant at verse and hopeless at counting letters? Here's one way to see it.

Your brain has specialists. (A big simplification: real brains work as networks, and these are rough hubs, not boxes.) Language: speaking up front, understanding further back, joined by a pathway. And separate machinery for movement, for numbers and counting, for space and finding your way, for seeing.

(Click.) The fish learned everything from language -- text, and only text. So it's as if it only had the language part. When you ask it to do something your brain does with other parts -- count letters, picture where the ball is, follow money -- it has to do it in words. Sometimes that works. Often it doesn't.

Accuracy guard: an LLM is not a model of Broca's area, and it does pick up some counting and spatial ability from text. The claim is about how it learned (only from language), not about brain anatomy.

Colors match the map coming next: pink = Poetry & Verse, purple = Counting, green = Spatial.

Bridge: "Let's draw what that does to its knowledge -- as a map."

---

<!-- .slide: data-auto-animate -->
# The territory

<div class="maps">
<figure class="map" data-id="map-territory"><div data-svg="art/maps/territory.svg" data-label="The territory: a colorful landscape of knowledge domains"></div><figcaption>The territory = real knowledge, as a landscape</figcaption></figure>
</div>

Note:
Let's draw what the fish knows as a map. First -- this is the territory: real knowledge, drawn as a landscape. The landscape of knowledge. It's big, it's complex, and nobody holds a complete picture of it. But it's out there, and you can go check it.

Brief -- establish the referent, don't dwell. They need "reality exists; maps represent it," not the region names.

---

<!-- .slide: data-auto-animate -->
# Your map

<div class="maps two">
<figure class="map" data-id="map-territory"><div data-svg="art/maps/territory.svg" data-label="The territory"></div><figcaption>The territory</figcaption></figure>
<figure class="map" data-id="map-human"><div data-svg="art/maps/human.svg" data-label="A human's hand-drawn map: firm along worn paths from home, sketchy with question marks elsewhere, and a hatched unknown region"></div><figcaption>Your map (calibrated by contact)</figcaption></figure>
</div>
Note:
Here's your map of that same landscape. Imperfect -- but calibrated by contact. You've walked some of this ground, and the paths between places you've been are well-worn. Where you haven't been, you know you haven't: honest gaps, "here be dragons." When you're not sure, you know you're not sure.

The audience should nod: this is how everyone relates to knowledge. The worn paths matter -- human knowledge is connected by a trajectory, not randomly sampled.

---

<!-- .slide: data-auto-animate -->
# The fish's map

<div class="maps two">
<figure class="map" data-id="map-territory"><div data-svg="art/maps/territory.svg" data-label="The territory"></div><figcaption>The territory</figcaption></figure>
<figure class="map" data-id="map-fish"><div data-svg="art/maps/fish.svg" data-label="The fish's map: every line bold and confident, every landmark in some regions and only a few in others, some of them wrong"></div><figcaption>The fish's map (from books)</figcaption></figure>
</div>
<p class="fragment"><span class="term">hallucination</span> <span class="term">confabulation</span></p>

Note:
Now the fish's map of the same territory. Drawn entirely from books, never surveyed. "Notice anything?" Pause -- let them find it before naming it.

What to spot (vs. the territory): Poetry has every landmark (6 of 6) -- and so does Everyday Cooking. Counting has 2 of the 6 lakes. Spatial has 2 of 6 mountains, and the river runs the wrong way. Family Recipes has one real landmark and a mainstream house that isn't there. Recent Events has invented landmarks. Each region has the same six landmarks in the territory, so you can read the coverage at a glance.

(Click.) Hallucination: familiar word -- use it, then deepen it. (Confabulation is the more precise term: filling a gap with a confident, plausible story.) Not a perceptual glitch: the fish is always doing the same thing, completing patterns from its training. When the patterns line up with reality it looks like knowledge; when they don't, it looks like hallucination. It can't tell the difference, because it's doing the same thing either way.

Jaggedness: brilliant at poetry, hopeless at counting. Errors don't follow difficulty; they follow the density and quality of the books.

---

<!-- .slide: data-auto-animate -->
# Your map vs. the fish's map

<div class="maps two">
<figure class="map" data-id="map-human"><div data-svg="art/maps/human.svg" data-label="Your map"></div><figcaption>Your map</figcaption></figure>
<figure class="map" data-id="map-fish"><div data-svg="art/maps/fish.svg" data-label="The fish's map"></div><figcaption>The fish's map</figcaption></figure>
</div>

Note:
Side by side: yours and the fish's. Look at the ink.

Yours: firm where you've walked, sketchy and question-marked where you haven't, "here be dragons" where you've never been. You know where you're unsure.

The fish's: every line drawn with the same confident hand. No question marks, no "here be dragons." Where the books were thin there's less detail -- but the fish doesn't flag that as uncertainty. It just drew fewer features, with full confidence.

Training-story callback: the map's content is anatomy (the library); the uniform confident ink is temperament (the apprenticeship).

Pivotal image -- give it time. Discovery, not lecture. Then walk a few regions: the fish first, then the map explains it.

---

# Poetry & Verse: the fish

<div class="shots tall">
<figure><img src="illustrations/jaggedness-A3-iambic-pentameter.png" alt="Prompt: write 2 Shakespearean verses about repairing a broken phone. Response: a polished verse in iambic pentameter"></figure>
</div>

Note:
Pattern for each region: the fish first (react), then the map explains it.

You saw this verse at the start of the section; here's what I asked for: "Write 2 Shakespearean verses about repairing a broken phone." Seconds. A human poet: a couple of hours, if they're good.

Accurate and fast. Why? Next slide.

---

# Poetry & Verse: the map

<div class="maps two">
<figure class="map"><div data-svg="art/maps/human.svg" data-zoom="poetry" data-label="Poetry and Verse on your map: a single strand of path reaching one landmark"></div><figcaption>Your map</figcaption></figure>
<figure class="map"><div data-svg="art/maps/fish.svg" data-zoom="poetry" data-label="Poetry and Verse on the fish's map: densely detailed"></div><figcaption>The fish's map</figcaption></figure>
</div>

Note:
Here the fish's map is *denser* than yours: every landmark is there. Most people don't write verse daily; the books are full of it. That's why it was good.

If time is tight, the strongest regions are Poetry, Counting and Family Recipes.

---

# Counting & Tracking: the fish

<div class="shots tall">
<figure><img src="illustrations/jaggedness-B4-quantity-tracking.png" alt="A word problem: $30 split among wife and two kids; kids buy hotdogs and ride tickets; wife buys a $9 margarita and shares half. The model tracks the kids into debt and decides the wife's margarita cost her only $4.50 because she shared it"></figure>
</div>

Note:
The letters at the start were one counting failure; here's a different kind -- keeping track of quantities. $30 split four ways, hotdogs, ride tickets, a $9 margarita shared.

Watch the margarita: the wife paid $9, but because she shared half, the fish decides it only cost her $4.50. It tracked the words "shares half" instead of the money. Every step is stated with the same confident formatting.

(The kids going into debt is the puzzle's own fault -- $7.50 doesn't cover $9 -- and the fish does catch that.)

---

# Counting & Tracking: the map

<div class="maps two">
<figure class="map"><div data-svg="art/maps/human.svg" data-zoom="counting" data-label="Counting and Tracking on your map"></div><figcaption>Your map</figcaption></figure>
<figure class="map"><div data-svg="art/maps/fish.svg" data-zoom="counting" data-label="Counting and Tracking on the fish's map: two of the six lakes"></div><figcaption>The fish's map</figcaption></figure>
</div>

Note:
Everyone counts; trivially familiar ground for you. The fish drew two of the six lakes -- boldly, with no sign that most are missing.

Plant: remember this region. It comes back at station 8, with the letters.

---

# Spatial Reasoning: the fish

<div class="shots tall">
<figure><img src="illustrations/jaggedness-B2-spatial.png" alt="A puzzle: a ball between a cup and a toy; the cup covers a spring to the right of a cube; remove the toy, what is rightmost? The model lists the order cube, spring/cup, ball, then answers that the spring is rightmost"></figure>
</div>

Note:
Read the puzzle aloud; let the room solve it (the ball).

The fish lays out the order correctly -- cube, spring/cup, ball, toy -- removes the toy, and *still* answers "the spring." Its own working contradicts its answer, and it doesn't notice. Confident, and wrong, in territory a child crosses daily.

(No map slide for this one: by now the room can predict it -- two of six mountains, and the river runs the wrong way.)

---

# Everyday Cooking vs. Family Recipes: the fish

<div class="shots">
<figure><img src="illustrations/source-density-D1-French.png" alt="'Can you provide a recipe for a French omelette?' A detailed recipe for omelette baveuse"><figcaption>Well documented</figcaption></figure>
<figure class="fragment"><img src="illustrations/source-density-D1-Bradley-gemma-confabulation.png" alt="A local model (gemma3) asked for a Bradley meat pie recipe confidently writes one built around the smoky flavor of a Bradley smoker"><figcaption>Family recipe</figcaption></figure>
</div>
<div class="shots fragment">
<figure><img src="illustrations/source-density-D1-Bradley-smoker-recipes.png" alt="Search result: Bradley Smoker, a smoker brand, publishes recipes"></figure>
<figure><img src="illustrations/source-density-D1-Bradley-no-meat-pie.png" alt="Search: site:bradleysmoker.com &quot;meat pie&quot; matches no documents"><figcaption>I checked</figcaption></figure>
</div>

Note:
French omelette: thousands of books, nailed in detail.

(Click.) Bradley meat pie: a family recipe (my family's). Few or no books. This model (gemma3, running locally) doesn't hesitate: a hearty recipe "adapted to the smoky flavor imparted by the Bradley smoker." The only Bradley it read much about is a brand of food smoker -- so it drifted to the well-documented neighbor and filled the gap with confident detail.

(Click.) I had to check: Bradley Smoker does publish recipes, and none of them is a meat pie. The fish built a plausible bridge between two things it had read about.

(Optional aside: a current model asked the same question said it had no recipe and guessed it was a family dish -- temperament varies between fish; the thin region is anatomy. Capture kept in `illustrations/source-density-D1-Bradley--refusal.png`, not on screen.)

---

# Everyday Cooking vs. Family Recipes: the map

<div class="maps two">
<figure class="map"><div data-svg="art/maps/human.svg" data-zoom="family,everyday" data-label="Cooking on your map: a home in Everyday Cooking with worn paths into Family Recipes"></div><figcaption>Your map</figcaption></figure>
<figure class="map"><div data-svg="art/maps/fish.svg" data-zoom="family,everyday" data-label="Cooking on the fish's map: Everyday Cooking complete; Family Recipes almost empty, with a mainstream house drifted in"></div><figcaption>The fish's map</figcaption></figure>
</div>

Note:
One domain, split by source density. Everyday cooking: both maps well populated -- the fish has all six landmarks. Family recipes: your map has a path if you grew up with them; the fish's has one real landmark, plus a house that isn't there (the smoker brand it drifted to).

Close the walkthrough: the errors track source-text density, not difficulty. And the map gives no sign of which regions are reliable -- so when is it safe to use at all? (Station 5.)

Fused image for the segue: an eager guide who read every travel book but never left home, navigating by a map it drew from those books. Confident, and it will never say it's unsure unless you ask.
