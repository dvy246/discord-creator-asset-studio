# XML Sitemap Architecture Audit - UnknownCharges.com

## Overview
- **Score:** 45/100
- **Environment:** Astro (`src/pages/*.xml.ts` dynamically sourced)
- **Focus Areas:** Sitemap Index, Child Sitemaps, Multilingual Hreflang, Deprecated Tags, Output Generation.

## Executive Summary
While the programmatic logic for generating the sitemaps is pristine and strictly adheres to modern W3C schemas (omitting deprecated tags and properly including `xhtml:link` for multilingual localization), a **Critical Build Failure** is preventing the sitemaps from being output into the final production `dist/` folder. Consequently, search engines will be met with a 404 error when accessing `sitemap.xml`, drastically crippling the crawlability of the 2,000+ dynamically generated charge pages and localized variations.

## Checklist & Findings

### 1. Schema & Architecture Logic: PASS
- **Sitemap Index:** `src/pages/sitemap.xml.ts` properly constructs the index pointing to `sitemap-core.xml`, `sitemap-charges.xml`, `sitemap-guides.xml`, and `sitemap-merchants.xml`.
- **Data Coverage:** The APIs successfully iterate over all Astro content collections (`charges`, `merchants`, `guides`, `hubs`), scaling cleanly up to the 2,000+ entries.
- **Modern Standards:** Deprecated `<priority>` and `<changefreq>` tags are completely absent. `<lastmod>` tags use valid ISO 8601 formatting (`c.lastReviewed`).
- **Hreflang Implementation:** `src/lib/sitemap-utils.ts` programmatically builds perfect `xhtml:link` alternates for the 5 locales (`en`, `es`, `de`, `fr`, `ja`, `pt`) plus the `x-default` locale.

### 2. Output Generation & Availability: CRITICAL FAIL
- **Finding:** The XML Sitemaps (`sitemap.xml`, `sitemap-charges.xml`, etc.) are entirely **missing** from the static build output directory (`dist/`).
- **Evidence:** Searching for `*.xml` files in `dist/` returns nothing. The prerender pipeline (`dist/.prerender/chunks/`) processes the `.mjs` endpoints, but they are not written as `.xml` files to the final static dist folder.
- **Root Cause:** Astro 4/5 static site generation requires explicit handling to output `.ts` API routes as static files when deployed, or the project includes `@astrojs/sitemap` in `package.json` but it is completely unused in `astro.config.mjs` `integrations` array.
- **Impact:** Search engines following the `robots.txt` directive will encounter a 404 for `https://unknowncharges.com/sitemap.xml`. Without a sitemap, discovering 2,000+ deep charge pages and their localized variations will rely purely on internal linking, severely reducing indexation speed and completeness.

## Prioritized Recommendations

| Severity | Finding | Fix / Recommendation |
|----------|---------|----------------------|
| **CRITICAL** | Sitemaps Missing in `dist/` | Ensure the sitemaps are physically generated during the static build. You have two options: <br>1. Add `export const prerender = true;` to all `sitemap*.xml.ts` endpoints. <br>2. Migrate to using the official `@astrojs/sitemap` integration (already in `package.json`) by adding `sitemap()` to the `integrations` array in `astro.config.mjs`. |
| **Info** | Large Hreflang Clusters | Each charge page generates 6 `xhtml:link` tags in the sitemap. For 2,000 charges, this results in a very large XML payload. Keep an eye on the 50MB / 50,000 URL limit per sitemap as the database grows, and consider paginating `sitemap-charges.xml` into `sitemap-charges-1.xml`, etc., in the future. |
