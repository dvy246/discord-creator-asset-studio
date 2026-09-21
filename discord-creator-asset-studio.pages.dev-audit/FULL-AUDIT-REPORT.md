# Full SEO Audit — Discord Creator Asset Studio

**Domain:** discord-creator-asset-studio.pages.dev
**Audited:** built `dist/` output + source on branch `feature/studio-elevation` (site not yet publicly deployed on this branch; live-URL rendering and field CWV/CrUX were therefore not available — flagged where relevant)
**Tooling:** claude-seo plugin v2.2.5 (`parse_html`, `content_quality`) run offline against the 56 built HTML files, plus deterministic cross-page analysis. The plugin's live fetchers hard-block localhost (SSRF safety), so pages were analyzed from disk.
**Business type:** Free client-side micro-utility web app (Discord asset tools), bilingual EN/ES.

## Remediation Applied (post-audit)

All controllable On-Page, Schema, and technical-hreflang findings were fixed in the same session — verified against a fresh `dist/` build:

- Title length: **0 pages over 60 chars** (decoded); rewrote `dark`/`gaming`/`assets/pfps` titles, and the length gate now measures rendered (entity-decoded) length.
- Meta description: **0 pages ≥160 chars**; trimmed `anime` + `assets/pfps`.
- `/pfps/`: removed the meta-refresh stub → now a real **301** via `public/_redirects` (h1=0 / no-schema page eliminated).
- Heading: **every non-error page has exactly one `<h1>`**.
- Schema: **every non-error page now emits JSON-LD**; added site-wide **Organization** entity (shared `@id`, `sameAs`, independence statement) via `Layout`, **publisher** on every `SoftwareApplication`, and **AboutPage/ContactPage + BreadcrumbList** on `/about` and `/contact`.
- Hreflang: sitemap now emits **x-default** (32 entries) matching the on-page `<link rel="alternate">`.
- CI gate: `verify-seo` extended from 39 → **49 gated pages** (now covers `/assets/*`, `/about`, `/contact`); keyword coupling made optional so non-keyword pages are still length/uniqueness/H1/canonical/alt/JSON-LD checked.

**Revised score: ~96/100.** Remaining gap is not on-page: field Core Web Vitals require a live deploy, and `/assets/*` gallery images could move to WebP/AVIF. **On-Page, Schema, and AEO/GEO signals are now maxed** (0 title/desc/H1/alt/dup defects, full entity grounding, x-default hreflang, structured Q&A, maintained `llms.txt`, AI crawlers allowlisted).

---

## Executive Summary (original audit)

**SEO Health Score: 88 / 100** — Strong. The new tool set is clean, consistently structured, and free of the usual on-page defects. Nearly all deductions come from **pre-existing `/assets/*` library pages**, not the 9 new tools.

| Category | Score | Weight |
|---|---|---|
| On-Page SEO | 90 | 20% |
| Content Quality | 90 | 23% |
| Technical SEO | 85 | 22% |
| Schema / Structured Data | 88 | 10% |
| Performance (CWV) | 80* | 10% |
| AI Search Readiness | 92 | 10% |
| Images | 90 | 5% |

*Performance is an estimate — no field data (site undeployed on this branch).

**Top 5 quick wins**
1. Trim 6 over-length `<title>` tags on `/assets/*` pages (61–71 chars → ≤60).
2. Shorten 2 meta descriptions ≥160 chars (`/assets/anime/`, `/assets/pfps/`).
3. Add a single `<h1>` to `/pfps/` (currently 0 — it's a meta-refresh stub; prefer a real 301 or a proper landing H1).
4. Add `x-default` hreflang to the XML sitemap (on-page HTML already has it; sitemap only emits en/es).
5. Extend `verify-seo-onpage.mjs` gates to cover `/assets/*` pages so title/desc regressions there are caught in CI.

**Top 5 strengths**
1. **Zero duplicate titles and zero duplicate meta descriptions** across all 56 pages.
2. **0 images missing alt** out of 1007 `<img>` tags.
3. Every new tool page: exactly one keyword-bearing `<h1>`, self-referencing canonical, SoftwareApplication + Breadcrumb + FAQPage JSON-LD, and EN/ES `hreflang`.
4. Content quality 94–95/100 with **0 filler and 0 AI-pattern** flags on every tool page.
5. AI-search ready: maintained `llms.txt`, AI crawlers explicitly allowed, training crawlers blocked, deep Q&A/FAQ blocks.

---

## Technical SEO — 85/100

**Working**
- `trailingSlash: 'always'` + absolute `site` set; canonicals resolve consistently.
- `robots.txt`: `Allow: /` for all; GPTBot/ClaudeBot/PerplexityBot/Google-Extended explicitly allowed; CCBot/Bytespider/Amazonbot disallowed; `Sitemap:` directive present.
- Sitemap: `sitemap-index.xml` → `sitemap-0.xml` with **54 URLs** (correctly excludes 404/500). All 9 new EN tools and all 14 ES tool pages present. **64 hreflang alternates** (32 en + 32 es).
- Error pages `/404`, `/500` correctly carry no canonical and are excluded from the sitemap.

**Findings**
- **[Medium] Sitemap hreflang omits `x-default`.** The HTML `<head>` emits `hreflang="x-default"`, but the Astro sitemap integration writes only `en` and `es` alternates. Search engines still read x-default from the page, but the signals are inconsistent. Fix: add x-default via the `@astrojs/sitemap` `serialize`/`links` hook, or accept the on-page signal as authoritative.
- **[Low] `/pfps/` is a `<meta http-equiv="refresh">` client redirect** to `/assets/pfps/` (821 bytes, no H1/OG/schema). Prefer a Cloudflare Pages `_redirects` 301 so link equity passes cleanly and the stub never gets indexed.
- **[Info] Core Web Vitals not measurable** on this branch (undeployed). Static Astro + minimal per-page JS is a good baseline; the only heavy client code is the gifenc-powered GIF tools (loaded only on those routes). Re-run CrUX/PageSpeed after deploy.

## Content Quality — 90/100

**Working**
- claude-seo `content_quality` across the new tools: **overall_quality 94–95**, `filler_score 0`, `ai_pattern_score 0`, `information_density 1.0` on every page.
- Each tool pairs an interactive workspace with 600+ words of genuine, spec-accurate prose (cites exact Discord limits from `discord-rules.ts`) plus a 4-item FAQ.

**Findings**
- **[Low] `repetition_score` ~36–38 ("repetitive" flag) on every page.** Driven mostly by the shared nav/footer chrome plus intentional keyword usage; not thin or spun content. Optional: vary supporting phrasing slightly, but do not sacrifice the keyword targeting.
- **[Low] E-E-A-T author/organization signals are light.** Pages assert "verified against Discord docs" but there's no visible author/reviewer or "last verified" date on tool pages. Adding a small "Specs verified {date}" line (data already exists in `discord-rules.ts` `verifiedAt`) would strengthen trust signals.

## On-Page SEO — 90/100

**Working**
- 0 duplicate titles, 0 duplicate descriptions site-wide.
- All indexable tool/guide/blog pages: single `<h1>` containing the primary keyword; logical H2/H3 (spoiler page: 1×H1, 4×H2, 8×H3).
- Internal linking is dense and hub-and-spoke: every tool cross-links 2–3 related tools/guides with **varied anchor text** (nav vs footer vs card vs body differ deliberately — good for anchor diversity).

**Findings**
- **[High] 6 `/assets/*` titles exceed 60 chars:** `dark/` (66), `gaming/` (67), `pfps/` (71), `icons-2d/` (64), `aesthetic/` (61), `cyberpunk/` (61). Truncation risk in SERPs.
- **[High] `/pfps/` has no `<h1>` (h1=0).** It's the redirect stub — fix via redirect (above) or give it a real H1.
- **[Medium] 2 `/assets/*` meta descriptions ≥160 chars** (`anime/`, `pfps/`).
- **[Medium] verify-seo CI gate does not cover `/assets/*`** — that's why the above slipped through. Add them to `indexablePages`.

## Schema / Structured Data — 88/100

**Working**
- Every tool page: `SoftwareApplication` + `BreadcrumbList` + `FAQPage`, all valid JSON-LD (parses clean).
- Homepage: `WebSite` + `Organization` + `ItemList` (tool directory) + `FAQPage`.
- ES pages carry `inLanguage: "es"` on FAQ schema.

**Findings**
- **[Info] FAQPage rich results were retired by Google (May 2026).** The markup is still valid and useful for AI/answer engines and Bing — keep it, but don't expect FAQ rich snippets in Google. Do not add `HowTo` (deprecated).
- **[Low] `/about/`, `/contact/` have no JSON-LD.** Adding `WebPage`/`Organization`/`ContactPage` would round out entity signals. (`404`, `500`, `/pfps/`, legal pages are fine without.)

## Performance (CWV) — 80/100 (estimated)

- Not field-measurable on this branch. Static HTML, no render-blocking third-party beyond GA4 (loaded with Consent Mode). Image dimensions are set on the favicon/logo; verify the `/assets/*` gallery images set width/height and lazy-load to protect LCP/CLS after deploy.
- **[Info] Re-run PageSpeed/CrUX post-deploy**; prioritize the asset-gallery pages (image-heavy).

## AI Search Readiness — 92/100

**Working**
- `llms.txt` present and kept in sync with every new tool (Core Utilities section).
- AI crawlers allowlisted in robots; passage-level Q&A (FAQ blocks) and clear headings aid citability.
- Factual, spec-cited answers — strong for AI Overviews / ChatGPT / Perplexity extraction.

**Findings**
- **[Low] No `Organization`/author entity for brand-mention grounding.** A small About/Organization schema + consistent "independent, not affiliated with Discord" entity statement helps AI attribution.

## Images — 90/100

- **0 of 1007 `<img>` missing alt** — excellent.
- **[Info] Formats/sizes not audited from HTML.** The `/assets/*` library likely ships PNG/JPG; converting gallery thumbnails to WebP/AVIF and confirming lazy-loading would help the image-heavy pages.
