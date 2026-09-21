const ORG = {
  "@type": "Organization",
  "@id": "https://discord-creator-asset-studio.pages.dev/#organization",
  "name": "Discord Creator Asset Studio",
  "url": "https://discord-creator-asset-studio.pages.dev/",
  "logo": "https://discord-creator-asset-studio.pages.dev/favicon.svg",
  "description": "Independent, browser-only creator tools for Discord assets. Not affiliated with or endorsed by Discord, Inc.",
  "sameAs": ["https://github.com/dvy246/discord-creator-asset-studio"]
};

export function generateSoftwareApplicationSchema(name: string, description: string, url: string) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "description": description,
    "url": url,
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
    "url": opts.url,
    "inLanguage": opts.lang ?? "en",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Discord Creator Asset Studio",
      "url": "https://discord-creator-asset-studio.pages.dev/"
    },
    "publisher": ORG
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
      "item": item.url
    }))
  });
}

const SITE_ORIGIN = 'https://discord-creator-asset-studio.pages.dev';
const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/og-image.png`;

/**
 * BlogPosting schema — richer than TechArticle for blog content.
 * Provides headline, author, publisher, dates, image for Article rich results.
 */
export function generateBlogPostingSchema(post: {
  title: string;
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
    "headline": post.title,
    "description": post.metaDescription,
    "image": post.image ?? DEFAULT_OG_IMAGE,
    "inLanguage": "en",
    "url": url,
    "mainEntityOfPage": { "@type": "WebPage", "@id": url },
    "datePublished": post.datePublished,
    "dateModified": post.dateModified,
    "articleSection": post.category,
    "author": {
      "@type": "Organization",
      "name": post.author.name,
      "url": SITE_ORIGIN + "/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Discord Creator Asset Studio",
      "url": SITE_ORIGIN + "/",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_ORIGIN}/favicon.svg`
      }
    }
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
      "url": item.url,
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
    "image": howTo.image ?? DEFAULT_OG_IMAGE,
    "url": howTo.url,
    ...(howTo.totalTime ? { "totalTime": howTo.totalTime } : {}),
    "step": howTo.steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text
    }))
  });
}
