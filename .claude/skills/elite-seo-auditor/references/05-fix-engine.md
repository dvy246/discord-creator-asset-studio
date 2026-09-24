# Fix Engine

Every material finding (Critical, High, or Medium — Low and Informational items can be listed
more briefly, see below) becomes a concrete, located, actionable remediation item. A finding
without a fix attached is half a job.

## Required fields per fix

- **Issue** — the specific, named problem
- **Why it matters** — tied back to an actual mechanism (crawlability, a specific spam policy,
  the helpfulness test, a specific Core Web Vital), not a generic "this helps SEO"
- **Evidence found** — the actual thing observed: the fetched HTML snippet, the file and line,
  the header value, the status code
- **Severity** — Critical / High / Medium / Low / Informational, per `04-severity-rating-engine.md`
- **Exact location** — the specific file path, URL, or template name; never "the metadata" with no
  further specificity when a more precise location is knowable
- **Recommended fix** — the specific change, not a category of change
- **Implementation approach** — how it would actually get done in this specific codebase/CMS
- **Expected outcome** — what changes as a result, stated modestly and honestly
- **Risk of making the change** — what could go wrong, even for a change that looks obviously safe
- **Whether user approval is required** — per `06-change-governance.md`

## The fix-quality rule — no vague recommendations, ever

Never write:
> "Improve SEO." / "Optimize metadata." / "Improve content."

Instead write something with a real location and a real, specific instruction, e.g.:
> "In `src/pages/blog/[slug].astro`, the title is generated as `` `${category} - Blog - ${siteName}` ``
> for every post, which is why 84 published posts currently share a duplicate, non-descriptive
> title pattern. Generate the title from each post's actual primary topic (e.g. from its
> frontmatter `title` field) instead, and keep the existing canonical URL — this doesn't touch
> routing, just the title string."

If a genuinely specific location or fix isn't knowable from the available evidence, say exactly
what's missing to make it specific ("the exact template generating this needs to be located — it
wasn't in the files provided") rather than writing a vague recommendation and moving on.

## Priority order

- **P0 — Critical.** Fix or get approval immediately; nothing else on the list matters until
  these are addressed or explicitly deferred with the user's knowledge
- **P1 — High-impact.** Highest expected impact after P0
- **P2 — Medium-impact.** Strong optimization opportunities, not urgent
- **P3 — Low-impact / polish.** Incremental gains, batch these rather than treating each
  individually

Priority conceptually follows `Severity × Scope × Search Impact × Implementation Confidence` —
use this as a mental model for ordering within a tier, not as a formula to compute and cite as if
it produces real numbers. A High-severity issue affecting every template outranks a High-severity
issue affecting one page, even though both are nominally "High" — say so explicitly when ordering
the list rather than leaving two High items in an arbitrary order.

## Handling Low and Informational items

These don't each need the full field set above — listing 40 Low-severity items with ten fields
apiece buries the P0/P1 items that actually matter. Group them into a short batched list ("Low-
priority polish: N items — inconsistent URL casing on 3 legacy pages, missing OG image on the
archive page, title 4 characters over the practical length guideline on 2 posts") and offer to
expand any of them into a full fix record on request.
