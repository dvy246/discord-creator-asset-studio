# Output Contract

Use this exact shape for a full audit report. For scoped runs (on-page only, technical only,
"just the number"), use the matching subset of sections rather than forcing the full structure —
see the Step 0 table in `SKILL.md` for which sections a given request actually needs.

If the deliverable is a document the user will keep or share (not just read in this conversation),
build it as a real file rather than a long chat message — check whether a docx/pdf/markdown skill
is available in this session and use it, following that skill's own conventions. A quick "what
would this score" answer stays conversational and inline.

## Section 1 — Executive Summary

- Overall website diagnosis in plain language, a few sentences
- On-Page SEO score /10 with band label
- Technical SEO score /10 with band label
- Elite status for each: yes/no, and if no, the one or two things most directly blocking it
- Top 5 highest-impact issues across both domains, ranked
- Immediate blockers, if any — the things that would make the rest of the report moot until fixed

## Section 2 — Scorecard

A table: Category | Score/Status | Severity of worst open issue | Evidence pointer | Elite status.
One row per major section from the two auditor checklists (Search Intent, Content Quality, E-E-A-T,
Titles/Headings, Crawlability, Indexability, Core Web Vitals, Structured Data, etc.) — enough
granularity that the user can see exactly where strength and weakness live, not just the two
top-line numbers.

## Section 3 — On-Page SEO Audit

For each finding, in priority order (P0 → P3):
Severity | URL/page | Issue | Evidence | Why it matters | Exact fix | Approval required?

## Section 4 — Technical SEO Audit

Same shape as Section 3, scoped to technical findings.

## Section 5 — Quick Wins

Only changes that are simultaneously: high confidence, low risk, backed by clear evidence, and
meaningfully beneficial. This is a short list by design — if everything ends up in Quick Wins, the
bar wasn't applied strictly enough.

## Section 6 — Critical Approval Queue

Every change that requires explicit user sign-off before implementation, per
`06-change-governance.md` — grouped by category (URL changes, robots/indexability changes,
redirect changes, content removal, etc.), each with its fix-engine record.

## Section 7 — Implementation Plan

Four phases, in order:
- **Phase 1 — Critical.** What, and what it needs approved before it can start
- **Phase 2 — High impact**
- **Phase 3 — Medium impact**
- **Phase 4 — Polish**

## Section 8 — Not Verifiable

Every item where evidence genuinely couldn't be obtained this run — never silently assumed pass or
fail. State exactly what tool or access would resolve it (Search Console Core Web Vitals report,
a live-rendering check, log-file access, etc.).

## Section 9 — Final State

What specifically needs to change to move On-Page → 10/10 and Technical → 10/10, stated as
concrete remaining work, with an explicit reminder that these are internal quality scores against
this skill's own evidence-graded checklist — not Google's actual ranking score, and not a
guarantee of any ranking outcome.

## The closing verdict — never a vibe

Every report ends with one explicit, honest line, never a bare courtesy "looks good":

- `SEO FOUNDATION COMPLETE — no further structural SEO work identified, with evidence for each
  item`, or
- `OPEN ITEMS REMAIN:` followed by a short, specific, prioritized list.

If there's genuine uncertainty about whether something is actually clean, it isn't — mark it open
and state exactly what would need to be checked to close it. Never round uncertainty up to a pass.
