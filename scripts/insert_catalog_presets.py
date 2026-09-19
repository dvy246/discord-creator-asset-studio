import re

anime_banners_ts = """  // --- 18 AESTHETIC ANIMATED ANIME BANNERS (DiscordPFP.gg Parity) ---
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
"""

pfps_ts = """  // --- 12 ICONIC ANIMATED CAT PROFILE PICTURES (PFPs) ---
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
"""

helper_functions_ts = """
export function getMalePfps(): DiscordAssetPreset[] {
  return DISCORD_ASSET_PRESETS.filter(p => (p.isPfp || !!p.pfpImageUrl) && p.gender === 'male');
}

export function getCatPfps(): DiscordAssetPreset[] {
  return DISCORD_ASSET_PRESETS.filter(p => (p.isPfp || !!p.pfpImageUrl) && (p.tags.includes('cat') || p.tags.includes('cats') || p.category === 'cute'));
}

export function getAnimatedPfps(): DiscordAssetPreset[] {
  return DISCORD_ASSET_PRESETS.filter(p => (p.isPfp || !!p.pfpImageUrl) && (p.isAnimated || (p.pfpImageUrl && p.pfpImageUrl.endsWith('.webp') && p.isAnimated)));
}
"""

with open('src/data/assets.ts', 'r') as f:
    content = f.read()

# 1. Insert anime banners
banner_anchor = "// FLAGSHIP ANIMATED DISCORD BANNERS (WebP Animation Loops)\n  // =========================================================================\n"
assert banner_anchor in content, "Banner anchor not found"
content = content.replace(banner_anchor, banner_anchor + anime_banners_ts)

# 2. Insert cat and guy PFPs
pfp_anchor = "// ANIME & AESTHETIC PROFILE PICTURES (PFPs - Circular Discord Avatars)\n  // =========================================================================\n"
assert pfp_anchor in content, "PFP anchor not found"
content = content.replace(pfp_anchor, pfp_anchor + pfps_ts)

# 3. Insert helper functions before the end
if 'export function getMalePfps()' not in content:
    content = content.rstrip() + "\n" + helper_functions_ts

with open('src/data/assets.ts', 'w') as f:
    f.write(content)

print("Successfully inserted 18 anime banners, 12 animated cat PFPs, 8 aesthetic guy PFPs, and new query helper functions into src/data/assets.ts!")
