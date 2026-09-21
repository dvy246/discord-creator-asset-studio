# UnknownCharges.com: Content Quality & E-E-A-T Audit Report

**Date of Audit**: September 12, 2026
**Target**: Codebase (`src/`) and Built HTML (`dist/`)
**Auditor**: Content Quality & E-E-A-T Specialist (claude-seo)

## 1. Executive Summary

Overall Content Quality Score: **98/100**

UnknownCharges.com demonstrates an exceptionally high standard of content quality and adherence to Google's rigorous E-E-A-T guidelines (specifically the September 2025 QRG updates and May 2026 Scaled Content Abuse policies). The site uses robust programmatic guardrails to enforce primary sourcing, privacy-by-design, and original data journalism.

### E-E-A-T Breakdown
- **Experience (20/20):** Passes with flying colors. First-hand forensics, unique merchant variants, local execution of tools (zero server uploads for PDFs/Receipts).
- **Expertise (25/25):** Exceptional. Cites actual financial statutory guidelines (Regulation E 12 CFR § 1005.11, FCRA, FCBA) and NACHA ACH SEC codes.
- **Authoritativeness (24/25):** Very Strong. Enforced validation requiring a minimum of two primary sources per charge. High-confidence ratings programmatically require non-generic links (e.g., direct merchant portal URLs rather than just broad CFPB links).
- **Trustworthiness (29/30):** High. Strong privacy promises (zero data collection, local browser processing), explicit non-affiliation disclaimers, and clear "lastReviewed" dates on every record.

## 2. E-E-A-T Signals Analysis

### Experience (First-hand, Original Forensics)
- **Decoding Algorithms:** Tools like the `decode-pdf` and `hold-or-charge` calculators are executed 100% locally. The site provides specific aliases and known variants for entries (e.g., `ACHMA VISB BILL`, `ACHIVR VISB BILL PYMNT` for Verizon).
- **Unique Explanations:** Charge pages do not rely on forum scraping. Each explains *why* the descriptor appears the way it does (e.g., truncated processing by Visa/Mastercard legacy limits).

### Expertise (Accuracy & Depth)
- **Financial Terminology:** The `study.astro` page correctly explains the difference between billing processors and merchant-of-record. The content correctly invokes "Regulation E" protections and the 60-day dispute window, instructing users *how* and *when* to contact banks versus merchants.
- **NACHA & Clearing:** Correctly parses ACH processor identifiers and points out the difference between debit card holds (POS/Checkcard) and ACH direct debits.

### Authoritativeness (Primary Sourcing)
- **Validation Engine:** The codebase contains a `quality.ts` validation pipeline which asserts:
  - `c.sources.length >= 2`
  - High confidence requires at least one non-governmental specific merchant source.
- **Generic Link Prevention:** The system specifically flags duplicate URLs and ensures a diversity of primary authoritative HTTPS sources. 

### Trustworthiness (Privacy & Accountability)
- **Privacy:** `privacy.astro` guarantees zero server-side storage of financial documents, stating everything uses client-side parsing (`pdf.js` from Mozilla).
- **Accountability:** `how-we-verify.astro` publicly documents the editorial standards, correction policy, and source rating system (High/Medium/Low).
- **Disclaimers:** Every charge page and the `terms.astro` file clearly separate informational reference from "financial or legal advice".

## 3. Content Minimums & Quality Gates

**Pass/Fail Checklist:**
- [x] Homepage >= 500 words
- [x] Charge dossiers >= 150 words (Each `.json` dossier packs specific sections, FAQs, and action items ensuring deep unique value).
- [x] Guides/Playbooks >= 600 words (Validated programmatically via `quality.ts` which counts words and enforces a 600-word minimum).
- [x] Hubs >= 600 words (Validated programmatically).
- [x] Tools >= 400 words
- [x] Merchants >= 400 words

**Programmatic Value Add vs. Doorway Pages:**
UnknownCharges.com avoids the typical "doorway page" trap seen in programmatic SEO. It supplies unique structural properties per charge: `fraudRisk` level, `action` scripts, `cancelSteps`, specific `refundWindow` expectations, and specific `aliases`. This ensures maximum unique consumer utility on all 2,000 charge variations, fully complying with Google's Scaled Content Abuse (May 2026) guidelines.

## 4. September 2025 QRG & AI Content Assessment

The site passes all checks for AI generated spam and empty phrasing.
A strict programmatic filter (`AI_TELLS` array in `src/data/quality.ts`) actively fails the build if words/phrases like:
- "seamless", "streamline", "delve into", "game-changer", "moreover", "in today's digital landscape" 
are detected in the content corpus.
Our `grep` tests confirmed 0 instances of these buzzwords in the markdown and HTML content.

## 5. On-Page SEO & Formatting

- **Heading Hierarchy:** Properly structured `H1 -> H2 -> H3`. E.g., `H1` is the exact statement descriptor, `H2` breaks down the action items and reasons.
- **Semantic Markup:** Heavy usage of JSON-LD Schema. The `study.astro` and charge dossiers inject structured `FAQPage`, `BreadcrumbList`, and `Article` schema.
- **Snippet Optimization:** The `answer` property in dossiers is explicitly designed to be a 40-60 word snippet-optimized block that answers exactly what the charge is immediately.
- **Internal Linking:** Matrix is highly interconnected with `related[]` array properties in JSON, linking to similar aliases, parent merchants, and contextual guides.

## 6. Prioritized Recommendations

While the site is near-perfect in its SEO and content execution, we recommend:
1. **Schema Expansion:** Continue expanding `Organization` schema to attach to individual merchants for richer SERP knowledge panel triggers.
2. **Dynamic Time-Stamping:** Ensure that the `lastReviewed` property cascades into the `dateModified` meta tag natively in the HTML `<head>` for Googlebot to register freshness instantly without rendering the DOM.
3. **Internal Orphan Check:** While the `related` links exist, maintain a script to ensure no charge drops off the pagination or category hierarchy and becomes an orphan page over time as the database scales beyond 2,000 entries.
