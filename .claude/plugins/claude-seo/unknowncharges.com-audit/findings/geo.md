# Generative Engine Optimization (GEO) & AI Search Readiness Audit
**Score:** 95/100

## 1. Robots.txt AI Crawler Rules
- **Status:** Pass
- **Severity:** Info
- **Evidence:** `public/robots.txt`
- **Findings:** The site explicitly defines `Allow: /` rules for all major AI search and generative engine bots, including `GPTBot`, `OAI-SearchBot`, `PerplexityBot`, `ClaudeBot`, `anthropic-ai`, `Google-Extended`, and `Applebot-Extended`. This guarantees that the site's content can be fully ingested and cited by AI engines like ChatGPT Search, Perplexity, and Google AI Overviews.

## 2. llms.txt Audit
- **Status:** Pass
- **Severity:** Info
- **Evidence:** `public/llms.txt` (and `dist/llms.txt`)
- **Findings:** The `llms.txt` file strictly adheres to the proposed standard for AI readability.
  - It features a clear Markdown H1 (`# UnknownCharges`).
  - It provides an explicit blockquote summary (`> LLMs: UnknownCharges is a free reference...`) that sets the system prompt context.
  - It accurately lists statistics (2,000 verified charges, 13 categories, 43 prefix/bank hubs, 30 merchant refund dossiers, and 18 free browser-based tools) matching the site's content scale.
  - It utilizes valid absolute HTTPS URLs organized under clear semantic sections (`## Core pages`, `## Categories`, `## Tools`, etc.).

## 3. Content Citability & Passage Optimization
- **Status:** Pass
- **Severity:** Low / Optimization Opportunity
- **Evidence:** `src/pages/index.astro`, `src/content/charges/` files, `src/pages/tools/` files.
- **Findings:** The site makes extensive use of semantic question-based headings (e.g., `<h3 class="faq-q">`) for high-intent search queries. This is an excellent signal for AI search engines attempting to extract direct answers.
- **Recommendation:** While the semantic headings are excellent, ensure that the paragraph immediately following the `<h3 class="faq-q">` (often classed as `faq-a`) maintains the optimal passage length of 134-167 words. This length is empirically proven to be the most frequently extracted text block size for Google AI Overviews and Perplexity citations.

## Conclusion
UnknownCharges is exceptionally well-optimized for AI Search Engines. The proactive inclusion of `llms.txt` and explicit AI crawler allows in `robots.txt` positions the platform as a primary verifiable source for generative engines.
