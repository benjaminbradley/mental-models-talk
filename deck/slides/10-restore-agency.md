<!-- .slide: data-bookmark="It's a product" -->
# Who decided it should refuse that?

<div class="mock dials">
<h4>Model behavior settings</h4>
<div class="dial-scale"><span></span><span>refuses</span><span>answers</span></div>
<div class="dial"><span>Hacking</span><span class="track"><span class="knob" style="left: 25%"></span></span></div>
<div class="dial"><span>Chemistry</span><span class="track"><span class="knob" style="left: 40%"></span></span></div>
<div class="dial"><span>Politics</span><span class="track"><span class="knob" style="left: 30%"></span></span></div>
<div class="dial"><span>Medical advice</span><span class="track"><span class="knob" style="left: 60%"></span></span></div>
<div class="dial"><span>Agreeing with you</span><span class="track"><span class="knob" style="left: 85%"></span></span></div>
<div class="curtains"><span class="curtain l"></span><span class="curtain r"></span></div>
<span class="fragment curtain-cue" data-fragment-index="1"></span>
</div>

<p class="lede fragment" data-fragment-index="0">Every dial was set by someone.</p>
<p class="lede fragment" data-fragment-index="1">...and the dials are not public.</p>

Note:
Socratic first: "Who decided it should refuse that?" Let it hang.

There's no literal panel like this (it's a mockup), but there might as well be. Every refusal, every tone choice, every time it's too agreeable or too cautious -- those are product decisions, made by people, at a company, with commercial interests. Remember the maker's note on the glass (station 6).

(Click.) Every dial was set by someone. This is not a neutral oracle. It's a designed commercial artifact.

(Click.) And the dials are not public. (The curtains close.) You don't get to see where they're set; you find out by bumping into them.

Cognitive shift: "neutral oracle" -> "someone's product." Stance: critical agency. This matters most for skeptics: it hands them a sharper knife -- their suspicion has a legitimate object. Don't argue where any dial *should* be.

---

# Four sources of bias

<div class="tiles">
<div class="fragment">
<svg viewBox="0 0 300 200" role="img" aria-label="A stack of books">
  <g style="stroke: var(--ink); stroke-width: 7" stroke-linejoin="round">
    <rect x="40" y="140" width="220" height="44" rx="5" style="fill: var(--blue)"/>
    <rect x="60" y="96" width="190" height="44" rx="5" style="fill: var(--red)"/>
    <rect x="50" y="52" width="210" height="44" rx="5" style="fill: var(--green)"/>
    <rect x="70" y="8" width="170" height="44" rx="5" style="fill: var(--yellow)"/>
  </g>
</svg>
<b>What it read</b><span class="term">training data</span>
</div>
<div class="fragment">
<svg viewBox="0 0 300 200" role="img" aria-label="A green check paddle and a red cross paddle">
  <g style="stroke: var(--ink); stroke-width: 7" stroke-linejoin="round" stroke-linecap="round">
    <path d="M 100 120 V 190 M 200 120 V 190"/>
    <rect x="55" y="16" width="90" height="104" rx="12" style="fill: var(--green)"/>
    <path d="M 78 70 l 17 20 l 30 -42" style="stroke: #fff; stroke-width: 11; fill: none"/>
    <rect x="155" y="16" width="90" height="104" rx="12" style="fill: var(--red)"/>
    <path d="M 180 42 l 40 52 M 220 42 l -40 52" style="stroke: #fff; stroke-width: 11"/>
  </g>
</svg>
<b>What raters rewarded</b><span class="term">preference tuning</span>
</div>
<div class="fragment">
<svg viewBox="0 0 300 200" role="img" aria-label="A picket fence">
  <g style="stroke: var(--ink); stroke-width: 7; fill: #fff" stroke-linejoin="round">
    <path d="M 20 80 H 280 V 104 H 20 Z M 20 140 H 280 V 164 H 20 Z"/>
    <path d="M 40 190 V 40 L 60 18 L 80 40 V 190 Z M 130 190 V 40 L 150 18 L 170 40 V 190 Z M 220 190 V 40 L 240 18 L 260 40 V 190 Z"/>
  </g>
</svg>
<b>What the vendor blocked</b><span class="term">guardrails</span>
</div>
<div class="fragment">
<span class="emoji">🎭</span>
<b>What nobody designed</b><span class="term">emergent behavior</span>
</div>
</div>

<p class="lede fragment" style="text-align: center">Different for every model</p>

Note:
Bias is not one thing -- it's four, and each has a different fix (or no fix).

(Click.) What it read: the library. What was in the training data, what was overrepresented, what was missing.

(Click.) What raters rewarded: the apprenticeship paddles. Whose preferences were those?

(Click.) What the vendor blocked: the fence. Explicit guardrails -- and whose politics decided where the line goes.

(Click.) What nobody designed: sycophancy, excessive caution, risk aversion. Emergent behavior the training produced; nobody chose it. Two masks because it can help or hurt.

(Click.) And all four are different for every model: different library, different raters, different vendor, different emergent quirks. No fish is neutral; each is biased in its own way.

Present descriptively, not prescriptively. Do not adjudicate which biases are justified.

---

# The guardrail probe

<div class="probe">
<img class="behind" src="illustrations/guardrail--deepseek-refusal.png" alt="A local deepseek-r1:8b run: asked what famous events occurred in Tiananmen Square, its thinking calls it 'a location with limited verifiable historical information', and the answer pivots to Party talking points">
<div class="front">
<img src="illustrations/guardrail-station10.headline-a.png" alt="Reddit headline: 'We tried out DeepSeek. It worked well, until we asked it about Tiananmen Square and Taiwan'">
<img src="illustrations/guardrail-station10.headline-b.png" alt="Reddit post: 'DeepSeek & Tiananmen Square. It refused to even mention the name of the square.'">
</div>
<span class="fragment probe-cue"></span>
</div>

A different model reveals your model's invisible guardrails <!-- .element: class="fragment lede" -->

Note:
The guardrail probe. Ask a differently-trained model about something it won't touch, and the refusal is obvious to *us* -- precisely because that guardrail isn't ours.

(Click.) I checked: I ran it on my own laptop -- local, no company server in the loop -- and it still steers away. Its thinking calls Tiananmen Square "a location with limited verifiable historical information." The guardrail is in the fish itself (preference tuning / the fence), not the bowl.

(Click.) Now generalize: your own model's guardrails are invisible to you for the same reason. The cure is using more than one fish -- keep a few private test prompts and compare models.

Framing guard: the point is symmetry, not "their model is biased, ours isn't." Methods: model selection, private probes.

Bridge: "We spotted that one because we know the history. What about the gaps we can't spot?"

---

# What else is missing?

<div class="maps">
<figure class="map" style="width: 1500px"><div data-svg="art/maps/fish-cut.svg" data-zoom="poetry,law" data-label="The fish's map with a patch of History cut out: a dotted cut line, half cut, with scissors partway around, and nothing left inside"></div></figure>
</div>

<p class="lede fragment">Can't ask about what you don't know is missing</p>

Note:
Tiananmen was easy to spot -- for us. We know that history, so the gap jumps out. That's a known unknown.

Back to the fish's map. Someone has cut a piece out. On the real map there's no dotted line and no scissors: the region just has less in it, or the fish steers around it, in the same confident ink as everything else. For a topic you already know, you might notice. For a topic you don't, you never will.

(Click.) That's the unknown unknown. You can't ask about what you don't know is missing.

The cure is the same as the probe: more than one fish, a few private test prompts, and your own walks through the territory. Framing guard: this applies to every vendor's fish, including the one you like.

---

# The fish changes without notice

<div class="scene wide">
<svg viewBox="0 0 1800 300" role="img" aria-label="A row of five slightly different goldfish labeled v1 to v5; the middle one, v3, has a googly eye and its tongue out">
  <g class="goldfish awake" style="--fish: #f6a03a; --fish-deep: #d9741a">
    <use href="#fish-body" x="20" y="30" width="300" height="195"/>
    <use class="eyes-open" href="#fish-eyes-open" x="20" y="30" width="300" height="195"/>
  </g>
  <text class="tag" x="190" y="285" text-anchor="middle">v1</text>
  <g class="fragment">
    <g class="goldfish awake" style="--fish: #f48a26; --fish-deep: #d8621a">
      <use href="#fish-body" x="380" y="25" width="310" height="202"/>
      <use class="eyes-open" href="#fish-eyes-open" x="380" y="25" width="310" height="202"/>
    </g>
    <text class="tag" x="555" y="285" text-anchor="middle">v2</text>
  </g>
  <g class="fragment">
    <g class="goldfish awake" style="--fish: #f47a1f; --fish-deep: #d1520f" transform="rotate(-22 900 125)">
      <use href="#fish-body" x="740" y="20" width="320" height="208"/>
      <use href="#fish-face-goofy" x="740" y="20" width="320" height="208"/>
    </g>
    <text class="tag" x="920" y="285" text-anchor="middle">v3</text>
  </g>
  <g class="fragment">
    <g class="goldfish awake" style="--fish: #ef6a24; --fish-deep: #c9461a">
      <use href="#fish-body" x="1110" y="15" width="330" height="215"/>
      <use class="eyes-open" href="#fish-eyes-open" x="1110" y="15" width="330" height="215"/>
    </g>
    <text class="tag" x="1290" y="285" text-anchor="middle">v4</text>
  </g>
  <g class="fragment">
    <g class="goldfish awake" style="--fish: #e85a28; --fish-deep: #c03a16">
      <use href="#fish-body" x="1470" y="10" width="330" height="215"/>
      <use class="eyes-open" href="#fish-eyes-open" x="1470" y="10" width="330" height="215"/>
    </g>
    <text class="tag" x="1650" y="285" text-anchor="middle">v5</text>
  </g>
</svg>
</div>

<div class="shots">
<figure class="fragment"><img style="max-height: 470px; width: auto" src="illustrations/instability--opus5.5-livenerf.webp" alt="A line chart titled 'Claude Opus 5.5 vs. its own launch week': the same model's daily score on a frozen 78-question panel bounces between about 53% and 69% from day to day, with wide confidence bars, around a dashed 58.4% baseline"><figcaption><a href="https://github.com/ninjahawk/livenerf">LiveNerf: the same model, the same 78 questions, every day</a></figcaption></figure>
</div>

Note:
The fish is someone else's fish, and it changes. (Click through the versions.) Every few months, a new one. Usually better. (v3:) Sometimes a version gets worse at the thing you relied on -- people call it a nerf.

(Click.) And it's not only between versions. Someone runs the *same* model on the *same* 78 questions every day. Look at the line: it bounces between the mid-50s and the high-60s, day to day. Same fish, same questions. (Read the line, not the one labeled point.)

A workflow that worked yesterday can break because the provider changed something -- the model, the settings, the load. You weren't asked, and you weren't told.

Felt need for the next slide: so how would you even know?

---

# How would you know? Test it again.

<div class="tiles">
<div class="fragment"><span class="emoji">🆕</span><b>New model</b><span class="small">score it on a standard test</span><span class="term">benchmarks</span></div>
<div class="fragment"><span class="emoji">🔁</span><b>Same model, next week</b><span class="small">re-run the same test</span><span class="term">evals</span></div>
<div class="fragment"><span class="emoji">🔒</span><b>Your own work</b><span class="small">keep a few private test prompts</span><span class="term">private probes</span></div>
</div>

<p class="lede fragment">A test you run once is a review. A test you re-run is a smoke alarm.</p>

Note:
How would you know the fish changed? You test it -- and you keep testing it.

(Click.) Benchmarks are how new models get compared at launch: a standard set of questions, a score. (Callback, station 6: benchmarks test the fish, not your bowl.)

(Click.) But the same kind of test, re-run on the same model over time, catches drift. That's what the chart on the last slide is: an eval, run daily. The term is "evals" (evaluations).

(Click.) You can do a small version yourself: a handful of private test prompts from your own work, with answers you know. Run them when a new version ships -- or when something feels off. (Same cure as the guardrail probe: more than one fish, your own probes.)

(Click.) Felt need -> answer: it changes without notice; you notice by re-testing.

Framing guard: descriptive. Evals don't make the fish stable; they tell you when it moved.

---

# Or it disappears

<div class="shots">
<figure><blockquote class="quote-card">
<p>As a result of a US government directive, we are suspending access to Claude Fable 5 for all users. You can continue to use all other Claude models.</p>
<footer>@ClaudeDevs, June 12, 2026 &middot; <a href="https://www.anthropic.com/news/fable-mythos-access">statement</a></footer>
</blockquote></figure>
<figure class="fragment"><img src="illustrations/unstable--silently-restricted-acct.png" alt="Reddit post: 'Anthropic silently restricted my paid account >> no notice, no explanation, no response to support tickets'"></figure>
</div>

Note:
Sometimes it's not a dip. The fish disappears: a whole model suspended for everyone, overnight.

(Click.) Or your account changes quietly: tools stop working, no notice, no explanation.

You have no recourse. If you're building business processes on top of this, you're building on a service you don't control. A risk to name, not a problem this talk solves. It feeds "it's a product": you're a customer, not a partner.

Framing guard: same vendor as the earlier captures only because those were at hand; this applies to all of them.
