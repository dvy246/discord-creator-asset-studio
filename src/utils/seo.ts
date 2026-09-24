// Single source of truth for the canonical production origin. The ranking domain is
// serverbannermaker.com; SITE_URL in the deploy environment (e.g. Cloudflare Pages project
// env vars) overrides it if ever needed. MUST match `site` in astro.config.mjs (both read
// the same SITE_URL env var, so canonical/hreflang/sitemap and all JSON-LD stay in lockstep).
export const SITE_ORIGIN = (process.env.SITE_URL || 'https://serverbannermaker.com').replace(/\/$/, '');

/**
 * Re-home any absolute URL onto SITE_ORIGIN, preserving path/query/hash. Pages across the
 * codebase pass hardcoded absolute URLs into these generators; normalizing at emit time
 * means flipping SITE_URL migrates every structured-data URL to the ranking host without
 * editing each page. A non-absolute or unparseable value is returned unchanged.
 */
function rehome(u: string): string {
  try {
    const p = new URL(u);
    return SITE_ORIGIN + p.pathname + p.search + p.hash;
  } catch {
    return u;
  }
}

const ORG = {
  "@type": "Organization",
  "@id": `${SITE_ORIGIN}/#organization`,
  "name": "Discord Creator Asset Studio",
  "alternateName": "Discord Asset Studio",
  "url": `${SITE_ORIGIN}/`,
  "logo": `${SITE_ORIGIN}/favicon.svg`,
  "description": "Independent, browser-only creator tools for Discord assets. Not affiliated with or endorsed by Discord, Inc.",
  "areaServed": "Worldwide",
  "knowsAbout": [
    "Discord",
    "Discord server customization",
    "Discord emojis",
    "Discord stickers",
    "Discord banners",
    "Discord avatars and profile pictures",
    "Discord role icons and server badges",
    "image resizing and compression",
    "animated GIF creation",
    "Discord markdown and message formatting"
  ],
  "sameAs": ["https://github.com/dvy246/discord-creator-asset-studio", "https://github.com/dvy246"]
};

export function generateSoftwareApplicationSchema(name: string, description: string, url: string) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "description": description,
    "url": rehome(url),
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Any",
    "browserRequirements": "Requires a modern web browser with JavaScript enabled.",
    "isAccessibleForFree": true,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "publisher": ORG
  });
}

/**
 * WebSite entity — defines the `/#website` node that BlogPosting.isPartOf (and any other
 * consumer) references by @id. Emitted once site-wide from Layout.astro. No SearchAction:
 * the site exposes no on-site search endpoint, so advertising a sitelinks searchbox would
 * be a false signal.
 */
export function generateWebSiteSchema(description?: string) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_ORIGIN}/#website`,
    "name": "Discord Creator Asset Studio",
    "alternateName": "Discord Asset Studio",
    "url": `${SITE_ORIGIN}/`,
    ...(description ? { "description": description } : {}),
    "inLanguage": "en",
    "publisher": { "@id": `${SITE_ORIGIN}/#organization` }
  });
}

/**
 * Organization entity — emitted site-wide so AI/answer engines can ground the
 * brand and its independence from Discord. Improves E-E-A-T + GEO attribution.
 */
export function generateOrganizationSchema() {
  return JSON.stringify({ "@context": "https://schema.org", ...ORG });
}

/**
 * WebPage / AboutPage / ContactPage entity for non-tool trust pages.
 */
export function generateWebPageSchema(opts: {
  type?: 'WebPage' | 'AboutPage' | 'ContactPage';
  name: string;
  description: string;
  url: string;
  lang?: string;
}) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": opts.type ?? "WebPage",
    "name": opts.name,
    "description": opts.description,
    "url": rehome(opts.url),
    "inLanguage": opts.lang ?? "en",
    "isPartOf": {
      "@type": "WebSite",
      "@id": `${SITE_ORIGIN}/#website`,
      "name": "Discord Creator Asset Studio",
      "url": `${SITE_ORIGIN}/`
    },
    "publisher": ORG
  });
}

/**
 * FAQPage schema from a unified {q,a}[] shape. Single source of truth so the
 * visible FAQ accordion and the JSON-LD never drift. Pass lang for inLanguage.
 */
export function generateFaqSchema(items: { q: string; a: string }[], lang?: string) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(lang ? { "inLanguage": lang } : {}),
    "mainEntity": items.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  });
}

export function generateBreadcrumbSchema(items: { name: string, url: string }[]) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": rehome(item.url)
    }))
  });
}

const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/og-image.png`;

/**
 * BlogPosting schema — richer than TechArticle for blog content.
 * Provides headline, author, publisher, dates, image for Article rich results.
 */
export function generateBlogPostingSchema(post: {
  title: string;
  heading?: string;
  metaDescription: string;
  slug: string;
  datePublished: string;
  dateModified: string;
  author: { name: string; role?: string };
  category: string;
  image?: string;
}) {
  const url = `${SITE_ORIGIN}/blog/${post.slug}/`;
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.heading ?? post.title,
    "description": post.metaDescription,
    "image": post.image ? rehome(post.image) : DEFAULT_OG_IMAGE,
    "inLanguage": "en",
    "url": url,
    "mainEntityOfPage": { "@type": "WebPage", "@id": url },
    "datePublished": post.datePublished,
    "dateModified": post.dateModified,
    "articleSection": post.category,
    "isPartOf": {
      "@type": "WebSite",
      "@id": SITE_ORIGIN + "/#website",
      "name": "Discord Creator Asset Studio",
      "url": SITE_ORIGIN + "/"
    },
    "author": {
      "@type": "Organization",
      "name": post.author.name,
      ...(post.author.role ? { "description": post.author.role } : {}),
      "parentOrganization": { "@id": SITE_ORIGIN + "/#organization" }
    },
    "publisher": { "@id": SITE_ORIGIN + "/#organization" }
  });
}

/**
 * ItemList schema for the homepage tool directory — enables sitelinks/carousel.
 */
export function generateItemListSchema(items: { name: string; url: string; description?: string }[]) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "url": rehome(item.url),
      ...(item.description ? { "description": item.description } : {})
    }))
  });
}

/**
 * HowTo schema for step-by-step guides — rich-result eligible.
 */
export function generateHowToSchema(howTo: {
  name: string;
  description: string;
  url: string;
  steps: { name: string; text: string }[];
  totalTime?: string;
  image?: string;
}) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": howTo.name,
    "description": howTo.description,
    "image": howTo.image ? rehome(howTo.image) : DEFAULT_OG_IMAGE,
    "url": rehome(howTo.url),
    ...(howTo.totalTime ? { "totalTime": howTo.totalTime } : {}),
    "step": howTo.steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text
    }))
  });
}
