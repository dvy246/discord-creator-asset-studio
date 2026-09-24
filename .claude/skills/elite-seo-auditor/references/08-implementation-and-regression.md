# Implementation Mode & Regression Checking

## Default behavior

**Audit first. Do not modify anything on the first pass, even a change that looks obviously
safe.** Present the findings and the approval-required queue, then wait. This default holds even
when the user's original request sounded like "fix my SEO" rather than "audit my SEO" — "fix"
still means "show me what's wrong and what you'd do about it" until they've actually seen the
findings and said to proceed. The one exception: if the user has already reviewed a prior report
from this same skill in this conversation and is now explicitly saying to implement it, that
counts as approval for the items they're referring to — don't make them re-confirm a report they
already read.

## After the audit

Present findings and the approval-required changes clearly, using the Section 6 (Critical
Approval Queue) shape from `07-output-contract.md`. Make it easy for the user to say yes to a
batch, not just item-by-item — group by category so "approve all robots.txt changes" is a single
decision, not five.

## When the user approves

Implement only the approved changes, plus anything already cleared as safe-to-auto-apply per
`06-change-governance.md`. Follow the minimal-change principle for every single edit — resist any
temptation to "while I'm in here" fix something adjacent that wasn't part of the approved scope;
log it as a new finding instead.

## After implementation — regression check

Before declaring the implementation done, verify none of the following broke as a side effect:

- [ ] Existing routes still resolve correctly
- [ ] Existing functionality still works (forms, interactive elements, navigation)
- [ ] Existing design/layout remains intact unless a design change was explicitly part of the
  approved fix
- [ ] Canonical strategy remains coherent after the change — no new canonical loops or mismatches
  introduced
- [ ] Metadata remains valid (no unclosed tags, no broken title-generation logic)
- [ ] Internal links remain valid — the fix didn't quietly break a link that pointed at something
  now moved or removed
- [ ] Sitemap remains valid and still reflects reality
- [ ] Robots behavior remains intentional — re-read the actual `robots.txt` after any change
  touching it, don't just trust that the edit did what was intended
- [ ] Structured data remains valid after the change
- [ ] No new duplicate content was introduced as a side effect
- [ ] No new rendering problems were introduced
- [ ] No material performance regression was introduced (if a change touched anything that could
  plausibly affect LCP/INP/CLS, say so explicitly even if it can't be measured live this run)

## Re-audit

Re-run the relevant checklist sections — not the whole nine-step process from scratch — against
the same evidence sources used originally, and explicitly confirm, finding by finding, whether
each one from the prior report is actually resolved. "Re-run and get a new report" without tying
it back to what was supposedly fixed defeats the point; the user needs to know specifically
whether *this* fix worked, not just that the new overall number looks better.

If a finding is still open after an attempted fix, say so plainly and explain why the fix didn't
fully resolve it — don't quietly mark it closed because a change was made in that area.

## When routine re-auditing stops being necessary

Once every P0/P1/P2 finding is resolved and confirmed, there's no need to keep re-running this
full skill on a schedule — say so. Re-audit again only when the site changes materially, Google's
guidance changes in a way that's actually relevant (see the freshness note in
`00-role-and-evidence-protocol.md`), or new evidence surfaces a problem (a traffic drop, a Search
Console warning, a user report). Don't manufacture an ongoing-maintenance narrative just to seem
thorough.
