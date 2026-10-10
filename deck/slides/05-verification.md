# When is it safe to use?

<div class="versus">
<div class="lean fragment">
<h3>Checking &lt; doing: lean in</h3>
<div class="scene"><svg class="timebars" viewBox="0 0 420 250" role="img" aria-label="Time: doing takes long, checking is quick"><text class="icon" x="40" y="70" text-anchor="middle" style="font-size: 54px">🕐</text><path d="M 90 200 H 400" style="stroke: var(--ink); stroke-width: 5" stroke-linecap="round"/><rect x="120" y="30" width="100" height="170" rx="6" style="fill: var(--blue); stroke: var(--ink); stroke-width: 5"/><rect x="270" y="165" width="100" height="35" rx="6" style="fill: var(--yellow); stroke: var(--ink); stroke-width: 5"/><text class="tag" x="170" y="240" text-anchor="middle">doing</text><text class="tag" x="320" y="240" text-anchor="middle">checking</text></svg></div>
<p>"Write a script that renames these files."</p>
<p class="small">Run it. Did it work?</p>
</div>
<div class="beware fragment">
<h3>Checking &ge; doing: beware</h3>
<div class="scene"><svg class="timebars" viewBox="0 0 420 250" role="img" aria-label="Time: checking takes as long as doing, or longer"><text class="icon" x="40" y="70" text-anchor="middle" style="font-size: 54px">🕐</text><path d="M 90 200 H 400" style="stroke: var(--ink); stroke-width: 5" stroke-linecap="round"/><rect x="120" y="90" width="100" height="110" rx="6" style="fill: var(--blue); stroke: var(--ink); stroke-width: 5"/><rect x="270" y="30" width="100" height="170" rx="6" style="fill: var(--yellow); stroke: var(--ink); stroke-width: 5"/><text class="tag" x="170" y="240" text-anchor="middle">doing</text><text class="tag" x="320" y="240" text-anchor="middle">checking</text></svg></div>
<p>"Summarize this 40-page document."</p>
<p class="small">To check it, you'd have to read the whole thing.</p>
</div>
</div>

Lean in where checking is cheaper than doing. <!-- .element: class="fragment lede" -->

Note:
"When IS it safe to use this?" Let them answer.

The most useful thing I can give you today -- one rule that works regardless of your stance: lean in where checking is cheaper than doing. Beware where it isn't.

The two classic cases (the bars: time to do it yourself vs. time to check the fish's version). Code: easy to check -- run it, see if it works (or run the tests). That's a big part of why programmers adopted these tools first. A document summary: hard to check -- you'd have to read the whole thing, which is the work you were trying to skip. The value isn't in the output; it's in the ratio between checking and doing.

Caveat worth saying out loud: code is only cheap to check if you can run it and tell whether it worked. For someone who can't, it moves to the "beware" side. The asymmetry depends on who is checking. (Another easy one: a spreadsheet summary -- open the file and check the totals.)

Stabilization moment: after the disorientation of station 4, one durable, stance-neutral tool. Connects to the map: verification means leaving the map to check the territory.

---

<!-- .slide: data-visibility="hidden" -->
# Sort your own work

<div class="versus">
<div class="lean"><h3>Easy to check</h3></div>
<div class="beware"><h3>Hard to check</h3></div>
</div>

1. List 5 real tasks from your work or life.
2. For each: if I handed this to the fish, would checking be cheaper than doing it myself?
3. Compare with a partner. Do you agree?

Note:
HIDDEN for now (time; see todo.md § Hidden slides). To bring it back, delete the `data-visibility="hidden"` line above the title.

Take a minute. List five things you actually do. For each, ask: would checking the result be cheaper than doing it myself? Sort them on that spectrum. Then challenge your partner -- do they agree with your sorting?

Exercise: individual then pair.
Timing: 3-4 minutes individual, 2-3 minutes pairs.

Useful regardless of stance -- skeptics and enthusiasts both have work. The exercise earns trust by being genuinely useful.

---

# Decompose before you start

<p class="fragment"><span class="term">task decomposition</span></p>

<div class="versus decompose">
<div class="beware">
<h3>One big ask</h3>
<p class="prompt">Plan a one-day offsite event in Austin for a team of 6, include agenda and budget.</p>
<p class="output">...assumptions... agenda... venue... activities... budget... location... prep work...</p>
</div>
<div class="lean fragment">
<h3>One checkable piece first</h3>
<p class="prompt">I want to plan a one-day offsite event in Austin for a team of 6. Please start by listing three possible venues within 30 minutes of 78757 which are available for &lt; $1000, include on-site food options, and free parking.</p>
<p class="output">Venue option 1 details... option 2 details... option 3 details...</p>
</div>
</div>

Note:
One more technique: decomposition. Instead of one massive prompt, break the task into sub-tasks *before* you start, so each piece can be checked on its own.

Left: one big ask. The real answer runs pages -- here it is in symbols: assumptions, agenda, venue, activities, budget, location, prep work. Every piece depends on guesses it made about the others. To check it, you'd have to check all of it.

(Click.) Right: same goal, but start with one piece. Three venues, within 30 minutes of 78757, under $1000, food on site, free parking. Each option is easy to check: is it really that close? Really under budget? Once you pick a venue, the agenda and budget come next -- built on something you've already checked.

Same task -- but now every piece sits in the "lean in" zone.

Distinct from iteration (refining after the fact), which lives at station 6 with restart vs. repair.

Bridge out: "We've been treating the fish as the whole system. It isn't."
