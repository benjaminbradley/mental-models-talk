# Metaphor Imagery

Comprehensive descriptions of the visual artwork depicting the talk's main metaphors
and their evolution through the stations. This is the **single source of truth** for
what each metaphor image looks like, how it changes, and what it needs to communicate.

`slides-outline.md` references this doc for image specs; `arc-table.md` tracks which
beats introduce or extend each image. This doc describes the artwork itself — what to
draw, how it differs layer to layer, what visual properties carry meaning. It does not
describe narration or slide layout (those live in `slides-outline.md`).

**Imagery status:** all images are in design/spec phase. The `illustrations/` directory
will hold final assets once produced. Image creation approach (SVG, canvas, generated)
is tracked in `todo.md`.

---

## The gradient (Station 2; callback Station 13)

**Introduced:** Station 2 — light-touch one-liner.
**Returns:** Station 13 — full-treatment earned wonder ("the birth of magic").

**Description:** A visual that starts with a binary split (magic / not magic; wizards /
muggles) and transforms into a continuous gradient of skill refined by effort.

**Visual properties:**
- Binary split: two distinct camps, stark dividing line.
- Gradient: the line dissolves into a smooth continuum. Effort and discipline are the
  axis, not innate ability.
- Light touch at station 2 — this image is planted, not dwelt on.
- Full treatment at station 13 — the same image returns with earned weight. The
  gradient is now populated with everything the audience has learned.

**Animation:** Binary split morphs/dissolves into gradient bar.

---

## The goldfish (Station 4; evolves through Stations 6-9)

**Introduced:** Station 4 — the people-pleaser who has read every book.
**Extended:** Station 6 (bowl + fittings), Station 7 (context/water), Station 8
(agency/tools), Station 9 (poisoned water, hosting tiers), Station 10 (version change).

**Description:** A goldfish — the talk's primary anthropomorphic carrier for LLMs.

**Visual properties:**
- **Aesthetic:** Cartoon style, heavy black outline on light background; bold colors.
  Reminiscent of Red Fish Blue Fish. Expressive but simple — readable from the back
  of a room on a projector.
- **Sleeping state:** Dim, still, eyes closed. The default — the fish does nothing
  on its own.
- **Waking state:** Bright, eager, animated, eyes wide. Triggered by being addressed.
- **Character:** Eager people-pleaser. Confident expression. Not sinister, not
  stupid — earnest and well-read but ungrounded.

**Evolution through the talk:**
- Station 4: Fish alone (sleeping → waking). Establishes character.
- Station 6: Fish in the bowl. Bowl = client; water = context; fittings added.
  (See "The bowl and the fish" below.)
- Station 7: Water level visible (context window). Cooking metaphor is separate
  (see below).
- Station 8: Fish reaching through tubes (tools/agency).
- Station 9: Water turns murky/poisoned (injection). Three effect icons overlay.
- Station 10: Fish visibly changes appearance between versions (frontier instability).

---

## The three-layer map/territory (Station 4)

**Introduced:** Station 4 — three-beat reveal, the pivotal teaching image for
jaggedness and confabulation.

### Concept

Three representations of the same landscape of knowledge, revealed in sequence:
the territory (reality), a human's map, and the fish's map. The visual contrast
between the human map's honest gaps and the fish map's uniform confident strokes
is the core teaching moment.

### The territory (Layer 1 — reality)

**What it is:** The landscape of actual knowledge and capability. The referent that
maps are measured against.

**Visual treatment:** Full, vivid color. Textured, detailed, alive — clearly the
real thing, not a representation. Think illustrated aerial/topographic view.

**Labeled regions (knowledge domains):**
- Poetry & Verse
- Spatial Reasoning
- Counting & Tracking
- Recent Events
- Everyday Cooking / Regional Cooking (split region — well-documented vs. oral tradition)
- Background regions (not demoed, fill out the landscape): History, Law, Medicine

**Labeling:** Domain names only. No mechanism terms (no "jaggedness," no
"confabulation" on the visual). The narration introduces those terms; the map
speaks in domains.

**Purpose in the reveal:** Shown briefly to establish that reality exists and maps
are representations of it. Deliberately not detailed — nobody holds the true
territory.

### The human map (Layer 2 — calibrated by contact)

**What it is:** A hand-drawn map of the same territory shape. Recognizably the same
landscape, but rendered in cartographic language — pen strokes, cross-hatching,
handwritten labels.

**Visual properties:**
- **Variable ink confidence:** Firm, detailed strokes where the human has direct
  experience. Sketchy, tentative, dotted lines where experience is thinner. Visible
  question marks in uncertain areas.
- **Honest blanks:** Some regions are partially or mostly empty — the human knows
  they don't know. Classic "here be dragons" shading. The gaps are information.
- **Experience-worn paths:** The areas of high detail are connected to each other
  by clear paths — representing the human's trajectory through knowledge. The map
  reads as a journey, not random sampling. High-detail regions cluster along routes
  the human has actually walked.
- **Calibrated errors:** Where wrong, it's wrong in proportion to distance from
  direct experience. The errors make sense.

**Purpose in the reveal:** The audience nods — this is how everyone relates to
knowledge. You know what you know, you know what you don't know, and the honest
gaps are useful.

### The fish map (Layer 3 — drawn from books, never surveyed)

**What it is:** Another map of the same territory shape. Same cartographic medium
as the human map (pen strokes, labels) — but with dramatically different visual
properties.

**Visual properties:**
- **Uniform confident ink everywhere lines are drawn.** Every stroke is bold and
  assured. No sketchy regions, no question marks, no dotted lines, no "here be
  dragons" shading. Where the fish drew, it drew with full confidence.
- **Variable detail, but no self-awareness of sparsity.** Some regions have rich
  detail (many landmarks, fine contours) — where the books were dense. Other
  regions have sparser detail (fewer landmarks, simpler contours) — where source
  material was thin. But critically: the sparse regions don't signal their own
  sparsity. No uncertainty markers. The fish drew fewer features, but each feature
  is drawn with the same bold hand. The human map's sparse regions say "I haven't
  been here"; the fish map's sparse regions say nothing about themselves.
- **No experience-worn paths.** Unlike the human map, there is no connected
  trajectory of experience. Detail appears wherever books happened to be dense,
  regardless of logical connection between regions. The map reads as compiled from
  many disconnected sources, not walked.
- **Accuracy varies region to region — invisible from the map itself.** Comparing
  to the territory: Poetry & Verse is remarkably accurate (dense, high-quality
  sources). Spatial Reasoning is confident but wrong (poorly represented in text).
  Recent Events is filled in from pattern, not knowledge (post-dates the books).
  Regional Cooking drifts toward mainstream (thin oral-tradition coverage).
  Everyday Cooking is solid (well-documented). Counting & Tracking has errors in
  areas that seem trivially easy to humans.

**Purpose in the reveal:** The audience sees the problem — confidence without
calibration. The errors don't follow a difficulty gradient; they follow source-text
density. And the map itself gives no indication of which regions are reliable.

### Slide layout — three-beat reveal + per-case walkthrough

**Slide 1 (territory):** Territory centered. Establishes the referent.

**Slide 2 (human map):** Territory slides right; human map appears left.
Side-by-side comparison. The audience sees how a human's map simplifies and
gaps the territory, but honestly.

**Slide 3 (fish map):** Human map slides right; fish map appears left. All three
visible: fish map | human map | territory. The audience compares all three —
the fish map's confident-everywhere ink vs. the human map's honest gaps vs. the
actual territory.

**Slides 4+ (per-case walkthrough):** After the three-map reveal, walk through
individual regions. For each case, two beats:
- **Map comparison:** Zoomed/highlighted view of the region on both maps —
  how do the human and fish maps differ here?
- **Example screencap:** Pre-captured screenshot demonstrating the case.

Open question: whether to show the map comparison first (predict) or the example
first (surprise), then the map (explain). Both orderings teach; the choice
depends on the energy of the room and whether we want the audience predicting
or reacting.

### Per-case walkthrough (after the three-map reveal)

After the audience has seen all three layers, walk through individual regions
one at a time. For each case: show the region's "path" on both maps (how the
human and fish maps differ in that area), then show a captured example
(screencap with generation context).

Each case needs two image assets:
1. **Map comparison:** A zoomed/highlighted view of the region on the human map
   vs. the fish map — showing how detail, confidence, and paths differ there.
2. **Example screencap:** Pre-captured screenshot demonstrating the case.
   (Screencaps are stored in `illustrations/`.)

**Cases and their map treatments:**

- **Poetry & Verse (A3):** Fish map is *more* densely populated than the human map
  in this region. The fish drew rich, detailed terrain here — and it's accurate.
  Human map may be sparser (most people don't write poetry daily). Example shows
  generation quality + speed contrast (~5 sec for fish vs. ~2 hours for a human).
- **Spatial Reasoning (B2):** Human map has a well-worn path through this region
  (people navigate space constantly). Fish map has sparse, confident-but-wrong
  features. Screencap captured.
- **Counting & Tracking (B4):** Human map: trivially familiar territory (everyone
  counts). Fish map: confident features that don't match the territory. Screencap
  captured.
- **Letter Counting (B1, maybe):** Similar to B4. May overlap with Station 6
  strawberry hook. Screencap captured.
- **Recent Events (C4):** Human map: recently walked territory (current awareness).
  Fish map: the region is filled in from pattern — the books ended before this
  territory existed. Screencap captured.
- **Everyday vs. Regional Cooking (D1):** Split region. Everyday side: both maps
  are well-populated. Regional side: human map has a path (if you grew up with
  it); fish map has sparse features drifting toward the mainstream. Screencap
  captured.

---

## The bowl and the fish (Station 6; extends through Stations 7-9)

**Introduced:** Station 6 — client vs. model architecture.
**Extended:** Station 6 (fittings catalog), Station 7 (water level = context window),
Station 8 (fish reaching through tubes), Station 9 (poisoned water, hosting tiers).

**Description:** The goldfish in its bowl. The fish = the model; the bowl = the
client (simple/fancy/mobile); the water = the context.

**Visual properties:**
- Bowl types: simple round bowl, fancy aquarium with features, mobile/portable tank.
  Represent different clients (basic chat, full IDE, mobile app).
- Fittings on the bowl (each added at its narrative beat):
  - Water = context (pourable, poisonable, has a level/surface line)
  - Notepad = memory (attached to the bowl)
  - Camera/ears = multimodal inputs
  - Tubes = tools / MCP connectors (reach outside the bowl)
  - Alarm clock = scheduled/recurring tasks
  - Recipe cards = skills / reusable playbooks

**Evolution:**
- Station 6: Bowl + fish established. Fittings added one by one. Diagnostic: "is
  it the fish or the bowl?" Citations ladder uses the tubes fitting.
- Station 7: Water level visible = context window. Water can be murky (bad context
  hygiene).
- Station 8: Fish reaching through tubes = agency. The tubes let it act, not just say.
- Station 9: Water turns poisoned (injection/prompt injection). Three overlay effects:
  destruction, exfiltration, sleeper/incubation via memory.

**Detail spec:** See `slides-outline.md` for per-slide content at each station.

---

## The cooking metaphor (Station 7)

**Introduced:** Station 7 — restart vs. repair.

**Description:** Standalone metaphor (not part of the fish/bowl system). You decide
the ingredients; the model does the cooking. If you add salt instead of sugar, you
cannot remove the salt — it's in the dish now.

**Visual properties:**
- A pot/pan with ingredients being added.
- Salt shaker accident — salt visibly in the food.
- Two paths shown: (A) try to fix the salty dish (add more, compensate — the
  salt is still there) vs. (B) start a fresh dish with the right ingredients.
- Visual makes clear: the entire conversation history is re-read every turn, so
  a mistake early on persists.

**Detail spec:** See `slides-outline.md` Station 7 for narration and slide content.

---

## The enforcement hierarchy (Station 9)

**Introduced:** Station 9 — architecture > policy > guideline.

**Description:** A three-tier diagram showing the strength of different controls.

**Visual properties:**
- Three tiers, visually weighted by strength:
  - Architecture (strongest): "cannot reach it" — structural impossibility.
  - Policy (middle): admin rules, system-level enforcement.
  - Guideline (weakest): human discipline, best practices.
- Clear visual: if a guideline is your only protection, you have a vulnerability,
  not a control.

**Detail spec:** See `slides-outline.md` Station 9 for narration and slide content.

---

## Three-tier hosting diagram (Station 9)

**Introduced:** Station 9 — "where does the fish live?"

**Description:** Data-flow diagram showing three hosting tiers: local (your computer)
→ private cloud/VPS (your server) → frontier cloud (vendor infrastructure). Each
trades capability for data control.

**Visual properties:**
- Three tiers arranged as a data-flow, left to right or bottom to top.
- Capability increases toward frontier; data control increases toward local.
- Credential/API key exposure marked at the frontier tier.

**Detail spec:** See `slides-outline.md` Station 9 for narration and slide content.

---

## Image index by station

Quick reference: which metaphor images appear or change at each station.

| Station | New images | Extended images |
|---------|-----------|-----------------|
| 2 | The gradient (light touch) | |
| 4 | The goldfish (sleeping/waking); Three-layer map/territory; Temperament origin story | |
| 6 | The bowl and the fish | Fittings added to bowl |
| 7 | The cooking metaphor (salt in the water) | Water level in bowl (context window) |
| 8 | | Fish reaching through tubes (agency) |
| 9 | Enforcement hierarchy; Three-tier hosting | Water turns poisoned; effect icons |
| 10 | | Fish changes appearance (version instability) |
| 13 | | Gradient returns (full treatment; earned wonder) |
