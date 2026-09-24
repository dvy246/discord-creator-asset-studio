import type { APIRoute } from 'astro';
import { BLOG_POSTS } from '../data/blog-posts';

// Canonical origin — env-driven so the feed host tracks SITE_URL (matches astro.config
// `site` and SITE_ORIGIN in src/utils/seo.ts). Falls back to the pages.dev host.
const SITE = (process.env.SITE_URL || 'https://discord-creator-asset-studio.pages.dev').replace(/\/$/, '');

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export const GET: APIRoute = () => {
  const items = [...BLOG_POSTS]
    .sort((a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime())
    .map((post) => {
      const url = `${SITE}/blog/${post.slug}/`;
      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(post.metaDescription)}</description>
      <pubDate>${new Date(post.datePublished).toUTCString()}</pubDate>
      <category>${escapeXml(post.category)}</category>
    </item>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Discord Creator Asset Studio — Blog</title>
    <link>${SITE}/blog/</link>
    <description>Guides, tutorials, and specification breakdowns for Discord creator assets.</description>
    <language>en</language>
    <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml" />
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
