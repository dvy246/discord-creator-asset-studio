import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '../dist');

test('E2E SEO: Title is under 60 chars and meta description is under 150 chars', () => {
  const indexPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(indexPath)) {
    assert.fail('index.html not found in dist. Ensure build has run before tests.');
  }

  const html = fs.readFileSync(indexPath, 'utf-8');

  // Check title
  const titleMatch = html.match(/<title>(.*?)<\/title>/i);
  assert.ok(titleMatch, 'Title tag must exist');
  const title = titleMatch[1];
  assert.ok(title.length <= 60, `Title must be <= 60 characters. Current length: ${title.length}`);

  // Check meta description
  const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["'](.*?)["'][^>]*>/i);
  if (!descMatch) {
    const descMatchAlt = html.match(/<meta[^>]*content=["'](.*?)["'][^>]*name=["']description["'][^>]*>/i);
    assert.ok(descMatchAlt, 'Meta description tag must exist');
    const desc = descMatchAlt[1];
    assert.ok(desc.length <= 150, `Meta description must be <= 150 characters. Current length: ${desc.length}`);
  } else {
    const desc = descMatch[1];
    assert.ok(desc.length <= 150, `Meta description must be <= 150 characters. Current length: ${desc.length}`);
  }

  // Check canonical link
  const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["'](.*?)["'][^>]*>/i) || html.match(/<link[^>]*href=["'](.*?)["'][^>]*rel=["']canonical["'][^>]*>/i);
  assert.ok(canonicalMatch, 'Canonical link must exist');
  assert.ok(canonicalMatch[1].startsWith('https://discordassets.studio'), 'Canonical link must be absolute');

  // Check hreflang
  const hreflangEnMatch = html.match(/<link[^>]*rel=["']alternate["'][^>]*hreflang=["']en["'][^>]*>/i) || html.match(/<link[^>]*hreflang=["']en["'][^>]*rel=["']alternate["'][^>]*>/i);
  assert.ok(hreflangEnMatch, 'Hreflang for en must exist');

  const hreflangEsMatch = html.match(/<link[^>]*rel=["']alternate["'][^>]*hreflang=["']es["'][^>]*>/i) || html.match(/<link[^>]*hreflang=["']es["'][^>]*rel=["']alternate["'][^>]*>/i);
  assert.ok(hreflangEsMatch, 'Hreflang for es must exist');
});
