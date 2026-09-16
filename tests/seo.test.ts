import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '../dist');
const TARGET_ORIGIN = 'https://discord-creator-asset-studio.pages.dev';

test('E2E SEO: All generated HTML pages have valid titles, meta descriptions, and canonicals', () => {
  const htmlFiles = [
    'index.html',
    'privacy/index.html',
    'terms/index.html',
    'about/index.html',
    'contact/index.html',
    'guides/discord-sizes/index.html',
    'es/index.html',
    'es/guides/discord-sizes/index.html',
    'tools/emoji/index.html',
    'tools/sticker/index.html',
    'tools/banner/index.html',
    'tools/avatar/index.html',
    'tools/role-icon/index.html',
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
  // Routes with Spanish alternates: index and guides/discord-sizes
  const routesWithSpanish = [
    'index.html',
    'guides/discord-sizes/index.html',
    'es/index.html',
    'es/guides/discord-sizes/index.html'
  ];

  for (const file of routesWithSpanish) {
    const html = fs.readFileSync(path.join(distDir, file), 'utf-8');
    assert.ok(html.includes('hreflang="en"'), `${file}: Must include hreflang="en"`);
    assert.ok(html.includes('hreflang="es"'), `${file}: Must include hreflang="es"`);
    assert.ok(html.includes('hreflang="x-default"'), `${file}: Must include hreflang="x-default"`);
    assert.ok(html.includes(`${TARGET_ORIGIN}/`), `${file}: Hreflang URLs must reference live host`);
  }

  // Routes WITHOUT Spanish alternates must NOT emit hreflang="es" pointing to a 404
  const routesWithoutSpanish = [
    'tools/emoji/index.html',
    'tools/sticker/index.html',
    'tools/banner/index.html',
    'tools/avatar/index.html',
    'tools/role-icon/index.html',
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
  const ogJpg = path.join(distDir, 'og-image.jpg');
  assert.ok(fs.existsSync(ogPng), 'dist/og-image.png must exist');
  assert.ok(fs.existsSync(ogJpg), 'dist/og-image.jpg must exist');

  const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');
  assert.ok(indexHtml.includes('property="og:image" content="https://discord-creator-asset-studio.pages.dev/og-image.png"'), 'OG image tag must reference live URL');
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
