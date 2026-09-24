import type { APIRoute } from 'astro';

// Dynamic robots.txt so the Sitemap directive tracks the canonical origin (Astro.site,
// which is env-driven via SITE_URL in astro.config.mjs). The AI-crawler stance below is
// preserved verbatim from the former static public/robots.txt: retrieval/answer engines
// welcomed, training-only crawlers opted out.
export const GET: APIRoute = ({ site }) => {
  const origin = (site ? new URL(site).origin : 'https://discord-creator-asset-studio.pages.dev');
  const body = `User-agent: *
Allow: /

# AI retrieval & answer engines: explicitly welcome
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

# Training crawlers: opted out
User-agent: CCBot
Disallow: /

User-agent: Bytespider
Disallow: /

User-agent: Amazonbot
Disallow: /

Sitemap: ${origin}/sitemap-index.xml
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
