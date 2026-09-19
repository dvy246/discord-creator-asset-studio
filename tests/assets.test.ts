import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import {
  DISCORD_ASSET_PRESETS,
  getAllPresets,
  getAllPfps,
  getAllBanners,
  getFemalePfps,
  getMalePfps,
  getCatPfps,
  getAnimatedPresets,
  getPresetBySlug,
  getPresetsByCategory,
  getCategoryCounts
} from '../src/data/assets.ts';

test('Catalog Data Architect: Presets counts and queries operate correctly', () => {
  const allPresets = getAllPresets();
  assert.strictEqual(allPresets.length, 271, 'Should have 271 total presets');

  const pfps = getAllPfps();
  assert.strictEqual(pfps.length, 89, 'Should have 89 total PFPs');
  for (const pfp of pfps) {
    assert.ok(pfp.isPfp || pfp.pfpImageUrl, `PFP ${pfp.id} must have isPfp or pfpImageUrl`);
  }

  const banners = getAllBanners();
  assert.strictEqual(banners.length, 204, 'Should have 204 total Banners');
  for (const banner of banners) {
    assert.strictEqual(banner.isPfp, undefined, `Banner ${banner.id} must not have isPfp true`);
  }

  const femalePfps = getFemalePfps();
  assert.strictEqual(femalePfps.length, 22, 'Should have 22 female aesthetic PFPs');
  for (const p of femalePfps) {
    assert.strictEqual(p.gender, 'female', `Female PFP ${p.id} must have gender female`);
    assert.ok(p.isPfp || p.pfpImageUrl, `Female PFP ${p.id} must be a PFP`);
  }

  const malePfps = getMalePfps();
  assert.strictEqual(malePfps.length, 14, 'Should have 14 male aesthetic PFPs');
  for (const p of malePfps) {
    assert.strictEqual(p.gender, 'male', `Male PFP ${p.id} must have gender male`);
  }

  const catPfps = getCatPfps();
  assert.strictEqual(catPfps.length, 23, 'Should have 23 cat PFPs (static + animated)');

  const animated = getAnimatedPresets();
  assert.strictEqual(animated.length, 91, 'Should have 91 animated WebP presets');
  for (const p of animated) {
    assert.ok(p.isAnimated || p.animatedWebpUrl, `Animated preset ${p.id} must have isAnimated or animatedWebpUrl`);
  }

  // Verify Ghibli & Ocean Anime Banners
  const totoro = getPresetBySlug('totoro-forest-belly-nap');
  assert.ok(totoro, 'Totoro preset should exist');
  assert.strictEqual(totoro.animatedWebpUrl, '/assets/animated/totoro-forest-belly-nap.webp');

  const whale = getPresetBySlug('ocean-whale-sunburst-abyss');
  assert.ok(whale, 'Ocean whale preset should exist');
  assert.strictEqual(whale.animatedWebpUrl, '/assets/animated/ocean-whale-sunburst-abyss.webp');

  // Verify Flagship Anime & Cinematic Banners
  const reze = getPresetBySlug('reze-violet-sakura-gaze');
  assert.ok(reze, 'Reze preset should exist');
  assert.strictEqual(reze.animatedWebpUrl, '/assets/animated/reze-violet-sakura-gaze.webp');

  const spiderman = getPresetBySlug('spiderman-rain-melancholy-gaze');
  assert.ok(spiderman, 'Spider-Man rain preset should exist');
  assert.strictEqual(spiderman.animatedWebpUrl, '/assets/animated/spiderman-rain-melancholy-gaze.webp');

  const gojo = getPresetBySlug('gojo-infinite-void-six-eyes');
  assert.ok(gojo, 'Gojo Six Eyes preset should exist');
  assert.strictEqual(gojo.animatedWebpUrl, '/assets/animated/gojo-infinite-void-six-eyes.webp');

  // Verify New Pinterest Live Wallpaper Animations
  const prairie = getPresetBySlug('golden-hour-prairie-reverie');
  assert.ok(prairie, 'Golden hour prairie preset should exist');
  assert.strictEqual(prairie.animatedWebpUrl, '/assets/animated/golden-hour-prairie-reverie.webp');

  const samurai = getPresetBySlug('lone-samurai-purple-blossoms');
  assert.ok(samurai, 'Lone samurai purple blossoms preset should exist');
  assert.strictEqual(samurai.animatedWebpUrl, '/assets/animated/lone-samurai-purple-blossoms.webp');

  const calico = getPresetBySlug('floating-calico-cat-koi-ripples');
  assert.ok(calico, 'Floating calico cat preset should exist');
  assert.strictEqual(calico.animatedWebpUrl, '/assets/animated/floating-calico-cat-koi-ripples.webp');

  const minecraftCat = getPresetBySlug('minecraft-sunset-staring-cat');
  assert.ok(minecraftCat, 'Minecraft sunset cat preset should exist');
  assert.strictEqual(minecraftCat.animatedWebpUrl, '/assets/animated/minecraft-sunset-staring-cat.webp');

  const dancingKittens = getPresetBySlug('t-pose-dancing-kittens');
  assert.ok(dancingKittens, 'Dancing kittens preset should exist');
  assert.strictEqual(dancingKittens.animatedWebpUrl, '/assets/animated/t-pose-dancing-kittens.webp');

  // Verify 9 Pinterest Live Wallpaper Animations (Batch 4)
  const libra = getPresetBySlug('celestial-libra-blade-maiden');
  assert.ok(libra, 'Celestial libra preset should exist');
  assert.strictEqual(libra.animatedWebpUrl, '/assets/animated/celestial-libra-blade-maiden.webp');

  const crimsonSun = getPresetBySlug('crimson-sun-samurai-twilight');
  assert.ok(crimsonSun, 'Crimson sun samurai preset should exist');
  assert.strictEqual(crimsonSun.animatedWebpUrl, '/assets/animated/crimson-sun-samurai-twilight.webp');

  const spideyRomance = getPresetBySlug('spiderman-sunset-skyline-romance');
  assert.ok(spideyRomance, 'Spiderman romance preset should exist');
  assert.strictEqual(spideyRomance.animatedWebpUrl, '/assets/animated/spiderman-sunset-skyline-romance.webp');

  const cyberValk = getPresetBySlug('cyber-valkyrie-neo-tokyo');
  assert.ok(cyberValk, 'Cyber valkyrie preset should exist');
  assert.strictEqual(cyberValk.animatedWebpUrl, '/assets/animated/cyber-valkyrie-neo-tokyo.webp');

  const uiGoku = getPresetBySlug('ultra-instinct-goku-focus-aura');
  assert.ok(uiGoku, 'Ultra Instinct Goku preset should exist');
  assert.strictEqual(uiGoku.animatedWebpUrl, '/assets/animated/ultra-instinct-goku-focus-aura.webp');

  const kratos = getPresetBySlug('kratos-blades-of-chaos-blizzard');
  assert.ok(kratos, 'Kratos preset should exist');
  assert.strictEqual(kratos.animatedWebpUrl, '/assets/animated/kratos-blades-of-chaos-blizzard.webp');

  const jonSnow = getPresetBySlug('jon-snow-battle-bastards-charge');
  assert.ok(jonSnow, 'Jon Snow preset should exist');
  assert.strictEqual(jonSnow.animatedWebpUrl, '/assets/animated/jon-snow-battle-bastards-charge.webp');

  const nightKing = getPresetBySlug('night-king-ice-spear-dragon');
  assert.ok(nightKing, 'Night King preset should exist');
  assert.strictEqual(nightKing.animatedWebpUrl, '/assets/animated/night-king-ice-spear-dragon.webp');

  // Verify Batch 5 Pinterest Live Wallpaper Animations
  const amazingSpidey = getPresetBySlug('amazing-spiderman-spire-golden-dusk');
  assert.ok(amazingSpidey, 'Amazing Spider-Man preset should exist');
  assert.strictEqual(amazingSpidey.animatedWebpUrl, '/assets/animated/amazing-spiderman-spire-golden-dusk.webp');
  assert.strictEqual(amazingSpidey.gifUrl, '/assets/gifs/amazing-spiderman-spire-golden-dusk.gif');
  assert.strictEqual(amazingSpidey.videoUrl, '/assets/videos/amazing-spiderman-spire-golden-dusk.mp4');

  const ironSpider = getPresetBySlug('iron-spider-infinity-war-hero');
  assert.ok(ironSpider, 'Iron Spider preset should exist');
  assert.strictEqual(ironSpider.animatedWebpUrl, '/assets/animated/iron-spider-infinity-war-hero.webp');

  const sanhua = getPresetBySlug('wuwa-sanhua-glacio-lotus');
  assert.ok(sanhua, 'Sanhua preset should exist');
  assert.strictEqual(sanhua.animatedWebpUrl, '/assets/animated/wuwa-sanhua-glacio-lotus.webp');

  const changli = getPresetBySlug('wuwa-changli-phoenix-gaze');
  assert.ok(changli, 'Changli preset should exist');
  assert.strictEqual(changli.animatedWebpUrl, '/assets/animated/wuwa-changli-phoenix-gaze.webp');

  const krishna = getPresetBySlug('lord-krishna-divine-flute-cosmos');
  assert.ok(krishna, 'Lord Krishna preset should exist');
  assert.strictEqual(krishna.animatedWebpUrl, '/assets/animated/lord-krishna-divine-flute-cosmos.webp');

  const eren = getPresetBySlug('attack-on-titan-eren-rumbling');
  assert.ok(eren, 'Eren Rumbling preset should exist');
  assert.strictEqual(eren.animatedWebpUrl, '/assets/animated/attack-on-titan-eren-rumbling.webp');

  const ichigo = getPresetBySlug('bleach-ichigo-bankai-tybw');
  assert.ok(ichigo, 'Ichigo Bankai preset should exist');
  assert.strictEqual(ichigo.animatedWebpUrl, '/assets/animated/bleach-ichigo-bankai-tybw.webp');
});

test('Catalog Data Architect: All image assets referenced exist on filesystem', () => {
  const rootDir = path.resolve('.');

  for (const preset of DISCORD_ASSET_PRESETS) {
    if (preset.imageUrl) {
      const fullPath = path.join(rootDir, 'public', preset.imageUrl);
      assert.ok(fs.existsSync(fullPath), `imageUrl not found: ${preset.imageUrl} in ${preset.id}`);
    }
    if (preset.animatedWebpUrl) {
      const fullPath = path.join(rootDir, 'public', preset.animatedWebpUrl);
      assert.ok(fs.existsSync(fullPath), `animatedWebpUrl not found: ${preset.animatedWebpUrl} in ${preset.id}`);
    }
    if (preset.pfpImageUrl) {
      const fullPath = path.join(rootDir, 'public', preset.pfpImageUrl);
      assert.ok(fs.existsSync(fullPath), `pfpImageUrl not found: ${preset.pfpImageUrl} in ${preset.id}`);
    }
  }
});

test('Catalog Data Architect: ID, slug uniqueness and valid metadata format', () => {
  const ids = new Set<string>();
  const slugs = new Set<string>();

  for (const preset of DISCORD_ASSET_PRESETS) {
    assert.ok(!ids.has(preset.id), `Duplicate ID detected: ${preset.id}`);
    ids.add(preset.id);

    assert.ok(!slugs.has(preset.slug), `Duplicate slug detected: ${preset.slug}`);
    slugs.add(preset.slug);

    assert.ok(/^#[0-9A-Fa-f]{6}$/.test(preset.profileThemeHex), `Invalid profileThemeHex in ${preset.id}`);
    assert.ok(/^#[0-9A-Fa-f]{6}$/.test(preset.accentHex), `Invalid accentHex in ${preset.id}`);
    assert.ok(/^#[0-9A-Fa-f]{6}$/.test(preset.glowHex), `Invalid glowHex in ${preset.id}`);
    assert.strictEqual(preset.paletteColors.length, 4, `paletteColors must have 4 colors in ${preset.id}`);

    assert.ok(preset.focalPoint && preset.focalPoint.banner && preset.focalPoint.pfp, `Missing focalPoint in ${preset.id}`);
    assert.ok(preset.visualTheme && preset.visualTheme.gradient && preset.visualTheme.primaryIcon, `Missing visualTheme in ${preset.id}`);
    assert.ok(preset.motionConfig && preset.motionConfig.type, `Missing motionConfig in ${preset.id}`);
    assert.ok(Array.isArray(preset.searchQueries) && preset.searchQueries.length > 0, `Missing searchQueries in ${preset.id}`);
  }
});

test('Catalog Data Architect: 4 new showcase motion types are properly assigned', () => {
  const spider = getPresetBySlug('neon-arachnid-spiderman-void');
  assert.ok(spider, 'Spiderman void preset should exist');
  assert.strictEqual(spider.motionConfig.type, 'spider-web-glint');

  const stargaze = getPresetBySlug('stargazing-buddies-infinite-cosmos');
  assert.ok(stargaze, 'Stargazing buddies preset should exist');
  assert.strictEqual(stargaze.motionConfig.type, 'stargazer-constellations');

  const alpine = getPresetBySlug('alpine-cliff-expedition-jeep');
  assert.ok(alpine, 'Alpine cliff jeep preset should exist');
  assert.strictEqual(alpine.motionConfig.type, 'alpine-wind-drift');

  const shinchan = getPresetBySlug('nostalgic-summer-cumulus-clouds');
  assert.ok(shinchan, 'Shinchan cumulus clouds preset should exist');
  assert.strictEqual(shinchan.motionConfig.type, 'cumulus-sunburst');
});
