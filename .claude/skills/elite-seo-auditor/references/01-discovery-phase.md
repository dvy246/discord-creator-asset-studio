# Discovery Phase — Understand the Site Before Recommending Anything

Never open with recommendations. A checklist run against an unexamined site produces generic
advice that happens to be attached to a real domain — not an audit. Spend real effort here first.

## What to establish, and how, depending on what you have access to

### If given a live URL (or a domain to explore)

- Fetch the homepage and 2-4 representative interior pages (not just the homepage — templates
  vary, and the homepage is usually the most over-optimized page on the site, not the most
  representative one)
- Fetch `robots.txt` directly
- Fetch `sitemap.xml` (or the sitemap index if one exists) directly
- Identify the apparent framework/stack from response headers, HTML comments, asset paths, or
  obvious tells (Next.js `_next/`, Astro's output patterns, WordPress `wp-content/`, Shopify
  `cdn.shopify.com`, etc.) — this matters because it changes what's actually checkable (a static
  site has very different JS-rendering risk than a heavy client-side SPA)
- Note whether content appears to be server-rendered by reading the raw fetched HTML for the
  actual page copy — if the fetched HTML is mostly empty divs and the content only shows up in a
  rendered browser preview, that's already a major technical finding, not just an observation
- If a connector for JS-rendered/live-SERP checks is available in this session, use it for the
  pages where raw-HTML vs. rendered-DOM actually matters; otherwise note plainly that rendered-DOM
  verification needs a manual Search Console URL Inspection check

### If given a local codebase (uploaded, or already on disk in this session)

- Identify the framework and build system from config files (`package.json`, `astro.config.*`,
  `next.config.*`, `vite.config.*`, a `wp-config.php`, etc.) — don't assume, read it
- Map the routing/content architecture: static routes, dynamic/templated routes, where blog or
  tool pages live, how categories and pagination are generated
- Find where metadata (title/description/canonical/OG tags) actually gets generated — a shared
  layout component, a per-page frontmatter field, a CMS integration — because a single systemic
  bug here explains far more than checking pages one at a time
- Find sitemap generation (built at build time vs. runtime vs. hand-maintained) and the actual
  `robots.txt` file or its generator
- Find where structured data (JSON-LD) is emitted and whether it's templated or hand-authored per
  page
- Check for an analytics/Search Console integration only to note its presence — configuring or
  changing it is out of scope for this skill

### If given both

Cross-check: does what the live, rendered page actually shows match what the source code claims
it produces? A template that looks correct in the repo but doesn't show up correctly live (a
build step silently failing, a CDN serving a stale cache, a redirect not actually deployed) is
itself a finding, and often a more valuable one than either check alone would surface.

## Minimum discovery checklist before moving to either auditor pass

- [ ] Framework/stack identified (not assumed)
- [ ] Site type understood — brochure site, blog/publisher, ecommerce, SaaS marketing site,
  directory/aggregator, tool/utility site — because the checklists in the two auditor passes apply
  differently by type (e.g. product schema matters for ecommerce and is irrelevant elsewhere)
- [ ] Routing and template structure mapped, at least at a high level
- [ ] `robots.txt` actually read
- [ ] Sitemap actually read (or its absence confirmed)
- [ ] 2-4 representative page templates identified for sampling, not just the homepage
- [ ] Any glaring, obvious blockers already visible (site-wide `noindex`, `Disallow: /`, broken
  homepage) flagged immediately rather than saved for the end — these are Critical by definition
  and change how much further auditing is even useful until they're fixed

## What discovery is not

Discovery is not itself the audit. Don't write findings yet — this phase produces a shared
understanding of the site that both auditor passes then build on independently. Resist the pull
to start listing issues here; capture facts about the site's architecture, and let each auditor
pass turn facts into graded findings in its own domain.
