/**
 * Discord Creator Asset Studio — Premium Presets Catalog
 * 100+ Meticulously Crafted Discord Assets with Static, Animated, Banner, PFP & Matching Set capabilities.
 * 
 * Strict Quality Guidelines:
 * - Original thematic concepts inspired by community demand (Anime, Gaming, Cyberpunk, Dark, Superhero, Aesthetic, etc.)
 * - Zero copyrighted characters/trademarks
 * - Built-in Discord Safe Zones (48px top margin, avatar bottom-left overlap)
 * - Exact Discord Profile Theme matching hex colors
 * - Smart focal point recomposition for circular avatar cropping
 * - Intentional, loop-perfect motion parameters (particles, parallax, rain, glow scan, atmospheric mist)
 */

export type AssetCategory =
  | 'anime'
  | 'gaming'
  | 'cyberpunk'
  | 'dark'
  | 'superhero'
  | 'aesthetic'
  | 'cinematic'
  | 'lofi'
  | 'space'
  | 'fantasy'
  | 'horror'
  | 'cute'
  | 'icons-2d';

export type AssetMood =
  | 'moody'
  | 'calm'
  | 'epic'
  | 'futuristic'
  | 'ethereal'
  | 'cozy'
  | 'mysterious'
  | 'energetic'
  | 'chill'
  | 'ominous';

export type AssetStyle =
  | 'cinematic-motion'
  | 'cel-shaded'
  | 'neon-glow'
  | 'lo-fi-grain'
  | 'pixel-art'
  | '3d-render'
  | 'matte-painting'
  | 'atmospheric-mist';

export interface MotionConfig {
  type:
    | 'particle'
    | 'parallax'
    | 'rain'
    | 'smoke'
    | 'light-pulse'
    | 'glow-scan'
    | 'floating'
    | 'aurora'
    | 'cyber-grid'
    | 'windblown-grass'
    | 'birch-blizzard'
    | 'inferno-shimmer'
    | 'cloud-drift'
    | 'iris-glint'
    | 'golden-prairie'
    | 'crimson-chakra'
    | 'neon-rain-alley'
    | 'orbital-weightless'
    | 'arcane-dust-motes'
    | 'ambient-shimmer'
    | 'spider-web-glint'
    | 'stargazer-constellations'
    | 'alpine-wind-drift'
    | 'cumulus-sunburst';
  speed: number; // 0.5 to 2.0
  intensity: number; // 0.1 to 1.0
  direction?: 'up' | 'down' | 'left' | 'right' | 'radial' | 'wave';
  particleCount?: number;
  glowColor?: string;
  blendMode?: string;
}

export interface CategoryInfo {
  id: AssetCategory;
  name: string;
  shortName: string;
  slug: string;
  seoTitle: string;
  metaDescription: string;
  h1Title: string;
  description: string;
  icon: string;
  primaryKeyword: string;
  count: number;
}

export interface DiscordAssetPreset {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: AssetCategory;
  categoryLabel: string;
  mood: AssetMood;
  style: AssetStyle;
  tags: string[];
  isPopular?: boolean;
  isStaffPick?: boolean;
  isNew?: boolean;
  imageUrl?: string; // Optional high-resolution image backdrop
  animatedWebpUrl?: string;
  gifUrl?: string;
  videoUrl?: string;
  pfpImageUrl?: string;
  isAnimated?: boolean;
  isPfp?: boolean;
  gender?: 'female' | 'male' | 'unisex';

  // Discord profile matching configuration
  profileThemeHex: string; // The hex color to paste into Discord profile settings for seamless blending
  accentHex: string;
  glowHex: string;
  paletteColors: [string, string, string, string];

  // Visual layout & focal point for smart recomposition
  focalPoint: {
    banner: { x: number; y: number }; // Percentage (0-100) of focal subject on banner
    pfp: { x: number; y: number; zoom: number }; // Center coordinates & zoom factor for circular PFP
  };

  // Visual artwork representation (SVG generative art & procedural layers)
  visualTheme: {
    gradient: string;
    bgPattern: 'grid' | 'dots' | 'waves' | 'hexagons' | 'circuit' | 'stars' | 'lines' | 'none';
    primaryIcon: string;
    secondaryElements: string[];
  };

  // Motion specification (compatible with Hyperframes timing & CSS/Canvas runtime)
  motionConfig: MotionConfig;

  // Search intent keywords
  searchQueries: string[];
}

export const ASSET_CATEGORIES: Record<AssetCategory, CategoryInfo> = {
  anime: {
    id: 'anime',
    name: 'Anime-Inspired',
    shortName: 'Anime',
    slug: 'anime',
    seoTitle: 'Discord Anime Banners & Matching PFPs | Creator Studio',
    metaDescription: '100% free original anime Discord banners and matching profile pictures. Handcrafted aesthetic safe-zone templates, animated banners, and profile sets.',
    h1Title: 'Anime Discord Banners & Matching PFPs',
    description: 'Cinematic anime aesthetic banners, stylized avatars, and matching profile pairs designed specifically for Discord profiles with seamless safe-zone alignment.',
    icon: '⚔️',
    primaryKeyword: 'discord anime banners',
    count: 12
  },
  gaming: {
    id: 'gaming',
    name: 'Gaming & Esports',
    shortName: 'Gaming',
    slug: 'gaming',
    seoTitle: 'Discord Gaming Banners & Esports Headers | Studio',
    metaDescription: 'Browse gaming Discord banners, esports team headers, and animated gaming avatars. Safe-zone verified 960x540 banners and 512x512 matching PFPs.',
    h1Title: 'Discord Gaming Banners & Esports Assets',
    description: 'High-octane gaming banners, stream headers, and competitive profile sets featuring tactical HUDs, neon arenas, and retro pixel gaming aesthetics.',
    icon: '🎮',
    primaryKeyword: 'discord gaming banners',
    count: 12
  },
  cyberpunk: {
    id: 'cyberpunk',
    name: 'Cyberpunk & Tech',
    shortName: 'Cyberpunk',
    slug: 'cyberpunk',
    seoTitle: 'Cyberpunk Discord Banners & Neon Tech PFPs | Asset Studio',
    metaDescription: 'Futuristic cyberpunk Discord banners, neon glitch profile pictures, and terminal HUD headers. Optimized for Discord Nitro animated profiles.',
    h1Title: 'Cyberpunk & Sci-Fi Discord Banners',
    description: 'Neon-soaked cyber aesthetics, holographic grids, futuristic HUD displays, and electric nightscapes tuned for dark-mode Discord.',
    icon: '⚡',
    primaryKeyword: 'cyberpunk discord banner',
    count: 10
  },
  dark: {
    id: 'dark',
    name: 'Dark & Gothic',
    shortName: 'Dark',
    slug: 'dark',
    seoTitle: 'Dark Aesthetic Discord Banners & Gothic PFPs | Studio',
    metaDescription: 'Curated dark aesthetic Discord banners and gothic PFPs. Deep obsidian palettes, midnight shadows, blood moon tones, and subtle fog animations.',
    h1Title: 'Dark Aesthetic & Gothic Discord Banners',
    description: 'Deep contrast, obsidian blacks, cathedral arches, misty horizons, and blood-moon hues that melt naturally into Discord dark mode.',
    icon: '🌑',
    primaryKeyword: 'dark aesthetic discord banner',
    count: 10
  },
  superhero: {
    id: 'superhero',
    name: 'Superhero & Comic',
    shortName: 'Superhero',
    slug: 'superhero',
    seoTitle: 'Superhero Discord Banners & Vigilante Profile Sets | Studio',
    metaDescription: 'Original comic and superhero-inspired Discord banners and avatar sets. Kinetic lightning, cosmic capes, and dynamic hero compositions.',
    h1Title: 'Superhero & Comic-Inspired Discord Banners',
    description: 'Epic kinetic energy, cosmic hero emblems, lightning storms, and vigilante night-sky compositions crafted for maximum impact.',
    icon: '🦸',
    primaryKeyword: 'superhero discord banners',
    count: 10
  },
  aesthetic: {
    id: 'aesthetic',
    name: 'Aesthetic & Pastel',
    shortName: 'Aesthetic',
    slug: 'aesthetic',
    seoTitle: 'Aesthetic Discord Banners & Pastel Matching PFPs | Studio',
    metaDescription: 'Dreamy aesthetic Discord banners, pastel gradients, and calm matching profile sets. Soft cloudscapes, floral twilight, and cozy pastel vibes.',
    h1Title: 'Aesthetic & Pastel Discord Banners',
    description: 'Gentle pastel skies, soothing twilight gradients, soft floral motifs, and cloudscapes designed to create a peaceful profile presence.',
    icon: '🌸',
    primaryKeyword: 'aesthetic discord banners',
    count: 10
  },
  cinematic: {
    id: 'cinematic',
    name: 'Cinematic & Atmosphere',
    shortName: 'Cinematic',
    slug: 'cinematic',
    seoTitle: 'Cinematic Discord Banners & Atmospheric Profiles | Studio',
    metaDescription: 'High-production cinematic Discord banners with dramatic lighting, volumetric rain, anamorphic lens flares, and epic movie-scale horizons.',
    h1Title: 'Cinematic Discord Banners & Environmental Art',
    description: 'Anamorphic lens flares, stormy horizons, blade-runner rainfall, and vast desert mirages built with widescreen cinematic composition.',
    icon: '🎬',
    primaryKeyword: 'cinematic discord banners',
    count: 10
  },
  lofi: {
    id: 'lofi',
    name: 'Lo-Fi & Cozy',
    shortName: 'Lo-Fi',
    slug: 'lofi',
    seoTitle: 'Lo-Fi Discord Banners & Cozy Bedroom Matching PFPs | Studio',
    metaDescription: 'Chill lo-fi Discord banners with gentle rain, warm coffee cups, vinyl player ambiance, and cozy study room aesthetic profile pictures.',
    h1Title: 'Lo-Fi Discord Banners & Cozy Aesthetics',
    description: 'Rainy windowpanes, warm desk lamps, vinyl crackle atmospheres, and nostalgic 3AM vibes for relaxed Discord profiles.',
    icon: '☕',
    primaryKeyword: 'lofi discord banner',
    count: 8
  },
  space: {
    id: 'space',
    name: 'Space & Cosmic',
    shortName: 'Space',
    slug: 'space',
    seoTitle: 'Cosmic Discord Banners & Nebula Space PFPs | Asset Studio',
    metaDescription: 'Vibrant space Discord banners, galaxy nebulae, orbital starships, and cosmic dust animations. Optimized for Nitro animated banners.',
    h1Title: 'Space & Cosmic Discord Banners',
    description: 'Deep cosmos nebulae, planetary rings, solar flares, and interstellar starfields that bring the infinite universe to your Discord card.',
    icon: '🌌',
    primaryKeyword: 'space discord banner',
    count: 8
  },
  fantasy: {
    id: 'fantasy',
    name: 'Fantasy & Mythic',
    shortName: 'Fantasy',
    slug: 'fantasy',
    seoTitle: 'Fantasy Discord Banners & Mythic Dragon PFPs | Studio',
    metaDescription: 'Original fantasy Discord banners featuring ancient ruins, enchanted forests, phoenix flames, and mythic crystal grottos with safe zones.',
    h1Title: 'Fantasy & Mythic Discord Banners',
    description: 'Enchanted elven sanctuaries, crystal caverns, glowing runes, and mythical beasts rendered with rich high-fantasy color palettes.',
    icon: '🐉',
    primaryKeyword: 'fantasy discord banner',
    count: 8
  },
  horror: {
    id: 'horror',
    name: 'Horror & Ominous',
    shortName: 'Horror',
    slug: 'horror',
    seoTitle: 'Horror Discord Banners & Creepy Glitch PFPs | Asset Studio',
    metaDescription: 'Eerie horror Discord banners, VHS static glitch effects, crimson fog, and eldritch shadow profile pictures for spooky server themes.',
    h1Title: 'Horror & Ominous Discord Banners',
    description: 'Distorted VHS static, crimson fog shadows, cursed artifacts, and spine-chilling atmospheric textures.',
    icon: '👁️',
    primaryKeyword: 'horror discord banner',
    count: 6
  },
  cute: {
    id: 'cute',
    name: 'Cute & Whimsical',
    shortName: 'Cute',
    slug: 'cute',
    seoTitle: 'Cute Discord Banners & Kawaii Matching PFPs | Studio',
    metaDescription: 'Adorable kawaii Discord banners, boba cat avatars, pixel frogs, and pastel marshmallow matching sets with verified safe zones.',
    h1Title: 'Cute & Kawaii Discord Banners',
    description: 'Chibi space companions, cozy boba shops, sweet pastry themes, and whimsical animations guaranteed to bring smiles.',
    icon: '✨',
    primaryKeyword: 'cute discord banner',
    count: 6
  },
  'icons-2d': {
    id: 'icons-2d',
    name: '2D Server Icons & Badges',
    shortName: '2D Icons',
    slug: 'icons-2d',
    seoTitle: 'Discord 2D Role Icons, Server Badges & Emojis | Asset Studio',
    metaDescription: '100% free 2D Discord role icons, vector server badges, and emoji stickers. Ready-to-use 64x64 role icon and 128x128 emoji PNGs with matching palettes.',
    h1Title: '2D Discord Role Icons & Server Badges',
    description: 'Crisp 2D vector icons, server badges, and emoji stickers crafted specifically for Discord server roles, custom emojis, and profile accents.',
    icon: '🎨',
    primaryKeyword: 'discord role icons',
    count: 110
  }
};

/**
 * 100 PREMIUM PRESETS
 * Every preset includes complete metadata, focal coordinates, profile matching hex, and motion configuration.
 */
const RAW_DISCORD_ASSET_PRESETS: DiscordAssetPreset[] = [
  // =========================================================================
  // NANO BANANA GENERATIVE HIGH-DEFINITION MATCHING BANNER & PFP SETS
  // =========================================================================
  {
    id: 'nano-cyberpunk-ronin-neo-tokyo',
    slug: 'cyberpunk-ronin-neo-tokyo',
    title: 'Neo-Tokyo Ronin: Cyberpunk Rain Alley',
    description: 'Cyborg ronin with a glowing plasma katana standing in a rain-slicked Neo-Tokyo alleyway illuminated by vibrant cyan and magenta neon signs.',
    category: 'cyberpunk',
    categoryLabel: 'Cyberpunk & Sci-Fi',
    mood: 'futuristic',
    style: 'cyberpunk-neon',
    tags: ['cyberpunk', 'ronin', 'samurai', 'katana', 'neo-tokyo', 'neon', 'rain', 'banner', 'pfp', 'matching-set', 'male'],
    gender: 'male',
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    imageUrl: '/assets/banners/cyberpunk-ronin-neo-tokyo.webp',
    pfpImageUrl: '/assets/pfps/cyberpunk-ronin-neo-tokyo.webp',
    profileThemeHex: '#0B0E1B',
    accentHex: '#00F0FF',
    glowHex: '#FF007F',
    paletteColors: ['#0B0E1B', '#1A1836', '#00F0FF', '#FF007F'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 40, zoom: 1.2 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0B0E1B 0%, #1A1836 60%, #00F0FF 100%)',
      bgPattern: 'circuit',
      primaryIcon: '⚡',
      secondaryElements: ['neon-signs', 'plasma-katana', 'rain-reflections']
    },
    motionConfig: {
      type: 'neon-rain-alley',
      speed: 0.8,
      intensity: 0.6,
      glowColor: '#00F0FF'
    },
    searchQueries: ['cyberpunk discord banner', 'cyberpunk samurai pfp', 'neo tokyo banner discord', 'matching cyberpunk discord set']
  },
  {
    id: 'nano-cosmic-lofi-stargazer-bedroom',
    slug: 'cosmic-lofi-stargazer-bedroom',
    title: 'Midnight Stargazer: Cosmic Lo-Fi Study Room',
    description: 'Dreamy aesthetic bedroom with an expansive bay window opening to a pastel purple galaxy nebula, warm desk lamp, and vinyl player.',
    category: 'lofi',
    categoryLabel: 'Lo-Fi & Cozy',
    mood: 'cozy',
    style: 'lo-fi-grain',
    tags: ['lofi', 'aesthetic', 'cozy', 'galaxy', 'nebula', 'bedroom', 'chill', 'banner', 'pfp', 'matching-set', 'female'],
    gender: 'female',
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    imageUrl: '/assets/banners/cosmic-lofi-stargazer-bedroom.webp',
    pfpImageUrl: '/assets/pfps/cosmic-lofi-stargazer-bedroom.webp',
    profileThemeHex: '#1E172F',
    accentHex: '#B794F4',
    glowHex: '#FFDF82',
    paletteColors: ['#1E172F', '#352555', '#B794F4', '#FFDF82'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 45, zoom: 1.1 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #1E172F 0%, #352555 60%, #B794F4 100%)',
      bgPattern: 'dots',
      primaryIcon: '✨',
      secondaryElements: ['galaxy-window', 'fairy-lights', 'lofi-cat']
    },
    motionConfig: {
      type: 'stargazer-constellations',
      speed: 0.6,
      intensity: 0.5,
      glowColor: '#B794F4'
    },
    searchQueries: ['lofi discord banner', 'cosmic anime girl pfp', 'aesthetic galaxy discord set', 'lofi bedroom banner']
  },
  {
    id: 'nano-dark-void-knight-eclipse',
    slug: 'dark-void-knight-eclipse',
    title: 'Eclipsed Citadel: Dark Fantasy Void Knight',
    description: 'Ominous blackened gothic fortress standing below a blood-red eclipsed sun, adrift with embers, ash, and glowing ancient runes.',
    category: 'dark',
    categoryLabel: 'Dark & Moody',
    mood: 'moody',
    style: 'cinematic-motion',
    tags: ['dark', 'fantasy', 'knight', 'eclipse', 'gothic', 'castle', 'runes', 'banner', 'pfp', 'matching-set'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    imageUrl: '/assets/banners/dark-void-knight-eclipse.webp',
    pfpImageUrl: '/assets/pfps/dark-void-knight-eclipse.webp',
    profileThemeHex: '#100A0E',
    accentHex: '#EF4444',
    glowHex: '#F97316',
    paletteColors: ['#100A0E', '#2A131C', '#EF4444', '#F97316'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 35, zoom: 1.2 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #100A0E 0%, #2A131C 60%, #EF4444 100%)',
      bgPattern: 'lines',
      primaryIcon: '⚔️',
      secondaryElements: ['eclipsed-sun', 'gothic-castle', 'crimson-embers']
    },
    motionConfig: {
      type: 'inferno-shimmer',
      speed: 0.9,
      intensity: 0.7,
      glowColor: '#EF4444'
    },
    searchQueries: ['dark souls discord banner', 'dark knight pfp discord', 'gothic castle banner', 'blood moon discord set']
  },
  {
    id: 'nano-synthwave-retro-sunset-cruiser',
    slug: 'synthwave-retro-sunset-cruiser',
    title: 'Outrun Odyssey: Synthwave Sunset Highway',
    description: 'Sleek retro sports car cruising down an infinite neon purple laser grid towards a massive segmented 80s wireframe sunset.',
    category: 'aesthetic',
    categoryLabel: 'Aesthetic & Pastel',
    mood: 'chill',
    style: 'retro-pixel',
    tags: ['synthwave', 'outrun', 'retro', '80s', 'vaporwave', 'sunset', 'neon', 'banner', 'pfp', 'matching-set', 'male'],
    gender: 'male',
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    imageUrl: '/assets/banners/synthwave-retro-sunset-cruiser.webp',
    pfpImageUrl: '/assets/pfps/synthwave-retro-sunset-cruiser.webp',
    profileThemeHex: '#1A0A2A',
    accentHex: '#EC4899',
    glowHex: '#F59E0B',
    paletteColors: ['#1A0A2A', '#38104E', '#EC4899', '#F59E0B'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 40, zoom: 1.2 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #1A0A2A 0%, #38104E 60%, #EC4899 100%)',
      bgPattern: 'grid',
      primaryIcon: '🌴',
      secondaryElements: ['retro-car', 'laser-grid', 'segmented-sun']
    },
    motionConfig: {
      type: 'cyber-grid',
      speed: 1.0,
      intensity: 0.7,
      glowColor: '#EC4899'
    },
    searchQueries: ['synthwave discord banner', 'outrun car pfp', '80s vaporwave banner discord', 'retro sunset profile set']
  },
  {
    id: 'nano-sakura-shrine-golden-sunset',
    slug: 'sakura-shrine-golden-sunset',
    title: 'Sacred Sakura: Shinto Mountaintop Sanctuary',
    description: 'Ancient mountaintop shrine under a golden sunset with blooming cherry blossoms drifting across a glowing red torii gate.',
    category: 'anime',
    categoryLabel: 'Anime & Manga',
    mood: 'ethereal',
    style: 'anime-cinematic',
    tags: ['anime', 'sakura', 'shrine', 'torii', 'japan', 'sunset', 'peaceful', 'banner', 'pfp', 'matching-set', 'female'],
    gender: 'female',
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    imageUrl: '/assets/banners/sakura-shrine-golden-sunset.webp',
    pfpImageUrl: '/assets/pfps/sakura-shrine-golden-sunset.webp',
    profileThemeHex: '#2B141E',
    accentHex: '#F472B6',
    glowHex: '#FBBF24',
    paletteColors: ['#2B141E', '#501F31', '#F472B6', '#FBBF24'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 40, zoom: 1.1 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #2B141E 0%, #501F31 60%, #F472B6 100%)',
      bgPattern: 'dots',
      primaryIcon: '🌸',
      secondaryElements: ['torii-gate', 'falling-sakura', 'golden-mountains']
    },
    motionConfig: {
      type: 'windblown-grass',
      speed: 0.7,
      intensity: 0.5,
      glowColor: '#F472B6'
    },
    searchQueries: ['sakura shrine discord banner', 'shrine maiden pfp', 'anime sunset discord set', 'torii gate banner']
  },
  // =========================================================================
  // BATCH 5 LIVE WALLPAPER ANIMATED PRESETS (FULL VIDEO FIT + MULTI-FORMAT)
  // =========================================================================
  {
    id: 'animated-iron-spider-infinity-war',
    slug: 'iron-spider-infinity-war-hero',
    title: 'Infinity Vanguard: Iron Spider Waldoes Deployment',
    description: 'Peter Parker activating the Stark nanotech Iron Spider suit with gleaming golden waldoes gleaming against cosmic nebula sky.',
    category: 'superhero',
    categoryLabel: 'Superhero & Comic',
    mood: 'epic',
    style: 'cinematic-motion',
    tags: ['animated', 'spiderman', 'iron-spider', 'marvel', 'stark-tech', 'nanotech', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/iron-spider-infinity-war-hero.webp',
    imageUrl: '/assets/animated/iron-spider-infinity-war-hero.webp',
    gifUrl: '/assets/gifs/iron-spider-infinity-war-hero.gif',
    videoUrl: '/assets/videos/iron-spider-infinity-war-hero.mp4',
    pfpImageUrl: '/assets/pfps/iron-spider-infinity-war-hero-animated.webp',
    profileThemeHex: '#160B12',
    accentHex: '#E11D48',
    glowHex: '#FBBF24',
    paletteColors: ['#160B12', '#380B1C', '#E11D48', '#FBBF24'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 40, zoom: 1.3 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #160B12 0%, #380B1C 50%, #E11D48 100%)',
      bgPattern: 'circuit',
      primaryIcon: '🕷️',
      secondaryElements: ['iron-spider', 'stark-waldoes', 'nanotech']
    },
    motionConfig: {
      type: 'spider-web-glint',
      speed: 1.1,
      intensity: 0.8,
      glowColor: '#FBBF24',
      particleCount: 20
    },
    searchQueries: ['iron spider discord banner', 'tom holland spider-man pfp', 'iron spider animated gif']
  },
  {
    id: 'animated-miles-morales-neon-descent',
    slug: 'miles-morales-neon-descent',
    title: 'Cyberpunk Leap: Miles Morales Neon Descent',
    description: 'Miles Morales descending upside down between neon-drenched Manhattan skyscrapers with electric cyan and crimson light trails.',
    category: 'superhero',
    categoryLabel: 'Superhero & Comic',
    mood: 'futuristic',
    style: 'cinematic-motion',
    tags: ['animated', 'miles-morales', 'spider-man', 'neon', 'cyberpunk', 'manhattan', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/miles-morales-neon-descent.webp',
    imageUrl: '/assets/animated/miles-morales-neon-descent.webp',
    gifUrl: '/assets/gifs/miles-morales-neon-descent.gif',
    videoUrl: '/assets/videos/miles-morales-neon-descent.mp4',
    pfpImageUrl: '/assets/pfps/miles-morales-neon-descent-animated.webp',
    profileThemeHex: '#090C16',
    accentHex: '#06B6D4',
    glowHex: '#F43F5E',
    paletteColors: ['#090C16', '#161F38', '#06B6D4', '#F43F5E'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 45, zoom: 1.25 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #090C16 0%, #161F38 60%, #06B6D4 100%)',
      bgPattern: 'circuit',
      primaryIcon: '⚡',
      secondaryElements: ['miles-morales', 'neon-descent', 'light-trails']
    },
    motionConfig: {
      type: 'spider-web-glint',
      speed: 1.2,
      intensity: 0.85,
      glowColor: '#06B6D4',
      particleCount: 22
    },
    searchQueries: ['miles morales neon discord banner', 'cyberpunk spider-man pfp', 'miles morales animated gif']
  },
  {
    id: 'animated-spiderverse-leap-of-faith',
    slug: 'spiderverse-leap-of-faith-sunset',
    title: 'Spider-Verse: Brooklyn Sunset Leap of Faith',
    description: 'The legendary comic-shaded Leap of Faith as Miles falls upward into the upside-down golden sunset skyline of New York City.',
    category: 'superhero',
    categoryLabel: 'Superhero & Comic',
    mood: 'epic',
    style: 'cel-shaded',
    tags: ['animated', 'spiderverse', 'leap-of-faith', 'miles-morales', 'sunset', 'skyline', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/spiderverse-leap-of-faith-sunset.webp',
    imageUrl: '/assets/animated/spiderverse-leap-of-faith-sunset.webp',
    gifUrl: '/assets/gifs/spiderverse-leap-of-faith-sunset.gif',
    videoUrl: '/assets/videos/spiderverse-leap-of-faith-sunset.mp4',
    pfpImageUrl: '/assets/pfps/spiderverse-leap-of-faith-sunset-animated.webp',
    profileThemeHex: '#170B1E',
    accentHex: '#F59E0B',
    glowHex: '#EC4899',
    paletteColors: ['#170B1E', '#3B1745', '#F59E0B', '#EC4899'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 40, zoom: 1.3 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #170B1E 0%, #3B1745 50%, #F59E0B 100%)',
      bgPattern: 'dots',
      primaryIcon: '🌇',
      secondaryElements: ['leap-of-faith', 'brooklyn-skyline', 'spider-verse']
    },
    motionConfig: {
      type: 'spider-web-glint',
      speed: 1.0,
      intensity: 0.8,
      glowColor: '#EC4899',
      particleCount: 18
    },
    searchQueries: ['spiderverse leap of faith banner', 'miles morales falling up pfp', 'into the spider-verse gif']
  },
  {
    id: 'animated-amazing-spiderman-skyward-dive',
    slug: 'amazing-spiderman-skyward-dive',
    title: 'Skyward Velocity: Amazing Spider-Man Canyon Dive',
    description: 'Andrew Garfield Spider-Man plummeting through skyscraper canyons at breakneck speed before firing a web-line into the clouds.',
    category: 'superhero',
    categoryLabel: 'Superhero & Comic',
    mood: 'chill',
    style: 'cinematic-motion',
    tags: ['animated', 'spiderman', 'amazing-spiderman', 'skydive', 'web-swing', 'manhattan', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/amazing-spiderman-skyward-dive.webp',
    imageUrl: '/assets/animated/amazing-spiderman-skyward-dive.webp',
    gifUrl: '/assets/gifs/amazing-spiderman-skyward-dive.gif',
    videoUrl: '/assets/videos/amazing-spiderman-skyward-dive.mp4',
    pfpImageUrl: '/assets/pfps/amazing-spiderman-skyward-dive-animated.webp',
    profileThemeHex: '#0F172A',
    accentHex: '#38BDF8',
    glowHex: '#EF4444',
    paletteColors: ['#0F172A', '#1E293B', '#38BDF8', '#EF4444'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 35, zoom: 1.35 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #38BDF8 100%)',
      bgPattern: 'lines',
      primaryIcon: '🏙️',
      secondaryElements: ['spiderman-dive', 'urban-canyon', 'webline']
    },
    motionConfig: {
      type: 'spider-web-glint',
      speed: 1.3,
      intensity: 0.85,
      glowColor: '#38BDF8',
      particleCount: 20
    },
    searchQueries: ['amazing spiderman dive discord banner', 'andrew garfield web swing pfp', 'spiderman freefall gif']
  },
  {
    id: 'animated-tony-stark-mark85-snap',
    slug: 'tony-stark-mark85-snap',
    title: 'Cinematic Legacy: Tony Stark "I Am Iron Man"',
    description: 'Tony Stark in battle-damaged Mark 85 armor commanding the six Infinity Stones with cosmic gamma flare and resolute eyes.',
    category: 'cinematic',
    categoryLabel: 'Cinematic & Film',
    mood: 'epic',
    style: 'cinematic-motion',
    tags: ['animated', 'iron-man', 'tony-stark', 'infinity-stones', 'avengers', 'endgame', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/tony-stark-mark85-snap.webp',
    imageUrl: '/assets/animated/tony-stark-mark85-snap.webp',
    gifUrl: '/assets/gifs/tony-stark-mark85-snap.gif',
    videoUrl: '/assets/videos/tony-stark-mark85-snap.mp4',
    pfpImageUrl: '/assets/pfps/tony-stark-mark85-snap-animated.webp',
    profileThemeHex: '#180407',
    accentHex: '#EAB308',
    glowHex: '#DC2626',
    paletteColors: ['#180407', '#450A0A', '#EAB308', '#DC2626'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 35, zoom: 1.4 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #180407 0%, #450A0A 50%, #EAB308 100%)',
      bgPattern: 'hexagons',
      primaryIcon: '🦾',
      secondaryElements: ['infinity-stones', 'mark-85', 'iron-man-snap']
    },
    motionConfig: {
      type: 'inferno-shimmer',
      speed: 1.0,
      intensity: 0.9,
      glowColor: '#EAB308',
      particleCount: 24
    },
    searchQueries: ['tony stark discord banner', 'iron man endgame snap pfp', 'i am iron man animated gif']
  },
  {
    id: 'animated-iron-man-nanotech-assemble',
    slug: 'iron-man-nanotech-armor-assemble',
    title: 'Nanotech Forge: Iron Man Armor Deployment',
    description: 'Sleek crimson and titanium-gold nanotech armor plates rapidly streaming across Tony Stark\'s silhouette with electric repulsor flares.',
    category: 'superhero',
    categoryLabel: 'Superhero & Comic',
    mood: 'futuristic',
    style: 'cinematic-motion',
    tags: ['animated', 'iron-man', 'nanotech', 'stark-tech', 'repulsor', 'armor', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/iron-man-nanotech-armor-assemble.webp',
    imageUrl: '/assets/animated/iron-man-nanotech-armor-assemble.webp',
    gifUrl: '/assets/gifs/iron-man-nanotech-armor-assemble.gif',
    videoUrl: '/assets/videos/iron-man-nanotech-armor-assemble.mp4',
    pfpImageUrl: '/assets/pfps/iron-man-nanotech-armor-assemble-animated.webp',
    profileThemeHex: '#19080A',
    accentHex: '#F59E0B',
    glowHex: '#EF4444',
    paletteColors: ['#19080A', '#450D12', '#F59E0B', '#EF4444'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 35, zoom: 1.3 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #19080A 0%, #450D12 50%, #F59E0B 100%)',
      bgPattern: 'circuit',
      primaryIcon: '⚡',
      secondaryElements: ['nanotech-plates', 'arc-reactor', 'suit-up']
    },
    motionConfig: {
      type: 'inferno-shimmer',
      speed: 1.2,
      intensity: 0.8,
      glowColor: '#EF4444',
      particleCount: 20
    },
    searchQueries: ['iron man suit up discord banner', 'iron man nanotech pfp', 'mark 42 armor gif']
  },
  {
    id: 'animated-attack-on-titan-eren-rumbling',
    slug: 'attack-on-titan-eren-rumbling',
    title: 'Rumbling Horizon: Eren Yeager Titan Shifter',
    description: 'Eren Yeager in Founding Titan form striding through crimson twilight smoke with piercing green titan eyes and wall titans marching.',
    category: 'anime',
    categoryLabel: 'Anime-Inspired',
    mood: 'mysterious',
    style: 'atmospheric-mist',
    tags: ['animated', 'aot', 'attack-on-titan', 'eren-yeager', 'rumbling', 'founding-titan', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/attack-on-titan-eren-rumbling.webp',
    imageUrl: '/assets/animated/attack-on-titan-eren-rumbling.webp',
    gifUrl: '/assets/gifs/attack-on-titan-eren-rumbling.gif',
    videoUrl: '/assets/videos/attack-on-titan-eren-rumbling.mp4',
    pfpImageUrl: '/assets/pfps/attack-on-titan-eren-rumbling-animated.webp',
    profileThemeHex: '#120A08',
    accentHex: '#10B981',
    glowHex: '#F97316',
    paletteColors: ['#120A08', '#2D140D', '#10B981', '#F97316'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 35, zoom: 1.35 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #120A08 0%, #2D140D 50%, #10B981 100%)',
      bgPattern: 'waves',
      primaryIcon: '⚔️',
      secondaryElements: ['founding-titan', 'rumbling-smoke', 'green-eyes']
    },
    motionConfig: {
      type: 'inferno-shimmer',
      speed: 0.9,
      intensity: 0.85,
      glowColor: '#10B981',
      particleCount: 20
    },
    searchQueries: ['attack on titan discord banner', 'eren yeager rumbling pfp', 'aot founding titan gif']
  },
  {
    id: 'animated-wuwa-chixia-flaming-sakura',
    slug: 'wuwa-chixia-flaming-sakura',
    title: 'Crimson Sparks: Chixia Flaming Sakura Strike',
    description: 'Wuthering Waves Chixia firing twin thermal pistols into a storm of glowing vermilion embers and swirling blazing sakura blossoms.',
    category: 'gaming',
    categoryLabel: 'Gaming & Esports',
    mood: 'epic',
    style: 'cel-shaded',
    tags: ['animated', 'wuwa', 'wuthering-waves', 'chixia', 'sakura', 'fire', 'gaming', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/wuwa-chixia-flaming-sakura.webp',
    imageUrl: '/assets/animated/wuwa-chixia-flaming-sakura.webp',
    gifUrl: '/assets/gifs/wuwa-chixia-flaming-sakura.gif',
    videoUrl: '/assets/videos/wuwa-chixia-flaming-sakura.mp4',
    pfpImageUrl: '/assets/pfps/wuwa-chixia-flaming-sakura-animated.webp',
    profileThemeHex: '#1C060B',
    accentHex: '#F43F5E',
    glowHex: '#FDA4AF',
    paletteColors: ['#1C060B', '#4C0D1B', '#F43F5E', '#FDA4AF'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 40, zoom: 1.3 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #1C060B 0%, #4C0D1B 50%, #F43F5E 100%)',
      bgPattern: 'dots',
      primaryIcon: '🔥',
      secondaryElements: ['flaming-sakura', 'dual-pistols', 'vermilion-sparks']
    },
    motionConfig: {
      type: 'sakura-breeze',
      speed: 1.2,
      intensity: 0.9,
      glowColor: '#F43F5E',
      particleCount: 22
    },
    searchQueries: ['wuthering waves discord banner', 'chixia wuwa pfp', 'flaming sakura anime banner gif']
  },
  {
    id: 'animated-bleach-ichigo-bankai-tybw',
    slug: 'bleach-ichigo-bankai-tybw',
    title: 'Thousand-Year Tempest: Ichigo Dual Bankai',
    description: 'Ichigo Kurosaki holding true dual Zangetsu blades while black-and-crimson Getsuga Tensho spiritual pressure swirls violently.',
    category: 'anime',
    categoryLabel: 'Anime-Inspired',
    mood: 'epic',
    style: 'cel-shaded',
    tags: ['animated', 'bleach', 'ichigo-kurosaki', 'bankai', 'tybw', 'shinigami', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/bleach-ichigo-bankai-tybw.webp',
    imageUrl: '/assets/animated/bleach-ichigo-bankai-tybw.webp',
    gifUrl: '/assets/gifs/bleach-ichigo-bankai-tybw.gif',
    videoUrl: '/assets/videos/bleach-ichigo-bankai-tybw.mp4',
    pfpImageUrl: '/assets/pfps/bleach-ichigo-bankai-tybw-animated.webp',
    profileThemeHex: '#0E0E14',
    accentHex: '#3B82F6',
    glowHex: '#EF4444',
    paletteColors: ['#0E0E14', '#1A1D2B', '#3B82F6', '#EF4444'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 35, zoom: 1.35 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0E0E14 0%, #1A1D2B 50%, #3B82F6 100%)',
      bgPattern: 'circuit',
      primaryIcon: '🗡️',
      secondaryElements: ['dual-zangetsu', 'getsuga-tensho', 'shinigami-reiatsu']
    },
    motionConfig: {
      type: 'stargazer-constellations',
      speed: 1.3,
      intensity: 0.85,
      glowColor: '#3B82F6',
      particleCount: 22
    },
    searchQueries: ['bleach tybw discord banner', 'ichigo kurosaki bankai pfp', 'bleach animated gif']
  },
  {
    id: 'animated-wuwa-sanhua-glacio-lotus',
    slug: 'wuwa-sanhua-glacio-lotus',
    title: 'Glacio Elegance: Sanhua Crystalline Lotus',
    description: 'Wuthering Waves Sanhua drawing her pure silver rapier amidst freezing mist, crystalline frost petals, and pale blue eyes.',
    category: 'gaming',
    categoryLabel: 'Gaming & Esports',
    mood: 'ethereal',
    style: 'cel-shaded',
    tags: ['animated', 'wuwa', 'wuthering-waves', 'sanhua', 'glacio', 'ice', 'sword', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/wuwa-sanhua-glacio-lotus.webp',
    imageUrl: '/assets/animated/wuwa-sanhua-glacio-lotus.webp',
    gifUrl: '/assets/gifs/wuwa-sanhua-glacio-lotus.gif',
    videoUrl: '/assets/videos/wuwa-sanhua-glacio-lotus.mp4',
    pfpImageUrl: '/assets/pfps/wuwa-sanhua-glacio-lotus-animated.webp',
    profileThemeHex: '#09131C',
    accentHex: '#38BDF8',
    glowHex: '#E0F2FE',
    paletteColors: ['#09131C', '#14293D', '#38BDF8', '#E0F2FE'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 35, zoom: 1.3 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #09131C 0%, #14293D 50%, #38BDF8 100%)',
      bgPattern: 'dots',
      primaryIcon: '❄️',
      secondaryElements: ['glacio-sword', 'frost-petals', 'ice-lotus']
    },
    motionConfig: {
      type: 'birch-blizzard',
      speed: 1.1,
      intensity: 0.8,
      glowColor: '#38BDF8',
      particleCount: 20
    },
    searchQueries: ['sanhua wuwa discord banner', 'wuthering waves glacio pfp', 'ice sword anime banner gif']
  },
  {
    id: 'animated-wuwa-changli-phoenix-gaze',
    slug: 'wuwa-changli-phoenix-gaze',
    title: 'Blazing Rebirth: Changli Phoenix Flame Gaze',
    description: 'Wuthering Waves Changli sweeping her blazing fan with dancing vermilion phoenix feathers and hypnotizing fiery crimson gaze.',
    category: 'gaming',
    categoryLabel: 'Gaming & Esports',
    mood: 'mysterious',
    style: 'cel-shaded',
    tags: ['animated', 'wuwa', 'wuthering-waves', 'changli', 'phoenix', 'fire', 'feather', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/wuwa-changli-phoenix-gaze.webp',
    imageUrl: '/assets/animated/wuwa-changli-phoenix-gaze.webp',
    gifUrl: '/assets/gifs/wuwa-changli-phoenix-gaze.gif',
    videoUrl: '/assets/videos/wuwa-changli-phoenix-gaze.mp4',
    pfpImageUrl: '/assets/pfps/wuwa-changli-phoenix-gaze-animated.webp',
    profileThemeHex: '#1A0808',
    accentHex: '#EA580C',
    glowHex: '#FDE047',
    paletteColors: ['#1A0808', '#3F1212', '#EA580C', '#FDE047'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 35, zoom: 1.35 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #1A0808 0%, #3F1212 50%, #EA580C 100%)',
      bgPattern: 'waves',
      primaryIcon: '🪶',
      secondaryElements: ['phoenix-feathers', 'vermilion-flame', 'crimson-eyes']
    },
    motionConfig: {
      type: 'inferno-shimmer',
      speed: 1.1,
      intensity: 0.85,
      glowColor: '#EA580C',
      particleCount: 22
    },
    searchQueries: ['changli wuwa discord banner', 'wuthering waves phoenix pfp', 'changli animated banner gif']
  },
  {
    id: 'animated-lord-krishna-divine-flute',
    slug: 'lord-krishna-divine-flute-cosmos',
    title: 'Celestial Melody: Lord Krishna Divine Cosmos',
    description: 'Lord Krishna playing the enchanting bansuri flute surrounded by celestial peacocks, glowing cosmic lotus petals, and radiant golden aura.',
    category: 'fantasy',
    categoryLabel: 'Fantasy & Lore',
    mood: 'ethereal',
    style: 'atmospheric-mist',
    tags: ['animated', 'krishna', 'spiritual', 'bansuri', 'flute', 'divine', 'trishul', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/lord-krishna-divine-flute-cosmos.webp',
    imageUrl: '/assets/animated/lord-krishna-divine-flute-cosmos.webp',
    gifUrl: '/assets/gifs/lord-krishna-divine-flute-cosmos.gif',
    videoUrl: '/assets/videos/lord-krishna-divine-flute-cosmos.mp4',
    pfpImageUrl: '/assets/pfps/lord-krishna-divine-flute-cosmos-animated.webp',
    profileThemeHex: '#0B132B',
    accentHex: '#F59E0B',
    glowHex: '#60A5FA',
    paletteColors: ['#0B132B', '#1C2541', '#F59E0B', '#60A5FA'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 35, zoom: 1.3 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0B132B 0%, #1C2541 50%, #F59E0B 100%)',
      bgPattern: 'stars',
      primaryIcon: '🪈',
      secondaryElements: ['bansuri-flute', 'peacock-feather', 'celestial-aura']
    },
    motionConfig: {
      type: 'stargazer-constellations',
      speed: 0.9,
      intensity: 0.8,
      glowColor: '#F59E0B',
      particleCount: 24
    },
    searchQueries: ['lord krishna discord banner', 'krishna flute avatar pfp', 'divine cosmic animated banner']
  },
  {
    id: 'animated-ghost-of-yotei-ronin',
    slug: 'ghost-of-yotei-ronin-blades',
    title: 'Snowbound Vengeance: Ghost of Yotei Atsu',
    description: 'Atsu unsheathing dual katana blades against a howling snow gale beneath the majestic volcanic summit of Mount Yotei.',
    category: 'gaming',
    categoryLabel: 'Gaming & Esports',
    mood: 'moody',
    style: 'atmospheric-mist',
    tags: ['animated', 'ghost-of-yotei', 'atsu', 'samurai', 'katana', 'ronin', 'snow', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/ghost-of-yotei-ronin-blades.webp',
    imageUrl: '/assets/animated/ghost-of-yotei-ronin-blades.webp',
    gifUrl: '/assets/gifs/ghost-of-yotei-ronin-blades.gif',
    videoUrl: '/assets/videos/ghost-of-yotei-ronin-blades.mp4',
    pfpImageUrl: '/assets/pfps/ghost-of-yotei-ronin-blades-animated.webp',
    profileThemeHex: '#0F172A',
    accentHex: '#94A3B8',
    glowHex: '#E2E8F0',
    paletteColors: ['#0F172A', '#1E293B', '#94A3B8', '#E2E8F0'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 35, zoom: 1.35 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #94A3B8 100%)',
      bgPattern: 'lines',
      primaryIcon: '⚔️',
      secondaryElements: ['dual-katana', 'mount-yotei', 'snow-gale']
    },
    motionConfig: {
      type: 'birch-blizzard',
      speed: 1.2,
      intensity: 0.85,
      glowColor: '#E2E8F0',
      particleCount: 24
    },
    searchQueries: ['ghost of yotei discord banner', 'atsu ronin pfp', 'ghost of tsushima sequel animated gif']
  },
  // =========================================================================
  // FLAGSHIP ANIMATED DISCORD BANNERS (WebP Animation Loops)
  // =========================================================================
  // --- BATCH 4 USER REQUESTED PINTEREST ANIMATED PRESETS ---
  {
    id: 'animated-celestial-libra-blade',
    slug: 'celestial-libra-blade-maiden',
    title: 'Celestial Balance: Libra Blade Maiden',
    description: 'Celestial warrior maiden wielding an energized starry rapier under shimmering cosmic constellations and floating silver feathers.',
    category: 'anime',
    categoryLabel: 'Anime-Inspired',
    mood: 'ethereal',
    style: 'cel-shaded',
    tags: ['animated', 'celestial', 'anime', 'libra', 'warrior', 'blade', 'constellations', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/celestial-libra-blade-maiden.webp',
    imageUrl: '/assets/animated/celestial-libra-blade-maiden.webp',
    pfpImageUrl: '/assets/pfps/celestial-libra-blade-maiden-animated.webp',
    profileThemeHex: '#1A162B',
    accentHex: '#C084FC',
    glowHex: '#E9D5FF',
    paletteColors: ['#1A162B', '#3B2D54', '#C084FC', '#E9D5FF'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.2 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #1A162B 0%, #3B2D54 60%, #C084FC 100%)',
      bgPattern: 'stars',
      primaryIcon: '⚔️',
      secondaryElements: ['celestial-rapier', 'starlight', 'silver-feathers']
    },
    motionConfig: {
      type: 'stargazer-constellations',
      speed: 1.0,
      intensity: 0.8,
      glowColor: '#C084FC',
      particleCount: 20
    },
    searchQueries: ['celestial anime discord banner', 'libra blade maiden pfp', 'starry warrior banner gif']
  },
  {
    id: 'animated-crimson-sun-samurai',
    slug: 'crimson-sun-samurai-twilight',
    title: 'Crimson Horizon: Red Sun Mountain Twilight',
    description: 'Gigantic blood-crimson sun rising behind ancient pagoda spires and mist-veiled mountain peaks with flying sacred cranes.',
    category: 'aesthetic',
    categoryLabel: 'Aesthetic & Pastel',
    mood: 'moody',
    style: 'atmospheric-mist',
    tags: ['animated', 'red-sun', 'japan', 'twilight', 'pagoda', 'samurai', 'crimson', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/crimson-sun-samurai-twilight.webp',
    imageUrl: '/assets/animated/crimson-sun-samurai-twilight.webp',
    pfpImageUrl: '/assets/pfps/crimson-sun-samurai-twilight-animated.webp',
    profileThemeHex: '#180407',
    accentHex: '#EF4444',
    glowHex: '#FCA5A5',
    paletteColors: ['#180407', '#450A0A', '#EF4444', '#FCA5A5'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 40, zoom: 1.4 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #180407 0%, #450A0A 60%, #EF4444 100%)',
      bgPattern: 'waves',
      primaryIcon: '🌅',
      secondaryElements: ['red-sun', 'pagoda', 'sacred-cranes']
    },
    motionConfig: {
      type: 'inferno-shimmer',
      speed: 0.8,
      intensity: 0.7,
      glowColor: '#EF4444',
      particleCount: 16
    },
    searchQueries: ['red sun discord banner', 'crimson horizon pfp', 'japanese pagoda banner gif']
  },
  {
    id: 'animated-spiderman-sunset-romance',
    slug: 'spiderman-sunset-skyline-romance',
    title: 'Web of Love: Spider-Man Twilight Horizon',
    description: 'Spider-Man embracing Gwen Stacy above golden Manhattan skyscrapers at dusk with gentle windblown lens flares and warm city lights.',
    category: 'superhero',
    categoryLabel: 'Superhero & Comic',
    mood: 'cozy',
    style: 'cinematic-motion',
    tags: ['animated', 'spiderman', 'superhero', 'sunset', 'manhattan', 'marvel', 'romance', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/spiderman-sunset-skyline-romance.webp',
    imageUrl: '/assets/animated/spiderman-sunset-skyline-romance.webp',
    pfpImageUrl: '/assets/pfps/spiderman-sunset-skyline-romance-animated.webp',
    profileThemeHex: '#111625',
    accentHex: '#38BDF8',
    glowHex: '#F43F5E',
    paletteColors: ['#111625', '#1E293B', '#38BDF8', '#F43F5E'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 45, zoom: 1.3 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #111625 0%, #1E293B 50%, #F43F5E 100%)',
      bgPattern: 'circuit',
      primaryIcon: '🕷️',
      secondaryElements: ['spiderman', 'city-lights', 'sunset-sky']
    },
    motionConfig: {
      type: 'spider-web-glint',
      speed: 1.1,
      intensity: 0.75,
      glowColor: '#38BDF8',
      particleCount: 18
    },
    searchQueries: ['spiderman sunset banner', 'spider-man romantic discord pfp', 'amazing spiderman gif']
  },
  {
    id: 'animated-cyber-valkyrie-neo-tokyo',
    slug: 'cyber-valkyrie-neo-tokyo',
    title: 'Cyber Valkyrie: Neo Tokyo Rain',
    description: 'Futuristic cybernetic anime heroine with glowing cyan visor and holographic HUD overlooking neon-lit Shinjuku rain-slicked towers.',
    category: 'cyberpunk',
    categoryLabel: 'Cyberpunk & Tech',
    mood: 'futuristic',
    style: 'neon-glow',
    tags: ['animated', 'cyberpunk', 'anime', 'neo-tokyo', 'neon', 'hud', 'rain', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/cyber-valkyrie-neo-tokyo.webp',
    imageUrl: '/assets/animated/cyber-valkyrie-neo-tokyo.webp',
    pfpImageUrl: '/assets/pfps/cyber-valkyrie-neo-tokyo-animated.webp',
    profileThemeHex: '#0B132B',
    accentHex: '#06B6D4',
    glowHex: '#67E8F9',
    paletteColors: ['#0B132B', '#1C2541', '#06B6D4', '#67E8F9'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 40, zoom: 1.3 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0B132B 0%, #1C2541 60%, #06B6D4 100%)',
      bgPattern: 'lines',
      primaryIcon: '⚡',
      secondaryElements: ['neon-hud', 'rain-streaks', 'cyber-visor']
    },
    motionConfig: {
      type: 'neon-rain-alley',
      speed: 1.3,
      intensity: 0.85,
      glowColor: '#06B6D4',
      particleCount: 24
    },
    searchQueries: ['cyberpunk anime discord banner', 'neo tokyo rain gif', 'futuristic anime pfp']
  },
  {
    id: 'animated-ultra-instinct-goku',
    slug: 'ultra-instinct-goku-focus-aura',
    title: 'Silver Focus: Ultra Instinct Goku Awakening',
    description: 'Ultra Instinct Goku shirtless in complete meditative battle focus, surrounded by rippling god-tier silver aura flames and crackling sparks.',
    category: 'anime',
    categoryLabel: 'Anime-Inspired',
    mood: 'epic',
    style: 'cinematic-motion',
    tags: ['animated', 'goku', 'ultra-instinct', 'dragon-ball', 'silver-aura', 'gym', 'focus', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/ultra-instinct-goku-focus-aura.webp',
    imageUrl: '/assets/animated/ultra-instinct-goku-focus-aura.webp',
    pfpImageUrl: '/assets/pfps/ultra-instinct-goku-focus-aura-animated.webp',
    profileThemeHex: '#141416',
    accentHex: '#E2E8F0',
    glowHex: '#94A3B8',
    paletteColors: ['#0A0A0C', '#141416', '#94A3B8', '#F8FAFC'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 35, zoom: 1.4 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0A0A0C 0%, #141416 60%, #94A3B8 100%)',
      bgPattern: 'hexagons',
      primaryIcon: '🥋',
      secondaryElements: ['silver-aura', 'god-flames', 'focus-eyes']
    },
    motionConfig: {
      type: 'light-pulse',
      speed: 1.0,
      intensity: 0.8,
      glowColor: '#E2E8F0',
      particleCount: 20
    },
    searchQueries: ['ultra instinct goku banner', 'goku gym motivation discord banner', 'dragon ball animated pfp']
  },
  {
    id: 'animated-kratos-blades-chaos',
    slug: 'kratos-blades-of-chaos-blizzard',
    title: 'Spartan Fury: Kratos Blades in Midgard Blizzard',
    description: 'Ghost of Sparta standing weathered in a howling Nordic blizzard with incandescent orange Blades of Chaos radiating ember sparks.',
    category: 'gaming',
    categoryLabel: 'Gaming & Esports',
    mood: 'epic',
    style: 'cinematic-motion',
    tags: ['animated', 'kratos', 'god-of-war', 'blades-of-chaos', 'spartan', 'gaming', 'blizzard', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/kratos-blades-of-chaos-blizzard.webp',
    imageUrl: '/assets/animated/kratos-blades-of-chaos-blizzard.webp',
    pfpImageUrl: '/assets/pfps/kratos-blades-of-chaos-blizzard-animated.webp',
    profileThemeHex: '#171211',
    accentHex: '#F97316',
    glowHex: '#FDBA74',
    paletteColors: ['#171211', '#291811', '#F97316', '#FED7AA'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 35, zoom: 1.4 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #171211 0%, #291811 60%, #F97316 100%)',
      bgPattern: 'dots',
      primaryIcon: '🪓',
      secondaryElements: ['blades-of-chaos', 'snow-embers', 'spartan-ash']
    },
    motionConfig: {
      type: 'birch-blizzard',
      speed: 1.2,
      intensity: 0.85,
      glowColor: '#F97316',
      particleCount: 26
    },
    searchQueries: ['kratos discord banner', 'god of war animated banner', 'kratos blades of chaos gif']
  },
  {
    id: 'animated-jon-snow-battle-bastards',
    slug: 'jon-snow-battle-bastards-charge',
    title: 'Winter Bastard: Jon Snow Lone Stand',
    description: 'Jon Snow drawing Valyrian steel Longclaw alone on the fog-drenched battlefield as the massive cavalry charge rumbles over the horizon.',
    category: 'cinematic',
    categoryLabel: 'Cinematic & Atmosphere',
    mood: 'epic',
    style: 'cinematic-motion',
    tags: ['animated', 'jon-snow', 'game-of-thrones', 'battle-of-the-bastards', 'longclaw', 'sword', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/jon-snow-battle-bastards-charge.webp',
    imageUrl: '/assets/animated/jon-snow-battle-bastards-charge.webp',
    pfpImageUrl: '/assets/pfps/jon-snow-battle-bastards-charge-animated.webp',
    profileThemeHex: '#1B2226',
    accentHex: '#7DD3FC',
    glowHex: '#CBD5E1',
    paletteColors: ['#0F1417', '#1B2226', '#475569', '#7DD3FC'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 40, zoom: 1.4 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0F1417 0%, #1B2226 60%, #7DD3FC 100%)',
      bgPattern: 'lines',
      primaryIcon: '🗡️',
      secondaryElements: ['longclaw', 'battle-fog', 'cavalry-dust']
    },
    motionConfig: {
      type: 'smoke',
      speed: 0.9,
      intensity: 0.7,
      glowColor: '#7DD3FC',
      particleCount: 18
    },
    searchQueries: ['jon snow discord banner', 'battle of the bastards banner', 'game of thrones animated pfp']
  },
  {
    id: 'animated-night-king-dragon-blizzard',
    slug: 'night-king-ice-spear-dragon',
    title: 'Boreal Eclipse: Night King & Dragon Sky',
    description: 'The Night King poised with crystalline ice javelin amidst a freezing polar gale as Daenerys dragon wings swoop through freezing thunderclouds.',
    category: 'dark',
    categoryLabel: 'Dark & Gothic',
    mood: 'ominous',
    style: 'cinematic-motion',
    tags: ['animated', 'night-king', 'dragon', 'game-of-thrones', 'ice-spear', 'blizzard', 'winter', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/night-king-ice-spear-dragon.webp',
    imageUrl: '/assets/animated/night-king-ice-spear-dragon.webp',
    pfpImageUrl: '/assets/pfps/night-king-ice-spear-dragon-animated.webp',
    profileThemeHex: '#0D161F',
    accentHex: '#38BDF8',
    glowHex: '#BAE6FD',
    paletteColors: ['#070B10', '#0D161F', '#0284C7', '#BAE6FD'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 40, zoom: 1.4 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #070B10 0%, #0D161F 60%, #38BDF8 100%)',
      bgPattern: 'stars',
      primaryIcon: '❄️',
      secondaryElements: ['ice-spear', 'blue-eyes', 'dragon-storm']
    },
    motionConfig: {
      type: 'birch-blizzard',
      speed: 1.2,
      intensity: 0.8,
      glowColor: '#38BDF8',
      particleCount: 22
    },
    searchQueries: ['night king discord banner', 'game of thrones dragon banner gif', 'ice spear night king pfp']
  },
  {
    id: 'animated-amazing-spiderman-spire',
    slug: 'amazing-spiderman-spire-golden-dusk',
    title: 'Apex Aerialist: Amazing Spider-Man Spire Sunset',
    description: 'Spider-Man perched high on an art-deco skyscraper spire watching the radiant golden sunset over the Manhattan sea of clouds.',
    category: 'superhero',
    categoryLabel: 'Superhero & Comic',
    mood: 'epic',
    style: 'cinematic-motion',
    tags: ['animated', 'spiderman', 'amazing-spiderman', 'sunset', 'spire', 'golden-hour', 'superhero', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/amazing-spiderman-spire-golden-dusk.webp',
    imageUrl: '/assets/animated/amazing-spiderman-spire-golden-dusk.webp',
    gifUrl: '/assets/gifs/amazing-spiderman-spire-golden-dusk.gif',
    videoUrl: '/assets/videos/amazing-spiderman-spire-golden-dusk.mp4',
    pfpImageUrl: '/assets/pfps/amazing-spiderman-spire-golden-dusk-animated.webp',
    profileThemeHex: '#180D14',
    accentHex: '#FB923C',
    glowHex: '#F43F5E',
    paletteColors: ['#180D14', '#381223', '#FB923C', '#F43F5E'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 35, zoom: 1.4 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #180D14 0%, #381223 60%, #FB923C 100%)',
      bgPattern: 'circuit',
      primaryIcon: '🏙️',
      secondaryElements: ['spiderman', 'skyscraper-spire', 'cloud-sunset']
    },
    motionConfig: {
      type: 'spider-web-glint',
      speed: 1.2,
      intensity: 0.8,
      glowColor: '#FB923C',
      particleCount: 20
    },
    searchQueries: ['amazing spiderman sunset banner', 'spiderman spire discord banner', 'spider-man aesthetic gif']
  },
  // --- PREVIOUS GHIBLI, OCEAN & KAWAII ANIMATED BANNERS ---
  {
    id: 'animated-totoro-forest-belly',
    slug: 'totoro-forest-belly-nap',
    title: 'Ghibli Wonder: Totoro Camphor Forest Nap',
    description: 'Iconic Studio Ghibli scene with little Mei gently resting atop the breathing furry belly of giant sleeping Totoro in the ancient camphor hollow.',
    category: 'anime',
    categoryLabel: 'Anime-Inspired',
    mood: 'cozy',
    style: 'cel-shaded',
    tags: ['animated', 'totoro', 'ghibli', 'mei', 'camphor-forest', 'forest', 'anime', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/totoro-forest-belly-nap.webp',
    imageUrl: '/assets/animated/totoro-forest-belly-nap.webp',
    profileThemeHex: '#10241A',
    accentHex: '#22C55E',
    glowHex: '#86EFAC',
    paletteColors: ['#09150F', '#10241A', '#16A34A', '#86EFAC'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 40, zoom: 1.5 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #09150F 0%, #10241A 60%, #86EFAC 100%)',
      bgPattern: 'dots',
      primaryIcon: '🍃',
      secondaryElements: ['totoro', 'camphor-trees', 'forest-leaves']
    },
    motionConfig: {
      type: 'floating',
      speed: 0.6,
      intensity: 0.75,
      glowColor: '#22C55E',
      particleCount: 16
    },
    searchQueries: ['totoro discord banner', 'ghibli animated banner', 'totoro mei nap gif', 'studio ghibli banner']
  },
  {
    id: 'animated-ocean-whale-sunburst',
    slug: 'ocean-whale-sunburst-abyss',
    title: 'Abyssal Ascent: Leviathan Sunburst Voyage',
    description: 'Anime swimmer drifting alongside a majestic leviathan blue whale and graceful stingrays soaring upward into luminous sunbeam surface water.',
    category: 'anime',
    categoryLabel: 'Anime-Inspired',
    mood: 'epic',
    style: 'cinematic-motion',
    tags: ['animated', 'whale', 'ocean', 'sunburst', 'abyss', 'children-of-the-sea', 'anime', 'banner', 'gif', 'blue'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/ocean-whale-sunburst-abyss.webp',
    imageUrl: '/assets/animated/ocean-whale-sunburst-abyss.webp',
    profileThemeHex: '#071E36',
    accentHex: '#38BDF8',
    glowHex: '#7DD3FC',
    paletteColors: ['#030F1C', '#071E36', '#0284C7', '#7DD3FC'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 45, y: 50, zoom: 1.4 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #030F1C 0%, #071E36 60%, #7DD3FC 100%)',
      bgPattern: 'waves',
      primaryIcon: '🐋',
      secondaryElements: ['leviathan-whale', 'sunburst-rays', 'rising-bubbles']
    },
    motionConfig: {
      type: 'floating',
      speed: 0.9,
      intensity: 0.9,
      glowColor: '#38BDF8',
      particleCount: 22
    },
    searchQueries: ['ocean whale discord banner', 'anime ocean sunburst banner', 'children of the sea whale gif']
  },
  {
    id: 'animated-kawaii-panda-nap',
    slug: 'kawaii-panda-grass-nap',
    title: 'Meadow Slumber: Kawaii Panda Grass Nap',
    description: 'Chibi Bubu/Dudu panda peacefully napping on a bed of fresh emerald lawn grass with sweet blushing cheeks and twitching ears.',
    category: 'cute',
    categoryLabel: 'Cute & Whimsical',
    mood: 'chill',
    style: 'cel-shaded',
    tags: ['animated', 'panda', 'kawaii', 'bubu-dudu', 'nap', 'grass', 'cute', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/kawaii-panda-grass-nap.webp',
    imageUrl: '/assets/animated/kawaii-panda-grass-nap.webp',
    profileThemeHex: '#1B2E15',
    accentHex: '#84CC16',
    glowHex: '#A3E635',
    paletteColors: ['#0E1A0B', '#1B2E15', '#65A30D', '#BEF264'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.5 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0E1A0B 0%, #1B2E15 60%, #BEF264 100%)',
      bgPattern: 'dots',
      primaryIcon: '🐼',
      secondaryElements: ['sleeping-panda', 'emerald-grass', 'blushing-cheeks']
    },
    motionConfig: {
      type: 'floating',
      speed: 0.7,
      intensity: 0.8,
      glowColor: '#84CC16',
      particleCount: 14
    },
    searchQueries: ['kawaii panda sleeping banner', 'bubu dudu grass nap gif', 'cute panda discord banner']
  },
  // --- 9 NEW PINTEREST STUDIO-GRADE ANIMATED BANNERS ---
  {
    id: 'animated-golden-hour-prairie',
    slug: 'golden-hour-prairie-reverie',
    title: 'Prairie Reverie: Golden Hour Sunset',
    description: 'Graceful anime heroine in flowing garments amidst windblown wild grasses under glowing sunset clouds with floating sunlit dust motes.',
    category: 'anime',
    categoryLabel: 'Anime-Inspired',
    mood: 'ethereal',
    style: 'cinematic-motion',
    tags: ['animated', 'anime', 'sunset', 'golden-hour', 'prairie', 'clouds', 'sunburst', 'aesthetic', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/golden-hour-prairie-reverie.webp',
    imageUrl: '/assets/animated/golden-hour-prairie-reverie.webp',
    profileThemeHex: '#2E1810',
    accentHex: '#F59E0B',
    glowHex: '#FDE047',
    paletteColors: ['#1A0C08', '#2E1810', '#D97706', '#FDE047'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 40, zoom: 1.5 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #1A0C08 0%, #2E1810 60%, #FDE047 100%)',
      bgPattern: 'lines',
      primaryIcon: '🌾',
      secondaryElements: ['prairie-grass', 'golden-clouds', 'sunlit-motes']
    },
    motionConfig: {
      type: 'particle',
      speed: 0.8,
      intensity: 0.85,
      glowColor: '#F59E0B',
      particleCount: 22
    },
    searchQueries: ['golden hour anime banner', 'sunset prairie discord banner', 'aesthetic anime grass banner gif']
  },
  {
    id: 'animated-lone-samurai-purple',
    slug: 'lone-samurai-purple-blossoms',
    title: 'Ronin Sanctuary: Purple Blossom Meadow',
    description: 'Lone ronin samurai in a woven straw hat standing in a sprawling field of violet wisteria and cherry blossoms under mist-shrouded peaks.',
    category: 'anime',
    categoryLabel: 'Anime-Inspired',
    mood: 'calm',
    style: 'cinematic-motion',
    tags: ['animated', 'samurai', 'ronin', 'purple', 'wisteria', 'sakura', 'cherry-blossom', 'anime', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/lone-samurai-purple-blossoms.webp',
    imageUrl: '/assets/animated/lone-samurai-purple-blossoms.webp',
    profileThemeHex: '#1A0B2E',
    accentHex: '#A855F7',
    glowHex: '#C084FC',
    paletteColors: ['#0D0518', '#1A0B2E', '#9333EA', '#E9D5FF'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 35, zoom: 1.6 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0D0518 0%, #1A0B2E 60%, #C084FC 100%)',
      bgPattern: 'dots',
      primaryIcon: '⚔️',
      secondaryElements: ['purple-wisteria', 'cherry-blossoms', 'mist-peaks']
    },
    motionConfig: {
      type: 'particle',
      speed: 0.9,
      intensity: 0.85,
      glowColor: '#C084FC',
      particleCount: 26
    },
    searchQueries: ['lone samurai discord banner', 'purple anime wallpaper banner', 'ronin cherry blossom gif']
  },
  {
    id: 'animated-alpine-warrior-meadow',
    slug: 'alpine-warrior-mountain-meadow',
    title: 'Alpine Sentinel: Wildflower Summit',
    description: 'Armored monster hunter seated upon a summit boulder overlooking glaciated jagged peaks and rolling fields of pink wildflowers.',
    category: 'gaming',
    categoryLabel: 'Gaming & Esport',
    mood: 'epic',
    style: 'cinematic-motion',
    tags: ['animated', 'witcher', 'warrior', 'alpine', 'mountains', 'flowers', 'clouds', 'gaming', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/alpine-warrior-mountain-meadow.webp',
    imageUrl: '/assets/animated/alpine-warrior-mountain-meadow.webp',
    profileThemeHex: '#131B24',
    accentHex: '#F472B6',
    glowHex: '#38BDF8',
    paletteColors: ['#0B1017', '#131B24', '#DB2777', '#38BDF8'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 70, y: 55, zoom: 1.4 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0B1017 0%, #131B24 60%, #38BDF8 100%)',
      bgPattern: 'lines',
      primaryIcon: '🏔️',
      secondaryElements: ['snow-peaks', 'alpine-flowers', 'cumulus-clouds']
    },
    motionConfig: {
      type: 'floating',
      speed: 0.7,
      intensity: 0.8,
      glowColor: '#38BDF8',
      particleCount: 18
    },
    searchQueries: ['witcher mountain banner', 'alpine warrior discord banner', 'mountain flowers gaming gif']
  },
  {
    id: 'animated-celestial-butterfly',
    slug: 'celestial-butterfly-flower-meadow',
    title: 'Celestial Reverie: Butterfly Garden',
    description: 'Impressionist floral landscape with glowing iridescent butterflies fluttering over blooming daisies and shifting celestial skies.',
    category: 'aesthetic',
    categoryLabel: 'Aesthetic',
    mood: 'ethereal',
    style: 'cinematic-motion',
    tags: ['animated', 'butterfly', 'flowers', 'clouds', 'celestial', 'impressionist', 'nature', 'aesthetic', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/celestial-butterfly-flower-meadow.webp',
    imageUrl: '/assets/animated/celestial-butterfly-flower-meadow.webp',
    profileThemeHex: '#0B1B2B',
    accentHex: '#38BDF8',
    glowHex: '#FDE047',
    paletteColors: ['#06111C', '#0B1B2B', '#0284C7', '#FDE047'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.4 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #06111C 0%, #0B1B2B 60%, #FDE047 100%)',
      bgPattern: 'dots',
      primaryIcon: '🦋',
      secondaryElements: ['butterflies', 'blooming-daisies', 'celestial-sky']
    },
    motionConfig: {
      type: 'floating',
      speed: 0.9,
      intensity: 0.9,
      glowColor: '#38BDF8',
      particleCount: 25
    },
    searchQueries: ['butterfly flower banner', 'celestial aesthetic discord banner', 'impressionist clouds gif']
  },
  {
    id: 'animated-floating-calico-cat',
    slug: 'floating-calico-cat-koi-ripples',
    title: 'Serene Waters: Floating Calico Cat',
    description: 'Peaceful calico cat floating blissfully on its back across ripple pool waters accompanied by swimming golden koi fish.',
    category: 'cute',
    categoryLabel: 'Cute & Whimsical',
    mood: 'calm',
    style: 'cel-shaded',
    tags: ['animated', 'cat', 'calico', 'koi', 'water', 'ripples', 'cute', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/floating-calico-cat-koi-ripples.webp',
    imageUrl: '/assets/animated/floating-calico-cat-koi-ripples.webp',
    profileThemeHex: '#1A1D2E',
    accentHex: '#60A5FA',
    glowHex: '#F59E0B',
    paletteColors: ['#0F111C', '#1A1D2E', '#3B82F6', '#F59E0B'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.6 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0F111C 0%, #1A1D2E 60%, #F59E0B 100%)',
      bgPattern: 'waves',
      primaryIcon: '🐱',
      secondaryElements: ['calico-cat', 'swimming-koi', 'water-ripples']
    },
    motionConfig: {
      type: 'floating',
      speed: 0.6,
      intensity: 0.7,
      glowColor: '#60A5FA',
      particleCount: 14
    },
    searchQueries: ['floating cat discord banner', 'calico cat koi gif', 'cute cat water banner']
  },
  {
    id: 'animated-minecraft-sunset-cat',
    slug: 'minecraft-sunset-staring-cat',
    title: 'Pixel Horizon: Minecraft Sunset Cat',
    description: 'Iconic white cat staring into the camera before a pixelated Minecraft sunset with a glowing block sun and evening meadows.',
    category: 'gaming',
    categoryLabel: 'Gaming & Esport',
    mood: 'chill',
    style: 'pixel-art',
    tags: ['animated', 'minecraft', 'cat', 'sunset', 'meme', 'pixel-art', 'gaming', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/minecraft-sunset-staring-cat.webp',
    imageUrl: '/assets/animated/minecraft-sunset-staring-cat.webp',
    profileThemeHex: '#2B140D',
    accentHex: '#F97316',
    glowHex: '#FBBF24',
    paletteColors: ['#170A06', '#2B140D', '#EA580C', '#FBBF24'],
    focalPoint: {
      banner: { x: 35, y: 60 },
      pfp: { x: 35, y: 60, zoom: 1.7 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #170A06 0%, #2B140D 60%, #FBBF24 100%)',
      bgPattern: 'grid',
      primaryIcon: '🧱',
      secondaryElements: ['minecraft-cat', 'block-sun', 'evening-sky']
    },
    motionConfig: {
      type: 'light-pulse',
      speed: 0.8,
      intensity: 0.8,
      glowColor: '#FBBF24',
      particleCount: 16
    },
    searchQueries: ['minecraft cat sunset banner', 'cat staring meme discord banner', 'minecraft pixel art banner gif']
  },
  {
    id: 'animated-rainbow-unicorn-meadow',
    slug: 'rainbow-unicorn-meadow-meme',
    title: 'Whimsical Dream: Rainbow Unicorn Gallop',
    description: 'Ecstatic cartoon bunny riding a cheerful unicorn across a vibrant flower field beneath an iridescent radiant rainbow arc.',
    category: 'aesthetic',
    categoryLabel: 'Aesthetic',
    mood: 'energetic',
    style: 'cel-shaded',
    tags: ['animated', 'unicorn', 'rainbow', 'bunny', 'meadow', 'meme', 'funny', 'aesthetic', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/rainbow-unicorn-meadow-meme.webp',
    imageUrl: '/assets/animated/rainbow-unicorn-meadow-meme.webp',
    profileThemeHex: '#10281F',
    accentHex: '#34D399',
    glowHex: '#F472B6',
    paletteColors: ['#0A1A14', '#10281F', '#10B981', '#F472B6'],
    focalPoint: {
      banner: { x: 65, y: 50 },
      pfp: { x: 65, y: 45, zoom: 1.5 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0A1A14 0%, #10281F 60%, #F472B6 100%)',
      bgPattern: 'dots',
      primaryIcon: '🦄',
      secondaryElements: ['rainbow-arc', 'happy-unicorn', 'sparkle-stars']
    },
    motionConfig: {
      type: 'glow-scan',
      speed: 1.0,
      intensity: 0.85,
      glowColor: '#34D399',
      particleCount: 20
    },
    searchQueries: ['unicorn rainbow discord banner', 'funny unicorn meme banner', 'rainbow aesthetic animated gif']
  },
  {
    id: 'animated-tpose-dancing-kittens',
    slug: 't-pose-dancing-kittens',
    title: 'Meme Legends: T-Pose Dancing Kittens',
    description: 'The viral trio of fuzzy kittens performing the legendary T-pose synchronized dance with seamless looping footwork.',
    category: 'cute',
    categoryLabel: 'Cute & Whimsical',
    mood: 'energetic',
    style: 'cel-shaded',
    tags: ['animated', 'cat', 'kittens', 'dancing', 'tpose', 'meme', 'cute', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/t-pose-dancing-kittens.webp',
    imageUrl: '/assets/animated/t-pose-dancing-kittens.webp',
    profileThemeHex: '#1C1D24',
    accentHex: '#F43F5E',
    glowHex: '#E2E8F0',
    paletteColors: ['#0F1014', '#1C1D24', '#DB2777', '#F1F5F9'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 45, zoom: 1.5 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0F1014 0%, #1C1D24 60%, #F1F5F9 100%)',
      bgPattern: 'dots',
      primaryIcon: '💃',
      secondaryElements: ['dancing-kittens', 't-pose', 'pure-white-stage']
    },
    motionConfig: {
      type: 'floating',
      speed: 1.2,
      intensity: 0.9,
      glowColor: '#F43F5E',
      particleCount: 18
    },
    searchQueries: ['tpose cat banner', 'dancing kittens discord banner', 'chipi chapa kittens gif']
  },
  {
    id: 'animated-kawaii-panda-stroll',
    slug: 'kawaii-panda-guitar-stroll',
    title: 'Sunny Stroll: Kawaii Panda Guitar Walk',
    description: 'Adorable chibi panda happily marching down a sunlit grassy hillside with a bear-eared guitar case and a cheery red countryside bus.',
    category: 'cute',
    categoryLabel: 'Cute & Whimsical',
    mood: 'chill',
    style: 'cel-shaded',
    tags: ['animated', 'panda', 'kawaii', 'bubu-dudu', 'guitar', 'sunny', 'cute', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/kawaii-panda-guitar-stroll.webp',
    imageUrl: '/assets/animated/kawaii-panda-guitar-stroll.webp',
    profileThemeHex: '#122238',
    accentHex: '#38BDF8',
    glowHex: '#FB923C',
    paletteColors: ['#0A1422', '#122238', '#0284C7', '#FB923C'],
    focalPoint: {
      banner: { x: 55, y: 50 },
      pfp: { x: 55, y: 45, zoom: 1.5 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0A1422 0%, #122238 60%, #FB923C 100%)',
      bgPattern: 'lines',
      primaryIcon: '🐼',
      secondaryElements: ['bubu-panda', 'guitar-bag', 'sunny-road']
    },
    motionConfig: {
      type: 'floating',
      speed: 0.9,
      intensity: 0.85,
      glowColor: '#38BDF8',
      particleCount: 15
    },
    searchQueries: ['kawaii panda discord banner', 'bubu dudu animated banner', 'cute panda guitar gif']
  },
  // --- 8 FLAGSHIP STUDIO-QUALITY ANIMATED ANIME & CINEMATIC BANNERS ---
  {
    id: 'animated-reze-violet-sakura',
    slug: 'reze-violet-sakura-gaze',
    title: 'Reze: Violet Sakura Reverie',
    description: 'Reze from Chainsaw Man in the spring breeze with fluttering sakura petals, soft violet gaze, and cinematic lens bloom.',
    category: 'anime',
    categoryLabel: 'Anime-Inspired',
    mood: 'cozy',
    style: 'cinematic-motion',
    tags: ['animated', 'anime', 'reze', 'chainsaw-man', 'sakura', 'cherry-blossom', 'violet', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/reze-violet-sakura-gaze.webp',
    imageUrl: '/assets/animated/reze-violet-sakura-gaze.webp',
    profileThemeHex: '#2E1038',
    accentHex: '#C084FC',
    glowHex: '#F472B6',
    paletteColors: ['#1A0B2E', '#2E1038', '#C084FC', '#F472B6'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 35, zoom: 1.5 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #1A0B2E 0%, #2E1038 60%, #C084FC 100%)',
      bgPattern: 'dots',
      primaryIcon: '🌸',
      secondaryElements: ['cherry-blossom', 'light-bloom', 'spring-wind']
    },
    motionConfig: {
      type: 'particle',
      speed: 0.9,
      intensity: 0.8,
      glowColor: '#C084FC',
      particleCount: 24
    },
    searchQueries: ['reze discord banner', 'chainsaw man animated banner', 'sakura anime banner', 'reze pfp banner gif']
  },
  {
    id: 'animated-spiderman-rain-gaze',
    slug: 'spiderman-rain-melancholy-gaze',
    title: 'Spider-Man: Rain & Melancholy',
    description: 'Tobey Maguire Spider-Man looking up through a torrential rainstorm with authentic falling rain streaks and gloomy city reflections.',
    category: 'superhero',
    categoryLabel: 'Superhero & Comic',
    mood: 'moody',
    style: 'cinematic-motion',
    tags: ['animated', 'spiderman', 'rain', 'marvel', 'tobey-maguire', 'banner', 'cinematic', 'gif', 'moody'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/spiderman-rain-melancholy-gaze.webp',
    imageUrl: '/assets/animated/spiderman-rain-melancholy-gaze.webp',
    profileThemeHex: '#0B111E',
    accentHex: '#38BDF8',
    glowHex: '#60A5FA',
    paletteColors: ['#0B111E', '#1E293B', '#38BDF8', '#94A3B8'],
    focalPoint: {
      banner: { x: 50, y: 45 },
      pfp: { x: 50, y: 40, zoom: 1.4 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0B111E 0%, #1E293B 70%, #38BDF8 100%)',
      bgPattern: 'lines',
      primaryIcon: '🌧️',
      secondaryElements: ['rain-droplets', 'mist-sheet', 'city-glow']
    },
    motionConfig: {
      type: 'rain',
      speed: 1.2,
      intensity: 0.9,
      glowColor: '#38BDF8',
      particleCount: 35
    },
    searchQueries: ['spiderman rain banner', 'spiderman animated discord banner', 'tobey maguire rain gif', 'sad spiderman banner']
  },
  {
    id: 'animated-abyssal-ink-shadow',
    slug: 'abyssal-ink-shadow-monarch',
    title: 'Abyssal Monarch: Ink Silhouette',
    description: 'High-contrast dark manga monarch silhouette pulsing with abyssal violet embers and cursed ink aura.',
    category: 'dark',
    categoryLabel: 'Dark & Moody',
    mood: 'ominous',
    style: 'cel-shaded',
    tags: ['animated', 'dark', 'monarch', 'solo-leveling', 'shadow', 'ink', 'manga', 'silhouette', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/abyssal-ink-shadow-monarch.webp',
    imageUrl: '/assets/animated/abyssal-ink-shadow-monarch.webp',
    profileThemeHex: '#080511',
    accentHex: '#A855F7',
    glowHex: '#7C3AED',
    paletteColors: ['#05030A', '#080511', '#7C3AED', '#A855F7'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 35, zoom: 1.5 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #05030A 0%, #080511 60%, #7C3AED 100%)',
      bgPattern: 'grid',
      primaryIcon: '🗡️',
      secondaryElements: ['shadow-monarch', 'dark-mist', 'spectral-ember']
    },
    motionConfig: {
      type: 'particle',
      speed: 0.8,
      intensity: 0.9,
      glowColor: '#A855F7',
      particleCount: 22
    },
    searchQueries: ['shadow monarch discord banner', 'dark manga animated banner', 'ink silhouette solo leveling gif']
  },
  {
    id: 'animated-lucy-cyberpunk-moon',
    slug: 'lucy-cyberpunk-moon-dream',
    title: 'Lucy: Moonlit Cyberpunk Odyssey',
    description: 'Lucy gazing at the Earth from the desolate lunar surface under neon cyan starry expanse from Cyberpunk: Edgerunners.',
    category: 'cyberpunk',
    categoryLabel: 'Cyberpunk',
    mood: 'ethereal',
    style: 'cinematic-motion',
    tags: ['animated', 'lucy', 'cyberpunk', 'edgerunners', 'moon', 'neon', 'banner', 'gif', 'sci-fi'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/lucy-cyberpunk-moon-dream.webp',
    imageUrl: '/assets/animated/lucy-cyberpunk-moon-dream.webp',
    profileThemeHex: '#060B18',
    accentHex: '#06B6D4',
    glowHex: '#22D3EE',
    paletteColors: ['#040710', '#060B18', '#0E7490', '#22D3EE'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 40, zoom: 1.5 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #040710 0%, #060B18 60%, #22D3EE 100%)',
      bgPattern: 'grid',
      primaryIcon: '🌕',
      secondaryElements: ['moon-surface', 'earth-glow', 'cyber-starfield']
    },
    motionConfig: {
      type: 'glow-scan',
      speed: 0.7,
      intensity: 0.85,
      glowColor: '#22D3EE',
      particleCount: 16
    },
    searchQueries: ['lucy cyberpunk banner', 'edgerunners moon animated banner', 'cyberpunk 2077 banner gif', 'lucy edgerunners banner']
  },
  {
    id: 'animated-gojo-infinite-void',
    slug: 'gojo-infinite-void-six-eyes',
    title: 'Gojo Satoru: Infinite Void Six Eyes',
    description: 'Gojo Satoru lifting his blindfold to unleash the boundless azure luminescence of the Six Eyes Domain Expansion.',
    category: 'anime',
    categoryLabel: 'Anime-Inspired',
    mood: 'epic',
    style: 'cinematic-motion',
    tags: ['animated', 'gojo', 'satoru', 'six-eyes', 'infinite-void', 'domain-expansion', 'jjk', 'jujutsu-kaisen', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/gojo-infinite-void-six-eyes.webp',
    imageUrl: '/assets/animated/gojo-infinite-void-six-eyes.webp',
    profileThemeHex: '#0A1224',
    accentHex: '#38BDF8',
    glowHex: '#0EA5E9',
    paletteColors: ['#030712', '#0A1224', '#0284C7', '#38BDF8'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 35, zoom: 1.6 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #030712 0%, #0A1224 60%, #38BDF8 100%)',
      bgPattern: 'lines',
      primaryIcon: '👁️',
      secondaryElements: ['six-eyes-radiance', 'domain-expansion', 'infinite-blue']
    },
    motionConfig: {
      type: 'light-pulse',
      speed: 1.0,
      intensity: 0.95,
      glowColor: '#38BDF8',
      particleCount: 25
    },
    searchQueries: ['gojo satoru discord banner', 'six eyes animated banner', 'jujutsu kaisen banner gif', 'gojo domain expansion banner']
  },
  {
    id: 'animated-makima-golden-gaze',
    slug: 'makima-hypnotic-golden-gaze',
    title: 'Makima: Hypnotic Golden Gaze',
    description: 'Makima fixing her captivating concentric golden ring eyes with subtle intoxicating aura and velvet crimson shading.',
    category: 'anime',
    categoryLabel: 'Anime-Inspired',
    mood: 'mysterious',
    style: 'cel-shaded',
    tags: ['animated', 'makima', 'chainsaw-man', 'golden-eyes', 'control-devil', 'anime', 'banner', 'gif', 'crimson'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/makima-hypnotic-golden-gaze.webp',
    imageUrl: '/assets/animated/makima-hypnotic-golden-gaze.webp',
    profileThemeHex: '#1F0C10',
    accentHex: '#EAB308',
    glowHex: '#F59E0B',
    paletteColors: ['#120508', '#1F0C10', '#991B1B', '#EAB308'],
    focalPoint: {
      banner: { x: 50, y: 45 },
      pfp: { x: 50, y: 35, zoom: 1.5 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #120508 0%, #1F0C10 60%, #EAB308 100%)',
      bgPattern: 'dots',
      primaryIcon: '🌀',
      secondaryElements: ['concentric-eyes', 'control-chains', 'crimson-velvet']
    },
    motionConfig: {
      type: 'floating',
      speed: 0.6,
      intensity: 0.8,
      glowColor: '#EAB308',
      particleCount: 15
    },
    searchQueries: ['makima discord banner', 'makima eyes animated banner', 'chainsaw man control devil banner gif']
  },
  {
    id: 'animated-kaneki-spider-lily',
    slug: 'kaneki-spider-lily-awakening',
    title: 'Kaneki Ken: Red Spider Lily Awakening',
    description: 'Kaneki Ken embracing the ghoul awakening amidst blooming crimson spider lilies with crackling kakugan aura.',
    category: 'anime',
    categoryLabel: 'Anime-Inspired',
    mood: 'ominous',
    style: 'cinematic-motion',
    tags: ['animated', 'kaneki', 'tokyo-ghoul', 'spider-lily', 'kakugan', 'awakening', 'banner', 'gif', 'red'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/kaneki-spider-lily-awakening.webp',
    imageUrl: '/assets/animated/kaneki-spider-lily-awakening.webp',
    profileThemeHex: '#140608',
    accentHex: '#EF4444',
    glowHex: '#DC2626',
    paletteColors: ['#0A0204', '#140608', '#991B1B', '#EF4444'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 40, zoom: 1.5 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0A0204 0%, #140608 60%, #EF4444 100%)',
      bgPattern: 'lines',
      primaryIcon: '🌺',
      secondaryElements: ['spider-lilies', 'kakugan-glow', 'blood-petals']
    },
    motionConfig: {
      type: 'particle',
      speed: 0.9,
      intensity: 0.85,
      glowColor: '#EF4444',
      particleCount: 20
    },
    searchQueries: ['kaneki spider lily banner', 'tokyo ghoul animated discord banner', 'kaneki awakening gif']
  },
  {
    id: 'animated-sukuna-malevolent-shrine',
    slug: 'sukuna-malevolent-shrine-domain',
    title: 'Ryomen Sukuna: Malevolent Shrine',
    description: 'The King of Curses Ryomen Sukuna manifesting Malevolent Shrine with ominous crimson domain slicing cleave waves.',
    category: 'anime',
    categoryLabel: 'Anime-Inspired',
    mood: 'epic',
    style: 'cinematic-motion',
    tags: ['animated', 'sukuna', 'jjk', 'jujutsu-kaisen', 'malevolent-shrine', 'domain-expansion', 'cleave', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/sukuna-malevolent-shrine-domain.webp',
    imageUrl: '/assets/animated/sukuna-malevolent-shrine-domain.webp',
    profileThemeHex: '#180707',
    accentHex: '#F43F5E',
    glowHex: '#E11D48',
    paletteColors: ['#0A0202', '#180707', '#9F1239', '#F43F5E'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 35, zoom: 1.5 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0A0202 0%, #180707 60%, #F43F5E 100%)',
      bgPattern: 'grid',
      primaryIcon: '⛩️',
      secondaryElements: ['malevolent-shrine', 'cleave-distortion', 'cursed-blood-sky']
    },
    motionConfig: {
      type: 'light-pulse',
      speed: 1.1,
      intensity: 0.95,
      glowColor: '#F43F5E',
      particleCount: 28
    },
    searchQueries: ['sukuna discord banner', 'malevolent shrine animated banner', 'sukuna domain expansion gif', 'jujutsu kaisen banner']
  },
  // --- 18 AESTHETIC ANIMATED ANIME BANNERS (DiscordPFP.gg Parity) ---
  {
    id: 'animated-goth-smoker',
    slug: 'goth-smoker-monochrome-cigarette',
    title: 'Goth Smoker: Monochrome Noir',
    description: 'Monochrome anime noir heroine with a lit cigarette, moody drifting smoke and falling ember particles.',
    category: 'anime',
    categoryLabel: 'Anime-Inspired',
    mood: 'moody',
    style: 'cinematic-motion',
    tags: ['animated', 'anime', 'monochrome', 'goth', 'smoker', 'cigarette', 'noir', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/goth-smoker.webp',
    imageUrl: '/assets/animated/goth-smoker.webp',
    profileThemeHex: '#121214',
    accentHex: '#E2E8F0',
    glowHex: '#94A3B8',
    paletteColors: ['#121214', '#1E293B', '#CBD5E1', '#FFFFFF'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 40, zoom: 1.6 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #121214 0%, #1E293B 60%, #E2E8F0 100%)',
      bgPattern: 'lines',
      primaryIcon: '🚬',
      secondaryElements: ['smoke-trail', 'embers']
    },
    motionConfig: {
      type: 'particle',
      speed: 0.8,
      intensity: 0.7,
      glowColor: '#E2E8F0',
      particleCount: 20
    },
    searchQueries: ['goth smoker discord banner', 'anime girl smoking banner', 'monochrome animated banner']
  },
  {
    id: 'animated-zoro-santoryu',
    slug: 'zoro-santoryu-three-sword-demon',
    title: 'Zoro Santoryu: Three-Sword Demon',
    description: 'Roronoa Zoro in peak Santoryu battle stance with green bandana and roaring conqueror wind aura.',
    category: 'anime',
    categoryLabel: 'Anime-Inspired',
    mood: 'epic',
    style: 'cinematic-motion',
    tags: ['animated', 'zoro', 'one-piece', 'santoryu', 'swordsman', 'anime', 'banner', 'gif', 'green'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/zoro-santoryu.webp',
    imageUrl: '/assets/animated/zoro-santoryu.webp',
    profileThemeHex: '#0D1E16',
    accentHex: '#22C55E',
    glowHex: '#4ADE80',
    paletteColors: ['#0D1E16', '#166534', '#22C55E', '#86EFAC'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 45, zoom: 1.6 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0D1E16 0%, #166534 60%, #22C55E 100%)',
      bgPattern: 'waves',
      primaryIcon: '⚔️',
      secondaryElements: ['green-bandana', 'three-swords']
    },
    motionConfig: {
      type: 'speed-streaks',
      speed: 1.2,
      intensity: 0.9,
      glowColor: '#22C55E'
    },
    searchQueries: ['zoro discord banner', 'one piece animated banner', 'zoro santoryu animated gif']
  },
  {
    id: 'animated-rainy-silhou',
    slug: 'rainy-silhou-tokyo-monsoon',
    title: 'Rainy Silhou: Tokyo Monsoon',
    description: 'Poetic anime couple silhouette under city streetlights in a cinematic downpour of animated rain.',
    category: 'anime',
    categoryLabel: 'Anime-Inspired',
    mood: 'moody',
    style: 'cinematic-motion',
    tags: ['animated', 'silhouette', 'rain', 'monsoon', 'lofi', 'anime', 'couple', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/rainy-silhou.webp',
    imageUrl: '/assets/animated/rainy-silhou.webp',
    profileThemeHex: '#101726',
    accentHex: '#60A5FA',
    glowHex: '#93C5FD',
    paletteColors: ['#101726', '#1E3A8A', '#60A5FA', '#DBEAFE'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 45, zoom: 1.5 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #101726 0%, #1E3A8A 60%, #60A5FA 100%)',
      bgPattern: 'lines',
      primaryIcon: '🌧️',
      secondaryElements: ['rain-streaks', 'city-lights']
    },
    motionConfig: {
      type: 'rain',
      speed: 1.0,
      intensity: 0.8,
      glowColor: '#60A5FA'
    },
    searchQueries: ['rainy anime banner', 'silhouette rain discord banner', 'animated rain anime banner']
  },
  {
    id: 'animated-cracked-kat',
    slug: 'cracked-katana-crimson-glint',
    title: 'Cracked Kat: Crimson Steel Glint',
    description: 'Battle-worn katana hilt and fractured blade reflecting pulsing crimson light and combat sparks.',
    category: 'anime',
    categoryLabel: 'Anime-Inspired',
    mood: 'epic',
    style: 'cinematic-motion',
    tags: ['animated', 'katana', 'sword', 'cracked', 'crimson', 'anime', 'blade', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/cracked-kat.webp',
    imageUrl: '/assets/animated/cracked-kat.webp',
    profileThemeHex: '#1A0E10',
    accentHex: '#EF4444',
    glowHex: '#F87171',
    paletteColors: ['#1A0E10', '#450A0A', '#EF4444', '#FCA5A5'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 40, y: 50, zoom: 1.5 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #1A0E10 0%, #450A0A 60%, #EF4444 100%)',
      bgPattern: 'lines',
      primaryIcon: '🗡️',
      secondaryElements: ['crimson-spark', 'cracked-blade']
    },
    motionConfig: {
      type: 'speed-streaks',
      speed: 0.9,
      intensity: 0.8,
      glowColor: '#EF4444'
    },
    searchQueries: ['katana discord banner', 'cracked katana animated banner', 'sword anime banner']
  },
  {
    id: 'animated-pink-blush',
    slug: 'pink-blush-cyber-kawaii-gaze',
    title: 'Pink Blush: Cyber Kawaii Gaze',
    description: 'Glowing pastel pink anime eyes with blinking shimmer, sweet blushing heart sparkles and dreamy motion.',
    category: 'anime',
    categoryLabel: 'Anime-Inspired',
    mood: 'ethereal',
    style: 'cinematic-motion',
    tags: ['animated', 'anime', 'pink', 'blush', 'kawaii', 'eyes', 'monochrome', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/pink-blush.webp',
    imageUrl: '/assets/animated/pink-blush.webp',
    profileThemeHex: '#240F1D',
    accentHex: '#F472B6',
    glowHex: '#FBCFE8',
    paletteColors: ['#240F1D', '#831843', '#F472B6', '#FDF2F8'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.4 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #240F1D 0%, #831843 60%, #F472B6 100%)',
      bgPattern: 'dots',
      primaryIcon: '🌸',
      secondaryElements: ['pink-sparkle', 'blushing-eyes']
    },
    motionConfig: {
      type: 'particle',
      speed: 0.7,
      intensity: 0.6,
      glowColor: '#F472B6'
    },
    searchQueries: ['pink blush discord banner', 'pink anime eyes banner', 'kawaii animated banner']
  },
  {
    id: 'animated-monochrome-hands',
    slug: 'monochrome-hands-ethereal-reach',
    title: 'Monochrome Hands: Ethereal Reach',
    description: 'Two minimalist monochrome hands reaching toward each other amidst drifting celestial particles.',
    category: 'anime',
    categoryLabel: 'Anime-Inspired',
    mood: 'ethereal',
    style: 'cinematic-motion',
    tags: ['animated', 'hands', 'reaching', 'monochrome', 'ethereal', 'aesthetic', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/monochrome-hands.webp',
    imageUrl: '/assets/animated/monochrome-hands.webp',
    profileThemeHex: '#0B0B0D',
    accentHex: '#E2E8F0',
    glowHex: '#94A3B8',
    paletteColors: ['#0B0B0D', '#1E293B', '#E2E8F0', '#FFFFFF'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.4 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0B0B0D 0%, #1E293B 60%, #E2E8F0 100%)',
      bgPattern: 'lines',
      primaryIcon: '✨',
      secondaryElements: ['reaching-hands', 'celestial-dust']
    },
    motionConfig: {
      type: 'particle',
      speed: 0.6,
      intensity: 0.5,
      glowColor: '#E2E8F0'
    },
    searchQueries: ['monochrome hands banner', 'reaching hands aesthetic banner', 'black and white animated banner']
  },
  {
    id: 'animated-train-yuji',
    slug: 'train-yuji-subway-sorcerer',
    title: 'Train Yuji: Subway Sorcerer',
    description: 'Yuji Itadori riding a Tokyo subway car with rhythmic window reflections and cursed energy atmosphere.',
    category: 'anime',
    categoryLabel: 'Anime-Inspired',
    mood: 'moody',
    style: 'cinematic-motion',
    tags: ['animated', 'yuji', 'jjk', 'subway', 'train', 'jujutsu-kaisen', 'anime', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/train-yuji.webp',
    imageUrl: '/assets/animated/train-yuji.webp',
    profileThemeHex: '#14141E',
    accentHex: '#38BDF8',
    glowHex: '#7DD3FC',
    paletteColors: ['#14141E', '#0F172A', '#38BDF8', '#E0F2FE'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 45, zoom: 1.5 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #14141E 0%, #0F172A 60%, #38BDF8 100%)',
      bgPattern: 'grid',
      primaryIcon: '🚇',
      secondaryElements: ['train-lights', 'cursed-energy']
    },
    motionConfig: {
      type: 'rain',
      speed: 0.9,
      intensity: 0.7,
      glowColor: '#38BDF8'
    },
    searchQueries: ['yuji itadori discord banner', 'jjk train animated banner', 'jujutsu kaisen banner']
  },
  {
    id: 'animated-2b-monochrome-blade',
    slug: 'yorha-2b-monochrome-blade-awakening',
    title: '2B Blade: YoRHa Awakening',
    description: '2B gripping her Virtuous Treaty katana as combat aura sweeps through gothic monochrome ruins.',
    category: 'anime',
    categoryLabel: 'Anime-Inspired',
    mood: 'epic',
    style: 'cinematic-motion',
    tags: ['animated', '2b', 'nier', 'monochrome', 'katana', 'sword', 'goth', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/2b-monochrome-blade.webp',
    imageUrl: '/assets/animated/2b-monochrome-blade.webp',
    profileThemeHex: '#0C0C0E',
    accentHex: '#CBD5E1',
    glowHex: '#94A3B8',
    paletteColors: ['#0C0C0E', '#1E293B', '#CBD5E1', '#F8FAFC'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 38, zoom: 1.6 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0C0C0E 0%, #1E293B 60%, #CBD5E1 100%)',
      bgPattern: 'lines',
      primaryIcon: '⚔️',
      secondaryElements: ['katana-gleam', 'monochrome-dress']
    },
    motionConfig: {
      type: 'particle',
      speed: 0.8,
      intensity: 0.6,
      glowColor: '#CBD5E1'
    },
    searchQueries: ['2b monochrome banner', 'nier automata animated banner', '2b katana discord banner']
  },
  {
    id: 'animated-red-eyes-gaze',
    slug: 'crimson-abyss-red-eyes-gaze',
    title: 'Red Eyes Gaze: Crimson Abyss',
    description: 'Piercing crimson anime eyes glowing menacingly through deep shadow with animated ember pulses.',
    category: 'anime',
    categoryLabel: 'Anime-Inspired',
    mood: 'mysterious',
    style: 'cinematic-motion',
    tags: ['animated', 'red-eyes', 'crimson', 'gaze', 'dark', 'ghoul', 'anime', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/red-eyes-gaze.webp',
    imageUrl: '/assets/animated/red-eyes-gaze.webp',
    profileThemeHex: '#190A0C',
    accentHex: '#DC2626',
    glowHex: '#EF4444',
    paletteColors: ['#190A0C', '#450A0A', '#DC2626', '#FCA5A5'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.5 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #190A0C 0%, #450A0A 60%, #DC2626 100%)',
      bgPattern: 'lines',
      primaryIcon: '👁️',
      secondaryElements: ['crimson-pupils', 'dark-shadow']
    },
    motionConfig: {
      type: 'pulse',
      speed: 1.0,
      intensity: 0.9,
      glowColor: '#DC2626'
    },
    searchQueries: ['red eyes animated banner', 'crimson eyes discord banner', 'dark anime eyes banner']
  },
  {
    id: 'animated-purple-gaze',
    slug: 'violet-astral-purple-gaze',
    title: 'Purple Gaze: Violet Astral Stare',
    description: 'Mystical purple anime eyes glowing with ethereal astral fog and subtle pulsing celestial rings.',
    category: 'anime',
    categoryLabel: 'Anime-Inspired',
    mood: 'ethereal',
    style: 'cinematic-motion',
    tags: ['animated', 'purple', 'violet', 'gaze', 'eyes', 'ethereal', 'anime', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/purple-gaze.webp',
    imageUrl: '/assets/animated/purple-gaze.webp',
    profileThemeHex: '#160D24',
    accentHex: '#A855F7',
    glowHex: '#C084FC',
    paletteColors: ['#160D24', '#3B0764', '#A855F7', '#F3E8FF'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.5 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #160D24 0%, #3B0764 60%, #A855F7 100%)',
      bgPattern: 'dots',
      primaryIcon: '💜',
      secondaryElements: ['violet-aurora', 'astral-eyes']
    },
    motionConfig: {
      type: 'pulse',
      speed: 0.8,
      intensity: 0.7,
      glowColor: '#A855F7'
    },
    searchQueries: ['purple gaze discord banner', 'violet eyes animated banner', 'anime purple aesthetic banner']
  },
  {
    id: 'animated-glowing-eyes',
    slug: 'cyber-cyberpunk-glowing-eyes',
    title: 'Glowing Eyes: Cyber Visor Pulse',
    description: 'Futuristic cyberpunk ocular implants glowing in cyan neon with animated data stream scanlines.',
    category: 'cyberpunk',
    categoryLabel: 'Cyberpunk',
    mood: 'futuristic',
    style: 'cinematic-motion',
    tags: ['animated', 'cyberpunk', 'neon', 'glowing-eyes', 'cyan', 'scifi', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/glowing-eyes.webp',
    imageUrl: '/assets/animated/glowing-eyes.webp',
    profileThemeHex: '#081720',
    accentHex: '#06B6D4',
    glowHex: '#22D3EE',
    paletteColors: ['#081720', '#164E63', '#06B6D4', '#CFFAFE'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.4 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #081720 0%, #164E63 60%, #06B6D4 100%)',
      bgPattern: 'grid',
      primaryIcon: '⚡',
      secondaryElements: ['cyan-scanlines', 'cyber-optics']
    },
    motionConfig: {
      type: 'speed-streaks',
      speed: 1.1,
      intensity: 0.8,
      glowColor: '#06B6D4'
    },
    searchQueries: ['glowing eyes discord banner', 'cyberpunk eyes banner', 'neon cyan anime banner']
  },
  {
    id: 'animated-fangs-mouth',
    slug: 'vampire-demon-fangs-mouth',
    title: 'Fangs Mouth: Vampire Demon Grin',
    description: 'Stylized anime vampire fangs and dark smirk with pulsing crimson luminescence.',
    category: 'dark',
    categoryLabel: 'Dark & Moody',
    mood: 'mysterious',
    style: 'cinematic-motion',
    tags: ['animated', 'fangs', 'vampire', 'demon', 'mouth', 'dark', 'anime', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/fangs-mouth.webp',
    imageUrl: '/assets/animated/fangs-mouth.webp',
    profileThemeHex: '#180B0F',
    accentHex: '#E11D48',
    glowHex: '#FB7185',
    paletteColors: ['#180B0F', '#4C0519', '#E11D48', '#FFE4E6'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.5 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #180B0F 0%, #4C0519 60%, #E11D48 100%)',
      bgPattern: 'lines',
      primaryIcon: '🩸',
      secondaryElements: ['vampire-fangs', 'crimson-smirk']
    },
    motionConfig: {
      type: 'pulse',
      speed: 0.9,
      intensity: 0.7,
      glowColor: '#E11D48'
    },
    searchQueries: ['fangs discord banner', 'vampire fangs animated banner', 'dark demon anime banner']
  },
  {
    id: 'animated-smoking-hand',
    slug: 'smoking-hand-midnight-embers',
    title: 'Smoking Hand: Midnight Embers',
    description: 'Close-up of anime fingers resting with cigarette smoke curling gracefully into midnight shadows.',
    category: 'anime',
    categoryLabel: 'Anime-Inspired',
    mood: 'chill',
    style: 'cinematic-motion',
    tags: ['animated', 'cigarette', 'smoking', 'hand', 'embers', 'lofi', 'anime', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/smoking-hand.webp',
    imageUrl: '/assets/animated/smoking-hand.webp',
    profileThemeHex: '#111317',
    accentHex: '#FB923C',
    glowHex: '#FDBA74',
    paletteColors: ['#111317', '#1F2937', '#FB923C', '#FFEDD5'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.5 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #111317 0%, #1F2937 60%, #FB923C 100%)',
      bgPattern: 'lines',
      primaryIcon: '🚬',
      secondaryElements: ['curling-smoke', 'amber-ember']
    },
    motionConfig: {
      type: 'particle',
      speed: 0.7,
      intensity: 0.6,
      glowColor: '#FB923C'
    },
    searchQueries: ['smoking hand banner', 'cigarette smoke animated banner', 'lofi smoking discord banner']
  },
  {
    id: 'animated-black-hair-windblown',
    slug: 'black-hair-monochrome-windblown',
    title: 'Black Hair: Monochrome Windblown',
    description: 'Striking black-haired anime heroine in high-contrast monochrome with hair billowing in night wind.',
    category: 'anime',
    categoryLabel: 'Anime-Inspired',
    mood: 'moody',
    style: 'cinematic-motion',
    tags: ['animated', 'black-hair', 'windblown', 'monochrome', 'noir', 'anime', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/black-hair-windblown.webp',
    imageUrl: '/assets/animated/black-hair-windblown.webp',
    profileThemeHex: '#0D0E12',
    accentHex: '#94A3B8',
    glowHex: '#CBD5E1',
    paletteColors: ['#0D0E12', '#1E293B', '#94A3B8', '#F8FAFC'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 45, zoom: 1.5 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0D0E12 0%, #1E293B 60%, #94A3B8 100%)',
      bgPattern: 'lines',
      primaryIcon: '🖤',
      secondaryElements: ['windblown-locks', 'monochrome-eyes']
    },
    motionConfig: {
      type: 'windblown-grass',
      speed: 0.9,
      intensity: 0.7,
      glowColor: '#CBD5E1'
    },
    searchQueries: ['black hair anime banner', 'windblown hair discord banner', 'monochrome anime banner']
  },
  {
    id: 'animated-flower-hand-petals',
    slug: 'flower-hand-sakura-petals-reverie',
    title: 'Flower Hand: Sakura Petals Reverie',
    description: 'A graceful hand releasing soft pink cherry blossom petals fluttering across a dreamy spring breeze.',
    category: 'anime',
    categoryLabel: 'Anime-Inspired',
    mood: 'ethereal',
    style: 'cinematic-motion',
    tags: ['animated', 'sakura', 'cherry-blossom', 'petals', 'flower', 'hand', 'anime', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/flower-hand-petals.webp',
    imageUrl: '/assets/animated/flower-hand-petals.webp',
    profileThemeHex: '#23111C',
    accentHex: '#EC4899',
    glowHex: '#F472B6',
    paletteColors: ['#23111C', '#831843', '#EC4899', '#FDF2F8'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.4 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #23111C 0%, #831843 60%, #EC4899 100%)',
      bgPattern: 'dots',
      primaryIcon: '🌸',
      secondaryElements: ['sakura-petals', 'gentle-breeze']
    },
    motionConfig: {
      type: 'particle',
      speed: 0.8,
      intensity: 0.7,
      glowColor: '#EC4899'
    },
    searchQueries: ['sakura petals discord banner', 'flower hand animated banner', 'pink cherry blossom anime banner']
  },
  {
    id: 'animated-pink-sideview-neon',
    slug: 'pink-sideview-neon-silhouette',
    title: 'Pink Sideview: Neon Silhouette',
    description: 'Sleek anime heroine side-profile backlit by vivid hot pink and magenta neon club illumination.',
    category: 'cyberpunk',
    categoryLabel: 'Cyberpunk',
    mood: 'futuristic',
    style: 'cinematic-motion',
    tags: ['animated', 'sideview', 'pink', 'neon', 'cyberpunk', 'silhouette', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/pink-sideview-neon.webp',
    imageUrl: '/assets/animated/pink-sideview-neon.webp',
    profileThemeHex: '#280D21',
    accentHex: '#F43F5E',
    glowHex: '#FB7185',
    paletteColors: ['#280D21', '#881337', '#F43F5E', '#FFE4E6'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 45, zoom: 1.5 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #280D21 0%, #881337 60%, #F43F5E 100%)',
      bgPattern: 'grid',
      primaryIcon: '💖',
      secondaryElements: ['pink-rim-light', 'cyber-profile']
    },
    motionConfig: {
      type: 'speed-streaks',
      speed: 1.0,
      intensity: 0.8,
      glowColor: '#F43F5E'
    },
    searchQueries: ['pink sideview discord banner', 'neon pink anime banner', 'cyberpunk sideview banner']
  },
  {
    id: 'animated-stepping-foot-rain',
    slug: 'stepping-foot-puddle-rain-ripple',
    title: 'Rain Ripple: Tokyo Stepping Foot',
    description: 'Street footwear stepping into city puddle with realistic kinetic rain ripples and street reflections.',
    category: 'lofi',
    categoryLabel: 'Lo-Fi Chill',
    mood: 'chill',
    style: 'cinematic-motion',
    tags: ['animated', 'rain', 'puddle', 'ripple', 'streetwear', 'lofi', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/stepping-foot-rain.webp',
    imageUrl: '/assets/animated/stepping-foot-rain.webp',
    profileThemeHex: '#131A26',
    accentHex: '#38BDF8',
    glowHex: '#7DD3FC',
    paletteColors: ['#131A26', '#0369A1', '#38BDF8', '#E0F2FE'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.4 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #131A26 0%, #0369A1 60%, #38BDF8 100%)',
      bgPattern: 'waves',
      primaryIcon: '💧',
      secondaryElements: ['puddle-ripples', 'street-reflections']
    },
    motionConfig: {
      type: 'rain',
      speed: 0.9,
      intensity: 0.8,
      glowColor: '#38BDF8'
    },
    searchQueries: ['rain ripple discord banner', 'puddle stepping foot banner', 'lofi rain anime banner']
  },
  {
    id: 'showcase-yandere-gaze',
    slug: 'yandere-gaze-hypnotic-devotion',
    title: 'Yandere Gaze: Hypnotic Devotion',
    description: 'Intense anime devotion gaze with dark gothic pupils and subtle blushing cheek highlights.',
    category: 'anime',
    categoryLabel: 'Anime-Inspired',
    mood: 'mysterious',
    style: 'digital-painting',
    tags: ['anime', 'yandere', 'gaze', 'goth', 'eyes', 'dark', 'banner'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    imageUrl: '/assets/animated/yandere-gaze.webp',
    profileThemeHex: '#180E14',
    accentHex: '#E11D48',
    glowHex: '#F43F5E',
    paletteColors: ['#180E14', '#4C0519', '#E11D48', '#FFE4E6'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 45, zoom: 1.5 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #180E14 0%, #4C0519 60%, #E11D48 100%)',
      bgPattern: 'lines',
      primaryIcon: '🖤',
      secondaryElements: ['yandere-eyes', 'crimson-heart']
    },
    motionConfig: {
      type: 'pulse',
      speed: 0.8,
      intensity: 0.7,
      glowColor: '#E11D48'
    },
    searchQueries: ['yandere gaze discord banner', 'yandere anime banner', 'dark aesthetic banner']
  },
  {
    id: 'animated-2b-monochrome',
    slug: '2b-monochrome-blade-reverie',
    title: 'YoRHa Reverie: 2B Monochrome Blade',
    description: 'Monochrome gothic cyber-heroine holding a gleaming katana against falling digital ash and dark city rain.',
    category: 'anime',
    categoryLabel: 'Anime-Inspired',
    mood: 'mysterious',
    style: 'cinematic-motion',
    tags: ['animated', '2b', 'nier', 'monochrome', 'katana', 'anime', 'swordswoman', 'banner', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/2b-monochrome.webp',
    imageUrl: '/assets/animated/2b-monochrome.webp',
    profileThemeHex: '#0E0E10',
    accentHex: '#CBD5E1',
    glowHex: '#94A3B8',
    paletteColors: ['#0E0E10', '#1E293B', '#CBD5E1', '#FFFFFF'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 35, zoom: 1.8 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0E0E10 0%, #1E293B 60%, #CBD5E1 100%)',
      bgPattern: 'lines',
      primaryIcon: '⚔️',
      secondaryElements: ['katana', 'digital-ash']
    },
    motionConfig: {
      type: 'particle',
      speed: 0.8,
      intensity: 0.6,
      direction: 'down',
      glowColor: '#94A3B8',
      particleCount: 24
    },
    searchQueries: ['2b discord banner', 'animated anime banner', 'monochrome discord banner', '2b nier pfp']
  },
  {
    id: 'animated-blurred-sedan',
    slug: 'midnight-drift-neon-sedan',
    title: 'Midnight Drift: Neon Blur Sedan',
    description: 'A sleek sports sedan slicing through rain-slicked highway asphalt with glowing red tail-light trails and neon city blur.',
    category: 'cyberpunk',
    categoryLabel: 'Cyberpunk & Tech',
    mood: 'energetic',
    style: 'neon-glow',
    tags: ['animated', 'car', 'sedan', 'drift', 'cyberpunk', 'neon', 'highway', 'banner'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/blurred-sedan.webp',
    imageUrl: '/assets/animated/blurred-sedan.webp',
    profileThemeHex: '#080A14',
    accentHex: '#00F0FF',
    glowHex: '#FF007F',
    paletteColors: ['#080A14', '#1E1B4B', '#00F0FF', '#FF007F'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.5 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #080A14 0%, #1E1B4B 50%, #00F0FF 100%)',
      bgPattern: 'grid',
      primaryIcon: '🏎️',
      secondaryElements: ['light-trails', 'wet-asphalt']
    },
    motionConfig: {
      type: 'cyber-grid',
      speed: 1.4,
      intensity: 0.9,
      direction: 'right',
      glowColor: '#00F0FF',
      particleCount: 30
    },
    searchQueries: ['car discord banner', 'animated cyberpunk banner', 'drift car discord', 'neon sedan banner']
  },
  {
    id: 'animated-dark-desk',
    slug: 'late-night-lofi-dev-desk',
    title: 'Late Night Coder: Dark Ambient Desk',
    description: 'Subtle ambient glows from dual displays and illuminated mechanical switches in a midnight sanctuary for deep focus.',
    category: 'lofi',
    categoryLabel: 'Lo-Fi & Chill',
    mood: 'cozy',
    style: 'lo-fi-grain',
    tags: ['animated', 'lofi', 'desk', 'workspace', 'coding', 'setup', 'night', 'chill', 'banner'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/dark-desk.webp',
    imageUrl: '/assets/animated/dark-desk.webp',
    profileThemeHex: '#0F1117',
    accentHex: '#818CF8',
    glowHex: '#C084FC',
    paletteColors: ['#0F1117', '#1E1B4B', '#818CF8', '#C084FC'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.5 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0F1117 0%, #1E1B4B 50%, #818CF8 100%)',
      bgPattern: 'dots',
      primaryIcon: '💻',
      secondaryElements: ['glowing-monitor', 'coffee-steam']
    },
    motionConfig: {
      type: 'ambient-shimmer',
      speed: 0.7,
      intensity: 0.5,
      direction: 'radial',
      glowColor: '#818CF8',
      particleCount: 16
    },
    searchQueries: ['lofi desk discord banner', 'animated coding banner', 'dark dev setup pfp', 'cozy desk banner']
  },
  {
    id: 'animated-moon-blossoms',
    slug: 'moonlit-sakura-blossoms-fall',
    title: 'Moonlit Sakura: Celestial Blossoms',
    description: 'Radiant full moon illuminating delicate drifting cherry blossom petals through a soft violet twilight haze.',
    category: 'anime',
    categoryLabel: 'Anime-Inspired',
    mood: 'ethereal',
    style: 'atmospheric-mist',
    tags: ['animated', 'sakura', 'cherry-blossom', 'moon', 'anime', 'night', 'purple', 'banner'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/moon-blossoms.webp',
    imageUrl: '/assets/animated/moon-blossoms.webp',
    profileThemeHex: '#12091F',
    accentHex: '#F472B6',
    glowHex: '#C084FC',
    paletteColors: ['#12091F', '#3B0764', '#F472B6', '#FDF2F8'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 45, zoom: 1.6 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #12091F 0%, #3B0764 50%, #F472B6 100%)',
      bgPattern: 'dots',
      primaryIcon: '🌸',
      secondaryElements: ['full-moon', 'sakura-petals']
    },
    motionConfig: {
      type: 'floating',
      speed: 0.9,
      intensity: 0.7,
      direction: 'down',
      glowColor: '#F472B6',
      particleCount: 28
    },
    searchQueries: ['sakura discord banner', 'animated anime moon banner', 'cherry blossom discord', 'purple anime banner']
  },
  {
    id: 'animated-moonlit-sea',
    slug: 'abyssal-tides-moonlit-sea',
    title: 'Abyssal Tides: Moonlit Sea',
    description: 'Gentle ocean waves rippling across the dark waters under an expansive celestial night and silver moon radiance.',
    category: 'cinematic',
    categoryLabel: 'Cinematic & Sci-Fi',
    mood: 'calm',
    style: 'matte-painting',
    tags: ['animated', 'ocean', 'sea', 'waves', 'moonlit', 'water', 'calm', 'banner'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/moonlit-sea.webp',
    imageUrl: '/assets/animated/moonlit-sea.webp',
    profileThemeHex: '#07111E',
    accentHex: '#38BDF8',
    glowHex: '#7DD3FC',
    paletteColors: ['#07111E', '#0C2D48', '#38BDF8', '#E0F2FE'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.5 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #07111E 0%, #0C2D48 50%, #38BDF8 100%)',
      bgPattern: 'waves',
      primaryIcon: '🌊',
      secondaryElements: ['ocean-tides', 'silver-reflection']
    },
    motionConfig: {
      type: 'parallax',
      speed: 0.6,
      intensity: 0.6,
      direction: 'wave',
      glowColor: '#38BDF8',
      particleCount: 20
    },
    searchQueries: ['ocean discord banner', 'animated sea banner', 'water waves discord', 'calm night sea pfp']
  },
  {
    id: 'animated-moonlit-sky',
    slug: 'stellar-firmament-moonlit-sky',
    title: 'Stellar Firmament: Moonlit Sky',
    description: 'An infinite expanse of indigo clouds drifting across brilliant constellations and a luminous silver crescent moon.',
    category: 'space',
    categoryLabel: 'Space & Celestial',
    mood: 'mysterious',
    style: 'atmospheric-mist',
    tags: ['animated', 'moon', 'sky', 'night', 'clouds', 'stars', 'space', 'banner'],
    isPopular: true,
    isStaffPick: false,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/moonlit-sky.webp',
    imageUrl: '/assets/animated/moonlit-sky.webp',
    profileThemeHex: '#0B0D1B',
    accentHex: '#818CF8',
    glowHex: '#A5B4FC',
    paletteColors: ['#0B0D1B', '#1E1B4B', '#818CF8', '#EEF2FF'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.5 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0B0D1B 0%, #1E1B4B 60%, #818CF8 100%)',
      bgPattern: 'stars',
      primaryIcon: '✨',
      secondaryElements: ['night-clouds', 'drifting-stars']
    },
    motionConfig: {
      type: 'cloud-drift',
      speed: 0.7,
      intensity: 0.6,
      direction: 'right',
      glowColor: '#A5B4FC',
      particleCount: 22
    },
    searchQueries: ['space discord banner', 'animated stars banner', 'moonlit sky discord', 'celestial pfp']
  },
  {
    id: 'animated-pixel-cat',
    slug: 'rainy-window-pixel-cat',
    title: 'Rainy Window: Pixel Cat',
    description: 'Cozy 16-bit ginger tabby resting beside a raindrop-streaked window pane with warm apartment lamp lighting.',
    category: 'cute',
    categoryLabel: 'Cute & Whimsical',
    mood: 'chill',
    style: 'pixel-art',
    tags: ['animated', 'pixel', 'cat', 'retro', '16-bit', 'cozy', 'rain', 'banner'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/pixel-cat.webp',
    imageUrl: '/assets/animated/pixel-cat.webp',
    profileThemeHex: '#181425',
    accentHex: '#FB923C',
    glowHex: '#FDE047',
    paletteColors: ['#181425', '#261B3D', '#FB923C', '#FEF08A'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 48, zoom: 1.6 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #181425 0%, #261B3D 50%, #FB923C 100%)',
      bgPattern: 'dots',
      primaryIcon: '🐱',
      secondaryElements: ['raindrops', 'pixel-lamp']
    },
    motionConfig: {
      type: 'rain',
      speed: 0.9,
      intensity: 0.7,
      direction: 'down',
      glowColor: '#FB923C',
      particleCount: 24
    },
    searchQueries: ['pixel cat discord banner', 'animated cute banner', 'rainy window cat pfp', 'retro pixel banner']
  },
  {
    id: 'animated-purple-moon',
    slug: 'neon-violet-lunar-sphere',
    title: 'Synthwave Horizons: Purple Moon',
    description: 'A massive radioactive purple moon glowing in a synthwave cyber-sky above dark atmospheric skyscrapers.',
    category: 'cyberpunk',
    categoryLabel: 'Cyberpunk & Tech',
    mood: 'futuristic',
    style: 'neon-glow',
    tags: ['animated', 'purple', 'moon', 'cyberpunk', 'neon', 'violet', 'synthwave', 'banner'],
    isPopular: true,
    isStaffPick: false,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/purple-moon.webp',
    imageUrl: '/assets/animated/purple-moon.webp',
    profileThemeHex: '#110726',
    accentHex: '#A855F7',
    glowHex: '#E879F9',
    paletteColors: ['#110726', '#3B0764', '#A855F7', '#F5D0FE'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.6 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #110726 0%, #3B0764 50%, #A855F7 100%)',
      bgPattern: 'grid',
      primaryIcon: '🟣',
      secondaryElements: ['purple-moon', 'cyber-fog']
    },
    motionConfig: {
      type: 'light-pulse',
      speed: 1.0,
      intensity: 0.8,
      direction: 'radial',
      glowColor: '#E879F9',
      particleCount: 26
    },
    searchQueries: ['purple moon banner', 'animated synthwave banner', 'neon violet discord', 'cyberpunk moon pfp']
  },
  {
    id: 'animated-sakura-bridge',
    slug: 'shrine-sanctuary-sakura-bridge',
    title: 'Shrine Sanctuary: Sakura Bridge',
    description: 'Vermilion arched wooden bridge suspended over calm waters enveloped by cascading Japanese cherry blossoms.',
    category: 'anime',
    categoryLabel: 'Anime-Inspired',
    mood: 'calm',
    style: 'cel-shaded',
    tags: ['animated', 'sakura', 'bridge', 'japan', 'anime', 'cherry-blossom', 'garden', 'banner'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/sakura-bridge.webp',
    imageUrl: '/assets/animated/sakura-bridge.webp',
    profileThemeHex: '#1A0E18',
    accentHex: '#F43F5E',
    glowHex: '#FDA4AF',
    paletteColors: ['#1A0E18', '#4C0519', '#F43F5E', '#FFE4E6'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 46, zoom: 1.5 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #1A0E18 0%, #4C0519 50%, #F43F5E 100%)',
      bgPattern: 'waves',
      primaryIcon: '⛩️',
      secondaryElements: ['shrine-bridge', 'floating-petals']
    },
    motionConfig: {
      type: 'floating',
      speed: 0.8,
      intensity: 0.6,
      direction: 'down',
      glowColor: '#FDA4AF',
      particleCount: 22
    },
    searchQueries: ['sakura bridge discord banner', 'animated anime bridge banner', 'japanese shrine discord', 'cherry blossom pfp']
  },
  {
    id: 'animated-silver-crown',
    slug: 'monarch-reign-silver-crown',
    title: 'Monarch Reign: Silver Crown',
    description: 'Intricately forged silver gothic crown floating with radiant diamond glints in the deep velvet shadows.',
    category: 'dark',
    categoryLabel: 'Dark & Gothic',
    mood: 'epic',
    style: 'cinematic-motion',
    tags: ['animated', 'crown', 'silver', 'royalty', 'dark', 'gothic', 'monarch', 'banner'],
    isPopular: true,
    isStaffPick: false,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/silver-crown.webp',
    imageUrl: '/assets/animated/silver-crown.webp',
    profileThemeHex: '#0D0E12',
    accentHex: '#CBD5E1',
    glowHex: '#F8FAFC',
    paletteColors: ['#0D0E12', '#1E293B', '#94A3B8', '#F8FAFC'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.8 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0D0E12 0%, #1E293B 50%, #CBD5E1 100%)',
      bgPattern: 'lines',
      primaryIcon: '👑',
      secondaryElements: ['silver-crown', 'diamond-sparkles']
    },
    motionConfig: {
      type: 'ambient-shimmer',
      speed: 0.9,
      intensity: 0.8,
      direction: 'radial',
      glowColor: '#FFFFFF',
      particleCount: 20
    },
    searchQueries: ['crown discord banner', 'animated silver crown', 'gothic monarch pfp', 'dark crown banner']
  },
  {
    id: 'animated-surreal-eyes',
    slug: 'celestial-void-surreal-eyes',
    title: 'Celestial Void: Surreal Eyes',
    description: 'Surreal kaleidoscope of mystical glowing eyes opening within the dark expanse of cosmic nebula mist.',
    category: 'dark',
    categoryLabel: 'Dark & Gothic',
    mood: 'ominous',
    style: 'cinematic-motion',
    tags: ['animated', 'eyes', 'surreal', 'gaze', 'psychedelic', 'void', 'dark', 'banner'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/surreal-eyes.webp',
    imageUrl: '/assets/animated/surreal-eyes.webp',
    profileThemeHex: '#0A0612',
    accentHex: '#EC4899',
    glowHex: '#8B5CF6',
    paletteColors: ['#0A0612', '#2E1065', '#EC4899', '#DDD6FE'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.6 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0A0612 0%, #2E1065 50%, #EC4899 100%)',
      bgPattern: 'dots',
      primaryIcon: '👁️',
      secondaryElements: ['surreal-eyes', 'chromatic-void']
    },
    motionConfig: {
      type: 'iris-glint',
      speed: 1.1,
      intensity: 0.9,
      direction: 'radial',
      glowColor: '#8B5CF6',
      particleCount: 28
    },
    searchQueries: ['surreal eyes discord banner', 'animated eyes banner', 'dark psychedelic discord', 'trippy eyes pfp']
  },
  {
    id: 'animated-wing-shadow',
    slug: 'fallen-seraph-wing-shadow',
    title: 'Fallen Seraph: Wing Shadow',
    description: 'Dark feathered angel wings unfolding gently amidst cold swirling fog and ominous silver twilight.',
    category: 'dark',
    categoryLabel: 'Dark & Gothic',
    mood: 'moody',
    style: 'atmospheric-mist',
    tags: ['animated', 'wings', 'shadow', 'angel', 'fallen', 'dark', 'silhouette', 'banner'],
    isPopular: true,
    isStaffPick: false,
    isNew: true,
    isAnimated: true,
    animatedWebpUrl: '/assets/animated/wing-shadow.webp',
    imageUrl: '/assets/animated/wing-shadow.webp',
    profileThemeHex: '#08090C',
    accentHex: '#64748B',
    glowHex: '#94A3B8',
    paletteColors: ['#08090C', '#1E293B', '#64748B', '#E2E8F0'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 48, zoom: 1.6 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #08090C 0%, #1E293B 50%, #64748B 100%)',
      bgPattern: 'none',
      primaryIcon: '🪶',
      secondaryElements: ['feathered-wings', 'swirling-smoke']
    },
    motionConfig: {
      type: 'smoke',
      speed: 0.7,
      intensity: 0.7,
      direction: 'up',
      glowColor: '#94A3B8',
      particleCount: 20
    },
    searchQueries: ['angel wings discord banner', 'animated wings banner', 'dark angel discord', 'feather shadow pfp']
  },

  // =========================================================================
  // USER SHOWCASE BANNERS (16:9 Normalized Safe-Zone Banners)
  // =========================================================================
  {
    id: 'showcase-spiderman-void',
    slug: 'neon-arachnid-spiderman-void',
    title: 'Neon Arachnid: Void Web Slinger',
    description: 'The masked web-slinger poised against an obsidian void with glowing neon web strands and chromatic street glints.',
    category: 'superhero',
    categoryLabel: 'Superhero & Comic',
    mood: 'epic',
    style: 'cinematic-motion',
    tags: ['spiderman', 'superhero', 'void', 'web', 'neon', 'marvel', 'banner'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    imageUrl: '/assets/showcase/spiderman-void.jpg',
    profileThemeHex: '#090B12',
    accentHex: '#EF4444',
    glowHex: '#38BDF8',
    paletteColors: ['#090B12', '#1E1B4B', '#EF4444', '#38BDF8'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 40, zoom: 1.7 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #090B12 0%, #1E1B4B 50%, #EF4444 100%)',
      bgPattern: 'lines',
      primaryIcon: '🕷️',
      secondaryElements: ['web-strands', 'neon-void']
    },
    motionConfig: {
      type: 'spider-web-glint',
      speed: 0.9,
      intensity: 0.85,
      direction: 'radial',
      glowColor: '#38BDF8',
      particleCount: 28
    },
    searchQueries: ['spiderman discord banner', 'spider-man void banner', 'superhero discord banner', 'spiderman pfp']
  },
  {
    id: 'showcase-stargazing-buddies',
    slug: 'stargazing-buddies-infinite-cosmos',
    title: 'Cosmic Companions: Stargazing Buddies',
    description: 'Two wanderers sitting together beneath an awe-inspiring celestial river of starry constellations and shooting meteors.',
    category: 'lofi',
    categoryLabel: 'Lo-Fi & Chill',
    mood: 'cozy',
    style: 'matte-painting',
    tags: ['stargazing', 'anime', 'friends', 'night-sky', 'stars', 'cosmos', 'aesthetic', 'banner'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    imageUrl: '/assets/showcase/stargazing-buddies.jpg',
    profileThemeHex: '#0C0E1E',
    accentHex: '#60A5FA',
    glowHex: '#FDE047',
    paletteColors: ['#0C0E1E', '#1E2640', '#60A5FA', '#FDE047'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 60, zoom: 1.6 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0C0E1E 0%, #1E2640 50%, #60A5FA 100%)',
      bgPattern: 'stars',
      primaryIcon: '🌌',
      secondaryElements: ['constellations', 'distant-peaks']
    },
    motionConfig: {
      type: 'stargazer-constellations',
      speed: 0.8,
      intensity: 0.75,
      direction: 'wave',
      glowColor: '#FDE047',
      particleCount: 30
    },
    searchQueries: ['stargazing discord banner', 'anime friends starry night banner', 'cozy stars discord banner', 'cosmos pfp']
  },
  {
    id: 'showcase-alpine-cliff-jeep',
    slug: 'alpine-cliff-expedition-jeep',
    title: 'Alpine Peak Expedition: Mountain Ridge 4x4',
    description: 'An expedition 4x4 parked on a dramatic high alpine mountain cliff looking out across misty mountain peaks and windblown clouds.',
    category: 'cinematic',
    categoryLabel: 'Cinematic & Sci-Fi',
    mood: 'epic',
    style: 'cinematic-motion',
    tags: ['alpine', 'mountains', 'jeep', 'adventure', 'cliff', 'expedition', 'nature', 'banner'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    imageUrl: '/assets/showcase/alpine-cliff-jeep.jpg',
    profileThemeHex: '#14181F',
    accentHex: '#94A3B8',
    glowHex: '#E2E8F0',
    paletteColors: ['#14181F', '#273142', '#94A3B8', '#F1F5F9'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 45, y: 55, zoom: 1.6 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #14181F 0%, #273142 50%, #94A3B8 100%)',
      bgPattern: 'lines',
      primaryIcon: '🏔️',
      secondaryElements: ['mountain-ridges', 'alpine-mist']
    },
    motionConfig: {
      type: 'alpine-wind-drift',
      speed: 1.0,
      intensity: 0.8,
      direction: 'right',
      glowColor: '#E2E8F0',
      particleCount: 26
    },
    searchQueries: ['mountain discord banner', 'jeep alpine banner', 'adventure discord banner', 'nature 4x4 pfp']
  },
  {
    id: 'showcase-shinchan-clouds',
    slug: 'nostalgic-summer-cumulus-clouds',
    title: 'Nostalgic Sunburst: Golden Cumulus Clouds',
    description: 'Warm summer afternoon sky filled with towering Ghibli-esque cumulus clouds and gentle sun rays evoking childhood nostalgia.',
    category: 'aesthetic',
    categoryLabel: 'Aesthetic & Pastel',
    mood: 'calm',
    style: 'cel-shaded',
    tags: ['clouds', 'summer', 'nostalgia', 'sky', 'sunburst', 'anime', 'aesthetic', 'banner'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    imageUrl: '/assets/showcase/shinchan-clouds.jpg',
    profileThemeHex: '#1E355B',
    accentHex: '#FBBF24',
    glowHex: '#60A5FA',
    paletteColors: ['#1E355B', '#3B82F6', '#FBBF24', '#FFFBEB'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 45, zoom: 1.5 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #1E355B 0%, #3B82F6 50%, #FBBF24 100%)',
      bgPattern: 'waves',
      primaryIcon: '⛅',
      secondaryElements: ['cumulus-clouds', 'sunburst-rays']
    },
    motionConfig: {
      type: 'cumulus-sunburst',
      speed: 0.85,
      intensity: 0.7,
      direction: 'up',
      glowColor: '#FBBF24',
      particleCount: 24
    },
    searchQueries: ['anime clouds discord banner', 'nostalgic summer sky banner', 'cumulus clouds pfp', 'sunburst discord banner']
  },

  // =========================================================================
  // ANIME & AESTHETIC PROFILE PICTURES (PFPs - Circular Discord Avatars)
  // =========================================================================
  // --- NEW GHIBLI, OCEAN & KAWAII ANIMATED AVATARS (PFPs) ---
  {
    id: 'pfp-totoro-forest-belly-animated',
    slug: 'totoro-forest-belly-avatar-animated',
    title: 'Totoro & Mei: Ghibli Forest Nap',
    description: 'Mei gently resting on the soft breathing belly of sleeping giant Totoro in the enchanted camphor tree forest.',
    category: 'anime',
    categoryLabel: 'Anime-Inspired',
    mood: 'cozy',
    style: 'cel-shaded',
    tags: ['totoro', 'ghibli', 'mei', 'animated', 'forest', 'anime', 'pfp', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isPfp: true,
    isAnimated: true,
    gender: 'unisex',
    pfpImageUrl: '/assets/pfps/totoro-forest-belly-nap-animated.webp',
    profileThemeHex: '#10241A',
    accentHex: '#22C55E',
    glowHex: '#86EFAC',
    paletteColors: ['#09150F', '#10241A', '#16A34A', '#86EFAC'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 40, zoom: 1.5 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #09150F 0%, #10241A 60%, #86EFAC 100%)',
      bgPattern: 'dots',
      primaryIcon: '🍃',
      secondaryElements: ['totoro', 'camphor-leaves']
    },
    motionConfig: {
      type: 'floating',
      speed: 0.6,
      intensity: 0.75,
      glowColor: '#22C55E'
    },
    searchQueries: ['totoro pfp gif', 'ghibli animated avatar', 'cute totoro avatar']
  },
  {
    id: 'pfp-ocean-whale-sunburst-animated',
    slug: 'ocean-whale-sunburst-avatar-animated',
    title: 'Ocean Leviathan: Sunburst Abyss Avatar',
    description: 'Anime swimmer soaring alongside a colossal blue whale into radiant shimmering sunburst ocean water.',
    category: 'anime',
    categoryLabel: 'Anime-Inspired',
    mood: 'epic',
    style: 'cinematic-motion',
    tags: ['whale', 'ocean', 'sunburst', 'animated', 'abyss', 'anime', 'pfp', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isPfp: true,
    isAnimated: true,
    gender: 'unisex',
    pfpImageUrl: '/assets/pfps/ocean-whale-sunburst-abyss-animated.webp',
    profileThemeHex: '#071E36',
    accentHex: '#38BDF8',
    glowHex: '#7DD3FC',
    paletteColors: ['#030F1C', '#071E36', '#0284C7', '#7DD3FC'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 45, y: 50, zoom: 1.4 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #030F1C 0%, #071E36 60%, #7DD3FC 100%)',
      bgPattern: 'waves',
      primaryIcon: '🐋',
      secondaryElements: ['leviathan-whale', 'sunburst-rays']
    },
    motionConfig: {
      type: 'floating',
      speed: 0.9,
      intensity: 0.9,
      glowColor: '#38BDF8'
    },
    searchQueries: ['whale pfp discord', 'anime ocean avatar gif', 'blue whale animated pfp']
  },
  {
    id: 'pfp-kawaii-panda-nap-animated',
    slug: 'kawaii-panda-grass-nap-avatar-animated',
    title: 'Kawaii Panda: Meadow Grass Slumber',
    description: 'Chibi Bubu/Dudu panda relaxing on fresh grass with sweet blushing cheeks and twitching ears.',
    category: 'cute',
    categoryLabel: 'Cute & Cozy',
    mood: 'chill',
    style: 'cel-shaded',
    tags: ['panda', 'kawaii', 'bubu-dudu', 'animated', 'nap', 'cute', 'pfp', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isPfp: true,
    isAnimated: true,
    gender: 'unisex',
    pfpImageUrl: '/assets/pfps/kawaii-panda-grass-nap-animated.webp',
    profileThemeHex: '#1B2E15',
    accentHex: '#84CC16',
    glowHex: '#A3E635',
    paletteColors: ['#0E1A0B', '#1B2E15', '#65A30D', '#BEF264'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.5 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0E1A0B 0%, #1B2E15 60%, #BEF264 100%)',
      bgPattern: 'dots',
      primaryIcon: '🐼',
      secondaryElements: ['sleeping-panda', 'grass']
    },
    motionConfig: {
      type: 'floating',
      speed: 0.7,
      intensity: 0.8,
      glowColor: '#84CC16'
    },
    searchQueries: ['kawaii panda pfp gif', 'bubu dudu nap avatar', 'cute sleeping panda pfp']
  },
  // --- NEW PINTEREST ANIMATED AVATARS (PFPs) ---
  {
    id: 'pfp-floating-calico-cat-animated',
    slug: 'floating-calico-cat-avatar-animated',
    title: 'Floating Calico Cat: Zen Water Ripple',
    description: 'Calico cat floating peacefully on its back in calm ripple pool waters with swimming golden koi fish.',
    category: 'cute',
    categoryLabel: 'Cute & Cozy',
    mood: 'chill',
    style: 'cinematic-motion',
    tags: ['cat', 'calico', 'animated', 'koi', 'cute', 'pfp', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isPfp: true,
    isAnimated: true,
    gender: 'unisex',
    pfpImageUrl: '/assets/pfps/floating-calico-cat-koi-ripples-animated.webp',
    profileThemeHex: '#1A1D2E',
    accentHex: '#60A5FA',
    glowHex: '#F59E0B',
    paletteColors: ['#0F111C', '#1A1D2E', '#3B82F6', '#F59E0B'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.6 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0F111C 0%, #1A1D2E 60%, #F59E0B 100%)',
      bgPattern: 'waves',
      primaryIcon: '🐱',
      secondaryElements: ['calico-cat', 'water-ripples']
    },
    motionConfig: {
      type: 'floating',
      speed: 0.6,
      intensity: 0.7,
      glowColor: '#60A5FA'
    },
    searchQueries: ['calico cat pfp gif', 'floating cat animated pfp', 'cute cat avatar discord']
  },
  {
    id: 'pfp-tpose-dancing-kittens-animated',
    slug: 't-pose-dancing-kittens-avatar-animated',
    title: 'T-Pose Kittens: Dance Party Animated',
    description: 'The viral trio of fluffy kittens performing synchronized side-to-side T-pose dance moves.',
    category: 'cute',
    categoryLabel: 'Cute & Cozy',
    mood: 'energetic',
    style: 'cinematic-motion',
    tags: ['cat', 'kittens', 'dancing', 'tpose', 'animated', 'meme', 'cute', 'pfp', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isPfp: true,
    isAnimated: true,
    gender: 'unisex',
    pfpImageUrl: '/assets/pfps/t-pose-dancing-kittens-animated.webp',
    profileThemeHex: '#1C1D24',
    accentHex: '#F43F5E',
    glowHex: '#E2E8F0',
    paletteColors: ['#0F1014', '#1C1D24', '#DB2777', '#F1F5F9'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 45, zoom: 1.5 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0F1014 0%, #1C1D24 60%, #F1F5F9 100%)',
      bgPattern: 'dots',
      primaryIcon: '💃',
      secondaryElements: ['dancing-kittens', 't-pose']
    },
    motionConfig: {
      type: 'floating',
      speed: 1.2,
      intensity: 0.9,
      glowColor: '#F43F5E'
    },
    searchQueries: ['tpose kittens pfp', 'dancing cat animated avatar', 'chipi chapa cat gif pfp']
  },
  {
    id: 'pfp-kawaii-panda-stroll-animated',
    slug: 'kawaii-panda-stroll-avatar-animated',
    title: 'Kawaii Panda: Cheerful Guitar Stroll',
    description: 'Chibi Bubu/Dudu panda walking happily down a sunny hillside with guitar bag and rosy cheeks.',
    category: 'cute',
    categoryLabel: 'Cute & Cozy',
    mood: 'chill',
    style: 'cinematic-motion',
    tags: ['panda', 'kawaii', 'bubu-dudu', 'animated', 'cute', 'pfp', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isPfp: true,
    isAnimated: true,
    gender: 'unisex',
    pfpImageUrl: '/assets/pfps/kawaii-panda-guitar-stroll-animated.webp',
    profileThemeHex: '#122238',
    accentHex: '#38BDF8',
    glowHex: '#FB923C',
    paletteColors: ['#0A1422', '#122238', '#0284C7', '#FB923C'],
    focalPoint: {
      banner: { x: 55, y: 50 },
      pfp: { x: 55, y: 45, zoom: 1.5 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0A1422 0%, #122238 60%, #FB923C 100%)',
      bgPattern: 'lines',
      primaryIcon: '🐼',
      secondaryElements: ['kawaii-panda', 'guitar-bag']
    },
    motionConfig: {
      type: 'floating',
      speed: 0.9,
      intensity: 0.85,
      glowColor: '#38BDF8'
    },
    searchQueries: ['kawaii panda pfp', 'bubu dudu animated pfp', 'cute panda avatar gif']
  },
  {
    id: 'pfp-minecraft-sunset-cat-animated',
    slug: 'minecraft-sunset-cat-avatar-animated',
    title: 'Minecraft Cat: Sunset Gaze Animated',
    description: 'The iconic staring white cat in front of a warm Minecraft block sunset with shimmering green eyes.',
    category: 'cute',
    categoryLabel: 'Cute & Cozy',
    mood: 'chill',
    style: 'pixel-art',
    tags: ['cat', 'minecraft', 'sunset', 'meme', 'animated', 'cute', 'pfp', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isPfp: true,
    isAnimated: true,
    gender: 'unisex',
    pfpImageUrl: '/assets/pfps/minecraft-sunset-cat-animated.webp',
    profileThemeHex: '#2B140D',
    accentHex: '#F97316',
    glowHex: '#FBBF24',
    paletteColors: ['#170A06', '#2B140D', '#EA580C', '#FBBF24'],
    focalPoint: {
      banner: { x: 35, y: 60 },
      pfp: { x: 35, y: 60, zoom: 1.7 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #170A06 0%, #2B140D 60%, #FBBF24 100%)',
      bgPattern: 'grid',
      primaryIcon: '🐱',
      secondaryElements: ['minecraft-cat', 'block-sunset']
    },
    motionConfig: {
      type: 'light-pulse',
      speed: 0.8,
      intensity: 0.8,
      glowColor: '#FBBF24'
    },
    searchQueries: ['minecraft cat pfp', 'cat staring meme pfp gif', 'cute minecraft cat avatar']
  },
  {
    id: 'pfp-lone-samurai-purple-blossoms-animated',
    slug: 'lone-samurai-purple-blossoms-avatar-animated',
    title: 'Lone Samurai: Purple Blossom Gaze',
    description: 'Lone ronin warrior in traditional straw hat amidst purple wisteria and falling sakura petals.',
    category: 'anime',
    categoryLabel: 'Anime-Inspired',
    mood: 'calm',
    style: 'cinematic-motion',
    tags: ['samurai', 'ronin', 'purple', 'wisteria', 'sakura', 'animated', 'anime', 'pfp', 'gif'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isPfp: true,
    isAnimated: true,
    gender: 'unisex',
    pfpImageUrl: '/assets/pfps/lone-samurai-purple-blossoms-animated.webp',
    profileThemeHex: '#1A0B2E',
    accentHex: '#A855F7',
    glowHex: '#C084FC',
    paletteColors: ['#0D0518', '#1A0B2E', '#9333EA', '#E9D5FF'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 35, zoom: 1.6 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0D0518 0%, #1A0B2E 60%, #C084FC 100%)',
      bgPattern: 'dots',
      primaryIcon: '⚔️',
      secondaryElements: ['ronin-samurai', 'purple-wisteria']
    },
    motionConfig: {
      type: 'particle',
      speed: 0.9,
      intensity: 0.85,
      glowColor: '#C084FC'
    },
    searchQueries: ['samurai pfp anime', 'ronin purple blossoms pfp gif', 'animated samurai avatar']
  },
  // --- 12 ICONIC ANIMATED CAT PROFILE PICTURES (PFPs) ---
  {
    id: 'pfp-bongo-cat-animated',
    slug: 'bongo-cat-beatmaster-animated',
    title: 'Bongo Cat: Beatmaster Animated',
    description: 'The iconic white bongo cat rapidly tapping rhythmic paws with infinite animated beat precision.',
    category: 'cute',
    categoryLabel: 'Cute & Cozy',
    mood: 'chill',
    style: 'cinematic-motion',
    tags: ['cat', 'bongo-cat', 'animated', 'gif', 'cute', 'meme', 'drumming', 'pfp'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isPfp: true,
    isAnimated: true,
    gender: 'unisex',
    pfpImageUrl: '/assets/pfps/bongo-cat-animated.webp',
    profileThemeHex: '#18181B',
    accentHex: '#F59E0B',
    glowHex: '#FCD34D',
    paletteColors: ['#18181B', '#3F3F46', '#F59E0B', '#FEF3C7'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.0 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #18181B 0%, #3F3F46 60%, #F59E0B 100%)',
      bgPattern: 'dots',
      primaryIcon: '🥁',
      secondaryElements: ['bongo-paws', 'musical-notes']
    },
    motionConfig: {
      type: 'pulse',
      speed: 1.2,
      intensity: 0.8,
      glowColor: '#F59E0B'
    },
    searchQueries: ['bongo cat discord pfp', 'animated cat pfp', 'bongo cat gif avatar']
  },
  {
    id: 'pfp-vibing-cat-animated',
    slug: 'vibing-headbob-cat-animated',
    title: 'Vibing Cat: Headbob Groove',
    description: 'The legendary white feline bobbing its head in smooth rhythmic trance to electronic beats.',
    category: 'cute',
    categoryLabel: 'Cute & Cozy',
    mood: 'chill',
    style: 'cinematic-motion',
    tags: ['cat', 'vibing-cat', 'animated', 'gif', 'headbob', 'music', 'chill', 'pfp'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isPfp: true,
    isAnimated: true,
    gender: 'unisex',
    pfpImageUrl: '/assets/pfps/vibing-cat-animated.webp',
    profileThemeHex: '#111827',
    accentHex: '#6366F1',
    glowHex: '#818CF8',
    paletteColors: ['#111827', '#1E1B4B', '#6366F1', '#E0E7FF'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.0 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #111827 0%, #1E1B4B 60%, #6366F1 100%)',
      bgPattern: 'waves',
      primaryIcon: '🎧',
      secondaryElements: ['headbob', 'sound-waves']
    },
    motionConfig: {
      type: 'pulse',
      speed: 1.0,
      intensity: 0.7,
      glowColor: '#6366F1'
    },
    searchQueries: ['vibing cat discord pfp', 'cat headbob gif avatar', 'music cat pfp']
  },
  {
    id: 'pfp-pop-cat-animated',
    slug: 'pop-cat-infinite-o-face',
    title: 'Pop Cat: Infinite POP',
    description: 'Oatmeal the cat rapidly alternating between normal face and the wide mouth POP animation.',
    category: 'cute',
    categoryLabel: 'Cute & Cozy',
    mood: 'chill',
    style: 'cinematic-motion',
    tags: ['cat', 'pop-cat', 'animated', 'gif', 'meme', 'pop', 'funny', 'pfp'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isPfp: true,
    isAnimated: true,
    gender: 'unisex',
    pfpImageUrl: '/assets/pfps/pop-cat-animated.webp',
    profileThemeHex: '#1E1B18',
    accentHex: '#F97316',
    glowHex: '#FDBA74',
    paletteColors: ['#1E1B18', '#431407', '#F97316', '#FFEDD5'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.0 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #1E1B18 0%, #431407 60%, #F97316 100%)',
      bgPattern: 'dots',
      primaryIcon: '👄',
      secondaryElements: ['pop-mouth', 'meme-clicker']
    },
    motionConfig: {
      type: 'pulse',
      speed: 1.3,
      intensity: 0.9,
      glowColor: '#F97316'
    },
    searchQueries: ['pop cat discord pfp', 'pop cat gif', 'animated pop cat avatar']
  },
  {
    id: 'pfp-maxwell-spinning-cat',
    slug: 'maxwell-spinning-cat-dingus',
    title: 'Maxwell: 3D Spinning Cat',
    description: 'The low-poly tuxedo cat Maxwell spinning continuously in 3D retro game space with cheerful vibes.',
    category: 'cute',
    categoryLabel: 'Cute & Cozy',
    mood: 'cozy',
    style: 'cinematic-motion',
    tags: ['cat', 'maxwell', 'spinning-cat', 'animated', 'gif', 'tuxedo-cat', '3d', 'pfp'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isPfp: true,
    isAnimated: true,
    gender: 'unisex',
    pfpImageUrl: '/assets/pfps/maxwell-spinning-cat-animated.webp',
    profileThemeHex: '#101014',
    accentHex: '#10B981',
    glowHex: '#34D399',
    paletteColors: ['#101014', '#064E3B', '#10B981', '#D1FAE5'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.0 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #101014 0%, #064E3B 60%, #10B981 100%)',
      bgPattern: 'grid',
      primaryIcon: '🔄',
      secondaryElements: ['tuxedo-fur', 'spin-axis']
    },
    motionConfig: {
      type: 'pulse',
      speed: 1.1,
      intensity: 0.8,
      glowColor: '#10B981'
    },
    searchQueries: ['maxwell cat pfp', 'spinning cat gif avatar', 'maxwell the cat discord']
  },
  {
    id: 'pfp-cat-typing-laptop',
    slug: 'cat-typing-hacker-speed',
    title: 'Hacker Cat: Turbo Typing',
    description: 'High-velocity kitten hammering furiously on laptop keys solving critical server bugs.',
    category: 'gaming',
    categoryLabel: 'Gaming Arena',
    mood: 'chill',
    style: 'cinematic-motion',
    tags: ['cat', 'typing', 'hacker', 'laptop', 'animated', 'gif', 'gaming', 'tech', 'pfp'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isPfp: true,
    isAnimated: true,
    gender: 'unisex',
    pfpImageUrl: '/assets/pfps/cat-typing-laptop-animated.webp',
    profileThemeHex: '#0B1516',
    accentHex: '#06B6D4',
    glowHex: '#22D3EE',
    paletteColors: ['#0B1516', '#164E63', '#06B6D4', '#CFFAFE'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.0 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0B1516 0%, #164E63 60%, #06B6D4 100%)',
      bgPattern: 'grid',
      primaryIcon: '💻',
      secondaryElements: ['fast-paws', 'keyboard-clicks']
    },
    motionConfig: {
      type: 'speed-streaks',
      speed: 1.3,
      intensity: 0.9,
      glowColor: '#06B6D4'
    },
    searchQueries: ['cat typing discord pfp', 'cat on laptop gif', 'hacker cat pfp']
  },
  {
    id: 'pfp-cool-cat-sunglasses',
    slug: 'cool-cat-boss-sunglasses',
    title: 'Cool Cat: Boss Shades Drop',
    description: 'Smooth swagger feline tipping dark aviator shades in effortless confidence.',
    category: 'aesthetic',
    categoryLabel: 'Aesthetic & Lo-Fi',
    mood: 'chill',
    style: 'cinematic-motion',
    tags: ['cat', 'cool', 'sunglasses', 'shades', 'animated', 'gif', 'swag', 'boss', 'pfp'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isPfp: true,
    isAnimated: true,
    gender: 'unisex',
    pfpImageUrl: '/assets/pfps/cool-cat-sunglasses-animated.webp',
    profileThemeHex: '#181512',
    accentHex: '#EAB308',
    glowHex: '#FACC15',
    paletteColors: ['#181512', '#713F12', '#EAB308', '#FEF08A'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.0 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #181512 0%, #713F12 60%, #EAB308 100%)',
      bgPattern: 'lines',
      primaryIcon: '🕶️',
      secondaryElements: ['black-shades', 'cool-whiskers']
    },
    motionConfig: {
      type: 'pulse',
      speed: 0.9,
      intensity: 0.7,
      glowColor: '#EAB308'
    },
    searchQueries: ['cool cat sunglasses pfp', 'cat wearing glasses gif', 'swag cat discord avatar']
  },
  {
    id: 'pfp-chipi-chapa-cat',
    slug: 'chipi-chipi-chapa-chapa-cat',
    title: 'Chipi Chapa: Spinning Rhythm Cat',
    description: 'The viral festive kitten spinning and head-tilted with pure contagious joy and rhythm.',
    category: 'cute',
    categoryLabel: 'Cute & Cozy',
    mood: 'cozy',
    style: 'cinematic-motion',
    tags: ['cat', 'chipi-chapa', 'spinning', 'animated', 'gif', 'cute', 'viral', 'pfp'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isPfp: true,
    isAnimated: true,
    gender: 'unisex',
    pfpImageUrl: '/assets/pfps/chipi-chapa-cat-animated.webp',
    profileThemeHex: '#1A1118',
    accentHex: '#D946EF',
    glowHex: '#E879F9',
    paletteColors: ['#1A1118', '#701A75', '#D946EF', '#FAE8FF'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.0 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #1A1118 0%, #701A75 60%, #D946EF 100%)',
      bgPattern: 'dots',
      primaryIcon: '✨',
      secondaryElements: ['chipi-spin', 'cute-ears']
    },
    motionConfig: {
      type: 'pulse',
      speed: 1.2,
      intensity: 0.8,
      glowColor: '#D946EF'
    },
    searchQueries: ['chipi chapa cat pfp', 'chipi chipi cat gif avatar', 'dancing cat discord pfp']
  },
  {
    id: 'pfp-anime-catgirl-ears',
    slug: 'anime-neko-catgirl-ears-twitch',
    title: 'Neko Maid: Twitching Cat Ears',
    description: 'Cute anime catgirl with soft animated twitching feline ears and blushing kawaii expression.',
    category: 'anime',
    categoryLabel: 'Anime-Inspired',
    mood: 'cozy',
    style: 'cinematic-motion',
    tags: ['cat', 'neko', 'catgirl', 'anime', 'animated', 'gif', 'cute', 'ears', 'pfp'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isPfp: true,
    isAnimated: true,
    gender: 'female',
    pfpImageUrl: '/assets/pfps/anime-catgirl-ears-animated.webp',
    profileThemeHex: '#23121C',
    accentHex: '#F472B6',
    glowHex: '#FBCFE8',
    paletteColors: ['#23121C', '#831843', '#F472B6', '#FDF2F8'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.0 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #23121C 0%, #831843 60%, #F472B6 100%)',
      bgPattern: 'dots',
      primaryIcon: '🐾',
      secondaryElements: ['neko-ears', 'blush-sparkles']
    },
    motionConfig: {
      type: 'particle',
      speed: 0.8,
      intensity: 0.6,
      glowColor: '#F472B6'
    },
    searchQueries: ['anime catgirl pfp', 'neko maid animated avatar', 'cat ears gif pfp']
  },
  {
    id: 'pfp-blinking-aesthetic-kitten',
    slug: 'blinking-aesthetic-kawaii-kitten',
    title: 'Blinking Kitten: Aesthetic Gaze',
    description: 'Adorable fluffy baby kitten blinking luminous glassy eyes with gentle breathing motion.',
    category: 'cute',
    categoryLabel: 'Cute & Cozy',
    mood: 'cozy',
    style: 'cinematic-motion',
    tags: ['cat', 'kitten', 'blinking', 'cute', 'animated', 'gif', 'fluffy', 'pfp'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isPfp: true,
    isAnimated: true,
    gender: 'unisex',
    pfpImageUrl: '/assets/pfps/blinking-kitten-animated.webp',
    profileThemeHex: '#191512',
    accentHex: '#FB923C',
    glowHex: '#FDBA74',
    paletteColors: ['#191512', '#7C2D12', '#FB923C', '#FFEDD5'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.0 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #191512 0%, #7C2D12 60%, #FB923C 100%)',
      bgPattern: 'dots',
      primaryIcon: '🐱',
      secondaryElements: ['blinking-eyes', 'baby-whiskers']
    },
    motionConfig: {
      type: 'particle',
      speed: 0.7,
      intensity: 0.5,
      glowColor: '#FB923C'
    },
    searchQueries: ['blinking kitten pfp', 'cute cat animated pfp', 'kawaii kitten avatar']
  },
  {
    id: 'pfp-peach-goma-cuddle',
    slug: 'peach-goma-cute-cuddle-cats',
    title: 'Peach & Goma: Cute Cuddle Hug',
    description: 'The beloved animated chibi cat pair Peach and Goma sharing a warm tender snuggle.',
    category: 'cute',
    categoryLabel: 'Cute & Cozy',
    mood: 'cozy',
    style: 'cinematic-motion',
    tags: ['cat', 'peach-goma', 'cuddle', 'cute', 'animated', 'gif', 'chibi', 'matching', 'pfp'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isPfp: true,
    isAnimated: true,
    gender: 'unisex',
    pfpImageUrl: '/assets/pfps/peach-goma-cat-animated.webp',
    profileThemeHex: '#23151D',
    accentHex: '#FB7185',
    glowHex: '#FDA4AF',
    paletteColors: ['#23151D', '#881337', '#FB7185', '#FFE4E6'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.0 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #23151D 0%, #881337 60%, #FB7185 100%)',
      bgPattern: 'dots',
      primaryIcon: '💕',
      secondaryElements: ['peach-goma', 'cuddle-hug']
    },
    motionConfig: {
      type: 'particle',
      speed: 0.8,
      intensity: 0.6,
      glowColor: '#FB7185'
    },
    searchQueries: ['peach and goma pfp', 'peach goma animated cat', 'cute matching cat pfp']
  },
  {
    id: 'pfp-cozy-loaf-cat',
    slug: 'cozy-loaf-sleeping-purr-cat',
    title: 'Cozy Loaf: Peaceful Purr Cat',
    description: 'Plump round ginger cat tucked into a perfect bread loaf with gentle breathing animation.',
    category: 'cute',
    categoryLabel: 'Cute & Cozy',
    mood: 'cozy',
    style: 'cinematic-motion',
    tags: ['cat', 'loaf', 'sleeping', 'cozy', 'animated', 'gif', 'ginger-cat', 'chill', 'pfp'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isPfp: true,
    isAnimated: true,
    gender: 'unisex',
    pfpImageUrl: '/assets/pfps/cozy-loaf-cat-animated.webp',
    profileThemeHex: '#181512',
    accentHex: '#D97706',
    glowHex: '#FBBF24',
    paletteColors: ['#181512', '#78350F', '#D97706', '#FEF3C7'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.0 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #181512 0%, #78350F 60%, #D97706 100%)',
      bgPattern: 'waves',
      primaryIcon: '🍞',
      secondaryElements: ['cat-loaf', 'peaceful-sleep']
    },
    motionConfig: {
      type: 'windblown-grass',
      speed: 0.6,
      intensity: 0.5,
      glowColor: '#D97706'
    },
    searchQueries: ['cat loaf pfp', 'sleeping cat animated pfp', 'cozy cat discord avatar']
  },
  {
    id: 'pfp-cyberpunk-neon-cat',
    slug: 'cyberpunk-neon-visor-cat',
    title: 'Cyber Neko: Neon Visor Cat',
    description: 'Futuristic cyber feline sporting a holographic visor with animated glowing neon data pulses.',
    category: 'cyberpunk',
    categoryLabel: 'Cyberpunk',
    mood: 'futuristic',
    style: 'cinematic-motion',
    tags: ['cat', 'cyberpunk', 'neon', 'visor', 'animated', 'gif', 'scifi', 'gaming', 'pfp'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isPfp: true,
    isAnimated: true,
    gender: 'unisex',
    pfpImageUrl: '/assets/pfps/cyberpunk-neon-cat-animated.webp',
    profileThemeHex: '#0B1320',
    accentHex: '#38BDF8',
    glowHex: '#7DD3FC',
    paletteColors: ['#0B1320', '#0369A1', '#38BDF8', '#E0F2FE'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.0 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0B1320 0%, #0369A1 60%, #38BDF8 100%)',
      bgPattern: 'grid',
      primaryIcon: '⚡',
      secondaryElements: ['cyber-visor', 'neon-whiskers']
    },
    motionConfig: {
      type: 'speed-streaks',
      speed: 1.1,
      intensity: 0.8,
      glowColor: '#38BDF8'
    },
    searchQueries: ['cyberpunk cat pfp', 'neon cat animated avatar', 'scifi cat gif discord']
  },

  // --- 8 AESTHETIC GUYS & GYM FITNESS PROFILE PICTURES (PFPs) ---
  {
    id: 'pfp-gym-mirror-selfie-male',
    slug: 'gym-mirror-selfie-monochrome-male',
    title: 'Gym Mirror: Monochrome Athletic Chiaroscuro',
    description: 'High-contrast black & white gym mirror selfie, faceless smartphone framing with chiseled athletic physique in moody shadows.',
    category: 'aesthetic',
    categoryLabel: 'Aesthetic & Lo-Fi',
    mood: 'moody',
    style: 'minimalist',
    tags: ['male', 'gym', 'fitness', 'mirror-selfie', 'monochrome', 'athletic', 'chiaroscuro', 'guys', 'pfp'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isPfp: true,
    gender: 'male',
    pfpImageUrl: '/assets/pfps/gym-mirror-selfie-male.jpg',
    profileThemeHex: '#0D0E11',
    accentHex: '#CBD5E1',
    glowHex: '#94A3B8',
    paletteColors: ['#0D0E11', '#1E293B', '#CBD5E1', '#F8FAFC'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.0 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0D0E11 0%, #1E293B 60%, #CBD5E1 100%)',
      bgPattern: 'lines',
      primaryIcon: '💪',
      secondaryElements: ['smartphone-mirror', 'athletic-shadow']
    },
    motionConfig: {
      type: 'particle',
      speed: 0.7,
      intensity: 0.5,
      glowColor: '#CBD5E1'
    },
    searchQueries: ['gym mirror selfie pfp', 'aesthetic guy discord avatar', 'male gym pfp b&w']
  },
  {
    id: 'pfp-gym-shadow-silhouette-male',
    slug: 'gym-shadow-workout-silhouette-male',
    title: 'Iron Silhouette: Gym Shadow Workout',
    description: 'Athletic male silhouette backlit by moody industrial gym lighting, high-contrast monochrome fitness aesthetic.',
    category: 'aesthetic',
    categoryLabel: 'Aesthetic & Lo-Fi',
    mood: 'moody',
    style: 'minimalist',
    tags: ['male', 'gym', 'fitness', 'silhouette', 'monochrome', 'athletic', 'shadow', 'guys', 'pfp'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isPfp: true,
    gender: 'male',
    pfpImageUrl: '/assets/pfps/gym-shadow-silhouette-male.jpg',
    profileThemeHex: '#0A0C10',
    accentHex: '#94A3B8',
    glowHex: '#64748B',
    paletteColors: ['#0A0C10', '#1E293B', '#94A3B8', '#E2E8F0'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.0 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0A0C10 0%, #1E293B 60%, #94A3B8 100%)',
      bgPattern: 'lines',
      primaryIcon: '🏋️',
      secondaryElements: ['iron-shadow', 'gym-lights']
    },
    motionConfig: {
      type: 'pulse',
      speed: 0.8,
      intensity: 0.6,
      glowColor: '#94A3B8'
    },
    searchQueries: ['gym silhouette male pfp', 'dark aesthetic guy discord pfp', 'fitness silhouette avatar']
  },
  {
    id: 'pfp-monochrome-jawline-shadow-male',
    slug: 'monochrome-jawline-noir-portrait-male',
    title: 'Noir Jawline: Chiaroscuro Shadow Portrait',
    description: 'Chiseled jawline defined by dramatic half-light shadows, moody cinema noir aesthetic with deep midnight background.',
    category: 'aesthetic',
    categoryLabel: 'Aesthetic & Lo-Fi',
    mood: 'mysterious',
    style: 'minimalist',
    tags: ['male', 'jawline', 'noir', 'portrait', 'monochrome', 'shadow', 'chiaroscuro', 'guys', 'pfp'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isPfp: true,
    gender: 'male',
    pfpImageUrl: '/assets/pfps/monochrome-jawline-shadow-male.jpg',
    profileThemeHex: '#0C0D10',
    accentHex: '#E2E8F0',
    glowHex: '#CBD5E1',
    paletteColors: ['#0C0D10', '#1F2937', '#E2E8F0', '#FFFFFF'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 48, zoom: 1.0 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0C0D10 0%, #1F2937 60%, #E2E8F0 100%)',
      bgPattern: 'lines',
      primaryIcon: '🕶️',
      secondaryElements: ['sharp-jawline', 'noir-shadow']
    },
    motionConfig: {
      type: 'particle',
      speed: 0.7,
      intensity: 0.5,
      glowColor: '#E2E8F0'
    },
    searchQueries: ['jawline shadow male pfp', 'noir guy discord pfp', 'chiseled jawline avatar']
  },
  {
    id: 'pfp-hoodie-faceless-shadow-male',
    slug: 'hoodie-faceless-shadow-mirror-male',
    title: 'Dark Hoodie: Faceless Shadow Reflection',
    description: 'Oversized dark streetwear hoodie casting deep shadows over the eyes, faceless moody mirror selfie angle.',
    category: 'aesthetic',
    categoryLabel: 'Aesthetic & Lo-Fi',
    mood: 'moody',
    style: 'minimalist',
    tags: ['male', 'hoodie', 'faceless', 'streetwear', 'shadow', 'mirror-selfie', 'dark', 'guys', 'pfp'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isPfp: true,
    gender: 'male',
    pfpImageUrl: '/assets/pfps/hoodie-faceless-shadow-male.jpg',
    profileThemeHex: '#0B0C0E',
    accentHex: '#64748B',
    glowHex: '#94A3B8',
    paletteColors: ['#0B0C0E', '#1E293B', '#64748B', '#CBD5E1'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.0 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0B0C0E 0%, #1E293B 60%, #64748B 100%)',
      bgPattern: 'lines',
      primaryIcon: '🧥',
      secondaryElements: ['dark-hoodie', 'faceless-angle']
    },
    motionConfig: {
      type: 'particle',
      speed: 0.7,
      intensity: 0.5,
      glowColor: '#64748B'
    },
    searchQueries: ['faceless hoodie guy pfp', 'dark hoodie male avatar', 'streetwear shadow pfp']
  },
  {
    id: 'pfp-streetwear-night-flash-male',
    slug: 'streetwear-night-flash-photography-male',
    title: 'Night Flash: Urban Streetwear Shadow',
    description: 'Direct-flash nighttime street photography with high-contrast shadows and dark oversized bomber silhouette.',
    category: 'aesthetic',
    categoryLabel: 'Aesthetic & Lo-Fi',
    mood: 'chill',
    style: 'minimalist',
    tags: ['male', 'streetwear', 'flash', 'night', 'urban', 'bomber', 'monochrome', 'guys', 'pfp'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isPfp: true,
    gender: 'male',
    pfpImageUrl: '/assets/pfps/streetwear-night-flash-male.jpg',
    profileThemeHex: '#0F1014',
    accentHex: '#94A3B8',
    glowHex: '#E2E8F0',
    paletteColors: ['#0F1014', '#1E293B', '#94A3B8', '#F1F5F9'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.0 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0F1014 0%, #1E293B 60%, #94A3B8 100%)',
      bgPattern: 'lines',
      primaryIcon: '📸',
      secondaryElements: ['direct-flash', 'street-silhouette']
    },
    motionConfig: {
      type: 'particle',
      speed: 0.7,
      intensity: 0.5,
      glowColor: '#94A3B8'
    },
    searchQueries: ['night flash guy pfp', 'streetwear male discord pfp', 'urban shadow guy avatar']
  },
  {
    id: 'pfp-gym-weights-silhouette-male',
    slug: 'gym-weights-dramatic-rim-light-male',
    title: 'Iron Rig: Heavy Weights Side Rim Light',
    description: 'Dramatic athletic male profile beside iron dumbbell rack with razor-sharp rim lighting on athletic shoulders.',
    category: 'aesthetic',
    categoryLabel: 'Aesthetic & Lo-Fi',
    mood: 'epic',
    style: 'minimalist',
    tags: ['male', 'gym', 'weights', 'fitness', 'rim-light', 'athletic', 'monochrome', 'guys', 'pfp'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isPfp: true,
    gender: 'male',
    pfpImageUrl: '/assets/pfps/gym-weights-silhouette-male.jpg',
    profileThemeHex: '#090B0E',
    accentHex: '#64748B',
    glowHex: '#CBD5E1',
    paletteColors: ['#090B0E', '#1E293B', '#64748B', '#F8FAFC'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.0 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #090B0E 0%, #1E293B 60%, #64748B 100%)',
      bgPattern: 'lines',
      primaryIcon: '🏋️',
      secondaryElements: ['dumbbell-rack', 'rim-light']
    },
    motionConfig: {
      type: 'pulse',
      speed: 0.8,
      intensity: 0.6,
      glowColor: '#64748B'
    },
    searchQueries: ['gym weights male pfp', 'iron athlete discord avatar', 'dark fitness guy pfp']
  },
  {
    id: 'pfp-cyber-hoodie-neon-male',
    slug: 'cyber-hoodie-neon-blue-rim-male',
    title: 'Cyber Techwear: Neon Cyan Rim Shadow',
    description: 'Stealth techwear hoodie with subtle cold cyan and midnight blue rim lighting cutting through darkness.',
    category: 'cyberpunk',
    categoryLabel: 'Cyberpunk',
    mood: 'futuristic',
    style: 'minimalist',
    tags: ['male', 'techwear', 'cyberpunk', 'neon', 'hoodie', 'cyan', 'shadow', 'guys', 'pfp'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isPfp: true,
    gender: 'male',
    pfpImageUrl: '/assets/pfps/cyber-hoodie-neon-male.jpg',
    profileThemeHex: '#08111A',
    accentHex: '#0EA5E9',
    glowHex: '#38BDF8',
    paletteColors: ['#08111A', '#0369A1', '#0EA5E9', '#E0F2FE'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.0 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #08111A 0%, #0369A1 60%, #0EA5E9 100%)',
      bgPattern: 'grid',
      primaryIcon: '⚡',
      secondaryElements: ['cyan-rim', 'techwear-hood']
    },
    motionConfig: {
      type: 'speed-streaks',
      speed: 1.0,
      intensity: 0.7,
      glowColor: '#0EA5E9'
    },
    searchQueries: ['techwear guy pfp', 'cyberpunk hoodie male avatar', 'neon rim guy discord pfp']
  },
  {
    id: 'pfp-vintage-35mm-indie-male',
    slug: 'vintage-35mm-indie-sleaze-gaze-male',
    title: '35mm Film: Vintage Indie Monochrome Gaze',
    description: 'Raw analog 35mm film grain, moody gaze and high-contrast silver halide shadows with vintage edge.',
    category: 'aesthetic',
    categoryLabel: 'Aesthetic & Lo-Fi',
    mood: 'chill',
    style: 'minimalist',
    tags: ['male', '35mm', 'vintage', 'film', 'analog', 'monochrome', 'indie', 'guys', 'pfp'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isPfp: true,
    gender: 'male',
    pfpImageUrl: '/assets/pfps/vintage-35mm-indie-male.jpg',
    profileThemeHex: '#101114',
    accentHex: '#94A3B8',
    glowHex: '#E2E8F0',
    paletteColors: ['#101114', '#1F2937', '#94A3B8', '#F3F4F6'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.0 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #101114 0%, #1F2937 60%, #94A3B8 100%)',
      bgPattern: 'lines',
      primaryIcon: '🎞️',
      secondaryElements: ['film-grain', 'indie-gaze']
    },
    motionConfig: {
      type: 'particle',
      speed: 0.7,
      intensity: 0.5,
      glowColor: '#94A3B8'
    },
    searchQueries: ['35mm film male pfp', 'vintage indie guy avatar', 'analog grain male discord pfp']
  },
  {
    id: 'pfp-golden-wall-silhouette',
    slug: 'golden-wall-shadow-silhouette',
    title: 'Golden Wall: Warm Shadow Silhouette',
    description: 'Minimalist shadow silhouette cast upon a warm golden-amber wall in late afternoon sunlight.',
    category: 'aesthetic',
    categoryLabel: 'Aesthetic & Pastel',
    mood: 'moody',
    style: 'matte-painting',
    tags: ['female', 'aesthetic', 'shadow', 'silhouette', 'golden-hour', 'indie', 'moody', 'pfp', 'baddie'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isPfp: true,
    gender: 'female',
    pfpImageUrl: '/assets/pfps/golden-wall-silhouette.jpg',
    profileThemeHex: '#241C14',
    accentHex: '#D8B676',
    glowHex: '#F5D59A',
    paletteColors: ['#241C14', '#3E2E20', '#D8B676', '#F5E4C4'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.0 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #241C14 0%, #3E2E20 50%, #D8B676 100%)',
      bgPattern: 'lines',
      primaryIcon: '🌅',
      secondaryElements: ['shadow-silhouette', 'golden-light']
    },
    motionConfig: {
      type: 'ambient-shimmer',
      speed: 0.8,
      intensity: 0.6,
      glowColor: '#D8B676'
    },
    searchQueries: ['shadow silhouette pfp', 'golden hour female pfp', 'dirty pfp discord', 'baddie pfp discord', 'aesthetic shadow avatar']
  },
  {
    id: 'pfp-sunglasses-chic-baddie',
    slug: 'sunglasses-chic-streetwear-baddie',
    title: 'Streetwear Chic: Sunglasses Low Angle',
    description: 'Low-angle aesthetic portrait in sleek rectangular sunglasses and white tank top under harsh natural sunlight.',
    category: 'aesthetic',
    categoryLabel: 'Aesthetic & Pastel',
    mood: 'chill',
    style: 'lo-fi-grain',
    tags: ['female', 'aesthetic', 'sunglasses', 'streetwear', 'baddie', 'indie', 'shades', 'pfp'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isPfp: true,
    gender: 'female',
    pfpImageUrl: '/assets/pfps/sunglasses-chic-baddie.jpg',
    profileThemeHex: '#1E2026',
    accentHex: '#B4BCC8',
    glowHex: '#E2E8F0',
    paletteColors: ['#14161A', '#1E2026', '#8A94A4', '#E2E8F0'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 40, zoom: 1.1 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #14161A 0%, #1E2026 60%, #B4BCC8 100%)',
      bgPattern: 'dots',
      primaryIcon: '🕶️',
      secondaryElements: ['rectangular-shades', 'direct-sunlight']
    },
    motionConfig: {
      type: 'ambient-shimmer',
      speed: 0.7,
      intensity: 0.5,
      glowColor: '#B4BCC8'
    },
    searchQueries: ['sunglasses female pfp', 'baddie pfp discord', 'streetwear girl avatar', 'dirty pfp discord', 'edgy female pfp']
  },
  {
    id: 'pfp-indie-sunlight-lounge',
    slug: 'indie-sunlight-cozy-lounge',
    title: 'Indie Afternoon: Sunlit Lounge',
    description: 'Relaxed bedroom indie aesthetic with golden sunbeams and shadows cast over a casual lounge setting.',
    category: 'aesthetic',
    categoryLabel: 'Aesthetic & Pastel',
    mood: 'cozy',
    style: 'lo-fi-grain',
    tags: ['female', 'aesthetic', 'indie', 'sunlight', 'bedroom', 'chill', 'baddie', 'pfp'],
    isPopular: true,
    isStaffPick: false,
    isNew: true,
    isPfp: true,
    gender: 'female',
    pfpImageUrl: '/assets/pfps/indie-sunlight-lounge.jpg',
    profileThemeHex: '#221C16',
    accentHex: '#C8A882',
    glowHex: '#EAD6BD',
    paletteColors: ['#181410', '#2A221C', '#C8A882', '#F2E8DC'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.0 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #181410 0%, #2A221C 60%, #C8A882 100%)',
      bgPattern: 'lines',
      primaryIcon: '💻',
      secondaryElements: ['sunbeams', 'indie-lounge']
    },
    motionConfig: {
      type: 'ambient-shimmer',
      speed: 0.6,
      intensity: 0.4,
      glowColor: '#C8A882'
    },
    searchQueries: ['indie girl pfp', 'sunlight bedroom pfp', 'baddie pfp discord', 'cozy aesthetic avatar']
  },
  {
    id: 'pfp-golden-hour-solitude-female',
    slug: 'golden-hour-rooftop-solitude-female',
    title: 'Golden Hour Solitude: Rooftop Profile',
    description: 'Cinematic rooftop profile in an oversized wool coat bathed in glowing amber sunset light.',
    category: 'aesthetic',
    categoryLabel: 'Aesthetic & Pastel',
    mood: 'ethereal',
    style: 'cinematic-motion',
    tags: ['female', 'aesthetic', 'sunset', 'golden-hour', 'rooftop', 'moody', 'solitude', 'pfp'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isPfp: true,
    gender: 'female',
    pfpImageUrl: '/assets/pfps/golden-hour-solitude-female.jpg',
    profileThemeHex: '#281C10',
    accentHex: '#F59E0B',
    glowHex: '#FDE68A',
    paletteColors: ['#1C140C', '#281C10', '#D97706', '#FEF3C7'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 55, y: 35, zoom: 1.2 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #1C140C 0%, #281C10 60%, #F59E0B 100%)',
      bgPattern: 'dots',
      primaryIcon: '🌆',
      secondaryElements: ['sunset-skyline', 'amber-glow']
    },
    motionConfig: {
      type: 'ambient-shimmer',
      speed: 0.75,
      intensity: 0.6,
      glowColor: '#F59E0B'
    },
    searchQueries: ['golden hour female pfp', 'sunset rooftop pfp', 'aesthetic girl discord avatar', 'moody sunset profile']
  },
  {
    id: 'pfp-streetwear-leather-shades',
    slug: 'streetwear-leather-jacket-shades',
    title: '90s Indie Sleaze: Leather & Shades',
    description: 'Vintage 90s direct flash portrait of a model with dark sunglasses, layered silver chains, and worn biker leather.',
    category: 'dark',
    categoryLabel: 'Dark & Gothic',
    mood: 'moody',
    style: 'lo-fi-grain',
    tags: ['female', 'aesthetic', 'streetwear', 'leather', 'shades', 'indie-sleaze', '90s', 'baddie', 'pfp'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isPfp: true,
    gender: 'female',
    pfpImageUrl: '/assets/pfps/streetwear-leather-shades.jpg',
    profileThemeHex: '#101416',
    accentHex: '#4A5568',
    glowHex: '#A0AEC0',
    paletteColors: ['#0A0D0E', '#101416', '#4A5568', '#E2E8F0'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 35, zoom: 1.3 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0A0D0E 0%, #101416 60%, #4A5568 100%)',
      bgPattern: 'lines',
      primaryIcon: '⚡',
      secondaryElements: ['biker-leather', 'flash-grain']
    },
    motionConfig: {
      type: 'ambient-shimmer',
      speed: 0.8,
      intensity: 0.5,
      glowColor: '#A0AEC0'
    },
    searchQueries: ['indie sleaze pfp', 'baddie discord avatar', 'leather jacket girl pfp', 'dirty pfp discord', 'flash photography pfp']
  },
  {
    id: 'pfp-crimson-rim-silhouette',
    slug: 'crimson-rim-mystic-silhouette',
    title: 'Crimson Reverie: Ambient Rim Silhouette',
    description: 'Artistic side profile silhouette framed by a glowing circular crimson red backlight and warm amber atmosphere.',
    category: 'dark',
    categoryLabel: 'Dark & Gothic',
    mood: 'mysterious',
    style: 'atmospheric-mist',
    tags: ['female', 'aesthetic', 'silhouette', 'crimson', 'neon', 'dark', 'red', 'profile', 'pfp'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isPfp: true,
    gender: 'female',
    pfpImageUrl: '/assets/pfps/crimson-rim-silhouette.jpg',
    profileThemeHex: '#18080A',
    accentHex: '#DC2626',
    glowHex: '#F87171',
    paletteColors: ['#100406', '#18080A', '#B91C1C', '#FCA5A5'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 45, zoom: 1.1 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #100406 0%, #18080A 60%, #DC2626 100%)',
      bgPattern: 'dots',
      primaryIcon: '🩸',
      secondaryElements: ['crimson-halo', 'profile-silhouette']
    },
    motionConfig: {
      type: 'ambient-shimmer',
      speed: 0.9,
      intensity: 0.7,
      glowColor: '#DC2626'
    },
    searchQueries: ['crimson silhouette pfp', 'red dark aesthetic pfp', 'moody female silhouette discord', 'vampire baddie pfp']
  },
  {
    id: 'pfp-venetian-blinds-shadow',
    slug: 'venetian-blinds-golden-shadow',
    title: 'Venetian Shadows: Golden Wall Silhouette',
    description: 'Artistic silhouette framed against golden cream wall with linear venetian blind shadows and sunlit wooden floors.',
    category: 'aesthetic',
    categoryLabel: 'Aesthetic & Pastel',
    mood: 'calm',
    style: 'matte-painting',
    tags: ['female', 'aesthetic', 'shadow', 'blinds', 'golden-hour', 'silhouette', 'minimalist', 'pfp'],
    isPopular: false,
    isStaffPick: false,
    isNew: true,
    isPfp: true,
    gender: 'female',
    pfpImageUrl: '/assets/pfps/venetian-blinds-shadow.jpg',
    profileThemeHex: '#221A12',
    accentHex: '#D4A373',
    glowHex: '#FAEDCD',
    paletteColors: ['#18120C', '#221A12', '#D4A373', '#FAEDCD'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 65, y: 45, zoom: 1.4 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #18120C 0%, #221A12 60%, #D4A373 100%)',
      bgPattern: 'lines',
      primaryIcon: '🪟',
      secondaryElements: ['venetian-blinds', 'wall-shadows']
    },
    motionConfig: {
      type: 'ambient-shimmer',
      speed: 0.7,
      intensity: 0.4,
      glowColor: '#D4A373'
    },
    searchQueries: ['blinds shadow pfp', 'wall silhouette girl avatar', 'aesthetic shadow pfp discord', 'minimalist golden avatar']
  },
  {
    id: 'pfp-analog-film-shades-gaze',
    slug: 'analog-film-35mm-shades-gaze',
    title: '35mm Analog: Sunlit Sunglasses Gaze',
    description: '35mm analog film frame capturing an upward gaze with dark rectangular sunglasses and silver lock pendant under raw sunlight.',
    category: 'aesthetic',
    categoryLabel: 'Aesthetic & Pastel',
    mood: 'moody',
    style: 'lo-fi-grain',
    tags: ['female', 'aesthetic', '35mm', 'analog', 'sunglasses', 'baddie', 'indie', 'film-grain', 'pfp'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isPfp: true,
    gender: 'female',
    pfpImageUrl: '/assets/pfps/analog-film-shades-gaze.jpg',
    profileThemeHex: '#201A14',
    accentHex: '#C49E72',
    glowHex: '#E8CFB0',
    paletteColors: ['#16120E', '#201A14', '#C49E72', '#F5E6D3'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 35, zoom: 1.3 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #16120E 0%, #201A14 60%, #C49E72 100%)',
      bgPattern: 'dots',
      primaryIcon: '📷',
      secondaryElements: ['analog-border', '35mm-grain']
    },
    motionConfig: {
      type: 'ambient-shimmer',
      speed: 0.8,
      intensity: 0.5,
      glowColor: '#C49E72'
    },
    searchQueries: ['35mm film pfp', 'analog sunglasses girl pfp', 'indie baddie pfp', 'dirty pfp discord', 'vintage female avatar']
  },
  {
    id: 'pfp-sunglasses-chic-monochrome',
    slug: 'sunglasses-chic-noir-monochrome',
    title: 'Noir Shades: High Contrast Monochrome',
    description: 'Striking black and white film noir portrait with dark rectangular glasses and dramatic contrast lighting.',
    category: 'dark',
    categoryLabel: 'Dark & Gothic',
    mood: 'mysterious',
    style: 'lo-fi-grain',
    tags: ['female', 'aesthetic', 'monochrome', 'black-and-white', 'noir', 'sunglasses', 'baddie', 'pfp'],
    isPopular: false,
    isStaffPick: true,
    isNew: true,
    isPfp: true,
    gender: 'female',
    pfpImageUrl: '/assets/pfps/sunglasses-chic-monochrome.jpg',
    profileThemeHex: '#101014',
    accentHex: '#E2E8F0',
    glowHex: '#FFFFFF',
    paletteColors: ['#08080A', '#101014', '#94A3B8', '#F8FAFC'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 40, zoom: 1.1 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #08080A 0%, #101014 60%, #E2E8F0 100%)',
      bgPattern: 'lines',
      primaryIcon: '🕶️',
      secondaryElements: ['noir-contrast', 'film-grain']
    },
    motionConfig: {
      type: 'ambient-shimmer',
      speed: 0.7,
      intensity: 0.5,
      glowColor: '#FFFFFF'
    },
    searchQueries: ['black and white sunglasses pfp', 'monochrome baddie pfp', 'noir girl discord avatar', 'dark aesthetic pfp']
  },
  {
    id: 'pfp-golden-wall-monochrome',
    slug: 'monochrome-wall-shadow-silhouette',
    title: 'Noir Silhouette: Minimalist Wall Projection',
    description: 'High-contrast black and white shadow projection on clean textured wall, pure minimalist chiaroscuro form.',
    category: 'dark',
    categoryLabel: 'Dark & Gothic',
    mood: 'mysterious',
    style: 'matte-painting',
    tags: ['female', 'aesthetic', 'shadow', 'silhouette', 'monochrome', 'black-and-white', 'minimalist', 'pfp'],
    isPopular: false,
    isStaffPick: false,
    isNew: true,
    isPfp: true,
    gender: 'female',
    pfpImageUrl: '/assets/pfps/golden-wall-monochrome.jpg',
    profileThemeHex: '#0C0C10',
    accentHex: '#CBD5E1',
    glowHex: '#F1F5F9',
    paletteColors: ['#060608', '#0C0C10', '#64748B', '#F1F5F9'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.0 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #060608 0%, #0C0C10 60%, #CBD5E1 100%)',
      bgPattern: 'dots',
      primaryIcon: '🌑',
      secondaryElements: ['shadow-form', 'high-contrast']
    },
    motionConfig: {
      type: 'ambient-shimmer',
      speed: 0.6,
      intensity: 0.4,
      glowColor: '#CBD5E1'
    },
    searchQueries: ['black and white shadow pfp', 'monochrome silhouette discord', 'chiaroscuro female pfp', 'dirty pfp discord']
  },
  {
    id: 'pfp-streetwear-noir-bw',
    slug: 'streetwear-leather-noir-flash',
    title: 'Midnight Biker: Direct Flash B&W',
    description: 'Raw monochrome direct-flash photography of model with dark sunglasses, leather jacket, and industrial grit.',
    category: 'dark',
    categoryLabel: 'Dark & Gothic',
    mood: 'moody',
    style: 'lo-fi-grain',
    tags: ['female', 'aesthetic', 'black-and-white', 'monochrome', 'leather', 'shades', 'indie', 'baddie', 'pfp'],
    isPopular: true,
    isStaffPick: false,
    isNew: true,
    isPfp: true,
    gender: 'female',
    pfpImageUrl: '/assets/pfps/streetwear-noir-bw.jpg',
    profileThemeHex: '#0E0E12',
    accentHex: '#94A3B8',
    glowHex: '#E2E8F0',
    paletteColors: ['#08080A', '#0E0E12', '#475569', '#E2E8F0'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 35, zoom: 1.3 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #08080A 0%, #0E0E12 60%, #94A3B8 100%)',
      bgPattern: 'lines',
      primaryIcon: '🖤',
      secondaryElements: ['flash-monochrome', 'leather-texture']
    },
    motionConfig: {
      type: 'ambient-shimmer',
      speed: 0.7,
      intensity: 0.5,
      glowColor: '#E2E8F0'
    },
    searchQueries: ['baddie black and white pfp', 'monochrome streetwear girl pfp', 'direct flash pfp discord', 'indie sleaze avatar']
  },
  {
    id: 'pfp-twilight-violet-silhouette',
    slug: 'twilight-violet-ambient-silhouette',
    title: 'Twilight Violet: Neon Mist Silhouette',
    description: 'Intimate side profile framed by deep twilight violet backlighting and soft atmospheric mist.',
    category: 'aesthetic',
    categoryLabel: 'Aesthetic & Pastel',
    mood: 'ethereal',
    style: 'atmospheric-mist',
    tags: ['female', 'aesthetic', 'silhouette', 'violet', 'purple', 'neon', 'twilight', 'pfp'],
    isPopular: true,
    isStaffPick: false,
    isNew: true,
    isPfp: true,
    gender: 'female',
    pfpImageUrl: '/assets/pfps/twilight-violet-silhouette.jpg',
    profileThemeHex: '#120A1E',
    accentHex: '#A855F7',
    glowHex: '#C084FC',
    paletteColors: ['#0A0612', '#120A1E', '#7E22CE', '#E9D5FF'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 45, zoom: 1.1 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0A0612 0%, #120A1E 60%, #A855F7 100%)',
      bgPattern: 'dots',
      primaryIcon: '💜',
      secondaryElements: ['violet-halo', 'mist-glow']
    },
    motionConfig: {
      type: 'ambient-shimmer',
      speed: 0.8,
      intensity: 0.6,
      glowColor: '#A855F7'
    },
    searchQueries: ['purple silhouette pfp', 'violet aesthetic discord avatar', 'neon female silhouette pfp', 'ethereal girl pfp']
  },
  {
    id: 'pfp-butterfly-noir-female',
    slug: 'butterfly-noir-motion-blur-female',
    title: 'Butterfly Noir: Motion Blur Aesthetic',
    description: 'Moody monochrome portrait of an anime woman with flutter of dark butterflies and cinematic motion blur.',
    category: 'aesthetic',
    categoryLabel: 'Aesthetic & Pastel',
    mood: 'moody',
    style: 'atmospheric-mist',
    tags: ['female', 'aesthetic', 'anime', 'monochrome', 'dark', 'butterfly', 'pfp'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isPfp: true,
    gender: 'female',
    pfpImageUrl: '/assets/pfps/butterfly-noir-female.png',
    profileThemeHex: '#0A0A0E',
    accentHex: '#E2E8F0',
    glowHex: '#94A3B8',
    paletteColors: ['#0A0A0E', '#181820', '#94A3B8', '#F8FAFC'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.0 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0A0A0E 0%, #181820 60%, #E2E8F0 100%)',
      bgPattern: 'dots',
      primaryIcon: '🦋',
      secondaryElements: ['motion-blur', 'dark-butterflies']
    },
    motionConfig: {
      type: 'ambient-shimmer',
      speed: 0.7,
      intensity: 0.5,
      glowColor: '#94A3B8'
    },
    searchQueries: ['butterfly noir pfp', 'monochrome female anime pfp', 'aesthetic dark girl discord avatar', 'motion blur pfp']
  },
  {
    id: 'pfp-butterfly-noir-woman',
    slug: 'noir-butterfly-ethereal-silhouette',
    title: 'Noir Butterfly: Ethereal Silhouette',
    description: 'Mysterious noir silhouette portrait with glowing butterfly wings and soft atmospheric shadows.',
    category: 'aesthetic',
    categoryLabel: 'Aesthetic & Pastel',
    mood: 'mysterious',
    style: 'atmospheric-mist',
    tags: ['female', 'aesthetic', 'anime', 'monochrome', 'dark', 'butterfly', 'silhouette', 'pfp'],
    isPopular: true,
    isStaffPick: false,
    isNew: true,
    isPfp: true,
    gender: 'female',
    pfpImageUrl: '/assets/pfps/butterfly-noir-woman.webp',
    profileThemeHex: '#0B0C10',
    accentHex: '#CBD5E1',
    glowHex: '#64748B',
    paletteColors: ['#0B0C10', '#1F2833', '#CBD5E1', '#FFFFFF'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.0 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0B0C10 0%, #1F2833 60%, #CBD5E1 100%)',
      bgPattern: 'dots',
      primaryIcon: '🦋',
      secondaryElements: ['butterfly-shadows']
    },
    motionConfig: {
      type: 'ambient-shimmer',
      speed: 0.6,
      intensity: 0.5,
      glowColor: '#64748B'
    },
    searchQueries: ['butterfly noir woman pfp', 'dark aesthetic female discord pfp', 'noir anime pfp']
  },
  {
    id: 'pfp-anime-girl-windblown',
    slug: 'windblown-echo-anime-heroine',
    title: 'Windblown Echo: Anime Heroine',
    description: 'Dynamic anime heroine portrait with wind-tousled hair gazing thoughtfully against a twilight backdrop.',
    category: 'anime',
    categoryLabel: 'Anime-Inspired',
    mood: 'chill',
    style: 'cel-shaded',
    tags: ['female', 'aesthetic', 'anime', 'windblown', 'girl', 'pfp'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isPfp: true,
    gender: 'female',
    pfpImageUrl: '/assets/pfps/anime-girl-windblown.webp',
    profileThemeHex: '#161922',
    accentHex: '#93C5FD',
    glowHex: '#BFDBFE',
    paletteColors: ['#161922', '#232A3B', '#93C5FD', '#F8FAFC'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.0 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #161922 0%, #232A3B 50%, #93C5FD 100%)',
      bgPattern: 'lines',
      primaryIcon: '🍃',
      secondaryElements: ['flowing-hair']
    },
    motionConfig: {
      type: 'windblown-grass',
      speed: 0.8,
      intensity: 0.6,
      glowColor: '#93C5FD'
    },
    searchQueries: ['anime girl windblown pfp', 'aesthetic female anime discord pfp', 'anime girl avatar']
  },
  {
    id: 'pfp-angel-wings-girl',
    slug: 'seraphic-grace-angel-wings',
    title: 'Seraphic Grace: Angel Wings',
    description: 'Ethereal anime maiden adorned with luminous angel wings and delicate divine feathered accents.',
    category: 'aesthetic',
    categoryLabel: 'Aesthetic & Pastel',
    mood: 'ethereal',
    style: 'atmospheric-mist',
    tags: ['female', 'aesthetic', 'anime', 'angel', 'wings', 'pfp', 'monochrome'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isPfp: true,
    gender: 'female',
    pfpImageUrl: '/assets/pfps/angel-wings-girl.webp',
    profileThemeHex: '#12111A',
    accentHex: '#DDD6FE',
    glowHex: '#EDE9FE',
    paletteColors: ['#12111A', '#252136', '#DDD6FE', '#FFFFFF'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.0 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #12111A 0%, #252136 50%, #DDD6FE 100%)',
      bgPattern: 'stars',
      primaryIcon: '🪽',
      secondaryElements: ['angel-feathers']
    },
    motionConfig: {
      type: 'floating',
      speed: 0.7,
      intensity: 0.5,
      glowColor: '#DDD6FE'
    },
    searchQueries: ['angel girl pfp', 'aesthetic female angel discord avatar', 'angel wings anime pfp']
  },
  {
    id: 'pfp-shark-hoodie-girl',
    slug: 'shark-hoodie-streetwear-anime',
    title: 'Shark Hoodie: Streetwear Anime',
    description: 'Cozy streetwear anime girl wearing an oversized shark jaw hoodie with nonchalant attitude.',
    category: 'anime',
    categoryLabel: 'Anime-Inspired',
    mood: 'cozy',
    style: 'cel-shaded',
    tags: ['female', 'aesthetic', 'anime', 'shark-hoodie', 'streetwear', 'cozy', 'pfp'],
    isPopular: true,
    isStaffPick: false,
    isNew: true,
    isPfp: true,
    gender: 'female',
    pfpImageUrl: '/assets/pfps/shark-hoodie-girl.webp',
    profileThemeHex: '#1A1B26',
    accentHex: '#7AA2F7',
    glowHex: '#BB9AF7',
    paletteColors: ['#1A1B26', '#292E42', '#7AA2F7', '#C0CAF5'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.0 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #1A1B26 0%, #292E42 50%, #7AA2F7 100%)',
      bgPattern: 'dots',
      primaryIcon: '🦈',
      secondaryElements: ['shark-hoodie']
    },
    motionConfig: {
      type: 'particle',
      speed: 0.8,
      intensity: 0.5,
      glowColor: '#7AA2F7'
    },
    searchQueries: ['shark hoodie anime girl pfp', 'streetwear anime female pfp', 'cozy girl discord pfp']
  },
  {
    id: 'pfp-pink-catgirl',
    slug: 'sakura-neko-pink-catgirl',
    title: 'Sakura Neko: Pink Catgirl',
    description: 'Pastel sakura catgirl with adorable feline ears, blush pink hair, and gentle sweet expression.',
    category: 'cute',
    categoryLabel: 'Cute & Whimsical',
    mood: 'chill',
    style: 'cel-shaded',
    tags: ['female', 'aesthetic', 'anime', 'catgirl', 'pink', 'kawaii', 'cute', 'pfp'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isPfp: true,
    gender: 'female',
    pfpImageUrl: '/assets/pfps/pink-catgirl.webp',
    profileThemeHex: '#22111D',
    accentHex: '#F472B6',
    glowHex: '#FBCFE8',
    paletteColors: ['#22111D', '#3E1C36', '#F472B6', '#FFF1F2'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.0 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #22111D 0%, #3E1C36 50%, #F472B6 100%)',
      bgPattern: 'dots',
      primaryIcon: '🐱',
      secondaryElements: ['cat-ears', 'cherry-blossoms']
    },
    motionConfig: {
      type: 'floating',
      speed: 0.7,
      intensity: 0.5,
      glowColor: '#F472B6'
    },
    searchQueries: ['pink catgirl pfp', 'cute anime girl discord avatar', 'kawaii catgirl pfp', 'sakura neko']
  },
  {
    id: 'pfp-white-hair-halo-girl',
    slug: 'halo-maiden-white-hair-divinity',
    title: 'Halo Maiden: White Hair Divinity',
    description: 'Divine anime girl with silken white locks, a glowing celestial halo, and deep thoughtful gaze.',
    category: 'aesthetic',
    categoryLabel: 'Aesthetic & Pastel',
    mood: 'ethereal',
    style: 'cel-shaded',
    tags: ['female', 'aesthetic', 'anime', 'white-hair', 'halo', 'angelic', 'pfp'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isPfp: true,
    gender: 'female',
    pfpImageUrl: '/assets/pfps/white-hair-halo-girl.webp',
    profileThemeHex: '#10121D',
    accentHex: '#C7D2FE',
    glowHex: '#FFFFFF',
    paletteColors: ['#10121D', '#1E2337', '#C7D2FE', '#FFFFFF'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.0 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #10121D 0%, #1E2337 50%, #C7D2FE 100%)',
      bgPattern: 'stars',
      primaryIcon: '😇',
      secondaryElements: ['celestial-halo']
    },
    motionConfig: {
      type: 'ambient-shimmer',
      speed: 0.8,
      intensity: 0.6,
      glowColor: '#C7D2FE'
    },
    searchQueries: ['white hair anime girl pfp', 'halo girl discord pfp', 'divine aesthetic anime avatar']
  },
  {
    id: 'pfp-red-hair-gaze',
    slug: 'scarlet-gaze-crimson-stare',
    title: 'Scarlet Gaze: Crimson Stare',
    description: 'Striking anime heroine with vivid red hair and an intense, mesmerizing ruby gaze that commands attention.',
    category: 'anime',
    categoryLabel: 'Anime-Inspired',
    mood: 'moody',
    style: 'cel-shaded',
    tags: ['female', 'aesthetic', 'anime', 'red-hair', 'crimson', 'gaze', 'dark', 'pfp'],
    isPopular: true,
    isStaffPick: false,
    isNew: true,
    isPfp: true,
    gender: 'female',
    pfpImageUrl: '/assets/pfps/red-hair-gaze.webp',
    profileThemeHex: '#1F0A0E',
    accentHex: '#EF4444',
    glowHex: '#F87171',
    paletteColors: ['#1F0A0E', '#3F121C', '#EF4444', '#FEE2E2'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.0 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #1F0A0E 0%, #3F121C 50%, #EF4444 100%)',
      bgPattern: 'lines',
      primaryIcon: '👁️',
      secondaryElements: ['crimson-hair']
    },
    motionConfig: {
      type: 'crimson-chakra',
      speed: 0.9,
      intensity: 0.7,
      glowColor: '#EF4444'
    },
    searchQueries: ['red hair anime girl pfp', 'crimson gaze discord pfp', 'makima style pfp', 'scarlet eyes avatar']
  },
  {
    id: 'pfp-krul-tepes-vampire',
    slug: 'crimson-noble-vampire-queen',
    title: 'Crimson Noble: Vampire Queen',
    description: 'Aristocratic vampire princess with pink twintails, ruby crimson eyes, and royal gothic bat accents.',
    category: 'anime',
    categoryLabel: 'Anime-Inspired',
    mood: 'ominous',
    style: 'cel-shaded',
    tags: ['female', 'aesthetic', 'anime', 'vampire', 'goth', 'pink-hair', 'krul', 'pfp'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isPfp: true,
    gender: 'female',
    pfpImageUrl: '/assets/pfps/krul-tepes-vampire.webp',
    profileThemeHex: '#1B0B13',
    accentHex: '#E11D48',
    glowHex: '#FB7185',
    paletteColors: ['#1B0B13', '#3B1225', '#E11D48', '#FFE4E6'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.0 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #1B0B13 0%, #3B1225 50%, #E11D48 100%)',
      bgPattern: 'dots',
      primaryIcon: '🦇',
      secondaryElements: ['vampire-fangs', 'ruby-eyes']
    },
    motionConfig: {
      type: 'crimson-chakra',
      speed: 1.0,
      intensity: 0.8,
      glowColor: '#E11D48'
    },
    searchQueries: ['vampire queen pfp', 'krul tepes discord pfp', 'anime vampire girl pfp', 'goth anime pfp']
  },
  {
    id: 'pfp-sukuna-red',
    slug: 'curse-king-sukuna-malevolent-crimson',
    title: 'Curse King Sukuna: Malevolent Crimson',
    description: 'The King of Curses grinning menacingly with dark tribal curse markings and burning crimson eyes.',
    category: 'anime',
    categoryLabel: 'Anime-Inspired',
    mood: 'epic',
    style: 'cel-shaded',
    tags: ['sukuna', 'jjk', 'anime', 'curse', 'crimson', 'male', 'shrine', 'pfp'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isPfp: true,
    gender: 'male',
    pfpImageUrl: '/assets/pfps/sukuna-red.webp',
    profileThemeHex: '#1F0808',
    accentHex: '#DC2626',
    glowHex: '#F87171',
    paletteColors: ['#1F0808', '#450A0A', '#DC2626', '#FEE2E2'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.0 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #1F0808 0%, #450A0A 50%, #DC2626 100%)',
      bgPattern: 'lines',
      primaryIcon: '🩸',
      secondaryElements: ['curse-marks', 'malevolent-shrine']
    },
    motionConfig: {
      type: 'crimson-chakra',
      speed: 1.1,
      intensity: 0.9,
      glowColor: '#DC2626'
    },
    searchQueries: ['sukuna discord pfp', 'sukuna red pfp', 'jjk anime avatar', 'curse king pfp']
  },
  {
    id: 'pfp-kaneki-ghoul',
    slug: 'one-eyed-ghoul-centipede-awakening',
    title: 'One-Eyed Ghoul: Centipede Awakening',
    description: 'White-haired ghoul with black leather mask, cracked kakugan eye, and terrifying centipede kagune glow.',
    category: 'dark',
    categoryLabel: 'Dark & Gothic',
    mood: 'ominous',
    style: 'cel-shaded',
    tags: ['kaneki', 'tokyo-ghoul', 'anime', 'dark', 'ghoul', 'kakugan', 'male', 'pfp'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isPfp: true,
    gender: 'male',
    pfpImageUrl: '/assets/pfps/kaneki-ghoul.webp',
    profileThemeHex: '#12080C',
    accentHex: '#E11D48',
    glowHex: '#FB7185',
    paletteColors: ['#12080C', '#270F1A', '#E11D48', '#FFFFFF'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.0 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #12080C 0%, #270F1A 50%, #E11D48 100%)',
      bgPattern: 'dots',
      primaryIcon: '🩸',
      secondaryElements: ['ghoul-mask', 'kakugan-eye']
    },
    motionConfig: {
      type: 'crimson-chakra',
      speed: 1.0,
      intensity: 0.85,
      glowColor: '#E11D48'
    },
    searchQueries: ['kaneki pfp', 'tokyo ghoul discord pfp', 'ghoul mask avatar', 'dark anime male pfp']
  },
  {
    id: 'pfp-killua-salute',
    slug: 'lightning-assassin-killua-salute',
    title: 'Lightning Assassin: Killua Salute',
    description: 'Spiky silver-haired prodigy assassin giving a cheeky, charismatic salute with electric aura sparks.',
    category: 'anime',
    categoryLabel: 'Anime-Inspired',
    mood: 'energetic',
    style: 'cel-shaded',
    tags: ['killua', 'hxh', 'anime', 'assassin', 'lightning', 'male', 'pfp'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isPfp: true,
    gender: 'male',
    pfpImageUrl: '/assets/pfps/killua-salute.webp',
    profileThemeHex: '#0C1024',
    accentHex: '#60A5FA',
    glowHex: '#93C5FD',
    paletteColors: ['#0C1024', '#1E2B58', '#60A5FA', '#EFF6FF'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.0 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0C1024 0%, #1E2B58 50%, #60A5FA 100%)',
      bgPattern: 'circuit',
      primaryIcon: '⚡',
      secondaryElements: ['lightning-sparks']
    },
    motionConfig: {
      type: 'light-pulse',
      speed: 1.2,
      intensity: 0.8,
      glowColor: '#60A5FA'
    },
    searchQueries: ['killua salute pfp', 'killua zoldyck discord pfp', 'hxh anime avatar', 'lightning boy pfp']
  },
  {
    id: 'pfp-luffy-shades',
    slug: 'straw-hat-swagger-luffy-shades',
    title: 'Straw Hat Swagger: Luffy Retro Shades',
    description: 'The future King of the Pirates rocking cool retro aviator sunglasses with his iconic toothy grin.',
    category: 'anime',
    categoryLabel: 'Anime-Inspired',
    mood: 'chill',
    style: 'cel-shaded',
    tags: ['luffy', 'one-piece', 'anime', 'shades', 'straw-hat', 'male', 'pfp'],
    isPopular: true,
    isStaffPick: false,
    isNew: true,
    isPfp: true,
    gender: 'male',
    pfpImageUrl: '/assets/pfps/luffy-shades.webp',
    profileThemeHex: '#26130B',
    accentHex: '#F59E0B',
    glowHex: '#FDE68A',
    paletteColors: ['#26130B', '#4D2816', '#F59E0B', '#FEF3C7'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.0 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #26130B 0%, #4D2816 50%, #F59E0B 100%)',
      bgPattern: 'dots',
      primaryIcon: '🍖',
      secondaryElements: ['sunglasses', 'straw-hat']
    },
    motionConfig: {
      type: 'ambient-shimmer',
      speed: 0.8,
      intensity: 0.6,
      glowColor: '#F59E0B'
    },
    searchQueries: ['luffy sunglasses pfp', 'luffy shades discord pfp', 'one piece avatar', 'straw hat pfp']
  },
  {
    id: 'pfp-moonlit-ronin',
    slug: 'blade-of-night-moonlit-ronin',
    title: 'Moonlit Ronin: Blade of Night',
    description: 'Wandering samurai wearing traditional straw kasa hat beneath an icy full moon with drawn katana.',
    category: 'anime',
    categoryLabel: 'Anime-Inspired',
    mood: 'epic',
    style: 'cel-shaded',
    tags: ['ronin', 'samurai', 'katana', 'anime', 'moon', 'male', 'pfp'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isPfp: true,
    gender: 'male',
    pfpImageUrl: '/assets/pfps/moonlit-ronin.webp',
    profileThemeHex: '#0B0F19',
    accentHex: '#E2E8F0',
    glowHex: '#38BDF8',
    paletteColors: ['#0B0F19', '#1E293B', '#CBD5E1', '#FFFFFF'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.0 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0B0F19 0%, #1E293B 50%, #CBD5E1 100%)',
      bgPattern: 'lines',
      primaryIcon: '⚔️',
      secondaryElements: ['kasa-hat', 'katana']
    },
    motionConfig: {
      type: 'windblown-grass',
      speed: 0.9,
      intensity: 0.7,
      glowColor: '#38BDF8'
    },
    searchQueries: ['ronin pfp discord', 'samurai avatar discord', 'moonlit ronin pfp', 'anime swordsman pfp']
  },
  {
    id: 'pfp-moonlit-back',
    slug: 'nocturnal-vagabond-moonlit-back',
    title: 'Nocturnal Vagabond: Moonlit Back',
    description: 'Solitary wanderer standing with back turned against a massive silver moon, exuding quiet stoicism.',
    category: 'anime',
    categoryLabel: 'Anime-Inspired',
    mood: 'moody',
    style: 'cel-shaded',
    tags: ['silhouette', 'anime', 'moon', 'solitude', 'aesthetic', 'male', 'pfp'],
    isPopular: false,
    isStaffPick: false,
    isNew: true,
    isPfp: true,
    gender: 'male',
    pfpImageUrl: '/assets/pfps/moonlit-back.webp',
    profileThemeHex: '#0D111A',
    accentHex: '#94A3B8',
    glowHex: '#E2E8F0',
    paletteColors: ['#0D111A', '#1E293B', '#94A3B8', '#F1F5F9'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.0 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0D111A 0%, #1E293B 50%, #94A3B8 100%)',
      bgPattern: 'dots',
      primaryIcon: '🌕',
      secondaryElements: ['full-moon', 'silhouette']
    },
    motionConfig: {
      type: 'parallax',
      speed: 0.7,
      intensity: 0.5,
      glowColor: '#E2E8F0'
    },
    searchQueries: ['moonlit back anime pfp', 'stoic wanderer discord avatar', 'anime back profile pfp']
  },
  {
    id: 'pfp-hooded-shade',
    slug: 'shadow-stalker-hooded-phantom',
    title: 'Shadow Stalker: Hooded Phantom',
    description: 'Enigmatic figure shrouded in deep obsidian cowl, obscured in heavy mist and dark cinematic vignetting.',
    category: 'dark',
    categoryLabel: 'Dark & Gothic',
    mood: 'mysterious',
    style: 'atmospheric-mist',
    tags: ['dark', 'hood', 'phantom', 'mystery', 'shadow', 'unisex', 'pfp'],
    isPopular: false,
    isStaffPick: false,
    isNew: true,
    isPfp: true,
    gender: 'unisex',
    pfpImageUrl: '/assets/pfps/hooded-shade.webp',
    profileThemeHex: '#0A0B0E',
    accentHex: '#475569',
    glowHex: '#64748B',
    paletteColors: ['#0A0B0E', '#181B22', '#475569', '#94A3B8'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.0 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0A0B0E 0%, #181B22 60%, #475569 100%)',
      bgPattern: 'none',
      primaryIcon: '👤',
      secondaryElements: ['shadow-cowl']
    },
    motionConfig: {
      type: 'smoke',
      speed: 0.6,
      intensity: 0.6,
      glowColor: '#64748B'
    },
    searchQueries: ['hooded shadow pfp', 'dark aesthetic discord pfp', 'mysterious hood avatar']
  },
  {
    id: 'pfp-red-eyed-hood',
    slug: 'crimson-vision-hooded-wraith',
    title: 'Crimson Vision: Hooded Wraith',
    description: 'Dark cowl revealing a single piercing scarlet eye burning brightly through thick midnight shadows.',
    category: 'dark',
    categoryLabel: 'Dark & Gothic',
    mood: 'ominous',
    style: 'cel-shaded',
    tags: ['dark', 'hood', 'crimson-eye', 'wraith', 'anime', 'unisex', 'pfp'],
    isPopular: true,
    isStaffPick: false,
    isNew: true,
    isPfp: true,
    gender: 'unisex',
    pfpImageUrl: '/assets/pfps/red-eyed-hood.webp',
    profileThemeHex: '#1A090D',
    accentHex: '#DC2626',
    glowHex: '#EF4444',
    paletteColors: ['#1A090D', '#3B121A', '#DC2626', '#FCA5A5'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.0 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #1A090D 0%, #3B121A 50%, #DC2626 100%)',
      bgPattern: 'dots',
      primaryIcon: '👁️',
      secondaryElements: ['crimson-eye', 'shadow-hood']
    },
    motionConfig: {
      type: 'crimson-chakra',
      speed: 0.9,
      intensity: 0.8,
      glowColor: '#EF4444'
    },
    searchQueries: ['red eye hood pfp', 'hooded anime pfp with red eye', 'dark discord avatar']
  },
  {
    id: 'pfp-red-ring-eye',
    slug: 'ocular-sigil-red-ring-iris',
    title: 'Ocular Sigil: Red Ring Iris',
    description: 'Intricate cursed eye with concentric red ocular rings radiating ominous energy in total darkness.',
    category: 'dark',
    categoryLabel: 'Dark & Gothic',
    mood: 'mysterious',
    style: 'cel-shaded',
    tags: ['eye', 'sharingan', 'rinnegan', 'anime', 'red-eye', 'unisex', 'pfp'],
    isPopular: true,
    isStaffPick: false,
    isNew: true,
    isPfp: true,
    gender: 'unisex',
    pfpImageUrl: '/assets/pfps/red-ring-eye.webp',
    profileThemeHex: '#140608',
    accentHex: '#B91C1C',
    glowHex: '#EF4444',
    paletteColors: ['#140608', '#2F0D12', '#B91C1C', '#F87171'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.0 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #140608 0%, #2F0D12 50%, #B91C1C 100%)',
      bgPattern: 'dots',
      primaryIcon: '🧿',
      secondaryElements: ['ocular-rings']
    },
    motionConfig: {
      type: 'iris-glint',
      speed: 1.0,
      intensity: 0.85,
      glowColor: '#EF4444'
    },
    searchQueries: ['red ring eye pfp', 'sharingan style pfp', 'cursed eye discord avatar']
  },
  {
    id: 'pfp-moonlit-skull',
    slug: 'lunar-ossuary-moonlit-skull',
    title: 'Lunar Ossuary: Moonlit Skull',
    description: 'Silver-lit bleached human skull resting serenely under the cold glow of a midnight moon.',
    category: 'horror',
    categoryLabel: 'Horror & Gothic',
    mood: 'ominous',
    style: 'cinematic-motion',
    tags: ['skull', 'goth', 'horror', 'moonlit', 'bones', 'dark', 'unisex', 'pfp'],
    isPopular: false,
    isStaffPick: false,
    isNew: true,
    isPfp: true,
    gender: 'unisex',
    pfpImageUrl: '/assets/pfps/moonlit-skull.webp',
    profileThemeHex: '#0D0E12',
    accentHex: '#94A3B8',
    glowHex: '#E2E8F0',
    paletteColors: ['#0D0E12', '#1E293B', '#94A3B8', '#FFFFFF'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.0 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0D0E12 0%, #1E293B 50%, #94A3B8 100%)',
      bgPattern: 'lines',
      primaryIcon: '💀',
      secondaryElements: ['moonlit-bones']
    },
    motionConfig: {
      type: 'ambient-shimmer',
      speed: 0.6,
      intensity: 0.5,
      glowColor: '#94A3B8'
    },
    searchQueries: ['skull pfp discord', 'gothic skull avatar', 'moonlit skull discord pfp']
  },
  {
    id: 'pfp-sauron-crown',
    slug: 'dark-lord-spired-crown',
    title: 'Dark Lord: Spired Crown',
    description: 'Barbed iron crown of the Dark Lord forged with jagged spikes piercing through volcanic ember smoke.',
    category: 'fantasy',
    categoryLabel: 'Fantasy & Magic',
    mood: 'ominous',
    style: '3d-render',
    tags: ['crown', 'lord-of-the-rings', 'dark-lord', 'fantasy', 'iron', 'unisex', 'pfp'],
    isPopular: false,
    isStaffPick: false,
    isNew: true,
    isPfp: true,
    gender: 'unisex',
    pfpImageUrl: '/assets/pfps/sauron-crown.webp',
    profileThemeHex: '#140D09',
    accentHex: '#EA580C',
    glowHex: '#F59E0B',
    paletteColors: ['#140D09', '#2E190E', '#EA580C', '#FDE68A'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.0 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #140D09 0%, #2E190E 50%, #EA580C 100%)',
      bgPattern: 'lines',
      primaryIcon: '👑',
      secondaryElements: ['iron-spikes', 'ember-glow']
    },
    motionConfig: {
      type: 'inferno-shimmer',
      speed: 0.9,
      intensity: 0.8,
      glowColor: '#EA580C'
    },
    searchQueries: ['sauron crown pfp', 'dark lord iron crown discord avatar', 'gothic fantasy crown pfp']
  },
  {
    id: 'pfp-stussy-night',
    slug: 'stussy-midnight-streetwear-icon',
    title: 'Stussy Midnight: Streetwear Icon',
    description: 'Iconic streetwear aesthetic silhouette with 8-ball and signature script under moody neon streetlights.',
    category: 'aesthetic',
    categoryLabel: 'Aesthetic & Pastel',
    mood: 'chill',
    style: 'cel-shaded',
    tags: ['streetwear', 'stussy', '8ball', 'skate', 'aesthetic', 'fashion', 'unisex', 'pfp'],
    isPopular: true,
    isStaffPick: false,
    isNew: true,
    isPfp: true,
    gender: 'unisex',
    pfpImageUrl: '/assets/pfps/stussy-night.webp',
    profileThemeHex: '#0D0E14',
    accentHex: '#818CF8',
    glowHex: '#C7D2FE',
    paletteColors: ['#0D0E14', '#1A1C29', '#818CF8', '#FFFFFF'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.0 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0D0E14 0%, #1A1C29 50%, #818CF8 100%)',
      bgPattern: 'dots',
      primaryIcon: '🎱',
      secondaryElements: ['streetwear-logo']
    },
    motionConfig: {
      type: 'ambient-shimmer',
      speed: 0.7,
      intensity: 0.5,
      glowColor: '#818CF8'
    },
    searchQueries: ['stussy pfp discord', 'streetwear discord avatar', '8ball aesthetic pfp']
  },
  {
    id: 'pfp-red-bull-f1',
    slug: 'apex-speed-red-bull-f1-helmet',
    title: 'Apex Speed: Red Bull Racing Helmet',
    description: 'Matte midnight blue Formula 1 racing helmet featuring the fierce charging bull emblem and aerodynamic visor.',
    category: 'gaming',
    categoryLabel: 'Gaming & Esports',
    mood: 'energetic',
    style: '3d-render',
    tags: ['f1', 'racing', 'red-bull', 'motorsport', 'helmet', 'speed', 'unisex', 'pfp'],
    isPopular: true,
    isStaffPick: false,
    isNew: true,
    isPfp: true,
    gender: 'unisex',
    pfpImageUrl: '/assets/pfps/red-bull-f1.webp',
    profileThemeHex: '#0A1024',
    accentHex: '#EF4444',
    glowHex: '#FBBF24',
    paletteColors: ['#0A1024', '#172554', '#EF4444', '#FBBF24'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.0 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0A1024 0%, #172554 50%, #EF4444 100%)',
      bgPattern: 'lines',
      primaryIcon: '🏎️',
      secondaryElements: ['racing-helmet', 'bull-logo']
    },
    motionConfig: {
      type: 'particle',
      speed: 1.2,
      intensity: 0.8,
      glowColor: '#EF4444'
    },
    searchQueries: ['red bull f1 pfp', 'formula 1 helmet discord pfp', 'racing avatar discord']
  },
  {
    id: 'pfp-cool-squirtle',
    slug: 'squirtle-squad-pointed-shades',
    title: 'Squirtle Squad: Pointed Shades',
    description: 'Legendary Squirtle Squad leader sporting sleek pointed triangular sunglasses and an unapologetic swagger.',
    category: 'cute',
    categoryLabel: 'Cute & Whimsical',
    mood: 'chill',
    style: 'cel-shaded',
    tags: ['squirtle', 'pokemon', 'sunglasses', 'squirtle-squad', 'cute', 'retro', 'unisex', 'pfp'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isPfp: true,
    gender: 'unisex',
    pfpImageUrl: '/assets/pfps/cool-squirtle.webp',
    profileThemeHex: '#091726',
    accentHex: '#38BDF8',
    glowHex: '#BAE6FD',
    paletteColors: ['#091726', '#143657', '#38BDF8', '#F0F9FF'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.0 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #091726 0%, #143657 50%, #38BDF8 100%)',
      bgPattern: 'waves',
      primaryIcon: '🐢',
      secondaryElements: ['pointed-shades', 'water-bubbles']
    },
    motionConfig: {
      type: 'parallax',
      speed: 0.8,
      intensity: 0.6,
      glowColor: '#38BDF8'
    },
    searchQueries: ['squirtle squad pfp', 'cool squirtle with sunglasses', 'pokemon discord pfp']
  },
  {
    id: 'pfp-cat-mugshot',
    slug: 'felonious-feline-cat-mugshot',
    title: 'Felonious Feline: Cat Mugshot',
    description: 'Mischievous tuxedo cat posing front-and-center in a hilarious police mugshot with unapologetic gaze.',
    category: 'cute',
    categoryLabel: 'Cute & Whimsical',
    mood: 'chill',
    style: 'cel-shaded',
    tags: ['cat', 'mugshot', 'funny', 'meme', 'cute', 'feline', 'unisex', 'pfp'],
    isPopular: true,
    isStaffPick: false,
    isNew: true,
    isPfp: true,
    gender: 'unisex',
    pfpImageUrl: '/assets/pfps/cat-mugshot.webp',
    profileThemeHex: '#1A1714',
    accentHex: '#E2E8F0',
    glowHex: '#FBBF24',
    paletteColors: ['#1A1714', '#2E2822', '#E2E8F0', '#FFFFFF'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.0 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #1A1714 0%, #2E2822 50%, #E2E8F0 100%)',
      bgPattern: 'lines',
      primaryIcon: '😼',
      secondaryElements: ['height-chart', 'mugshot-placard']
    },
    motionConfig: {
      type: 'ambient-shimmer',
      speed: 0.7,
      intensity: 0.5,
      glowColor: '#FBBF24'
    },
    searchQueries: ['cat mugshot pfp', 'funny cat pfp discord', 'meme cat avatar']
  },
  {
    id: 'pfp-bandana-cat',
    slug: 'outlaw-whisker-bandana-cat',
    title: 'Outlaw Whisker: Bandana Cat',
    description: 'Tough tabby cat sporting a red outlaw paisley bandana ready for high-stakes alleyway adventures.',
    category: 'cute',
    categoryLabel: 'Cute & Whimsical',
    mood: 'chill',
    style: 'cel-shaded',
    tags: ['cat', 'bandana', 'streetwear', 'tabby', 'cute', 'unisex', 'pfp'],
    isPopular: false,
    isStaffPick: false,
    isNew: true,
    isPfp: true,
    gender: 'unisex',
    pfpImageUrl: '/assets/pfps/bandana-cat.webp',
    profileThemeHex: '#161311',
    accentHex: '#EF4444',
    glowHex: '#FCA5A5',
    paletteColors: ['#161311', '#2C231E', '#EF4444', '#FEF2F2'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.0 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #161311 0%, #2C231E 50%, #EF4444 100%)',
      bgPattern: 'dots',
      primaryIcon: '🐱',
      secondaryElements: ['red-bandana']
    },
    motionConfig: {
      type: 'ambient-shimmer',
      speed: 0.8,
      intensity: 0.6,
      glowColor: '#EF4444'
    },
    searchQueries: ['bandana cat pfp', 'outlaw cat discord avatar', 'cool cat pfp']
  },
  {
    id: 'pfp-money-cat',
    slug: 'hustle-tabby-money-cat',
    title: 'Hustle Tabby: Money Cat',
    description: 'Smug entrepreneur feline surrounded by stacks of paper currency, living the absolute high life.',
    category: 'cute',
    categoryLabel: 'Cute & Whimsical',
    mood: 'chill',
    style: 'cel-shaded',
    tags: ['cat', 'money', 'hustle', 'rich', 'funny', 'meme', 'unisex', 'pfp'],
    isPopular: true,
    isStaffPick: false,
    isNew: true,
    isPfp: true,
    gender: 'unisex',
    pfpImageUrl: '/assets/pfps/money-cat.webp',
    profileThemeHex: '#121614',
    accentHex: '#10B981',
    glowHex: '#6EE7B7',
    paletteColors: ['#121614', '#1F2A24', '#10B981', '#ECFDF5'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.0 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #121614 0%, #1F2A24 50%, #10B981 100%)',
      bgPattern: 'dots',
      primaryIcon: '💵',
      secondaryElements: ['money-stacks']
    },
    motionConfig: {
      type: 'particle',
      speed: 0.9,
      intensity: 0.6,
      glowColor: '#10B981'
    },
    searchQueries: ['money cat pfp', 'rich cat discord avatar', 'cash cat meme pfp']
  },
  {
    id: 'pfp-samurai-cat',
    slug: 'bushido-neko-samurai-cat',
    title: 'Bushido Neko: Samurai Cat',
    description: 'Honorable feline warrior clad in miniature samurai kabuto armor with a tiny ceremonial katana.',
    category: 'anime',
    categoryLabel: 'Anime-Inspired',
    mood: 'epic',
    style: 'cel-shaded',
    tags: ['cat', 'samurai', 'bushido', 'armor', 'katana', 'anime', 'unisex', 'pfp'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    isPfp: true,
    gender: 'unisex',
    pfpImageUrl: '/assets/pfps/samurai-cat.webp',
    profileThemeHex: '#1A120E',
    accentHex: '#D97706',
    glowHex: '#FBBF24',
    paletteColors: ['#1A120E', '#36241B', '#D97706', '#FEF3C7'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.0 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #1A120E 0%, #36241B 50%, #D97706 100%)',
      bgPattern: 'lines',
      primaryIcon: '🗡️',
      secondaryElements: ['kabuto-helmet', 'mini-katana']
    },
    motionConfig: {
      type: 'windblown-grass',
      speed: 0.9,
      intensity: 0.7,
      glowColor: '#D97706'
    },
    searchQueries: ['samurai cat pfp', 'bushido neko discord avatar', 'warrior cat anime pfp']
  },

  // =========================================================================
  // FEATURED AESTHETIC SHOWCASE (Handpicked Community Artwork & Animated Presets)
  // =========================================================================
  {
    id: 'showcase-moon-ronin',
    slug: 'lunar-solitude-mountain-ronin',
    title: 'Lunar Solitude: Mountain Ronin',
    description: 'A solitary ronin standing before a colossal luminous full moon over a misty mountain valley with windblown grass.',
    category: 'anime',
    categoryLabel: 'Anime-Inspired',
    mood: 'epic',
    style: 'matte-painting',
    tags: ['ronin', 'samurai', 'moon', 'anime', 'night', 'katana', 'mountains'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    imageUrl: '/assets/showcase/moon-ronin.jpg',
    profileThemeHex: '#0B0F19',
    accentHex: '#E2E8F0',
    glowHex: '#FFFFFF',
    paletteColors: ['#0B0F19', '#1E293B', '#CBD5E1', '#FFFFFF'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 45, zoom: 1.8 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0B0F19 0%, #1E293B 50%, #E2E8F0 100%)',
      bgPattern: 'dots',
      primaryIcon: '🌕',
      secondaryElements: ['full-moon', 'swaying-grass']
    },
    motionConfig: {
      type: 'windblown-grass',
      speed: 1.0,
      intensity: 0.8,
      direction: 'wave',
      glowColor: '#FFFFFF',
      particleCount: 30
    },
    searchQueries: ['moon anime discord banner', 'samurai discord banner', 'lunar ronin pfp']
  },
  {
    id: 'showcase-snow-ronin',
    slug: 'frost-ronin-crimson-gaze',
    title: 'Frost Ronin: Crimson Gaze',
    description: 'A solitary straw-hat warrior with a piercing ruby eye gazing through falling winter snow crystals.',
    category: 'anime',
    categoryLabel: 'Anime-Inspired',
    mood: 'epic',
    style: 'cel-shaded',
    tags: ['anime', 'ronin', 'sharingan', 'snow', 'crimson-eye', 'ninja'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    imageUrl: '/assets/showcase/snow-ronin.jpg',
    profileThemeHex: '#0D1926',
    accentHex: '#E63946',
    glowHex: '#E63946',
    paletteColors: ['#0D1926', '#1E293B', '#E63946', '#F8FAFC'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 42, zoom: 1.6 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0D1926 0%, #1E293B 60%, #E63946 100%)',
      bgPattern: 'dots',
      primaryIcon: '❄️',
      secondaryElements: ['crimson-eye', 'snow-flakes']
    },
    motionConfig: {
      type: 'crimson-chakra',
      speed: 0.9,
      intensity: 0.9,
      direction: 'radial',
      glowColor: '#E63946',
      particleCount: 32
    },
    searchQueries: ['snow anime discord banner', 'crimson eye pfp', 'ronin discord avatar']
  },
  {
    id: 'showcase-batman-snow',
    slug: 'winter-vigilante-birch-blizzard',
    title: 'Winter Vigilante: Birch Blizzard',
    description: 'The Dark Knight standing resolute amidst towering snow-covered birch trees in a quiet winter blizzard.',
    category: 'superhero',
    categoryLabel: 'Superhero & Comic',
    mood: 'ominous',
    style: 'matte-painting',
    tags: ['batman', 'superhero', 'blizzard', 'snow', 'vigilante', 'dark-knight'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    imageUrl: '/assets/showcase/batman-snow.jpg',
    profileThemeHex: '#11161D',
    accentHex: '#8E9DAE',
    glowHex: '#CBD5E1',
    paletteColors: ['#11161D', '#1E293B', '#8E9DAE', '#E2E8F0'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 68, zoom: 1.7 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #11161D 0%, #1E293B 50%, #8E9DAE 100%)',
      bgPattern: 'dots',
      primaryIcon: '🦇',
      secondaryElements: ['birch-trees', 'falling-snow']
    },
    motionConfig: {
      type: 'birch-blizzard',
      speed: 0.85,
      intensity: 0.85,
      direction: 'down',
      glowColor: '#CBD5E1',
      particleCount: 36
    },
    searchQueries: ['batman discord banner', 'dark knight pfp', 'snow superhero banner']
  },
  {
    id: 'showcase-batman-fire',
    slug: 'dark-vigilante-inferno-roars',
    title: 'Dark Knight: Warehouse Inferno',
    description: 'The masked vigilante standing resolute against an inferno of raging amber warehouse flames and rising sparks.',
    category: 'superhero',
    categoryLabel: 'Superhero & Comic',
    mood: 'ominous',
    style: 'cinematic-motion',
    tags: ['batman', 'inferno', 'fire', 'dark-knight', 'superhero', 'vigilante'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    imageUrl: '/assets/showcase/batman-fire.jpg',
    profileThemeHex: '#1A0C05',
    accentHex: '#F97316',
    glowHex: '#FBBF24',
    paletteColors: ['#1A0C05', '#7C2D12', '#F97316', '#FBBF24'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 35, zoom: 1.8 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #1A0C05 0%, #7C2D12 50%, #F97316 100%)',
      bgPattern: 'lines',
      primaryIcon: '🔥',
      secondaryElements: ['warehouse-inferno', 'rising-embers']
    },
    motionConfig: {
      type: 'inferno-shimmer',
      speed: 1.1,
      intensity: 0.9,
      direction: 'up',
      glowColor: '#F97316',
      particleCount: 40
    },
    searchQueries: ['batman fire discord banner', 'inferno superhero banner', 'dark knight fire pfp']
  },
  {
    id: 'showcase-cloud-cats',
    slug: 'summer-cloudwatchers-ivy-wall',
    title: 'Summer Cloudwatchers: Ivy Wall',
    description: 'Five peaceful cats perched on a stone ivy-covered wall watching birds soar across massive Ghibli cumulus clouds.',
    category: 'aesthetic',
    categoryLabel: 'Aesthetic & Pastel',
    mood: 'cozy',
    style: 'matte-painting',
    tags: ['cats', 'ghibli', 'clouds', 'summer', 'aesthetic', 'cozy', 'sky'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    imageUrl: '/assets/showcase/ghibli-cats.jpg',
    profileThemeHex: '#1E3A5F',
    accentHex: '#7BC5AE',
    glowHex: '#99C2FF',
    paletteColors: ['#1E3A5F', '#7BC5AE', '#99C2FF', '#FFF6DE'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.6 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #1E3A5F 0%, #3B82F6 50%, #7BC5AE 100%)',
      bgPattern: 'waves',
      primaryIcon: '🐱',
      secondaryElements: ['birds', 'cumulus-clouds']
    },
    motionConfig: {
      type: 'cloud-drift',
      speed: 0.7,
      intensity: 0.7,
      direction: 'up',
      glowColor: '#99C2FF',
      particleCount: 22
    },
    searchQueries: ['ghibli discord banner', 'aesthetic cat pfp', 'anime cloud banner']
  },
  {
    id: 'showcase-golden-solitude',
    slug: 'golden-hour-solitude-prairie',
    title: 'Golden Hour Solitude: Prairie Dusk',
    description: 'A vintage coupe and solitary traveler standing in vast golden wheat fields under towering sunset clouds.',
    category: 'cinematic',
    categoryLabel: 'Cinematic & Sci-Fi',
    mood: 'calm',
    style: 'cinematic-motion',
    tags: ['golden-hour', 'vintage-car', 'clouds', 'cinematic', 'lo-fi', 'wheatfield'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    imageUrl: '/assets/showcase/golden-solitude.jpg',
    profileThemeHex: '#261C14',
    accentHex: '#E5A852',
    glowHex: '#FFDF82',
    paletteColors: ['#261C14', '#5C381E', '#E5A852', '#FFDF82'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 55, zoom: 1.8 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #261C14 0%, #5C381E 50%, #E5A852 100%)',
      bgPattern: 'lines',
      primaryIcon: '🚗',
      secondaryElements: ['wheat-grass', 'golden-haze']
    },
    motionConfig: {
      type: 'golden-prairie',
      speed: 0.8,
      intensity: 0.7,
      direction: 'right',
      glowColor: '#E5A852',
      particleCount: 24
    },
    searchQueries: ['cinematic discord banner', 'golden hour banner', 'lofi highway pfp']
  },
  {
    id: 'showcase-euphoria-eyes',
    slug: 'obsidian-trance-ethereal-iris',
    title: 'Obsidian Trance: Ethereal Iris',
    description: 'Dramatic close-up eyes rolled into celestial trance with glowing white irises and soft vintage film grain.',
    category: 'dark',
    categoryLabel: 'Dark & Gothic',
    mood: 'mysterious',
    style: 'atmospheric-mist',
    tags: ['eyes', 'goth', 'dark-aesthetic', 'euphoria', 'vintage-grain', 'white-eyes'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    imageUrl: '/assets/showcase/euphoria-eyes.jpg',
    profileThemeHex: '#1F1A24',
    accentHex: '#D4B8D4',
    glowHex: '#FFFFFF',
    paletteColors: ['#1F1A24', '#382B3E', '#D4B8D4', '#FFFFFF'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 35, y: 50, zoom: 2.2 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #1F1A24 0%, #382B3E 60%, #D4B8D4 100%)',
      bgPattern: 'dots',
      primaryIcon: '👁️',
      secondaryElements: ['film-grain', 'ethereal-iris']
    },
    motionConfig: {
      type: 'iris-glint',
      speed: 1.0,
      intensity: 0.9,
      direction: 'radial',
      glowColor: '#FFFFFF',
      particleCount: 26
    },
    searchQueries: ['dark aesthetic eyes banner', 'euphoria eyes pfp', 'gothic discord banner']
  },
  {
    id: 'showcase-neon-ronin',
    slug: 'neo-shinjuku-cyber-ronin',
    title: 'Neo Shinjuku: Cyber Katana',
    description: 'A cybernetic street samurai with an energized cyan katana standing in a rain-slicked Neo-Tokyo neon alleyway.',
    category: 'cyberpunk',
    categoryLabel: 'Cyberpunk & Tech',
    mood: 'futuristic',
    style: 'neon-glow',
    tags: ['cyberpunk', 'katana', 'tokyo', 'neon', 'rain', 'samurai'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    imageUrl: '/assets/banners/neon-ronin.jpg',
    profileThemeHex: '#0D0814',
    accentHex: '#00F0FF',
    glowHex: '#FF007F',
    paletteColors: ['#0D0814', '#1E1035', '#00F0FF', '#FF007F'],
    focalPoint: {
      banner: { x: 80, y: 50 },
      pfp: { x: 80, y: 25, zoom: 2.0 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0D0814 0%, #1E1035 50%, #00F0FF 100%)',
      bgPattern: 'circuit',
      primaryIcon: '⚡',
      secondaryElements: ['neon-signs', 'cyan-blade']
    },
    motionConfig: {
      type: 'neon-rain-alley',
      speed: 1.1,
      intensity: 0.85,
      direction: 'down',
      glowColor: '#00F0FF',
      particleCount: 45
    },
    searchQueries: ['cyberpunk katana discord banner', 'neo tokyo banner', 'cyber samurai pfp']
  },
  {
    id: 'showcase-nebula-navigator',
    slug: 'orbital-spacewalk-carina-nebula',
    title: 'Orbital Spacewalk: Carina Nebula',
    description: 'A lone deep space explorer floating outside an orbital space station facing a breathtaking magenta and cyan stellar nebula.',
    category: 'space',
    categoryLabel: 'Space & Cosmic',
    mood: 'ethereal',
    style: 'matte-painting',
    tags: ['astronaut', 'space', 'nebula', 'cosmos', 'galaxy', 'spacewalk'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    imageUrl: '/assets/banners/nebula-navigator.jpg',
    profileThemeHex: '#0A0B1A',
    accentHex: '#A855F7',
    glowHex: '#38BDF8',
    paletteColors: ['#0A0B1A', '#2E1065', '#A855F7', '#38BDF8'],
    focalPoint: {
      banner: { x: 40, y: 50 },
      pfp: { x: 38, y: 35, zoom: 1.9 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0A0B1A 0%, #2E1065 50%, #38BDF8 100%)',
      bgPattern: 'stars',
      primaryIcon: '🚀',
      secondaryElements: ['stellar-nursery', 'orbital-station']
    },
    motionConfig: {
      type: 'orbital-weightless',
      speed: 0.8,
      intensity: 0.8,
      direction: 'radial',
      glowColor: '#38BDF8',
      particleCount: 35
    },
    searchQueries: ['space astronaut discord banner', 'carina nebula banner', 'deep space pfp']
  },
  {
    id: 'showcase-arcane-sanctuary',
    slug: 'cathedral-archives-floating-grimoires',
    title: 'Cathedral Archives: Floating Grimoires',
    description: 'Towering vaulted bookshelves, floating glowing grimoires, and sunlit rose stained-glass windows inside a gothic occult sanctuary.',
    category: 'fantasy',
    categoryLabel: 'Fantasy & Mythic',
    mood: 'mysterious',
    style: 'cinematic-motion',
    tags: ['fantasy', 'library', 'grimoire', 'gothic', 'cathedral', 'magic'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    imageUrl: '/assets/banners/arcane-sanctuary.jpg',
    profileThemeHex: '#18120C',
    accentHex: '#F59E0B',
    glowHex: '#FDE68A',
    paletteColors: ['#18120C', '#451A03', '#F59E0B', '#FDE68A'],
    focalPoint: {
      banner: { x: 65, y: 40 },
      pfp: { x: 65, y: 32, zoom: 1.9 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #18120C 0%, #451A03 50%, #F59E0B 100%)',
      bgPattern: 'hexagons',
      primaryIcon: '📜',
      secondaryElements: ['rose-window', 'floating-books']
    },
    motionConfig: {
      type: 'arcane-dust-motes',
      speed: 0.9,
      intensity: 0.8,
      direction: 'up',
      glowColor: '#F59E0B',
      particleCount: 30
    },
    searchQueries: ['fantasy library discord banner', 'gothic sanctuary banner', 'magic grimoire pfp']
  },
  {
    id: 'showcase-gaming-arena',
    slug: 'apex-arena-cyber-championship',
    title: 'Apex Arena: Cyber Championship',
    description: 'A massive esports tournament stadium packed with cheering crowds under holographic lasers and neon scoreboards.',
    category: 'gaming',
    categoryLabel: 'Gaming & Esports',
    mood: 'energetic',
    style: '3d-render',
    tags: ['gaming', 'esports', 'arena', 'cyberpunk', 'lasers', 'stadium'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    imageUrl: '/assets/banners/gaming-arena.jpg',
    profileThemeHex: '#090E18',
    accentHex: '#00F0FF',
    glowHex: '#FF0055',
    paletteColors: ['#090E18', '#11223A', '#00F0FF', '#FF0055'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 40, zoom: 1.8 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #090E18 0%, #11223A 50%, #00F0FF 100%)',
      bgPattern: 'grid',
      primaryIcon: '🎮',
      secondaryElements: ['arena-lasers', 'crowd-silhouette']
    },
    motionConfig: {
      type: 'neon-rain-alley',
      speed: 1.2,
      intensity: 0.9,
      direction: 'radial',
      glowColor: '#00F0FF',
      particleCount: 40
    },
    searchQueries: ['gaming discord banner', 'esports arena banner', 'gamer pfp']
  },
  {
    id: 'showcase-anime-sunset',
    slug: 'twilight-katana-sunset-sakura',
    title: 'Twilight Katana: Sunset Sakura',
    description: 'A solitary samurai warrior standing on a grassy hill watching the sun set behind distant mountains with falling cherry blossoms.',
    category: 'anime',
    categoryLabel: 'Anime-Inspired',
    mood: 'calm',
    style: 'matte-painting',
    tags: ['anime', 'samurai', 'sunset', 'sakura', 'peaceful', 'katana'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    imageUrl: '/assets/banners/anime-sunset.jpg',
    profileThemeHex: '#1C0D18',
    accentHex: '#FF84BA',
    glowHex: '#FFDF82',
    paletteColors: ['#1C0D18', '#381628', '#FF84BA', '#FFDF82'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 42, zoom: 1.7 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #1C0D18 0%, #381628 50%, #FF84BA 100%)',
      bgPattern: 'waves',
      primaryIcon: '🌸',
      secondaryElements: ['sunset-glow', 'cherry-blossoms']
    },
    motionConfig: {
      type: 'windblown-grass',
      speed: 0.85,
      intensity: 0.75,
      direction: 'wave',
      glowColor: '#FF84BA',
      particleCount: 28
    },
    searchQueries: ['anime sunset discord banner', 'samurai sunset pfp', 'sakura banner']
  },
  {
    id: 'showcase-cyberpunk-tokyo',
    slug: 'shinjuku-neon-rain-voltage',
    title: 'Shinjuku Neon: Rain & High Voltage',
    description: 'Towering holographic megastructures, glowing kanji billboards, and soaring aerocars through neon purple rain mist.',
    category: 'cyberpunk',
    categoryLabel: 'Cyberpunk & Tech',
    mood: 'futuristic',
    style: 'neon-glow',
    tags: ['cyberpunk', 'tokyo', 'neon', 'rain', 'hologram', 'scifi'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    imageUrl: '/assets/banners/cyberpunk-tokyo.jpg',
    profileThemeHex: '#080916',
    accentHex: '#A855F7',
    glowHex: '#00F0FF',
    paletteColors: ['#080916', '#17123A', '#A855F7', '#00F0FF'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 35, zoom: 1.8 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #080916 0%, #17123A 50%, #A855F7 100%)',
      bgPattern: 'circuit',
      primaryIcon: '🏙️',
      secondaryElements: ['hologram-grid', 'voltage-sparks']
    },
    motionConfig: {
      type: 'neon-rain-alley',
      speed: 1.15,
      intensity: 0.85,
      direction: 'down',
      glowColor: '#00F0FF',
      particleCount: 42
    },
    searchQueries: ['cyberpunk tokyo banner', 'neon city discord banner', 'scifi pfp']
  },
  {
    id: 'showcase-dark-gothic',
    slug: 'obsidian-cathedral-gothic-spires',
    title: 'Obsidian Cathedral: Gothic Spires',
    description: 'Towering midnight spires and flying buttresses silhouetted against a stormy silver moon with mist rolling across stone gargoyles.',
    category: 'dark',
    categoryLabel: 'Dark & Gothic',
    mood: 'ominous',
    style: 'matte-painting',
    tags: ['gothic', 'cathedral', 'dark-aesthetic', 'moon', 'mist', 'spires'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    imageUrl: '/assets/banners/dark-gothic.jpg',
    profileThemeHex: '#0D0E12',
    accentHex: '#94A3B8',
    glowHex: '#E2E8F0',
    paletteColors: ['#0D0E12', '#181A22', '#94A3B8', '#E2E8F0'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 38, zoom: 1.8 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0D0E12 0%, #181A22 50%, #94A3B8 100%)',
      bgPattern: 'dots',
      primaryIcon: '⛪',
      secondaryElements: ['gothic-arches', 'mist-fog']
    },
    motionConfig: {
      type: 'birch-blizzard',
      speed: 0.7,
      intensity: 0.7,
      direction: 'down',
      glowColor: '#E2E8F0',
      particleCount: 30
    },
    searchQueries: ['dark gothic discord banner', 'cathedral banner', 'dark aesthetic pfp']
  },
  {
    id: 'showcase-aesthetic-pastel',
    slug: 'pastel-dreamscape-cloud-oasis',
    title: 'Pastel Dreamscape: Cloud Oasis',
    description: 'Dreamy iridescent clouds, celestial floating stairs, and sparkling star trails in soft strawberry and lavender pastel skies.',
    category: 'aesthetic',
    categoryLabel: 'Aesthetic & Pastel',
    mood: 'ethereal',
    style: 'cel-shaded',
    tags: ['pastel', 'aesthetic', 'clouds', 'dreamy', 'kawaii', 'pink'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    imageUrl: '/assets/banners/aesthetic-pastel.jpg',
    profileThemeHex: '#18101E',
    accentHex: '#F472B6',
    glowHex: '#C084FC',
    paletteColors: ['#18101E', '#2D1B38', '#F472B6', '#C084FC'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 45, zoom: 1.7 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #18101E 0%, #2D1B38 50%, #F472B6 100%)',
      bgPattern: 'dots',
      primaryIcon: '☁️',
      secondaryElements: ['star-trails', 'pastel-mist']
    },
    motionConfig: {
      type: 'cloud-drift',
      speed: 0.65,
      intensity: 0.65,
      direction: 'up',
      glowColor: '#F472B6',
      particleCount: 20
    },
    searchQueries: ['aesthetic pastel discord banner', 'pink clouds banner', 'soft pfp']
  },
  {
    id: 'showcase-lofi-study',
    slug: 'midnight-lofi-rainy-tokyo-room',
    title: 'Midnight Lo-Fi: Rainy Tokyo Room',
    description: 'A cozy Tokyo bedroom at 3AM with gentle raindrops on the window, glowing warm desk lamp, vinyl turntable, and sleeping cat.',
    category: 'lofi',
    categoryLabel: 'Lo-Fi & Cozy',
    mood: 'cozy',
    style: 'cinematic-motion',
    tags: ['lofi', 'cozy', 'rain', 'tokyo', 'vinyl', 'study', '3am'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    imageUrl: '/assets/banners/lofi-study.jpg',
    profileThemeHex: '#1A121E',
    accentHex: '#F59E0B',
    glowHex: '#A855F7',
    paletteColors: ['#1A121E', '#321D38', '#F59E0B', '#A855F7'],
    focalPoint: {
      banner: { x: 45, y: 50 },
      pfp: { x: 38, y: 62, zoom: 1.8 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #1A121E 0%, #321D38 50%, #F59E0B 100%)',
      bgPattern: 'lines',
      primaryIcon: '☕',
      secondaryElements: ['rain-window', 'desk-lamp']
    },
    motionConfig: {
      type: 'neon-rain-alley',
      speed: 0.75,
      intensity: 0.7,
      direction: 'down',
      glowColor: '#F59E0B',
      particleCount: 30
    },
    searchQueries: ['lofi discord banner', 'rainy room banner', 'cozy lofi pfp']
  },
  {
    id: 'showcase-horror-eldritch',
    slug: 'eldritch-eclipse-blood-moon-mist',
    title: 'Eldritch Eclipse: Blood Moon Mist',
    description: 'A shadowy cloaked eldritch specter standing among twisted pines and ancient runestones under a giant blood-red eclipse.',
    category: 'horror',
    categoryLabel: 'Horror & Ominous',
    mood: 'ominous',
    style: 'matte-painting',
    tags: ['horror', 'blood-moon', 'eldritch', 'eclipse', 'creepy', 'fog'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    imageUrl: '/assets/banners/horror-eldritch.jpg',
    profileThemeHex: '#100707',
    accentHex: '#EF4444',
    glowHex: '#DC2626',
    paletteColors: ['#100707', '#260B0B', '#EF4444', '#DC2626'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 65, y: 55, zoom: 1.9 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #100707 0%, #260B0B 50%, #EF4444 100%)',
      bgPattern: 'dots',
      primaryIcon: '👁️',
      secondaryElements: ['blood-moon', 'crimson-fog']
    },
    motionConfig: {
      type: 'crimson-chakra',
      speed: 0.9,
      intensity: 0.9,
      direction: 'radial',
      glowColor: '#EF4444',
      particleCount: 34
    },
    searchQueries: ['horror discord banner', 'blood moon banner', 'creepy pfp']
  },
  {
    id: 'showcase-cute-sanctuary',
    slug: 'kawaii-island-chibi-star-haven',
    title: 'Kawaii Island: Chibi Star Haven',
    description: 'A whimsical pastel floating island with a crystal mushroom house, gentle rainbow waterfalls, and playful chibi spirits.',
    category: 'cute',
    categoryLabel: 'Cute & Whimsical',
    mood: 'cozy',
    style: 'cel-shaded',
    tags: ['cute', 'kawaii', 'floating-island', 'chibi', 'rainbow', 'ghibli'],
    isPopular: true,
    isStaffPick: true,
    isNew: true,
    imageUrl: '/assets/banners/cute-sanctuary.jpg',
    profileThemeHex: '#1B1124',
    accentHex: '#F472B6',
    glowHex: '#FDE047',
    paletteColors: ['#1B1124', '#2F1A3E', '#F472B6', '#FDE047'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 55, y: 42, zoom: 1.8 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #1B1124 0%, #2F1A3E 50%, #F472B6 100%)',
      bgPattern: 'dots',
      primaryIcon: '✨',
      secondaryElements: ['rainbow-falls', 'crystal-mushrooms']
    },
    motionConfig: {
      type: 'cloud-drift',
      speed: 0.7,
      intensity: 0.6,
      direction: 'up',
      glowColor: '#F472B6',
      particleCount: 22
    },
    searchQueries: ['cute discord banner', 'kawaii island banner', 'chibi pfp']
  },
  // =========================================================================
  // 2D SERVER ASSETS, ROLE ICONS & EMOJI STICKERS (110 Presets)
  // ========================================================================= (12 Presets)
  // =========================================================================
  {
    id: 'anime-01',
    slug: 'cyber-shinobi-blade',
    title: 'Cyber Shinobi: Neon Katana',
    description: 'A rogue cyber-ninja standing over a rain-slicked neo-city skyline with an energized magenta blade.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'epic',
    style: 'cel-shaded',
    tags: ['ninja', 'katana', 'cyberpunk', 'tokyo', 'neon-pink'],
    isPopular: true,
    isStaffPick: true,
    profileThemeHex: '#0D0814',
    accentHex: '#FF84BA',
    glowHex: '#FFDF82',
    paletteColors: ['#FF84BA', '#FFDF82', '#99C2FF', '#0D0814'],
    focalPoint: {
      banner: { x: 72, y: 46 },
      pfp: { x: 72, y: 40, zoom: 1.8 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0D0814 0%, #200E2E 50%, #FF84BA 100%)',
      bgPattern: 'lines',
      primaryIcon: '🗡️',
      secondaryElements: ['neon-glow', 'rain-drops', 'sparkles']
    },
    motionConfig: {
      type: 'glow-scan',
      speed: 1.2,
      intensity: 0.8,
      direction: 'right',
      glowColor: '#FF84BA',
      particleCount: 24
    },
    searchQueries: ['anime discord banner', 'cyber shinobi pfp', 'neon anime banner']
  },
  {
    id: 'anime-02',
    slug: 'cherry-blossom-ronin',
    title: 'Cherry Blossom Ronin',
    description: 'A wandering samurai resting under ancient pink sakura branches during twilight with drifting flower petals.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'calm',
    style: 'atmospheric-mist',
    tags: ['sakura', 'samurai', 'peaceful', 'pink', 'spring'],
    isPopular: true,
    profileThemeHex: '#180E16',
    accentHex: '#FFA4A4',
    glowHex: '#FFEFE3',
    paletteColors: ['#FFA4A4', '#FFDF82', '#6D0808', '#180E16'],
    focalPoint: {
      banner: { x: 65, y: 50 },
      pfp: { x: 65, y: 42, zoom: 1.6 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #180E16 0%, #3D1C28 60%, #FFA4A4 100%)',
      bgPattern: 'waves',
      primaryIcon: '🌸',
      secondaryElements: ['petals', 'soft-mist', 'twilight-moon']
    },
    motionConfig: {
      type: 'particle',
      speed: 0.8,
      intensity: 0.6,
      direction: 'down',
      glowColor: '#FFA4A4',
      particleCount: 30
    },
    searchQueries: ['sakura anime banner', 'cherry blossom pfp discord', 'samurai banner discord']
  },
  {
    id: 'anime-03',
    slug: 'celestial-spirit-fox',
    title: 'Celestial Spirit Kitsune',
    description: 'Nine ethereal tails glowing in golden twilight with spiritual torii gate silhouettes in the background.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'ethereal',
    style: 'cel-shaded',
    tags: ['kitsune', 'fox', 'torii', 'gold', 'spirit'],
    isPopular: true,
    profileThemeHex: '#140D05',
    accentHex: '#FFDF82',
    glowHex: '#FF84BA',
    paletteColors: ['#FFDF82', '#FF84BA', '#F2765E', '#140D05'],
    focalPoint: {
      banner: { x: 68, y: 48 },
      pfp: { x: 68, y: 38, zoom: 1.7 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #140D05 0%, #2E1A0E 50%, #FFDF82 100%)',
      bgPattern: 'hexagons',
      primaryIcon: '🦊',
      secondaryElements: ['spirit-flames', 'torii-arch', 'starlight']
    },
    motionConfig: {
      type: 'floating',
      speed: 1.0,
      intensity: 0.7,
      direction: 'up',
      glowColor: '#FFDF82',
      particleCount: 20
    },
    searchQueries: ['kitsune discord banner', 'spirit fox pfp', 'gold anime banner']
  },
  {
    id: 'anime-04',
    slug: 'mecha-pilot-eva',
    title: 'Mecha Pilot Protocol 07',
    description: 'A cockpit viewport view overlooking a titan combat frame powering up its core reactor amidst red alert warnings.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'epic',
    style: '3d-render',
    tags: ['mecha', 'eva', 'sci-fi', 'pilot', 'hud'],
    profileThemeHex: '#080C14',
    accentHex: '#99C2FF',
    glowHex: '#F2765E',
    paletteColors: ['#99C2FF', '#F2765E', '#BADFDB', '#080C14'],
    focalPoint: {
      banner: { x: 75, y: 44 },
      pfp: { x: 75, y: 36, zoom: 1.9 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #080C14 0%, #111C2E 60%, #99C2FF 100%)',
      bgPattern: 'grid',
      primaryIcon: '🤖',
      secondaryElements: ['hud-telemetry', 'hexagon-shield', 'laser-arcs']
    },
    motionConfig: {
      type: 'cyber-grid',
      speed: 1.4,
      intensity: 0.9,
      direction: 'wave',
      glowColor: '#99C2FF',
      particleCount: 18
    },
    searchQueries: ['mecha discord banner', 'anime robot banner', 'scifi pfp matching']
  },
  {
    id: 'anime-05',
    slug: 'dragon-whisperer-summit',
    title: 'Dragon Whisperer Summit',
    description: 'An elemental sorcerer standing on a misty mountain crag summoning an azure dragon made of starlight.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'epic',
    style: 'matte-painting',
    tags: ['dragon', 'mountain', 'clouds', 'fantasy', 'magic'],
    profileThemeHex: '#071018',
    accentHex: '#66A3BF',
    glowHex: '#BADFDB',
    paletteColors: ['#66A3BF', '#BADFDB', '#3368A0', '#071018'],
    focalPoint: {
      banner: { x: 62, y: 45 },
      pfp: { x: 62, y: 35, zoom: 1.6 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #071018 0%, #0E253A 55%, #66A3BF 100%)',
      bgPattern: 'waves',
      primaryIcon: '🐉',
      secondaryElements: ['mountain-peaks', 'clouds', 'magic-runes']
    },
    motionConfig: {
      type: 'parallax',
      speed: 0.9,
      intensity: 0.6,
      direction: 'left',
      glowColor: '#BADFDB',
      particleCount: 16
    },
    searchQueries: ['anime dragon banner', 'dragon pfp discord', 'fantasy anime profile']
  },
  {
    id: 'anime-06',
    slug: 'midnight-exorcist-seal',
    title: 'Midnight Exorcist: Seal of Onmyo',
    description: 'Floating talisman papers swirling in a purple vortex protecting against wandering yokai shadows.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'mysterious',
    style: 'cel-shaded',
    tags: ['onmyoji', 'talisman', 'purple', 'yokai', 'dark-anime'],
    profileThemeHex: '#0E0818',
    accentHex: '#B0CDE6',
    glowHex: '#A290B7',
    paletteColors: ['#A290B7', '#B0CDE6', '#800020', '#0E0818'],
    focalPoint: {
      banner: { x: 70, y: 48 },
      pfp: { x: 70, y: 39, zoom: 1.7 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0E0818 0%, #201336 50%, #A290B7 100%)',
      bgPattern: 'hexagons',
      primaryIcon: '📜',
      secondaryElements: ['talismans', 'smoke-plumes', 'sigils']
    },
    motionConfig: {
      type: 'smoke',
      speed: 1.1,
      intensity: 0.7,
      direction: 'up',
      glowColor: '#A290B7',
      particleCount: 22
    },
    searchQueries: ['dark anime banner discord', 'exorcist pfp', 'purple anime banner']
  },
  {
    id: 'anime-07',
    slug: 'astral-valkyrie-wings',
    title: 'Astral Valkyrie Flight',
    description: 'Golden wings spreading across a twilight sky with prismatic light refractions and divine armor plating.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'epic',
    style: 'cinematic-motion',
    tags: ['valkyrie', 'wings', 'gold', 'armor', 'celestial'],
    profileThemeHex: '#120E0A',
    accentHex: '#FFDF82',
    glowHex: '#FFEFE3',
    paletteColors: ['#FFDF82', '#FFEFE3', '#FF84BA', '#120E0A'],
    focalPoint: {
      banner: { x: 65, y: 45 },
      pfp: { x: 65, y: 35, zoom: 1.8 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #120E0A 0%, #2D2012 50%, #FFDF82 100%)',
      bgPattern: 'stars',
      primaryIcon: '🪽',
      secondaryElements: ['feathers', 'light-rays', 'golden-halos']
    },
    motionConfig: {
      type: 'light-pulse',
      speed: 1.0,
      intensity: 0.8,
      direction: 'radial',
      glowColor: '#FFDF82',
      particleCount: 25
    },
    searchQueries: ['valkyrie discord banner', 'winged anime pfp', 'golden anime banner']
  },
  {
    id: 'anime-08',
    slug: 'sunset-shinjuku-blade',
    title: 'Shinjuku Neon Alleyway',
    description: 'An umbrella silhouette reflecting in neon puddles under billboard signs in a cybernetic anime city.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'moody',
    style: 'pixel-art',
    tags: ['shinjuku', 'rain', 'umbrella', 'cyber-city', 'lofi-anime'],
    profileThemeHex: '#0A0E18',
    accentHex: '#FF84BA',
    glowHex: '#99C2FF',
    paletteColors: ['#FF84BA', '#99C2FF', '#FFDF82', '#0A0E18'],
    focalPoint: {
      banner: { x: 60, y: 52 },
      pfp: { x: 60, y: 45, zoom: 1.5 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0A0E18 0%, #161D32 55%, #FF84BA 100%)',
      bgPattern: 'grid',
      primaryIcon: '☂️',
      secondaryElements: ['puddles', 'billboards', 'rain-streaks']
    },
    motionConfig: {
      type: 'rain',
      speed: 1.3,
      intensity: 0.8,
      direction: 'down',
      glowColor: '#99C2FF',
      particleCount: 35
    },
    searchQueries: ['shinjuku anime banner', 'rain anime pfp', 'pixel anime discord']
  },
  {
    id: 'anime-09',
    slug: 'stellar-idol-concert',
    title: 'Stellar Idol Live Glow',
    description: 'Microphone in hand against a sea of responsive lightsticks and vibrant festival pyrotechnics.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'energetic',
    style: 'cel-shaded',
    tags: ['idol', 'concert', 'music', 'stars', 'vibrant'],
    profileThemeHex: '#140816',
    accentHex: '#F599C6',
    glowHex: '#FFEA88',
    paletteColors: ['#F599C6', '#FFEA88', '#7DCCAD', '#140816'],
    focalPoint: {
      banner: { x: 70, y: 46 },
      pfp: { x: 70, y: 38, zoom: 1.8 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #140816 0%, #2A102E 50%, #F599C6 100%)',
      bgPattern: 'dots',
      primaryIcon: '🎤',
      secondaryElements: ['lightsticks', 'star-bursts', 'confetti']
    },
    motionConfig: {
      type: 'particle',
      speed: 1.5,
      intensity: 0.9,
      direction: 'up',
      glowColor: '#F599C6',
      particleCount: 30
    },
    searchQueries: ['anime idol banner', 'cute anime concert pfp', 'vibrant anime banner']
  },
  {
    id: 'anime-10',
    slug: 'dark-alchemist-crucible',
    title: 'Dark Alchemist Crucible',
    description: 'Bubbling transmutation circle glowing with phosphorescent green and obsidian transmutation fire.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'mysterious',
    style: 'atmospheric-mist',
    tags: ['alchemy', 'circle', 'green', 'magic', 'dark-fantasy'],
    profileThemeHex: '#08120B',
    accentHex: '#BADFDB',
    glowHex: '#BBF1D2',
    paletteColors: ['#BBF1D2', '#BADFDB', '#4D6787', '#08120B'],
    focalPoint: {
      banner: { x: 66, y: 50 },
      pfp: { x: 66, y: 40, zoom: 1.7 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #08120B 0%, #102418 50%, #BADFDB 100%)',
      bgPattern: 'hexagons',
      primaryIcon: '🧪',
      secondaryElements: ['runes', 'emerald-sparks', 'cauldron-mist']
    },
    motionConfig: {
      type: 'smoke',
      speed: 0.9,
      intensity: 0.7,
      direction: 'up',
      glowColor: '#BBF1D2',
      particleCount: 20
    },
    searchQueries: ['alchemy anime banner', 'green magic pfp', 'transmutation discord']
  },
  {
    id: 'anime-11',
    slug: 'void-walker-katana',
    title: 'Void Walker: Dimension Tear',
    description: 'A silent swordsman slashing a rift between space realities revealing cosmic ultraviolet nebula matter.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'epic',
    style: 'cinematic-motion',
    tags: ['void', 'rift', 'cosmic', 'samurai', 'ultraviolet'],
    profileThemeHex: '#0B0514',
    accentHex: '#99C2FF',
    glowHex: '#FF84BA',
    paletteColors: ['#99C2FF', '#FF84BA', '#FFDF82', '#0B0514'],
    focalPoint: {
      banner: { x: 74, y: 44 },
      pfp: { x: 74, y: 36, zoom: 1.8 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0B0514 0%, #1A0C2E 50%, #99C2FF 100%)',
      bgPattern: 'lines',
      primaryIcon: '🌌',
      secondaryElements: ['space-tear', 'energy-slashes', 'nebula-dust']
    },
    motionConfig: {
      type: 'glow-scan',
      speed: 1.3,
      intensity: 0.85,
      direction: 'right',
      glowColor: '#99C2FF',
      particleCount: 24
    },
    searchQueries: ['void anime banner', 'dimension tear pfp', 'space anime discord']
  },
  {
    id: 'anime-12',
    slug: 'cozy-ramen-shop-cat',
    title: 'Cozy Ramen Lanterns & Feline Chef',
    description: 'Steam rising from fresh noodles in a cozy corner Izakaya adorned with red paper lanterns and a sleepy calico cat.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'cozy',
    style: 'cel-shaded',
    tags: ['ramen', 'cat', 'cozy', 'lanterns', 'food'],
    profileThemeHex: '#160E08',
    accentHex: '#F2765E',
    glowHex: '#FBC02D',
    paletteColors: ['#F2765E', '#FBC02D', '#F5EBDD', '#160E08'],
    focalPoint: {
      banner: { x: 64, y: 48 },
      pfp: { x: 64, y: 42, zoom: 1.6 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #160E08 0%, #301D12 50%, #F2765E 100%)',
      bgPattern: 'waves',
      primaryIcon: '🍜',
      secondaryElements: ['steam', 'warm-lanterns', 'cat-ears']
    },
    motionConfig: {
      type: 'smoke',
      speed: 0.7,
      intensity: 0.5,
      direction: 'up',
      glowColor: '#FBC02D',
      particleCount: 15
    },
    searchQueries: ['cozy anime banner', 'ramen pfp discord', 'anime food banner']
  },

  // =========================================================================
  // 2. GAMING & ESPORTS (12 Presets)
  // =========================================================================
  {
    id: 'game-01',
    slug: 'tactical-protocol-alpha',
    title: 'Tactical Protocol Alpha: Apex Operative',
    description: 'Tactical holographic crosshairs, encrypted radar ping rings, and carbon-fiber armor panels for team captains.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'epic',
    style: '3d-render',
    tags: ['tactical', 'fps', 'esports', 'hud', 'crosshair'],
    isPopular: true,
    isStaffPick: true,
    profileThemeHex: '#080E14',
    accentHex: '#0D9488',
    glowHex: '#99C2FF',
    paletteColors: ['#0D9488', '#99C2FF', '#BADFDB', '#080E14'],
    focalPoint: {
      banner: { x: 70, y: 48 },
      pfp: { x: 70, y: 40, zoom: 1.7 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #080E14 0%, #101E2E 50%, #0D9488 100%)',
      bgPattern: 'grid',
      primaryIcon: '🎯',
      secondaryElements: ['radar-sweep', 'crosshair', 'carbon-mesh']
    },
    motionConfig: {
      type: 'cyber-grid',
      speed: 1.2,
      intensity: 0.8,
      direction: 'wave',
      glowColor: '#0D9488',
      particleCount: 22
    },
    searchQueries: ['gaming discord banner', 'esports pfp', 'tactical fps banner']
  },
  {
    id: 'game-02',
    slug: 'pixel-quest-dungeon-crawler',
    title: 'Pixel Quest: 16-Bit Boss Lair',
    description: 'Charming authentic retro pixel art showing an adventurer facing a slumbering dragon upon gold coin heaps.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'epic',
    style: 'pixel-art',
    tags: ['pixel-art', 'retro', 'rpg', 'dungeon', '16-bit'],
    profileThemeHex: '#120A14',
    accentHex: '#FFDF82',
    glowHex: '#FF84BA',
    paletteColors: ['#FFDF82', '#FF84BA', '#99C2FF', '#120A14'],
    focalPoint: {
      banner: { x: 62, y: 52 },
      pfp: { x: 62, y: 44, zoom: 1.6 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #120A14 0%, #26162B 55%, #FFDF82 100%)',
      bgPattern: 'grid',
      primaryIcon: '🗡️',
      secondaryElements: ['pixel-coins', 'torches', 'health-bar']
    },
    motionConfig: {
      type: 'particle',
      speed: 1.0,
      intensity: 0.7,
      direction: 'up',
      glowColor: '#FFDF82',
      particleCount: 18
    },
    searchQueries: ['pixel art discord banner', 'retro gaming pfp', '16bit banner discord']
  },
  {
    id: 'game-03',
    slug: 'quantum-arena-sniper',
    title: 'Quantum Arena: Railgun Overdrive',
    description: 'High-caliber railgun charging energetic plasma rings with electromagnetic sparks cascading down the barrel.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'energetic',
    style: 'cinematic-motion',
    tags: ['sniper', 'railgun', 'neon-blue', 'futuristic', 'arena'],
    isPopular: true,
    profileThemeHex: '#060E18',
    accentHex: '#99C2FF',
    glowHex: '#FF84BA',
    paletteColors: ['#99C2FF', '#FF84BA', '#3368A0', '#060E18'],
    focalPoint: {
      banner: { x: 75, y: 46 },
      pfp: { x: 75, y: 38, zoom: 1.9 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #060E18 0%, #0E2036 50%, #99C2FF 100%)',
      bgPattern: 'lines',
      primaryIcon: '⚡',
      secondaryElements: ['lightning-sparks', 'targeting-rings', 'plasma-core']
    },
    motionConfig: {
      type: 'light-pulse',
      speed: 1.4,
      intensity: 0.9,
      direction: 'radial',
      glowColor: '#99C2FF',
      particleCount: 26
    },
    searchQueries: ['sniper discord banner', 'railgun gaming pfp', 'esports banner']
  },
  {
    id: 'game-04',
    slug: 'speedrunner-neon-drift',
    title: 'Speedrunner: Synthwave Drift',
    description: 'A customized hypercar drifting around neon wireframe turns under a giant low-poly sunset horizon.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'energetic',
    style: 'neon-glow',
    tags: ['synthwave', 'car', 'drift', 'neon', 'speed'],
    profileThemeHex: '#120516',
    accentHex: '#FF84BA',
    glowHex: '#FFDF82',
    paletteColors: ['#FF84BA', '#FFDF82', '#99C2FF', '#120516'],
    focalPoint: {
      banner: { x: 68, y: 54 },
      pfp: { x: 68, y: 46, zoom: 1.7 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #120516 0%, #2A0C32 50%, #FF84BA 100%)',
      bgPattern: 'grid',
      primaryIcon: '🏎️',
      secondaryElements: ['neon-sun', 'tire-smoke', 'wireframe-grid']
    },
    motionConfig: {
      type: 'parallax',
      speed: 1.6,
      intensity: 0.85,
      direction: 'left',
      glowColor: '#FF84BA',
      particleCount: 28
    },
    searchQueries: ['synthwave car banner', 'neon drift pfp discord', 'racing banner']
  },
  {
    id: 'game-05',
    slug: 'eldritch-soulslike-knight',
    title: 'Eldritch Knight: Ashen Bonfire',
    description: 'A battered greatsword driven into a mound of coiled ashes with swirling ember embers in a desolate castle courtyard.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'moody',
    style: 'matte-painting',
    tags: ['souls', 'bonfire', 'sword', 'knight', 'dark-souls'],
    profileThemeHex: '#140804',
    accentHex: '#FF8F00',
    glowHex: '#C62828',
    paletteColors: ['#FF8F00', '#C62828', '#F5EBDD', '#140804'],
    focalPoint: {
      banner: { x: 60, y: 48 },
      pfp: { x: 60, y: 40, zoom: 1.7 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #140804 0%, #2B1107 50%, #FF8F00 100%)',
      bgPattern: 'waves',
      primaryIcon: '🔥',
      secondaryElements: ['glowing-embers', 'broken-armor', 'castle-ruins']
    },
    motionConfig: {
      type: 'particle',
      speed: 1.1,
      intensity: 0.75,
      direction: 'up',
      glowColor: '#FF8F00',
      particleCount: 25
    },
    searchQueries: ['dark souls discord banner', 'bonfire pfp', 'knight banner discord']
  },
  {
    id: 'game-06',
    slug: 'netrunner-rig-cyberdeck',
    title: 'Netrunner Cyberdeck Console',
    description: 'Green phosphorus CRT screen matrices rendering live server node bypass diagrams and firewall breach alerts.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'futuristic',
    style: 'neon-glow',
    tags: ['hacker', 'terminal', 'matrix', 'green', 'code'],
    profileThemeHex: '#041008',
    accentHex: '#7DCCAD',
    glowHex: '#BBF1D2',
    paletteColors: ['#7DCCAD', '#BBF1D2', '#315B8C', '#041008'],
    focalPoint: {
      banner: { x: 72, y: 50 },
      pfp: { x: 72, y: 42, zoom: 1.6 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #041008 0%, #0A2213 50%, #7DCCAD 100%)',
      bgPattern: 'circuit',
      primaryIcon: '💻',
      secondaryElements: ['code-cascade', 'terminal-cursor', 'firewall-hex']
    },
    motionConfig: {
      type: 'cyber-grid',
      speed: 1.3,
      intensity: 0.8,
      direction: 'down',
      glowColor: '#7DCCAD',
      particleCount: 20
    },
    searchQueries: ['hacker discord banner', 'terminal matrix pfp', 'green code banner']
  },
  {
    id: 'game-07',
    slug: 'battle-royale-zone-drop',
    title: 'Dropzone Victory: Electric Blue Storm',
    description: 'An airborne glider descending above high-rise islands bordered by a closing wall of electric storm lightning.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'energetic',
    style: 'cel-shaded',
    tags: ['battle-royale', 'storm', 'glider', 'blue', 'drop'],
    profileThemeHex: '#08101C',
    accentHex: '#99C2FF',
    glowHex: '#BADFDB',
    paletteColors: ['#99C2FF', '#BADFDB', '#3368A0', '#08101C'],
    focalPoint: {
      banner: { x: 66, y: 46 },
      pfp: { x: 66, y: 38, zoom: 1.8 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #08101C 0%, #12243E 50%, #99C2FF 100%)',
      bgPattern: 'lines',
      primaryIcon: '🪂',
      secondaryElements: ['storm-wall', 'lightning', 'glider-streamers']
    },
    motionConfig: {
      type: 'light-pulse',
      speed: 1.2,
      intensity: 0.8,
      direction: 'radial',
      glowColor: '#99C2FF',
      particleCount: 24
    },
    searchQueries: ['battle royale banner', 'gaming storm pfp', 'fortnite style banner']
  },
  {
    id: 'game-08',
    slug: 'arcane-mage-duel',
    title: 'Arcane Mage: Crystal Spire Duel',
    description: 'Floating floating spell orbs clashing in mid-air above crystal spires with sparkling magical distortion rings.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'epic',
    style: 'cinematic-motion',
    tags: ['mage', 'magic', 'crystal', 'duel', 'arcane'],
    profileThemeHex: '#0E0616',
    accentHex: '#FF84BA',
    glowHex: '#99C2FF',
    paletteColors: ['#FF84BA', '#99C2FF', '#A290B7', '#0E0616'],
    focalPoint: {
      banner: { x: 65, y: 48 },
      pfp: { x: 65, y: 40, zoom: 1.7 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0E0616 0%, #220E34 50%, #FF84BA 100%)',
      bgPattern: 'hexagons',
      primaryIcon: '🔮',
      secondaryElements: ['mana-sparkles', 'spire-towers', 'magic-runes']
    },
    motionConfig: {
      type: 'floating',
      speed: 1.1,
      intensity: 0.75,
      direction: 'up',
      glowColor: '#FF84BA',
      particleCount: 22
    },
    searchQueries: ['magic gaming banner', 'arcane mage pfp', 'crystal banner discord']
  },
  {
    id: 'game-09',
    slug: 'fighting-game-champion',
    title: 'Arcade K.O. Final Round',
    description: 'Vibrant golden impact shockwaves and comic halftone speedlines freezing the ultimate combo finisher.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'energetic',
    style: 'cel-shaded',
    tags: ['fighting-game', 'arcade', 'combo', 'ko', 'yellow'],
    profileThemeHex: '#160C04',
    accentHex: '#FFDF82',
    glowHex: '#F2765E',
    paletteColors: ['#FFDF82', '#F2765E', '#C62828', '#160C04'],
    focalPoint: {
      banner: { x: 70, y: 46 },
      pfp: { x: 70, y: 38, zoom: 1.8 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #160C04 0%, #2E1909 50%, #FFDF82 100%)',
      bgPattern: 'dots',
      primaryIcon: '🥊',
      secondaryElements: ['hit-spark', 'speedlines', 'arcade-font']
    },
    motionConfig: {
      type: 'glow-scan',
      speed: 1.5,
      intensity: 0.9,
      direction: 'right',
      glowColor: '#FFDF82',
      particleCount: 26
    },
    searchQueries: ['fighting game banner', 'arcade ko pfp', 'esports fighter banner']
  },
  {
    id: 'game-10',
    slug: 'retro-handheld-monochrome',
    title: 'Pocket Monolith: 8-Bit Emerald',
    description: 'Nostalgic 4-shade olive green LCD screen displaying high-score numbers and pixelated brick fortress labyrinths.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'chill',
    style: 'pixel-art',
    tags: ['gameboy', 'retro', '8-bit', 'green', 'handheld'],
    profileThemeHex: '#081208',
    accentHex: '#BADFDB',
    glowHex: '#7DCCAD',
    paletteColors: ['#BADFDB', '#7DCCAD', '#413333', '#081208'],
    focalPoint: {
      banner: { x: 60, y: 50 },
      pfp: { x: 60, y: 42, zoom: 1.5 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #081208 0%, #102410 50%, #BADFDB 100%)',
      bgPattern: 'grid',
      primaryIcon: '🕹️',
      secondaryElements: ['pixel-bricks', 'score-display', 'd-pad-glyphs']
    },
    motionConfig: {
      type: 'particle',
      speed: 0.8,
      intensity: 0.5,
      direction: 'down',
      glowColor: '#BADFDB',
      particleCount: 14
    },
    searchQueries: ['gameboy discord banner', 'retro pixel pfp', '8bit green banner']
  },
  {
    id: 'game-11',
    slug: 'stealth-infiltrator-laser',
    title: 'Shadow Infiltrator: Thermal Nightvision',
    description: 'Infrared nightvision goggles with triple green lens flares cutting through dense factory steam.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'mysterious',
    style: 'cinematic-motion',
    tags: ['stealth', 'nightvision', 'tactical', 'green-glow', 'specops'],
    profileThemeHex: '#040E06',
    accentHex: '#7DCCAD',
    glowHex: '#99C2FF',
    paletteColors: ['#7DCCAD', '#99C2FF', '#0D9488', '#040E06'],
    focalPoint: {
      banner: { x: 72, y: 46 },
      pfp: { x: 72, y: 38, zoom: 1.8 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #040E06 0%, #0A1C0E 50%, #7DCCAD 100%)',
      bgPattern: 'lines',
      primaryIcon: '🕶️',
      secondaryElements: ['laser-grid', 'steam-jets', 'hud-brackets']
    },
    motionConfig: {
      type: 'glow-scan',
      speed: 1.1,
      intensity: 0.8,
      direction: 'left',
      glowColor: '#7DCCAD',
      particleCount: 20
    },
    searchQueries: ['nightvision discord banner', 'tactical operative pfp', 'stealth gamer banner']
  },
  {
    id: 'game-12',
    slug: 'cozy-farm-sim-harvest',
    title: 'Valley Hearth: Autumn Farmstead',
    description: 'Golden wheat sheaves swaying in an autumn breeze outside a rustic wood cabin with smoking chimney.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'cozy',
    style: 'pixel-art',
    tags: ['stardew', 'farming', 'autumn', 'cozy', 'pixel'],
    profileThemeHex: '#180E06',
    accentHex: '#FFDF82',
    glowHex: '#F2765E',
    paletteColors: ['#FFDF82', '#F2765E', '#FFF6DE', '#180E06'],
    focalPoint: {
      banner: { x: 62, y: 50 },
      pfp: { x: 62, y: 42, zoom: 1.5 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #180E06 0%, #321D0D 50%, #FFDF82 100%)',
      bgPattern: 'waves',
      primaryIcon: '🌾',
      secondaryElements: ['wheat-stalks', 'cabin-smoke', 'leaves']
    },
    motionConfig: {
      type: 'particle',
      speed: 0.9,
      intensity: 0.6,
      direction: 'right',
      glowColor: '#FFDF82',
      particleCount: 20
    },
    searchQueries: ['stardew valley banner', 'cozy farm pfp discord', 'autumn pixel banner']
  },

  // =========================================================================
  // 3. CYBERPUNK & TECH (10 Presets)
  // =========================================================================
  {
    id: 'cyber-01',
    slug: 'neo-tokyo-overdrive',
    title: 'Neo-Tokyo Overdrive Horizon',
    description: 'Multi-tiered skyscraper city canyons adorned with animated holographic koi fish and floating transit routes.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'futuristic',
    style: 'neon-glow',
    tags: ['cyberpunk', 'neo-tokyo', 'hologram', 'neon', 'city'],
    isPopular: true,
    isStaffPick: true,
    profileThemeHex: '#0A0614',
    accentHex: '#FF84BA',
    glowHex: '#99C2FF',
    paletteColors: ['#FF84BA', '#99C2FF', '#FFDF82', '#0A0614'],
    focalPoint: {
      banner: { x: 68, y: 48 },
      pfp: { x: 68, y: 40, zoom: 1.7 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0A0614 0%, #1A0C2E 50%, #FF84BA 100%)',
      bgPattern: 'grid',
      primaryIcon: '🏙️',
      secondaryElements: ['holo-koi', 'flying-cars', 'neon-kanji']
    },
    motionConfig: {
      type: 'glow-scan',
      speed: 1.3,
      intensity: 0.85,
      direction: 'right',
      glowColor: '#FF84BA',
      particleCount: 25
    },
    searchQueries: ['cyberpunk discord banner', 'neo tokyo pfp', 'neon city banner']
  },
  {
    id: 'cyber-02',
    slug: 'neural-interface-jack',
    title: 'Neural Link: Synaptic Overload',
    description: 'Bioluminescent fiber-optic cords connecting into a chrome neck port with pulsing electric cyan currents.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'futuristic',
    style: '3d-render',
    tags: ['neural', 'cyberware', 'cyan', 'chrome', 'synapse'],
    profileThemeHex: '#040C16',
    accentHex: '#99C2FF',
    glowHex: '#BADFDB',
    paletteColors: ['#99C2FF', '#BADFDB', '#3368A0', '#040C16'],
    focalPoint: {
      banner: { x: 74, y: 44 },
      pfp: { x: 74, y: 36, zoom: 1.9 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #040C16 0%, #0A1E34 50%, #99C2FF 100%)',
      bgPattern: 'circuit',
      primaryIcon: '🧠',
      secondaryElements: ['fiber-optics', 'chrome-jack', 'voltage-arcs']
    },
    motionConfig: {
      type: 'light-pulse',
      speed: 1.4,
      intensity: 0.9,
      direction: 'radial',
      glowColor: '#99C2FF',
      particleCount: 22
    },
    searchQueries: ['cyberware discord banner', 'neural link pfp', 'scifi tech banner']
  },
  {
    id: 'cyber-03',
    slug: 'glitch-phantom-vhs',
    title: 'Glitch Phantom: Corrupted Signal',
    description: 'Analog scanlines, chromatic aberration RGB split, and fractured digital geometry creating a ghostly silhouette.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'mysterious',
    style: 'neon-glow',
    tags: ['glitch', 'vhs', 'rgb-split', 'corrupt', 'phantom'],
    isPopular: true,
    profileThemeHex: '#0C0612',
    accentHex: '#FF84BA',
    glowHex: '#7DCCAD',
    paletteColors: ['#FF84BA', '#7DCCAD', '#99C2FF', '#0C0612'],
    focalPoint: {
      banner: { x: 65, y: 50 },
      pfp: { x: 65, y: 42, zoom: 1.6 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0C0612 0%, #1E0E2A 50%, #FF84BA 100%)',
      bgPattern: 'lines',
      primaryIcon: '📺',
      secondaryElements: ['scanlines', 'rgb-split', 'noise-blocks']
    },
    motionConfig: {
      type: 'glow-scan',
      speed: 1.7,
      intensity: 0.95,
      direction: 'wave',
      glowColor: '#FF84BA',
      particleCount: 28
    },
    searchQueries: ['glitch discord banner', 'vhs glitch pfp', 'rgb split banner']
  },
  {
    id: 'cyber-04',
    slug: 'quantum-core-reactor',
    title: 'Quantum Core: Zero Point Containment',
    description: 'Electromagnetic rings levitating around a blazing antimatter sphere in a deep underground research facility.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'epic',
    style: 'cinematic-motion',
    tags: ['reactor', 'core', 'plasma', 'rings', 'fusion'],
    profileThemeHex: '#080818',
    accentHex: '#FFDF82',
    glowHex: '#99C2FF',
    paletteColors: ['#FFDF82', '#99C2FF', '#F2765E', '#080818'],
    focalPoint: {
      banner: { x: 70, y: 46 },
      pfp: { x: 70, y: 38, zoom: 1.8 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #080818 0%, #121434 50%, #FFDF82 100%)',
      bgPattern: 'hexagons',
      primaryIcon: '⚛️',
      secondaryElements: ['containment-rings', 'plasma-flare', 'steam-valves']
    },
    motionConfig: {
      type: 'light-pulse',
      speed: 1.3,
      intensity: 0.85,
      direction: 'radial',
      glowColor: '#FFDF82',
      particleCount: 25
    },
    searchQueries: ['reactor discord banner', 'quantum core pfp', 'scifi energy banner']
  },
  {
    id: 'cyber-05',
    slug: 'high-altitude-hovercar',
    title: 'Skyway 404: Cloudline Patrol',
    description: 'Dual turbine jet exhaust creating orange contrails above endless cloud peaks and towering broadcast antennae.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'calm',
    style: 'atmospheric-mist',
    tags: ['hovercar', 'clouds', 'skyway', 'patrol', 'exhaust'],
    profileThemeHex: '#0B101C',
    accentHex: '#F2765E',
    glowHex: '#FFDF82',
    paletteColors: ['#F2765E', '#FFDF82', '#99C2FF', '#0B101C'],
    focalPoint: {
      banner: { x: 62, y: 52 },
      pfp: { x: 62, y: 44, zoom: 1.6 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0B101C 0%, #172238 50%, #F2765E 100%)',
      bgPattern: 'lines',
      primaryIcon: '🛸',
      secondaryElements: ['jet-stream', 'cloud-sea', 'spire-towers']
    },
    motionConfig: {
      type: 'parallax',
      speed: 1.2,
      intensity: 0.7,
      direction: 'left',
      glowColor: '#F2765E',
      particleCount: 20
    },
    searchQueries: ['hovercar banner discord', 'cyberpunk sky pfp', 'cloudline banner']
  },
  {
    id: 'cyber-06',
    slug: 'black-ice-intrusion',
    title: 'Black ICE: Deep Grid Intrusion',
    description: 'Diamond crystalline intrusion countermeasure program manifesting with razor-sharp refractive obsidian angles.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'ominous',
    style: '3d-render',
    tags: ['black-ice', 'firewall', 'intrusion', 'crypto', 'dark-tech'],
    profileThemeHex: '#08050E',
    accentHex: '#C62828',
    glowHex: '#FF84BA',
    paletteColors: ['#C62828', '#FF84BA', '#99C2FF', '#08050E'],
    focalPoint: {
      banner: { x: 72, y: 48 },
      pfp: { x: 72, y: 40, zoom: 1.7 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #08050E 0%, #190B22 50%, #C62828 100%)',
      bgPattern: 'hexagons',
      primaryIcon: '💎',
      secondaryElements: ['ice-shards', 'red-wireframe', 'alert-triangles']
    },
    motionConfig: {
      type: 'cyber-grid',
      speed: 1.4,
      intensity: 0.85,
      direction: 'wave',
      glowColor: '#C62828',
      particleCount: 22
    },
    searchQueries: ['black ice banner', 'cyber security pfp', 'dark tech banner discord']
  },
  {
    id: 'cyber-07',
    slug: 'cybernetic-surgeon-hud',
    title: 'Bionic Surgeon: Diagnostic Scan',
    description: 'Precision robotic calipers with ultraviolet sterilization beams inspecting complex biometric DNA helices.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'futuristic',
    style: 'neon-glow',
    tags: ['medical', 'hud', 'bionic', 'cyan', 'precision'],
    profileThemeHex: '#040E14',
    accentHex: '#BADFDB',
    glowHex: '#99C2FF',
    paletteColors: ['#BADFDB', '#99C2FF', '#0D9488', '#040E14'],
    focalPoint: {
      banner: { x: 66, y: 46 },
      pfp: { x: 66, y: 38, zoom: 1.8 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #040E14 0%, #0A1E2A 50%, #BADFDB 100%)',
      bgPattern: 'grid',
      primaryIcon: '🔬',
      secondaryElements: ['dna-spiral', 'scan-lines', 'calipers']
    },
    motionConfig: {
      type: 'glow-scan',
      speed: 1.2,
      intensity: 0.8,
      direction: 'down',
      glowColor: '#BADFDB',
      particleCount: 18
    },
    searchQueries: ['bionic discord banner', 'medical hud pfp', 'cyan scifi banner']
  },
  {
    id: 'cyber-08',
    slug: 'cyberpunk-alley-prowler',
    title: 'Alley Prowler: Optical Camouflage',
    description: 'An augmented recon unit cloaked in shimmering refraction shields watching from an elevated catwalk.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'mysterious',
    style: 'cinematic-motion',
    tags: ['recon', 'cloak', 'catwalk', 'stealth', 'purple'],
    profileThemeHex: '#0A0612',
    accentHex: '#A290B7',
    glowHex: '#FF84BA',
    paletteColors: ['#A290B7', '#FF84BA', '#B0CDE6', '#0A0612'],
    focalPoint: {
      banner: { x: 68, y: 48 },
      pfp: { x: 68, y: 40, zoom: 1.7 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0A0612 0%, #1A0E28 50%, #A290B7 100%)',
      bgPattern: 'lines',
      primaryIcon: '🥷',
      secondaryElements: ['heat-distortion', 'steam-vents', 'neon-wires']
    },
    motionConfig: {
      type: 'smoke',
      speed: 1.0,
      intensity: 0.7,
      direction: 'up',
      glowColor: '#A290B7',
      particleCount: 20
    },
    searchQueries: ['stealth cyberpunk banner', 'recon pfp discord', 'purple neon banner']
  },
  {
    id: 'cyber-09',
    slug: 'arcade-vaporwave-statue',
    title: 'Vapor Wave: Classical Marble & Glitch',
    description: 'A classic Roman bust statue fractured by neon magenta polygon grids, tropical palms, and wireframe grids.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'chill',
    style: 'neon-glow',
    tags: ['vaporwave', 'statue', 'aesthetic', 'palm', 'retro-90s'],
    profileThemeHex: '#120816',
    accentHex: '#FF84BA',
    glowHex: '#BADFDB',
    paletteColors: ['#FF84BA', '#BADFDB', '#FFDF82', '#120816'],
    focalPoint: {
      banner: { x: 64, y: 48 },
      pfp: { x: 64, y: 38, zoom: 1.7 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #120816 0%, #26122E 50%, #FF84BA 100%)',
      bgPattern: 'grid',
      primaryIcon: '🏛️',
      secondaryElements: ['palm-fronds', 'statue-glitch', 'sun-gradient']
    },
    motionConfig: {
      type: 'wave' as any,
      speed: 1.1,
      intensity: 0.75,
      direction: 'wave',
      glowColor: '#FF84BA',
      particleCount: 22
    },
    searchQueries: ['vaporwave discord banner', 'statue glitch pfp', 'aesthetic 90s banner']
  },
  {
    id: 'cyber-10',
    slug: 'orbital-comm-relay-sat',
    title: 'Orbital Comm Relay: Solar Array',
    description: 'Gold-leaf solar satellite panels catching bright solar dawn high above Earth atmospheric curved horizon.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'calm',
    style: 'matte-painting',
    tags: ['satellite', 'solar', 'space-station', 'earth', 'dawn'],
    profileThemeHex: '#050A14',
    accentHex: '#FFDF82',
    glowHex: '#99C2FF',
    paletteColors: ['#FFDF82', '#99C2FF', '#FFEFE3', '#050A14'],
    focalPoint: {
      banner: { x: 70, y: 44 },
      pfp: { x: 70, y: 36, zoom: 1.8 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #050A14 0%, #0C1A2E 50%, #FFDF82 100%)',
      bgPattern: 'stars',
      primaryIcon: '🛰️',
      secondaryElements: ['solar-flares', 'earth-curve', 'gold-foils']
    },
    motionConfig: {
      type: 'parallax',
      speed: 0.8,
      intensity: 0.6,
      direction: 'right',
      glowColor: '#FFDF82',
      particleCount: 16
    },
    searchQueries: ['satellite discord banner', 'orbital relay pfp', 'space station banner']
  },

  // =========================================================================
  // 4. DARK & GOTHIC (10 Presets)
  // =========================================================================
  {
    id: 'dark-01',
    slug: 'midnight-cathedral-raven',
    title: 'Midnight Cathedral: Corvid Perch',
    description: 'A perched obsidian raven atop a carved gothic spire silhouette under a gargantuan silver full moon.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'moody',
    style: 'atmospheric-mist',
    tags: ['gothic', 'raven', 'cathedral', 'moon', 'black'],
    isPopular: true,
    isStaffPick: true,
    profileThemeHex: '#0A0A0E',
    accentHex: '#99C2FF',
    glowHex: '#FFEFE3',
    paletteColors: ['#99C2FF', '#FFEFE3', '#4D6787', '#0A0A0E'],
    focalPoint: {
      banner: { x: 70, y: 46 },
      pfp: { x: 70, y: 38, zoom: 1.8 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0A0A0E 0%, #151620 50%, #99C2FF 100%)',
      bgPattern: 'none',
      primaryIcon: '🪶',
      secondaryElements: ['silver-moon', 'cathedral-spires', 'drifting-fog']
    },
    motionConfig: {
      type: 'smoke',
      speed: 0.8,
      intensity: 0.65,
      direction: 'up',
      glowColor: '#99C2FF',
      particleCount: 20
    },
    searchQueries: ['dark discord banner', 'gothic raven pfp', 'cathedral moon banner']
  },
  {
    id: 'dark-02',
    slug: 'blood-moon-eclipse-coven',
    title: 'Blood Moon Eclipse: Scarlet Veil',
    description: 'A terrifyingly beautiful blood-red lunar eclipse casting deep crimson reflections over a misty black lake.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'ominous',
    style: 'cinematic-motion',
    tags: ['blood-moon', 'eclipse', 'red', 'dark', 'lake'],
    isPopular: true,
    profileThemeHex: '#120406',
    accentHex: '#C62828',
    glowHex: '#FF84BA',
    paletteColors: ['#C62828', '#FF84BA', '#6D0808', '#120406'],
    focalPoint: {
      banner: { x: 65, y: 48 },
      pfp: { x: 65, y: 38, zoom: 1.7 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #120406 0%, #26080D 50%, #C62828 100%)',
      bgPattern: 'waves',
      primaryIcon: '🩸',
      secondaryElements: ['blood-moon', 'crimson-mist', 'water-ripples']
    },
    motionConfig: {
      type: 'particle',
      speed: 1.1,
      intensity: 0.8,
      direction: 'up',
      glowColor: '#C62828',
      particleCount: 24
    },
    searchQueries: ['blood moon discord banner', 'eclipse pfp discord', 'red dark banner']
  },
  {
    id: 'dark-03',
    slug: 'obsidian-gargoyle-rain',
    title: 'Obsidian Gargoyle: Torrential Vigil',
    description: 'Stone gargoyle statue braving torrential thunderstorm rainfall illuminated by periodic purple lightning strikes.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'moody',
    style: 'matte-painting',
    tags: ['gargoyle', 'rain', 'storm', 'stone', 'lightning'],
    profileThemeHex: '#08080C',
    accentHex: '#A290B7',
    glowHex: '#99C2FF',
    paletteColors: ['#A290B7', '#99C2FF', '#413333', '#08080C'],
    focalPoint: {
      banner: { x: 72, y: 48 },
      pfp: { x: 72, y: 40, zoom: 1.7 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #08080C 0%, #14141E 50%, #A290B7 100%)',
      bgPattern: 'lines',
      primaryIcon: '🗿',
      secondaryElements: ['rain-torrents', 'lightning-strikes', 'spire-ledges']
    },
    motionConfig: {
      type: 'rain',
      speed: 1.5,
      intensity: 0.9,
      direction: 'down',
      glowColor: '#A290B7',
      particleCount: 36
    },
    searchQueries: ['gargoyle discord banner', 'rainy gothic pfp', 'dark storm banner']
  },
  {
    id: 'dark-04',
    slug: 'victorian-vampire-manor',
    title: 'Crimson Manor: Velvet & Chandeliers',
    description: 'Flickering wax candelabras casting golden warmth across crimson damask wallpaper in an ancient vampire parlor.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'mysterious',
    style: 'cel-shaded',
    tags: ['vampire', 'victorian', 'candelabra', 'crimson', 'antique'],
    profileThemeHex: '#140608',
    accentHex: '#D45060',
    glowHex: '#FFDF82',
    paletteColors: ['#D45060', '#FFDF82', '#6D0808', '#140608'],
    focalPoint: {
      banner: { x: 64, y: 50 },
      pfp: { x: 64, y: 40, zoom: 1.6 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #140608 0%, #2A0C10 50%, #D45060 100%)',
      bgPattern: 'waves',
      primaryIcon: '🕯️',
      secondaryElements: ['candle-flames', 'velvet-drapes', 'damask-shadows']
    },
    motionConfig: {
      type: 'particle',
      speed: 0.9,
      intensity: 0.6,
      direction: 'up',
      glowColor: '#FFDF82',
      particleCount: 16
    },
    searchQueries: ['vampire discord banner', 'victorian gothic pfp', 'candlelight banner']
  },
  {
    id: 'dark-05',
    slug: 'phantom-mist-specter',
    title: 'Phantom Specter: Cryptic Fog',
    description: 'An ethereal pale specter floating through ancient tomb monoliths with faint turquoise willow-the-wisp flames.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'ethereal',
    style: 'atmospheric-mist',
    tags: ['ghost', 'specter', 'tomb', 'wisp', 'cyan'],
    profileThemeHex: '#040E10',
    accentHex: '#BADFDB',
    glowHex: '#BBF1D2',
    paletteColors: ['#BADFDB', '#BBF1D2', '#0D9488', '#040E10'],
    focalPoint: {
      banner: { x: 68, y: 46 },
      pfp: { x: 68, y: 38, zoom: 1.8 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #040E10 0%, #0B1E22 50%, #BADFDB 100%)',
      bgPattern: 'none',
      primaryIcon: '👻',
      secondaryElements: ['wisp-orbs', 'tombstone-crosses', 'dense-fog']
    },
    motionConfig: {
      type: 'smoke',
      speed: 0.9,
      intensity: 0.7,
      direction: 'up',
      glowColor: '#BADFDB',
      particleCount: 22
    },
    searchQueries: ['ghost discord banner', 'specter pfp', 'cryptic fog banner discord']
  },
  {
    id: 'dark-06',
    slug: 'cemetery-black-roses',
    title: 'Cemetery Solitude: Black Velvet Roses',
    description: 'Dew-covered black velvet roses entwined through rusted wrought-iron cemetery gates under twilight starfall.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'moody',
    style: 'matte-painting',
    tags: ['roses', 'black-rose', 'cemetery', 'iron', 'dew'],
    profileThemeHex: '#080808',
    accentHex: '#E2B4BD',
    glowHex: '#F7D6D0',
    paletteColors: ['#E2B4BD', '#F7D6D0', '#4A4A4A', '#080808'],
    focalPoint: {
      banner: { x: 60, y: 52 },
      pfp: { x: 60, y: 44, zoom: 1.5 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #080808 0%, #161616 50%, #E2B4BD 100%)',
      bgPattern: 'none',
      primaryIcon: '🥀',
      secondaryElements: ['iron-spikes', 'rose-petals', 'water-droplets']
    },
    motionConfig: {
      type: 'particle',
      speed: 0.7,
      intensity: 0.5,
      direction: 'down',
      glowColor: '#E2B4BD',
      particleCount: 18
    },
    searchQueries: ['black rose discord banner', 'cemetery gothic pfp', 'rose aesthetic banner']
  },
  {
    id: 'dark-07',
    slug: 'eldritch-eye-portal',
    title: 'Eldritch Eye: Cosmic Abyss',
    description: 'An ancient obsidian portal pulsing with cosmic purple tendrils and unblinking starry pupil geometry.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'ominous',
    style: 'neon-glow',
    tags: ['eldritch', 'cosmic-horror', 'abyss', 'eye', 'purple'],
    profileThemeHex: '#0A0412',
    accentHex: '#FF84BA',
    glowHex: '#99C2FF',
    paletteColors: ['#FF84BA', '#99C2FF', '#A290B7', '#0A0412'],
    focalPoint: {
      banner: { x: 70, y: 46 },
      pfp: { x: 70, y: 38, zoom: 1.8 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0A0412 0%, #1E0A34 50%, #FF84BA 100%)',
      bgPattern: 'hexagons',
      primaryIcon: '👁️',
      secondaryElements: ['tendrils', 'runic-circles', 'void-sparks']
    },
    motionConfig: {
      type: 'light-pulse',
      speed: 1.2,
      intensity: 0.85,
      direction: 'radial',
      glowColor: '#FF84BA',
      particleCount: 24
    },
    searchQueries: ['eldritch discord banner', 'cosmic horror pfp', 'void eye banner']
  },
  {
    id: 'dark-08',
    slug: 'grim-reaper-scythe-eclipse',
    title: 'Reaper Harvest: Silver Crescent',
    description: 'A hooded specter holding an immaculate silver scythe whose blade glints with the glow of falling meteors.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'epic',
    style: 'cel-shaded',
    tags: ['reaper', 'scythe', 'death', 'silver', 'meteor'],
    profileThemeHex: '#08080C',
    accentHex: '#99C2FF',
    glowHex: '#FFEFE3',
    paletteColors: ['#99C2FF', '#FFEFE3', '#2D0000', '#08080C'],
    focalPoint: {
      banner: { x: 72, y: 46 },
      pfp: { x: 72, y: 38, zoom: 1.8 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #08080C 0%, #12121A 50%, #99C2FF 100%)',
      bgPattern: 'lines',
      primaryIcon: '☠️',
      secondaryElements: ['scythe-curve', 'falling-stars', 'shroud-folds']
    },
    motionConfig: {
      type: 'glow-scan',
      speed: 1.3,
      intensity: 0.8,
      direction: 'right',
      glowColor: '#99C2FF',
      particleCount: 20
    },
    searchQueries: ['reaper discord banner', 'scythe pfp discord', 'grim reaper banner']
  },
  {
    id: 'dark-09',
    slug: 'cursed-knight-abyssal-armor',
    title: 'Cursed Relic: Black Iron Armor',
    description: 'A suit of medieval plate armor standing in a ruined chapel, internally illuminated by violet soul flame.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'moody',
    style: '3d-render',
    tags: ['cursed', 'armor', 'violet', 'chapel', 'souls'],
    profileThemeHex: '#08060F',
    accentHex: '#A290B7',
    glowHex: '#FF84BA',
    paletteColors: ['#A290B7', '#FF84BA', '#3D2D38', '#08060F'],
    focalPoint: {
      banner: { x: 66, y: 48 },
      pfp: { x: 66, y: 40, zoom: 1.7 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #08060F 0%, #161026 50%, #A290B7 100%)',
      bgPattern: 'grid',
      primaryIcon: '🛡️',
      secondaryElements: ['soul-fire', 'visor-slit', 'stone-columns']
    },
    motionConfig: {
      type: 'smoke',
      speed: 1.0,
      intensity: 0.75,
      direction: 'up',
      glowColor: '#A290B7',
      particleCount: 22
    },
    searchQueries: ['cursed armor banner', 'black knight pfp', 'dark fantasy discord banner']
  },
  {
    id: 'dark-10',
    slug: 'gothic-velvet-spiderweb',
    title: 'Arachne Palace: Dewdrop Webbing',
    description: 'Intricate silver spiderwebs strung across dark burgundy velvet curtains catching morning light prisms.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'mysterious',
    style: 'atmospheric-mist',
    tags: ['spiderweb', 'burgundy', 'velvet', 'dew', 'gothic-lace'],
    profileThemeHex: '#100408',
    accentHex: '#D45060',
    glowHex: '#F3E6D5',
    paletteColors: ['#D45060', '#F3E6D5', '#800020', '#100408'],
    focalPoint: {
      banner: { x: 62, y: 50 },
      pfp: { x: 62, y: 42, zoom: 1.6 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #100408 0%, #240810 50%, #D45060 100%)',
      bgPattern: 'hexagons',
      primaryIcon: '🕸️',
      secondaryElements: ['silver-threads', 'prisms', 'velvet-pleats']
    },
    motionConfig: {
      type: 'particle',
      speed: 0.8,
      intensity: 0.55,
      direction: 'down',
      glowColor: '#D45060',
      particleCount: 16
    },
    searchQueries: ['spiderweb discord banner', 'gothic velvet pfp', 'lace dark banner']
  },

  // =========================================================================
  // 5. SUPERHERO & COMIC (10 Presets)
  // =========================================================================
  {
    id: 'hero-01',
    slug: 'cosmic-guardian-nova',
    title: 'Cosmic Nova: Planetary Aegis',
    description: 'A stellar guardian absorbing a solar flare into a translucent energy shield with golden starburst coronas.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'epic',
    style: 'cinematic-motion',
    tags: ['superhero', 'cosmic', 'nova', 'shield', 'gold'],
    isPopular: true,
    isStaffPick: true,
    profileThemeHex: '#0E0C06',
    accentHex: '#FFDF82',
    glowHex: '#F2765E',
    paletteColors: ['#FFDF82', '#F2765E', '#FF84BA', '#0E0C06'],
    focalPoint: {
      banner: { x: 70, y: 46 },
      pfp: { x: 70, y: 38, zoom: 1.8 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0E0C06 0%, #262010 50%, #FFDF82 100%)',
      bgPattern: 'stars',
      primaryIcon: '🌟',
      secondaryElements: ['energy-shield', 'solar-corona', 'star-flares']
    },
    motionConfig: {
      type: 'light-pulse',
      speed: 1.3,
      intensity: 0.85,
      direction: 'radial',
      glowColor: '#FFDF82',
      particleCount: 25
    },
    searchQueries: ['superhero discord banner', 'cosmic guardian pfp', 'gold hero banner']
  },
  {
    id: 'hero-02',
    slug: 'vigilante-night-shadow',
    title: 'Night Vigilante: Gargoyle Overlook',
    description: 'A cloaked protector perched above rain-slicked city streets as a distant spotlight cuts through the storm clouds.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'moody',
    style: 'cel-shaded',
    tags: ['vigilante', 'bat', 'rain', 'dark-knight', 'city'],
    isPopular: true,
    profileThemeHex: '#080A10',
    accentHex: '#FFDF82',
    glowHex: '#99C2FF',
    paletteColors: ['#FFDF82', '#99C2FF', '#315B8C', '#080A10'],
    focalPoint: {
      banner: { x: 72, y: 46 },
      pfp: { x: 72, y: 38, zoom: 1.8 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #080A10 0%, #141A28 50%, #FFDF82 100%)',
      bgPattern: 'lines',
      primaryIcon: '🦇',
      secondaryElements: ['searchlight-cone', 'rain-streaks', 'cape-silhouette']
    },
    motionConfig: {
      type: 'rain',
      speed: 1.4,
      intensity: 0.85,
      direction: 'down',
      glowColor: '#99C2FF',
      particleCount: 30
    },
    searchQueries: ['batman style banner discord', 'vigilante pfp', 'night hero banner']
  },
  {
    id: 'hero-03',
    slug: 'thunder-god-mjolnir',
    title: 'Stormbringer: Asgardian Lightning',
    description: 'Electric azure bolts erupting from an enchanted war hammer charging the clouds with thunderous crackles.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'epic',
    style: 'cinematic-motion',
    tags: ['thor', 'thunder', 'lightning', 'hammer', 'asgard'],
    profileThemeHex: '#060E18',
    accentHex: '#99C2FF',
    glowHex: '#FFEFE3',
    paletteColors: ['#99C2FF', '#FFEFE3', '#3368A0', '#060E18'],
    focalPoint: {
      banner: { x: 68, y: 46 },
      pfp: { x: 68, y: 38, zoom: 1.8 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #060E18 0%, #0F223A 50%, #99C2FF 100%)',
      bgPattern: 'lines',
      primaryIcon: '⚡',
      secondaryElements: ['lightning-branches', 'cloud-burst', 'war-hammer']
    },
    motionConfig: {
      type: 'glow-scan',
      speed: 1.5,
      intensity: 0.9,
      direction: 'right',
      glowColor: '#99C2FF',
      particleCount: 26
    },
    searchQueries: ['lightning superhero banner', 'thunder god pfp discord', 'storm banner']
  },
  {
    id: 'hero-04',
    slug: 'scarlet-sorceress-hex-rift',
    title: 'Chaos Sorceress: Reality Hex',
    description: 'Vibrant crimson hex magic orbs bending local geometry and floating antique books in an astral sanctum.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'mysterious',
    style: 'cel-shaded',
    tags: ['scarlet-witch', 'chaos-magic', 'crimson', 'hex', 'sorcery'],
    profileThemeHex: '#120406',
    accentHex: '#C62828',
    glowHex: '#FF84BA',
    paletteColors: ['#C62828', '#FF84BA', '#F2765E', '#120406'],
    focalPoint: {
      banner: { x: 66, y: 48 },
      pfp: { x: 66, y: 38, zoom: 1.7 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #120406 0%, #26090D 50%, #C62828 100%)',
      bgPattern: 'hexagons',
      primaryIcon: '🔮',
      secondaryElements: ['chaos-glyphs', 'magic-wisps', 'shattered-glass']
    },
    motionConfig: {
      type: 'floating',
      speed: 1.2,
      intensity: 0.8,
      direction: 'up',
      glowColor: '#C62828',
      particleCount: 24
    },
    searchQueries: ['scarlet witch banner', 'chaos magic pfp', 'red comic hero banner']
  },
  {
    id: 'hero-05',
    slug: 'emerald-speedster-chronos',
    title: 'Chronos Speedster: Supersonic Blur',
    description: 'Emerald lightning trails winding through frozen falling raindrops as the speedster breaks the time barrier.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'energetic',
    style: 'neon-glow',
    tags: ['flash', 'speedster', 'emerald', 'lightning', 'supersonic'],
    profileThemeHex: '#041008',
    accentHex: '#7DCCAD',
    glowHex: '#BBF1D2',
    paletteColors: ['#7DCCAD', '#BBF1D2', '#0D9488', '#041008'],
    focalPoint: {
      banner: { x: 74, y: 46 },
      pfp: { x: 74, y: 38, zoom: 1.8 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #041008 0%, #0C2414 50%, #7DCCAD 100%)',
      bgPattern: 'lines',
      primaryIcon: '⚡',
      secondaryElements: ['frozen-raindrops', 'motion-streak', 'speed-arcs']
    },
    motionConfig: {
      type: 'glow-scan',
      speed: 1.8,
      intensity: 0.95,
      direction: 'left',
      glowColor: '#7DCCAD',
      particleCount: 28
    },
    searchQueries: ['speedster discord banner', 'green lightning pfp', 'fast hero banner']
  },
  {
    id: 'hero-06',
    slug: 'iron-bastion-power-armor',
    title: 'Titan Bastion: Arc Reactor Core',
    description: 'Gleaming gold-titanium composite alloy chestplate with an energized triangular arc reactor humming with power.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'epic',
    style: '3d-render',
    tags: ['iron-man', 'arc-reactor', 'armor', 'titanium', 'gold'],
    profileThemeHex: '#140608',
    accentHex: '#FFDF82',
    glowHex: '#99C2FF',
    paletteColors: ['#FFDF82', '#99C2FF', '#C62828', '#140608'],
    focalPoint: {
      banner: { x: 70, y: 44 },
      pfp: { x: 70, y: 36, zoom: 1.8 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #140608 0%, #2A0E12 50%, #FFDF82 100%)',
      bgPattern: 'hexagons',
      primaryIcon: '🦾',
      secondaryElements: ['arc-reactor', 'hud-overlay', 'cooling-steam']
    },
    motionConfig: {
      type: 'light-pulse',
      speed: 1.3,
      intensity: 0.85,
      direction: 'radial',
      glowColor: '#99C2FF',
      particleCount: 22
    },
    searchQueries: ['iron man discord banner', 'arc reactor pfp', 'titanium hero banner']
  },
  {
    id: 'hero-07',
    slug: 'arachnid-web-slinger-skyline',
    title: 'Arachnid Slinger: Sunset Drop',
    description: 'Silhouetted acrobat launching a high-tensile web strand between skyscrapers under a burning violet sunset.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'energetic',
    style: 'cel-shaded',
    tags: ['spider-man', 'web', 'skyline', 'sunset', 'swing'],
    profileThemeHex: '#100612',
    accentHex: '#FF84BA',
    glowHex: '#FFDF82',
    paletteColors: ['#FF84BA', '#FFDF82', '#99C2FF', '#100612'],
    focalPoint: {
      banner: { x: 68, y: 52 },
      pfp: { x: 68, y: 42, zoom: 1.7 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #100612 0%, #240E28 50%, #FF84BA 100%)',
      bgPattern: 'lines',
      primaryIcon: '🕷️',
      secondaryElements: ['web-lines', 'skyscraper-windows', 'sunset-halo']
    },
    motionConfig: {
      type: 'parallax',
      speed: 1.4,
      intensity: 0.8,
      direction: 'down',
      glowColor: '#FF84BA',
      particleCount: 24
    },
    searchQueries: ['spiderman style banner', 'web slinger pfp discord', 'sunset hero banner']
  },
  {
    id: 'hero-08',
    slug: 'solar-sentinel-cape',
    title: 'Solar Sentinel: Orbit Ascent',
    description: 'A crimson cape billowing in the vacuum of space while the hero gazes down upon Earth sunlit horizon.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'calm',
    style: 'cinematic-motion',
    tags: ['superman', 'solar', 'cape', 'space', 'earth'],
    profileThemeHex: '#080E1C',
    accentHex: '#FFDF82',
    glowHex: '#99C2FF',
    paletteColors: ['#FFDF82', '#99C2FF', '#C62828', '#080E1C'],
    focalPoint: {
      banner: { x: 64, y: 46 },
      pfp: { x: 64, y: 38, zoom: 1.8 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #080E1C 0%, #10203E 50%, #FFDF82 100%)',
      bgPattern: 'stars',
      primaryIcon: '🦸',
      secondaryElements: ['billowing-cape', 'earth-glow', 'sunbeam']
    },
    motionConfig: {
      type: 'floating',
      speed: 0.9,
      intensity: 0.65,
      direction: 'up',
      glowColor: '#FFDF82',
      particleCount: 18
    },
    searchQueries: ['superman discord banner', 'solar hero pfp', 'space cape banner']
  },
  {
    id: 'hero-09',
    slug: 'kinetic-psionic-forcefield',
    title: 'Psionic Forcefield: Telekinetic Ring',
    description: 'Magenta telekinetic geometric rings repelling incoming ballistic projectiles with glass-shattering energy ripples.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'energetic',
    style: 'neon-glow',
    tags: ['telekinesis', 'psionic', 'magenta', 'shield', 'x-men'],
    profileThemeHex: '#120614',
    accentHex: '#FF84BA',
    glowHex: '#FFEFE3',
    paletteColors: ['#FF84BA', '#FFEFE3', '#A290B7', '#120614'],
    focalPoint: {
      banner: { x: 72, y: 46 },
      pfp: { x: 72, y: 38, zoom: 1.8 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #120614 0%, #280E2C 50%, #FF84BA 100%)',
      bgPattern: 'hexagons',
      primaryIcon: '🔮',
      secondaryElements: ['repulsion-rings', 'shattered-shells', 'psi-sparkles']
    },
    motionConfig: {
      type: 'light-pulse',
      speed: 1.4,
      intensity: 0.85,
      direction: 'radial',
      glowColor: '#FF84BA',
      particleCount: 24
    },
    searchQueries: ['psionic hero banner', 'telekinetic pfp discord', 'magenta shield banner']
  },
  {
    id: 'hero-10',
    slug: 'comic-halftone-sound-fx',
    title: 'Comic Boom: Pop Art Explosion',
    description: 'Authentic Roy Lichtenstein inspired halftone dots, dynamic explosion starbursts, and bold retro comic styling.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'energetic',
    style: 'cel-shaded',
    tags: ['comic', 'halftone', 'pop-art', 'boom', 'retro'],
    profileThemeHex: '#140E04',
    accentHex: '#FFDF82',
    glowHex: '#F2765E',
    paletteColors: ['#FFDF82', '#F2765E', '#315B8C', '#140E04'],
    focalPoint: {
      banner: { x: 65, y: 48 },
      pfp: { x: 65, y: 40, zoom: 1.6 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #140E04 0%, #2E200A 50%, #FFDF82 100%)',
      bgPattern: 'dots',
      primaryIcon: '💥',
      secondaryElements: ['halftone-field', 'sound-fx-burst', 'action-lines']
    },
    motionConfig: {
      type: 'particle',
      speed: 1.2,
      intensity: 0.8,
      direction: 'radial',
      glowColor: '#FFDF82',
      particleCount: 22
    },
    searchQueries: ['comic pop art banner', 'halftone superhero pfp', 'retro comic banner']
  },

  // =========================================================================
  // 6. AESTHETIC & PASTEL (10 Presets)
  // =========================================================================
  {
    id: 'aes-01',
    slug: 'dreamy-cloudscape-pastel',
    title: 'Dreamy Cloudscape: Cotton Twilight',
    description: 'Soft puffy clouds illuminated by gentle lavender and peach sun rays with floating starlight glints.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'calm',
    style: 'atmospheric-mist',
    tags: ['pastel', 'clouds', 'dreamy', 'lavender', 'soft'],
    isPopular: true,
    isStaffPick: true,
    profileThemeHex: '#140E16',
    accentHex: '#FDCEDF',
    glowHex: '#FFF6DE',
    paletteColors: ['#FDCEDF', '#FFF6DE', '#BADFDB', '#140E16'],
    focalPoint: {
      banner: { x: 60, y: 50 },
      pfp: { x: 60, y: 42, zoom: 1.5 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #140E16 0%, #2A1A2E 50%, #FDCEDF 100%)',
      bgPattern: 'waves',
      primaryIcon: '☁️',
      secondaryElements: ['cotton-clouds', 'soft-stars', 'sun-crepuscular']
    },
    motionConfig: {
      type: 'floating',
      speed: 0.7,
      intensity: 0.5,
      direction: 'up',
      glowColor: '#FDCEDF',
      particleCount: 16
    },
    searchQueries: ['aesthetic discord banner', 'pastel cloud pfp', 'soft dreamy banner']
  },
  {
    id: 'aes-02',
    slug: 'lavender-twilight-cafe',
    title: 'Lavender Twilight: Terrace Starlight',
    description: 'A quiet Parisian balcony café adorned with fairy string lights overlooking calm purple lavender hills.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'cozy',
    style: 'cel-shaded',
    tags: ['lavender', 'cafe', 'fairy-lights', 'twilight', 'purple'],
    profileThemeHex: '#100C16',
    accentHex: '#A290B7',
    glowHex: '#FFDF82',
    paletteColors: ['#A290B7', '#FFDF82', '#B0CDE6', '#100C16'],
    focalPoint: {
      banner: { x: 65, y: 48 },
      pfp: { x: 65, y: 40, zoom: 1.6 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #100C16 0%, #221830 50%, #A290B7 100%)',
      bgPattern: 'none',
      primaryIcon: '☕',
      secondaryElements: ['fairy-lights', 'lavender-blooms', 'coffee-cup']
    },
    motionConfig: {
      type: 'particle',
      speed: 0.8,
      intensity: 0.55,
      direction: 'up',
      glowColor: '#FFDF82',
      particleCount: 18
    },
    searchQueries: ['lavender discord banner', 'aesthetic cafe pfp', 'fairy lights banner']
  },
  {
    id: 'aes-03',
    slug: 'sunset-horizon-gradient',
    title: 'Cosmic Sunset: Horizon Fade',
    description: 'An immaculate seamless four-color gradient transition between deep cosmic navy, electric blue, rose, and amber.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'calm',
    style: 'cinematic-motion',
    tags: ['gradient', 'cosmic-sunset', 'minimal', 'clean', 'modern'],
    isPopular: true,
    profileThemeHex: '#090C16',
    accentHex: '#FF84BA',
    glowHex: '#FFDF82',
    paletteColors: ['#FF84BA', '#FFDF82', '#99C2FF', '#090C16'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.4 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #090C16 0%, #263454 35%, #FF84BA 70%, #FFDF82 100%)',
      bgPattern: 'none',
      primaryIcon: '🌅',
      secondaryElements: ['smooth-fade', 'subtle-glow', 'horizon-line']
    },
    motionConfig: {
      type: 'glow-scan',
      speed: 0.8,
      intensity: 0.6,
      direction: 'right',
      glowColor: '#FF84BA',
      particleCount: 12
    },
    searchQueries: ['cosmic sunset banner', 'gradient discord banner', 'aesthetic pfp matching']
  },
  {
    id: 'aes-04',
    slug: 'soft-peach-botanical-bloom',
    title: 'Peach Blossom: Botanical Studio',
    description: 'Minimalist line-art floral botanicals pressed over warm peach linen paper with subtle gold foil accents.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'calm',
    style: 'lo-fi-grain',
    tags: ['peach', 'botanical', 'floral', 'line-art', 'minimal'],
    profileThemeHex: '#160E0A',
    accentHex: '#FFC5AA',
    glowHex: '#FFF6DE',
    paletteColors: ['#FFC5AA', '#FFF6DE', '#E2B4BD', '#160E0A'],
    focalPoint: {
      banner: { x: 62, y: 50 },
      pfp: { x: 62, y: 42, zoom: 1.5 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #160E0A 0%, #2E1C15 50%, #FFC5AA 100%)',
      bgPattern: 'dots',
      primaryIcon: '🌿',
      secondaryElements: ['line-leaves', 'gold-foils', 'linen-texture']
    },
    motionConfig: {
      type: 'particle',
      speed: 0.6,
      intensity: 0.45,
      direction: 'up',
      glowColor: '#FFC5AA',
      particleCount: 14
    },
    searchQueries: ['peach aesthetic banner', 'botanical pfp discord', 'minimal floral banner']
  },
  {
    id: 'aes-05',
    slug: 'floating-origami-cranes',
    title: 'Origami Dreams: Paper Cranes in Flight',
    description: 'Delicate pastel origami paper cranes floating through a golden sky with soft cloud reflections below.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'ethereal',
    style: 'cel-shaded',
    tags: ['origami', 'paper-cranes', 'japanese', 'peaceful', 'clouds'],
    profileThemeHex: '#120E14',
    accentHex: '#BADFDB',
    glowHex: '#FDCEDF',
    paletteColors: ['#BADFDB', '#FDCEDF', '#FFF6DE', '#120E14'],
    focalPoint: {
      banner: { x: 66, y: 48 },
      pfp: { x: 66, y: 40, zoom: 1.6 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #120E14 0%, #221A28 50%, #BADFDB 100%)',
      bgPattern: 'waves',
      primaryIcon: '🕊️',
      secondaryElements: ['paper-cranes', 'cloud-reflections', 'gold-dust']
    },
    motionConfig: {
      type: 'floating',
      speed: 0.9,
      intensity: 0.6,
      direction: 'up',
      glowColor: '#BADFDB',
      particleCount: 18
    },
    searchQueries: ['origami discord banner', 'paper crane pfp', 'peaceful aesthetic banner']
  },
  {
    id: 'aes-06',
    slug: 'starlit-cotton-candy-dusk',
    title: 'Cotton Candy Dusk: Pink & Mint',
    description: 'Swirling pastel pink and mint green aurora bands rippling over gentle snow-dusted rolling hills.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'calm',
    style: 'atmospheric-mist',
    tags: ['cotton-candy', 'aurora', 'mint', 'pink', 'snow'],
    profileThemeHex: '#0E1412',
    accentHex: '#F2BED1',
    glowHex: '#BBF1D2',
    paletteColors: ['#F2BED1', '#BBF1D2', '#BADFDB', '#0E1412'],
    focalPoint: {
      banner: { x: 60, y: 50 },
      pfp: { x: 60, y: 42, zoom: 1.5 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0E1412 0%, #1A2824 50%, #F2BED1 100%)',
      bgPattern: 'waves',
      primaryIcon: '🌌',
      secondaryElements: ['aurora-ribbons', 'distant-stars', 'snow-glitter']
    },
    motionConfig: {
      type: 'aurora',
      speed: 0.8,
      intensity: 0.65,
      direction: 'wave',
      glowColor: '#F2BED1',
      particleCount: 20
    },
    searchQueries: ['cotton candy banner discord', 'pastel aurora pfp', 'pink mint banner']
  },
  {
    id: 'aes-07',
    slug: 'vintage-cassette-tape-reverie',
    title: 'Mixtape 1989: Lo-Fi Reverie',
    description: 'A transparent audio cassette tape resting on a retro desk with tangled brown magnetic tape forming hearts.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'chill',
    style: 'lo-fi-grain',
    tags: ['cassette', 'mixtape', 'retro', '80s', 'nostalgia'],
    profileThemeHex: '#140E0A',
    accentHex: '#F599C6',
    glowHex: '#FFEA88',
    paletteColors: ['#F599C6', '#FFEA88', '#7DCCAD', '#140E0A'],
    focalPoint: {
      banner: { x: 64, y: 52 },
      pfp: { x: 64, y: 44, zoom: 1.6 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #140E0A 0%, #2A1D15 50%, #F599C6 100%)',
      bgPattern: 'lines',
      primaryIcon: '📼',
      secondaryElements: ['cassette-wheels', 'tape-ribbon', 'film-grain']
    },
    motionConfig: {
      type: 'particle',
      speed: 0.9,
      intensity: 0.5,
      direction: 'radial',
      glowColor: '#FFEA88',
      particleCount: 16
    },
    searchQueries: ['cassette discord banner', 'retro mixtape pfp', 'lofi cassette banner']
  },
  {
    id: 'aes-08',
    slug: 'mint-meadow-breeze',
    title: 'Mint Meadow: Dandelion Clock',
    description: 'Close-up dandelion seeds catching golden evening light as a gentle breeze carries them into the meadow.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'calm',
    style: 'matte-painting',
    tags: ['dandelion', 'meadow', 'mint', 'breeze', 'seeds'],
    profileThemeHex: '#08120C',
    accentHex: '#BADFDB',
    glowHex: '#FFDF82',
    paletteColors: ['#BADFDB', '#FFDF82', '#BBF1D2', '#08120C'],
    focalPoint: {
      banner: { x: 68, y: 48 },
      pfp: { x: 68, y: 40, zoom: 1.6 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #08120C 0%, #122418 50%, #BADFDB 100%)',
      bgPattern: 'waves',
      primaryIcon: '🌱',
      secondaryElements: ['dandelion-seeds', 'golden-light', 'grass-blades']
    },
    motionConfig: {
      type: 'particle',
      speed: 0.8,
      intensity: 0.6,
      direction: 'right',
      glowColor: '#FFDF82',
      particleCount: 22
    },
    searchQueries: ['dandelion discord banner', 'mint meadow pfp', 'nature aesthetic banner']
  },
  {
    id: 'aes-09',
    slug: 'glass-reflection-water-serenity',
    title: 'Water Mirror: Ripple Reflection',
    description: 'Circular geometric water droplets falling onto a calm reflective pool creating concentric golden ripple rings.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'calm',
    style: '3d-render',
    tags: ['water', 'ripples', 'zen', 'reflection', 'minimal'],
    profileThemeHex: '#060E14',
    accentHex: '#99C2FF',
    glowHex: '#FFEFE3',
    paletteColors: ['#99C2FF', '#FFEFE3', '#BADFDB', '#060E14'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.5 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #060E14 0%, #0E1E2C 50%, #99C2FF 100%)',
      bgPattern: 'waves',
      primaryIcon: '💧',
      secondaryElements: ['concentric-rings', 'glass-caustics', 'droplet']
    },
    motionConfig: {
      type: 'light-pulse',
      speed: 0.9,
      intensity: 0.6,
      direction: 'radial',
      glowColor: '#99C2FF',
      particleCount: 14
    },
    searchQueries: ['water ripple banner discord', 'zen water pfp', 'minimal blue banner']
  },
  {
    id: 'aes-10',
    slug: 'golden-hour-sunflower-field',
    title: 'Golden Hour: Sunflowers at Sunset',
    description: 'Towering sunflowers turned toward a warm honey-colored sun with drifting pollen dust motes.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'cozy',
    style: 'atmospheric-mist',
    tags: ['sunflower', 'golden-hour', 'warm', 'yellow', 'summer'],
    profileThemeHex: '#160E04',
    accentHex: '#FFDF82',
    glowHex: '#F2765E',
    paletteColors: ['#FFDF82', '#F2765E', '#FFF6DE', '#160E04'],
    focalPoint: {
      banner: { x: 65, y: 48 },
      pfp: { x: 65, y: 40, zoom: 1.6 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #160E04 0%, #2E1D08 50%, #FFDF82 100%)',
      bgPattern: 'none',
      primaryIcon: '🌻',
      secondaryElements: ['sunflower-petals', 'pollen-motes', 'honey-glow']
    },
    motionConfig: {
      type: 'particle',
      speed: 0.7,
      intensity: 0.5,
      direction: 'up',
      glowColor: '#FFDF82',
      particleCount: 20
    },
    searchQueries: ['sunflower discord banner', 'golden hour pfp', 'yellow aesthetic banner']
  },

  // =========================================================================
  // 7. CINEMATIC & ATMOSPHERIC (10 Presets)
  // =========================================================================
  {
    id: 'cine-01',
    slug: 'blade-runner-neon-rain',
    title: 'Rainy Sector 2049: Neon Reflection',
    description: 'Heavy atmospheric rain pouring onto an elevated pedestrian bridge illuminated by towering holographic billboards.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'moody',
    style: 'cinematic-motion',
    tags: ['blade-runner', 'rain', 'anamorphic', 'cyberpunk', 'cinematic'],
    isPopular: true,
    isStaffPick: true,
    profileThemeHex: '#080C14',
    accentHex: '#99C2FF',
    glowHex: '#FF84BA',
    paletteColors: ['#99C2FF', '#FF84BA', '#3368A0', '#080C14'],
    focalPoint: {
      banner: { x: 68, y: 48 },
      pfp: { x: 68, y: 40, zoom: 1.7 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #080C14 0%, #101A2C 50%, #99C2FF 100%)',
      bgPattern: 'lines',
      primaryIcon: '🌧️',
      secondaryElements: ['heavy-rain', 'neon-signs', 'anamorphic-flare']
    },
    motionConfig: {
      type: 'rain',
      speed: 1.6,
      intensity: 0.9,
      direction: 'down',
      glowColor: '#99C2FF',
      particleCount: 40
    },
    searchQueries: ['blade runner discord banner', 'neon rain pfp', 'cinematic rain banner']
  },
  {
    id: 'cine-02',
    slug: 'interstellar-black-hole-gargantua',
    title: 'Gargantua: Accretion Disk Horizon',
    description: 'A gravitational singularity bending light around a blazing golden accretion disk with relativistic jets.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'epic',
    style: 'cinematic-motion',
    tags: ['black-hole', 'interstellar', 'space', 'gravity', 'gold'],
    isPopular: true,
    profileThemeHex: '#06060A',
    accentHex: '#FFDF82',
    glowHex: '#F2765E',
    paletteColors: ['#FFDF82', '#F2765E', '#99C2FF', '#06060A'],
    focalPoint: {
      banner: { x: 50, y: 50 },
      pfp: { x: 50, y: 50, zoom: 1.6 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #06060A 0%, #141216 50%, #FFDF82 100%)',
      bgPattern: 'stars',
      primaryIcon: '🕳️',
      secondaryElements: ['accretion-disk', 'light-bending', 'gravitational-rings']
    },
    motionConfig: {
      type: 'light-pulse',
      speed: 1.1,
      intensity: 0.8,
      direction: 'radial',
      glowColor: '#FFDF82',
      particleCount: 22
    },
    searchQueries: ['black hole discord banner', 'interstellar pfp', 'gargantua banner']
  },
  {
    id: 'cine-03',
    slug: 'foggy-nordic-pine-forest',
    title: 'Nordic Pines: Morning Mist & Frost',
    description: 'Vast pine canopy mountain ridges shrouded in drifting morning fog under a muted slate-blue Scandinavian dawn.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'calm',
    style: 'atmospheric-mist',
    tags: ['forest', 'pine', 'fog', 'nordic', 'mist'],
    profileThemeHex: '#081014',
    accentHex: '#BADFDB',
    glowHex: '#FFEFE3',
    paletteColors: ['#BADFDB', '#FFEFE3', '#4D6787', '#081014'],
    focalPoint: {
      banner: { x: 62, y: 52 },
      pfp: { x: 62, y: 44, zoom: 1.5 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #081014 0%, #102028 50%, #BADFDB 100%)',
      bgPattern: 'none',
      primaryIcon: '🌲',
      secondaryElements: ['pine-silhouettes', 'valley-fog', 'morning-chill']
    },
    motionConfig: {
      type: 'smoke',
      speed: 0.7,
      intensity: 0.6,
      direction: 'left',
      glowColor: '#BADFDB',
      particleCount: 18
    },
    searchQueries: ['forest discord banner', 'foggy pine pfp', 'nordic nature banner']
  },
  {
    id: 'cine-04',
    slug: 'dune-desert-mirage-arrakis',
    title: 'Arrakis Sands: Desert Solar Mirage',
    description: 'Sweeping orange desert sand dunes with shifting wind ripples under a blazing binary sun mirage.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'epic',
    style: 'matte-painting',
    tags: ['dune', 'desert', 'sand', 'sun', 'arrakis'],
    profileThemeHex: '#180C04',
    accentHex: '#F2765E',
    glowHex: '#FFDF82',
    paletteColors: ['#F2765E', '#FFDF82', '#FFF6DE', '#180C04'],
    focalPoint: {
      banner: { x: 66, y: 52 },
      pfp: { x: 66, y: 42, zoom: 1.6 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #180C04 0%, #341A08 50%, #F2765E 100%)',
      bgPattern: 'waves',
      primaryIcon: '🏜️',
      secondaryElements: ['sand-ridges', 'heat-mirage', 'binary-suns']
    },
    motionConfig: {
      type: 'particle',
      speed: 1.1,
      intensity: 0.65,
      direction: 'right',
      glowColor: '#FFDF82',
      particleCount: 22
    },
    searchQueries: ['dune discord banner', 'desert sand pfp', 'orange cinematic banner']
  },
  {
    id: 'cine-05',
    slug: 'submarine-trench-abyss',
    title: 'Mariana Abyss: Bioluminescent Trench',
    description: 'Deep ocean submersible searchlights piercing the abyssal blackness illuminating glowing jellyfish colonies.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'mysterious',
    style: '3d-render',
    tags: ['underwater', 'abyss', 'submersible', 'jellyfish', 'bioluminescence'],
    profileThemeHex: '#040A10',
    accentHex: '#BADFDB',
    glowHex: '#99C2FF',
    paletteColors: ['#BADFDB', '#99C2FF', '#0D9488', '#040A10'],
    focalPoint: {
      banner: { x: 70, y: 48 },
      pfp: { x: 70, y: 40, zoom: 1.7 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #040A10 0%, #0A1826 50%, #BADFDB 100%)',
      bgPattern: 'none',
      primaryIcon: '🪼',
      secondaryElements: ['searchlight-beams', 'bioluminescent-tentacles', 'water-bubbles']
    },
    motionConfig: {
      type: 'floating',
      speed: 0.8,
      intensity: 0.7,
      direction: 'up',
      glowColor: '#BADFDB',
      particleCount: 20
    },
    searchQueries: ['deep sea discord banner', 'underwater pfp', 'ocean abyss banner']
  },
  {
    id: 'cine-06',
    slug: 'volcanic-ember-caldera',
    title: 'Obsidian Caldera: Volcanic Ash & Magma',
    description: 'Cracked basalt obsidian tectonic plates revealing glowing red magma rivers with ascending hot ash embers.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'epic',
    style: 'matte-painting',
    tags: ['volcano', 'magma', 'lava', 'embers', 'fire'],
    profileThemeHex: '#140404',
    accentHex: '#FF8F00',
    glowHex: '#C62828',
    paletteColors: ['#FF8F00', '#C62828', '#F5EBDD', '#140404'],
    focalPoint: {
      banner: { x: 64, y: 50 },
      pfp: { x: 64, y: 42, zoom: 1.6 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #140404 0%, #2A0A0A 50%, #FF8F00 100%)',
      bgPattern: 'lines',
      primaryIcon: '🌋',
      secondaryElements: ['magma-veins', 'ash-plumes', 'heat-haze']
    },
    motionConfig: {
      type: 'particle',
      speed: 1.2,
      intensity: 0.8,
      direction: 'up',
      glowColor: '#FF8F00',
      particleCount: 26
    },
    searchQueries: ['volcano discord banner', 'lava embers pfp', 'magma banner discord']
  },
  {
    id: 'cine-07',
    slug: 'mountain-peak-blizzard',
    title: 'Himalayan Ridge: Arctic Whiteout',
    description: 'Snowstorm winds howling across jagged granite peaks under brilliant blue crevasse ice formations.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'epic',
    style: 'atmospheric-mist',
    tags: ['blizzard', 'mountain', 'snow', 'arctic', 'ice'],
    profileThemeHex: '#081018',
    accentHex: '#99C2FF',
    glowHex: '#FFEFE3',
    paletteColors: ['#99C2FF', '#FFEFE3', '#BADFDB', '#081018'],
    focalPoint: {
      banner: { x: 68, y: 46 },
      pfp: { x: 68, y: 38, zoom: 1.7 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #081018 0%, #122234 50%, #99C2FF 100%)',
      bgPattern: 'none',
      primaryIcon: '🏔️',
      secondaryElements: ['blizzard-snow', 'ice-cliffs', 'wind-wisps']
    },
    motionConfig: {
      type: 'particle',
      speed: 1.6,
      intensity: 0.9,
      direction: 'left',
      glowColor: '#FFEFE3',
      particleCount: 35
    },
    searchQueries: ['snow discord banner', 'mountain blizzard pfp', 'ice peak banner']
  },
  {
    id: 'cine-08',
    slug: 'ancient-temple-monolith-sun',
    title: 'Forgotten Monolith: Solstice Alignment',
    description: 'An overgrown stone obelisk catching the first direct sunbeam of the solstice through mountain cloudbreaks.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'ethereal',
    style: 'cinematic-motion',
    tags: ['monolith', 'temple', 'solstice', 'ruins', 'sunbeam'],
    profileThemeHex: '#0E0E0A',
    accentHex: '#FFDF82',
    glowHex: '#BADFDB',
    paletteColors: ['#FFDF82', '#BADFDB', '#757D6F', '#0E0E0A'],
    focalPoint: {
      banner: { x: 66, y: 46 },
      pfp: { x: 66, y: 38, zoom: 1.8 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0E0E0A 0%, #1E1E14 50%, #FFDF82 100%)',
      bgPattern: 'none',
      primaryIcon: '🏛️',
      secondaryElements: ['sunbeam-column', 'stone-carvings', 'ivy-vines']
    },
    motionConfig: {
      type: 'light-pulse',
      speed: 0.9,
      intensity: 0.7,
      direction: 'radial',
      glowColor: '#FFDF82',
      particleCount: 20
    },
    searchQueries: ['ancient temple banner', 'ruins monolith pfp', 'solstice sun banner']
  },
  {
    id: 'cine-09',
    slug: 'sunken-galleon-coral-reef',
    title: 'Sunken Galleon: Golden Doubloon Reef',
    description: 'A wooden pirate galleon rested on an azure seabed surrounded by vibrant neon sea anemones and sea turtles.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'calm',
    style: 'matte-painting',
    tags: ['shipwreck', 'coral', 'ocean', 'pirate', 'turtle'],
    profileThemeHex: '#041216',
    accentHex: '#BADFDB',
    glowHex: '#FFDF82',
    paletteColors: ['#BADFDB', '#FFDF82', '#315B8C', '#041216'],
    focalPoint: {
      banner: { x: 64, y: 50 },
      pfp: { x: 64, y: 42, zoom: 1.6 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #041216 0%, #0A242C 50%, #BADFDB 100%)',
      bgPattern: 'waves',
      primaryIcon: '⚓',
      secondaryElements: ['ship-hull', 'coral-polyps', 'sunlight-rays']
    },
    motionConfig: {
      type: 'floating',
      speed: 0.8,
      intensity: 0.6,
      direction: 'up',
      glowColor: '#BADFDB',
      particleCount: 16
    },
    searchQueries: ['shipwreck discord banner', 'coral reef pfp', 'pirate ocean banner']
  },
  {
    id: 'cine-10',
    slug: 'cyber-highway-overpass',
    title: 'Expressway 99: Midnight Light Trails',
    description: 'Long exposure neon red and white car light trails weaving along a multi-level elevated concrete highway.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'energetic',
    style: 'cinematic-motion',
    tags: ['long-exposure', 'highway', 'light-trails', 'night-city', 'speed'],
    profileThemeHex: '#0A0812',
    accentHex: '#FF84BA',
    glowHex: '#FFDF82',
    paletteColors: ['#FF84BA', '#FFDF82', '#99C2FF', '#0A0812'],
    focalPoint: {
      banner: { x: 70, y: 52 },
      pfp: { x: 70, y: 44, zoom: 1.7 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0A0812 0%, #181226 50%, #FF84BA 100%)',
      bgPattern: 'lines',
      primaryIcon: '🛣️',
      secondaryElements: ['light-streaks', 'overpass-beams', 'city-glow']
    },
    motionConfig: {
      type: 'glow-scan',
      speed: 1.5,
      intensity: 0.85,
      direction: 'left',
      glowColor: '#FF84BA',
      particleCount: 24
    },
    searchQueries: ['highway discord banner', 'light trails pfp', 'night road banner']
  },

  // =========================================================================
  // 8. LO-FI & CHILL (8 Presets)
  // =========================================================================
  {
    id: 'lofi-01',
    slug: 'rainy-windowpane-study',
    title: 'Rainy Windowpane: 3 AM Beats',
    description: 'Rain droplets trickling down a double-glazed window overlooking fuzzy out-of-focus city traffic lights.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'chill',
    style: 'lo-fi-grain',
    tags: ['lofi', 'rain', 'window', 'study', '3am'],
    isPopular: true,
    isStaffPick: true,
    profileThemeHex: '#0A0E14',
    accentHex: '#99C2FF',
    glowHex: '#FFDF82',
    paletteColors: ['#99C2FF', '#FFDF82', '#4D6787', '#0A0E14'],
    focalPoint: {
      banner: { x: 62, y: 50 },
      pfp: { x: 62, y: 42, zoom: 1.5 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0A0E14 0%, #161E2A 50%, #99C2FF 100%)',
      bgPattern: 'none',
      primaryIcon: '🌧️',
      secondaryElements: ['window-droplets', 'bokeh-lights', 'desk-reflection']
    },
    motionConfig: {
      type: 'rain',
      speed: 0.9,
      intensity: 0.7,
      direction: 'down',
      glowColor: '#99C2FF',
      particleCount: 25
    },
    searchQueries: ['lofi discord banner', 'rainy window pfp', '3am study banner']
  },
  {
    id: 'lofi-02',
    slug: 'midnight-bedroom-vinyl-turntable',
    title: 'Vinyl Turntable: Warm Needle Groove',
    description: 'A spinning black vinyl record with glowing amber stereo vacuum tubes and drifting dust in lamp illumination.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'cozy',
    style: 'cel-shaded',
    tags: ['vinyl', 'turntable', 'music', 'bedroom', 'record'],
    isPopular: true,
    profileThemeHex: '#140A06',
    accentHex: '#FFDF82',
    glowHex: '#F2765E',
    paletteColors: ['#FFDF82', '#F2765E', '#FFF6DE', '#140A06'],
    focalPoint: {
      banner: { x: 66, y: 48 },
      pfp: { x: 66, y: 40, zoom: 1.6 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #140A06 0%, #2A160E 50%, #FFDF82 100%)',
      bgPattern: 'dots',
      primaryIcon: '📻',
      secondaryElements: ['spinning-grooves', 'tube-filament', 'dust-motes']
    },
    motionConfig: {
      type: 'particle',
      speed: 0.7,
      intensity: 0.5,
      direction: 'up',
      glowColor: '#FFDF82',
      particleCount: 16
    },
    searchQueries: ['vinyl discord banner', 'turntable lofi pfp', 'record player banner']
  },
  {
    id: 'lofi-03',
    slug: 'cozy-fireplace-steaming-mug',
    title: 'Hearth & Marshmallow: Fireside Warmth',
    description: 'A steaming ceramic mug of hot chocolate with marshmallows sitting beside a crackling brick fireplace.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'cozy',
    style: 'cel-shaded',
    tags: ['fireplace', 'coffee', 'marshmallow', 'winter', 'hearth'],
    profileThemeHex: '#160804',
    accentHex: '#FBC02D',
    glowHex: '#FF8F00',
    paletteColors: ['#FBC02D', '#FF8F00', '#C62828', '#160804'],
    focalPoint: {
      banner: { x: 64, y: 50 },
      pfp: { x: 64, y: 42, zoom: 1.6 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #160804 0%, #2E120A 50%, #FBC02D 100%)',
      bgPattern: 'none',
      primaryIcon: '☕',
      secondaryElements: ['fireplace-embers', 'cup-steam', 'brick-texture']
    },
    motionConfig: {
      type: 'smoke',
      speed: 0.8,
      intensity: 0.6,
      direction: 'up',
      glowColor: '#FBC02D',
      particleCount: 18
    },
    searchQueries: ['fireplace discord banner', 'cozy mug pfp', 'winter hearth banner']
  },
  {
    id: 'lofi-04',
    slug: 'train-journey-sunset-clouds',
    title: 'Commuter Line: Sunset Cloud Train',
    description: 'Gazing through train passenger car windows as the sunset turns telephone poles and rice paddies into silhouettes.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'calm',
    style: 'lo-fi-grain',
    tags: ['train', 'commute', 'sunset', 'window', 'japan'],
    profileThemeHex: '#120810',
    accentHex: '#FF84BA',
    glowHex: '#FFDF82',
    paletteColors: ['#FF84BA', '#FFDF82', '#99C2FF', '#120810'],
    focalPoint: {
      banner: { x: 60, y: 50 },
      pfp: { x: 60, y: 42, zoom: 1.5 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #120810 0%, #261222 50%, #FF84BA 100%)',
      bgPattern: 'lines',
      primaryIcon: '🚆',
      secondaryElements: ['telephone-wires', 'sun-orange', 'window-frame']
    },
    motionConfig: {
      type: 'parallax',
      speed: 1.3,
      intensity: 0.75,
      direction: 'left',
      glowColor: '#FFDF82',
      particleCount: 20
    },
    searchQueries: ['train sunset banner', 'commuter lofi pfp', 'train window banner discord']
  },
  {
    id: 'lofi-05',
    slug: 'rooftop-cat-solitude',
    title: 'Rooftop Solitude: Feline Moonwatcher',
    description: 'A sleek black cat silhouette sitting on tile roof eaves looking out over endless glittering Tokyo city lights.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'chill',
    style: 'cel-shaded',
    tags: ['cat', 'rooftop', 'night', 'tokyo', 'silhouette'],
    profileThemeHex: '#0A0812',
    accentHex: '#99C2FF',
    glowHex: '#FF84BA',
    paletteColors: ['#99C2FF', '#FF84BA', '#FFDF82', '#0A0812'],
    focalPoint: {
      banner: { x: 68, y: 48 },
      pfp: { x: 68, y: 40, zoom: 1.7 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0A0812 0%, #161226 50%, #99C2FF 100%)',
      bgPattern: 'none',
      primaryIcon: '🐈‍⬛',
      secondaryElements: ['cat-tail-curl', 'city-lights', 'crescent-moon']
    },
    motionConfig: {
      type: 'particle',
      speed: 0.7,
      intensity: 0.5,
      direction: 'up',
      glowColor: '#99C2FF',
      particleCount: 16
    },
    searchQueries: ['cat rooftop discord banner', 'black cat night pfp', 'lofi cat banner']
  },
  {
    id: 'lofi-06',
    slug: 'late-night-coding-glow',
    title: '3 AM Code Session: Dual Monitor Ambient',
    description: 'Clean dark IDE editor screens casting soothing teal ambient light across a mechanical keyboard and headphones.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'chill',
    style: 'pixel-art',
    tags: ['coding', 'programmer', 'desk', 'keyboard', 'headphones'],
    profileThemeHex: '#060E12',
    accentHex: '#0D9488',
    glowHex: '#BADFDB',
    paletteColors: ['#0D9488', '#BADFDB', '#3368A0', '#060E12'],
    focalPoint: {
      banner: { x: 66, y: 50 },
      pfp: { x: 66, y: 42, zoom: 1.6 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #060E12 0%, #0E1E26 50%, #0D9488 100%)',
      bgPattern: 'grid',
      primaryIcon: '⌨️',
      secondaryElements: ['screen-glow', 'synth-wave-wallpaper', 'coffee-mug']
    },
    motionConfig: {
      type: 'glow-scan',
      speed: 0.9,
      intensity: 0.6,
      direction: 'down',
      glowColor: '#0D9488',
      particleCount: 15
    },
    searchQueries: ['programmer discord banner', 'coding desk pfp', 'developer lofi banner']
  },
  {
    id: 'lofi-07',
    slug: 'autumn-leaves-park-bench',
    title: 'Autumn Afternoon: Crisp Maple Leaves',
    description: 'A wooden park bench covered in golden amber and scarlet maple leaves catching late October sun rays.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'calm',
    style: 'lo-fi-grain',
    tags: ['autumn', 'leaves', 'maple', 'bench', 'park'],
    profileThemeHex: '#140A04',
    accentHex: '#F2765E',
    glowHex: '#FFDF82',
    paletteColors: ['#F2765E', '#FFDF82', '#FFF6DE', '#140A04'],
    focalPoint: {
      banner: { x: 62, y: 50 },
      pfp: { x: 62, y: 42, zoom: 1.5 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #140A04 0%, #2A1608 50%, #F2765E 100%)',
      bgPattern: 'none',
      primaryIcon: '🍁',
      secondaryElements: ['falling-maple', 'wood-grain', 'sun-specks']
    },
    motionConfig: {
      type: 'particle',
      speed: 0.9,
      intensity: 0.65,
      direction: 'down',
      glowColor: '#FFDF82',
      particleCount: 20
    },
    searchQueries: ['autumn discord banner', 'maple leaf pfp', 'fall aesthetic banner']
  },
  {
    id: 'lofi-08',
    slug: 'dusty-library-hearth',
    title: 'Old Bookshelf: Leather & Cedar',
    description: 'Floor-to-ceiling mahogany bookshelves stacked with leather-bound tomes and a brass reading lamp.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'cozy',
    style: 'cel-shaded',
    tags: ['library', 'books', 'mahogany', 'reading', 'brass-lamp'],
    profileThemeHex: '#120804',
    accentHex: '#FFDF82',
    glowHex: '#F5EBDD',
    paletteColors: ['#FFDF82', '#F5EBDD', '#413333', '#120804'],
    focalPoint: {
      banner: { x: 65, y: 48 },
      pfp: { x: 65, y: 40, zoom: 1.6 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #120804 0%, #261208 50%, #FFDF82 100%)',
      bgPattern: 'none',
      primaryIcon: '📚',
      secondaryElements: ['book-spines', 'lamp-halo', 'dust-float']
    },
    motionConfig: {
      type: 'particle',
      speed: 0.6,
      intensity: 0.45,
      direction: 'up',
      glowColor: '#FFDF82',
      particleCount: 14
    },
    searchQueries: ['bookshelf discord banner', 'library pfp discord', 'study books banner']
  },

  // =========================================================================
  // 9. SPACE & COSMIC (8 Presets)
  // =========================================================================
  {
    id: 'space-01',
    slug: 'andromeda-nebula-drift',
    title: 'Andromeda Core: Violet Stellar Nursery',
    description: 'Dense glowing gas filaments weaving through millions of newborn blue stars and gravitational lens warps.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'epic',
    style: 'cinematic-motion',
    tags: ['andromeda', 'nebula', 'galaxy', 'space', 'violet'],
    isPopular: true,
    isStaffPick: true,
    profileThemeHex: '#080512',
    accentHex: '#FF84BA',
    glowHex: '#99C2FF',
    paletteColors: ['#FF84BA', '#99C2FF', '#FFDF82', '#080512'],
    focalPoint: {
      banner: { x: 60, y: 50 },
      pfp: { x: 60, y: 42, zoom: 1.6 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #080512 0%, #160C26 50%, #FF84BA 100%)',
      bgPattern: 'stars',
      primaryIcon: '🌌',
      secondaryElements: ['gas-filaments', 'blue-stars', 'lens-flare']
    },
    motionConfig: {
      type: 'particle',
      speed: 0.8,
      intensity: 0.7,
      direction: 'radial',
      glowColor: '#FF84BA',
      particleCount: 30
    },
    searchQueries: ['space discord banner', 'andromeda nebula pfp', 'galaxy banner discord']
  },
  {
    id: 'space-02',
    slug: 'saturn-ring-voyager-shadow',
    title: 'Titan Voyager: Saturn Ring Crossing',
    description: 'The immense shadow of Saturn cast across its paper-thin ice particle rings with tiny moon silhouettes in orbit.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'calm',
    style: '3d-render',
    tags: ['saturn', 'rings', 'titan', 'voyager', 'planet'],
    isPopular: true,
    profileThemeHex: '#0A0C14',
    accentHex: '#FFDF82',
    glowHex: '#FFEFE3',
    paletteColors: ['#FFDF82', '#FFEFE3', '#99C2FF', '#0A0C14'],
    focalPoint: {
      banner: { x: 68, y: 46 },
      pfp: { x: 68, y: 38, zoom: 1.7 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0A0C14 0%, #161A28 50%, #FFDF82 100%)',
      bgPattern: 'stars',
      primaryIcon: '🪐',
      secondaryElements: ['ice-rings', 'planet-shadow', 'distant-sun']
    },
    motionConfig: {
      type: 'parallax',
      speed: 0.7,
      intensity: 0.55,
      direction: 'left',
      glowColor: '#FFDF82',
      particleCount: 16
    },
    searchQueries: ['saturn discord banner', 'ring planet pfp', 'space rings banner']
  },
  {
    id: 'space-03',
    slug: 'supernova-flare-birth',
    title: 'Supernova Genesis: Shockwave Shock',
    description: 'A dying supergiant star exploding into brilliant iridescent shockwaves rippling across surrounding cosmic dust.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'epic',
    style: 'cinematic-motion',
    tags: ['supernova', 'explosion', 'shockwave', 'star', 'cyan'],
    profileThemeHex: '#040E18',
    accentHex: '#99C2FF',
    glowHex: '#BADFDB',
    paletteColors: ['#99C2FF', '#BADFDB', '#FF84BA', '#040E18'],
    focalPoint: {
      banner: { x: 70, y: 48 },
      pfp: { x: 70, y: 40, zoom: 1.8 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #040E18 0%, #0C1E32 50%, #99C2FF 100%)',
      bgPattern: 'stars',
      primaryIcon: '✨',
      secondaryElements: ['shockwave-rings', 'expanding-plasma', 'star-debris']
    },
    motionConfig: {
      type: 'light-pulse',
      speed: 1.4,
      intensity: 0.9,
      direction: 'radial',
      glowColor: '#99C2FF',
      particleCount: 26
    },
    searchQueries: ['supernova discord banner', 'space explosion pfp', 'starburst banner']
  },
  {
    id: 'space-04',
    slug: 'pulsar-magnetic-core-jet',
    title: 'Pulsar PSR-B1919: Relativistic Beam',
    description: 'A rapidly spinning neutron star emitting twin ultraviolet relativistic beams slicing through space.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'energetic',
    style: 'neon-glow',
    tags: ['pulsar', 'neutron-star', 'magnetic', 'beam', 'laser'],
    profileThemeHex: '#080614',
    accentHex: '#FF84BA',
    glowHex: '#99C2FF',
    paletteColors: ['#FF84BA', '#99C2FF', '#A290B7', '#080614'],
    focalPoint: {
      banner: { x: 65, y: 50 },
      pfp: { x: 65, y: 40, zoom: 1.7 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #080614 0%, #140E26 50%, #FF84BA 100%)',
      bgPattern: 'lines',
      primaryIcon: '💫',
      secondaryElements: ['relativistic-jets', 'magnetic-lines', 'neutron-core']
    },
    motionConfig: {
      type: 'glow-scan',
      speed: 1.6,
      intensity: 0.9,
      direction: 'wave',
      glowColor: '#FF84BA',
      particleCount: 24
    },
    searchQueries: ['pulsar banner discord', 'neutron star pfp', 'space beam banner']
  },
  {
    id: 'space-05',
    slug: 'deep-space-station-dock',
    title: 'Orbital Ring Station: Deep Space Hub',
    description: 'A massive rotating centrifugal ring habitat docking interstellar freighters illuminated by blue thruster burns.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'futuristic',
    style: '3d-render',
    tags: ['space-station', 'sci-fi', 'dock', 'ring', 'thruster'],
    profileThemeHex: '#060A14',
    accentHex: '#99C2FF',
    glowHex: '#BADFDB',
    paletteColors: ['#99C2FF', '#BADFDB', '#3368A0', '#060A14'],
    focalPoint: {
      banner: { x: 72, y: 46 },
      pfp: { x: 72, y: 38, zoom: 1.8 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #060A14 0%, #0E182A 50%, #99C2FF 100%)',
      bgPattern: 'grid',
      primaryIcon: '🛸',
      secondaryElements: ['habitat-ring', 'docking-spoke', 'thruster-plumes']
    },
    motionConfig: {
      type: 'cyber-grid',
      speed: 1.0,
      intensity: 0.7,
      direction: 'wave',
      glowColor: '#99C2FF',
      particleCount: 18
    },
    searchQueries: ['space station banner', 'scifi hub pfp discord', 'orbital dock banner']
  },
  {
    id: 'space-06',
    slug: 'moonbase-artemis-earthrise',
    title: 'Artemis Outpost: Blue Earthrise',
    description: 'Lunar regolith dunes and solar domes gazing upon a brilliant blue-and-white marble Earth rising over the crater rim.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'calm',
    style: 'matte-painting',
    tags: ['moon', 'earthrise', 'artemis', 'lunar', 'crater'],
    profileThemeHex: '#080A10',
    accentHex: '#99C2FF',
    glowHex: '#FFEFE3',
    paletteColors: ['#99C2FF', '#FFEFE3', '#BADFDB', '#080A10'],
    focalPoint: {
      banner: { x: 66, y: 44 },
      pfp: { x: 66, y: 36, zoom: 1.8 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #080A10 0%, #121824 50%, #99C2FF 100%)',
      bgPattern: 'stars',
      primaryIcon: '🌕',
      secondaryElements: ['earth-marble', 'lunar-craters', 'base-domes']
    },
    motionConfig: {
      type: 'floating',
      speed: 0.7,
      intensity: 0.5,
      direction: 'up',
      glowColor: '#99C2FF',
      particleCount: 16
    },
    searchQueries: ['earthrise discord banner', 'moon base pfp', 'lunar banner discord']
  },
  {
    id: 'space-07',
    slug: 'asteroid-belt-miner-laser',
    title: 'Asteroid Belt: Plasma Mining Rig',
    description: 'Industrial mining ship slicing mineral-rich asteroid chunks with twin fiery orange plasma cutting lasers.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'epic',
    style: '3d-render',
    tags: ['mining', 'asteroid', 'laser', 'industrial', 'orange'],
    profileThemeHex: '#100804',
    accentHex: '#FFDF82',
    glowHex: '#F2765E',
    paletteColors: ['#FFDF82', '#F2765E', '#C62828', '#100804'],
    focalPoint: {
      banner: { x: 70, y: 48 },
      pfp: { x: 70, y: 40, zoom: 1.7 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #100804 0%, #241408 50%, #FFDF82 100%)',
      bgPattern: 'stars',
      primaryIcon: '⛏️',
      secondaryElements: ['laser-beams', 'asteroid-rocks', 'molten-spray']
    },
    motionConfig: {
      type: 'light-pulse',
      speed: 1.3,
      intensity: 0.85,
      direction: 'radial',
      glowColor: '#FFDF82',
      particleCount: 22
    },
    searchQueries: ['asteroid mining banner', 'space industrial pfp', 'plasma laser banner']
  },
  {
    id: 'space-08',
    slug: 'stargate-event-horizon-warp',
    title: 'Stargate Apex: Wormhole Event Horizon',
    description: 'An ancient alien metal ring spinning up a shimmering turquoise water-like wormhole portal into another galaxy.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'mysterious',
    style: 'neon-glow',
    tags: ['stargate', 'wormhole', 'portal', 'warp', 'cyan'],
    profileThemeHex: '#040C12',
    accentHex: '#BADFDB',
    glowHex: '#99C2FF',
    paletteColors: ['#BADFDB', '#99C2FF', '#0D9488', '#040C12'],
    focalPoint: {
      banner: { x: 65, y: 48 },
      pfp: { x: 65, y: 40, zoom: 1.7 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #040C12 0%, #0A1C26 50%, #BADFDB 100%)',
      bgPattern: 'hexagons',
      primaryIcon: '🌀',
      secondaryElements: ['ring-glyph-spin', 'water-vortex', 'warp-sparks']
    },
    motionConfig: {
      type: 'aurora',
      speed: 1.2,
      intensity: 0.8,
      direction: 'wave',
      glowColor: '#BADFDB',
      particleCount: 24
    },
    searchQueries: ['stargate discord banner', 'wormhole pfp discord', 'portal space banner']
  },

  // =========================================================================
  // 10. FANTASY & MYTHIC (8 Presets)
  // =========================================================================
  {
    id: 'fan-01',
    slug: 'enchanted-elderwood-fairies',
    title: 'Enchanted Elderwood: Bioluminescent Spores',
    description: 'Giant moss-covered tree roots sheltering glowing mushrooms and floating fairy orbs under an emerald canopy.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'ethereal',
    style: 'atmospheric-mist',
    tags: ['fantasy', 'fairies', 'forest', 'mushrooms', 'magic'],
    isPopular: true,
    isStaffPick: true,
    profileThemeHex: '#061208',
    accentHex: '#BBF1D2',
    glowHex: '#BADFDB',
    paletteColors: ['#BBF1D2', '#BADFDB', '#0D9488', '#061208'],
    focalPoint: {
      banner: { x: 62, y: 50 },
      pfp: { x: 62, y: 42, zoom: 1.6 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #061208 0%, #0E2412 50%, #BBF1D2 100%)',
      bgPattern: 'none',
      primaryIcon: '🍄',
      secondaryElements: ['glowing-spores', 'fairy-wisps', 'mossy-roots']
    },
    motionConfig: {
      type: 'floating',
      speed: 0.8,
      intensity: 0.65,
      direction: 'up',
      glowColor: '#BBF1D2',
      particleCount: 22
    },
    searchQueries: ['fairy forest discord banner', 'enchanted woodland pfp', 'fantasy green banner']
  },
  {
    id: 'fan-02',
    slug: 'phoenix-flame-rebirth',
    title: 'Phoenix Rebirth: Solar Plumage',
    description: 'Majestic fire bird spreading burning scarlet and gold wings as it rises triumphantly from golden ash.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'epic',
    style: 'cinematic-motion',
    tags: ['phoenix', 'fire', 'bird', 'rebirth', 'gold'],
    isPopular: true,
    profileThemeHex: '#140602',
    accentHex: '#FFDF82',
    glowHex: '#F2765E',
    paletteColors: ['#FFDF82', '#F2765E', '#C62828', '#140602'],
    focalPoint: {
      banner: { x: 68, y: 46 },
      pfp: { x: 68, y: 38, zoom: 1.8 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #140602 0%, #2A0E04 50%, #FFDF82 100%)',
      bgPattern: 'lines',
      primaryIcon: '🦅',
      secondaryElements: ['fire-feathers', 'ascending-embers', 'sun-corona']
    },
    motionConfig: {
      type: 'particle',
      speed: 1.3,
      intensity: 0.85,
      direction: 'up',
      glowColor: '#FFDF82',
      particleCount: 28
    },
    searchQueries: ['phoenix discord banner', 'fire bird pfp', 'flame banner discord']
  },
  {
    id: 'fan-03',
    slug: 'sunken-atlantis-crystal-ruins',
    title: 'Atlantis Sunken Spires: Aquamarine Ray',
    description: 'Ornate marble columns covered in bioluminescent coral, illuminated by sunlight filtering through sapphire water.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'mysterious',
    style: 'matte-painting',
    tags: ['atlantis', 'sunken', 'crystal', 'water', 'ruins'],
    profileThemeHex: '#041018',
    accentHex: '#99C2FF',
    glowHex: '#BADFDB',
    paletteColors: ['#99C2FF', '#BADFDB', '#315B8C', '#041018'],
    focalPoint: {
      banner: { x: 64, y: 48 },
      pfp: { x: 64, y: 40, zoom: 1.6 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #041018 0%, #0A2030 50%, #99C2FF 100%)',
      bgPattern: 'waves',
      primaryIcon: '🏛️',
      secondaryElements: ['crystal-spires', 'water-rays', 'floating-kelp']
    },
    motionConfig: {
      type: 'floating',
      speed: 0.8,
      intensity: 0.6,
      direction: 'up',
      glowColor: '#99C2FF',
      particleCount: 18
    },
    searchQueries: ['atlantis discord banner', 'underwater ruins pfp', 'crystal ocean banner']
  },
  {
    id: 'fan-04',
    slug: 'crystal-cavern-grotto-amethyst',
    title: 'Amethyst Grotto: Geode Reflections',
    description: 'Gigantic violet amethyst crystal stalagmites rising out of a mirror-still subterranean subterranean grotto pool.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'ethereal',
    style: '3d-render',
    tags: ['amethyst', 'crystal', 'grotto', 'cave', 'purple'],
    profileThemeHex: '#0A0512',
    accentHex: '#FF84BA',
    glowHex: '#A290B7',
    paletteColors: ['#FF84BA', '#A290B7', '#99C2FF', '#0A0512'],
    focalPoint: {
      banner: { x: 66, y: 50 },
      pfp: { x: 66, y: 40, zoom: 1.7 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0A0512 0%, #1A0A26 50%, #FF84BA 100%)',
      bgPattern: 'hexagons',
      primaryIcon: '🔮',
      secondaryElements: ['crystal-facets', 'water-gleams', 'cave-stalactites']
    },
    motionConfig: {
      type: 'light-pulse',
      speed: 1.0,
      intensity: 0.75,
      direction: 'radial',
      glowColor: '#FF84BA',
      particleCount: 20
    },
    searchQueries: ['amethyst discord banner', 'crystal cave pfp', 'purple geode banner']
  },
  {
    id: 'fan-05',
    slug: 'elven-arch-tree-citadel',
    title: 'Elven Sky Citadel: Silver Leaves',
    description: 'Intricate silver bridges spanning across gigantic living hollow trees under a starlit canopy.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'calm',
    style: 'cel-shaded',
    tags: ['elf', 'citadel', 'treehouse', 'silver', 'lotr'],
    profileThemeHex: '#060E12',
    accentHex: '#BADFDB',
    glowHex: '#FFEFE3',
    paletteColors: ['#BADFDB', '#FFEFE3', '#757D6F', '#060E12'],
    focalPoint: {
      banner: { x: 65, y: 46 },
      pfp: { x: 65, y: 38, zoom: 1.7 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #060E12 0%, #0E1C24 50%, #BADFDB 100%)',
      bgPattern: 'none',
      primaryIcon: '🏹',
      secondaryElements: ['silver-bridges', 'leaf-canopy', 'star-gems']
    },
    motionConfig: {
      type: 'particle',
      speed: 0.7,
      intensity: 0.5,
      direction: 'down',
      glowColor: '#BADFDB',
      particleCount: 16
    },
    searchQueries: ['elven discord banner', 'tree citadel pfp', 'lotr fantasy banner']
  },
  {
    id: 'fan-06',
    slug: 'griffin-rider-sky-charge',
    title: 'Griffin Patrol: Cloudburst Dive',
    description: 'A knight mounted upon a golden griffin diving through billowing storm clouds over mountain towers.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'epic',
    style: 'cinematic-motion',
    tags: ['griffin', 'knight', 'flight', 'clouds', 'mount'],
    profileThemeHex: '#0A0E18',
    accentHex: '#FFDF82',
    glowHex: '#99C2FF',
    paletteColors: ['#FFDF82', '#99C2FF', '#F2765E', '#0A0E18'],
    focalPoint: {
      banner: { x: 72, y: 46 },
      pfp: { x: 72, y: 38, zoom: 1.8 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0A0E18 0%, #161C2C 50%, #FFDF82 100%)',
      bgPattern: 'lines',
      primaryIcon: '🦅',
      secondaryElements: ['griffin-wings', 'cloud-vapor', 'sky-castle']
    },
    motionConfig: {
      type: 'parallax',
      speed: 1.4,
      intensity: 0.8,
      direction: 'down',
      glowColor: '#FFDF82',
      particleCount: 24
    },
    searchQueries: ['griffin banner discord', 'fantasy mount pfp', 'flying knight banner']
  },
  {
    id: 'fan-07',
    slug: 'sacred-mountain-torii-shrine',
    title: 'Kami Mountain: Sacred Torii Gateway',
    description: 'A red lacquered torii gate perched on a solitary mountain peak surrounded by a sea of morning clouds.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'calm',
    style: 'atmospheric-mist',
    tags: ['torii', 'shrine', 'mountain', 'japan', 'clouds'],
    profileThemeHex: '#140608',
    accentHex: '#F2765E',
    glowHex: '#FFDF82',
    paletteColors: ['#F2765E', '#FFDF82', '#FFF6DE', '#140608'],
    focalPoint: {
      banner: { x: 62, y: 48 },
      pfp: { x: 62, y: 40, zoom: 1.6 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #140608 0%, #2A0C10 50%, #F2765E 100%)',
      bgPattern: 'waves',
      primaryIcon: '⛩️',
      secondaryElements: ['red-torii', 'cloud-sea', 'shinto-ropes']
    },
    motionConfig: {
      type: 'smoke',
      speed: 0.8,
      intensity: 0.6,
      direction: 'up',
      glowColor: '#FFDF82',
      particleCount: 18
    },
    searchQueries: ['torii gate discord banner', 'mountain shrine pfp', 'japanese cloud banner']
  },
  {
    id: 'fan-08',
    slug: 'dragon-hoard-treasure-cavern',
    title: 'Smaug Hoard: Ancient Gold Coins',
    description: 'Mounds of glittering gold chalices, emerald crowns, and jewel-encrusted weapons sleeping under dragon smoke.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'mysterious',
    style: 'matte-painting',
    tags: ['dragon', 'treasure', 'gold', 'coins', 'jewels'],
    profileThemeHex: '#120A04',
    accentHex: '#FFDF82',
    glowHex: '#FBC02D',
    paletteColors: ['#FFDF82', '#FBC02D', '#757D6F', '#120A04'],
    focalPoint: {
      banner: { x: 65, y: 50 },
      pfp: { x: 65, y: 42, zoom: 1.6 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #120A04 0%, #241408 50%, #FFDF82 100%)',
      bgPattern: 'dots',
      primaryIcon: '🪙',
      secondaryElements: ['gold-glimmer', 'sulfur-smoke', 'crown-rubies']
    },
    motionConfig: {
      type: 'particle',
      speed: 0.9,
      intensity: 0.65,
      direction: 'up',
      glowColor: '#FFDF82',
      particleCount: 20
    },
    searchQueries: ['treasure discord banner', 'dragon hoard pfp', 'gold coin banner']
  },

  // =========================================================================
  // 11. HORROR & OMINOUS (6 Presets)
  // =========================================================================
  {
    id: 'hor-01',
    slug: 'crimson-fog-shadow-stalker',
    title: 'Crimson Fog: The Pale Stalker',
    description: 'An elongated shadow silhouette standing amidst thick crimson fog between gnarled withered dead trees.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'ominous',
    style: 'atmospheric-mist',
    tags: ['horror', 'fog', 'red', 'slender', 'shadow'],
    isPopular: true,
    isStaffPick: true,
    profileThemeHex: '#100204',
    accentHex: '#C62828',
    glowHex: '#6D0808',
    paletteColors: ['#C62828', '#6D0808', '#2D0000', '#100204'],
    focalPoint: {
      banner: { x: 68, y: 48 },
      pfp: { x: 68, y: 38, zoom: 1.7 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #100204 0%, #220408 50%, #C62828 100%)',
      bgPattern: 'none',
      primaryIcon: '🩸',
      secondaryElements: ['crimson-fog', 'bare-branches', 'eye-gleams']
    },
    motionConfig: {
      type: 'smoke',
      speed: 0.9,
      intensity: 0.8,
      direction: 'up',
      glowColor: '#C62828',
      particleCount: 24
    },
    searchQueries: ['horror discord banner', 'creepy shadow pfp', 'crimson fog banner']
  },
  {
    id: 'hor-02',
    slug: 'static-vhs-poltergeist',
    title: 'Poltergeist Channel 00: Analog Terror',
    description: 'Grainy VHS noise burst with hidden subliminal eyes flashing in the static interference bands.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'ominous',
    style: 'neon-glow',
    tags: ['vhs', 'static', 'glitch', 'analog-horror', 'creepy'],
    profileThemeHex: '#080808',
    accentHex: '#A290B7',
    glowHex: '#FFEFE3',
    paletteColors: ['#A290B7', '#FFEFE3', '#4A4A4A', '#080808'],
    focalPoint: {
      banner: { x: 60, y: 50 },
      pfp: { x: 60, y: 40, zoom: 1.6 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #080808 0%, #181818 50%, #A290B7 100%)',
      bgPattern: 'lines',
      primaryIcon: '📺',
      secondaryElements: ['vhs-noise', 'static-snow', 'glitch-tears']
    },
    motionConfig: {
      type: 'glow-scan',
      speed: 1.7,
      intensity: 0.9,
      direction: 'wave',
      glowColor: '#A290B7',
      particleCount: 30
    },
    searchQueries: ['analog horror banner', 'vhs static pfp discord', 'creepy glitch banner']
  },
  {
    id: 'hor-03',
    slug: 'abandoned-asylum-ward-flicker',
    title: 'Ward 13: Flickering Fluorescent',
    description: 'Peeling paint along an endless tiled asylum hallway with a solitary flickering green fluorescent tube overhead.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'moody',
    style: 'cinematic-motion',
    tags: ['asylum', 'hallway', 'flicker', 'green', 'abandoned'],
    profileThemeHex: '#060E08',
    accentHex: '#7DCCAD',
    glowHex: '#BADFDB',
    paletteColors: ['#7DCCAD', '#BADFDB', '#315B8C', '#060E08'],
    focalPoint: {
      banner: { x: 64, y: 48 },
      pfp: { x: 64, y: 40, zoom: 1.6 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #060E08 0%, #0E1E12 50%, #7DCCAD 100%)',
      bgPattern: 'grid',
      primaryIcon: '💡',
      secondaryElements: ['flickering-tube', 'tiled-floor', 'door-shadows']
    },
    motionConfig: {
      type: 'light-pulse',
      speed: 1.5,
      intensity: 0.9,
      direction: 'radial',
      glowColor: '#7DCCAD',
      particleCount: 18
    },
    searchQueries: ['asylum discord banner', 'abandoned hallway pfp', 'green horror banner']
  },
  {
    id: 'hor-04',
    slug: 'deep-sea-leviathan-shadow',
    title: 'Abyssal Leviathan: Bioluminescent Maw',
    description: 'A colossal shadow silhouette swimming below a lone research dinghy with rows of pale glowing teeth.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'ominous',
    style: 'matte-painting',
    tags: ['thalassophobia', 'leviathan', 'ocean', 'deep-sea', 'monster'],
    profileThemeHex: '#020810',
    accentHex: '#BADFDB',
    glowHex: '#99C2FF',
    paletteColors: ['#BADFDB', '#99C2FF', '#0D9488', '#020810'],
    focalPoint: {
      banner: { x: 68, y: 52 },
      pfp: { x: 68, y: 42, zoom: 1.7 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #020810 0%, #06121E 50%, #BADFDB 100%)',
      bgPattern: 'waves',
      primaryIcon: '🦈',
      secondaryElements: ['huge-shadow', 'glowing-teeth', 'dark-water']
    },
    motionConfig: {
      type: 'floating',
      speed: 0.7,
      intensity: 0.6,
      direction: 'up',
      glowColor: '#BADFDB',
      particleCount: 16
    },
    searchQueries: ['thalassophobia banner discord', 'leviathan pfp', 'deep sea monster banner']
  },
  {
    id: 'hor-05',
    slug: 'haunted-forest-wendigo-horns',
    title: 'Black Pine Wendigo: Antler Silhouette',
    description: 'Towering deer skull antlers peering out from behind frosted birch tree trunks under a bloodless winter sky.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'ominous',
    style: 'atmospheric-mist',
    tags: ['wendigo', 'antlers', 'snow', 'cryptid', 'forest'],
    profileThemeHex: '#060A0C',
    accentHex: '#FFEFE3',
    glowHex: '#99C2FF',
    paletteColors: ['#FFEFE3', '#99C2FF', '#4A4A4A', '#060A0C'],
    focalPoint: {
      banner: { x: 70, y: 46 },
      pfp: { x: 70, y: 38, zoom: 1.8 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #060A0C 0%, #0E1418 50%, #FFEFE3 100%)',
      bgPattern: 'none',
      primaryIcon: '🦌',
      secondaryElements: ['antler-branches', 'frost-breath', 'snowy-trunks']
    },
    motionConfig: {
      type: 'smoke',
      speed: 0.8,
      intensity: 0.7,
      direction: 'left',
      glowColor: '#FFEFE3',
      particleCount: 20
    },
    searchQueries: ['wendigo discord banner', 'cryptid pfp discord', 'creepy deer banner']
  },
  {
    id: 'hor-06',
    slug: 'broken-mirror-doppelganger',
    title: 'Shattered Reflection: The Smirking Doppelgänger',
    description: 'Spiderweb cracked mirror shards reflecting a face whose smile moves independently from the viewer.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'mysterious',
    style: 'cel-shaded',
    tags: ['mirror', 'broken-glass', 'doppelganger', 'psychological', 'creepy'],
    profileThemeHex: '#08080C',
    accentHex: '#D45060',
    glowHex: '#FFDF82',
    paletteColors: ['#D45060', '#FFDF82', '#3D2D38', '#08080C'],
    focalPoint: {
      banner: { x: 65, y: 48 },
      pfp: { x: 65, y: 40, zoom: 1.6 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #08080C 0%, #14141E 50%, #D45060 100%)',
      bgPattern: 'lines',
      primaryIcon: '🪞',
      secondaryElements: ['cracked-facets', 'eyeball-reflection', 'blood-smear']
    },
    motionConfig: {
      type: 'particle',
      speed: 1.0,
      intensity: 0.6,
      direction: 'radial',
      glowColor: '#D45060',
      particleCount: 18
    },
    searchQueries: ['shattered mirror banner', 'creepy reflection pfp', 'psychological horror discord']
  },

  // =========================================================================
  // 12. CUTE & WHIMSICAL (6 Presets)
  // =========================================================================
  {
    id: 'cute-01',
    slug: 'boba-cat-cafe-tapioca',
    title: 'Boba Kitty: Sweet Brown Sugar Pearls',
    description: 'A round calico kitten nestled inside a giant cup of iced milk tea with shiny brown sugar boba pearls.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'cozy',
    style: 'cel-shaded',
    tags: ['boba', 'cat', 'kawaii', 'bubble-tea', 'cute'],
    isPopular: true,
    isStaffPick: true,
    profileThemeHex: '#160E08',
    accentHex: '#FFC5AA',
    glowHex: '#FFDF82',
    paletteColors: ['#FFC5AA', '#FFDF82', '#FFF6DE', '#160E08'],
    focalPoint: {
      banner: { x: 64, y: 50 },
      pfp: { x: 64, y: 40, zoom: 1.6 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #160E08 0%, #2E1D12 50%, #FFC5AA 100%)',
      bgPattern: 'dots',
      primaryIcon: '🧋',
      secondaryElements: ['tapioca-pearls', 'cat-paws', 'heart-bubbles']
    },
    motionConfig: {
      type: 'floating',
      speed: 0.8,
      intensity: 0.55,
      direction: 'up',
      glowColor: '#FFC5AA',
      particleCount: 16
    },
    searchQueries: ['boba cat discord banner', 'kawaii bubble tea pfp', 'cute cat banner']
  },
  {
    id: 'cute-02',
    slug: 'chibi-shiba-space-cadet',
    title: 'Astro Shiba: Little Star Cadet',
    description: 'An enthusiastic Shiba Inu wearing a round goldfish astronaut helmet catching floating star candies.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'energetic',
    style: 'cel-shaded',
    tags: ['shiba', 'dog', 'space', 'astronaut', 'kawaii'],
    isPopular: true,
    profileThemeHex: '#0C0A16',
    accentHex: '#FFDF82',
    glowHex: '#99C2FF',
    paletteColors: ['#FFDF82', '#99C2FF', '#FF84BA', '#0C0A16'],
    focalPoint: {
      banner: { x: 68, y: 48 },
      pfp: { x: 68, y: 40, zoom: 1.7 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0C0A16 0%, #1A162C 50%, #FFDF82 100%)',
      bgPattern: 'stars',
      primaryIcon: '🐕',
      secondaryElements: ['star-candies', 'bubble-helmet', 'comet-tail']
    },
    motionConfig: {
      type: 'floating',
      speed: 1.0,
      intensity: 0.65,
      direction: 'up',
      glowColor: '#FFDF82',
      particleCount: 20
    },
    searchQueries: ['shiba inu discord banner', 'space dog pfp', 'kawaii astronaut banner']
  },
  {
    id: 'cute-03',
    slug: 'kawaii-ghost-marshmallow-toast',
    title: 'Boo! Marshmallow Ghosties',
    description: 'Three smiling baby white ghosts toasting golden marshmallows over a tiny campfire in a flower patch.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'cozy',
    style: 'pixel-art',
    tags: ['ghost', 'halloween', 'marshmallow', 'campfire', 'cute-spooky'],
    profileThemeHex: '#100814',
    accentHex: '#FDCEDF',
    glowHex: '#FFDF82',
    paletteColors: ['#FDCEDF', '#FFDF82', '#BADFDB', '#100814'],
    focalPoint: {
      banner: { x: 62, y: 52 },
      pfp: { x: 62, y: 44, zoom: 1.5 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #100814 0%, #201026 50%, #FDCEDF 100%)',
      bgPattern: 'dots',
      primaryIcon: '👻',
      secondaryElements: ['marshmallow-sticks', 'flame-sparks', 'daisies']
    },
    motionConfig: {
      type: 'particle',
      speed: 0.8,
      intensity: 0.5,
      direction: 'up',
      glowColor: '#FFDF82',
      particleCount: 16
    },
    searchQueries: ['cute ghost banner discord', 'marshmallow ghost pfp', 'cute spooky banner']
  },
  {
    id: 'cute-04',
    slug: 'sleepy-bear-bakery-croissant',
    title: 'Bakery Bear: Warm Butter Croissants',
    description: 'A cozy brown bear baker in a flour-dusted apron taking golden crescent rolls from a brick oven.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'cozy',
    style: 'cel-shaded',
    tags: ['bear', 'bakery', 'croissant', 'pastry', 'warm'],
    profileThemeHex: '#160C06',
    accentHex: '#FFDF82',
    glowHex: '#FFF6DE',
    paletteColors: ['#FFDF82', '#FFF6DE', '#F2765E', '#160C06'],
    focalPoint: {
      banner: { x: 66, y: 50 },
      pfp: { x: 66, y: 40, zoom: 1.6 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #160C06 0%, #2C180C 50%, #FFDF82 100%)',
      bgPattern: 'none',
      primaryIcon: '🥐',
      secondaryElements: ['flour-dust', 'bread-steam', 'baker-hat']
    },
    motionConfig: {
      type: 'smoke',
      speed: 0.7,
      intensity: 0.45,
      direction: 'up',
      glowColor: '#FFDF82',
      particleCount: 14
    },
    searchQueries: ['bear bakery discord banner', 'croissant pfp discord', 'cozy pastry banner']
  },
  {
    id: 'cute-05',
    slug: 'pixel-frog-lilypad-pond',
    title: 'Raindrop Froggo: Lilypad Serenade',
    description: 'A tiny green pixel frog wearing a yellow raincoat and leaf hat sitting on a wet lily pad with floating lotuses.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'calm',
    style: 'pixel-art',
    tags: ['frog', 'lilypad', 'raincoat', 'pixel', 'pond'],
    profileThemeHex: '#08140C',
    accentHex: '#BBF1D2',
    glowHex: '#FFDF82',
    paletteColors: ['#BBF1D2', '#FFDF82', '#BADFDB', '#08140C'],
    focalPoint: {
      banner: { x: 60, y: 52 },
      pfp: { x: 60, y: 44, zoom: 1.5 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #08140C 0%, #102618 50%, #BBF1D2 100%)',
      bgPattern: 'waves',
      primaryIcon: '🐸',
      secondaryElements: ['leaf-umbrella', 'water-ripples', 'pink-lotus']
    },
    motionConfig: {
      type: 'rain',
      speed: 1.0,
      intensity: 0.6,
      direction: 'down',
      glowColor: '#BBF1D2',
      particleCount: 20
    },
    searchQueries: ['frog discord banner', 'pixel frog pfp', 'raincoat frog banner']
  },
  {
    id: 'cute-06',
    slug: 'starlight-bunny-cloud-float',
    title: 'Starlight Bunny: Moon Pillow Reverie',
    description: 'A fluffy white bunny sleeping soundly on a crescent moon pillow while glowing stars rain gently around.',
    category: 'icons-2d',
    categoryLabel: '2D Server Icons & Badges',
    mood: 'calm',
    style: 'atmospheric-mist',
    tags: ['bunny', 'rabbit', 'moon', 'stars', 'sleepy'],
    profileThemeHex: '#0E0C18',
    accentHex: '#FDCEDF',
    glowHex: '#FFEFE3',
    paletteColors: ['#FDCEDF', '#FFEFE3', '#99C2FF', '#0E0C18'],
    focalPoint: {
      banner: { x: 64, y: 48 },
      pfp: { x: 64, y: 40, zoom: 1.6 }
    },
    visualTheme: {
      gradient: 'linear-gradient(135deg, #0E0C18 0%, #1C1830 50%, #FDCEDF 100%)',
      bgPattern: 'stars',
      primaryIcon: '🐰',
      secondaryElements: ['crescent-pillow', 'star-drops', 'dream-bubbles']
    },
    motionConfig: {
      type: 'floating',
      speed: 0.7,
      intensity: 0.5,
      direction: 'up',
      glowColor: '#FDCEDF',
      particleCount: 18
    },
    searchQueries: ['bunny discord banner', 'sleepy rabbit pfp', 'kawaii moon banner']
  }
];

/**
 * Ordered Discord Asset Presets Catalog:
 * 1. Top: All Flagship Animated WebP Presets (Banners & Animated PFPs)
 * 2. Middle: Static Banners & Aesthetic PFPs
 * 3. Bottom: All 2D Role Icons, Server Badges & Emojis
 */
export const DISCORD_ASSET_PRESETS: DiscordAssetPreset[] = [
  // 1. Top: Full Widescreen Animated WebP Banners (49 Presets)
  ...RAW_DISCORD_ASSET_PRESETS.filter(p => (p.isAnimated || Boolean(p.animatedWebpUrl)) && !p.isPfp && p.category !== 'icons-2d'),
  // 2. Animated Avatars & PFPs (20 Presets)
  ...RAW_DISCORD_ASSET_PRESETS.filter(p => (p.isAnimated || Boolean(p.animatedWebpUrl)) && p.isPfp && p.category !== 'icons-2d'),
  // 3. Static Banners & Aesthetic PFPs (70 Presets)
  ...RAW_DISCORD_ASSET_PRESETS.filter(p => !p.isAnimated && !p.animatedWebpUrl && p.category !== 'icons-2d'),
  // 4. Bottom: All 2D Role Icons, Server Badges & Emojis (110 Presets)
  ...RAW_DISCORD_ASSET_PRESETS.filter(p => p.category === 'icons-2d')
];

/**
 * Helpers for filtering and querying presets
 */
export function getAllPresets(): DiscordAssetPreset[] {
  return DISCORD_ASSET_PRESETS;
}

export function getPresetBySlug(slug: string): DiscordAssetPreset | undefined {
  return DISCORD_ASSET_PRESETS.find(p => p.slug === slug || p.id === slug);
}

export function getPresetsByCategory(category: AssetCategory): DiscordAssetPreset[] {
  return DISCORD_ASSET_PRESETS.filter(p => p.category === category);
}

export function getPopularPresets(limit: number = 8): DiscordAssetPreset[] {
  return DISCORD_ASSET_PRESETS.filter(p => p.isPopular).slice(0, limit);
}

export function getStaffPickPresets(limit: number = 8): DiscordAssetPreset[] {
  return DISCORD_ASSET_PRESETS.filter(p => p.isStaffPick).slice(0, limit);
}

export function getCategoryCounts(): Record<AssetCategory, number> {
  const counts: Partial<Record<AssetCategory, number>> = {};
  for (const cat of Object.keys(ASSET_CATEGORIES) as AssetCategory[]) {
    counts[cat] = DISCORD_ASSET_PRESETS.filter(p => p.category === cat).length;
  }
  return counts as Record<AssetCategory, number>;
}

export function getAllPfps(): DiscordAssetPreset[] {
  return DISCORD_ASSET_PRESETS.filter(p => p.isPfp === true || !!p.pfpImageUrl);
}

export function getAllBanners(): DiscordAssetPreset[] {
  return DISCORD_ASSET_PRESETS.filter(p => !p.isPfp || (Boolean(p.imageUrl || p.animatedWebpUrl) && !p.pfpImageUrl));
}

export function getFemalePfps(): DiscordAssetPreset[] {
  return DISCORD_ASSET_PRESETS.filter(p => (p.isPfp || !!p.pfpImageUrl) && p.gender === 'female');
}

export function getAnimatedPresets(): DiscordAssetPreset[] {
  return DISCORD_ASSET_PRESETS.filter(p => p.isAnimated || !!p.animatedWebpUrl);
}

export function getMalePfps(): DiscordAssetPreset[] {
  return DISCORD_ASSET_PRESETS.filter(p => (p.isPfp || !!p.pfpImageUrl) && p.gender === 'male');
}

export function getCatPfps(): DiscordAssetPreset[] {
  return DISCORD_ASSET_PRESETS.filter(p => (p.isPfp || !!p.pfpImageUrl) && (p.tags.includes('cat') || p.tags.includes('cats') || p.category === 'cute'));
}

export function getAnimatedPfps(): DiscordAssetPreset[] {
  return DISCORD_ASSET_PRESETS.filter(p => (p.isPfp || !!p.pfpImageUrl) && (p.isAnimated || (p.pfpImageUrl && p.pfpImageUrl.endsWith('.webp') && p.isAnimated)));
}
