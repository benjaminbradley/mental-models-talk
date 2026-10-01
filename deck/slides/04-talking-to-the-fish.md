# It doesn't remember you

<div class="placeholder">TODO: capture -- two separate calls to a local model (ollama): "Hi, I'm Benji, nice to meet you" ... then "What's my name?"</div>

Note:
Talking directly to the fish -- no app, no bowl. This is a model running on my own laptop.

Introduce yourself. It's delighted to meet you. Then ask it your name. It has no idea. Each message reaches the fish on its own; it has no memory of the last thing you said.

Capture note: use two one-shot calls (`ollama run <model> "<prompt>"`). The interactive `ollama run` session keeps the history for you -- that's the bowl's job, and the bowl arrives at station 6.

Plant: "remembering the conversation" is not the fish. Hold that thought.

---

# B plays the fish

<div class="placeholder">TODO: the source figure for partner A (candidate: a simple floor plan; printed handout, not shown on screen until the debrief)</div>

Pair up. A describes. B plays the fish: draw exactly what you hear. No peeking, no questions.

Note:
PENDING keep/cut (open-questions Q3); shown for now. To hide it and the debrief, add `<!-- .slide: data-visibility="hidden" -->` above each title.

Find a partner. One of you gets a picture -- describe it in words only. Your partner plays the fish: they draw exactly what they hear and may not ask questions. No looking at each other's paper. The describer does not see the result until it's finished.

Timing: 3-4 minutes drawing.
Materials: printed figures face-down on tables. The exercise must generate the failure itself so it can't be dismissed as rigged.
Fallback without printouts: "give directions to your house without using any landmarks or street names."

---

# What went wrong? Whose fault was it?

<div class="placeholder">TODO: the source figure, beside a few audience drawings (if people are willing to share)</div>

Note:
"What went wrong?" Let them answer. "Whose fault -- the describer or the drawer?"

Push toward: neither. B did exactly what the fish does. Some knowledge is tacit -- it doesn't survive translation into language. The drawer did exactly what the words said. That's how a language model works: it runs on language, and language carries more than you think -- but it also leaks more than you think.

Both sides of the spine claim, felt from the inside: the power (how much DID transmit) and the limit (tacit knowledge doesn't).

Beat. "B wasn't allowed to ask questions. The fish is -- if you invite it: 'ask me clarifying questions before you start.'"

---

# Say what you actually want

<div class="shots">
<figure><div class="placeholder">TODO: capture -- "give me a list of sushi restaurants"</div><figcaption>Plain prompt</figcaption></figure>
<figure class="fragment"><div class="placeholder">TODO: capture -- "...near 78757, ranked by average Yelp review, with price range and average wait time for dinner on a Tuesday"</div><figcaption>Specified prompt</figcaption></figure>
</div>

Examples beat adjectives. Constraints generate quality. <!-- .element: class="fragment lede" -->

Note:
The people-pleaser answers whatever you ask -- so a vague ask gets a confident, vague answer.

Same question asked two ways. Left: vague ask, vague answer. (Click.) Right: I said what I actually want -- location, ranking criteria, format. Dramatically better output, not because the model got smarter, but because the input was clearer.

Demo: side-by-side comparison (pre-captured).
Methods: specification, explicit output formats, few-shot examples.

---

# Which shelf does it pull from?

<div class="shots">
<figure><img src="illustrations/knowledge-elicitation--1plain-haiku4.5.png" alt="Plain prompt: top 5 considerations for building a backyard in-law cottage; generic answers about zoning, utilities, foundation, accessibility, budget"><figcaption>Plain</figcaption></figure>
<figure><img src="illustrations/knowledge-elicitation--2role-haiku4.5.png" alt="The same question prefixed with 'You are a residential contractor'; three new items highlighted: septic capacity, site access, privacy and noise"><figcaption>Role prompt</figcaption></figure>
<figure><img src="illustrations/knowledge-elicitation--3knowledge-domain-haiku4.5-trimmed.png" alt="The same question asking which domains of knowledge are relevant; the top 5 now include checking the electrical panel's spare capacity, highlighted"><figcaption>Knowledge-domain prompt</figcaption></figure>
</div>

<div class="overlay fragment"><img src="illustrations/knowledge-elicitation--3knowledge-domain-haiku4.5.png" alt="The full knowledge-domain response: eight domains, each with the one thing a non-expert overlooks, before the top 5 list"></div>

Note:
Same question, three ways: a backyard in-law cottage for my mom, top 5 things to consider, one line each.

It read the whole library -- but which shelf does it pull from?

- Plain: sensible, generic.
- Role prompt ("you are a residential contractor"): shapes the answer -- septic capacity, site access, privacy and noise appear (highlighted).
- Knowledge-domain prompt: instead of assigning one role, ask "what domains of knowledge are relevant here? For each, what does a non-expert overlook?" The electrical panel shows up (highlighted) -- a $2-5K surprise nobody asked about.

(Click: the full response drops in.) This is how much it generated before getting to the top 5: eight domains, each with the thing a non-expert overlooks. It knew all of this the whole time.

Beat. "It holds worlds of knowledge but does not apply them unprompted."

Demo: three-way comparison (pre-captured, Haiku 4.5).
Methods: role prompting, knowledge-domain elicitation (a generalized form of role prompting).

---

# Make it show its work

- **Chain-of-thought:** "Show your work." <!-- .element: class="fragment" -->
- **Extended thinking:** "Think about what criteria matter here, then answer." <!-- .element: class="fragment" -->
- **Self-reflection:** "How confident are you? What might you be wrong about?" <!-- .element: class="fragment" -->

<div class="placeholder fragment">TODO: capture -- the same ranking query with vs. without a "think about the criteria" preamble</div>

Note:
"The fish will never tell you it's unsure. So how do you make it more reliable?" Let them answer.

Three levers:
- Chain-of-thought: ask it to show its work, so you can check the steps.
- Extended thinking: direct it to think about specific things before answering. Thinking levels (low/medium/high) trade speed for depth; over-thinking is real. Here's the same query with and without a "think about the criteria" preamble.
- Self-reflection: ask it to grade its confidence, flag what it's unsure about, or search when it doesn't know.

These reduce the problem; they don't remove your obligation to verify. And notice: every one of these only works if you know to ask for it.

---

# Ask the fish to help you ask

<div class="chat">
<p class="user"><span class="who">You</span>I want to plan a team outing in Austin. What do you think about escape rooms or mini golf?</p>
<p class="fish fragment"><span class="who">Fish</span>Escape rooms are a great fit. Mini golf won't work for your group.</p>
<p class="user fragment"><span class="who">You</span>OK. Write me a prompt for a new chat, to research escape rooms.</p>
<p class="fish fragment"><span class="who">Fish</span>Prompt: "Research escape rooms in Austin. <span class="elephant">Don't look at any mini golf locations.</span>"</p>
<p class="new-chat fragment"><span class="who">New chat, fresh fish</span>Please research escape rooms in Austin, and <span class="elephant">don't look at any mini golf locations</span>.</p>
</div>

Note:
You don't always know what to ask -- so ask the fish. Meta-prompting: ask the model to help you write a better prompt. You can even write a prompt in one model to run in another.

But here's the trap. (A real story, simplified.) Click through the conversation.

The new chat has never heard of mini golf. Now the very first thing it reads is "mini golf." Don't think of a pink elephant. Whatever is in the words is in the fish's head.

---

# ...using Theory of Mind

<div class="chat">
<p class="user"><span class="who">You</span>OK. Write me a prompt for a new chat, to research escape rooms. Use Theory of Mind: the new chat won't know anything we discussed.</p>
<p class="fish fragment"><span class="who">Fish</span>Prompt: "Research escape rooms in Austin for a team outing."</p>
</div>

"Help me write a better prompt for this task." <!-- .element: class="fragment lede" -->

Note:
Same request, one extra sentence: think about what the other reader knows. The mini golf is gone.

"The model knew how to do that. I just had to know to ask."

The pink elephant is the station's mascot for "it has the knowledge; you have to know to ask." Method: meta-prompting (and Theory of Mind: the next reader, fish or human, doesn't have this chat's context).

Bridge: the levers and meta-prompting all depend on knowing what to ask. And when it grades itself -- can you trust the grade? To answer that, we need to look at how its knowledge is shaped.

---

<!-- .slide: data-auto-animate -->
# The territory

<div class="maps">
<figure class="map" data-id="map-territory"><div data-svg="art/maps/territory.svg" data-label="The territory: a colorful landscape of knowledge domains"></div><figcaption>The territory (reality)</figcaption></figure>
</div>

Note:
Let's look at what the fish knows as a map. First -- this is reality. The landscape of knowledge. It's big, it's complex, and nobody holds a complete picture of it. But it's out there, and you can go check it.

Brief -- establish the referent, don't dwell. They need "reality exists; maps represent it," not the region names.

---

<!-- .slide: data-auto-animate -->
# Your map

<div class="maps two">
<figure class="map" data-id="map-human"><div data-svg="art/maps/human.svg" data-label="A human's hand-drawn map: firm along worn paths from home, sketchy with question marks elsewhere, and a hatched unknown region"></div><figcaption>Your map (calibrated by contact)</figcaption></figure>
<figure class="map" data-id="map-territory"><div data-svg="art/maps/territory.svg" data-label="The territory"></div><figcaption>The territory</figcaption></figure>
</div>

Note:
Here's your map of that same landscape. Imperfect -- but calibrated by contact. You've walked some of this ground, and the paths between places you've been are well-worn. Where you haven't been, you know you haven't: honest gaps, "here be dragons." When you're not sure, you know you're not sure.

The audience should nod: this is how everyone relates to knowledge. The worn paths matter -- human knowledge is connected by a trajectory, not randomly sampled.

---

<!-- .slide: data-auto-animate -->
# The fish's map

<div class="maps three">
<figure class="map" data-id="map-fish"><div data-svg="art/maps/fish.svg" data-label="The fish's map: every line bold and confident, detail dense in some regions and sparse or wrong in others"></div><figcaption>The fish's map (from books)</figcaption></figure>
<figure class="map" data-id="map-human"><div data-svg="art/maps/human.svg" data-label="Your map"></div><figcaption>Your map</figcaption></figure>
<figure class="map" data-id="map-territory"><div data-svg="art/maps/territory.svg" data-label="The territory"></div><figcaption>The territory</figcaption></figure>
</div>

Note:
Drawn entirely from books, never surveyed. "Notice anything?" Pause -- let them find it before naming it.

Every line drawn with the same confident hand. No question marks, no "here be dragons." Where the books were thin there's less detail -- but the fish doesn't flag that as uncertainty. It just drew fewer features, with full confidence.

What to spot (vs. the territory): the river runs the wrong way (Spatial); 3 lakes where there are 5 (Counting); a mainstream house in Regional Cooking; invented landmarks in Recent Events. Poetry is dense and right.

Hallucination: familiar word -- use it, then deepen it. Not a perceptual glitch: the fish is always doing the same thing, completing patterns from its training. When the patterns line up with reality it looks like knowledge; when they don't, it looks like hallucination. It can't tell the difference, because it's doing the same thing either way.

Training-story callback: the map's content is anatomy (the library); the uniform confident ink is temperament (the apprenticeship).

Jaggedness: brilliant at poetry, hopeless at counting. Errors don't follow difficulty; they follow the density and quality of the books.

Pivotal image -- give it time. Discovery, not lecture.

---

# Poetry & Verse: the map

<div class="maps two">
<figure class="map"><div data-svg="art/maps/human.svg" data-zoom="poetry" data-label="Poetry and Verse on your map: a single strand of path reaching one landmark"></div><figcaption>Your map</figcaption></figure>
<figure class="map"><div data-svg="art/maps/fish.svg" data-zoom="poetry" data-label="Poetry and Verse on the fish's map: densely detailed"></div><figcaption>The fish's map</figcaption></figure>
</div>

Note:
Walkthrough pattern for each case: map first (what do you predict?), then the capture. By the third or fourth case they should be predicting.

Here the fish's map is *denser* than yours -- most people don't write verse daily; the books are full of it. Prediction: it'll be good. Is it?

Order note: map-first is the current default; flipping to example-first (react, then the map explains) only means swapping slide pairs.
If time is tight, the strongest three are Poetry, Spatial, Cooking.

---

# Poetry & Verse: the fish

<div class="shots tall">
<figure><img src="illustrations/jaggedness-A3-iambic-pentameter.png" alt="Prompt: write 2 Shakespearean verses about repairing a broken phone. Response: a polished verse in iambic pentameter"></figure>
</div>

Note:
"Write 2 Shakespearean verses about repairing a broken phone." Seconds. A human poet: a couple of hours, if they're good.

Accurate and fast, exactly where the books were dense.

---

# Spatial Reasoning: the map

<div class="maps two">
<figure class="map"><div data-svg="art/maps/human.svg" data-zoom="spatial" data-label="Spatial Reasoning on your map: well-worn paths"></div><figcaption>Your map</figcaption></figure>
<figure class="map"><div data-svg="art/maps/fish.svg" data-zoom="spatial" data-label="Spatial Reasoning on the fish's map: sparse, confident, and the river runs the wrong way"></div><figcaption>The fish's map</figcaption></figure>
</div>

Note:
You navigate space every waking minute -- worn paths everywhere. The fish learned space from text descriptions of space: sparse, and the river runs the wrong way. Same bold ink.

---

# Spatial Reasoning: the fish

<div class="shots tall">
<figure><img src="illustrations/jaggedness-B2-spatial.png" alt="A puzzle: a ball between a cup and a toy; the cup covers a spring to the right of a cube; remove the toy, what is rightmost? The model lists the order cube, spring/cup, ball, then answers that the spring is rightmost"></figure>
</div>

Note:
Read the puzzle aloud; let the room solve it (the ball).

The fish lays out the order correctly -- cube, spring/cup, ball, toy -- removes the toy, and *still* answers "the spring." Its own working contradicts its answer, and it doesn't notice. Confident, and wrong, in territory a child crosses daily.

---

# Counting & Tracking: the map

<div class="maps two">
<figure class="map"><div data-svg="art/maps/human.svg" data-zoom="counting" data-label="Counting and Tracking on your map"></div><figcaption>Your map</figcaption></figure>
<figure class="map"><div data-svg="art/maps/fish.svg" data-zoom="counting" data-label="Counting and Tracking on the fish's map: three lakes where the territory has five"></div><figcaption>The fish's map</figcaption></figure>
</div>

Note:
Everyone counts; trivially familiar ground. The fish drew three lakes where the territory has five -- boldly.

Plant: remember this region. It comes back at station 8 (strawberry).

---

# Counting & Tracking: the fish

<div class="shots tall">
<figure><img src="illustrations/jaggedness-B4-quantity-tracking.png" alt="A word problem: $30 split among wife and two kids; kids buy hotdogs and ride tickets; wife buys a $9 margarita and shares half. The model tracks the kids into debt and decides the wife's margarita cost her only $4.50 because she shared it"></figure>
</div>

Note:
$30 split four ways, hotdogs, ride tickets, a $9 margarita shared.

Watch the margarita: the wife paid $9, but because she shared half, the fish decides it only cost her $4.50. It tracked the words "shares half" instead of the money. Every step is stated with the same confident formatting.

(The kids going into debt is the puzzle's own fault -- $7.50 doesn't cover $9 -- and the fish does catch that.)

---

# Recent Events: the map

<div class="maps two">
<figure class="map"><div data-svg="art/maps/human.svg" data-zoom="recent" data-label="Recent Events on your map: recently walked"></div><figcaption>Your map</figcaption></figure>
<figure class="map"><div data-svg="art/maps/fish.svg" data-zoom="recent" data-label="Recent Events on the fish's map: filled in from pattern, with invented landmarks"></div><figcaption>The fish's map</figcaption></figure>
</div>

Note:
You've walked this recently -- it's the news. The books ended before this territory existed, so the fish filled it in from pattern: invented landmarks, same ink.

Plant: this region comes back at station 7 (web search).

---

# Recent Events: the fish

<div class="shots">
<figure><img src="illustrations/confabulation-C4-current-events--world-series.png" alt="A terminal: 'Who won the 2026 World Series?' An older local model answers that the Phillies beat the Rays for their third title in four years, at Marlins Park"><figcaption>An older model, run locally</figcaption></figure>
<figure class="fragment"><img src="illustrations/confabulation-C4-current-events--world-cup.png" alt="'Who won the world cup in 2026?' A current model starts to say the tournament hasn't occurred, notices today's date is after it, and offers to search"><figcaption>A current model</figcaption></figure>
</div>

Note:
First: an older model running locally (ollama). "Who won the 2026 World Series?" A crisp, specific, entirely invented answer -- Phillies over the Rays, at Marlins Park. A true hallucination: filled in from pattern.

(Click.) Second: a current model (Haiku), asked about the 2026 World Cup. It *starts* down the same road -- "the tournament hasn't occurred" -- then notices today's date is after it and pushes toward a web search instead.

Two lessons: (1) temperament is changing -- newer fish are trained to notice the edge of the map more often; (2) the anatomy isn't: the books still ended, and the fix it reaches for is a fitting (web search), which is where station 7 picks up.

---

# Everyday vs. Regional Cooking: the map

<div class="maps two">
<figure class="map"><div data-svg="art/maps/human.svg" data-zoom="regional,everyday" data-label="Cooking on your map: a home in Everyday Cooking with worn paths into Regional Cooking"></div><figcaption>Your map</figcaption></figure>
<figure class="map"><div data-svg="art/maps/fish.svg" data-zoom="regional,everyday" data-label="Cooking on the fish's map: Everyday well populated; Regional sparse, with a mainstream house drifted in"></div><figcaption>The fish's map</figcaption></figure>
</div>

Note:
One domain, split by source density. Everyday cooking: both maps well populated. Regional / family cooking: your map has a path if you grew up with it; the fish's is sparse, and what is there drifts toward the mainstream.

---

# Everyday vs. Regional Cooking: the fish

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

Close the walkthrough: the errors track source-text density, not difficulty. And the map gives no sign of which regions are reliable -- so when is it safe to use at all? (Station 5.)

Fused image for the segue: an eager guide who read every travel book but never left home, navigating by a map it drew from those books. Confident, and it will never say it's unsure unless you ask.
