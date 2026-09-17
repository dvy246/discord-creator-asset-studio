import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '../dist');

test('Palette Selector: Generated HTML includes palette selector in header and inline script in head', () => {
  const indexPath = path.join(distDir, 'index.html');
  assert.ok(fs.existsSync(indexPath), 'dist/index.html must exist');
  const html = fs.readFileSync(indexPath, 'utf-8');

  // Head synchronous script
  assert.ok(html.includes('site-palette'), 'HTML head must check localStorage for site-palette to prevent FOUC');
  assert.ok(html.includes('data-palette'), 'HTML head must set data-palette attribute');

  // Header Palette Dropdown Button
  assert.ok(html.includes('id="palette-dropdown-btn"'), 'Header must contain palette dropdown button');
  assert.ok(html.includes('id="palette-dropdown-menu"'), 'Header must contain palette dropdown menu popover');

  // Check that all 13 palettes are present in the dropdown
  const expectedPalettes = [
    'default',
    'burgundy',
    'pastel',
    'terracotta',
    'crimson',
    'blush',
    'mint',
    'retropop',
    'cottoncandy',
    'mahogany',
    'gelato',
    'electric',
    'coastal'
  ];
  for (const palette of expectedPalettes) {
    assert.ok(
      html.includes(`data-palette="${palette}"`),
      `Dropdown must include palette option: ${palette}`
    );
  }

  // Mobile drawer palette options
  assert.ok(html.includes('mobile-palette-btn'), 'Mobile nav drawer must include mobile palette buttons');
});

test('Palette Selector: All user-specified hex colors exist in the palette swatches', () => {
  const indexPath = path.join(distDir, 'index.html');
  const html = fs.readFileSync(indexPath, 'utf-8');

  // Verify all exact user hex codes are present
  const userHexCodes = [
    // Batch 1
    '#800020', '#F3E6D5', '#FFF9F2', '#D45060', // Burgundy
    '#FDF4D2', '#B0CDE6', '#A290B7', '#946D6D', // Pastel
    '#F5EBDD', '#F2765E', '#315B8C', '#413333', // Terracotta
    '#F5F5DC', '#FBC02D', '#FF8F00', '#C62828', // Crimson
    '#FFF5F5', '#F7D6D0', '#E2B4BD', '#4A4A4A', // Blush
    '#FCF9EA', '#BADFDB', '#FFA4A4', '#FFBDBD', // Mint
    // Batch 2
    '#F599C6', '#FFEA88', '#7DCCAD', '#4D6787', // Retro Pop
    '#F9F5F6', '#F8E8EE', '#FDCEDF', '#F2BED1', // Cotton Candy
    '#6D0808', '#2D0000', '#757D6F', '#EEEAD7', // Gothic Mahogany
    '#FF9D9D', '#FFC5AA', '#EEF8CD', '#BBF1D2', // Pastel Gelato
    '#FF84BA', '#FFDF82', '#99C2FF', '#FFEFE3', // Cosmic Sunset
    '#FFF6DE', '#8BDFDD', '#F48F68', '#FFE394', // Coastal Sunshine
  ];

  for (const hex of userHexCodes) {
    const hasHex = html.toLowerCase().includes(hex.toLowerCase());
    assert.ok(hasHex, `HTML swatches must contain exact hex code: ${hex}`);
  }
});

test('Palette Selector: CSS contains stylesheet rules for all 12 custom palettes', () => {
  // Find the generated css file in dist/_astro
  const astroDir = path.join(distDir, '_astro');
  const cssFiles = fs.readdirSync(astroDir).filter(f => f.endsWith('.css'));
  assert.ok(cssFiles.length > 0, 'At least one compiled CSS file must exist');

  const fullCss = cssFiles.map(f => fs.readFileSync(path.join(astroDir, f), 'utf-8')).join('\n');

  const paletteNames = [
    'burgundy',
    'pastel',
    'terracotta',
    'crimson',
    'blush',
    'mint',
    'retropop',
    'cottoncandy',
    'mahogany',
    'gelato',
    'electric',
    'coastal'
  ];
  for (const name of paletteNames) {
    assert.ok(
      fullCss.includes(`data-palette="${name}"`) || fullCss.includes(`data-palette=${name}`),
      `CSS must contain style rules for palette: ${name}`
    );
  }
});

test('Palette Selector: CSS contains dark mode rules for all 12 custom palettes', () => {
  const astroDir = path.join(distDir, '_astro');
  const cssFiles = fs.readdirSync(astroDir).filter(f => f.endsWith('.css'));
  const fullCss = cssFiles.map(f => fs.readFileSync(path.join(astroDir, f), 'utf-8')).join('\n');

  const paletteNames = [
    'burgundy',
    'pastel',
    'terracotta',
    'crimson',
    'blush',
    'mint',
    'retropop',
    'cottoncandy',
    'mahogany',
    'gelato',
    'electric',
    'coastal'
  ];
  for (const name of paletteNames) {
    assert.ok(
      fullCss.includes(`dark[data-palette="${name}"]`) || fullCss.includes(`dark[data-palette=${name}]`),
      `CSS must contain dark mode style rules for palette: ${name}`
    );
  }
});

test('Header Buttons: HTML and CSS contain premium header navigation buttons', () => {
  const indexPath = path.join(distDir, 'index.html');
  const html = fs.readFileSync(indexPath, 'utf-8');

  // Verify header-nav-btn on navigation links
  assert.ok(html.includes('header-nav-btn'), 'Header navigation links must have header-nav-btn class');
  assert.ok(html.includes('/tools/emoji/'), 'Must link to Emoji tool');
  assert.ok(html.includes('/tools/sticker/'), 'Must link to Sticker tool');
  assert.ok(html.includes('/tools/banner/'), 'Must link to Banner tool');
  assert.ok(html.includes('/tools/avatar/'), 'Must link to Avatar tool');
  assert.ok(html.includes('/tools/role-icon/'), 'Must link to Role Icon tool');
  assert.ok(html.includes('/guides/discord-sizes/'), 'Must link to Size Guide');

  // Verify CSS contains header-nav-btn rules
  const astroDir = path.join(distDir, '_astro');
  const cssFiles = fs.readdirSync(astroDir).filter(f => f.endsWith('.css'));
  const fullCss = cssFiles.map(f => fs.readFileSync(path.join(astroDir, f), 'utf-8')).join('\n');
  assert.ok(fullCss.includes('header-nav-btn'), 'Compiled CSS must include .header-nav-btn styles');
});
