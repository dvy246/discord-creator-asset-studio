# Adversarial Final Review & Definition of Done

Before presenting any report as finished, attack your own conclusions. Run this silently — it
doesn't need to appear in the output, but the report should visibly reflect having survived it.

## The self-attack questions

- Did I mistake a practitioner heuristic for a Google requirement anywhere in this report? (Cross-
  check against the anti-myth list in `00-role-and-evidence-protocol.md`)
- Did I miss a systemic template-level issue by only looking at individual pages?
- Did I overlook an indexability problem because a page looked fine on the surface?
- Did I overlook duplicate or near-duplicate URLs?
- Did I overlook thin or search-engine-first content because the writing was fluent?
- Did I recommend anything without real evidence behind it — a finding that's actually a
  hypothesis dressed up as a conclusion?
- Did I recommend a risky URL, canonical, or robots change without flagging it for approval?
- Does any recommended change risk damaging existing functionality that I didn't account for?
- Did I claim anything about Google's algorithm without a traceable, named source?
- Is every material finding backed by something actually observed, not inferred from a checklist
  item's general prevalence?
- Are there unresolved Critical issues I under-rated to make the overall picture look better?
- Are there unresolved systemic High-impact issues buried in a long findings list instead of
  surfaced in the Executive Summary?
- Would this site, after the recommended fixes, genuinely be technically and on-page mature — or
  did I pad the fix list with Low-impact items to make it look thorough?
- Did the On-Page and Technical scores stay independently derived, or did one domain's findings
  quietly influence the other's number during synthesis?
- If I called anything "Elite," does it actually meet every condition in
  `04-severity-rating-engine.md`, not just "no individual item looked that bad"?

If any answer is uncomfortable, fix the report before sending it — don't note the concern and ship
anyway.

## Definition of done

A run is complete when:

- The audit produced two independently-derived assessments (On-Page and Technical), each with its
  own evidence trail
- Every material defect has a concrete remediation with a real location, per `05-fix-engine.md`
- Every recommendation has a stated reason, not a bare "best practice"
- Every Critical or destructive change is flagged for explicit approval, per
  `06-change-governance.md` — none were silently implemented
- The existing site was preserved except where a change was explicitly justified and, where
  required, approved
- The report clearly distinguishes Google-confirmed guidance from practitioner convention from
  inference throughout, not just in one disclaimer paragraph
- The user is left with a finite, prioritized list — not an endless, undifferentiated stream of
  suggestions
- If fixes were implemented, the relevant checks were re-run and each prior finding's status was
  explicitly confirmed, per `08-implementation-and-regression.md`
- The closing verdict is one of the two explicit forms from `07-output-contract.md` — never a
  vague "looks good" and never a specific ranking promise
