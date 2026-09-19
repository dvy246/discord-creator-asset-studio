/**
 * IndexNow — notify Bing/Yandex of all site URLs after deploy.
 * Generates the key file location note; requires INDEXNOW_KEY env var.
 *
 * Setup:
 *   1. Generate a key: uuidgen  (e.g. stored as repo secret INDEXNOW_KEY)
 *   2. Add public/<INDEXNOW_KEY>.txt containing the key, so the endpoint
 *      https://discord-creator-asset-studio.pages.dev/<key>.txt resolves.
 *   3. Run after deploy:  node scripts/indexnow.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const HOST = 'discord-creator-asset-studio.pages.dev';
const KEY = process.env.INDEXNOW_KEY;

if (!KEY) {
  console.log('INDEXNOW_KEY not set — skipping IndexNow ping.');
  console.log('To enable: set INDEXNOW_KEY and add public/<key>.txt with the key.');
  process.exit(0);
}

// Collect URLs from the generated sitemap
const sitemap = fs.readFileSync(path.join(__dirname, '../dist/sitemap-0.xml'), 'utf-8');
const urlList = [...sitemap.matchAll(/<loc>(https:\/\/[^<]+)<\/loc>/g)].map((m) => m[1]);

const payload = {
  host: HOST,
  key: KEY,
  keyLocation: `https://${HOST}/${KEY}.txt`,
  urlList
};

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(payload)
});

console.log(`IndexNow: submitted ${urlList.length} URLs — HTTP ${res.status}`);
