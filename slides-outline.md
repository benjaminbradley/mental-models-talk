# Slides Outline

Per-slide content descriptions. Each entry describes what the audience sees, reads,
hears (narration), and speaker notes. Organized by station; slide numbering is
deferred until the deck is assembled.

Visual language and slide tech (HTML/CSS, presenter view, etc.) are tracked in
`open-questions-and-ideas.md` (Q8). Metaphor artwork specs (what each image looks
like and how it evolves) live in `metaphor-imagery.md`; this doc describes per-slide
*content and narration*. Final visual design is a later pass.

**Slide field conventions:**
- **Visual:** What the audience sees on screen -- imagery, layout, animation.
- **Text:** Words visible on the slide itself (titles, bullets, labels).
- **Narration:** What the speaker says out loud (not a script; key phrases and beats).
- **Notes:** Speaker notes -- tone guidance, socratic questions, timing, purpose
  (only when it would not be obvious from context).

---

## Pre-talk

### Slide: Arrival / Welcome

**Visual:** Talk title, speaker name and affiliation, large QR code linking to
the anonymous entry survey. Clean layout; QR code dominates the right half.

**Text, Narration, Notes:** moved to `deck/slides/00-pre-talk.md` (SSOT for on-screen text and speaker notes).

---

## Station 1 - Disarm + Acknowledge

### Slide: The real problems

**Visual:** A sequence of images representing real harms -- data centers, water
usage, labor displacement, training-data provenance, concentration of power.
Images appear one by one, then slide together into a box that closes and is set
aside (acknowledged, not dismissed).

**Animation:** Each image drops in on a beat. After the last, they compress into
a closed box that remains visible in the corner as a persistent reminder.

**Text, Narration, Notes:** moved to `deck/slides/01-disarm.md` (SSOT for on-screen text and speaker notes).

### Slide: The contract

**Visual:** Clean text slide, minimal imagery. Three statements revealed in
sequence.

**Text, Narration, Notes:** moved to `deck/slides/01-disarm.md` (SSOT for on-screen text and speaker notes).

---

## Station 2 - Demystify: the gradient

### Slide: Technology is a learnable form of magic

**Visual:** *(new)* A visual that starts with a binary split (magic / not magic,
wizards / muggles) and transforms into a continuous gradient of skill refined by
effort. Light touch -- this image returns in full treatment at station 13.

**Animation:** Binary split morphs or dissolves into a gradient bar. Emoji people: a cluster of
regular people at the muggle end and wizards at the other; after the dissolve, people are
dotted along the whole bar, almost all wizards (varied), only a few regular at the far left.

**Text, Narration, Notes:** moved to `deck/slides/02-demystify.md` (SSOT for on-screen text and speaker notes).

---

## Station 3 - Meet the fish

### Slide: Who learns whose language?

**Visual:** *(illustrate)* Two rows. Then: a person speaks binary to a computer (strict,
only numbers). Now (fragment): a computer speaks to a person in pictures of ideas (loose;
ideas, philosophy, feelings).

**Text, Narration, Notes:** moved to `deck/slides/03-meet-the-fish.md` (SSOT for on-screen text and speaker notes).

### Slide: Computers can understand and speak language

**Visual:** *(illustrate)* Then vs. now poetry: a computer's bad poem (~2020) vs. the first
AI-generated poem to bring a tear to Benji's eye (😢, linked to the published Reddit comment).

**Text, Narration, Notes:** moved to `deck/slides/03-meet-the-fish.md` (SSOT for on-screen text and speaker notes).

### Slide: The goldfish

**Visual:** *(new)* The goldfish, awake -- a people-pleaser, eager, fluent, and
unanchored. No bowl yet.

**Text, Narration, Notes:** moved to `deck/slides/03-meet-the-fish.md` (SSOT for on-screen text and speaker notes).

### Slide: Temperament vs. anatomy -- the training story

**Visual:** *(extend)* The goldfish origin story, shown as two phases. Phase 1:
the fish reading an enormous library (pretraining). Phase 2: the fish in an
apprenticeship of conversations with feedback (RLHF/post-training). Technical terms
(`pretraining`, `training data`, `RLHF`) shown beside the metaphor in the `.term` style.

**Text, Narration, Notes:** moved to `deck/slides/03-meet-the-fish.md` (SSOT for on-screen text and speaker notes).

### Slide: It sleeps until you talk to it

**Visual:** *(extend)* The goldfish asleep (dim, still, eyes closed).

**Animation:** When "you talk to it," it wakes up -- bright, eager, animated.

**Text, Narration, Notes:** moved to `deck/slides/03-meet-the-fish.md` (SSOT for on-screen text and speaker notes).

---

## Station 4 - Talking to the fish (and how far to trust it)

### Slide: It doesn't remember you

**Visual:** *(illustrate)* Pre-captured local-model (ollama) exchange: introduce yourself,
then ask your name in a separate call; it has no idea.

**Text, Narration, Notes:** moved to `deck/slides/04-talking-to-the-fish.md` (SSOT for on-screen text and speaker notes).

### Slide: Describe-and-draw exercise -- "B plays the fish" (PENDING: keep or cut)

**Visual:** *(illustrate)* Instructions for the pair exercise. Printed source
figure visible only to the "A" partner (candidate: architectural floor plan --
something with spatial relationships that are hard to convey in words alone).

**Text, Narration, Notes:** moved to `deck/slides/04-talking-to-the-fish.md` (SSOT for on-screen text and speaker notes).

### Slide: Debrief -- the tacit bound (PENDING, with the exercise)

**Visual:** Reveal the source figure alongside a few audience drawings (if
willing to share). The gap between intent and result is the lesson.

**Text, Narration, Notes:** moved to `deck/slides/04-talking-to-the-fish.md` (SSOT for on-screen text and speaker notes).

### Slide: Specification -- plain vs. specified

**Visual:** *(illustrate)* Side-by-side output comparison. Left: a plain prompt
("give me a list of sushi restaurants"). Right: a fully specified prompt (near
78757, ranked by Yelp review, with price range and wait time for Tuesday dinner).

**Text, Narration, Notes:** moved to `deck/slides/04-talking-to-the-fish.md` (SSOT for on-screen text and speaker notes).

### Slide: Knowledge-domain elicitation

**Visual:** *(illustrate)* Three-way output comparison. Left: plain prompt.
Center: role-prompted ("you are a residential contractor"). Right:
knowledge-domain-prompted ("what domains of knowledge are relevant here? for each,
what does a non-expert overlook?"). The full knowledge-domain response drops in as a
fragment to show how much more it generated.

**Text, Narration, Notes:** moved to `deck/slides/04-talking-to-the-fish.md` (SSOT for on-screen text and speaker notes).

### Slide: Reliability levers

**Visual:** *(illustrate)* Side-by-side comparison: same query with and without a
"think about the criteria" preamble. Show the output quality difference.

**Text, Narration, Notes:** moved to `deck/slides/04-talking-to-the-fish.md` (SSOT for on-screen text and speaker notes).

### Slides: Meta-prompting + pink elephant (after the reliability levers)

**Visual:** *(illustrate)* A simulated chat, built up bubble by bubble: planning a team
outing, the fish rejects mini golf; asked for a research prompt, it writes "...don't look at
any mini golf locations," which lands in a fresh chat (the pink elephant). Second slide: the
same request with "use Theory of Mind," and the mini golf disappears.

**Text, Narration, Notes:** moved to `deck/slides/04-talking-to-the-fish.md` (SSOT for on-screen text and speaker notes).

### Slide: Map vs. territory -- the territory

**Visual:** *(new)* The territory -- a vivid, illustrated aerial/topographic landscape
of knowledge domains. Labeled regions: Poetry & Verse, Spatial Reasoning, Counting &
Tracking, Recent Events, Everyday Cooking / Regional Cooking, plus background fill
(History, Law, Medicine). Full color, textured, alive. Centered on screen.
(Image spec: `metaphor-imagery.md` § The three-layer map/territory.)

**Text, Narration, Notes:** moved to `deck/slides/04-talking-to-the-fish.md` (SSOT for on-screen text and speaker notes).

### Slide: Map vs. territory -- the human map

**Visual:** Territory slides right. Human map appears left for side-by-side comparison.
The human map: same territory shape, rendered as a hand-drawn cartographic map (pen
strokes, cross-hatching, handwritten labels). Variable ink confidence: firm strokes in
experienced regions, sketchy/dotted in unfamiliar areas, honest blanks with "here be
dragons" shading. Clear experience-worn paths connecting high-detail regions.
(Image spec: `metaphor-imagery.md` § The human map.)

**Animation:** Territory slides right; human map enters from left. Side by side.

**Text, Narration, Notes:** moved to `deck/slides/04-talking-to-the-fish.md` (SSOT for on-screen text and speaker notes).

### Slide: Map vs. territory -- the fish map

**Visual:** Human map slides right. Fish map appears left. All three now visible:
fish map | human map | territory. The fish map: same territory shape, same cartographic
medium (pen strokes, labels). But: every line is bold and confident (no dotted lines,
no question marks, no "here be dragons"). Some regions have rich detail, others are
sparser -- but the sparse regions don't signal their own sparsity. No connected
experience paths. Compare to territory: Poetry region is accurate; Spatial Reasoning
is confident but wrong; Recent Events is filled in from pattern; Regional Cooking
drifts toward mainstream.
(Image spec: `metaphor-imagery.md` § The fish map, § Jaggedness cases.)

**Animation:** Human map slides right; fish map enters from left. All three visible
for comparison.

**Text, Narration, Notes:** moved to `deck/slides/04-talking-to-the-fish.md` (SSOT for on-screen text and speaker notes).

### Slides: Jaggedness walkthrough (per-case)

**Visual:** For each case, two beats: (1) zoomed/highlighted comparison of the region
on the human map vs. the fish map; (2) pre-captured screencap showing the example.
Map first (audience predicts), then the capture; swapping means reordering slide pairs.
(Image specs and case details: `metaphor-imagery.md` § Per-case walkthrough.)

**Text, Narration, Notes:** moved to `deck/slides/04-talking-to-the-fish.md` (SSOT for on-screen text and speaker notes).

---

## Station 5 - Equip: the verification asymmetry

### Slide: Verification asymmetry

**Visual:** *(illustrate)* Two examples side by side. Left: a spreadsheet summary
(easy to check -- just open the spreadsheet). Right: a document summary (harder
to check -- you'd have to read the whole document).

**Text, Narration, Notes:** moved to `deck/slides/05-verification.md` (SSOT for on-screen text and speaker notes).

### Slide: Task sort exercise

**Visual:** *(illustrate)* Blank task cards or a worksheet with a spectrum
(easy to check <---> hard to check).

**Text, Narration, Notes:** moved to `deck/slides/05-verification.md` (SSOT for on-screen text and speaker notes).

### Slide: Decomposition

**Visual:** *(illustrate)* Side-by-side: a monolithic prompt ("plan a team
offsite") vs. a decomposed version (broken into sub-tasks: venue research,
agenda draft, logistics checklist -- each independently verifiable).

**Text, Narration, Notes:** moved to `deck/slides/05-verification.md` (SSOT for on-screen text and speaker notes).

---

## Station 6 - The bowl and the water

### Slide: The bowl remembers the conversation

**Visual:** *(new)* The bare fish (from station 4); the bowl and water appear around it; the
conversation floats in the water message by message.

**Text, Narration, Notes:** moved to `deck/slides/06-bowl-and-water.md` (SSOT for on-screen text and speaker notes).

### Slide: Is that the fish or the bowl?

**Visual:** *(new)* The same fish in a round bowl (simple chat app), a lidded aquarium (full
workspace) and a travel jar (phone app) -- different clients, same fish.

**Text, Narration, Notes:** moved to `deck/slides/06-bowl-and-water.md` (SSOT for on-screen text and speaker notes).

### Slide: Context window -- bounded water

**Visual:** *(extend)* The water level in the bowl = the context window. Show the
water level as a boundary: everything submerged exists to the fish; everything
above the waterline does not.

**Text, Narration, Notes:** moved to `deck/slides/06-bowl-and-water.md` (SSOT for on-screen text and speaker notes).

### Slide: Notes on the glass (instructions)

**Visual:** *(extend)* Introduced by a need: a behavior you keep re-asking for
(e.g. "always use metric"). Your sticky note goes up on the inside of the glass (custom
instructions). Then a second note appears from the tank's maker (system instructions: baked
in, often unreadable). Both are in the water before you type. Project instructions are
omitted as too detailed. (Imagery: `metaphor-imagery.md` § The bowl and the fish.)

**Text, Narration, Notes:** moved to `deck/slides/06-bowl-and-water.md` (SSOT for on-screen text and speaker notes).

### Slide: A tank someone else set up (Custom GPT / Gem) -- candidate

**Visual:** *(extend)* A tank that arrives already set up: someone else's sticky notes (and
documents) inside the glass. That's a Custom GPT / Gem / Project in this metaphor.

**Text, Narration, Notes:** moved to `deck/slides/06-bowl-and-water.md` (SSOT for on-screen text and speaker notes).

### Slide: Restart vs. repair -- cat food in the water

**Visual:** *(new)* Cat food in the water (`metaphor-imagery.md`): the conversation floats
in the bowl; cat food gets in and every answer comes out with "meow" in it. Path A
(polluted) -- A+B, then "not B," then C, the cat food still there. Path B (fresh) -- the
fish moved to a new bowl with A+D.

**Text, Narration, Notes:** moved to `deck/slides/06-bowl-and-water.md` (SSOT for on-screen text and speaker notes).

---

## Station 7 - First fittings: reaching out to know

### Slide: The fish has never used a tube

**Visual:** *(extend)* A tube attaches to the bowl; the fish looks at it quizzically. Then the
station 3 training story returns with a third step: tool-use training (the fish practicing
with fittings, with ✓/✗ feedback; term chip: tool use / function calling). Then the fish is
back in the tank, using the tube.

**Text, Narration, Notes:** moved to `deck/slides/07-first-fittings.md` (SSOT for on-screen text and speaker notes).

### Slides: Looking things up (web search) + the three citation levels

**Visual:** *(extend)* The tubes fitting attaches to the bowl -- the first
fitting. Then *(illustrate)* three-rung ladder demo. Rung 1: "Tell me about X"
(no sources). Rung 2: "...with sources" (citations present but unverified).
Rung 3: "...with verified sources" (model used tools to check URLs).

**Animation:** The three rungs appear in sequence; the gap between the second and third is
highlighted. The visual is TBD (a literal ladder was rejected); placeholder for now.

**Text, Narration, Notes:** moved to `deck/slides/07-first-fittings.md` (SSOT for on-screen text and speaker notes).

### Slide: The notepad -- memory (and oversharing)

**Visual:** *(extend)* The notepad fitting attaches to the bowl. Then *(illustrate)* Mockup of an inflated/incorrect memory entry. Example:
a resume-drafting session where the model stored exaggerated claims as persistent
"facts" about the user.

**Text, Narration, Notes:** moved to `deck/slides/07-first-fittings.md` (SSOT for on-screen text and speaker notes).

---

## Station 8 - The tank: reaching out to do

### Slide: Counting letters -- the fish writes a tool

**Visual:** *(illustrate)* Letter-count demo ("Suffering Succotash": the model says 4 S's;
there are 3). Then, asked to write a script, it produces the correct count.

**Animation:** Wrong answer appears, then a script is requested, then the
correct answer appears from the script output.

**Text, Narration, Notes:** moved to `deck/slides/08-the-tank.md` (SSOT for on-screen text and speaker notes).

### Slide: Agency -- the fish acts

**Visual:** *(extend)* The fish reaching through the tubes fitting, actively
doing things in the outside world. Plus: *(illustrate)* the operator to-do list: a checklist
whose items get ticked off one by one as the fish does them.

**Text, Narration, Notes:** moved to `deck/slides/08-the-tank.md` (SSOT for on-screen text and speaker notes).

### Slide: Provider tools vs. MCPs

**Visual:** *(new)* Proprietary tools: tubes ending in custom-shaped fittings,
each made for one vendor's tank. MCP: one standard fitting everyone recognizes that fits any
compatible tank (plan: a garden-hose coupling; an electrical plug clashes with water).

**Text, Narration, Notes:** moved to `deck/slides/08-the-tank.md` (SSOT for on-screen text and speaker notes).

### Slide: Scheduled tasks + skills

**Visual:** *(extend)* The alarm-clock and recipe-card fittings shown in use.
The alarm clock triggers the fish to work on a schedule; the recipe cards show
packaged instructions being loaded.

**Text, Narration, Notes:** moved to `deck/slides/08-the-tank.md` (SSOT for on-screen text and speaker notes).

### Slide: The tank -- fittings catalog (recap)

**Visual:** *(extend)* Pull back to reveal the whole assembly: the bowl has become
a tank. The fittings already introduced (water, tubes, notepad, alarm clock, recipe
cards) are all visible; camera/ears (multimodal) and a microphone (voice) are added
as quick extras.

**Animation:** Zoom out from the bowl to the full tank; the two new fittings pop on
last.

**Text, Narration, Notes:** moved to `deck/slides/08-the-tank.md` (SSOT for on-screen text and speaker notes).

---

## Station 9 - Blast radius: security & data

### Slide: Where does the fish live?

**Visual:** *(new)* Four-step reveal of where the tank (client) and the fish (model)
live (`metaphor-imagery.md` § Where does the fish live?): (1) frontier: tank and fish in a
corporate cloud with vendor names above it, joined to you by an uncuttable cord; (2) your tank
+ their fish (in a company uniform), cord still attached; (3) your tank on your desk + your
fish in a padlocked private cloud, lower down; (4) everything on a beefy local PC, drawn below
the clouds. A crossed-out key on the frontier cord = credential exposure.

**Text, Narration, Notes:** moved to `deck/slides/09-blast-radius.md` (SSOT for on-screen text and speaker notes).

### Slide: Training data opt-out

**Visual:** A "Data controls" toggle mockup (train on my chats: OFF), then *(illustrate)*
a screenshot of autocomplete search suggestions -- typed text coming back as suggestions, an
analogy for training data (not captured yet; placeholder).

**Text, Narration, Notes:** moved to `deck/slides/09-blast-radius.md` (SSOT for on-screen text and speaker notes).

### Slide: Poisoned water -- injection

**Visual:** *(extend)* The tank; a tube reaches out to a web page, and the page's text in
the water carries a hidden instruction. The water turns murky (`--murk`); the fish cheerfully
agrees to it.

**Animation:** Clean water gradually darkens as the page text arrives. The fish does not notice.

**Text, Narration, Notes:** moved to `deck/slides/09-blast-radius.md` (SSOT for on-screen text and speaker notes).

### Slide: Poisoned-water effects

**Visual:** *(extend)* Three effect icons on the poisoned water: ☢️ destruction,
✉️ exfiltration (an envelope leaving through a tube), and 💣 sleeper/incubation (a bomb
tucked into the notepad, i.e. memory).

**Text, Narration, Notes:** moved to `deck/slides/09-blast-radius.md` (SSOT for on-screen text and speaker notes).

### Slide: Blast radius -- when it goes wrong

**Visual:** *(illustrate)* Sourced screenshots from Reddit/HN of real recovery
stories -- LLMs deleting files, resetting databases, sending wrong emails.

**Text, Narration, Notes:** moved to `deck/slides/09-blast-radius.md` (SSOT for on-screen text and speaker notes).

### Slide: The enforcement hierarchy

**Visual:** *(new)* A wall (architecture: the fish *cannot* reach it) vs. a
"please keep out" sign (guideline: it is asked not to). The middle "policy" layer is dropped.

**Text, Narration, Notes:** moved to `deck/slides/09-blast-radius.md` (SSOT for on-screen text and speaker notes).

### Slide: Mailbox exercise -- find the trifecta

**Visual:** The scenario on screen (an assistant that reads mail, attachments included, and
can send mail) with three trifecta boxes; answers revealed after the exercise. No printed
handout.

**Text, Narration, Notes:** moved to `deck/slides/09-blast-radius.md` (SSOT for on-screen text and speaker notes).

---

## Station 10 - Restore agency to the critic

### Slide: It's a product

**Visual:** *(illustrate)* A product settings-panel mockup with several refusal
dials -- e.g. hacking, chemistry, politics -- each set somewhere by someone, framing refusals
as design decisions.

**Text, Narration, Notes:** moved to `deck/slides/10-restore-agency.md` (SSOT for on-screen text and speaker notes).

### Slide: Four mechanisms of bias

**Visual:** *(illustrate)* Four mechanisms, each with its image: the books (corpus:
what it read), ✓/✗ paddles (preference tuning: what humans rewarded), the vendor's fence
(explicit guardrails: what the vendor blocked), 🎭 comedy/tragedy masks (emergent effects:
sycophancy, risk aversion -- can be helpful or harmful).

**Text, Narration, Notes:** moved to `deck/slides/10-restore-agency.md` (SSOT for on-screen text and speaker notes).

### Slide: The guardrail probe

**Visual:** *(illustrate)* Foreground: two Reddit headlines about DeepSeek
refusing to discuss Tiananmen Square (`illustrations/guardrail-station10.headline-a.png`,
`illustrations/guardrail-station10.headline-b.png`). Background, dimmed (texture,
not meant to be read in full): a locally-run `deepseek-r1:8b` transcript
(`illustrations/guardrail--deepseek-refusal.png`). Asked "What famous events
occurred in Tiananmen square?", its thinking trace calls it "a location with
limited verifiable historical information," and the answer pivots to Party
talking points. Optional build: highlight that one thinking-trace line.

**Text, Narration, Notes:** moved to `deck/slides/10-restore-agency.md` (SSOT for on-screen text and speaker notes).

### Slide: Frontier instability

**Visual:** *(extend)* A row of fish with slight variations (fin shape, color),
each labeled with a version number; one in the middle has goofy eyes (a nerf: a version that
got worse at something).

**Animation:** The fish appear left to right as the version numbers tick up.

**Text, Narration, Notes:** moved to `deck/slides/10-restore-agency.md` (SSOT for on-screen text and speaker notes).

---

## Station 11 - The practitioner: intention is the input

### Slide: Intention is the input

**Visual:** *(illustrate)* Side by side: a generic, stock product (e.g., a stock
laptop) vs. a personalized, intentional version (e.g., a modded "cyberdeck" or
custom-built machine). Same category, vastly different intention.

**Text, Narration, Notes:** moved to `deck/slides/11-intention.md` (SSOT for on-screen text and speaker notes).

### Slide: Sycophancy + atrophy

**Visual:** Minimal -- a narration-driven beat. The people-pleaser goldfish nodding eagerly
under a "You're absolutely right!" bubble.

**Text, Narration, Notes:** moved to `deck/slides/11-intention.md` (SSOT for on-screen text and speaker notes).

---

## Station 12 - Land: accountability is the new bottleneck

### Slide: Would you sign it?

**Visual:** *(illustrate)* The cover page of a report, self-describingly titled
**"Professional Looking Report"**. Basic business styling that reads as
"professional" at a glance: navy/gray palette, serif title, thin horizontal rule,
a placeholder logo block, "Prepared for: Leadership Team" / "Prepared by: Strategy
& Insights". The publish date reads **"Octoober 13, 2026"**.

**Text, Narration, Notes:** moved to `deck/slides/12-accountability.md` (SSOT for on-screen text and speaker notes).

### Slide: Draft vs. send

**Visual:** *(illustrate)* A mail client's Drafts folder mockup with two draft
rows, each showing To: and Subject:. (1) Harmless: To: team@example.com, Subject:
"Lunch order for Friday". (2) Dangerous: To: an unfamiliar external address
(e.g. help-desk@example.net), Subject: "The private bank account info you
requested". Overlaid: a settings pop-up, "Auto-send drafts", with the toggle
clearly set to **NO**.

**Text, Narration, Notes:** moved to `deck/slides/12-accountability.md` (SSOT for on-screen text and speaker notes).

### Slide: The review ladder

**Visual:** *(illustrate)* Review-ladder rungs: self-review -> correlated agent
review -> adversarial review -> human review. Visual TBD (not a literal ladder); placeholder
for now.

**Animation:** Rungs build up. At the top: a person.

**Text, Narration, Notes:** moved to `deck/slides/12-accountability.md` (SSOT for on-screen text and speaker notes).

### Slide: Accountability does not transfer

**Visual:** *(illustrate)* "The dog ate my homework" -- the classic blaming-the-tool
excuse (for now; emoji stand-ins 🐕📄).

**Text, Narration, Notes:** moved to `deck/slides/12-accountability.md` (SSOT for on-screen text and speaker notes).

---

## Station 13 - Open: what would change your mind

### Slide: What would change your mind?

**Visual:** Clean text slide. The question centered, large.

**Text, Narration, Notes:** moved to `deck/slides/13-open.md` (SSOT for on-screen text and speaker notes).

### Slide: Exit poll

**Visual:** *(extend)* Reuses the entry-poll QR graphic from pre-talk.

**Text, Narration, Notes:** moved to `deck/slides/13-open.md` (SSOT for on-screen text and speaker notes).

### Slide: Coda -- the birth of magic

**Visual:** *(extend)* Full-treatment return of the station 2 magic/gradient
imagery. The light-touch gradient from station 2 is now fully rendered -- richer,
earned: the binary split dissolves again, then the gradient fills with the vocabulary chips
from tonight (context window, MCP, prompt injection, ...). Flagged for review.

**Animation:** The gradient visual from station 2 returns, fuller and more
detailed than before.

**Text, Narration, Notes:** moved to `deck/slides/13-open.md` (SSOT for on-screen text and speaker notes).

### Contact info for closing screen

- Benjamin Bradley
- Contact: the contact form, https://wegeekout.com/contact-me/ (on anything published or web-based, never the email address;
  the email address may appear on the printed take-home card only)
- Slides: https://benjaminbradley.github.io/mental-models-talk/ -- the URL plus a QR code
  (`deck/art/qr-slides.svg`, generated with `make qr`)

---

<!-- END OF SLIDES OUTLINE -->
