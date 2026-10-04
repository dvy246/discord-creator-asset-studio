import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { getAllPresets } from '../src/data/assets.ts';

async function generatePosters() {
  const presets = getAllPresets().filter(p => (p.animatedWebpUrl || p.isAnimated) && !p.imageUrl);
  console.log(`Generating static poster frames for ${presets.length} animated presets...`);

  let count = 0;
  for (const preset of presets) {
    const animUrl = preset.animatedWebpUrl || preset.pfpImageUrl;
    const srcPath = path.join(process.cwd(), 'public', animUrl);
    const posterUrl = animUrl.endsWith('-animated.webp')
      ? animUrl.replace('-animated.webp', '-poster.webp')
      : animUrl.replace('.webp', '-poster.webp');
    const destPath = path.join(process.cwd(), 'public', posterUrl);

    if (!fs.existsSync(srcPath)) {
      console.warn(`Source not found: ${srcPath}`);
      continue;
    }

    // Extract first frame (page: 0) and output as a static webp
    await sharp(srcPath, { page: 0 })
      .webp({ quality: 90 })
      .toFile(destPath);

    count++;
    console.log(`[${count}/${presets.length}] Generated: ${posterUrl}`);
  }

  console.log(`\nSuccessfully generated ${count} static posters!`);
}

generatePosters().catch(err => {
  console.error('Error generating posters:', err);
  process.exit(1);
});
