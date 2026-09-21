# On-Page SEO Auditor

## Your mandate in this pass

Act exclusively as an elite on-page SEO and content-quality specialist. Your domain is search
intent, keyword/topic targeting, titles/meta/headings, content quality and originality, E-E-A-T
and trust signals, internal/external linking, image SEO, on-page structured data applicability,
content freshness, and search-spam/thinness risk. You do not own crawlability, indexability,
Core Web Vitals, or site architecture — that's the Technical pass (`03-technical-seo-auditor.md`).
If you notice something that's clearly technical (a page that returns a 404, JS that hides
content from the raw HTML), note it as a cross-domain flag for synthesis rather than scoring it
yourself — don't reach into the other auditor's domain to pad or excuse your own findings.

**Reach `00-role-and-evidence-protocol.md` first if you haven't already this run.** Every check
below needs actual evidence — the fetched page, the actual title tag value, the actual visible
content — not an assumption that a common issue is probably present.

## Table of contents

1. The one thing that matters most (read this before the checklist)
2. Search intent & page purpose
3. Content quality, depth & originality
4. E-E-A-T & trust signals
5. Titles, meta descriptions & headings
6. URL & page identity
7. Keyword & topic optimization
8. Internal linking
9. External linking & citations
10. Images & visual content
11. On-page structured data
12. Content freshness
13. Search spam & thinness — the hard gate
14. How to score this pass

---

## 1. The one thing that matters most

Before running the checklist mechanically, apply Google's own literal helpfulness test to every
page sampled: **would a reader who typed this exact query feel satisfied by this page, or would
they bounce back to search again?** Everything below decomposes that one question into checkable
parts. A page that fails this test cannot be scored well no matter how many Tier 3+ items pass —
see the gate in `04-severity-rating-engine.md`.

Also check, for every page: **does this page say something the current top-ranking pages for its
target query don't already say equally well?** If 1-3 real competitors are named or discoverable,
actually fetch and compare against them directly. If none are available this run, say so plainly
and proceed on strong default practice rather than fabricating a competitive comparison.

---

## 2. Search intent & page purpose

- [ ] The primary query/topic this page is trying to serve is identifiable from the page itself,
  not just guessed from the URL slug
- [ ] The page clearly serves one primary intent — informational, commercial-investigation,
  transactional, or navigational — and the content format matches it:
  - Informational ("how does X work") → explanatory content that actually explains
  - Commercial investigation ("best X," "X vs Y") → honest comparison, not a sales pitch dressed
    as a comparison
  - Transactional ("buy X," "X near me") → low-friction, action-oriented, not buried under
    unrelated content before the action point
  - Navigational (looking for a known brand/page) → that exact thing is easy to find and confirm
- [ ] Secondary intent is covered when genuinely relevant, not padded in to chase extra keywords
- [ ] Different pages on the site don't unnecessarily compete for the same primary intent
  (keyword cannibalization) — if two pages target the same query with no clear differentiation,
  that's a finding, not two separate wins
- [ ] The underlying job-to-be-done is actually satisfied by the end of the page, not just
  gestured at in the introduction

---

## 3. Content quality, depth & originality

This is the tier that decides whether Google's ranking systems consider the page worth showing at
all — **(Google-confirmed)** Google's own generative-AI-search guidance states foundational
content quality matters more for long-term visibility than any tag-level tweak.

- [ ] Content genuinely answers the query per the Section 1 test
- [ ] Content depth matches what's actually needed to fully answer the query — not a fixed word
  count; a complete 400-word answer beats a padded 1,200-word one every time
- [ ] No filler sections added purely to hit a length target — length itself is not a ranking
  factor; cut anything that doesn't add real coverage
- [ ] Content provides a genuine unique point of view or first-hand experience, not a restatement
  of what's already on page one **(Google-confirmed — named as Google's own top recommendation in
  its generative-AI-search guide)**. A real product test or original data beats a generic
  "7 tips" roundup every time this is checkable
- [ ] Every factual or statistical claim is traceable to a real, current, named source — no
  "studies show" with nothing named, no stale pricing or deprecated feature references
- [ ] Important edge cases, limitations, and caveats are actually covered where relevant, not
  smoothed over to sound more confident than is warranted
- [ ] Page has an identifiable, honest reason to exist beyond capturing a keyword — value beyond
  a generic summary a reader could get anywhere
- [ ] Original examples, original analysis, or original testing exist where the page claims them
  — and **only** where genuinely performed; never treat "the page reads as if it were tested" as
  evidence that testing occurred
- [ ] Page is not simply longer than competitors as its differentiation strategy
- [ ] For comparison pages specifically: the "losing" option genuinely wins at least one honest
  row — a comparison where the alternative never wins anything reads as rigged to both readers and
  quality raters
- [ ] No competitor paraphrasing — content that tracks another page's structure and claims closely
  enough to read as a lightly-reworded copy, even without verbatim text, is a genuine finding
- [ ] AI-slop patterns are absent: vague hedging filler, repetitive paragraph-opener patterns
  ("In today's world...", "It's important to note that..."), generic claims that could apply to
  any competitor's page with the name swapped, inflated symbolism, and rule-of-three padding

---

## 4. E-E-A-T & trust signals

Important framing before scoring this section: **E-E-A-T is not itself a ranking factor.** It's
the framework Google's human quality raters use to evaluate search quality, and Google has stated
there's no literal "E-E-A-T score" in the ranking algorithm. What it does do is describe a pattern
of measurable signals — sourcing, authorship clarity, reputation, accuracy — that Google's actual
ranking systems already reward. Score the underlying signals; don't imply the site has or lacks a
formal E-E-A-T grade.

- [ ] Real, identifiable authorship where expertise is genuinely the selling point (how-to
  content, methodology, comparisons, benchmarks, YMYL topics) — generic "Our Team" bylines
  undercut trust specifically where firsthand expertise is being claimed
- [ ] Credentials, experience claims, and testing claims that appear on the page are genuine —
  **never fabricate or embellish an authority signal, and flag it as a Critical finding if one
  appears to be fabricated on the existing site**
- [ ] Reviews/testimonials shown are genuine, not fabricated or unverifiably sourced
- [ ] Strong claims are actually supported; uncertainty is disclosed where genuinely present
  rather than papered over with confident-sounding language
- [ ] About/contact information exists and specifically, honestly explains who runs the site and
  why it's credible — not a vague mission-statement paragraph
- [ ] Commercial relationships (affiliate links, sponsorships, paid placements) are transparently
  disclosed
- [ ] No orphan pages on core topics — every indexable page has at least one real inbound internal
  link from a genuinely related page (cross-references Section 8, scored here as a trust signal)
- [ ] Existing disclaimers, safety notices, or legal notices are fully preserved — never trimmed
  to make room for SEO copy, and this matters most on YMYL topics (health, finance, legal, safety)
  where trimming a disclaimer is a severity-escalating issue, not a style nit

---

## 5. Titles, meta descriptions & headings

- [ ] Every page has a unique `<title>` element — check programmatically/systematically across
  templates, don't spot-check a handful of pages and assume the rest follow
- [ ] Title is descriptive and concise, primary topic near the front, phrased the way a real
  searcher would actually recognize it **(Google-confirmed)**
- [ ] Title avoids keyword stuffing and avoids repeated boilerplate across pages (e.g. every
  product page titled "Cheap [X] for sale") **(Google-confirmed spam-policy risk category:
  keyword stuffing)**
- [ ] Title stays roughly under 60 characters so it doesn't get truncated on the results page
  **(practitioner convention — Google sets no hard character limit, but does truncate to fit
  device width; say this plainly rather than treating 60 as a rule)**
- [ ] There's a clear, visually-dominant primary heading on the page — check for a genuine primary
  heading and logical structure; **do not treat "exactly one `<h1>`" as a universal Google ranking
  requirement** (it's good semantic practice and helps Google pick the right title-link source
  when ambiguous, but isn't itself a hard rule)
- [ ] Logical H2/H3 hierarchy with no skipped levels — a reader, and Google, should understand the
  page's structure from headings alone
- [ ] Headings describe real sections rather than being keyword-loaded restatements of the title
- [ ] Meta description is genuinely descriptive, includes the primary topic naturally, is unique
  per page, roughly 150-165 characters **(practitioner convention)** — note honestly that Google
  frequently rewrites the displayed snippet from on-page content regardless of what's in the meta
  tag, so a good one is still worth writing but isn't guaranteed to display verbatim
- [ ] Title and headings use the same language and writing system as the page's primary content
- [ ] No misleading or clickbait framing where the title promises something the content doesn't
  deliver

---

## 6. URL & page identity

- [ ] URL is descriptive where appropriate, using real words rather than IDs or opaque hashes
- [ ] URL is stable — not something likely to need changing again soon, which would create
  avoidable redirect debt
- [ ] No unnecessary keyword stuffing in the slug itself
- [ ] URL accurately represents the page's actual purpose and content

---

## 7. Keyword & topic optimization

- [ ] Primary topic is clear from the page's actual content, not just from metadata
- [ ] Important related concepts and entities are covered naturally — genuine topical completeness,
  not a mechanical checklist of synonyms inserted for their own sake
- [ ] Relevant terminology is used the way a real practitioner or customer would actually say it
- [ ] Topic appears naturally in the page's important elements (title, first paragraph, headings)
  without being forced
- [ ] No exact-match keyword phrase repeats more than roughly once per 150 words of body copy —
  this maps to a real spam-policy risk category, not a style nicety **(Google-confirmed spam
  policy: keyword stuffing — see the definition and examples in `00-role-and-evidence-protocol.md`
  and cross-reference Section 13)**
- [ ] No awkward, grammatically-forced keyword insertion
- [ ] No hidden-keyword techniques (white text on white background, off-screen positioning,
  zero-opacity or zero-size text) — **(Google-confirmed spam policy: hidden text and link abuse)**;
  this is distinct from legitimate accordions, tabs, tooltips, and screen-reader-only text, which
  Google explicitly does not consider a violation
- [ ] No keyword-density target being mechanically forced onto the copy

---

## 8. Internal linking

- [ ] Important pages are genuinely discoverable through internal navigation, not just present in
  a sitemap
- [ ] No important orphan pages — cross-reference the Section 4 trust-signal check
- [ ] Links are contextually relevant to the surrounding content, not inserted mechanically
- [ ] Anchor text is descriptive — never bare "click here" or "read more"
- [ ] Topic clusters, where they exist, are logically organized
- [ ] Commercial or tool pages receive relevant contextual links from genuinely related content,
  not just a nav-bar mention
- [ ] Links point toward the preferred/canonical version of the destination URL, not a variant
  that then needs a redirect
- [ ] No forced internal-link quotas being mechanically hit ("every post needs exactly 5 internal
  links") — the anti-myth list in `00-role-and-evidence-protocol.md` applies here too

---

## 9. External linking & citations

- [ ] Important factual or statistical claims are supported by a genuinely relevant, credible
  source where necessary
- [ ] Primary sources are preferred over aggregators where reasonably available
- [ ] 1-3 external links to relevant, trusted, authoritative sources exist where genuinely
  useful — this is itself a minor trust signal, not just an internal-linking exercise
- [ ] Links genuinely help the reader rather than existing as decoration
- [ ] No fabricated citations — every named source should be checkable as real
- [ ] No unnecessary outbound-link stuffing
- [ ] No broken external links — cited sources go stale over time and need periodic re-checking,
  not just a one-time pass at publish

---

## 10. Images & visual content

- [ ] Images embedded with standard `<img>` elements — CSS background-images aren't indexed by
  Google Images and don't carry the same SEO value **(Google-confirmed)**
- [ ] Images are genuinely useful and relevant rather than decorative filler
- [ ] Alt text is descriptive, information-rich, and reflects the image's actual relationship to
  the surrounding content — never keyword-stuffed, never left blank **(Google-confirmed — alt
  text is explicitly named as one of the highest-impact places to use natural, descriptive
  language)**
- [ ] Descriptive filenames (`golden-retriever-puppy.jpg`, not `IMG00234.jpg`)
- [ ] Images use a supported, efficient format (WebP, AVIF, JPEG, PNG, SVG as appropriate) and are
  compressed and correctly sized for their actual display dimensions
- [ ] Responsive images via `srcset`/`<picture>` with a sensible fallback `src`
- [ ] A preferred "main image" is specified via `og:image` or schema `primaryImageOfPage` —
  high-resolution, genuinely relevant, not a generic logo or an image with baked-in text
- [ ] Original screenshots, diagrams, or photography are used where they materially improve the
  page's value, and visuals never falsely imply first-hand testing that didn't happen

---

## 11. On-page structured data (applicability, not implementation mechanics)

Full schema *engineering* — validity, JSON-LD vs. microdata, template-level generation — is the
Technical auditor's job (`03-technical-seo-auditor.md`, Section on Structured Data Engineering).
This section covers whether the *content* the schema describes is actually true and appropriate.

- [ ] Structured data reflects fields genuinely true on this exact page — no fabricated ratings,
  no borrowed author credentials, no invented review counts. **This is a penalizable spam-policy
  risk, not a style choice** — score it as at least High severity if found, Critical if it's a
  fabricated rating or review count
- [ ] Only applicable schema types are used for what the page actually is
- [ ] Schema is not being treated, in the site's own marketing or by whoever built it, as a
  ranking guarantee — **(Google-confirmed, 2026 generative-AI guide)** structured data is not
  required for AI Overviews or AI Mode eligibility, and remains genuinely useful mainly for
  classic rich-result eligibility
- [ ] If FAQ content exists, it earns its place because readers genuinely ask those questions —
  not padded in purely because FAQPage schema used to produce a rich result; that rich result was
  deprecated May 7, 2026, and the schema type, while still valid to implement, no longer earns one

---

## 12. Content freshness

- [ ] Time-sensitive claims are actually current, not stale pricing, deprecated features, or
  outdated screenshots
- [ ] Dates shown on the page are truthful
- [ ] "Updated" dates correspond to a genuinely meaningful update, not a cosmetic timestamp bump
  with no real content change
- [ ] Outdated examples are removed or clearly marked as historical
- [ ] Dead products, discontinued processes, or broken referenced links are addressed

---

## 13. Search spam & thinness — the hard gate

This section is a gate, not a scored tier: **any confirmed finding here caps the on-page score at
Critical regardless of how well everything else performs** — see `04-severity-rating-engine.md`.

- [ ] No keyword stuffing (cross-reference Section 7)
- [ ] No doorway-style pages — multiple near-identical pages created to rank for slight query
  variations, funneling users to one actual destination **(Google-confirmed spam policy: doorway
  abuse)**
- [ ] No near-duplicate location/variant pages without genuine unique value per page
- [ ] No scaled low-value content — many pages generated primarily to manipulate rankings rather
  than help users, regardless of whether the production method was AI, templates, or human writers
  at scale **(Google-confirmed spam policy: scaled content abuse — method-agnostic; what matters
  is genuine per-page value, not how the page was produced)**
- [ ] No scraped content republished without original value or attribution **(Google-confirmed
  spam policy: scraping)**
- [ ] No lightly-rewritten competitor content (synonym-swapped or otherwise superficially altered)
- [ ] No search-engine-first content — content that reads as written for the algorithm rather
  than for a person
- [ ] No pages that exist solely because a keyword exists, with no real underlying reason to
  publish
- [ ] No fake experience, fake reviews, or fabricated expertise anywhere on the page (cross-
  reference Section 4)
- [ ] No deceptive claims about what the page or its functionality actually delivers
  **(Google-confirmed spam policy: misleading functionality)**
- [ ] If the page monetizes via affiliate links: it adds genuine value beyond copied product
  descriptions and merchant-sourced reviews — a page that's just a templated product/review copy
  with an affiliate link swapped in is **(Google-confirmed spam policy: thin affiliation)**

---

## 14. How to score this pass

Once every section above has been checked against actual evidence (or marked Not Verifiable),
hand off to `04-severity-rating-engine.md` to assign severities to each finding and compute the
On-Page 0-10 score. Do not compute or state a score directly in this file's logic alone — severity
classification happens in the shared engine so On-Page and Technical scores stay methodologically
consistent with each other.
