import fs from 'node:fs';

const items = [
  {
    id: 'nano-dark-void-knight-eclipse',
    title: 'Dark Void Knight: Eclipse Vanguard',
    description: 'Cyber-armored obsidian knight framed by a pulsing violet eclipse ring and volumetric void particles.',
    tags: ['dark-knight', 'void', 'eclipse', 'cyber-armor', 'obsidian', 'purple', 'neon'],
    searchQueries: ['dark void knight banner', 'cyber armor pfp', 'eclipse warrior banner']
  },
  {
    id: 'animated-iron-spider-infinity-war',
    title: 'Nanotech Vanguard: Waldoes Deployment Banner',
    description: 'High-tech arachnid hero activating golden mechanical waldoes amidst an alien cosmic battlefield.',
    tags: ['animated', 'superhero', 'nanotech', 'arachnid', 'cyber', 'mechanical', 'cosmic', 'banner', 'gif'],
    searchQueries: ['nanotech hero discord banner', 'golden waldoes banner', 'arachnid tech animated gif']
  },
  {
    id: 'animated-miles-morales-neon-descent',
    title: 'Cyberpunk Skyline: Neon Arachnid Descent',
    description: 'Stylized high-altitude skyline descent through dazzling magenta and teal neon raindrops in a cyberpunk metropolis.',
    tags: ['animated', 'superhero', 'neon', 'cyberpunk', 'urban', 'skyline', 'descent', 'banner', 'gif'],
    searchQueries: ['neon skyline discord banner', 'cyberpunk arachnid pfp', 'neon descent animated gif']
  },
  {
    id: 'animated-spiderverse-leap-of-faith',
    title: 'Chromatic Metropolis: Inverted Leap of Faith',
    description: 'Cinematic inverted skyward leap against a radiant golden-hour city skyline with chromatic aberration.',
    tags: ['animated', 'leap-of-faith', 'sunset', 'skyline', 'chromatic', 'urban', 'superhero', 'banner', 'gif'],
    searchQueries: ['inverted leap banner', 'skyline freefall pfp', 'chromatic urban dive gif']
  },
  {
    id: 'animated-amazing-spiderman-skyward-dive',
    title: 'Skyward Velocity: Urban Canyon Dive',
    description: 'Dynamic acrobatic dive plunging through towering glass skyscrapers under a dramatic twilight sky.',
    tags: ['animated', 'acrobat', 'dive', 'velocity', 'skyscrapers', 'twilight', 'superhero', 'banner', 'gif'],
    searchQueries: ['urban canyon dive banner', 'acrobatic freefall pfp', 'skyline dive gif'],
    secondaryElements: ['aerial-dive', 'urban-canyon', 'webline']
  },
  {
    id: 'animated-tony-stark-mark85-snap',
    title: 'Cinematic Legacy: Quantum Titan Final Stand',
    description: 'Armor-clad billionaire genius channeling cosmic quantum stones in a blinding heroic flash.',
    tags: ['animated', 'quantum', 'titan', 'nanotech', 'heroic', 'sacrifice', 'cinematic', 'banner', 'gif'],
    searchQueries: ['quantum titan banner', 'armored hero final stand pfp', 'cosmic stones heroic gif']
  },
  {
    id: 'animated-iron-man-nanotech-assemble',
    title: 'Nanotech Forge: Armor Suite Deployment',
    description: 'Crimson and gold futuristic armor assembling from microscopic nanites across the wearer in real-time.',
    tags: ['animated', 'nanotech', 'armor', 'futuristic', 'crimson-gold', 'cyber', 'banner', 'gif'],
    searchQueries: ['nanotech armor banner', 'futuristic armor suit pfp', 'armor assembly gif']
  },
  {
    id: 'animated-attack-on-titan-eren-rumbling',
    title: 'Colossal Horizon: Apocalyptic Titan Shifter',
    description: 'Colossal ancient skeletal titan advancing through smoke and ash against a blood-orange apocalyptic horizon.',
    tags: ['animated', 'titan', 'apocalypse', 'dark-fantasy', 'smoke', 'fire', 'colossal', 'banner', 'gif'],
    searchQueries: ['colossal titan banner', 'apocalyptic horizon pfp', 'ancient titan animated gif'],
    secondaryElements: ['colossal-titan', 'smoke-columns', 'red-horizon']
  },
  {
    id: 'animated-wuwa-chixia-flaming-sakura',
    title: 'Crimson Sparks: Blazing Sakura Pistols',
    description: 'Energetic dual-pistol heroine unleashing fiery crimson sparks and swirling flame petals in an open-world fantasy.',
    tags: ['animated', 'dual-pistols', 'fire', 'sakura', 'action-rpg', 'anime', 'banner', 'gif'],
    searchQueries: ['crimson dual pistols banner', 'blazing sakura pfp', 'flame hero animated gif']
  },
  {
    id: 'animated-bleach-ichigo-bankai-tybw',
    title: 'Thousand-Year Tempest: Dual Reaper Blades',
    description: 'Fierce soul reaper releasing dual dark blades with crackling spirit energy in a torrential storm.',
    tags: ['animated', 'soul-reaper', 'swordsman', 'tempest', 'dark-energy', 'anime', 'banner', 'gif'],
    searchQueries: ['dual blade reaper banner', 'spirit energy swordsman pfp', 'dark tempest animated gif']
  },
  {
    id: 'animated-wuwa-sanhua-glacio-lotus',
    title: 'Glacio Bloom: Frost Lotus Swordswoman',
    description: 'Stoic icy swordswoman shattering frost lotus crystals with serene glacial precision in an ethereal winter temple.',
    tags: ['animated', 'glacio', 'ice-sword', 'lotus', 'action-rpg', 'anime', 'banner', 'gif'],
    searchQueries: ['frost lotus banner', 'ice swordswoman pfp', 'glacio anime gif']
  },
  {
    id: 'animated-wuwa-changli-phoenix-gaze',
    title: 'Blazing Rebirth: Phoenix Flame Gaze',
    description: 'Regal fire mentor sweeping her blazing feather fan with dancing vermilion sparks and a hypnotizing crimson gaze.',
    tags: ['animated', 'phoenix', 'fire', 'feather', 'action-rpg', 'anime', 'banner', 'gif'],
    searchQueries: ['phoenix feather banner', 'crimson flame gaze pfp', 'vermilion fire animated gif']
  },
  {
    id: 'animated-ghost-of-yotei-ronin',
    title: 'Snowbound Vengeance: Mountain Summit Ronin',
    description: 'Vengeful ronin warrior unsheathing dual katana blades against a howling snow gale beneath a majestic volcanic peak.',
    tags: ['animated', 'samurai', 'katana', 'ronin', 'snow', 'volcano', 'banner', 'gif'],
    searchQueries: ['mountain ronin banner', 'dual katana snow pfp', 'winter samurai animated gif'],
    secondaryElements: ['dual-katana', 'volcano-summit', 'snow-gale']
  },
  {
    id: 'animated-spiderman-sunset-romance',
    title: 'Web of Stars: Twilight Horizon Romance',
    description: 'Romantic dual silhouette swinging above golden metropolis skyscrapers at dusk with gentle lens flares.',
    tags: ['animated', 'superhero', 'sunset', 'metropolis', 'romance', 'skyline', 'banner', 'gif'],
    searchQueries: ['twilight skyline romance banner', 'silhouette swinging pfp', 'sunset metropolis gif'],
    secondaryElements: ['acrobatic-silhouette', 'city-lights', 'sunset-sky']
  },
  {
    id: 'animated-ultra-instinct-goku',
    title: 'Silver Transcendence: Astral Ki Awakening',
    description: 'Shirtless martial artist in deep meditative battle focus, surrounded by rippling god-tier silver aura flames.',
    tags: ['animated', 'martial-arts', 'astral-ki', 'silver-aura', 'gym', 'focus', 'anime', 'banner', 'gif'],
    searchQueries: ['silver aura fighter banner', 'gym motivation martial artist pfp', 'astral ki animated gif']
  },
  {
    id: 'animated-kratos-blades-chaos',
    title: 'Spartan Fury: Blades of Ash in Midgard Blizzard',
    description: 'Weathered mythological warrior standing resolute in a howling blizzard with incandescent orange chained blades radiating embers.',
    tags: ['animated', 'spartan', 'warrior', 'chained-blades', 'blizzard', 'gaming', 'banner', 'gif'],
    searchQueries: ['chained blades warrior banner', 'mythological fury pfp', 'blizzard warrior animated gif'],
    secondaryElements: ['chained-blades', 'snow-embers', 'spartan-ash']
  },
  {
    id: 'animated-jon-snow-battle-bastards',
    title: 'Northern Vanguard: Fog Battlefield Lone Stand',
    description: 'Resolute northern swordsman unsheathing an ancient blade alone on a fog-drenched battlefield as charging horses rumble over the horizon.',
    tags: ['animated', 'northern-lord', 'swordsman', 'medieval', 'battlefield', 'banner', 'gif'],
    searchQueries: ['lone swordsman banner', 'medieval battlefield stand pfp', 'fog vanguard animated gif']
  },
  {
    id: 'animated-night-king-dragon-blizzard',
    title: 'Boreal Eclipse: Frost Monarch & Dragon Sky',
    description: 'Frost monarch poised with a crystalline ice javelin amidst a freezing polar gale as colossal dragon wings sweep through storm clouds.',
    tags: ['animated', 'frost-monarch', 'dragon', 'ice-spear', 'blizzard', 'winter', 'fantasy', 'banner', 'gif'],
    searchQueries: ['frost monarch banner', 'ice dragon blizzard pfp', 'polar storm fantasy gif']
  },
  {
    id: 'animated-amazing-spiderman-spire',
    title: 'Apex Aerialist: Golden Spire Sunset',
    description: 'Acrobatic sentinel perching atop a cathedral spire overlooking golden sunset city streets and a sea of clouds.',
    tags: ['animated', 'aerialist', 'spire', 'sunset', 'golden-hour', 'superhero', 'banner', 'gif'],
    searchQueries: ['cathedral spire sunset banner', 'aerialist sentinel pfp', 'golden hour city gif'],
    secondaryElements: ['aerial-sentinel', 'skyscraper-spire', 'cloud-sunset']
  },
  {
    id: 'animated-totoro-forest-belly',
    title: 'Forest Spirit Wonder: Camphor Tree Nap',
    description: 'Whimsical anime scene with a gentle child resting atop the breathing furry belly of a giant sleeping forest spirit in the ancient camphor grove.',
    tags: ['animated', 'forest-spirit', 'nature', 'camphor-forest', 'anime', 'cozy', 'banner', 'gif'],
    searchQueries: ['forest spirit nap banner', 'cozy anime nature banner', 'ancient camphor forest gif'],
    secondaryElements: ['forest-spirit', 'camphor-trees', 'forest-leaves']
  },
  {
    id: 'animated-lone-samurai-purple',
    title: 'Ronin Sanctuary: Purple Blossom Meadow',
    description: 'Lone ronin warrior in a traditional woven hat standing in a sprawling field of violet wisteria and cherry blossoms under mist-shrouded peaks.',
    tags: ['animated', 'samurai', 'ronin', 'purple', 'wisteria', 'sakura', 'cherry-blossom', 'anime', 'banner', 'gif'],
    searchQueries: ['lone samurai discord banner', 'purple anime wallpaper banner', 'ronin cherry blossom gif'],
    secondaryElements: ['purple-wisteria', 'cherry-blossoms', 'mist-peaks']
  },
  {
    id: 'animated-minecraft-sunset-cat',
    title: 'Voxel Horizon: Pixel Sunset Cat',
    description: 'White cat staring peacefully into the camera before a vibrant voxel pixel sunset with a blocky sun and evening meadows.',
    tags: ['animated', 'pixel-art', 'voxel', 'cat', 'sunset', 'gaming', 'banner', 'gif'],
    searchQueries: ['pixel cat sunset banner', 'voxel sunset cat pfp', 'blocky sunset animated gif'],
    secondaryElements: ['pixel-cat', 'block-sun', 'evening-sky']
  },
  {
    id: 'animated-reze-violet-sakura',
    title: 'Violet Sakura Reverie: Spring Breeze',
    description: 'Anime heroine in the spring breeze with fluttering sakura petals, soft violet gaze, and cinematic lens bloom.',
    tags: ['animated', 'anime', 'sakura', 'cherry-blossom', 'violet', 'female', 'banner', 'gif'],
    searchQueries: ['violet sakura anime banner', 'spring breeze anime pfp', 'sakura petal banner gif']
  },
  {
    id: 'animated-spiderman-rain-gaze',
    title: 'Rain & Melancholy: Masked Urban Vigilante',
    description: 'Melancholic masked hero looking up through a torrential rainstorm with falling water droplets and moody city reflections.',
    tags: ['animated', 'superhero', 'rain', 'vigilante', 'urban', 'melancholy', 'banner', 'cinematic', 'gif', 'moody'],
    searchQueries: ['masked vigilante rain banner', 'moody rain urban pfp', 'rainstorm reflections gif']
  },
  {
    id: 'animated-gojo-infinite-void',
    title: 'Limitless Azure: Celestial Six Eyes Awakening',
    description: 'Sorcerer lifting his blindfold to unleash the boundless azure luminescence of cosmic stellar eyes.',
    tags: ['animated', 'azure-eyes', 'celestial', 'sorcerer', 'anime', 'cosmic', 'banner', 'gif'],
    searchQueries: ['azure celestial eyes banner', 'boundless sorcerer pfp', 'cosmic void anime gif'],
    secondaryElements: ['azure-radiance', 'celestial-expansion', 'infinite-blue']
  },
  {
    id: 'animated-makima-golden-gaze',
    title: 'Hypnotic Concord: Concentric Golden Gaze',
    description: 'Enigmatic leader fixing her captivating concentric golden ring eyes with subtle intoxicating aura and velvet crimson shading.',
    tags: ['animated', 'golden-eyes', 'concentric-rings', 'anime', 'female', 'banner', 'gif', 'crimson'],
    searchQueries: ['concentric golden eyes banner', 'hypnotic anime stare pfp', 'crimson velvet aura gif'],
    secondaryElements: ['concentric-eyes', 'control-aura', 'crimson-velvet']
  },
  {
    id: 'animated-sukuna-malevolent-shrine',
    title: 'Curse Sovereign: Crimson Domain Claws',
    description: 'The ancient sorcery tyrant manifesting an ominous crimson domain with slicing aura cleave waves.',
    tags: ['animated', 'curse-tyrant', 'crimson-domain', 'dark-fantasy', 'anime', 'male', 'banner', 'gif'],
    searchQueries: ['crimson domain banner', 'curse sovereign anime pfp', 'dark slicing aura gif'],
    secondaryElements: ['crimson-domain', 'cleave-distortion', 'cursed-blood-sky']
  },
  {
    id: 'animated-zoro-santoryu',
    title: 'Three-Blade Tempest: Emerald Swordsman',
    description: 'Emerald-haired swordsman brandishing triple katanas with spiraling green dragon wind aura.',
    tags: ['animated', 'three-blades', 'swordsman', 'katana', 'dragon-wind', 'anime', 'banner', 'gif', 'green'],
    searchQueries: ['triple blade swordsman banner', 'emerald swordsman pfp', 'dragon wind katana gif'],
    secondaryElements: ['green-bandana', 'three-swords']
  },
  {
    id: 'animated-train-yuji',
    title: 'Metropolitan Sorcerer: Subway Reflections',
    description: 'Young sorcerer riding a metropolitan subway car with rhythmic window light reflections and eerie mystical atmosphere.',
    tags: ['animated', 'subway', 'train', 'sorcerer', 'metropolis', 'anime', 'banner', 'gif'],
    searchQueries: ['subway sorcerer banner', 'metro train anime pfp', 'metropolitan night transit gif'],
    secondaryElements: ['train-lights', 'mystic-energy']
  },
  {
    id: 'animated-2b-monochrome-blade',
    title: 'YoRHa Reverie: Gothic Monochrome Android',
    description: 'Combat android gripping an ornate katana as combat aura sweeps through gothic monochrome ruins.',
    tags: ['animated', 'android', 'monochrome', 'katana', 'sword', 'goth', 'banner', 'gif'],
    searchQueries: ['monochrome android banner', 'gothic swordswoman pfp', 'monochrome ruins blade gif'],
    secondaryElements: ['katana-gleam', 'monochrome-dress']
  },
  {
    id: 'animated-2b-monochrome',
    title: 'Monochrome Requiem: Android Blade',
    description: 'Monochrome gothic cyber-heroine holding a gleaming katana against falling digital ash and dark city rain.',
    tags: ['animated', 'android', 'monochrome', 'katana', 'anime', 'swordswoman', 'banner', 'gif'],
    searchQueries: ['monochrome android banner', 'cyber heroine pfp', 'digital ash katana gif'],
    secondaryElements: ['katana', 'digital-ash']
  },
  {
    id: 'showcase-spiderman-void',
    title: 'Neon Arachnid: Obsidian Void Slinger',
    description: 'The masked web-slinger poised against an obsidian void with glowing neon web strands and chromatic street glints.',
    tags: ['superhero', 'arachnid', 'void', 'web', 'neon', 'cyber', 'banner'],
    searchQueries: ['neon arachnid banner', 'obsidian void superhero pfp', 'neon web slinger banner'],
    secondaryElements: ['web-strands', 'neon-void']
  },
  {
    id: 'showcase-shinchan-clouds',
    title: 'Nostalgic Sunburst: Golden Cumulus Clouds',
    description: 'Warm summer afternoon sky filled with towering nostalgic cumulus clouds and gentle sun rays evoking childhood memories.',
    tags: ['clouds', 'summer', 'nostalgia', 'sky', 'sunburst', 'anime', 'aesthetic', 'banner'],
    searchQueries: ['anime clouds discord banner', 'nostalgic summer sky banner', 'cumulus clouds pfp', 'sunburst discord banner'],
    secondaryElements: ['cumulus-clouds', 'sunburst-rays']
  },
  {
    id: 'pfp-totoro-forest-belly-animated',
    title: 'Forest Spirit Slumber: Camphor Grove',
    description: 'Gentle child resting peacefully on the soft breathing belly of an ancient giant forest spirit in the enchanted camphor woods.',
    tags: ['forest-spirit', 'nature', 'animated', 'cozy', 'anime', 'pfp', 'gif'],
    searchQueries: ['forest spirit pfp gif', 'cozy nature avatar', 'sleeping giant avatar'],
    secondaryElements: ['forest-spirit', 'camphor-leaves']
  },
  {
    id: 'pfp-minecraft-sunset-cat-animated',
    title: 'Pixel Sunset Cat: Voxel Gaze',
    description: 'The iconic white cat sitting quietly before a warm blocky voxel sunset with shimmering green eyes.',
    tags: ['cat', 'pixel-art', 'voxel', 'sunset', 'meme', 'animated', 'cute', 'pfp', 'gif'],
    searchQueries: ['pixel cat pfp', 'voxel sunset cat avatar', 'cute blocky cat avatar'],
    secondaryElements: ['pixel-cat', 'block-sunset']
  },
  {
    id: 'pfp-lone-samurai-purple-blossoms-animated',
    title: 'Lone Samurai: Purple Blossom Gaze',
    description: 'Lone ronin warrior in a traditional woven hat amidst purple wisteria and falling sakura petals.',
    tags: ['samurai', 'ronin', 'purple', 'wisteria', 'sakura', 'animated', 'anime', 'pfp', 'gif'],
    searchQueries: ['samurai pfp anime', 'ronin purple blossoms pfp gif', 'animated samurai avatar'],
    secondaryElements: ['ronin-samurai', 'purple-wisteria']
  },
  {
    id: 'pfp-red-hair-gaze',
    title: 'Scarlet Gaze: Crimson Stare',
    description: 'Striking anime heroine with vivid red hair and an intense, mesmerizing ruby gaze that commands attention.',
    tags: ['female', 'aesthetic', 'anime', 'red-hair', 'crimson', 'gaze', 'dark', 'pfp'],
    searchQueries: ['red hair anime girl pfp', 'crimson gaze discord pfp', 'scarlet anime avatar', 'scarlet eyes avatar'],
    secondaryElements: ['crimson-hair']
  },
  {
    id: 'pfp-sukuna-red',
    title: 'Curse King: Malevolent Crimson Gaze',
    description: 'Dark sorcery tyrant grinning menacingly with ancient tribal curse markings and burning crimson eyes.',
    tags: ['curse-king', 'dark-fantasy', 'anime', 'curse', 'crimson', 'male', 'shrine', 'pfp'],
    searchQueries: ['curse king pfp', 'crimson eyes male avatar', 'dark fantasy anime avatar'],
    secondaryElements: ['curse-marks', 'malevolent-shrine']
  },
  {
    id: 'pfp-luffy-shades',
    title: 'Sea Rover Swagger: Retro Aviator Shades',
    description: 'Playful pirate adventurer rocking cool retro aviator sunglasses with a confident toothy grin.',
    tags: ['pirate', 'straw-hat', 'anime', 'shades', 'male', 'pfp'],
    searchQueries: ['retro shades anime pfp', 'pirate adventurer avatar', 'anime sunglasses pfp'],
    secondaryElements: ['sunglasses', 'straw-hat']
  },
  {
    id: 'pfp-cool-squirtle',
    title: 'Turtle Squad: Pointed Triangular Shades',
    description: 'Cool blue turtle sporting sleek pointed triangular sunglasses and an unapologetic swagger.',
    tags: ['turtle', 'sunglasses', 'pointed-shades', 'cute', 'retro', 'unisex', 'pfp'],
    searchQueries: ['cool turtle sunglasses pfp', 'pointed shades turtle avatar', 'retro turtle avatar'],
    secondaryElements: ['pointed-shades', 'water-bubbles']
  },
  {
    id: 'showcase-batman-snow',
    title: 'Winter Vigilante: Birch Blizzard',
    description: 'Obsidian masked vigilante standing resolute amidst towering snow-covered birch trees in a quiet winter blizzard.',
    tags: ['superhero', 'blizzard', 'snow', 'vigilante', 'night-stalker', 'banner'],
    searchQueries: ['winter vigilante discord banner', 'snow superhero banner', 'obsidian vigilante pfp'],
    secondaryElements: ['birch-trees', 'falling-snow']
  },
  {
    id: 'showcase-batman-fire',
    title: 'Shadow Guardian: Warehouse Inferno',
    description: 'The masked vigilante standing resolute against an inferno of raging amber warehouse flames and rising sparks.',
    tags: ['inferno', 'fire', 'superhero', 'vigilante', 'night', 'banner'],
    searchQueries: ['vigilante fire discord banner', 'inferno superhero banner', 'night guardian fire pfp'],
    secondaryElements: ['warehouse-inferno', 'rising-embers']
  },
  {
    id: 'showcase-cloud-cats',
    title: 'Summer Cloudwatchers: Ivy Wall',
    description: 'Five peaceful cats perched on a stone ivy-covered wall watching birds soar across massive summer cumulus clouds.',
    tags: ['cats', 'clouds', 'summer', 'aesthetic', 'cozy', 'sky'],
    searchQueries: ['aesthetic cat discord banner', 'cozy cats wall pfp', 'anime cloud banner'],
    secondaryElements: ['birds', 'cumulus-clouds']
  },
  {
    id: 'showcase-cute-sanctuary',
    title: 'Kawaii Island: Chibi Star Haven',
    description: 'A whimsical pastel floating island with a crystal mushroom house, gentle rainbow waterfalls, and playful chibi spirits.',
    tags: ['cute', 'kawaii', 'floating-island', 'chibi', 'rainbow', 'fantasy'],
    searchQueries: ['cute discord banner', 'kawaii island banner', 'chibi pfp'],
    secondaryElements: ['rainbow-falls', 'crystal-mushrooms']
  },
  {
    id: 'hero-02',
    title: 'Night Vigilante: Gargoyle Overlook',
    description: 'A cloaked protector perched above rain-slicked city streets as a distant spotlight cuts through the storm clouds.',
    tags: ['vigilante', 'bat-emblem', 'rain', 'night-sentinel', 'city'],
    searchQueries: ['night vigilante banner discord', 'vigilante pfp', 'night hero banner'],
    secondaryElements: ['searchlight-cone', 'rain-streaks', 'cape-silhouette']
  },
  {
    id: 'hero-06',
    title: 'Titan Bastion: Quantum Core Armor',
    description: 'Gleaming gold-titanium composite alloy chestplate with an energized triangular power core humming with energy.',
    tags: ['quantum-core', 'armor', 'titanium', 'gold', 'futuristic'],
    searchQueries: ['quantum core discord banner', 'power core pfp', 'titanium hero banner'],
    secondaryElements: ['power-core', 'hud-overlay', 'cooling-steam']
  },
  {
    id: 'hero-07',
    title: 'Arachnid Slinger: Sunset Drop',
    description: 'Silhouetted acrobat launching a high-tensile web strand between skyscrapers under a burning violet sunset.',
    tags: ['arachnid', 'web', 'skyline', 'sunset', 'swing', 'superhero'],
    searchQueries: ['arachnid slinger banner', 'web slinger pfp discord', 'sunset hero banner'],
    secondaryElements: ['web-lines', 'skyscraper-windows', 'sunset-halo']
  }
];

// Add posters for the 21 animated PFPs
const posterMap = {
  'totoro-forest-belly-nap': '/assets/pfps/totoro-forest-belly-nap-poster.webp',
  'ocean-whale-sunburst-abyss': '/assets/pfps/ocean-whale-sunburst-abyss-poster.webp',
  'kawaii-panda-grass-nap': '/assets/pfps/kawaii-panda-grass-nap-poster.webp',
  'floating-calico-cat-koi-ripples': '/assets/pfps/floating-calico-cat-koi-ripples-poster.webp',
  't-pose-dancing-kittens': '/assets/pfps/t-pose-dancing-kittens-poster.webp',
  'kawaii-panda-guitar-stroll': '/assets/pfps/kawaii-panda-guitar-stroll-poster.webp',
  'minecraft-sunset-cat': '/assets/pfps/minecraft-sunset-cat-poster.webp',
  'lone-samurai-purple-blossoms': '/assets/pfps/lone-samurai-purple-blossoms-poster.webp',
  'bongo-cat': '/assets/pfps/bongo-cat-poster.webp',
  'vibing-cat': '/assets/pfps/vibing-cat-poster.webp',
  'pop-cat': '/assets/pfps/pop-cat-poster.webp',
  'maxwell-spinning-cat': '/assets/pfps/maxwell-spinning-cat-poster.webp',
  'cat-typing-laptop': '/assets/pfps/cat-typing-laptop-poster.webp',
  'cool-cat-sunglasses': '/assets/pfps/cool-cat-sunglasses-poster.webp',
  'chipi-chapa-cat': '/assets/pfps/chipi-chapa-cat-poster.webp',
  'anime-catgirl-ears': '/assets/pfps/anime-catgirl-ears-poster.webp',
  'blinking-kitten': '/assets/pfps/blinking-kitten-poster.webp',
  'peach-goma-cat': '/assets/pfps/peach-goma-cat-poster.webp',
  'cozy-loaf-cat': '/assets/pfps/cozy-loaf-cat-poster.webp',
  'cyberpunk-neon-cat': '/assets/pfps/cyberpunk-neon-cat-poster.webp'
};

let content = fs.readFileSync('src/data/assets.ts', 'utf-8');

// Replace comments
content = content.replace('// --- PREVIOUS GHIBLI, OCEAN & KAWAII ANIMATED BANNERS ---', '// --- PREVIOUS NATURE, OCEAN & KAWAII ANIMATED BANNERS ---');
content = content.replace('// --- NEW GHIBLI, OCEAN & KAWAII ANIMATED AVATARS (PFPs) ---', '// --- NEW NATURE, OCEAN & KAWAII ANIMATED AVATARS (PFPs) ---');

let replacedCount = 0;

for (const item of items) {
  // Find id line
  const idPattern = new RegExp(`(\\n\\s+id:\\s*['"]${item.id}['"],)([\\s\\S]*?)(?=\\n\\s+id:|\\n\\];)`);
  const match = content.match(idPattern);
  if (!match) {
    console.warn(`Could not match preset: ${item.id}`);
    continue;
  }

  let block = match[0];

  // Replace title
  if (item.title) {
    block = block.replace(/\n(\s+)title:\s*['"][^\n]*['"],/, `\n$1title: '${item.title.replace(/'/g, "\\'")}',`);
  }

  // Replace description
  if (item.description) {
    block = block.replace(/\n(\s+)description:\s*['"][^\n]*['"],/, `\n$1description: '${item.description.replace(/'/g, "\\'")}',`);
  }

  // Replace tags
  if (item.tags) {
    const formattedTags = item.tags.map(t => `'${t}'`).join(', ');
    block = block.replace(/\n(\s+)tags:\s*\[[^\n]*\],/, `\n$1tags: [${formattedTags}],`);
  }

  // Replace searchQueries if present
  if (item.searchQueries) {
    const formattedSearch = item.searchQueries.map(s => `'${s.replace(/'/g, "\\'")}'`).join(', ');
    if (/searchQueries:\s*\[/.test(block)) {
      block = block.replace(/\n(\s+)searchQueries:\s*\[[^\n]*\](,)?/, (m, indent, comma) => `\n${indent}searchQueries: [${formattedSearch}]${comma || ''}`);
    }
  }

  // Replace secondaryElements if present
  if (item.secondaryElements) {
    const formattedSec = item.secondaryElements.map(s => `'${s}'`).join(', ');
    if (/secondaryElements:\s*\[/.test(block)) {
      block = block.replace(/\n(\s+)secondaryElements:\s*\[[^\n]*\](,)?/, (m, indent, comma) => `\n${indent}secondaryElements: [${formattedSec}]${comma || ''}`);
    }
  }

  content = content.replace(match[0], block);
  replacedCount++;
  console.log(`[${replacedCount}/${items.length}] Updated preset: ${item.id}`);
}

// Ensure poster imageUrls for the 20 pfps
for (const [slug, posterPath] of Object.entries(posterMap)) {
  const pfpPattern = new RegExp(`(\\n\\s+slug:\\s*['"]${slug}['"],)([\\s\\S]*?)(pfpImageUrl:)`);
  const m = content.match(pfpPattern);
  if (m && !m[2].includes('imageUrl:')) {
    content = content.replace(m[0], `${m[1]}${m[2]}imageUrl: '${posterPath}',\n    ${m[3]}`);
    console.log(`Added poster imageUrl for: ${slug}`);
  }
}

fs.writeFileSync('src/data/assets.ts', content, 'utf-8');
console.log(`\nSuccessfully updated ${replacedCount} presets and poster URLs in src/data/assets.ts!`);
