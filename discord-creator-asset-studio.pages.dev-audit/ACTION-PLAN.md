# Action Plan — Discord Creator Asset Studio SEO

Prioritized. Most items are on pre-existing `/assets/*` pages; the 9 new tools are already clean.

## Critical (fix immediately)
_None._ No indexing blockers or penalties found.

## High (within 1 week)
1. **Add a real `<h1>` to `/pfps/` or convert it to a 301.** It currently renders 0 `<h1>` (meta-refresh stub). Best fix: a `public/_redirects` line `/pfps/  /assets/pfps/  301` on Cloudflare Pages, then drop the HTML stub.
2. **Trim 6 over-length `/assets/*` titles to ≤60 chars:** `dark/` (66), `gaming/` (67), `pfps/` (71), `icons-2d/` (64), `aesthetic/` (61), `cyberpunk/` (61).
3. **Extend `scripts/verify-seo-onpage.mjs` `indexablePages` to include `/assets/*` pages** so title/description length + uniqueness regressions are caught by `npm test` going forward.

## Medium (within 1 month)
4. **Shorten 2 meta descriptions ≥160 chars** (`/assets/anime/`, `/assets/pfps/`).
5. **Add `x-default` to sitemap hreflang** via `@astrojs/sitemap` serialize hook (HTML already emits it).
6. **Add `WebPage`/`Organization`/`ContactPage` JSON-LD to `/about/` and `/contact/`.**
7. **Post-deploy: run PageSpeed + CrUX**, prioritizing image-heavy `/assets/*` pages; confirm gallery `<img>` set width/height + lazy-load.

## Low / Backlog
8. Add a visible "Specs verified {date}" line to tool pages (data in `discord-rules.ts` `verifiedAt`) for E-E-A-T.
9. Convert `/assets/*` gallery thumbnails to WebP/AVIF.
10. Slightly vary supporting phrasing on tool pages to ease the `repetition` flag (do not weaken keyword targeting).
11. ES parity for pre-existing `gif-maker` + `profile-viewer` (currently EN-only).

## Ongoing
- Keep `verify-seo` green on every change (it already gates 39 pages at 0 errors).
- Re-run this audit against the live URL after deploy to capture real CWV/CrUX and GSC indexation.
