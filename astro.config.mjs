// @ts-check
import { defineConfig } from 'astro/config';
import { execSync } from 'node:child_process';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

/**
 * Derive a page's lastmod from the git commit date of its source file.
 * Falls back to build date if git history is unavailable (e.g. shallow CI clones).
 */
function getGitLastmod(sourcePath) {
  try {
    const iso = execSync(`git log -1 --format=%cI -- "${sourcePath}"`, { encoding: 'utf-8' }).trim();
    return iso ? new Date(iso) : new Date();
  } catch {
    return new Date();
  }
}

/** Map a sitemap URL pathname back to its source file for git-date lookup. */
function pathnameToSourceFile(pathname) {
  const clean = pathname.replace(/^\//, '').replace(/\/$/, '');
  if (!clean) return 'src/pages/index.astro';
  if (clean === 'assets') return 'src/pages/assets/index.astro';
  if (clean.startsWith('assets/')) return 'src/pages/assets/[category]/index.astro';
  // blog dynamic route
  if (clean.startsWith('blog/')) return 'src/pages/blog/[slug].astro';
  return `src/pages/${clean}.astro`;
}

// https://astro.build/config
export default defineConfig({
  // Canonical production origin. The ranking domain is serverbannermaker.com; SITE_URL in
  // the deploy environment (Cloudflare Pages project env vars) overrides it if ever needed.
  // Because this is now the default, every build — including the one served on the pages.dev
  // preview host — emits serverbannermaker.com as canonical, which is the cross-domain dedup
  // signal. This single value drives canonical, hreflang, og:url and the sitemap host — and
  // must match SITE_ORIGIN in src/utils/seo.ts.
  site: (process.env.SITE_URL || 'https://serverbannermaker.com').replace(/\/$/, ''),
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    react(),
    sitemap({
      // Emit hreflang alternates (xhtml:link) directly in the XML sitemap
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          es: 'es'
        }
      },
      // Inject accurate lastmod per URL from git history
      serialize(item) {
        const sourceFile = pathnameToSourceFile(new URL(item.url).pathname);
        item.lastmod = getGitLastmod(sourceFile).toISOString();
        // Add an x-default hreflang alternate (points at the English URL) so the
        // sitemap's language signals match the on-page <link rel="alternate">.
        if (Array.isArray(item.links) && item.links.length) {
          const en = item.links.find((l) => l.lang === 'en');
          if (en && !item.links.some((l) => l.lang === 'x-default')) {
            item.links.push({ lang: 'x-default', url: en.url });
          }
        }
        return item;
      }
    })
  ]
});