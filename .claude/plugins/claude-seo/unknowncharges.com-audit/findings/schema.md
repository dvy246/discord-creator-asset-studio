# Schema & Structured Data Audit: UnknownCharges.com

**Score:** 88 / 100

## 1. Detection & Parsing

JSON-LD blocks were successfully detected and audited across all templates and their localized variants in `src/pages/[locale]`. Schemas are centrally routed via `BaseLayout.astro` ensuring global consistency. Zero JSON-LD syntax errors or broken template interpolations (such as `undefined` or `[object Promise]`) were found in the static HTML built in `dist/`.

**Template Schema Map:**
- **Homepage (`index.astro`, `[locale]/index.astro`):** `WebSite`, `Organization`, `WebApplication`, `FAQPage`
- **Charge Pages (`charge/[slug].astro`):** `BreadcrumbList`, `Article`, `FAQPage`
- **Merchant Pages (`merchant/[slug].astro`):** `BreadcrumbList`, `FAQPage`
- **Category, Bank & Prefix Hubs:** `CollectionPage`, `ItemList`, `BreadcrumbList`
- **Tools (`tools/*.astro`):** `WebApplication`, `FAQPage`
- **Learn Guides (`learn/[slug].astro`) / Study:** `Article`, `BreadcrumbList`, `FAQPage`
- **Glossary (`glossary/[slug].astro`):** `BreadcrumbList`, `DefinedTerm`, `FAQPage`

## 2. Validation & Quality Rules

- ✅ **Context Check:** `https://schema.org` is strictly used across 100% of detected schemas. No legacy `http://schema.org` references were found.
- ✅ **Required Properties:** `Article` definitions contain necessary metadata like `author`, `reviewedBy`, `datePublished`, and `dateModified`.
- ✅ **Date Formatting:** Timestamps use strict ISO 8601 formatting (e.g., `2026-07-01`).
- ✅ **Absolute URLs:** All URIs for site pages, logos, and actions resolve to fully qualified HTTPS URLs via `site.url`.

## 3. 2026 Google Policy & Deprecation Checks

### [High] WebApplication Schema
- **Status:** Requires Update
- **Details:** Tool schemas correctly declare `applicationCategory: "FinanceApplication"`, but they incorrectly use `operatingSystem: "Any"` instead of the standard `"All"`. Additionally, `browserRequirements` is completely omitted across all tools (e.g., `tools/decode-pdf.astro`, `tools/decode.astro`).
- **Recommendation:** Change `operatingSystem` to `"All"` and add `"browserRequirements": "Requires JavaScript"` to fully satisfy WebApplication structured data requirements.

### [Info] FAQPage Retirement
- **Status:** Deprecated by Google SERP
- **Details:** On May 7, 2026, Google officially retired FAQ rich results for all sites. `FAQPage` markup remains prevalent on the homepage, charge pages, merchant hubs, and tool templates.
- **Recommendation:** **Do not remove.** While Google SERP badges are gone, structurally intact `FAQPage` code drastically improves entity comprehension for non-Google LLM crawlers (ChatGPT, Claude). Continue using `FAQPage` and refrain from switching to `QAPage` (which is strictly for multi-user, StackOverflow-style forums).

### [Pass] HowTo Deprecation
- **Status:** Compliant
- **Details:** Google deprecated HowTo rich results in September 2023. We verified that no residual `HowTo` markup exists in `tools/decode-pdf` or `tools/decode-receipt`.

### [Pass] 2025 Deprecated Types
- **Status:** Compliant
- **Details:** Checked against recent schema retirements. Zero instances of `SpecialAnnouncement`, `CourseInfo`, `EstimatedSalary`, or `LearningVideo`.

## Code Examples

**Detected WebApplication (Requires Fix):**
```json
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "PDF Statement Decoder — UnknownCharges",
  "url": "https://unknowncharges.com/tools/decode-pdf/",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Any", // ⚠️ Change to "All"
  // ⚠️ Missing: "browserRequirements": "Requires JavaScript"
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "Upload a bank or credit card statement PDF and decode its cryptic descriptors..."
}
```

**Detected Organization:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://unknowncharges.com/#organization",
  "name": "UnknownCharges",
  "url": "https://unknowncharges.com/",
  "logo": {
    "@type": "ImageObject",
    "url": "https://unknowncharges.com/og.png",
    "width": 1200,
    "height": 630
  }
}
```
