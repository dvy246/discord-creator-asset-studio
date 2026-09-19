import re

with open('src/data/assets.ts', 'r') as f:
    content = f.read()

# 1. Update amazing-spiderman-spire-golden-dusk with gifUrl and videoUrl
old_spidey = """    slug: 'amazing-spiderman-spire-golden-dusk',
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
    pfpImageUrl: '/assets/pfps/amazing-spiderman-spire-golden-dusk-animated.webp',"""

new_spidey = """    slug: 'amazing-spiderman-spire-golden-dusk',
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
    pfpImageUrl: '/assets/pfps/amazing-spiderman-spire-golden-dusk-animated.webp',"""

if old_spidey in content:
    content = content.replace(old_spidey, new_spidey)
    print("Updated amazing-spiderman-spire-golden-dusk with gifUrl and videoUrl")
else:
    print("WARNING: Could not find exact amazing-spiderman match")

# 2. Insert 13 new presets at top of RAW_DISCORD_ASSET_PRESETS
new_presets_code = """  // =========================================================================
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
    description: 'Sleek crimson and titanium-gold nanotech armor plates rapidly streaming across Tony Stark\\'s silhouette with electric repulsor flares.',
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
"""

anchor = "const RAW_DISCORD_ASSET_PRESETS: DiscordAssetPreset[] = [\n"
if anchor in content:
    content = content.replace(anchor, anchor + new_presets_code)
    print("Successfully inserted 13 new presets at the top of RAW_DISCORD_ASSET_PRESETS!")
else:
    print("ERROR: Could not find anchor to insert presets")

with open('src/data/assets.ts', 'w') as f:
    f.write(content)
print("Updated src/data/assets.ts successfully!")
