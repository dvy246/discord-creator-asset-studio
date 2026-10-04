import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import sharp from 'sharp';

const PINS = [
  {
    id: 'animated-crimson-rain-ronin-katana',
    slug: 'crimson-rain-ronin-katana',
    pinId: '843510205262017909',
    type: 'video',
    mediaUrl: 'https://v1.pinimg.com/videos/iht/expMp4/f7/b4/a7/f7b4a7f6ef86dd94d0a7e735d5647b60_720w.mp4',
    rotate: 270,
    cropFocus: 0.5
  },
  {
    id: 'animated-apex-web-slinger-canyon-glide',
    slug: 'apex-web-slinger-canyon-glide',
    pinId: '617837642705032241',
    type: 'video',
    mediaUrl: 'https://v1.pinimg.com/videos/iht/expMp4/05/32/36/053236ad7a307ac5efd22e838deb1424_720w.mp4',
    rotate: 270,
    cropFocus: 0.45
  },
  {
    id: 'animated-demon-vanguard-anti-magic-wings',
    slug: 'demon-vanguard-anti-magic-wings',
    pinId: '40321359157724943',
    type: 'video',
    mediaUrl: 'https://v1.pinimg.com/videos/mc/720p/ad/94/de/ad94deeab38090775cbce52580821f5f.mp4',
    rotate: 270,
    cropFocus: 0.35
  },
  {
    id: 'animated-flame-bone-valkyrie-incineration',
    slug: 'flame-bone-valkyrie-incineration',
    pinId: '617837642704184852',
    type: 'video',
    mediaUrl: 'https://v1.pinimg.com/videos/iht/expMp4/1d/db/7a/1ddb7ae34b1e4f1452cf4ebe9e3176b0_720w.mp4',
    rotate: 270,
    cropFocus: 0.25
  },
  {
    id: 'animated-fragrant-blossom-gentle-breeze',
    slug: 'fragrant-blossom-gentle-breeze',
    pinId: '617837642704994703',
    type: 'video',
    mediaUrl: 'https://v1.pinimg.com/videos/iht/expMp4/aa/0e/bb/aa0ebb7fe50933a49158445378803906_720w.mp4',
    rotate: 270,
    cropFocus: 0.3
  },
  {
    id: 'animated-neon-solitude-cyber-gaze',
    slug: 'neon-solitude-cyber-gaze',
    pinId: '876442777477369455',
    type: 'video',
    mediaUrl: 'https://v1.pinimg.com/videos/iht/720p/83/a5/d7/83a5d73929d686c29a8e01ddf34aa24a.mp4',
    rotate: 270,
    cropFocus: 0.5
  },
  {
    id: 'animated-quantum-gauntlet-cosmic-surge',
    slug: 'quantum-gauntlet-cosmic-surge',
    pinId: '845973111298302062',
    type: 'video',
    mediaUrl: 'https://v1.pinimg.com/videos/iht/expMp4/b2/1b/3e/b21b3ef2b41f28cfd0efea845c06bc89_720w.mp4',
    rotate: 0,
    cropFocus: 0.35
  },
  {
    id: 'animated-multiverse-clocktower-inverted-dusk',
    slug: 'multiverse-clocktower-inverted-dusk',
    pinId: '871305859170879219',
    type: 'video',
    mediaUrl: 'https://v1.pinimg.com/videos/iht/expMp4/06/af/1a/06af1aad6fc2c203231f0961a95b80ac_720w.mp4',
    rotate: 0,
    cropFocus: 0.35
  },
  {
    id: 'animated-curse-sovereign-hand-seal-surge',
    slug: 'curse-sovereign-hand-seal-surge',
    pinId: '1017743215783032616',
    type: 'video',
    mediaUrl: 'https://v1.pinimg.com/videos/mc/720p/f5/db/d9/f5dbd9fc22fa74ec517c4b982aad5f99.mp4',
    rotate: 0,
    cropFocus: 0.35
  },
  {
    id: 'animated-malevolent-temple-blood-water-abyss',
    slug: 'malevolent-temple-blood-water-abyss',
    pinId: '809803576792699081',
    type: 'video',
    mediaUrl: 'https://v1.pinimg.com/videos/iht/expMp4/f5/bd/7b/f5bd7b16fdff5bd2585a748b1d6c8033_720w.mp4',
    rotate: 0,
    cropFocus: 0.45
  },
  {
    id: 'animated-crimson-reaper-thunder-tempest',
    slug: 'crimson-reaper-thunder-tempest',
    pinId: '1149121661213420107',
    type: 'video',
    mediaUrl: 'https://v1.pinimg.com/videos/iht/expMp4/60/4b/86/604b86a9821dba4d0dc8fe4612adb54a_720w.mp4',
    rotate: 0,
    cropFocus: 0.4
  },
  {
    id: 'animated-striker-icon-stadium-spotlight-flame',
    slug: 'striker-icon-stadium-spotlight-flame',
    pinId: '674695587962057234',
    type: 'video',
    mediaUrl: 'https://v1.pinimg.com/videos/iht/720p/68/62/8b/68628b55ef6b3e06523a4b38226f1c09.mp4',
    rotate: 270,
    cropFocus: 0.2
  },
  {
    id: 'animated-golden-playmaker-world-champion',
    slug: 'golden-playmaker-world-champion',
    pinId: '1092756297116546779',
    type: 'video',
    mediaUrl: 'https://v1.pinimg.com/videos/iht/expMp4/b9/4c/df/b94cdf7b31b941f438496cddf8f4beb2_720w.mp4',
    rotate: 0,
    cropFocus: 0.2
  },
  {
    id: 'animated-cricket-chase-master-fire-stadium',
    slug: 'cricket-chase-master-fire-stadium',
    pinId: '1063834743248226563',
    type: 'video',
    mediaUrl: 'https://v1.pinimg.com/videos/iht/expMp4/ff/1b/d1/ff1bd12669641721786b01f79a068533_720w.mp4',
    rotate: 270,
    cropFocus: 0.2
  },
  {
    id: 'animated-striker-dynamo-graphic-arena',
    slug: 'striker-dynamo-graphic-arena',
    pinId: '1085015735257097975',
    type: 'image',
    mediaUrl: 'https://i.pinimg.com/originals/12/41/e1/1241e1635ec4b5e118fd8da1ba7ac0cb.jpg',
    rotate: 270,
    cropFocus: 0.2
  },
  {
    id: 'animated-blaugrana-cathedral-stadium-lights',
    slug: 'blaugrana-cathedral-stadium-lights',
    pinId: '832603049906882290',
    type: 'image',
    mediaUrl: 'https://i.pinimg.com/originals/a0/96/48/a096489e05e92a81114d562c21a9e4f7.jpg',
    rotate: 270,
    cropFocus: 0.2
  }
];

const tmpDir = path.join(process.cwd(), '.tmp_pins');
if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir, { recursive: true });

const outDir = path.join(process.cwd(), 'public/assets/animated');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

async function processAll() {
  console.log(`Starting processing for ${PINS.length} Pinterest animations (horizontal 720x300 format)...`);
  let index = 0;

  for (const item of PINS) {
    index++;
    const destWebp = path.join(outDir, `${item.slug}.webp`);
    const destPoster = path.join(outDir, `${item.slug}-poster.webp`);

    console.log(`\n[${index}/${PINS.length}] Processing: ${item.slug} (${item.type}, rotate: ${item.rotate}°)...`);

    try {
      if (item.type === 'video') {
        const rawVideo = path.join(tmpDir, `${item.slug}_raw.mp4`);
        const tempGif = path.join(tmpDir, `${item.slug}_temp.gif`);

        // Check local cache first in /tmp/pin_frames or download
        const cachedPath = path.join('/tmp/pin_frames', `${item.slug}.mp4`);
        if (fs.existsSync(cachedPath)) {
          console.log(`  Using cached source ${cachedPath}...`);
          fs.copyFileSync(cachedPath, rawVideo);
        } else {
          console.log(`  Downloading ${item.mediaUrl}...`);
          execFileSync('curl', ['-s', '-L', item.mediaUrl, '-o', rawVideo]);
        }

        // Transcode to 720x300 horizontal GIF
        console.log(`  Converting video to 720x300 horizontal GIF...`);
        const transposeFilter = item.rotate === 270 ? 'transpose=2,' : (item.rotate === 90 ? 'transpose=1,' : '');
        const cropY = `(ih-300)*${item.cropFocus}`;
        const filterStr = `${transposeFilter}fps=12,scale=720:-2,crop=720:300:0:${cropY},split[s0][s1];[s0]palettegen=max_colors=128[p];[s1][p]paletteuse=dither=bayer`;

        execFileSync('ffmpeg', [
          '-y',
          '-t', '2.6',
          '-i', rawVideo,
          '-vf', filterStr,
          tempGif
        ]);

        // Convert GIF to animated WebP via sharp
        console.log(`  Optimizing to animated WebP: ${item.slug}.webp...`);
        await sharp(tempGif, { animated: true, limitInputPixels: false })
          .webp({ quality: 78, effort: 4 })
          .toFile(destWebp);

        // Extract first frame as poster
        console.log(`  Extracting static poster: ${item.slug}-poster.webp...`);
        await sharp(destWebp, { page: 0 })
          .webp({ quality: 85 })
          .toFile(destPoster);

        // Cleanup
        if (fs.existsSync(rawVideo)) fs.unlinkSync(rawVideo);
        if (fs.existsSync(tempGif)) fs.unlinkSync(tempGif);

      } else if (item.type === 'image') {
        const rawImg = path.join(tmpDir, `${item.slug}_raw.jpg`);
        const croppedImg = path.join(tmpDir, `${item.slug}_cropped.png`);
        const tempGif = path.join(tmpDir, `${item.slug}_temp.gif`);

        // Check local cache first in /tmp/pin_frames or download
        const cachedPath = path.join('/tmp/pin_frames', `${item.slug}.jpg`);
        if (fs.existsSync(cachedPath)) {
          console.log(`  Using cached source ${cachedPath}...`);
          fs.copyFileSync(cachedPath, rawImg);
        } else {
          console.log(`  Downloading image ${item.mediaUrl}...`);
          execFileSync('curl', ['-s', '-L', item.mediaUrl, '-o', rawImg]);
        }

        // Rotate and crop to 720x300 base image with sharp
        let sharpTransform = sharp(rawImg);
        if (item.rotate) {
          sharpTransform = sharpTransform.rotate(item.rotate);
        }

        const position = item.cropFocus <= 0.3 ? 'top' : (item.cropFocus >= 0.7 ? 'bottom' : 'center');
        await sharpTransform
          .resize(720, 300, {
            fit: 'cover',
            position
          })
          .png()
          .toFile(croppedImg);

        // Create static poster directly
        console.log(`  Creating static poster: ${item.slug}-poster.webp...`);
        await sharp(croppedImg)
          .webp({ quality: 85 })
          .toFile(destPoster);

        // Generate subtle ambient animated WebP loop for image
        console.log(`  Generating animated WebP loop for image...`);
        execFileSync('ffmpeg', [
          '-y',
          '-loop', '1',
          '-t', '2.0',
          '-i', croppedImg,
          '-vf', 'fps=12,split[s0][s1];[s0]palettegen=max_colors=128[p];[s1][p]paletteuse=dither=bayer',
          tempGif
        ]);

        await sharp(tempGif, { animated: true, limitInputPixels: false })
          .webp({ quality: 78, effort: 4 })
          .toFile(destWebp);

        // Cleanup
        if (fs.existsSync(rawImg)) fs.unlinkSync(rawImg);
        if (fs.existsSync(croppedImg)) fs.unlinkSync(croppedImg);
        if (fs.existsSync(tempGif)) fs.unlinkSync(tempGif);
      }

      const webpStat = fs.statSync(destWebp);
      console.log(`  ✓ Done! ${item.slug}.webp (${(webpStat.size / 1024).toFixed(1)} KB)`);

    } catch (err) {
      console.error(`  ✗ Error processing ${item.slug}:`, err.message);
    }
  }

  // Cleanup tmp dir
  if (fs.existsSync(tmpDir)) fs.rmdirSync(tmpDir, { recursive: true });
  console.log(`\n🎉 All ${PINS.length} Pinterest animations processed into horizontal 720x300 banners!`);
}

processAll().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
