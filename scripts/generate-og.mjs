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

function generateOG() {
  const width = 1200;
  const height = 630;

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
  drawText("100% CLIENT-SIDE • ZERO SERVER UPLOADS", 120, 74, 2, 88, 225, 255, 255);

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
  drawText("DISCORD CREATOR", 235, 140, 8, 255, 255, 255, 255);
  drawText("ASSET STUDIO", 235, 210, 8, 88, 225, 255, 255);

  // 6. Subtitle
  drawText("VERIFIED CREATOR REGISTRY & IN-BROWSER RESIZING ENGINE", 75, 305, 4, 242, 239, 231, 255);
  drawText("BINARY 256 KIB BOUNDARIES • 48PX BANNER SAFE ZONES • APNG STICKERS", 75, 355, 3, 200, 223, 219, 220);
  drawText("100% PRIVATE CLIENT-SIDE PROCESSING VIA WEB WORKERS", 75, 395, 3, 200, 223, 219, 220);

  // 7. Bottom Feature Cards
  const cards = [
    { label: "EMOJIS", desc: "128PX • 256 KIB" },
    { label: "STICKERS", desc: "320PX • 512 KIB" },
    { label: "BANNERS", desc: "16:9 • SAFE ZONE" },
    { label: "AVATARS", desc: "512PX • 1:1 CIRCLE" },
    { label: "ROLE ICONS", desc: "64PX • BOOST L2" }
  ];

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

  // Encode to PNG
  const pngData = encodePNG(width, height, (x, y) => {
    const idx = (y * width + x) * 4;
    return [buffer[idx], buffer[idx + 1], buffer[idx + 2], buffer[idx + 3]];
  });

  fs.writeFileSync('public/og-image.png', pngData);
  fs.writeFileSync('public/og-image.jpg', pngData); // also write jpg so both URLs resolve
  console.log(`Successfully generated public/og-image.png and public/og-image.jpg (${pngData.length} bytes)`);
}

generateOG();
