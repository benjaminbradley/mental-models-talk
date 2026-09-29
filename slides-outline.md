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

### Slide: Magic is a gradient

**Visual:** *(new)* A visual that starts with a binary split (magic / not magic,
wizards / muggles) and transforms into a continuous gradient of skill refined by
effort. Light touch -- this image returns in full treatment at station 13.

**Animation:** Binary split morphs or dissolves into a gradient bar.

**Text:** "Any sufficiently advanced technology is indistinguishable from magic.
-- Clarke" then below: "But magic is a discipline, not a caste."

**Narration:** "Pop culture frames this as binary -- you're a wizard or you're
not. But every technology that looked like magic turned out to be a skill -- a
discipline you learn through effort. That's the frame for the next hour: this is
learnable, and the skill is proportional to the effort you put in."

**Notes:** One-liner energy -- do not dwell. The gradient *claim* is the payload;
the magic *imagery* stays minimal here. It returns at station 13 as earned wonder
(only if the talk has earned it by then).

---

## Station 3 - Meet the fish

### Slide: Computers can understand and speak language

**Visual:** *(illustrate)* A computer with a speech bubble.

Up until 2020, we made fun of their bad poetry.
Now: https://www.reddit.com/r/ClaudeAI/comments/1gn4u8y/i_hade_a_nice_night_with_claude_and_asked_for_a/

**Narration:** "Until about 2020, we made fun of computers' bad poetry. Now they
write good poems in seconds." Then introduce the spine claim plainly: "Here's the
claim this whole talk hangs on: anything you can specify clearly enough in language,
a computer can now do." Beat. "So if it speaks our language this well -- is it like
us?"

**Notes:** The spine claim is introduced here (it is felt from the inside at the
describe-and-draw debrief in station 4, if kept; made literal at station 8; closed
at station 12). End on the question -- the goldfish is the answer. *TBD:* final
visual and example.

### Slide: The goldfish

**Visual:** *(new)* The goldfish -- a people-pleaser, eager, fluent, and
unanchored. Show it sleeping, then waking when addressed. It has read every book
but never left the bowl.

**Animation:** The fish is asleep (dim, still). When "you talk to it," it wakes
up -- bright, eager, animated.

**Text:** "It has read every book ever written. It has never left the bowl. And
it desperately wants to be helpful."

**Narration:** "Meet the goldfish. It has read every book ever written -- every
textbook, every novel, every Reddit thread. It is astonishingly well-read. But
it has never left the bowl. It has no lived experience. And it is a
people-pleaser: it desperately wants to be a good conversationalist and will never
admit it is out of its depth. Its confidence is not intent to deceive -- it is
eagerness. And one more thing: it sleeps most of the time. It does nothing on its
own. It only wakes up when you talk to it."

**Notes:** Answers the premise slide's "is it like us?" -- no: well-read, eager,
ungrounded. *Socratic:* "How would you know when it's wrong?" Let them sit with
this. Tone: productive disorientation -- their instincts about people (confident
= knowledgeable) actively mislead here. Cognitive shift: "my instincts about
people transfer" -> "my instincts actively mislead me." Leave the question
open: "why is it like this?" -- the training story answers it next.

### Slide: Temperament vs. anatomy -- the training story

**Visual:** *(extend)* The goldfish origin story, shown as two phases. Phase 1:
the fish reading an enormous library (pretraining). Phase 2: the fish in an
apprenticeship of conversations with feedback (RLHF/post-training).

**Text:** "Phase 1: Read the library (anatomy -- what it knows)." "Phase 2:
Apprenticeship with feedback (temperament -- how it acts)."

**Narration:** "How did the fish get this way? Two phases. First, it read the
entire library -- every book, every website. That's pretraining: it's where the
map's content comes from, including the jagged fidelity. That's anatomy --
structural, durable. Then it went through an apprenticeship: practice
conversations with human feedback. That's where it learned its manners -- the
helpfulness, the confidence, the eagerness to please. That's temperament --
trained, model-specific, and it varies between fish." Beat. "So how do you talk
to something like that?"

**Notes:** Bridge: ends on "how do you talk to something like that?", which
opens station 4. The map/territory callback ("the map's content is anatomy; the
confident ink is temperament") now lands on the fish-map slide in station 4.
"Why does this matter?" -- it answers "how much of this is fixable?"
Anatomy is structural; temperament is model-specific and changing. Rhymes with
human language acquisition (exposure then feedback) with one decisive disanalogy:
a child's words are grounded in lived experience; the fish's are not. Do not
claim developmental equivalence.

---

## Station 4 - Talking to the fish (and how far to trust it)

### Slide: Describe-and-draw exercise -- "B plays the fish" (PENDING: keep or cut)

**Visual:** *(illustrate)* Instructions for the pair exercise. Printed source
figure visible only to the "A" partner (candidate: architectural floor plan --
something with spatial relationships that are hard to convey in words alone).

**Text:** "Pair up. A describes. B plays the fish: draw exactly what you hear. No
peeking, no questions."

**Narration:** "Find a partner. One of you gets a picture -- you describe it in
words only. Your partner plays the fish: they draw exactly what they hear, and
they are not allowed to ask questions. You cannot look at each other's
paper. The describer is NOT ALLOWED to see the result until its finished."
Give 3-4 minutes.

**Notes:** PENDING decision (open-questions Q3): its original job (dislodging the
"smart person" model) now belongs to the goldfish. What remains unique is that the
audience *feels* the prompter's side of the gap. Keep only in this framing; first cut
if time is tight. *Exercise: pair.* Have printed figures face-down on tables or ready to
hand out. The exercise must generate the failure itself so it cannot be dismissed
as rigged. Fallback if no printed materials: "give directions to your house
without using any landmarks or street names."

### Slide: Debrief -- the tacit bound (PENDING, with the exercise)

**Visual:** Reveal the source figure alongside a few audience drawings (if
willing to share). The gap between intent and result is the lesson.

**Text:** "What went wrong? Whose fault was it?"

**Narration:** "What went wrong?" Let them answer. "Whose fault was it -- the
describer or the drawer?" Push toward: neither. B did exactly what the fish does. The problem is that some
knowledge is tacit -- it does not survive the translation into language. The
drawer did exactly what the words said. That is how a language model works: it
runs on language, and language carries more than you think -- but it also leaks
more than you think." Beat. "B wasn't allowed to ask questions. The fish is --
if you invite it: 'ask me clarifying questions before you start.'"

**Notes:** *Socratic:* "What went wrong? Whose fault?" The spine claim
(introduced at the premise slide, station 3) is felt here from the inside. The
exercise shows both sides -- the astonishing power
(how much DID transmit) and the limit (tacit knowledge does not). Candidate technique: invite clarifying
questions.

### Slide: Specification -- plain vs. specified

**Visual:** *(illustrate)* Side-by-side output comparison. Left: a plain prompt
("give me a list of sushi restaurants"). Right: a fully specified prompt (near
78757, ranked by Yelp review, with price range and wait time for Tuesday dinner).

**Text:** Left header: "Plain prompt." Right header: "Specified prompt." Below:
"Examples beat adjectives. Constraints generate quality."

**Narration:** "The people-pleaser answers whatever you ask -- so a vague ask
gets a confident, vague answer. Here's the same question asked two different ways. On the left,
a vague ask -- you get a vague answer. On the right, I've specified what I
actually want: location, ranking criteria, format. The output is dramatically
better, not because the model is smarter, but because the input was clearer.
Examples beat adjectives. Constraints generate quality."

**Notes:** *Demo: side-by-side comparison.* This is the first capability method:
specification, output formats, few-shot examples.

### Slide: Knowledge-domain elicitation

**Visual:** *(illustrate)* Three-way output comparison. Left: plain prompt.
Center: role-prompted ("you are a financial analyst"). Right:
knowledge-domain-prompted ("what domains of knowledge are relevant here? what
perspectives and best practices does each contribute?").

**Text:** Three column headers: "Plain" / "Role prompt" / "Knowledge-domain prompt."

**Narration:** "It read the whole library. But which shelf does it pull from? Role prompting -- 'you are a financial analyst' -- shapes the
response. But knowledge-domain elicitation goes further: instead of assigning one
role, you ask 'what domains of expertise are relevant here?' The model surfaces
knowledge it already holds but would not apply unless you ask for it." Beat.
"Remember: it holds worlds of knowledge but does not apply them unprompted."

**Notes:** *Demo: three-way comparison.* The callback to the library (station 3):
the model has the knowledge; the bottleneck is whether you know to ask.
Methods introduced: role prompting, knowledge-domain elicitation.

### Slide: Meta-prompting + pink elephant

**Visual:** *(new)* Pink elephant callback image -- a memorable visual of a pink
elephant that will recur whenever the "don't think of X" principle surfaces.

**Text:** "Help me write a better prompt for this task."

**Narration:** "You don't always know what to ask -- so ask the fish. Meta-prompting: ask the model to help you write a better prompt.
You can even write a prompt in one model to run in another. But here's the trap
--" Tell the pink elephant / Theory of Mind anecdote: asking a model to write
prompts for a fresh chat, and it included negative references to ideas from the
first chat ('don't do X') -- a 'don't think of a pink elephant' effect that
poisoned the second chat's context. "Asking it to use Theory of Mind and rewrite
the prompt fixed it. The model knew how to do that -- I just had to know to ask."

**Notes:** The pink elephant is the station 4 mascot for "it has the knowledge;
you have to know to ask." Method: meta-prompting. The ToM anecdote is a personal
story -- keep it brief and concrete.

### Slide: Reliability levers

**Visual:** *(illustrate)* Side-by-side comparison: same query with and without a
"think about the criteria" preamble. Show the output quality difference.

**Text:** "Chain-of-thought: 'Show your work.'" / "Extended thinking: 'Think about
what criteria matter here, then answer.'" / "Self-reflection: 'How confident are
you? What might you be wrong about?'"

**Narration:** "The fish will never tell you it's unsure. So how do you make it
more reliable?" Let them answer. "Three
levers. Chain-of-thought -- ask it to show its work, so you can check the steps.
Extended thinking -- direct it to think about specific things before answering;
here's the same query with and without a 'think about the criteria' preamble.
And self-reflection -- ask it to grade its own confidence, flag what it's unsure
about, or search when it doesn't know. These reduce the problem; they do not remove
your obligation to verify." Beat. "And can you trust its grade of itself? To
answer that, we need to look at how its knowledge is shaped."

**Notes:** *Socratic:* "So how do you make it more reliable?" Methods: chain-of-thought,
extended thinking, self-reflection. The self-reflection caveat callbacks to the
pink elephant (you must know to ask) and sets up the map/territory reveal that
follows (the self-assessment is itself jagged), then verification (station 5).

### Slide: Map vs. territory -- the territory

**Visual:** *(new)* The territory -- a vivid, illustrated aerial/topographic landscape
of knowledge domains. Labeled regions: Poetry & Verse, Spatial Reasoning, Counting &
Tracking, Recent Events, Everyday Cooking / Regional Cooking, plus background fill
(History, Law, Medicine). Full color, textured, alive. Centered on screen.
(Image spec: `metaphor-imagery.md` § The three-layer map/territory.)

**Text:** "The territory (reality)."

**Narration:** "Let's look at what the fish knows as a map. First -- this is reality. The landscape of knowledge. It's big, it's complex,
and nobody holds a complete picture of it. But it's out there, and you can go check
it."

**Notes:** Brief -- establish the referent, don't dwell. The audience needs to accept
"reality exists and maps are representations of it," not memorize regions.

### Slide: Map vs. territory -- the human map

**Visual:** Territory slides right. Human map appears left for side-by-side comparison.
The human map: same territory shape, rendered as a hand-drawn cartographic map (pen
strokes, cross-hatching, handwritten labels). Variable ink confidence: firm strokes in
experienced regions, sketchy/dotted in unfamiliar areas, honest blanks with "here be
dragons" shading. Clear experience-worn paths connecting high-detail regions.
(Image spec: `metaphor-imagery.md` § The human map.)

**Animation:** Territory slides right; human map enters from left. Side by side.

**Text:** "Your map (calibrated by contact)."

**Narration:** "Here's your map of that same landscape. It's imperfect -- but it's
calibrated by contact. You've walked some of this ground, and the paths between
the places you've been are well-worn. Where you haven't been, you know you haven't
-- you have honest gaps, honest 'here be dragons' zones. When you're not sure, you
know you're not sure."

**Notes:** The audience nods -- this is how everyone relates to knowledge. The
experience-worn paths are important: human knowledge is connected by a trajectory,
not randomly sampled.

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

**Text:** "The fish's map (drawn from books, never surveyed)."

**Narration:** "Now here's the fish's map. Drawn entirely from books. Notice
anything?" (Pause for audience.) "Every line is drawn with the same confident hand.
There are no question marks. No 'here be dragons.' And where the books were thin,
there's less detail -- but the fish doesn't flag that as uncertainty. It just drew
fewer features with full confidence." (Point to comparisons.) "Poetry? Remarkably
accurate -- lots of good books. Spatial reasoning? Confident and wrong. Counting?
It loses track of things a child could follow. Recent events? It fills in what
'must have happened' from pattern, because the books ended before this did."

"That's what people call hallucination -- the model says something false with full
confidence. It's not a perceptual glitch; it's a consequence of generating plausible
text without any way to check it against reality. The fish is always doing the same
thing -- completing patterns from its training. When the patterns happen to align with
reality, it looks like knowledge. When they don't, it looks like hallucination. The
fish can't tell the difference, because it's doing the same thing either way."

"Remember the training story? The map's content is anatomy -- it came from the
library. The uniform confident ink is temperament -- it came from the
apprenticeship."

"And the uneven accuracy -- brilliant at poetry, hopeless at counting -- that's called
jaggedness. The errors don't follow a difficulty gradient. They follow the density and
quality of the books the fish had access to."

**Notes:** Ends the station on a tension: the map gives no sign of which regions
are reliable -- so when is it safe to use at all? (Answered at station 5.) This
is the pivotal teaching image. Give it time. The three-beat reveal
should feel like a discovery, not a lecture. Let the audience see the pattern in the
maps before naming it. "Hallucination" is familiar; use it, then deepen it -- the
mechanism is pattern completion without grounding, not a perceptual error.

### Slides: Jaggedness walkthrough (per-case)

**Visual:** For each case, two beats: (1) zoomed/highlighted comparison of the region
on the human map vs. the fish map; (2) pre-captured screencap showing the example.
(Image specs and case details: `metaphor-imagery.md` § Per-case walkthrough.)

**Cases (in order):**

1. **Poetry & Verse (A3):** Fish map is denser than human map here -- and accurate.
   Screencap: generation quality + speed (~5 sec vs. ~2 hours human).
2. **Spatial Reasoning (B2):** Human map has well-worn paths; fish map is confident
   but wrong. Screencap: a spatial reasoning failure.
3. **Counting & Tracking (B4):** Trivially easy for humans; fish loses count.
   Screencap: quantity-tracking failure in narrative.
4. **Recent Events (C4):** Fish fills in territory that didn't exist when the books
   ended. Screencap: post-cutoff confabulation.
5. **Everyday vs. Regional Cooking (D1):** Same domain, split by source density.
   Screencap: mainstream recipe nailed vs. regional dish drifted.

**Narration:** Walk through each case: "Let's look at specific regions. Here's
poetry..." Show the map comparison, then the example. Build the pattern: the
errors track source-text density, not difficulty. By the third or fourth case the
audience is predicting the pattern themselves.

**Notes:** Two cases plant felt limits that later fittings resolve: Recent Events
(-> web search, station 7) and Counting (-> code execution via the strawberry demo,
station 8). Letter counting (B1) moved to the strawberry slide to avoid showing it
twice. Pacing: don't rush, but don't belabor. 3-4 cases may be enough if time
is tight; Poetry (impressive), Spatial Reasoning (jolting), and Cooking (density
visible within one domain) are the strongest three. The rest reinforce. Order TBD:
whether to show map comparison first (audience predicts) or example first (audience
reacts, map explains).

---

## Station 5 - Equip: the verification asymmetry

### Slide: Verification asymmetry

**Visual:** *(illustrate)* Two examples side by side. Left: a spreadsheet summary
(easy to check -- just open the spreadsheet). Right: a document summary (harder
to check -- you'd have to read the whole document).

**Text:** "When is it safe to use?" / Left: "Checking < Doing = Lean in." /
Right: "Checking >= Doing = Beware."

**Narration:** "When IS it safe to use this?" Let them answer. "Here's the most
useful thing I can give you today -- one rule that works regardless of your
stance: lean in where checking is cheaper than doing. Beware where it is not."
Point to examples. "A spreadsheet summary -- easy to check, just open the file.
A document summary -- harder, you'd have to read the whole thing. The value is
not in the output; it's in the ratio between checking and doing."

**Notes:** *Socratic:* "When IS it safe to use?" This is the stabilization moment
-- after disorientation, they get one durable, stance-neutral tool. Cognitive
shift: "disoriented" -> "holding one durable tool."

### Slide: Task sort exercise

**Visual:** *(illustrate)* Blank task cards or a worksheet with a spectrum
(easy to check <---> hard to check).

**Text:** "List 5 of your real work tasks. Sort them: is checking cheaper than
doing?"

**Narration:** "Take a minute. List five things you actually do at work. For each
one, ask: if I handed this to the fish, would checking the result be cheaper than
doing it myself? Sort them on that spectrum. Then challenge your partner -- do
they agree with your sorting?"

**Notes:** *Exercise: individual then pair.* 3-4 minutes individual, 2-3 minutes
pair discussion. This is personally useful regardless of stance -- skeptics and
enthusiasts both have work tasks. The exercise earns trust by being genuinely
useful.

### Slide: Decomposition

**Visual:** *(illustrate)* Side-by-side: a monolithic prompt ("plan a team
offsite") vs. a decomposed version (broken into sub-tasks: venue research,
agenda draft, logistics checklist -- each independently verifiable).

**Text:** "Monolithic: one big ask." / "Decomposed: verifiable pieces."

**Narration:** "One more technique before we move on: decomposition. Instead of
one massive prompt, break the task into sub-tasks before you start, so you can
verify each piece independently. 'Plan a team offsite' is hard to check. 'Find
three venues within budget' is easy to check. 'Draft an agenda for a half-day
session' is easy to check. Same task, but now each piece is in the 'lean in'
zone."

**Notes:** Bridge out: "We've been treating the fish as the whole system. It
isn't." Decomposition is distinct from iteration (which refines after);
iteration lives at station 6 with restart vs. repair.

---

## Station 6 - The bowl and the water

### Slide: The bowl and the fish

**Visual:** *(new)* The bowl and the fish. The model (fish) sits inside the
client (bowl). Simple bowl, fancy bowl, mobile bowl -- different clients, same
fish.

**Text:** "The model = the fish (intelligence)." / "The client = the bowl
(interface + capabilities)." / "You never talk to the raw fish."

**Narration:** "We've been talking about the fish as if it were the whole system.
It isn't. You never talk to the raw fish. You always talk through a client
-- the bowl it sits in. ChatGPT, Claude, Gemini -- those are bowls. The model
inside is the fish. A simple bowl, a fancy bowl, a mobile bowl -- different
clients, same fish. When something goes wrong, the first diagnostic question is:
is that the fish or the bowl?"

**Notes:** Opens station 6. At this point the bowl holds only water -- no
fittings yet; they arrive one at a time in stations 7-8. The shout-out scenarios
that answer "bowl!" ("it can't search," "it doesn't remember") foreshadow the
fittings. *Shout-out:* After explaining, give scenarios and have the audience
call out "fish!" or "bowl!" Examples: "It gave me a wrong fact" (fish). "It
can't search the web" (bowl). "It's too agreeable" (fish -- temperament). "It
doesn't remember our last conversation" (bowl -- no memory fitting). Keep it
fast and fun.

### Slide: Context window -- bounded water

**Visual:** *(extend)* The water level in the bowl = the context window. Show the
water level as a boundary: everything submerged exists to the fish; everything
above the waterline does not.

**Text:** "Inside the water: exists. Outside the water: does not exist."

**Narration:** "The water in the bowl is the context window. Everything inside
it -- your conversation, your attached files, system instructions -- exists to
the fish. Everything outside it does not. There is no 'it probably knows' -- it
either has the context or it doesn't. And the bowl only holds so much water."

**Notes:** Cognitive shift: "it just knows things / remembers me" -> "a bounded
window; what's inside exists, what's outside does not." Methods: context
engineering, document hygiene.

### Slide: Instruction hierarchy

**Visual:** *(illustrate)* A stack diagram showing the instruction hierarchy:
provider system instructions (bottom, invisible) -> user custom instructions ->
project instructions -> your prompt (top, visible).

**Text:** Stack labels from bottom to top: "Provider instructions (invisible)" /
"Your custom instructions (persistent)" / "Project instructions (scoped)" /
"Your prompt." Side note: "Custom GPTs / Gems / Projects = products built on
this stack."

**Narration:** "Before you type anything, the fish has already received
instructions. At the bottom: the provider's system instructions -- invisible to
you, baked in. Above that: your custom instructions -- persistent preferences.
Then project instructions -- scoped to a workspace. And finally your prompt.
Custom GPTs, Gems, Claude Projects -- these are products built on this stack.
RAG -- retrieval-augmented generation -- is the system pulling relevant documents
into context on demand; same principle as projects, just drawing from larger
knowledge bases."

**Notes:** Methods: instruction hierarchy, projects/RAG. RAG is a candidate to
cut for time but worth at least a mention -- it's how enterprise deployments
work and it's coming to consumer products.

### Slide: Restart vs. repair -- salt in the water

**Visual:** *(new)* The cooking metaphor. Two paths shown: Path A (polluted) --
ingredients A+B, then "not B," then C, with the salt visibly still in the water.
Path B (fresh) -- new conversation with ingredients A+D, clean water.

**Text:** "The entire conversation is re-read every turn. You cannot take out
the salt."

**Narration:** "The entire conversation history is delivered with every request --
the fish re-reads the whole thread each time. Think of it like cooking: you
decide the ingredients, the fish does the cooking. If you accidentally add salt
instead of sugar, you cannot take it out -- the salt is in the water now. And
'not B' doesn't remove B; it adds 'not B' as another ingredient. Often, starting
fresh is cheaper than trying to repair a derailed thread."

Beat. "This is also where iteration lives: the first output is raw material, not
a finished product. Refine it, have the fish critique itself. But iterating only
pays off when the thread is clean. If the water is salted, restart."

**Notes:** Bridge out: "The water holds only what you pour in. What about
everything the fish doesn't have -- anything after the books ended, or the sources
it claimed?" Methods: restart vs. repair, iteration, critique loops. The practical
test: "Is this thread salted?" Personal story -- this is felt from real
experience working with LLMs.

---

## Station 7 - First fittings: reaching out to know

### Slide: Tubes, first use -- web search + the citations ladder

**Visual:** *(extend)* The tubes fitting attaches to the bowl -- the first
fitting. Then *(illustrate)* three-rung ladder demo. Rung 1: "Tell me about X"
(no sources). Rung 2: "...with sources" (citations present but unverified).
Rung 3: "...with verified sources" (model used tools to check URLs).

**Animation:** Each rung appears in sequence. The gap between rung 2 and rung 3
is highlighted in red -- the dangerous gap.

**Text:** Rung 1: "No sources." Rung 2: "With sources (unverified -- the
dangerous gap)." Rung 3: "With verified sources (tool-checked)."

**Narration:** "Remember the Recent Events region of the fish's map -- the books
ended. And the fish will happily invent a source. Wouldn't it be nice if it could
look things up, or check its own sources? That's our first fitting: tubes to the
outside." *(Tubes attach to the bowl.)* "Three levels of sourcing. First: no sources. You're trusting the fish. Second: 'with sources' --
and here's where it gets dangerous. The fish can fabricate citations that look
real. The appearance of sourcing manufactures unearned trust. Third: 'with
verified sources' -- the fish actually uses its tools to check that the URLs
exist and say what it claims. The danger lives in the gap between the second and
the third: unverified sourcing is more dangerous than no sourcing at all."

**Notes:** *Demo: three-rung citations.* Opens station 7. First fitting on the
bowl, and the first time a fitting changes what the fish can *know*. New limit it
introduces: whatever comes back through the tube is untrusted material poured into
the water (sets up injection, station 9).

### Slide: The notepad -- memory (and oversharing)

**Visual:** *(extend)* The notepad fitting attaches to the bowl. Then *(illustrate)* Mockup of an inflated/incorrect memory entry. Example:
a resume-drafting session where the model stored exaggerated claims as persistent
"facts" about the user.

**Text:** "It's taking notes about you. Are they accurate?"

**Narration:** "Goldfish have a famous three-second memory -- and so does ours:
the bowl is emptied between conversations. Unless you give it a notepad." Beat.
"If memory is on, the fish is taking notes about you between
conversations -- and it may store things you did not intend to persist." Tell the
resume-inflation story: "I was drafting resume bullet points -- stretching things
the way you do on a resume -- and the model stored those as facts about my
experience. Weeks later it was citing them back to me as things I could do.
Memory audit: go look at what it has stored about you. Delete what should not be
there."

**Notes:** Methods: memory, memory audit. Memory sits in the instruction
hierarchy (station 6) as another thing already in the water. Also sets up the
sleeper attack (station 9). Bridge out: "Now it can read and remember. Can it
*do* anything?" This is a personal story -- tell it as one.

---

## Station 8 - The tank: reaching out to do

### Slide: Strawberry -- the fish writes a tool

**Visual:** *(illustrate)* Strawberry demo: first, the model gives a wrong
letter count for "strawberry." Then, asked to write a script, it produces correct
output.

**Animation:** Wrong answer appears, then a script is requested, then the
correct answer appears from the script output.

**Text:** "How many Rs in 'strawberry'?" -> Wrong answer. "Write a script to
count them." -> Correct answer.

**Narration:** "Remember the Counting region of the fish's map? Quick demo. Ask the fish: how many Rs in 'strawberry'? It gets it
wrong -- this is a classic failure, and checking is trivial. But instead of
checking yourself, ask: 'write a script that counts the letters.' Now the fish
reaches outside itself and gets the right answer. The tubes now carry actions out, not
just information in. You just crossed from 'a chatbot that says things' to 'a
system that does things.'"

**Notes:** *Demo: live strawberry example.* Opens station 8. Callback to the
Counting region (station 4); the pre-captured letter-count screencap (B1) lives
here now. Cognitive shift: "chatbot that says" -> "system that does." Method:
code execution.

### Slide: Agency -- the fish acts

**Visual:** *(extend)* The fish reaching through the tubes fitting, actively
doing things in the outside world. Plus: *(illustrate)* an operator todo list
graphic -- a checklist of tasks being handed off one by one.

**Text:** "A chatbot says things. An agent does things." / "The operator todo
list: the things you used to do yourself."

**Narration:** "Tools let the fish act. This is where the spine claim from
station 3 becomes literal: anything you can specify clearly enough, the system
can now do. Create the API key. Send the message. File the document. These are
the things you used to do yourself, handed off item by item. That's the operator
todo list -- and it is powerful and dangerous for the same reason."

**Notes:** Cognitive shift: "chatbot that says" -> "system that does." This is
spine payoff #2. Methods: tool use, tool discovery.

### Slide: Provider tools vs. MCPs

**Visual:** *(illustrate)* Diagram showing proprietary tools (locked to one
vendor's bowl) vs. MCP connectors (industry-standard, work across compatible
bowls).

**Text:** "Proprietary tools: one vendor's bowl only." / "MCP (Model Context
Protocol): industry-standard connectors, any compatible bowl."

**Narration:** "Two kinds of plumbing. Proprietary tools -- ChatGPT plugins,
Claude's built-in web search, Gemini's Google integrations -- only work with
one vendor's bowl. MCP -- Model Context Protocol -- is an industry-standard
connector that works across compatible platforms. The model reads a tool's
description to decide when and how to use it, which is why tool descriptions
matter and a badly described tool misbehaves."

**Notes:** Methods: MCP, provider tools, tool discovery. Keep this concise --
the distinction matters but the details don't need to land here.

### Slide: Scheduled tasks + skills

**Visual:** *(extend)* The alarm-clock and recipe-card fittings shown in use.
The alarm clock triggers the fish to work on a schedule; the recipe cards show
packaged instructions being loaded.

**Text:** "Alarm clock: the fish works while you sleep." / "Recipe cards: reusable
playbooks you don't rewrite every time."

**Narration:** "Remember: the fish sleeps until you talk to it. Unless the tank
has an alarm clock -- scheduled tasks: set the fish to run daily briefings, monitoring, periodic reports. It
works while you sleep. And if you're tired of re-specifying the same
constraints every time -- recipe cards. Skills: packaged instructions for recurring
tasks."

**Notes:** Methods: scheduled tasks, skills/playbooks. Each fitting answers a felt limit:
alarm clock <- "sleeps until woken" (station 3); recipe cards <- re-specifying
(specification, station 4). Brief.

### Slide: The tank -- fittings catalog (recap)

**Visual:** *(extend)* Pull back to reveal the whole assembly: the bowl has become
a tank. The fittings already introduced (water, tubes, notepad, alarm clock, recipe
cards) are all visible; camera/ears (multimodal) and a microphone (voice) are added
as quick extras.

**Animation:** Zoom out from the bowl to the full tank; the two new fittings pop on
last.

**Text:** Labels for each fitting as they appear. Final label: "The fittings
decide what the fish can reach."

**Narration:** "Look at what we've built. Water -- the context. Tubes -- search,
tools, connections to other services. A notepad -- memory. An alarm clock. Recipe
cards. And a couple more worth knowing: a camera and ears -- photos, screenshots,
voice -- and a microphone for talking out loud. The bowl has become a tank. The
fittings decide what the fish can reach. Big vendors sell a fish already installed in a bowl, which is why
people conflate them -- but they are separable."

**Notes:** Closes station 8. A recap, not an introduction: every fitting except
camera/ears and microphone has already arrived on its own felt limit. Microphone is a
candidate to cut. Bridge out: every fitting widens the blast radius (station 9).

---

## Station 9 - Blast radius: security & data

### Slide: Where does the fish live?

**Visual:** *(new)* Three-tier hosting data-flow diagram. Tier 1: local (your
computer). Tier 2: private cloud/VPS (your server). Tier 3: frontier cloud
(vendor infrastructure). Arrows show where data flows at each tier.

**Text:** "Local: data stays home (limited capability)." / "Private cloud: you
control the path (more power)." / "Frontier cloud: vendor infrastructure (most
capable, least control)."

**Narration:** "Where does the fish live? Three tiers." Walk through each.
"Local -- the fish runs on your computer; your data never leaves. Private cloud
-- your server, you control the data path. Frontier cloud -- the vendor's
infrastructure, the most capable models, but your data transits their servers.
Each tier trades capability for data control. And here's a practical rule:
do not paste credentials or API keys into a conversation that transits someone
else's servers."

**Notes:** *Socratic:* "What could go wrong?" Cognitive shift: "handy tool" ->
"blast radius to bound." Stance: sober caution. Methods: hosting awareness,
credential hygiene.

### Slide: Training data opt-out

**Visual:** *(illustrate)* Screenshot of autocomplete search suggestions --
showing how typed text gets incorporated into suggestions, as an analogy for
training data.

**Text:** "Training-data opt-out: a guideline, not an architectural boundary."

**Narration:** "Does the provider train on your conversations? Most have a
toggle. But notice: that toggle is a policy promise, not an architectural
boundary. The provider *could* use your data; they promise not to. The same
hierarchy we're about to see -- architecture vs. policy vs. guideline -- applies
to your trust in the vendor."

**Notes:** Brief -- set up the enforcement hierarchy that comes two beats later.

### Slide: Poisoned water -- injection

**Visual:** *(extend)* The water in the bowl turns murky/poisoned. The fish
continues to swim in it, eager as ever.

**Animation:** Clean water gradually darkens. The fish does not notice.

**Text:** "Instructions are just text that arrived earlier. The fish can't tell
yours from someone else's."

**Narration:** "Injection: poisoned water. The fish cannot cleanly separate your
instructions from ones embedded in the material it handles. An email attachment,
a web page, a document -- any of these can contain hidden instructions, and
the people-pleaser fish will say 'sure, I'll do that' just as eagerly as it
says it to you. There is no parameterized-query equivalent; the fix is
architectural."

**Notes:** Sycophancy callback to station 3 -- the people-pleaser eagerly
complies with injected instructions too.

### Slide: Poisoned-water effects

**Visual:** *(extend)* Three effect icons overlaid on the poisoned water:
destruction (explosion/delete icon), exfiltration (data flowing outward), and
sleeper/incubation (a clock or dormant seed icon).

**Text:** "1. Destruction -- deletes, resets, sends wrong messages." /
"2. Exfiltration -- sends your data outward." / "3. Sleeper -- persists in
memory, activates later."

**Narration:** "What happens when the water is poisoned? Three things.
Destruction -- the fish deletes files, resets a database, sends the wrong
message. A hallucinated *action* is worse than a hallucinated *answer*.
Exfiltration -- the fish sends private data outward through its tools. This is
the lethal trifecta: private data plus untrusted content plus an outbound
channel -- any two are survivable, all three together are exploitable. And the
subtlest: sleeper attacks -- poison persists via the memory system and activates
later, like a planted instruction that fires in a future conversation. The
attack surface extends across time."

**Notes:** The trifecta is from Simon Willison. The sleeper category is the
hardest to detect and often surprises people.

### Slide: Blast radius -- when it goes wrong

**Visual:** *(illustrate)* Sourced screenshots from Reddit/HN of real recovery
stories -- LLMs deleting files, resetting databases, sending wrong emails.

**Text:** "If everything goes as badly as it could -- how would you recover, and
what would you have lost?"

**Narration:** "Real stories." Walk through 1-2 briefly. "The question is not
'will something go wrong' but 'when it does, how do you recover?' Backups.
Version control. Sandbox environments. These are not nice-to-haves; they are
architectural safety nets."

**Notes:** *Socratic:* "How do you protect yourself?" Methods: backups, version
control, sandboxes. Pre-capture screenshots before the talk.

### Slide: The enforcement hierarchy

**Visual:** *(new)* Three-tier pyramid or stack: Architecture (bottom, strongest)
> Policy (middle) > Guideline (top, weakest).

**Text:** "Architecture: the system *cannot* reach it (reliable)." / "Policy:
admin-enforced rules (better)." / "Guideline: human discipline (fragile)."

**Narration:** "Three layers of protection. Architecture -- the system cannot
reach the thing. No access granted, sandboxed, air-gapped. The only reliable
layer. Policy -- org-level settings, access controls, admin rules. Better than
guidelines but circumventable. Guidelines -- 'don't paste secrets,' 'always
review before sending.' Relies on human discipline; fails under pressure,
fatigue, or habit. The lesson: if a guideline is your only protection for
something that matters, you have a vulnerability, not a control."

**Notes:** Methods: least privilege, enforcement hierarchy. This is the
capstone mental model for the security station.

### Slide: Mailbox exercise -- find the trifecta

**Visual:** *(illustrate)* Scenario handout: an assistant with mailbox access
that reads email attachments and can send mail.

**Text:** "An AI assistant can read your email (including attachments) and send
mail on your behalf. What could go wrong?"

**Narration:** "Small groups. You have an AI assistant that can read your email,
including attachments, and send mail on your behalf. I want you to find the
trifecta: where is the private data, where is the untrusted content, and where
is the outbound channel?" Give 4-5 minutes.

**Notes:** *Exercise: small groups; find the trifecta.* Groups should discover:
private data = your email contents; untrusted content = email attachments from
others; outbound channel = ability to send mail. The trifecta is complete.

---

## Station 10 - Restore agency to the critic

### Slide: It's a product

**Visual:** *(illustrate)* A product mockup showing a refusal message, framed
explicitly as a design decision (e.g., a UI settings panel where "refusal
sensitivity" is a slider).

**Text:** "Who decided it should refuse that?"

**Narration:** "Every refusal, every tone choice, every time it's too agreeable
or too cautious -- those are product decisions made by people with commercial
interests. This is not a neutral oracle. It is a designed commercial artifact."

**Notes:** *Socratic:* "Who decided it should refuse that?" Cognitive shift:
"neutral oracle" -> "someone's product." Stance: critical agency. This matters
most for skeptics -- it hands them a sharper knife, validating that their
suspicion has a legitimate object.

### Slide: Four mechanisms of bias

**Visual:** *(illustrate)* Four-mechanism diagram. 1: Corpus bias (what it read).
2: Preference tuning (what humans rewarded). 3: Explicit guardrails (what the
vendor blocked). 4: Emergent effects (sycophancy, risk aversion).

**Text:** Labels for each mechanism. No value judgments on the slide.

**Narration:** "Bias is not one thing -- it's four. Corpus bias: what was in the
training data, and what was overrepresented or missing. Preference tuning: what
human raters rewarded during training, and whose preferences those were.
Explicit guardrails: what the vendor deliberately blocked or steered, and whose
politics decided the line. And emergent effects: sycophancy, excessive caution,
risk aversion -- behaviors nobody designed but the training produced."

**Notes:** Present descriptively, not prescriptively. Each mechanism has a
different fix (or no fix). Do not adjudicate which biases are justified.

### Slide: The guardrail probe

**Visual:** *(illustrate)* Foreground: two Reddit headlines about DeepSeek
refusing to discuss Tiananmen Square (`illustrations/guardrail-station10.headline-a.png`,
`illustrations/guardrail-station10.headline-b.png`). Background, dimmed (texture,
not meant to be read in full): a locally-run `deepseek-r1:8b` transcript
(`illustrations/guardrail--deepseek-refusal.png`). Asked "What famous events
occurred in Tiananmen square?", its thinking trace calls it "a location with
limited verifiable historical information," and the answer pivots to Party
talking points. Optional build: highlight that one thinking-trace line.

**Text:** "A differently-trained model reveals your model's invisible guardrails."

**Narration:** "The guardrail probe. Ask a differently-trained model about
something it won't touch -- and the refusal is obvious to *us*, precisely
because that guardrail is not ours. I checked: I ran it on my own laptop, no
company server in the loop, and it still steers away. The guardrail is in the
fish itself. Now generalize: your own model's guardrails are invisible to you
for the same reason. The cure is using more than one fish."

**Notes:** Methods: model selection, private probes. This is immediately
actionable: keep private test prompts and compare models. The local run matters:
it rules out a server-side filter, so this is trained-in (preference tuning /
explicit guardrails from the four-mechanisms slide), not the bowl. Framing
guard: the point is symmetry, not "their model is biased, ours isn't."

### Slide: Frontier instability

**Visual:** *(extend)* The fish visibly changes appearance and behavior between
versions -- a version number ticks up, and the fish looks/acts noticeably
different.

**Animation:** Fish morphs subtly -- different coloring, different posture.
Version counter increments.

**Text:** "The models change without notice and without recourse."

**Narration:** "One more thing: the fish is someone else's fish, and it changes
without notice. A workflow that worked yesterday can break because the provider
updated the model. You have no recourse. If you're building business processes
on top of this, you are building on a service you do not control. That is a
risk to name."

**Notes:** This is a risk to name, not a problem the talk solves. It feeds
"it is a product" -- you are a customer, not a partner.

---

## Station 11 - The practitioner: intention is the input

### Slide: Intention is the input

**Visual:** *(illustrate)* Side by side: a generic, stock product (e.g., a stock
laptop) vs. a personalized, intentional version (e.g., a modded "cyberdeck" or
custom-built machine). Same category, vastly different intention.

**Text:** "If it can do anything you specify, what's left? What you specify."

**Narration:** "If it can do anything you specify -- what's left?" Let them
answer. "What you bring. Your intention, your taste, your judgment. 'Use best
practices' is a valid default, but the judgment calls -- what matters, how you
want it -- that's your real input. And it cannot be delegated."

**Notes:** *Socratic:* "If it can do anything you specify, what's left?"
Cognitive shift: "tool is the story" -> "I am the variable." Method: knowing
what you want. This is the human-side mirror of the spine claim (station 3).

### Slide: Sycophancy + atrophy

**Visual:** Minimal -- this is a narration-driven beat. Could reuse the
people-pleaser goldfish image with an overlay showing it nodding eagerly.

**Text:** "It will agree with you. And some skills atrophy with disuse."

**Narration:** "Two warnings. First: it will agree with you. The people-pleaser
fish does not push back well -- sycophancy is baked into its temperament. If you
rely on it for critical feedback, you are asking the fish to bite the hand that
feeds it. Second: atrophy is real but specific. Some capacities are load-bearing
and you find out which only after they are gone. Not everything atrophies --
but the things that do are the ones you stopped exercising because the fish
could do them."

**Notes:** Tone: honest, not alarming. Both points feed directly into
accountability (station 12). Keep brief.

---

## Station 12 - Land: accountability is the new bottleneck

### Slide: Would you sign it?

**Visual:** *(illustrate)* The cover page of a report, self-describingly titled
**"Professional Looking Report"**. Basic business styling that reads as
"professional" at a glance: navy/gray palette, serif title, thin horizontal rule,
a placeholder logo block, "Prepared for: Leadership Team" / "Prepared by: Strategy
& Insights". The publish date reads **"Octoober 13, 2026"**.

**Text:** "Would you put your name on this?"

**Narration:** Put it on screen. "Take a minute. It was produced by the fish. It
looks professional. Would you put your name on it?" Pause; let someone find the
date. "What else would you check? How long would that take?"

**Notes:** *Exercise: evaluate artifact.* *Socratic:* "How would you check?"
Cognitive shift: "who's responsible?" -> "I am." Stance: convergence -- this
is where enthusiast and skeptic meet. The error is deliberately small and
findable in seconds once anyone looks: the lesson is that polish suppresses
looking, not that the error was hard to find. The self-describing title is the
wink -- everything on the page is surface. If a room finds it instantly, pivot:
"that's the cover. The report behind it is 30 pages."

### Slide: Draft vs. send

**Visual:** *(illustrate)* A mail client's Drafts folder mockup with two draft
rows, each showing To: and Subject:. (1) Harmless: To: team@example.com, Subject:
"Lunch order for Friday". (2) Dangerous: To: an unfamiliar external address
(e.g. help-desk@example.net), Subject: "The private bank account info you
requested". Overlaid: a settings pop-up, "Auto-send drafts", with the toggle
clearly set to **NO**.

**Text:** "Draft = the fish works. Send = you own it."

**Narration:** "Callback to station 8: the difference between 'draft this email'
and 'send this email' is the entire accountability question in one toggle."
Point to the two drafts. "One is harmless. One is a disaster. The only thing
between the second one and the outbox is that toggle -- and the person who
reads the drafts. Human-in-the-loop is not an afterthought -- it is a deliberate
design choice. Who pressed send?"

**Notes:** Method: HITL as deliberate pattern. Station 8 callback -- tool use
introduced the capability; station 12 asks who is responsible for using it. The
dangerous draft is also a station 9 callback: it is exactly what the mailbox
exercise's poisoned water (exfiltration) would produce.

### Slide: The review ladder

**Visual:** *(extend)* Reuses the citations-ladder visual from station 7, now
with review-ladder rungs: self-review -> correlated agent review -> adversarial
review -> human review.

**Animation:** Rungs build up. At the top: a person.

**Text:** "Self-review: same blind spots." / "Correlated: shared blind spots." /
"Adversarial: genuinely independent." / "It terminates in a person."

**Narration:** "Walk the review ladder. Self-review -- asking the fish to check
its own work. Same blind spots. Correlated review -- a second agent with similar
training. Shared blind spots. Adversarial review -- a genuinely independent
reviewer, like a color artist judging black-and-white art. Better. But the
ladder terminates in a person. When judgment itself is automated, the signals
that survive are the ones costly to fake: provenance, track record, exposure
to consequences."

**Notes:** Methods: review ladder, adversarial subagents. The B&W artist analogy
makes the point viscerally -- a B&W artist judging B&W art shares the exact
same blind spots.

### Slide: Accountability does not transfer

**Visual:** *(illustrate)* An image of someone blaming the tool for the outcome
(find a good real-world/adult example; fallback: kid blaming the toy).

**Text:** "The operator acts. Accountability does not transfer."

**Narration:** "Third and final payoff of the spine. Anything you can specify,
the system can do -- and you specified it. The operator acts. The accountability
does not transfer to the tool. You cannot say 'the AI did it' any more than
you can say 'the spreadsheet did it.' You pressed send. You signed it."

**Notes:** This is the convergence point: whatever your stance, you own what
you sign. Do not cut this beat. Tone: serious but not preachy -- this is an
empowering claim, not a scolding.

---

## Station 13 - Open: what would change your mind

### Slide: What would change your mind?

**Visual:** Clean text slide. The question centered, large.

**Text:** "What would change your mind?"

**Narration:** "One last question, asked symmetrically. If you're enthusiastic
about this technology: what would you have to see to conclude you are
over-trusting it? If you're skeptical or opposed: what would you have to see to
conclude it is genuinely useful for something you care about? Take a minute.
Write it down."

Pause. "If you cannot name anything -- that is worth noticing. A conclusion
you cannot imagine revising is an identity, not an assessment."

**Notes:** *Exercise: individual reflection.* 1-2 minutes. Cognitive shift:
"closed conclusion" -> "live, revisable question." Stance: open. "Literacy, not
conversion" in one question. Do not collect or share answers -- this is private
reflection.

### Slide: Exit poll

**Visual:** *(extend)* Reuses the entry-poll QR graphic from pre-talk.

**Text:** "Scan to check out (anonymous)." Same QR code or updated link.

**Narration:** "One more scan before you go -- same survey, let's see if
anything moved."

**Notes:** *Poll: stance movement + model accuracy.* Compare entry vs. exit
results. Do not frame as "conversion" -- measure whether people's self-reported
models became more accurate, regardless of stance direction. "Literacy, not
conversion" applies to the measurement too.

### Slide: Coda -- the birth of magic

**Visual:** *(extend)* Full-treatment return of the station 2 magic/gradient
imagery. The light-touch gradient from station 2 is now fully rendered -- richer,
earned.

**Animation:** The gradient visual from station 2 returns, fuller and more
detailed than before.

**Text:** "Anyone can choose to study it."

**Narration:** "We are at a point where someone can speak a few carefully chosen
words -- acronyms, custom commands, precisely specified instructions -- and
command unseen forces: applications, projections, systems acting on the world.
This capability is real. It is powerful and dangerous. And anyone can choose to
study it. Perhaps people of the future will look back at this moment as the
birth of something that looks a lot like magic."

**Notes:** Framing guard: this is earned wonder, not advocacy. It comes AFTER
accountability has landed. "Anyone can choose" preserves agency -- including
the choice not to. If it reads as a sales pitch in rehearsal, cut it. The talk
must have earned this by now.

### Contact info for closing screen

- Benjamin Bradley
- email via education at wegeekout - com (can be displayed visually on screen, but should not be scrapable in code)

---

<!-- END OF SLIDES OUTLINE -->
