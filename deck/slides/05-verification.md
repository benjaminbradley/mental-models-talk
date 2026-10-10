# When is it safe to use?

<div class="versus">
<div class="lean fragment">
<h3>Checking &lt; doing: lean in</h3>
<p>"Write a script that renames these files."</p>
<p class="small">Run it. Did it work?</p>
</div>
<div class="beware fragment">
<h3>Checking &ge; doing: beware</h3>
<p>"Summarize this 40-page document."</p>
<p class="small">To check it, you'd have to read the whole thing.</p>
</div>
</div>

Lean in where checking is cheaper than doing. <!-- .element: class="fragment lede" -->

Note:
"When IS it safe to use this?" Let them answer.

The most useful thing I can give you today -- one rule that works regardless of your stance: lean in where checking is cheaper than doing. Beware where it isn't.

The two classic cases. Code: easy to check -- run it, see if it works (or run the tests). That's a big part of why programmers adopted these tools first. A document summary: hard to check -- you'd have to read the whole thing, which is the work you were trying to skip. The value isn't in the output; it's in the ratio between checking and doing.

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

<div class="versus">
<div class="beware">
<h3>One big ask</h3>
<p>"Plan a team offsite."</p>
</div>
<div class="lean fragment">
<h3>Verifiable pieces</h3>
<ul class="small">
<li>Find three venues within budget, 30 minutes from the office.</li>
<li>Draft an agenda for a half-day session.</li>
<li>Make a logistics checklist.</li>
</ul>
</div>
</div>

<div class="placeholder fragment">TODO: capture the decomposition demo -- monolithic vs. decomposed prompt and output</div>

Note:
One more technique: decomposition. Instead of one massive prompt, break the task into sub-tasks *before* you start, so each piece can be checked on its own.

"Plan a team offsite" is hard to check. "Find three venues within budget" is easy to check. "Draft an agenda for a half-day session" is easy to check. Same task -- but now every piece sits in the "lean in" zone.

Distinct from iteration (refining after the fact), which lives at station 6 with restart vs. repair.

Bridge out: "We've been treating the fish as the whole system. It isn't."
