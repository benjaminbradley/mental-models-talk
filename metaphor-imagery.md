# Metaphor Imagery

The talk's visual vocabulary: what each metaphor image stands for, the rules that hold
wherever it appears, and which station introduces or changes it. How a given slide
composes these images lives in `deck/slides/`; how to build them (SVG parts, tokens,
fragments) in `deck/README.md` § Artwork; the map encoding in `tools/build-maps.mjs`.
Artwork approach: `open-questions-and-ideas.md` Q16.

## Rules for all artwork

- **Nothing ambiguous or purely decorative.** The audience may read any visual element as
  part of the metaphor.
- **The real term beside the metaphor.** Wherever a metaphor stands for a real concept, the
  technical term appears next to it as a term chip (e.g. the library = `training data`). The
  metaphor carries the idea; the chip gives the audience the word to look up.
- **Aesthetic:** cartoon style, heavy black outline, bold colors, simple shapes; readable
  from the back of a room on a projector.
- **Original designs only;** nothing borrowed from a famous character.

## The vocabulary

| Image | Stands for | Introduced |
|---|---|---|
| Binary split -> gradient | magic as a caste vs. skill refined by effort | 2 (light touch); full treatment 13 |
| The goldfish | the model: a well-read, eager people-pleaser with no lived experience | 3 |
| Library of books; reading | training data; pretraining (anatomy) | 3 |
| Practice conversations scored with check/cross paddles | post-training / RLHF (temperament) | 3 |
| Fish asleep / awake | it does nothing until addressed | 3 |
| The lazy genie | a vague wish granted to the letter, cheapest way | 4 |
| Brain with specialist hubs, all but language fading | the fish learned from language alone | 4 |
| Territory / your map / the fish's map | knowledge itself / calibrated human knowledge / the model's knowledge | 4 |
| The bowl | the client | 6 |
| The water; its level | the context; the context window | 6 |
| Words floating in the water | the conversation so far, all re-read each turn | 6 |
| Sticky notes inside the glass | instructions: yours (custom), the maker's (system) | 6 |
| A tank someone else set up | Custom GPT / Gem | 6 |
| Cat food in the water | something in the context that cannot be taken back out | 6 |
| Tube | a tool (the on-screen word is always "tool") | 7 |
| Tool-use training (third training step) | tool use is itself trained | 7 |
| Notepad | memory (the fish writes it) | 7 |
| Alarm clock | scheduled tasks | 8 |
| Recipe cards | skills / reusable playbooks | 8 |
| Camera/ears, microphone | multimodal input, voice | 8 |
| The tank | the client with all its tools | 8 |
| Custom-shaped vs. standard fittings | provider tools vs. MCP | 8 (hidden) |
| Clouds, cords, padlocks, a fish in a uniform | where client and model live; whose fish it is | 9 |
| Murky water | injected / poisoned context | 9 |
| Effect icons | destruction, exfiltration, sleeper (in the notepad) | 9 |
| Wall vs. "please keep out" sign | architecture vs. guideline | 9 |
| Curtained dials | product decisions that are not public | 10 |
| Fish map with a piece cut out | unknown unknowns | 10 |
| Row of versioned fish, one nerfed | frontier instability | 10 |

## The gradient (stations 2, 13)

A binary split (wizards vs. muggles) dissolves into a continuous gradient; effort and
discipline are the axis, not innate ability. Planted lightly at station 2; returns at
station 13 with earned weight, populated with what the audience has learned.

## The goldfish (station 3; through station 10)

The talk's primary anthropomorphic carrier for LLMs. Earnest, confident, well-read but
ungrounded: not sinister, not stupid. **Asleep** is its default (dim, still, eyes closed);
**awake** only when addressed (bright, eager).

Evolution: introduced awake, alone (no bowl). The training story shows how it got this
way: reading the library, then an apprenticeship of scored conversations; station 7 adds a
third step, tool-use training. Station 6 puts it in the bowl; stations 7-8 grow the bowl
into a tank; station 9 poisons its water and asks where it lives; station 10 shows it
changing between versions, including a version that got worse at something.

## The map and the territory (station 4; callback station 10)

Three representations of the same landscape of knowledge. The contrast between the human
map's honest gaps and the fish map's uniform confident strokes is the core teaching moment
for jaggedness and confabulation. Never more than two maps on screen at once.

- **The territory:** reality, the referent maps are measured against. Vivid and alive,
  clearly the real thing, but deliberately not detailed (nobody holds the true territory).
  Labeled by knowledge domain only, never by mechanism ("jaggedness" is narration, not a
  label).
- **The human map:** the same landscape in cartographic ink, calibrated by contact. Firm
  where experience is direct, sketchy and questioning where it is thin, honest blanks
  ("here be dragons") where it is absent. Detail clusters along paths actually walked, so it
  reads as a journey. Its errors grow with distance from experience, so they make sense.
- **The fish map:** drawn from books, never surveyed. Uniform confident ink everywhere it
  drew; sparse regions do not signal their sparsity; no paths connect its detail, because
  detail follows where the books were dense, not where anyone walked. Its accuracy varies
  region to region and is invisible from the map itself.

Focus regions and what each shows on the fish map: **Poetry & Verse** (accurate; dense
sources), **Counting & Tracking** (errors where humans find it trivial), **Spatial
Reasoning** (confident but wrong; poorly represented in text), **Everyday Cooking** (solid)
vs. **Family Recipes** (drifts toward the mainstream; oral tradition), **Recent Events**
(filled in from pattern; post-dates the books). Background regions (History, Law,
Medicine) fill out the landscape. Counting and Recent Events return as the felt limits
for code execution (station 8) and web search (station 7).

## The bowl and the tank (station 6; grows through stations 7-8; extends to 9)

The image grows piece by piece: fish -> fish + bowl (water only) -> fish + tank. Each
attachment arrives on the beat where the room has just felt the limit it addresses; the
full assembly appears only as the station 8 recap.

- **Bowl = client.** Different bowls are different clients around the same fish (simple
  chat, full workspace, phone). Diagnostic: "is that the fish or the bowl?"
- **Water = context.** It has a visible level (the context window); what is submerged
  exists to the fish, what is above does not. Everything that reaches the fish arrives in
  the water, including whatever a tool returns.
- **Sticky notes = instructions,** introduced by a need (a behavior you keep re-asking for).
  Your note = custom instructions; the maker's note = system instructions (you cannot take
  it down and often cannot read it). The fish only reads these; it writes the notepad.
- **Tubes = tools.** The fish initiates every one: no arrows pointing in; it reaches out and
  pulls the result back. Every attachment (notepad, alarm clock, recipe cards, camera,
  microphone, web, email, files) connects through a tube into the tank, so the
  water-is-context rule holds. Station 7: tubes bring information in; station 8: they carry
  actions out.
- **Camera/ears and microphone** show a conversion stage between the device and the water:
  speech is transcribed to text, except in native voice mode (audio goes in directly);
  images are encoded into the model's own internal representation, not into words.
- **Provider tools vs. MCP** (hidden): custom-shaped fittings that fit only their own
  vendor's tank vs. one standard fitting that fits any compatible tank. Stays in the
  water/plumbing world (a hose coupling, not an electrical plug).

## Cat food in the water (station 6)

Something that does not belong gets into the water and stays: every later answer is
flavored by it. You cannot fish it back out, and "please ignore the cat food" only adds more
words to the water. Moving the fish to a fresh bowl with only the good words carried over
(a new chat) beats cleaning the old one. The whole history is re-read every turn, so an
early mistake persists.

## Poisoned water (station 9)

Material arriving through a tube carries an instruction, and the water turns murky (color
plus a texture, so it does not rely on color alone). The fish cheerfully complies; it
cannot tell the instruction apart from yours. Three effects overlay the poisoned water:
destruction, exfiltration (something leaving through a tube), and a sleeper planted in the
notepad (memory) that fires in a later conversation.

## Where does the fish live? (station 9)

The tank (client) and the fish (model) can live in different places, revealed in four steps
from the frontier cloud (both on the vendor's servers) to everything on your own computer.

- **Distance = how far your words travel;** the cord to the frontier cloud cannot be cut.
  Capability tends to rise toward the frontier, control toward local.
- **The fish wears a uniform** (cap and badge) showing whose fish it is, so it stays
  identifiable when it sits apart from the tank.
- **Padlocks:** unlocked on the cords to the frontier (whatever goes up is readable on their
  side, including credentials); locked on the private cloud.
- **Vendors as plain text names,** several at once, so no single company is singled out.

## The enforcement hierarchy (station 9)

A wall (architecture: the fish *cannot* reach it) vs. a "please keep out" sign (guideline:
it is asked not to). If a sign is your only protection, you have a vulnerability, not a
control.

## Smaller images

- **The lazy genie (station 4):** a cousin of the fish who grants wishes to the letter with
  the least effort; the wish is granted exactly, with a hidden cost. An original design,
  nothing borrowed from a famous film genie.
- **The brain (station 4):** a simplified brain with rough specialist hubs, colored to match
  the map regions; everything but language fades. A simplification, and said so.
- **The autocomplete analogy (station 9):** what people type comes back to everyone; beside
  it, the training-data toggle ("a promise, not a wall").
- **The curtained dials (station 10):** refusal dials in a settings panel; curtains close
  over the controls but the labels stay visible (you know the dials exist, not where they
  are set).

## Image index by station

| Station | New images | Extended images |
|---------|-----------|-----------------|
| 2 | The gradient (light touch) | |
| 3 | The goldfish (awake, asleep); training story (library; scored conversations) | |
| 4 | The lazy genie; the brain; territory and two maps | |
| 6 | The bowl and water; sticky notes; a pre-set-up tank; cat food | The bare fish forgetting each exchange; water level; techniques drawn in the water |
| 7 | Tools | Tool-use training step; first tubes; notepad |
| 8 | (Provider vs. MCP fittings: hidden) | Tubes carrying actions out; alarm clock, recipe cards; the full tank |
| 9 | Where the fish lives; wall vs. sign; autocomplete | Poisoned water; effect icons |
| 10 | Curtained dials | Cut-out fish map; versioned fish |
| 13 | | The gradient returns (full treatment) |
