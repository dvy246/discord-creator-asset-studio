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
  site: 'https://discord-creator-asset-studio.pages.dev',
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
        return item;
      }
    })
  ]
});