# Severity Model & Rating Engine

Applies identically to both the On-Page and Technical passes, so the two domain scores stay
methodologically comparable even though they're never averaged into one number.

## The severity model — classify every finding

### Critical
A defect that can materially prevent crawling, indexing, correct canonicalization, access to core
content, correct rendering, or that violates a named Google spam policy outright.

Examples: important pages accidentally `noindex`ed; important pages unintentionally blocked in
`robots.txt`; a broken canonical strategy affecting core URLs; a major rendering failure hiding
content from the raw server-rendered HTML; large-scale duplicate URL generation; a severe
redirect/indexation problem; a systematic spam pattern (scaled thin content, fabricated schema
ratings, keyword-stuffed doorway pages); a trimmed or missing disclaimer on YMYL content.

**Rule: an unresolved Critical finding caps the relevant domain's score, regardless of how well
everything else performs.** See the bands below for the exact cap.

### High
A material weakness likely to reduce search usefulness, discoverability, relevance, quality,
trust, or performance, but that doesn't outright block crawling/indexing or violate a spam policy.

Examples: thin content that answers the query poorly but is still indexable; a missing or broken
sitemap on a site that needs one; widespread duplicate titles across templates; INP consistently
failing on interactive pages; missing authorship on YMYL content; a systemic pattern (not a single
instance) of any Medium-tier issue below.

### Medium
A meaningful optimization opportunity that doesn't fundamentally prevent the site from functioning
in Search.

Examples: meta descriptions missing or generic on some pages; suboptimal internal linking to an
important but not core page; a single broken external citation link; images missing responsive
`srcset`; a template using microdata instead of JSON-LD but otherwise valid.

### Low
Minor polish with limited likely impact.

Examples: a title a few characters over the practical truncation guideline; inconsistent URL
casing on a low-traffic section; a missing Open Graph image on a rarely-shared page.

### Informational
An observation or optional enhancement — not a defect at all. Report these separately; don't let
them inflate the issue count or imply the site is worse off than it is.

## The rating engine

Produce **two independent 0-10 ratings** — On-Page SEO and Technical SEO — never a single blended
number. They measure different things and a strong technical foundation under weak content (or
vice versa) is a genuinely different situation than a mediocre score in both, so collapsing them
loses exactly the information the user needs to prioritize.

### Rating method

- Ratings are evidence-based, derived directly from the findings each pass actually produced —
  never assigned from a general impression of "this looks like a decent site"
- **Do not give a 10/10 simply because most checklist items pass.** A perfect-looking first-pass
  audit is more often a sign that the audit didn't dig deep enough than that the site is flawless
  — before finalizing a 9.5+, re-check whether every section was actually verified with real
  evidence or whether some passed by default because nothing obviously wrong was noticed
- A single unresolved **Critical** finding automatically caps that domain's score at **3.0**,
  regardless of everything else — see the elite-requirement note below for why this cap exists
- A domain with major unresolved **High**-severity issues, even with zero Criticals, cannot score
  above **7.0**
- Never imply the score represents Google's actual internal ranking score — it's an internal
  quality measure against this skill's own evidence-graded checklist, and should be presented that
  way explicitly in the final report

### Rating bands

| Score | Band | Meaning |
|---|---|---|
| 0 - 3.0 | Critical / poor | At least one unresolved Critical finding, or pervasive fundamental failures |
| 3.1 - 5.0 | Weak | No blocking Critical, but foundational gaps remain across multiple sections |
| 5.1 - 7.0 | Functional | Core mechanics work; material weaknesses remain that cap the score below Strong |
| 7.1 - 8.5 | Strong | Solid execution with real, specific, non-cosmetic remaining gaps |
| 8.6 - 9.4 | Advanced | Near-comprehensive coverage; only Low/Informational items remain, or a small number of contained Medium items |
| 9.5 - 10 | Elite | Meets every condition in the Elite requirement below — not just "mostly clean" |

### The Elite requirement

To call either domain "Elite," **all** of the following must hold, not just a high pass rate:

- No unresolved Critical issues anywhere sampled
- No major systemic weakness (a pattern repeated across templates, not a one-off)
- Strong, evidenced coverage of the checks that matter most for *this specific site type* — an
  ecommerce site missing Product schema is a real gap even if everything else is clean; a content
  blog missing Product schema is irrelevant and shouldn't be held against it
- No manipulation patterns anywhere on the domain (spam-policy-adjacent tactics, even subtle ones)
- Consistency across templates, not just the one or two pages that happened to be sampled closely
- Meaningful validation of the important templates specifically, not an inference from the
  homepage alone

If any of these doesn't clearly hold, the score stays below 9.5 even if no individual finding
looks severe in isolation — Elite is a statement about the whole site's pattern, not a tally.

## Presenting the score

Always show both domain scores side by side with their band label, never a single average. Pair
each score with the count of findings by severity (e.g. "Technical SEO: 6.8 / 10 — Functional. 0
Critical, 2 High, 5 Medium, 3 Low"), so the number is never presented without the evidence that
produced it sitting right next to it.
