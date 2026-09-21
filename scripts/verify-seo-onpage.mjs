import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '../dist');

const indexablePages = [
  {
    path: 'index.html',
    url: '/',
    primaryKeyword: 'discord banner maker',
  },
  {
    path: 'tools/banner/index.html',
    url: '/tools/banner/',
    primaryKeyword: 'discord banner maker',
  },
  {
    path: 'tools/emoji/index.html',
    url: '/tools/emoji/',
    primaryKeyword: 'discord emoji maker',
  },
  {
    path: 'tools/sticker/index.html',
    url: '/tools/sticker/',
    primaryKeyword: 'discord sticker maker',
  },
  {
    path: 'tools/avatar/index.html',
    url: '/tools/avatar/',
    primaryKeyword: 'discord avatar',
  },
  {
    path: 'tools/role-icon/index.html',
    url: '/tools/role-icon/',
    primaryKeyword: 'discord role icon maker',
  },
  {
    path: 'tools/image-compressor/index.html',
    url: '/tools/image-compressor/',
    primaryKeyword: 'discord image compressor',
  },
  {
    path: 'tools/image-resizer/index.html',
    url: '/tools/image-resizer/',
    primaryKeyword: 'discord image resizer',
  },
  {
    path: 'tools/spoiler/index.html',
    url: '/tools/spoiler/',
    primaryKeyword: 'discord image spoiler',
  },
  {
    path: 'tools/colors/index.html',
    url: '/tools/colors/',
    primaryKeyword: 'discord background color',
  },
  {
    path: 'tools/timestamp/index.html',
    url: '/tools/timestamp/',
    primaryKeyword: 'discord timestamp',
  },
  {
    path: 'tools/gif-maker/index.html',
    url: '/tools/gif-maker/',
    primaryKeyword: 'discord gif maker',
  },
  {
    path: 'tools/profile-viewer/index.html',
    url: '/tools/profile-viewer/',
    primaryKeyword: 'discord profile viewer',
  },
  {
    path: 'guides/discord-sizes/index.html',
    url: '/guides/discord-sizes/',
    primaryKeyword: 'discord banner size',
  },
  {
    path: 'guides/discord-gif-guide/index.html',
    url: '/guides/discord-gif-guide/',
    primaryKeyword: 'discord gif maker',
  },
  {
    path: 'blog/index.html',
    url: '/blog/',
    primaryKeyword: 'discord',
  },
  {
    path: 'blog/how-to-make-discord-stickers/index.html',
    url: '/blog/how-to-make-discord-stickers/',
    primaryKeyword: 'how to make a discord sticker',
  },
  {
    path: 'blog/discord-banner-ideas-templates/index.html',
    url: '/blog/discord-banner-ideas-templates/',
    primaryKeyword: 'discord banner ideas',
  },
  {
    path: 'blog/discord-pfp-ideas-anime-avatars/index.html',
    url: '/blog/discord-pfp-ideas-anime-avatars/',
    primaryKeyword: 'pfp discord',
  },
  {
    path: 'blog/how-to-put-spoiler-on-discord-image/index.html',
    url: '/blog/how-to-put-spoiler-on-discord-image/',
    primaryKeyword: 'how to put a spoiler on discord image',
  },
  {
    path: 'blog/how-to-change-discord-server-banner/index.html',
    url: '/blog/how-to-change-discord-server-banner/',
    primaryKeyword: 'how to change discord server banner',
  },
  {
    path: 'es/tools/emoji/index.html',
    url: '/es/tools/emoji/',
    primaryKeyword: 'emojis discord',
  },
  {
    path: 'es/tools/sticker/index.html',
    url: '/es/tools/sticker/',
    primaryKeyword: 'stickers discord',
  },
  {
    path: 'es/tools/banner/index.html',
    url: '/es/tools/banner/',
    primaryKeyword: 'banners discord',
  },
  {
    path: 'es/tools/avatar/index.html',
    url: '/es/tools/avatar/',
    primaryKeyword: 'avatar discord',
  },
  {
    path: 'es/tools/role-icon/index.html',
    url: '/es/tools/role-icon/',
    primaryKeyword: 'iconos de rol',
  },
  {
    path: 'es/tools/image-compressor/index.html',
    url: '/es/tools/image-compressor/',
    primaryKeyword: 'compresor de imágenes discord',
  },
  {
    path: 'es/tools/image-resizer/index.html',
    url: '/es/tools/image-resizer/',
    primaryKeyword: 'redimensionar imágenes discord',
  },
  {
    path: 'es/tools/spoiler/index.html',
    url: '/es/tools/spoiler/',
    primaryKeyword: 'spoiler de imagen discord',
  },
  {
    path: 'es/tools/colors/index.html',
    url: '/es/tools/colors/',
    primaryKeyword: 'color de fondo de discord',
  },
  {
    path: 'es/tools/timestamp/index.html',
    url: '/es/tools/timestamp/',
    primaryKeyword: 'marcas de tiempo discord',
  },
];

console.log('--- Starting Mandatory On-Page SEO Programmatic Inspection ---');

const titlesSeen = new Map();
const descriptionsSeen = new Map();
let errors = [];

for (const page of indexablePages) {
  const filePath = path.join(distDir, page.path);
  if (!fs.existsSync(filePath)) {
    errors.push(`[404] File ${page.path} does not exist in dist/`);
    continue;
  }

  const html = fs.readFileSync(filePath, 'utf-8');

  // 1. Title Checks
  const titleMatch = html.match(/<title>(.*?)<\/title>/i);
  if (!titleMatch) {
    errors.push(`[TITLE] Missing <title> in ${page.path}`);
  } else {
    const title = titleMatch[1];
    if (title.length > 60) {
      errors.push(`[TITLE] Title in ${page.path} exceeds 60 chars (${title.length} chars): "${title}"`);
    }
    const cleanTitle = title.replace(/&amp;/g, '&');
    if (!cleanTitle.toLowerCase().includes(page.primaryKeyword.toLowerCase())) {
      errors.push(`[TITLE] Title in ${page.path} does not contain primary keyword "${page.primaryKeyword}": "${title}"`);
    }
    if (titlesSeen.has(title)) {
      errors.push(`[TITLE] Duplicate title between ${page.path} and ${titlesSeen.get(title)}: "${title}"`);
    } else {
      titlesSeen.set(title, page.path);
    }
  }

  // 2. Meta Description Checks
  const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["'](.*?)["'][^>]*>/i) ||
                    html.match(/<meta[^>]*content=["'](.*?)["'][^>]*name=["']description["'][^>]*>/i);
  if (!descMatch) {
    errors.push(`[DESCRIPTION] Missing meta description in ${page.path}`);
  } else {
    const desc = descMatch[1];
    if (desc.length >= 160) {
      errors.push(`[DESCRIPTION] Description in ${page.path} is >= 160 chars (${desc.length} chars): "${desc}"`);
    }
    const cleanDesc = desc.replace(/&amp;/g, '&');
    if (!cleanDesc.toLowerCase().includes(page.primaryKeyword.toLowerCase())) {
      errors.push(`[DESCRIPTION] Description in ${page.path} does not contain primary keyword "${page.primaryKeyword}": "${desc}"`);
    }
    if (descriptionsSeen.has(desc)) {
      errors.push(`[DESCRIPTION] Duplicate description between ${page.path} and ${descriptionsSeen.get(desc)}: "${desc}"`);
    } else {
      descriptionsSeen.set(desc, page.path);
    }
  }

  // 3. H1 Checks
  const h1Matches = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)];
  if (h1Matches.length === 0) {
    errors.push(`[H1] Missing <h1> in ${page.path}`);
  } else if (h1Matches.length > 1) {
    errors.push(`[H1] Multiple (${h1Matches.length}) <h1> tags in ${page.path}`);
  } else {
    const h1Text = h1Matches[0][1].replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    const cleanH1 = h1Text.replace(/&amp;/g, '&');
    if (!cleanH1.toLowerCase().includes(page.primaryKeyword.toLowerCase())) {
      errors.push(`[H1] H1 in ${page.path} does not contain primary keyword "${page.primaryKeyword}": "${h1Text}"`);
    }
  }

  // 4. Canonical Checks
  const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["'](.*?)["'][^>]*>/i) ||
                         html.match(/<link[^>]*href=["'](.*?)["'][^>]*rel=["']canonical["'][^>]*>/i);
  if (!canonicalMatch) {
    errors.push(`[CANONICAL] Missing canonical link in ${page.path}`);
  } else {
    const canonical = canonicalMatch[1];
    if (!canonical.endsWith(page.url)) {
      errors.push(`[CANONICAL] Canonical in ${page.path} does not match expected URL "${page.url}": "${canonical}"`);
    }
  }

  // 5. Image Alt Attribute Checks
  const imgMatches = html.matchAll(/<img\b([^>]*)>/gi);
  for (const match of imgMatches) {
    const imgAttrs = match[1];
    if (!imgAttrs.includes('alt=')) {
      errors.push(`[IMAGE] <img> in ${page.path} is missing alt attribute: "${match[0]}"`);
    }
  }

  // 6. JSON-LD checks
  const jsonLdMatches = html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi);
  for (const match of jsonLdMatches) {
    try {
      JSON.parse(match[1]);
    } catch (e) {
      errors.push(`[JSON-LD] Invalid JSON-LD block in ${page.path}: ${e.message}`);
    }
  }
}

// 7. Internal Link Resolution Check (Zero 404s site-wide)
const allDistFiles = [];
function findFiles(dir) {
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) {
      findFiles(full);
    } else if (item.endsWith('.html')) {
      allDistFiles.push(full);
    }
  }
}
findFiles(distDir);

for (const htmlFile of allDistFiles) {
  const rel = path.relative(distDir, htmlFile);
  const content = fs.readFileSync(htmlFile, 'utf-8');
  const hrefMatches = content.matchAll(/href=["'](\/[^"'#?]*)["']/gi);
  for (const m of hrefMatches) {
    const link = m[1];
    if (link === '/' || link.startsWith('/_astro') || link.endsWith('.svg') || link.endsWith('.ico') || link.endsWith('.png') || link.endsWith('.xml')) {
      continue;
    }
    // Check if dist/<link>/index.html, dist/<link>.html, or dist/<cleanLink>.html exists
    const cleanLink = link.replace(/\/$/, '');
    const candidate1 = path.join(distDir, link, 'index.html');
    const candidate2 = path.join(distDir, `${link}.html`);
    const candidate3 = path.join(distDir, `${cleanLink}.html`);
    const candidate4 = path.join(distDir, link);
    if (!fs.existsSync(candidate1) && !fs.existsSync(candidate2) && !fs.existsSync(candidate3) && !fs.existsSync(candidate4)) {
      errors.push(`[BROKEN_LINK] In ${rel}: link "${link}" cannot be resolved in dist/`);
    }
  }
}

if (errors.length > 0) {
  console.error(`FAILED with ${errors.length} errors:`);
  for (const err of errors) {
    console.error(` - ${err}`);
  }
  process.exit(1);
} else {
  console.log('✅ ALL MANDATORY ON-PAGE SEO CHECKS PASSED WITH 0 ERRORS!');
  console.log(`Verified ${indexablePages.length} primary indexable pages across Title, Meta Description, H1, Canonical, Alt Text, and Zero Broken Links.`);
}
