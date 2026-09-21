import fs from 'node:fs';
import zlib from 'node:zlib';

const crcTable = new Uint32Array(256);
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) {
    if (c & 1) c = 0xedb88320 ^ (c >>> 1);
    else c = c >>> 1;
  }
  crcTable[n] = c;
}

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
}

function makeChunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, 'ascii');
  const crcBuf = Buffer.alloc(4);
  const crc = crc32(Buffer.concat([typeBuf, data]));
  crcBuf.writeUInt32BE(crc, 0);
  return Buffer.concat([len, typeBuf, data, crcBuf]);
}

export function encodePNG(width, height, getPixel) {
  const rowSize = 1 + width * 4;
  const raw = Buffer.alloc(height * rowSize);

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowSize;
    raw[rowOffset] = 0; // Filter: None
    for (let x = 0; x < width; x++) {
      const pxOffset = rowOffset + 1 + x * 4;
      const [r, g, b, a] = getPixel(x, y);
      raw[pxOffset] = r;
      raw[pxOffset + 1] = g;
      raw[pxOffset + 2] = b;
      raw[pxOffset + 3] = a;
    }
  }

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // Bit depth
  ihdr[9] = 6; // Color type: RGBA
  ihdr[10] = 0; // Compression
  ihdr[11] = 0; // Filter
  ihdr[12] = 0; // Interlace

  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  const ihdrChunk = makeChunk('IHDR', ihdr);
  const idatChunk = makeChunk('IDAT', zlib.deflateSync(raw, { level: 9 }));
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

// Minimal 5x7 bitmap font for crisp text rendering
const FONT_5X7 = {
  ' ': [0, 0, 0, 0, 0],
  'A': [0x7e, 0x11, 0x11, 0x11, 0x7e],
  'B': [0x7f, 0x49, 0x49, 0x49, 0x36],
  'C': [0x3e, 0x41, 0x41, 0x41, 0x22],
  'D': [0x7f, 0x41, 0x41, 0x22, 0x1c],
  'E': [0x7f, 0x49, 0x49, 0x49, 0x41],
  'F': [0x7f, 0x09, 0x09, 0x09, 0x01],
  'G': [0x3e, 0x41, 0x49, 0x49, 0x7a],
  'H': [0x7f, 0x08, 0x08, 0x08, 0x7f],
  'I': [0x00, 0x41, 0x7f, 0x41, 0x00],
  'J': [0x20, 0x40, 0x41, 0x3f, 0x01],
  'K': [0x7f, 0x08, 0x14, 0x22, 0x41],
  'L': [0x7f, 0x40, 0x40, 0x40, 0x40],
  'M': [0x7f, 0x02, 0x0c, 0x02, 0x7f],
  'N': [0x7f, 0x04, 0x08, 0x10, 0x7f],
  'O': [0x3e, 0x41, 0x41, 0x41, 0x3e],
  'P': [0x7f, 0x09, 0x09, 0x09, 0x06],
  'Q': [0x3e, 0x41, 0x51, 0x21, 0x5e],
  'R': [0x7f, 0x09, 0x19, 0x29, 0x46],
  'S': [0x46, 0x49, 0x49, 0x49, 0x31],
  'T': [0x01, 0x01, 0x7f, 0x01, 0x01],
  'U': [0x3f, 0x40, 0x40, 0x40, 0x3f],
  'V': [0x1f, 0x20, 0x40, 0x20, 0x1f],
  'W': [0x7f, 0x20, 0x18, 0x20, 0x7f],
  'X': [0x63, 0x14, 0x08, 0x14, 0x63],
  'Y': [0x07, 0x08, 0x70, 0x08, 0x07],
  'Z': [0x61, 0x51, 0x49, 0x45, 0x43],
  '0': [0x3e, 0x51, 0x49, 0x45, 0x3e],
  '1': [0x00, 0x42, 0x7f, 0x40, 0x00],
  '2': [0x42, 0x61, 0x51, 0x49, 0x46],
  '3': [0x21, 0x41, 0x45, 0x4b, 0x31],
  '4': [0x18, 0x14, 0x12, 0x7f, 0x10],
  '5': [0x27, 0x45, 0x45, 0x45, 0x39],
  '6': [0x3c, 0x4a, 0x49, 0x49, 0x30],
  '7': [0x01, 0x71, 0x09, 0x05, 0x03],
  '8': [0x36, 0x49, 0x49, 0x49, 0x36],
  '9': [0x06, 0x49, 0x49, 0x29, 0x1e],
  ':': [0x00, 0x36, 0x36, 0x00, 0x00],
  '-': [0x08, 0x08, 0x08, 0x08, 0x08],
  '•': [0x00, 0x1c, 0x1c, 0x1c, 0x00],
  '|': [0x00, 0x00, 0x7f, 0x00, 0x00],
  '/': [0x20, 0x10, 0x08, 0x04, 0x02],
  '&': [0x36, 0x49, 0x55, 0x22, 0x50],
  '(': [0x00, 0x1c, 0x22, 0x41, 0x00],
  ')': [0x00, 0x41, 0x22, 0x1c, 0x00],
  '%': [0x23, 0x13, 0x08, 0x64, 0x62],
  '.': [0x00, 0x40, 0x40, 0x00, 0x00],
  ',': [0x00, 0x40, 0x20, 0x00, 0x00],
  '>': [0x41, 0x22, 0x14, 0x08, 0x00],
  '[': [0x00, 0x7f, 0x41, 0x41, 0x00],
  ']': [0x00, 0x41, 0x41, 0x7f, 0x00]
};

function renderOG(width, height, config) {
  const {
    title = "DISCORD CREATOR",
    titleLine2 = "ASSET STUDIO",
    subtitle = "VERIFIED CREATOR REGISTRY & IN-BROWSER RESIZING ENGINE",
    tagline1 = "BINARY 256 KIB BOUNDARIES • 48PX BANNER SAFE ZONES • APNG STICKERS",
    tagline2 = "100% PRIVATE CLIENT-SIDE PROCESSING VIA WEB WORKERS",
    cards = [
      { label: "EMOJIS", desc: "128PX • 256 KIB" },
      { label: "STICKERS", desc: "320PX • 512 KIB" },
      { label: "BANNERS", desc: "16:9 • SAFE ZONE" },
      { label: "AVATARS", desc: "512PX • 1:1 CIRCLE" },
      { label: "ROLE ICONS", desc: "64PX • BOOST L2" }
    ],
    badge = "100% CLIENT-SIDE • ZERO SERVER UPLOADS"
  } = config;

  // Create pixel buffer
  const buffer = new Uint8ClampedArray(width * height * 4);

  function setPixel(x, y, r, g, b, a = 255) {
    if (x < 0 || x >= width || y < 0 || y >= height) return;
    const idx = (y * width + x) * 4;
    const bgA = buffer[idx + 3] / 255;
    const fgA = a / 255;
    const outA = fgA + bgA * (1 - fgA);
    if (outA > 0) {
      buffer[idx] = Math.round((r * fgA + buffer[idx] * bgA * (1 - fgA)) / outA);
      buffer[idx + 1] = Math.round((g * fgA + buffer[idx + 1] * bgA * (1 - fgA)) / outA);
      buffer[idx + 2] = Math.round((b * fgA + buffer[idx + 2] * bgA * (1 - fgA)) / outA);
      buffer[idx + 3] = Math.round(outA * 255);
    }
  }

  function fillRect(rx, ry, rw, rh, r, g, b, a = 255) {
    for (let y = ry; y < ry + rh; y++) {
      for (let x = rx; x < rx + rw; x++) {
        setPixel(x, y, r, g, b, a);
      }
    }
  }

  function drawText(text, startX, startY, scale, r, g, b, a = 255) {
    let curX = startX;
    const upper = text.toUpperCase();
    for (let i = 0; i < upper.length; i++) {
      const ch = upper[i];
      const glyph = FONT_5X7[ch] || FONT_5X7[' '];
      for (let col = 0; col < 5; col++) {
        const bits = glyph[col];
        for (let row = 0; row < 7; row++) {
          if ((bits >> row) & 1) {
            fillRect(curX + col * scale, startY + row * scale, scale, scale, r, g, b, a);
          }
        }
      }
      curX += 6 * scale;
    }
  }

  // 1. Diagonal Gradient: Discord Blurple (#5865F2) to Studio Dark Navy (#101726)
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const factor = (x / width) * 0.45 + (y / height) * 0.55;
      const r = Math.round(88 * (1 - factor) + 16 * factor);
      const g = Math.round(101 * (1 - factor) + 23 * factor);
      const b = Math.round(242 * (1 - factor) + 38 * factor);
      setPixel(x, y, r, g, b, 255);
    }
  }

  // 2. Safe zone corner reticles
  const retColor = [255, 255, 255, 140];
  fillRect(40, 40, 40, 3, ...retColor);
  fillRect(40, 40, 3, 40, ...retColor);
  fillRect(width - 80, 40, 40, 3, ...retColor);
  fillRect(width - 43, 40, 3, 40, ...retColor);
  fillRect(40, height - 43, 40, 3, ...retColor);
  fillRect(40, height - 80, 3, 40, ...retColor);
  fillRect(width - 80, height - 43, 40, 3, ...retColor);
  fillRect(width - 43, height - 80, 3, 40, ...retColor);

  // Outer subtle border
  fillRect(24, 24, width - 48, 2, 102, 163, 191, 60);
  fillRect(24, height - 26, width - 48, 2, 102, 163, 191, 60);
  fillRect(24, 24, 2, height - 48, 102, 163, 191, 60);
  fillRect(width - 26, 24, 2, height - 48, 102, 163, 191, 60);

  // 3. Status Pill
  fillRect(75, 60, 430, 42, 25, 38, 56, 200);
  fillRect(75, 60, 430, 2, 102, 163, 191, 100);
  fillRect(75, 100, 430, 2, 102, 163, 191, 100);
  // Emerald Status Dot
  fillRect(95, 75, 12, 12, 13, 148, 136, 255);
  drawText(badge, 120, 74, 2, 88, 225, 255, 255);

  // 4. Clyde Logo Box
  const clydeX = 75, clydeY = 135, clydeSize = 130;
  fillRect(clydeX, clydeY, clydeSize, clydeSize, 88, 101, 242, 255);
  fillRect(clydeX, clydeY, clydeSize, 3, 255, 255, 255, 180);
  fillRect(clydeX, clydeY, 3, clydeSize, 255, 255, 255, 180);
  fillRect(clydeX, clydeY + clydeSize - 3, clydeSize, 3, 255, 255, 255, 180);
  fillRect(clydeX + clydeSize - 3, clydeY, 3, clydeSize, 255, 255, 255, 180);

  // Clyde Face inside box
  const cMidX = clydeX + clydeSize / 2;
  const cMidY = clydeY + clydeSize / 2;
  fillRect(cMidX - 44, cMidY - 26, 88, 52, 255, 255, 255, 255);
  // Ears
  fillRect(cMidX - 40, cMidY - 38, 20, 14, 255, 255, 255, 255);
  fillRect(cMidX + 20, cMidY - 38, 20, 14, 255, 255, 255, 255);
  // Eyes
  fillRect(cMidX - 26, cMidY - 10, 16, 20, 88, 101, 242, 255);
  fillRect(cMidX + 10, cMidY - 10, 16, 20, 88, 101, 242, 255);

  // 5. Title
  drawText(title, 235, 140, 8, 255, 255, 255, 255);
  drawText(titleLine2, 235, 210, 8, 88, 225, 255, 255);

  // 6. Subtitle
  drawText(subtitle, 75, 305, 4, 242, 239, 231, 255);
  drawText(tagline1, 75, 355, 3, 200, 223, 219, 220);
  drawText(tagline2, 75, 395, 3, 200, 223, 219, 220);

  // 7. Bottom Feature Cards
  const cardW = 195;
  const gap = 20;
  const startCardX = 75;
  const cardY = 475;

  for (let i = 0; i < cards.length; i++) {
    const cx = startCardX + i * (cardW + gap);
    fillRect(cx, cardY, cardW, 85, 26, 38, 56, 220);
    fillRect(cx, cardY, cardW, 2, 102, 163, 191, 100);
    fillRect(cx, cardY + 83, cardW, 2, 102, 163, 191, 100);
    fillRect(cx, cardY, 2, 85, 102, 163, 191, 100);
    fillRect(cx + cardW - 2, cardY, 2, 85, 102, 163, 191, 100);

    drawText(cards[i].label, cx + 18, cardY + 22, 3, 255, 255, 255, 255);
    drawText(cards[i].desc, cx + 18, cardY + 52, 2, 88, 225, 255, 240);
  }

  // Encode to PNG and return the buffer
  return encodePNG(width, height, (x, y) => {
    const idx = (y * width + x) * 4;
    return [buffer[idx], buffer[idx + 1], buffer[idx + 2], buffer[idx + 3]];
  });
}

const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

// Per-page OG image configurations (filename → branding).
const PAGES = [
  { file: 'public/og-image.png', config: {} },
  {
    file: 'public/og/emoji.png',
    config: {
      title: 'DISCORD EMOJI', titleLine2: 'MAKER',
      subtitle: 'RESIZE & COMPRESS CUSTOM EMOJIS TO 128X128 UNDER 256 KIB',
      tagline1: 'REAL-TIME 32X32 CHAT PREVIEW • PNG GIF WEBP SUPPORT',
      tagline2: '100% PRIVATE IN-BROWSER PROCESSING',
      cards: [
        { label: 'SIZE', desc: '128X128 PX' }, { label: 'LIMIT', desc: '256 KIB' },
        { label: 'PREVIEW', desc: '32X32 CHAT' }, { label: 'FORMATS', desc: 'PNG GIF WEBP' },
        { label: 'PRIVACY', desc: '0 UPLOADS' }
      ]
    }
  },
  {
    file: 'public/og/sticker.png',
    config: {
      title: 'DISCORD STICKER', titleLine2: 'MAKER',
      subtitle: 'EXACT 320X320 RESIZE UNDER 512 KIB • APNG ANIMATION',
      tagline1: 'STATIC PNG & ANIMATED APNG • MAX 5S / 60 FPS',
      tagline2: 'AVOID INVALID ASSET ERRORS • 100% PRIVATE',
      cards: [
        { label: 'SIZE', desc: '320X320 PX' }, { label: 'LIMIT', desc: '512 KIB' },
        { label: 'ANIMATED', desc: 'APNG 5S' }, { label: 'FPS', desc: '60 MAX' },
        { label: 'PRIVACY', desc: '0 UPLOADS' }
      ]
    }
  },
  {
    file: 'public/og/banner.png',
    config: {
      title: 'DISCORD BANNER', titleLine2: 'MAKER',
      subtitle: 'SERVER 960X540 & PROFILE 680X240 • 48PX SAFE ZONE',
      tagline1: '16:9 & 5:2 PRESETS • NITRO & BOOST TIER RULES',
      tagline2: 'LIVE SAFE-ZONE OVERLAY • 100% PRIVATE',
      cards: [
        { label: 'SERVER', desc: '960X540' }, { label: 'PROFILE', desc: '680X240' },
        { label: 'RATIO', desc: '16:9 / 5:2' }, { label: 'SAFE ZONE', desc: '48PX TOP' },
        { label: 'PRIVACY', desc: '0 UPLOADS' }
      ]
    }
  },
  {
    file: 'public/og/avatar.png',
    config: {
      title: 'DISCORD AVATAR', titleLine2: 'CROPPER',
      subtitle: 'CIRCULAR CROP 512X512 PROFILE PICTURES & SERVER ICONS',
      tagline1: 'LIVE CIRCLE-MASK PREVIEW • NITRO ANIMATED FLAGS',
      tagline2: 'UNDER 8 MB • 100% PRIVATE IN-BROWSER',
      cards: [
        { label: 'SIZE', desc: '512X512 PX' }, { label: 'MASK', desc: 'CIRCULAR' },
        { label: 'LIMIT', desc: '8 MB' }, { label: 'FORMATS', desc: 'PNG GIF WEBP' },
        { label: 'PRIVACY', desc: '0 UPLOADS' }
      ]
    }
  },
  {
    file: 'public/og/image-compressor.png',
    config: {
      title: 'DISCORD IMAGE', titleLine2: 'COMPRESSOR',
      subtitle: 'SHRINK PNG JPG & WEBP UNDER THE 10 MB DISCORD UPLOAD LIMIT',
      tagline1: 'ITERATIVE QUALITY STEP-DOWN • ORIGINAL DIMENSIONS KEPT',
      tagline2: '100% PRIVATE IN-BROWSER PROCESSING • ZERO UPLOADS',
      cards: [
        { label: 'FREE', desc: '10 MB' }, { label: 'NITRO', desc: 'UP TO 500 MB' },
        { label: 'FORMATS', desc: 'WEBP JPG PNG' }, { label: 'RESIZE', desc: 'NONE — KEPT' },
        { label: 'PRIVACY', desc: '0 UPLOADS' }
      ]
    }
  },
  {
    file: 'public/og/colors.png',
    config: {
      title: 'DISCORD COLOR', titleLine2: 'HEX PALETTE',
      subtitle: 'BACKGROUND, BLURPLE & STATUS HEX CODES YOU CAN COPY',
      tagline1: 'DARK 313338 • BLURPLE 5865F2 • ONLINE 23A55A',
      tagline2: 'HEX RGB HSL PICKER • 100% CLIENT-SIDE',
      badge: 'REFERENCE COLOR VALUES • CLICK TO COPY',
      cards: [
        { label: 'DARK BG', desc: '313338' }, { label: 'BLURPLE', desc: '5865F2' },
        { label: 'ONLINE', desc: '23A55A' }, { label: 'PICKER', desc: 'HEX RGB HSL' },
        { label: 'COPY', desc: '1 CLICK' }
      ]
    }
  },
  {
    file: 'public/og/spoiler.png',
    config: {
      title: 'DISCORD IMAGE', titleLine2: 'SPOILER MAKER',
      subtitle: 'HIDE TEXT WITH || || OR BLUR IMAGES WITH SPOILER PREFIX',
      tagline1: 'TEXT SPOILER MARKUP • SPOILER_ FILENAME PREFIX',
      tagline2: 'DESKTOP & MOBILE • 100% PRIVATE IN-BROWSER',
      badge: 'TEXT & IMAGE SPOILERS • ZERO UPLOADS',
      cards: [
        { label: 'TEXT', desc: '|| || MARKUP' }, { label: 'IMAGE', desc: 'SPOILER_ PREFIX' },
        { label: 'PER-LINE', desc: 'TOGGLE' }, { label: 'PREVIEW', desc: 'LIVE BLUR' },
        { label: 'PRIVACY', desc: '0 UPLOADS' }
      ]
    }
  },
  {
    file: 'public/og/image-resizer.png',
    config: {
      title: 'DISCORD IMAGE', titleLine2: 'RESIZER',
      subtitle: 'SCALE TO EXACT DISCORD SIZES WITH ONE-CLICK PRESETS',
      tagline1: 'AVATAR 512 • STICKER 320 • EMOJI 128 • BANNER 960X540',
      tagline2: 'FIT FILL STRETCH MODES • 100% PRIVATE IN-BROWSER',
      cards: [
        { label: 'AVATAR', desc: '512X512' }, { label: 'STICKER', desc: '320X320' },
        { label: 'EMOJI', desc: '128X128' }, { label: 'BANNER', desc: '960X540' },
        { label: 'PRIVACY', desc: '0 UPLOADS' }
      ]
    }
  },
  {
    file: 'public/og/role-icon.png',
    config: {
      title: 'DISCORD ROLE', titleLine2: 'ICON MAKER',
      subtitle: 'EXACT 64X64 ROLE ICONS UNDER 256 KB FOR BOOST LEVEL 2',
      tagline1: '64X64 CANVAS • MANAGE ROLES PERMISSION RULES',
      tagline2: '100% PRIVATE IN-BROWSER PROCESSING',
      cards: [
        { label: 'SIZE', desc: '64X64 PX' }, { label: 'LIMIT', desc: '256 KB' },
        { label: 'TIER', desc: 'BOOST L2' }, { label: 'PERMS', desc: 'MANAGE ROLES' },
        { label: 'PRIVACY', desc: '0 UPLOADS' }
      ]
    }
  },
  {
    file: 'public/og/guide-sizes.png',
    config: {
      title: 'DISCORD SIZE', titleLine2: 'CHEAT SHEET',
      subtitle: 'EVERY OFFICIAL DISCORD DIMENSION & FILE LIMIT FOR 2026',
      tagline1: 'EMOJIS STICKERS BANNERS AVATARS ROLE ICONS',
      tagline2: 'NITRO & BOOST TIER REQUIREMENTS VERIFIED',
      badge: 'UPDATED FOR 2026 • ALL ASSET TYPES',
      cards: [
        { label: 'EMOJI', desc: '128PX' }, { label: 'STICKER', desc: '320PX' },
        { label: 'BANNER', desc: '960X540' }, { label: 'AVATAR', desc: '512PX' },
        { label: 'ROLE', desc: '64PX' }
      ]
    }
  },
  {
    file: 'public/og/guide-gif.png',
    config: {
      title: 'DISCORD GIF', titleLine2: 'MAKER GUIDE',
      subtitle: 'MASTER ANIMATED GIFS UNDER THE 256 KIB LIMIT',
      tagline1: 'FRAME RATE & PALETTE OPTIMIZATION • APNG',
      tagline2: 'BANNERS EMOJIS AVATARS • 100% PRIVATE',
      badge: 'ANIMATION ENGINEERING • 2026',
      cards: [
        { label: 'EMOJI', desc: '256 KIB' }, { label: 'FPS', desc: '20-30' },
        { label: 'PALETTE', desc: '64-128' }, { label: 'BANNER', desc: '10 MB' },
        { label: 'PRIVACY', desc: '0 UPLOADS' }
      ]
    }
  }
];

const BLOG = [
  { file: 'public/og/blog-stickers.png', title: 'MAKE A DISCORD', titleLine2: 'STICKER', subtitle: 'AVOID INVALID ASSET ERRORS • EXACT 320X320 & 512 KIB' },
  { file: 'public/og/blog-banners.png', title: 'DISCORD BANNER', titleLine2: 'IDEAS', subtitle: 'SERVER & PROFILE BANNER TEMPLATES BY AESTHETIC' },
  { file: 'public/og/blog-pfp.png', title: 'DISCORD PFP', titleLine2: 'IDEAS', subtitle: 'ANIME AVATARS & PROFILE PICTURE INSPIRATION' },
  { file: 'public/og/blog-spoiler.png', title: 'DISCORD IMAGE', titleLine2: 'SPOILER', subtitle: 'HIDE SENSITIVE MEDIA ON DESKTOP & MOBILE' },
  { file: 'public/og/blog-server-banner.png', title: 'CHANGE SERVER', titleLine2: 'BANNER', subtitle: 'BOOST TIER REQUIREMENTS & STEP-BY-STEP GUIDE' }
];

for (const b of BLOG) {
  PAGES.push({
    file: b.file,
    config: { title: b.title, titleLine2: b.titleLine2, subtitle: b.subtitle, badge: 'CREATOR GUIDE • DISCORD ASSET STUDIO' }
  });
}

fs.mkdirSync('public/og', { recursive: true });

let count = 0;
for (const page of PAGES) {
  const png = renderOG(OG_WIDTH, OG_HEIGHT, page.config);
  fs.writeFileSync(page.file, png);
  console.log(`✓ ${page.file} (${png.length} bytes)`);
  count++;
}

console.log(`\nSuccessfully generated ${count} OG images.`);
