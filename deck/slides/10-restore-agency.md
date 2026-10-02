# Who decided it should refuse that?

<div class="mock dials">
<h4>Model behavior settings</h4>
<div class="dial-scale"><span></span><span>refuses</span><span>answers</span></div>
<div class="dial"><span>Hacking</span><span class="track"><span class="knob" style="left: 25%"></span></span></div>
<div class="dial"><span>Chemistry</span><span class="track"><span class="knob" style="left: 40%"></span></span></div>
<div class="dial"><span>Politics</span><span class="track"><span class="knob" style="left: 30%"></span></span></div>
<div class="dial"><span>Medical advice</span><span class="track"><span class="knob" style="left: 60%"></span></span></div>
<div class="dial"><span>Agreeing with you</span><span class="track"><span class="knob" style="left: 85%"></span></span></div>
</div>

Every dial was set by someone. <!-- .element: class="fragment lede" -->

Note:
Socratic first: "Who decided it should refuse that?" Let it hang.

There's no literal panel like this (it's a mockup), but there might as well be. Every refusal, every tone choice, every time it's too agreeable or too cautious -- those are product decisions, made by people, at a company, with commercial interests. Remember the maker's note on the glass (station 6).

(Click.) This is not a neutral oracle. It's a designed commercial artifact.

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
    <path d="M 35 190 V 40 L 55 18 L 75 40 V 190 Z M 110 190 V 40 L 130 18 L 150 40 V 190 Z M 185 190 V 40 L 205 18 L 225 40 V 190 Z"/>
  </g>
</svg>
<b>What the vendor blocked</b><span class="term">guardrails</span>
</div>
<div class="fragment">
<span class="emoji">🎭</span>
<b>What nobody designed</b><span class="term">emergent behavior</span>
</div>
</div>

Note:
Bias is not one thing -- it's four, and each has a different fix (or no fix).

(Click.) What it read: the library. What was in the training data, what was overrepresented, what was missing.

(Click.) What raters rewarded: the apprenticeship paddles. Whose preferences were those?

(Click.) What the vendor blocked: the fence. Explicit guardrails -- and whose politics decided where the line goes.

(Click.) What nobody designed: sycophancy, excessive caution, risk aversion. Emergent behavior the training produced; nobody chose it. Two masks because it can help or hurt.

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

A differently-trained model reveals your model's invisible guardrails. <!-- .element: class="fragment lede" -->

Note:
The guardrail probe. Ask a differently-trained model about something it won't touch, and the refusal is obvious to *us* -- precisely because that guardrail isn't ours.

(Click.) I checked: I ran it on my own laptop -- local, no company server in the loop -- and it still steers away. Its thinking calls Tiananmen Square "a location with limited verifiable historical information." The guardrail is in the fish itself (preference tuning / the fence), not the bowl.

(Click.) Now generalize: your own model's guardrails are invisible to you for the same reason. The cure is using more than one fish -- keep a few private test prompts and compare models.

Framing guard: the point is symmetry, not "their model is biased, ours isn't." Methods: model selection, private probes.

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
    <g class="goldfish awake" style="--fish: #f47a1f; --fish-deep: #d1520f" transform="rotate(-12 900 125)">
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
<figure class="fragment"><img src="illustrations/unstable--fable-suspended.png" alt="Post from @ClaudeDevs: 'As a result of a US government directive, we are suspending access to Claude Fable 5 for all users. You can continue to use all other Claude models.'"></figure>
<figure class="fragment"><img src="illustrations/unstable--silently-restricted-acct.png" alt="Reddit post: 'Anthropic silently restricted my paid account >> no notice, no explanation, no response to support tickets'"></figure>
</div>

Note:
The fish is someone else's fish, and it changes. (Click through the versions.) Every few months, a new one. Usually better. (v3:) Sometimes a version gets worse at the thing you relied on -- people call it a nerf.

A workflow that worked yesterday can break because the provider updated the model. You weren't asked.

(Click.) Or the fish disappears: a whole model suspended for everyone, overnight.

(Click.) Or your account changes quietly: tools stop working, no notice, no explanation.

You have no recourse. If you're building business processes on top of this, you're building on a service you don't control. A risk to name, not a problem this talk solves. It feeds "it's a product": you're a customer, not a partner.

Framing guard: same vendor as the earlier captures only because those were at hand; this applies to all of them.
