const BASE_URL = 'https://discord-creator-asset-studio.pages.dev';

async function check(url, options = {}) {
  const res = await fetch(url, options);
  const text = await res.text();
  return { status: res.status, headers: Object.fromEntries(res.headers.entries()), text };
}

async function verifyAll() {
  console.log('=== LIVE EVIDENCE VERIFICATION ===\n');

  // 1. Root Security Headers & Status
  const root = await check(`${BASE_URL}/`);
  console.log('1. Root Headers & Status:');
  console.log('Status:', root.status);
  console.log('Strict-Transport-Security:', root.headers['strict-transport-security']);
  console.log('X-Content-Type-Options:', root.headers['x-content-type-options']);
  console.log('X-Frame-Options:', root.headers['x-frame-options']);
  console.log('Referrer-Policy:', root.headers['referrer-policy']);
  console.log('Permissions-Policy:', root.headers['permissions-policy']);
  console.log('Content-Security-Policy:', root.headers['content-security-policy']?.substring(0, 60) + '...');

  // Canonical, meta robots, schemas on root
  const canonicalMatch = root.text.match(/<link[^>]*rel=["']canonical["'][^>]*href=["'](.*?)["']/i);
  const robotsMatch = root.text.match(/<meta[^>]*name=["']robots["'][^>]*content=["'](.*?)["']/i);
  const ogImageMatch = root.text.match(/<meta[^>]*property=["']og:image["'][^>]*content=["'](.*?)["']/i);
  const hasWebsiteSchema = root.text.includes('"@type":"WebSite"');
  const hasOrgSchema = root.text.includes('"@type":"Organization"');
  const hreflangMatches = [...root.text.matchAll(/<link[^>]*rel=["']alternate["'][^>]*hreflang=["'](.*?)["'][^>]*href=["'](.*?)["']/gi)].map(m => `${m[1]} -> ${m[2]}`);

  console.log('Canonical:', canonicalMatch ? canonicalMatch[1] : 'NONE');
  console.log('Robots:', robotsMatch ? robotsMatch[1] : 'NONE');
  console.log('OG Image:', ogImageMatch ? ogImageMatch[1] : 'NONE');
  console.log('WebSite Schema:', hasWebsiteSchema);
  console.log('Organization Schema:', hasOrgSchema);
  console.log('Hreflangs:', hreflangMatches);
  console.log('\n----------------------------------------\n');

  // 2. Robots.txt
  const robots = await check(`${BASE_URL}/robots.txt`);
  console.log('2. Robots.txt:');
  console.log('Status:', robots.status);
  console.log('Content:\n' + robots.text);
  console.log('\n----------------------------------------\n');

  // 3. Sitemap Index and Sitemap 0
  const sitemapIndex = await check(`${BASE_URL}/sitemap-index.xml`);
  const sitemapZero = await check(`${BASE_URL}/sitemap-0.xml`);
  console.log('3. Sitemaps:');
  console.log('Sitemap Index Status:', sitemapIndex.status);
  console.log('Sitemap 0 Status:', sitemapZero.status);
  console.log('Sitemap 0 URLs contain live domain:', sitemapZero.text.includes(BASE_URL));
  console.log('Sitemap 0 unresolving domain present:', sitemapZero.text.includes('discordassets.studio'));
  console.log('\n----------------------------------------\n');

  // 4. Tools Page: /tools/banner/
  const banner = await check(`${BASE_URL}/tools/banner/`);
  console.log('4. Tools Banner Page (/tools/banner/):');
  console.log('Status:', banner.status);
  const bannerCanonical = banner.text.match(/<link[^>]*rel=["']canonical["'][^>]*href=["'](.*?)["']/i);
  console.log('Canonical:', bannerCanonical ? bannerCanonical[1] : 'NONE');
  console.log('Has SoftwareApplication Schema:', banner.text.includes('"@type":"SoftwareApplication"'));
  console.log('Has BreadcrumbList Schema:', banner.text.includes('"@type":"BreadcrumbList"'));
  console.log('Has FAQPage Schema:', banner.text.includes('"@type":"FAQPage"'));
  const bannerHreflangs = [...banner.text.matchAll(/<link[^>]*rel=["']alternate["'][^>]*hreflang=["'](.*?)["'][^>]*href=["'](.*?)["']/gi)].map(m => `${m[1]} -> ${m[2]}`);
  console.log('Hreflangs:', bannerHreflangs);
  console.log('Broken hreflang="es" present:', banner.text.includes('hreflang="es"'));
  console.log('\n----------------------------------------\n');

  // 5. Error Pages: 404
  const notFound = await check(`${BASE_URL}/404.html`);
  console.log('5. 404 Error Page:');
  console.log('Status:', notFound.status);
  const notFoundRobots = notFound.text.match(/<meta[^>]*name=["']robots["'][^>]*content=["'](.*?)["']/i);
  console.log('Robots:', notFoundRobots ? notFoundRobots[1] : 'NONE');
  console.log('Canonical Tag Present:', notFound.text.includes('rel="canonical"'));
  console.log('Hreflang Tags Present:', notFound.text.includes('hreflang='));
  console.log('\n----------------------------------------\n');

  // 6. Spanish Route: /es/
  const es = await check(`${BASE_URL}/es/`);
  console.log('6. Spanish Route (/es/):');
  console.log('Status:', es.status);
  console.log('Has <html lang="es">:', es.text.includes('<html lang="es">'));
  const esCanonical = es.text.match(/<link[^>]*rel=["']canonical["'][^>]*href=["'](.*?)["']/i);
  console.log('Canonical:', esCanonical ? esCanonical[1] : 'NONE');
  const esHreflangs = [...es.text.matchAll(/<link[^>]*rel=["']alternate["'][^>]*hreflang=["'](.*?)["'][^>]*href=["'](.*?)["']/gi)].map(m => `${m[1]} -> ${m[2]}`);
  console.log('Hreflangs:', esHreflangs);
  console.log('\n----------------------------------------\n');

  // 7. OG Image assets
  const ogPng = await check(`${BASE_URL}/og-image.png`, { method: 'HEAD' });
  const ogJpg = await check(`${BASE_URL}/og-image.jpg`, { method: 'HEAD' });
  console.log('7. Open Graph Image Assets:');
  console.log('/og-image.png Status:', ogPng.status, 'Content-Type:', ogPng.headers['content-type']);
  console.log('/og-image.jpg Status:', ogJpg.status, 'Content-Type:', ogJpg.headers['content-type']);
}

verifyAll().catch(err => {
  console.error(err);
  process.exit(1);
});
