import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '../dist');
const TARGET_ORIGIN = (process.env.SITE_URL || 'https://serverbannermaker.com').replace(/\/$/, '');

test('E2E SEO: All generated HTML pages have valid titles, meta descriptions, and canonicals', () => {
  const htmlFiles = [
    'index.html',
    'privacy/index.html',
    'terms/index.html',
    'about/index.html',
    'contact/index.html',
    'guides/discord-sizes/index.html',
    'guides/discord-gif-guide/index.html',
    'es/index.html',
    'es/guides/discord-sizes/index.html',
    'tools/emoji/index.html',
    'tools/sticker/index.html',
    'tools/banner/index.html',
    'tools/avatar/index.html',
    'tools/role-icon/index.html',
    'blog/index.html',
    'blog/how-to-make-discord-stickers/index.html',
    'blog/discord-banner-ideas-templates/index.html',
    'blog/discord-pfp-ideas-anime-avatars/index.html',
    'blog/how-to-put-spoiler-on-discord-image/index.html',
    'blog/how-to-change-discord-server-banner/index.html',
    '404.html',
    '500.html'
  ];

  for (const file of htmlFiles) {
    const filePath = path.join(distDir, file);
    assert.ok(fs.existsSync(filePath), `Generated file ${file} must exist`);

    const html = fs.readFileSync(filePath, 'utf-8');

    // Title tag validation (< 60 chars)
    const titleMatch = html.match(/<title>(.*?)<\/title>/i);
    assert.ok(titleMatch, `${file}: Title tag must exist`);
    const title = titleMatch[1];
    assert.ok(title.length <= 60, `${file}: Title length (${title.length}) must be <= 60 chars: "${title}"`);

    // Meta description validation (< 160 chars)
    const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["'](.*?)["'][^>]*>/i) ||
                      html.match(/<meta[^>]*content=["'](.*?)["'][^>]*name=["']description["'][^>]*>/i);
    assert.ok(descMatch, `${file}: Meta description tag must exist`);
    const desc = descMatch[1];
    assert.ok(desc.length <= 160, `${file}: Description length (${desc.length}) must be <= 160 chars`);

    // Canonical & robots check
    if (file.startsWith('404') || file.startsWith('500')) {
      // Error pages MUST have noindex and MUST NOT emit canonical or hreflang tags
      assert.ok(
        html.includes('<meta name="robots" content="noindex, nofollow"'),
        `${file}: Error page must have noindex, nofollow`
      );
      assert.ok(!html.includes('rel="canonical"'), `${file}: Error page must NOT have canonical link`);
      assert.ok(!html.includes('hreflang='), `${file}: Error page must NOT have hreflang tags`);
    } else {
      const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["'](.*?)["'][^>]*>/i) ||
                             html.match(/<link[^>]*href=["'](.*?)["'][^>]*rel=["']canonical["'][^>]*>/i);
      assert.ok(canonicalMatch, `${file}: Canonical link must exist`);
      assert.ok(canonicalMatch[1].startsWith(TARGET_ORIGIN), `${file}: Canonical must point to live host ${TARGET_ORIGIN}, found ${canonicalMatch[1]}`);
      assert.ok(canonicalMatch[1].endsWith('/'), `${file}: Canonical must end with a trailing slash`);
      assert.ok(html.includes('content="index, follow'), `${file}: Standard page must declare index, follow`);
    }
  }
});

test('E2E SEO: Hreflang tags are strictly validated and avoid broken 404 clusters', () => {
  // Routes with Spanish alternates: index, both guides, and all 5 tools
  const routesWithSpanish = [
    'index.html',
    'guides/discord-sizes/index.html',
    'guides/discord-gif-guide/index.html',
    'es/index.html',
    'es/guides/discord-sizes/index.html',
    'es/guides/discord-gif-guide/index.html',
    'tools/emoji/index.html',
    'tools/sticker/index.html',
    'tools/banner/index.html',
    'tools/avatar/index.html',
    'tools/role-icon/index.html',
    'es/tools/emoji/index.html',
    'es/tools/sticker/index.html',
    'es/tools/banner/index.html',
    'es/tools/avatar/index.html',
    'es/tools/role-icon/index.html'
  ];

  for (const file of routesWithSpanish) {
    const html = fs.readFileSync(path.join(distDir, file), 'utf-8');
    assert.ok(html.includes('hreflang="en"'), `${file}: Must include hreflang="en"`);
    assert.ok(html.includes('hreflang="es"'), `${file}: Must include hreflang="es"`);
    assert.ok(html.includes('hreflang="x-default"'), `${file}: Must include hreflang="x-default"`);
    assert.ok(html.includes(`${TARGET_ORIGIN}/`), `${file}: Hreflang URLs must reference live host`);
  }

  // Every emitted hreflang target MUST resolve to a real page in dist (zero 404 clusters)
  const allHtmlFiles: string[] = [];
  function findHtml(dir: string) {
    for (const item of fs.readdirSync(dir)) {
      const full = path.join(dir, item);
      if (fs.statSync(full).isDirectory()) findHtml(full);
      else if (item.endsWith('.html')) allHtmlFiles.push(full);
    }
  }
  findHtml(distDir);

  for (const htmlFile of allHtmlFiles) {
    const content = fs.readFileSync(htmlFile, 'utf-8');
    const esTargets = [...content.matchAll(/hreflang="es"\s+href="([^"]+)"/g)].map((m) => m[1]);
    for (const target of esTargets) {
      const urlPath = target.replace(TARGET_ORIGIN, '');
      const candidate1 = path.join(distDir, urlPath, 'index.html');
      const candidate2 = path.join(distDir, urlPath);
      assert.ok(
        fs.existsSync(candidate1) || fs.existsSync(candidate2),
        `${path.relative(distDir, htmlFile)}: hreflang="es" target ${urlPath} must resolve (404 cluster)`
      );
    }
  }

  // Routes WITHOUT Spanish alternates must NOT emit hreflang="es" pointing to a 404
  const routesWithoutSpanish = [
    'about/index.html',
    'contact/index.html',
    'privacy/index.html',
    'terms/index.html'
  ];

  for (const file of routesWithoutSpanish) {
    const html = fs.readFileSync(path.join(distDir, file), 'utf-8');
    assert.ok(!html.includes('hreflang="es"'), `${file}: Must NOT emit broken hreflang="es"`);
  }
});

test('E2E SEO: HTML lang attribute correctly reflects route language', () => {
  const esIndex = fs.readFileSync(path.join(distDir, 'es/index.html'), 'utf-8');
  assert.ok(esIndex.includes('<html lang="es">'), 'es/index.html must specify lang="es"');

  const esGuide = fs.readFileSync(path.join(distDir, 'es/guides/discord-sizes/index.html'), 'utf-8');
  assert.ok(esGuide.includes('<html lang="es">'), 'es/guides/discord-sizes/index.html must specify lang="es"');

  const enIndex = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');
  assert.ok(enIndex.includes('<html lang="en">'), 'index.html must specify lang="en"');
});

test('E2E SEO: robots.txt and sitemap are generated and valid with AI crawler directives', () => {
  const robotsPath = path.join(distDir, 'robots.txt');
  assert.ok(fs.existsSync(robotsPath), 'dist/robots.txt must exist');
  const robotsContent = fs.readFileSync(robotsPath, 'utf-8');
  assert.ok(robotsContent.includes(`Sitemap: ${TARGET_ORIGIN}/sitemap-index.xml`), 'robots.txt must point to sitemap-index.xml');
  assert.ok(robotsContent.includes('User-agent: GPTBot'), 'robots.txt must include GPTBot directive');
  assert.ok(robotsContent.includes('User-agent: ClaudeBot'), 'robots.txt must include ClaudeBot directive');
  assert.ok(robotsContent.includes('User-agent: PerplexityBot'), 'robots.txt must include PerplexityBot directive');
  assert.ok(robotsContent.includes('User-agent: Google-Extended'), 'robots.txt must include Google-Extended directive');
  assert.ok(robotsContent.includes('User-agent: CCBot'), 'robots.txt must include CCBot directive');

  const sitemapPath = path.join(distDir, 'sitemap-index.xml');
  assert.ok(fs.existsSync(sitemapPath), 'dist/sitemap-index.xml must exist');

  const sitemapZeroPath = path.join(distDir, 'sitemap-0.xml');
  assert.ok(fs.existsSync(sitemapZeroPath), 'dist/sitemap-0.xml must exist');
  const sitemapZeroContent = fs.readFileSync(sitemapZeroPath, 'utf-8');
  assert.ok(sitemapZeroContent.includes(TARGET_ORIGIN), 'sitemap-0.xml must contain TARGET_ORIGIN');
  assert.ok(!sitemapZeroContent.includes('discordassets.studio'), 'sitemap-0.xml must NOT contain unresolving domain');
});

test('E2E SEO: Cloudflare security headers file exists and contains essential directives', () => {
  const headersPath = path.join(distDir, '_headers');
  assert.ok(fs.existsSync(headersPath), 'dist/_headers must exist');
  const headersContent = fs.readFileSync(headersPath, 'utf-8');
  assert.ok(headersContent.includes('X-Content-Type-Options: nosniff'), '_headers must include nosniff');
  assert.ok(headersContent.includes('X-Frame-Options: SAMEORIGIN'), '_headers must include X-Frame-Options');
  assert.ok(headersContent.includes('Referrer-Policy: strict-origin-when-cross-origin'), '_headers must include Referrer-Policy');
  assert.ok(headersContent.includes('Strict-Transport-Security:'), '_headers must include HSTS');
  assert.ok(headersContent.includes('Content-Security-Policy:'), '_headers must include CSP');
});

test('E2E SEO: Open Graph social images exist and are referenced in meta tags', () => {
  const ogPng = path.join(distDir, 'og-image.png');
  assert.ok(fs.existsSync(ogPng), 'dist/og-image.png must exist');

  const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');
  assert.ok(indexHtml.includes(`property="og:image" content="${TARGET_ORIGIN}/og-image.png"`), 'OG image tag must reference live URL');
  assert.ok(indexHtml.includes('property="og:image:width" content="1200"'), 'OG image must declare width 1200');
  assert.ok(indexHtml.includes('property="og:image:height" content="630"'), 'OG image must declare height 630');
});

test('E2E SEO: Per-page branded OG images are generated and referenced', () => {
  const perPageOg = [
    { page: 'tools/emoji/index.html', og: 'og/emoji.png' },
    { page: 'tools/sticker/index.html', og: 'og/sticker.png' },
    { page: 'tools/banner/index.html', og: 'og/banner.png' },
    { page: 'tools/avatar/index.html', og: 'og/avatar.png' },
    { page: 'tools/role-icon/index.html', og: 'og/role-icon.png' },
    { page: 'guides/discord-sizes/index.html', og: 'og/guide-sizes.png' },
    { page: 'guides/discord-gif-guide/index.html', og: 'og/guide-gif.png' },
    { page: 'blog/how-to-make-discord-stickers/index.html', og: 'og/blog-stickers.png' }
  ];

  for (const { page, og } of perPageOg) {
    // The branded OG image file must exist in dist
    assert.ok(fs.existsSync(path.join(distDir, og)), `dist/${og} must exist`);
    // And the page must reference it
    const html = fs.readFileSync(path.join(distDir, page), 'utf-8');
    assert.ok(html.includes(`/${og}`), `${page} must reference its branded OG image /${og}`);
  }
});

test('E2E SEO: All 5 tool pages contain valid JSON-LD SoftwareApplication, BreadcrumbList, and FAQPage schemas', () => {
  const toolFiles = [
    'tools/emoji/index.html',
    'tools/sticker/index.html',
    'tools/banner/index.html',
    'tools/avatar/index.html',
    'tools/role-icon/index.html'
  ];

  for (const file of toolFiles) {
    const filePath = path.join(distDir, file);
    assert.ok(fs.existsSync(filePath), `${file} must exist`);

    const html = fs.readFileSync(filePath, 'utf-8');

    // Assert JSON-LD schemas exist
    assert.ok(html.includes('"@type":"FAQPage"') || html.includes('"@type": "FAQPage"'), `${file} must include FAQPage schema`);
    assert.ok(html.includes('"@type":"SoftwareApplication"') || html.includes('"@type": "SoftwareApplication"'), `${file} must include SoftwareApplication schema`);
    assert.ok(html.includes('"@type":"BreadcrumbList"') || html.includes('"@type": "BreadcrumbList"'), `${file} must include BreadcrumbList schema`);

    // Verify all JSON-LD scripts parse cleanly
    const jsonLdMatches = html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi);
    let count = 0;
    for (const match of jsonLdMatches) {
      assert.doesNotThrow(() => JSON.parse(match[1]), `${file}: Invalid JSON-LD block`);
      count++;
    }
    assert.ok(count >= 3, `${file}: Expected at least 3 JSON-LD blocks, found ${count}`);

    // Extract text content and calculate word count (stripping scripts and tags)
    const textOnly = html
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ' ')
      .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    const words = textOnly.split(/\s+/).filter(Boolean);
    assert.ok(
      words.length >= 600,
      `${file}: Must contain at least 600 words of content, found ${words.length} words`
    );
  }
});

test('E2E SEO: Homepage and Guides contain valid structured data', () => {
  const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');
  assert.ok(indexHtml.includes('"@type":"WebSite"') || indexHtml.includes('"@type": "WebSite"'), 'index.html must include WebSite schema');
  assert.ok(indexHtml.includes('"@type":"Organization"') || indexHtml.includes('"@type": "Organization"'), 'index.html must include Organization schema');

  const guideHtml = fs.readFileSync(path.join(distDir, 'guides/discord-sizes/index.html'), 'utf-8');
  assert.ok(guideHtml.includes('"@type":"TechArticle"') || guideHtml.includes('"@type": "TechArticle"'), 'guide must include TechArticle schema');
  assert.ok(guideHtml.includes('"@type":"BreadcrumbList"') || guideHtml.includes('"@type": "BreadcrumbList"'), 'guide must include BreadcrumbList schema');

  const esGuideHtml = fs.readFileSync(path.join(distDir, 'es/guides/discord-sizes/index.html'), 'utf-8');
  assert.ok(esGuideHtml.includes('"@type":"TechArticle"') || esGuideHtml.includes('"@type": "TechArticle"'), 'es guide must include TechArticle schema');
  assert.ok(esGuideHtml.includes('"@type":"BreadcrumbList"') || esGuideHtml.includes('"@type": "BreadcrumbList"'), 'es guide must include BreadcrumbList schema');
});


// ============================================================
// ELITE SEO REGRESSION SUITE — locks in the technical-elite plan
// ============================================================

test('ELITE: Sitemap emits accurate lastmod and hreflang xhtml:link alternates', () => {
  const sitemapZero = fs.readFileSync(path.join(distDir, 'sitemap-0.xml'), 'utf-8');
  assert.ok(sitemapZero.includes('<lastmod>'), 'sitemap-0.xml must include <lastmod> on URLs');
  assert.ok(sitemapZero.includes('xhtml:link'), 'sitemap-0.xml must include xhtml:link hreflang alternates');
  assert.ok(sitemapZero.includes('hreflang="es"'), 'sitemap must declare es alternate');
  assert.ok(sitemapZero.includes('hreflang="en"'), 'sitemap must declare en alternate');
});

test('ELITE: ads.txt exists and is valid for AdSense monetization', () => {
  const adsPath = path.join(distDir, 'ads.txt');
  assert.ok(fs.existsSync(adsPath), 'dist/ads.txt must exist for AdSense verification');
  const content = fs.readFileSync(adsPath, 'utf-8');
  assert.ok(/google\.com,\s*pub-/.test(content), 'ads.txt must contain a google.com publisher record');
  assert.ok(content.includes('f08c47fec0942fa0'), 'ads.txt must include the AdSense account token');
});

test('ELITE: CSP allows AdSense + Cloudflare Insights while keeping other directives intact', () => {
  const headers = fs.readFileSync(path.join(distDir, '_headers'), 'utf-8');
  // AdSense domains present
  assert.ok(headers.includes('https://pagead2.googlesyndication.com'), 'CSP must allow AdSense script origin');
  assert.ok(headers.includes('https://googleads.g.doubleclick.net'), 'CSP must allow AdSense frame origin');
  assert.ok(headers.includes('https://tpc.googlesyndication.com'), 'CSP must allow AdSense tpc origin');
  // Still locked down elsewhere
  assert.ok(headers.includes("default-src 'self'"), 'CSP must keep default-src self');
  // Immutable caching for hashed assets
  assert.ok(headers.includes('max-age=31536000, immutable'), '_headers must set immutable cache for /_astro/*');
  assert.ok(headers.includes('stale-while-revalidate'), '_headers must set stale-while-revalidate on HTML');
});

test('ELITE: _redirects file exists to canonicalize legacy/mistyped URLs', () => {
  const redirectsPath = path.join(distDir, '_redirects');
  assert.ok(fs.existsSync(redirectsPath), 'dist/_redirects must exist');
  const content = fs.readFileSync(redirectsPath, 'utf-8');
  assert.ok(content.includes('301'), '_redirects must contain 301 rules');
});

test('ELITE: Blog posts emit BlogPosting schema with author and dates', () => {
  const blogFiles = [
    'blog/how-to-make-discord-stickers/index.html',
    'blog/discord-banner-ideas-templates/index.html',
    'blog/discord-pfp-ideas-anime-avatars/index.html',
    'blog/how-to-put-spoiler-on-discord-image/index.html',
    'blog/how-to-change-discord-server-banner/index.html'
  ];
  for (const file of blogFiles) {
    const html = fs.readFileSync(path.join(distDir, file), 'utf-8');
    assert.ok(html.includes('"@type":"BlogPosting"'), `${file} must include BlogPosting schema`);
    assert.ok(html.includes('"datePublished"'), `${file} BlogPosting must include datePublished`);
    assert.ok(html.includes('"dateModified"'), `${file} BlogPosting must include dateModified`);
    assert.ok(html.includes('"mainEntityOfPage"'), `${file} BlogPosting must include mainEntityOfPage`);
  }
});

test('ELITE: Homepage emits ItemList schema and GIF guide emits HowTo schema', () => {
  const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');
  assert.ok(indexHtml.includes('"@type":"ItemList"'), 'index.html must include ItemList schema');

  const gifHtml = fs.readFileSync(path.join(distDir, 'guides/discord-gif-guide/index.html'), 'utf-8');
  assert.ok(gifHtml.includes('"@type":"HowTo"'), 'gif-guide must include HowTo schema');
  assert.ok(gifHtml.includes('HowToStep'), 'HowTo must include HowToStep entries');
});

test('ELITE: theme-color, web manifest, and sitemap link present in head', () => {
  const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');
  assert.ok(indexHtml.includes('name="theme-color"'), 'index.html must include theme-color meta');
  assert.ok(indexHtml.includes('rel="manifest"'), 'index.html must link site.webmanifest');
  assert.ok(indexHtml.includes('rel="sitemap"'), 'index.html must link sitemap in head');

  const manifestPath = path.join(distDir, 'site.webmanifest');
  assert.ok(fs.existsSync(manifestPath), 'dist/site.webmanifest must exist');
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
  assert.ok(manifest.name && manifest.theme_color, 'web manifest must have name + theme_color');
});

test('ELITE: robots.txt adopts explicit AI-crawler split policy', () => {
  const robots = fs.readFileSync(path.join(distDir, 'robots.txt'), 'utf-8');
  // Retrieval/answer engines welcomed
  assert.ok(robots.includes('User-agent: ChatGPT-User'), 'robots must include ChatGPT-User');
  assert.ok(robots.includes('User-agent: Claude-User'), 'robots must include Claude-User');
  // Training crawlers blocked
  assert.ok(robots.includes('User-agent: Bytespider'), 'robots must block Bytespider');
  assert.ok(robots.includes('User-agent: Amazonbot'), 'robots must block Amazonbot');
});
