import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '../dist');

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

    // Canonical check (only for standard pages, 404/500 don't require canonicals)
    if (!file.startsWith('404') && !file.startsWith('500')) {
      const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["'](.*?)["'][^>]*>/i) ||
                             html.match(/<link[^>]*href=["'](.*?)["'][^>]*rel=["']canonical["'][^>]*>/i);
      assert.ok(canonicalMatch, `${file}: Canonical link must exist`);
      assert.ok(canonicalMatch[1].startsWith('https://discordassets.studio'), `${file}: Canonical must be absolute`);
    }
  }
});

test('E2E SEO: robots.txt and sitemap are generated and valid', () => {
  const robotsPath = path.join(distDir, 'robots.txt');
  assert.ok(fs.existsSync(robotsPath), 'dist/robots.txt must exist');
  const robotsContent = fs.readFileSync(robotsPath, 'utf-8');
  assert.ok(robotsContent.includes('Sitemap: https://discordassets.studio/sitemap-index.xml'), 'robots.txt must point to sitemap-index.xml');

  const sitemapPath = path.join(distDir, 'sitemap-index.xml');
  assert.ok(fs.existsSync(sitemapPath), 'dist/sitemap-index.xml must exist');
});

test('E2E SEO: All 5 tool pages contain valid JSON-LD FAQPage schemas and 600+ words of content', () => {
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

    // Assert JSON-LD FAQPage exists
    assert.ok(html.includes('"@type":"FAQPage"') || html.includes('"@type": "FAQPage"'), `${file} must include FAQPage schema`);

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
