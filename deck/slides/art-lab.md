# Art lab: the goldfish

<div class="scene">
<svg viewBox="0 0 900 560" role="img" aria-label="A cartoon goldfish, asleep, that wakes up when addressed">
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
Prototype slide for the artwork approach (not part of the talk; remove from manifest.js before presenting).
Click once: the fish wakes (color, eyes, bubbles, bob).
Check from the back of the room: outline weight, colors on the projector, motion not distracting.

---

# Art lab: the bowl

<div class="scene">
<svg viewBox="0 0 1100 580" role="img" aria-label="The goldfish in a round bowl of water; the waterline is labelled as the context window">
  <use href="#bowl-back" x="0" y="10" width="600" height="560"/>
  <use href="#bowl-water" x="0" y="10" width="600" height="560"/>
  <g class="goldfish awake">
    <g class="swim">
      <use href="#fish-body" x="140" y="210" width="340" height="221"/>
      <use class="eyes-closed" href="#fish-eyes-closed" x="140" y="210" width="340" height="221"/>
      <use class="eyes-open" href="#fish-eyes-open" x="140" y="210" width="340" height="221"/>
    </g>
  </g>
  <use href="#bowl-front" x="0" y="10" width="600" height="560"/>
  <g class="fragment">
    <path d="M 520 140 L 660 140" style="stroke: var(--ink); stroke-width: 6; stroke-dasharray: 14 10"/>
    <text class="label" x="680" y="130">waterline =</text>
    <text class="label" x="680" y="182">context window</text>
  </g>
  <g class="fragment">
    <text class="label" x="680" y="330" style="fill: var(--blue)">water = context</text>
    <text class="label" x="680" y="400" style="fill: var(--orange-deep)">fish = model</text>
    <text class="label" x="680" y="470">bowl = client</text>
  </g>
</svg>
</div>

Note:
Prototype slide for the artwork approach (not part of the talk).
Parts reused from art/parts.svg: bowl-back, bowl-water, fish (awake), bowl-front. Fragments inside the SVG add labels.
Water level is driven by the --water-drop custom property (not yet exercised).
