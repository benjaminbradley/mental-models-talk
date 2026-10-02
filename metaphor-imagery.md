# Metaphor Imagery

Comprehensive descriptions of the visual artwork depicting the talk's main metaphors
and their evolution through the stations. This is the **single source of truth** for
what each metaphor image looks like, how it changes, and what it needs to communicate.

`slides-outline.md` references this doc for image specs; `arc-table.md` tracks which
beats introduce or extend each image. This doc describes the artwork itself — what to
draw, how it differs layer to layer, what visual properties carry meaning. It does not
describe narration or slide layout (those live in `slides-outline.md`).

**Imagery status:** first pass built for stations 1-8: the goldfish and training story
(station 3), the three maps + per-case zooms (station 4), the bowl/tank progression with notes,
cat food, tubes, attachments and the MCP fittings (stations 6-8), the four-step hosting scene
(fish in a company cap and badge: part `fish-uniform`), murky water, the effect icons, wall vs.
sign (station 9), the versioned fish with a nerfed one (part `fish-face-goofy`, station 10), and
the full-treatment gradient (station 13, flagged for review); stations 1-2 use emoji/CSS.
Still to design: the citations visual (7), the review-ladder visual (12), the back-connection
interface (8). Missing items are placeholders in the deck. The `illustrations/` directory
holds candidate screencaps; metaphor artwork is SVG built from reusable parts in `deck/art/`
(decision: `open-questions-and-ideas.md` Q16; how-to: `deck/README.md` § Artwork).

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

## The goldfish (Station 3; evolves through Stations 6-10)

**Introduced:** Station 3 — the people-pleaser who has read every book, right after
the "computers can speak language" premise; the training-story origin images follow
immediately.
**Extended:** Station 6 (bowl + water/context), Station 7 (first fittings: tubes,
notepad), Station 8 (tools/agency; full tank), Station 9 (poisoned water, hosting
tiers), Station 10 (version change).

**Description:** A goldfish — the talk's primary anthropomorphic carrier for LLMs.

**Technical terms beside the metaphor:** wherever a metaphor stands for a real concept, the
real term appears on screen next to it in the shared `.term` style (yellow monospace chip;
`deck/README.md` § Conventions), e.g. the library = `training data`, reading it = `pretraining`,
the apprenticeship = `RLHF` (expanded). The metaphor carries the idea; the chip gives the
audience the word to look up.

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
- Station 3: Fish alone, introduced **awake** (no bowl, no water). Then the origin
  story: (1) the fish in reading glasses atop a tall stack of books, reading an open book
  (pretraining; the books = training data); (2) the fish in practice conversations, each
  reply scored by a green ✓ or red ✗ paddle (RLHF). Then the **sleeping** beat (asleep →
  wakes when addressed): it does nothing when you are not talking to it.
- Station 4: still the bare fish (no bowl): talking to it directly, it does not remember
  your name. Remembering the conversation is the bowl's job (station 6).
- Station 6: Fish by itself → fish in water in a basic glass bowl. Bowl = client; water =
  context; water level visible (context window). The conversation so far floats in the
  water as words/phrases, in order (each turn is added; the whole history is what the fish
  sees). No fittings yet. Instructions arrive as sticky notes on the inside of the glass
  (see "The bowl and the fish" below).
- Station 7: The first tube attaches and the fish just looks at it quizzically: it was never
  taught to use one. A third training step joins the station 3 training story (library ->
  apprenticeship -> **tool-use training**: practicing with fittings and getting feedback),
  then the fish goes back into the tank and uses the tube. Then: tubes (web search),
  notepad (memory).
- Station 8: Fish reaching through tubes (tools/agency); alarm clock and recipe cards
  attach; pull back to reveal the full tank.
- Station 9: Water turns murky/poisoned (injection). Three effect icons overlay.
- Station 10: Frontier instability: a row of fish with slight variations (fin shape, color,
  spots), each labeled with a version number; one in the middle has goofy eyes (a nerf: a
  later version that got worse at something).

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

### Prototype encoding (current choices in `tools/build-maps.mjs`)

How the properties above are drawn in the prototype (open to change):
- **Not an island:** the named regions are a highlighted patch inside a landscape that runs
  off every edge (faint region borders and out-of-focus landmarks continue outward). Water
  is local: a stretch of coast in one corner and a lake, never a surrounding sea.
- **Territory:** colored regions with hatched texture, full-color landmarks everywhere.
- **Human map:** a network of paths grown outward from home (a house in Everyday Cooking).
  Each segment is drawn once per trip that passes through it, so routes near home braid into
  well-worn trails; single strands lead out to lone landmarks (one each in Poetry, History,
  Medicine), a few trails wander off the map, and one reaches a single stretch of coast. Only
  landmarks along the paths appear. Region confidence follows path length: firm ink where
  much is walked, sketchy ink + "?" where one strand reaches, and an honest cross-hatched blank
  with "here be dragons" where none does (Law).
- **Fish map:** uniform bold ink, and a *subset* of the real landmarks at their real
  positions (missing ones = thin training data): most kept in Poetry, History, Law, Medicine,
  Everyday Cooking; few in Spatial, Counting (3 of 5 lakes), Regional Cooking, Recent Events.
  The only non-matching marks: Spatial's river on the wrong course, one mainstream house in
  Regional Cooking (drift), and two invented landmarks in Recent Events (filled from pattern).
- **Per-case images:** the same map files cropped to one region (`data-zoom`).

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
- **Letter Counting (B1):** Moved out of the walkthrough; the screencap is reused by
  the Station 8 strawberry demo, which resolves the Counting region with code
  execution.
- **Recent Events (C4):** Human map: recently walked territory (current awareness).
  Fish map: the region is filled in from pattern — the books ended before this
  territory existed. Screencap captured.
- **Everyday vs. Regional Cooking (D1):** Split region. Everyday side: both maps
  are well-populated. Regional side: human map has a path (if you grew up with
  it); fish map has sparse features drifting toward the mainstream. Screencap
  captured.

---

## The bowl and the fish (Station 6; grows into the tank through Stations 7-8; extends to 9)

**Introduced:** Station 6 — client vs. model architecture; a bare bowl holding only
water (context).
**Extended:** Station 7 (tubes, notepad), Station 8 (tubes carrying actions out;
alarm clock, recipe cards; full-tank reveal), Station 9 (poisoned water, hosting tiers).

**Growth principle:** the image grows piece by piece: fish → fish + bowl (water only)
→ fish + tank (bowl + fittings). Each fitting attaches on the beat where the room has
just felt the limitation it addresses; the full assembly is shown only at the end of
Station 8 as a recap. "Tank" is the name for the fully fitted bowl.

**Description:** The goldfish in its bowl. The fish = the model; the bowl = the
client (simple/fancy/mobile); the water = the context.

**Visual properties:**
- Bowl types: simple round bowl, fancy aquarium with features, mobile/portable tank.
  Represent different clients (basic chat, full IDE, mobile app).
- **Every fitting is a tool the fish initiates.** No arrows pointing in: the fish reaches
  out through a tube and pulls the result back itself. Tubes connect at the top, sides, or
  back of the bowl/tank; for back connections, show the interface the fish sees (what the
  tool looks like from inside the water).
- **Everything attaches to the bowl/tank**, so the water = context metaphor holds (whatever
  a fitting returns lands in the water). Fittings are tank attachments marked with an icon:
  e.g. an attachment with a notepad icon = memory (the fish's journal).
- **Instructions = sticky notes inside the glass** (station 6), introduced by a need: a
  behavior you want guided (e.g. you keep having to say the same thing). Your note on the
  inside of the tank = your custom instructions. A second note from the tank's maker = the
  provider's system instructions (you can't take it down; often you can't read it). Project
  instructions are left out as too detailed. A follow-up slide shows a Custom GPT / Gem in this
  metaphor: a tank someone else has already set up, with their notes (and documents) inside.
- **Connectors (station 8):** proprietary tools = tubes ending in custom-shaped fittings, each
  made for its own vendor's tank. MCP = one standard fitting everyone recognizes that fits any
  compatible tank. Plan: a standard threaded garden-hose coupling (familiar, and it stays in
  the water/plumbing world; an electrical plug clashes with water). The usual tagline for MCP,
  "USB-C for AI," can go in the narration.
- Fittings on the bowl (each added at its narrative beat, in this order):
  - Water = context (pourable, poisonable, has a level/surface line) — Station 6
  - Tubes = web search first (information in), then tools / MCP connectors (actions
    out) — Stations 7, 8
  - Notepad = memory (attached to the bowl) — Station 7
  - Alarm clock = scheduled/recurring tasks — Station 8
  - Recipe cards = skills / reusable playbooks — Station 8
  - Camera/ears = multimodal inputs; microphone = voice — Station 8 tank reveal only.
    Show a conversion stage between the device and the water: for the microphone, a
    transcription step (speech → text) — except native voice mode, where audio goes in
    directly. For images, the conversion is an encoder that turns pixels into the fish's own
    internal tokens (not into text) in current multimodal models; older pipelines did caption
    images to text first. Open: how to draw "converted, but not into words."

**Evolution:**
- Station 6: Bowl + fish established, water only. Diagnostic: "is it the fish or
  the bowl?" Water level visible = context window. Water can be murky (bad context
  hygiene).
- Station 7: Tubes attach (web search; citations ladder), then the notepad (memory).
- Station 8: Fish reaching through tubes = agency; the tubes let it act, not just say.
  Alarm clock and recipe cards attach. Pull back: the bowl is now a tank.
- Station 9: Water turns poisoned (injection/prompt injection): murky color plus a light
  cross-hatch (part `tank-murk`) so it doesn't rely on color alone; the page coming in through
  the tube carries a ☠️. Three overlay effects:
  destruction = ☢️ (nuke); exfiltration = ✉️ (envelope leaving through a tube); sleeper /
  incubation = 💣 (a bomb tucked into the notepad, i.e. memory).

**Detail spec:** See `slides-outline.md` for per-slide content at each station.

---

## Cat food in the water (Station 6; replaces the cooking metaphor)

**Introduced:** Station 6 — restart vs. repair. Kept inside the fishbowl metaphor (Benji,
Oct 1; replaces the salt-in-the-pot cooking image, to be confirmed once prototyped).

**Description:** Something that does not belong gets into the water: cat food. Now every
answer the fish gives has "meow" sprinkled through it. You cannot fish the cat food back out;
"please ignore the cat food" just adds more words to the water. Moving the fish to a fresh
bowl of clean water (a new chat) is easier than cleaning the old one.

**Visual properties:**
- The bowl with the conversation-so-far floating in the water (station 6 base image); cat
  food flakes added among the words.
- The fish's replies come out with "meow" interspersed.
- Two paths: (A) try to clean it (add "ignore the cat food" to the water; the flakes stay)
  vs. (B) scoop the fish into a fresh bowl with only the good words carried over.
- Makes clear: the whole history is in the water and re-read every turn, so an early
  mistake persists.

**Detail spec:** See `slides-outline.md` Station 6 for narration and slide content.

---

## The enforcement hierarchy (Station 9)

**Introduced:** Station 9 — architecture > guideline. (The middle "policy" layer is dropped
(Oct 1): too vague for this audience; the wall-vs-sign contrast carries the message.)

**Description:** A wall (architecture: the fish *cannot* reach it) vs. a "please keep out"
sign (guideline: it is asked not to). If a sign is your only protection, you have a
vulnerability, not a control. The original three-tier spec follows for reference; drop the
policy tier when building.

**Visual properties:**
- Three tiers, visually weighted by strength:
  - Architecture (strongest): "cannot reach it" — structural impossibility.
  - Policy (middle): admin rules, system-level enforcement.
  - Guideline (weakest): human discipline, best practices.
- Clear visual: if a guideline is your only protection, you have a vulnerability,
  not a control.

**Detail spec:** See `slides-outline.md` Station 9 for narration and slide content.

---

## Where does the fish live? (Station 9)

**Introduced:** Station 9 — hosting and data flow.

**Description:** The tank (client) and the fish (model) can live in different places. The
fish wears a uniform showing whose fish it is (which company or person runs the model), so it
stays identifiable when it sits apart from the tank: a cap on its head (only the brim sticks out
in front) and a name badge on its chest, below the gill (part `fish-uniform`). Slide title:
"Where does your data go?"  Revealed in four steps:
1. **Frontier (the default):** tank and fish both inside a corporate cloud, with company
   names/logos above the cloud. You are connected to it by an umbilical cord: everything you
   say to the fish travels up to their servers, and the cord can't be cut.
2. **Your tank + their fish:** your own client (on your computer) talking to a frontier
   model; the fish (in its company uniform) is still in the corporate cloud, cord still attached.
3. **Your tank + your fish in a private cloud:** the fish in a cloud with a padlock above it.
4. **Everything local:** tank and fish on a beefy-looking PC, drawn *below* the clouds, because
   the data doesn't travel as far.

**Visual properties:**
- Distance = how far your words travel; the cord's length shows it.
- Capability tends to rise toward the frontier; control rises toward local.
- An **unlocked padlock** on each cord to the frontier cloud (steps 1 and 2): whatever goes up
  it is readable on their side (credential/API-key exposure); the private cloud has a locked one.
- Short examples beside each step: BYOK / a local app + a frontier model (step 2);
  "open-source / open-weight models on hardware you control" above the private cloud (step 3);
  Ollama, LM Studio (step 4).
- Logos: plain text wordmarks of several vendors (not copied logo artwork), so no single
  company is singled out.

---

## Image index by station

Quick reference: which metaphor images appear or change at each station.

| Station | New images | Extended images |
|---------|-----------|-----------------|
| 2 | The gradient (light touch) | |
| 3 | The goldfish (awake; later sleeping/waking); training story (books; ✓/✗ paddles) | |
| 4 | Three-layer map/territory; pink-elephant conversation (HTML, no artwork) | |
| 6 | The bowl and the fish (water + floating conversation); cat food in the water | Water level (context window); sticky notes (instructions); a pre-set-up tank (Custom GPT / Gem) |
| 7 | | Quizzical fish + tool-use training step; tubes fitting (web search); notepad (memory) |
| 8 | Proprietary fittings vs. standard (MCP) coupling | Fish reaching through tubes (agency); alarm clock + recipe cards; full-tank reveal |
| 9 | Enforcement hierarchy (wall vs. sign); where the fish lives (4-step reveal) | Water turns poisoned; ☢️ ✉️ 💣 |
| 10 | | Row of fish versions (one nerfed, goofy eyes) |
| 13 | | Gradient returns (full treatment; earned wonder) |
