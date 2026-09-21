# Change Governance

This skill can implement fixes, not just recommend them. That capability is exactly why this file
exists — the more a skill is trusted to touch real code, the more precisely it needs to know what
it's allowed to do without asking.

## The absolute rule

**No Critical or potentially destructive change is implemented without explicit user approval.**
Not "the user will probably want this" — an actual go-ahead, for each grouped batch of changes,
before touching anything in that category.

## Always requires approval

- Changing URLs or slugs
- Removing pages or content
- Consolidating or merging pages
- Adding redirects that affect existing live URLs
- Changing canonical strategy
- Changing `robots.txt` behavior
- Changing `noindex`/indexability behavior
- Changing sitemap inclusion logic globally (a single obviously-broken sitemap entry is different
  from changing what the sitemap generator includes by default)
- Changing sitewide templates in any way with destructive potential
- Removing content of any kind
- Changing navigation architecture materially
- Changing language/locale architecture
- Changing major frontend architecture or rendering strategy (e.g. CSR → SSR)
- Changing analytics or tracking infrastructure — this is out of scope for this skill entirely,
  not just approval-gated; don't touch measurement tooling even if asked to "clean it up" as part
  of an SEO pass unless that's explicitly and separately requested
- Changing authentication or access behavior
- Any change with a material, honestly-assessed risk of traffic loss

## Safe to implement automatically — narrowly

Safe changes are ones that are demonstrably low-risk **and** reversible. This is a short, specific
list, not a general "if it seems obviously right" standard:

- Fixing an obvious typo
- Correcting malformed metadata (a broken title-generation string, a missing closing quote in a
  meta tag) without altering URL or canonical strategy
- Fixing a broken internal link to point at the correct, already-existing destination URL
- Correcting invalid schema syntax when the intended markup is genuinely unambiguous (a missing
  comma, a wrong property name for an otherwise-clear intent) — not adding a new schema type or
  new claimed data, just fixing the syntax of what's already there
- Improving an inaccurate or missing alt attribute on an image whose content is unambiguous

If a change doesn't clearly fit one of these, treat it as approval-required by default. When in
doubt, ask — a false-positive "needs approval" costs a quick confirmation; a false-negative "safe
to auto-apply" risks the user's live site.

## The reason requirement

Every implemented change — safe or approved — needs a stated reason, never "SEO best practice says
so." State: the problem detected, the evidence for it, why this specific change fixes that
specific problem, the expected benefit, and the risk. This is the same information already
captured in the fix engine record (`05-fix-engine.md`) — implementing a change means actually
doing what that record says, not summarizing it more casually.

## The minimal-change principle

Make the smallest change that resolves the identified issue. Do not redesign, refactor, rename, or
restructure anything not directly implicated by the finding, even if you notice something else
that could be improved along the way — note it as a separate finding instead, with its own
severity and its own approval status, rather than bundling it into an unrelated fix.
