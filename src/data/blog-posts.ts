export interface BlogSection {
  id: string;
  heading: string;
  content: string;
  callout?: {
    type: 'info' | 'warning' | 'tip' | 'success';
    title: string;
    text: string;
  };
  table?: {
    headers: string[];
    rows: string[][];
  };
  code?: {
    language: string;
    snippet: string;
    caption?: string;
  };
}

export interface BlogFAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  /** Natural-language H1 / schema headline, free of pipe separators and brand suffixes. */
  heading: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  longTailKeywords: string[];
  category: 'Tutorials' | 'Design & Inspiration' | 'Specifications & Guides';
  readTime: string;
  datePublished: string;
  dateModified: string;
  author: {
    name: string;
    role: string;
  };
  summary: string;
  toolCta: {
    name: string;
    headline: string;
    description: string;
    buttonText: string;
    href: string;
    badge: string;
  };
  sections: BlogSection[];
  faqs: BlogFAQ[];
  /** Present only on procedural posts; drives HowTo JSON-LD. */
  howToSteps?: { name: string; text: string }[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'how-to-make-discord-stickers',
    title: 'How to Make a Discord Sticker | Avoid Asset Errors | Studio',
    heading: 'How to Make a Discord Sticker',
    howToSteps: [
      { name: 'Resize to 320×320', text: 'Crop or scale your artwork to exactly 320×320 pixels — the only dimensions Discord accepts for custom stickers.' },
      { name: 'Compress under 512 KiB', text: 'Export as PNG (or APNG for animation) and compress the file below the 512 KiB limit to avoid the "invalid asset" error.' },
      { name: 'Open Server Settings → Stickers', text: 'In your server, open Server Settings, select the Stickers tab, and click Upload Sticker.' },
      { name: 'Upload and name the sticker', text: 'Choose your 320×320 file, give the sticker a name and a related emoji, then save.' }
    ],
    metaDescription: 'Complete guide on how to make a Discord sticker. Master 320x320 dimensions, 512 KiB limits, APNG compression, and resolve invalid asset errors instantly.',
    primaryKeyword: 'how to make a discord sticker',
    secondaryKeywords: [
      'discord sticker invalid asset',
      'discord sticker dimensions',
      'discord sticker compressor',
      'how to add sticker discord'
    ],
    longTailKeywords: [
      'discord sticker size converter',
      'gif to sticker discord',
      'animated sticker discord',
      'discord sticker size limit'
    ],
    category: 'Tutorials',
    readTime: '6 min read',
    datePublished: '2026-02-15T08:00:00Z',
    dateModified: '2026-03-01T10:00:00Z',
    author: {
      name: 'Discord Asset Studio Engineering',
      role: 'Client Architecture Specialist'
    },
    summary: 'Everything you need to know to make custom Discord stickers that upload without errors. Avoid the "invalid asset" rejection by sticking to 320×320 pixels, keeping files under 512 KiB, and using APNG for animations.',
    toolCta: {
      name: 'Discord Sticker Maker',
      headline: 'Format Stickers with Instant Verification',
      description: 'Crop, resize, and convert PNG and APNG graphics to exact 320×320 dimensions under 512 KiB in your browser with zero uploads.',
      buttonText: 'Open Sticker Studio',
      href: '/tools/sticker/',
      badge: '320 × 320 px • 512 KiB'
    },
    sections: [
      {
        id: 'understanding-discord-sticker-specifications',
        heading: '1. Discord Sticker Dimensions & Technical Rules',
        content: `Learning <mark class="bg-[#C8DFDB]/60 dark:bg-[#66A3BF]/20 text-[#192538] dark:text-white font-semibold px-1 rounded">how to make a discord sticker</mark> is easy once you understand Discord's upload rules. Unlike <a href="/tools/emoji/" class="text-[#3368A0] dark:text-[#66A3BF] font-semibold hover:underline">custom emojis</a> which can be rectangular, custom stickers must be an exact 1:1 square at 320×320 pixels.

Discord supports three sticker formats:
- **Static PNG**: Transparent background graphics with clean edges.
- **APNG (Animated PNG)**: The required format for custom animated stickers on Discord.
- **Lottie (.json)**: Vector animations used mostly for official partner sticker packs.

For community servers, static stickers must stay under 512 KiB (524,288 bytes). A common mistake is trying to upload a normal animated GIF as a sticker. Discord will reject standard .gif files immediately because custom sticker animations must be encoded as APNG.`,
        table: {
          headers: ['Parameter', 'Static Sticker Requirement', 'Animated Sticker Requirement'],
          rows: [
            ['Dimensions', 'Exactly 320 × 320 px', 'Exactly 320 × 320 px'],
            ['Aspect Ratio', 'Strict 1:1 Square', 'Strict 1:1 Square'],
            ['Allowed Formats', 'PNG, APNG', 'APNG only (GIF rejected)'],
            ['File Size Limit', '512 KiB (524,288 bytes)', '512 KiB (524,288 bytes)'],
            ['Frame Rate', 'N/A', 'Max 60 FPS (Recommended: 30 FPS)'],
            ['Animation Duration', 'N/A', 'Max 5.0 seconds']
          ]
        },
        callout: {
          type: 'warning',
          title: 'The APNG vs GIF Gotcha',
          text: 'Discord rejects .gif files when uploaded to your custom sticker slots. You need to convert your animation to APNG format, or convert a gif to sticker discord format using a dedicated tool.'
        }
      },
      {
        id: 'fixing-discord-sticker-invalid-asset-errors',
        heading: '2. Fixing the "Discord Sticker Invalid Asset" Error',
        content: `The "discord sticker invalid asset" error is the most common problem creators hit when uploading stickers. Discord simply shows an error banner without telling you what went wrong.

Here are the four most common causes and how to fix them:
1. **Wrong Dimensions**: Even a 1-pixel difference (like 320×321 or 319×320) causes an instant failure. Both width and height must equal 320 pixels exactly.
2. **File Size Too Big**: If your PNG or APNG is 524,289 bytes—just one byte over 512 KiB—Discord rejects it. Using our built-in discord sticker compressor strips invisible camera data and color profiles to save space.
3. **Animation Too Long or Too Fast**: Animated stickers that run longer than 5 seconds or exceed 60 frames per second will be rejected.
4. **Incorrect Color Mode**: Malformed color palettes can trigger asset warnings. Saving your artwork as a standard 32-bit RGBA PNG ensures it works everywhere.`
      },
      {
        id: 'step-by-step-sticker-creation-workflow',
        heading: '3. Step-by-Step: <mark class="bg-[#C8DFDB]/60 dark:bg-[#66A3BF]/20 text-[#192538] dark:text-white font-semibold px-1 rounded">How to Make a Discord Sticker</mark>',
        content: `Follow these simple steps to make clean, sharp stickers:

- **Step 1: Set Your Canvas**: Create a 320×320 pixel square canvas in Photoshop, Figma, or open our free in-browser <a href="/tools/sticker/" class="text-[#3368A0] dark:text-[#66A3BF] font-semibold hover:underline">Sticker Studio</a>.
- **Step 2: Transparent Background**: Place your artwork on a transparent layer. Add a 3px to 6px white or light outline around your subject so it stands out against both Discord dark mode (<a href="/tools/colors/" class="text-[#3368A0] dark:text-[#66A3BF] font-semibold hover:underline">#313338</a>) and light mode (#FFFFFF).
- **Step 3: Keep Safe Margins**: Keep key details inside an internal 16px safety margin (304×304 px) so nothing gets cut off when Discord rounds preview corners.
- **Step 4: Export & Compress**: Export using an automated discord sticker size converter or compressor to keep the file under 512 KiB.`,
        callout: {
          type: 'tip',
          title: 'Check Against Both Themes',
          text: 'Preview your sticker against both dark gray (#1E1F22) and white backgrounds. Dark character art without an outline can completely disappear on Discord Dark Mode.'
        }
      },
      {
        id: 'how-to-add-stickers-to-discord-servers',
        heading: '4. How to Add Sticker Discord Server Uploads',
        content: `Once your sticker is exported, uploading it to your server requires Administrator or "Manage Emojis and Stickers" permissions.

Here is the exact upload path:
1. Open Discord on desktop or web.
2. Click your server name dropdown in the top-left and select **Server Settings**.
3. Go to **Stickers** in the left sidebar.
4. Click the purple **Upload Sticker** button.
5. Select your verified 320×320 PNG or APNG file.
6. Give it a **Sticker Name** (2–30 characters) and pick a **Related Emoji** (typing this emoji in chat suggests your sticker).
7. Add an optional **Description** for accessibility.
8. Click **Upload**. Your sticker is now live for everyone in your server!`
      }
    ],
    faqs: [
      {
        question: 'What causes the discord sticker invalid asset error on upload?',
        answer: 'The invalid asset error is triggered by non-square dimensions (not exactly 320x320 pixels), exceeding the 512 KiB file limit, uploading a .gif file instead of an APNG, or animations lasting longer than 5 seconds.'
      },
      {
        question: 'Can I upload animated GIF files as Discord stickers?',
        answer: 'No. Discord server sticker slots do not support standard .gif files. Custom animated stickers must be encoded as APNG (Animated PNG) files with a maximum length of 5 seconds and 320x320 resolution.'
      },
      {
        question: 'How many custom stickers can a Discord server hold?',
        answer: 'A standard free server starts with 5 custom sticker slots. Reaching Boost Level 1 unlocks 15 slots, Boost Level 2 unlocks 30 slots, and Boost Level 3 unlocks up to 60 custom sticker slots.'
      },
      {
        question: 'What is the best way to compress a Discord sticker under 512 KiB?',
        answer: 'To compress stickers under 512 KiB, strip EXIF metadata, reduce animation framerate from 60 FPS down to 30 FPS, and utilize palette quantization or lossless PNG optimization tools like our Sticker Studio.'
      }
    ]
  },
  {
    slug: 'discord-banner-ideas-templates',
    title: 'Discord Banner Ideas | Find Your Aesthetic | Asset Studio',
    heading: 'Discord Banner Ideas & Templates',
    metaDescription: 'Explore creative Discord banner ideas and templates. Download 960x540 server and 680x240 profile banner layouts in red, blue, anime, and black themes.',
    primaryKeyword: 'discord banner ideas',
    secondaryKeywords: [
      'discord banner template',
      'discord server banner template',
      'red discord banner',
      'anime discord banner'
    ],
    longTailKeywords: [
      'black banner discord',
      'blue banner discord',
      'aesthetic discord banner',
      'discord banner gifs',
      'discord banner ratio'
    ],
    category: 'Design & Inspiration',
    readTime: '7 min read',
    datePublished: '2026-02-18T09:00:00Z',
    dateModified: '2026-03-02T11:00:00Z',
    author: {
      name: 'Discord Asset Studio Design Lab',
      role: 'Visual Identity & Community UX Lead'
    },
    summary: 'Find practical Discord banner ideas for servers and personal profiles. Explore anime styles, clean dark mode layouts, and bold color themes calibrated for Discord safe zones.',
    toolCta: {
      name: 'Discord Banner Maker',
      headline: 'Design & Crop Your Banner With Safe Zones',
      description: 'Test your banner artwork against Discord UI overlays. Format 960×540 server headers and 680×240 profile cards with zero blur.',
      buttonText: 'Open Banner Studio',
      href: '/tools/banner/',
      badge: '16:9 & 680 × 240 px'
    },
    sections: [
      {
        id: 'top-trending-discord-banner-ideas',
        heading: '1. Curated <mark class="bg-[#C8DFDB]/60 dark:bg-[#66A3BF]/20 text-[#192538] dark:text-white font-semibold px-1 rounded">Discord Banner Ideas</mark> by Community Niche',
        content: `Your banner is the first thing people see when they join your server or open your profile card. A good banner sets the mood right away and makes your space feel active and welcoming.

Here are popular design styles that work well across different communities:

### A. Minimalist Dark Mode & Tech
Keep the background in deep slate or near-black (#141A24 or #1E1F22) with sharp accent lines or subtle glowing outlines. This matches Discord native dark mode seamlessly so the banner blends into the interface without feeling harsh on the eyes.

### B. Anime Discord Banner Aesthetics
Anime styles remain a community favorite. Wide landscape shots work best here, including sunset gradients, quiet city streets, or lofi bedroom art. Keep character faces centered and lower down on the canvas so server title text does not cover them.

### C. Bold High-Contrast Color Themes
- **Red Discord Banner**: Great for esports squads and competitive gaming groups. Pair vivid red (#DC2626) highlights with dark charcoal for strong contrast.
- **Blue Discord Banner**: Fits coding discords, study groups, and tech communities. Soft sapphire (#2563EB) and cyan (#06B6D4) tones feel clean and relaxed.
- **Black Banner Discord**: Sleek and minimal. Works well for creator clubs using subtle film grain, clean typography, or simple geometric badges.`,
        callout: {
          type: 'info',
          title: 'Color Contrast in Chat',
          text: 'Because Discord channels default to dark neutral tones, high-contrast red and bright cyan banners catch the eye quickly when members browse server lists.'
        }
      },
      {
        id: 'understanding-banner-ratios-and-dimensions',
        heading: '2. Discord Banner Ratio & Canvas Sizes',
        content: `Server banners and profile banners use two completely different shapes — and if you need the step-by-step upload flow, see our guide on <a href="/blog/how-to-change-discord-server-banner/" class="text-[#3368A0] dark:text-[#66A3BF] font-semibold hover:underline">how to change a Discord server banner</a>:

1. **Server Banners (16:9 Widescreen Ratio)**:
   - Minimum size: 960 × 540 pixels.
   - Best quality: 1920 × 1080 pixels (Discord downscales this cleanly for crisp rendering on high-DPI displays).
   - Top safe zone: The top 48px has the server name and dropdown arrow on top of it. Keep all important text and logos below that 48px mark.

2. **User Profile Banners (17:6 Panoramic Ratio)**:
   - Official size: 680 × 240 pixels.
   - Common mistake: Using a 16:9 YouTube or Twitter banner directly cuts off about 40% of the height.
   - Avatar cut-out: Your circular avatar and status dot sit over the bottom-left area, so keep that corner clear of text.`,
        table: {
          headers: ['Banner Type', 'Canvas Dimensions', 'Aspect Ratio', 'Required Tier', 'Top Occlusion Zone'],
          rows: [
            ['Server Banner (Static)', '960 × 540 px', '16:9', 'Boost Level 2', 'Top 48 px header bar'],
            ['Server Banner (Animated)', '960 × 540 px', '16:9', 'Boost Level 3', 'Top 48 px header bar'],
            ['Server Invite Splash', '1920 × 1080 px', '16:9', 'Boost Level 1', 'None (Centered modal)'],
            ['User Profile Banner', '680 × 240 px', '17:6 (~2.83:1)', 'Discord Nitro', 'Bottom-left avatar cut']
          ]
        }
      },
      {
        id: 'free-discord-banner-template-guidelines',
        heading: '3. Setting Up an Exact Discord Server Banner Template',
        content: `When creating a <a href="/tools/banner/" class="text-[#3368A0] dark:text-[#66A3BF] font-semibold hover:underline">discord server banner template</a> in Figma, Photoshop, or Canva, setting up ruler guides first saves you time:

- **Canvas Size**: Start with 1920×1080 px for high quality (or 960×540 px for smaller file sizes).
- **Header Guide**: Draw a guide line 96 px down from the top (which matches the 48px mobile and desktop header bar). Keep all titles, logos, and character faces below this line.
- **Left Margin**: Keep text at least 40px away from the left edge so mobile sidebars do not clip the start of your words.
- **Main Illustration**: Place your main artwork toward the center or center-right so it stays clearly visible behind your server icon.`,
        callout: {
          type: 'tip',
          title: 'Exporting Discord Banner GIFs',
          text: 'If you are making animated discord banner gifs for a Level 3 boosted server, keep your file under 10 MB and aim for 30 FPS. Smooth ambient loops, like falling snow or subtle light pulses, look much better than fast, jerky cuts.'
        }
      }
    ],
    faqs: [
      {
        question: 'What is the correct Discord server banner size and aspect ratio?',
        answer: 'Discord server banners require a 16:9 aspect ratio with minimum dimensions of 960x540 pixels. Creating your file at 1920x1080 pixels gives the sharpest result on Retina and 4K screens.'
      },
      {
        question: 'What is the difference between a Discord server banner and a profile banner?',
        answer: 'A server banner sits at the top of your channel list in a 16:9 widescreen ratio (960x540). A personal profile banner sits inside your user profile modal in a wide 680x240 pixel panoramic format.'
      },
      {
        question: 'How do I unlock an animated GIF banner for my Discord server?',
        answer: 'Animated server banners unlock when your server reaches Boost Level 3, which requires 14 active boosts from community members.'
      },
      {
        question: 'Why does my Discord banner look blurry after uploading?',
        answer: 'Banners look blurry when uploaded smaller than 960x540 pixels or when saved with heavy JPEG compression. Use clean PNG files or high-quality WebP images at 1920x1080 for crisp results.'
      }
    ]
  },
  {
    slug: 'discord-pfp-ideas-anime-avatars',
    title: 'PFP Discord | Stand Out in Chat Feeds | Asset Studio',
    heading: 'PFP Discord Ideas for Anime Avatars',
    metaDescription: 'Find the best anime PFP Discord ideas and avatars. Master circle mask geometry, GIF animations, and avoid status indicator badge clipping under 8 MB.',
    primaryKeyword: 'pfp discord',
    secondaryKeywords: [
      'anime pfp discord',
      'discord gif pfp',
      'cool discord avatar',
      'discord avatar ideas'
    ],
    longTailKeywords: [
      'sonic pfp discord',
      'emo girl pfp discord',
      'black cat pfp discord',
      'profile discord avatar',
      'discord avatar maker'
    ],
    category: 'Design & Inspiration',
    readTime: '6 min read',
    datePublished: '2026-02-22T08:30:00Z',
    dateModified: '2026-03-03T09:15:00Z',
    author: {
      name: 'Discord Asset Studio Community Desk',
      role: 'Avatar & Identity Curator'
    },
    summary: 'Looking for fresh Discord PFP ideas or anime avatars? Here is how to pick avatars that look great inside Discord circular crop, avoid corner loss, and stay sharp in small chat messages.',
    toolCta: {
      name: 'Discord Avatar Cropper',
      headline: 'Preview Your PFP With Live Circular Masking',
      description: 'Upload any artwork to preview circle clipping, status badge clearances, and download a crisp 512×512 pixel avatar instantly.',
      buttonText: 'Open Avatar Studio',
      href: '/tools/avatar/',
      badge: '512 × 512 px • Live Circle Preview'
    },
    sections: [
      {
        id: 'curated-discord-pfp-ideas',
        heading: '1. Popular <mark class="bg-[#C8DFDB]/60 dark:bg-[#66A3BF]/20 text-[#192538] dark:text-white font-semibold px-1 rounded">PFP Discord</mark> Styles',
        content: `Your profile picture (PFP) is how friends recognize you in channels, direct messages, and voice calls. A good <a href="/tools/avatar/" class="text-[#3368A0] dark:text-[#66A3BF] font-semibold hover:underline">discord pfp</a> shows off your personality, favorite games, or community style.

Here are some of the most popular avatar styles:

### A. Anime <mark class="bg-[#C8DFDB]/60 dark:bg-[#66A3BF]/20 text-[#192538] dark:text-white font-semibold px-1 rounded">PFP Discord</mark> Avatars
Anime avatars are a staple across Discord servers. Popular looks include:
- **Lofi and Relaxed**: Soft pastel colors, rain against a window, and headphones.
- **Action Stills**: Clean, high-contrast action frames from series like Jujutsu Kaisen or Demon Slayer.
- **Black-and-White Manga Panels**: Crisp ink drawings that stand out clearly against Discord dark background.

### B. Character and Retro Game PFPs
- **Pixel Art & Retro Gaming**: Vintage sprites, Sonic the Hedgehog icons, or 3D low-poly models.
- **Dark & Moody Aesthetics**: Muted colors, purple rim lighting, and vintage film textures.
- **Animals & Mascots**: High-contrast black cat silhouettes, capybaras, or cute illustrations with clear outlines.`,
        callout: {
          type: 'info',
          title: 'How Avatars Scale in Chat',
          text: 'In text channels, your avatar shrinks down to just 32×32 or 40×40 pixels. Busy backgrounds get lost, so simple silhouettes and clear facial expressions work best.'
        }
      },
      {
        id: 'circular-mask-geometry-and-status-indicators',
        heading: '2. The Circle Crop: Why Corners Get Cut Off',
        content: `Even though you upload a square 1:1 image as your profile <mark class="bg-[#C8DFDB]/60 dark:bg-[#66A3BF]/20 text-[#192538] dark:text-white font-semibold px-1 rounded">discord avatar</mark>, Discord automatically cuts it into a circle.

Cutting a circle out of a square removes about one-fifth of the image:
$$\\text{Corner Loss} = 1 - \\frac{\\pi}{4} \\approx 21.46\\%$$

That means roughly 21.5% of your canvas disappears from the corners.

On top of that, Discord places a <a href="/tools/colors/" class="text-[#3368A0] dark:text-[#66A3BF] font-semibold hover:underline">colored status dot</a> (green for online, yellow for idle, red for do not disturb, or gray for offline) over the bottom-right corner. Keep text and important details away from the corners so they do not get cut off or covered.`,
        table: {
          headers: ['Where It Shows', 'Rendered Size', 'Shape', 'Safe Zone Tip'],
          rows: [
            ['Message Feed', '40 × 40 px', 'Circle', 'Keep it simple and readable'],
            ['Member Sidebar', '32 × 32 px', 'Circle', 'Needs good contrast'],
            ['User Profile Card', '128 × 128 px', 'Circle', 'Looks best when sharp'],
            ['Status Indicator', '14 × 14 px dot', 'Bottom-Right Corner', 'Covers bottom-right corner']
          ]
        }
      },
      {
        id: 'animated-discord-gif-pfp-guide',
        heading: '3. Creating a Smooth Discord GIF PFP',
        content: `If you have Discord Nitro, you can upload an animated <a href="/tools/gif-maker/" class="text-[#3368A0] dark:text-[#66A3BF] font-semibold hover:underline">discord gif pfp</a>. Standard GIFs can sometimes look choppy or blurry, but three simple habits will keep your avatar looking clean:

1. **Clean Loops**: Make the start and end frames line up so the animation plays in a smooth loop without jumping.
2. **Start at 512×512 px**: Do not upload tiny 128×128 pixel files. High-resolution phone screens will stretch small files, making them look fuzzy.
3. **Keep It Under 8 MB**: Discord allows files up to 8.0 MB for avatars. Sticking to 24 or 30 FPS gives you plenty of frames for a smooth 3 to 4 second loop without hitting the file limit.`
      }
    ],
    faqs: [
      {
        question: 'What are the recommended dimensions for a Discord PFP?',
        answer: 'The recommended size for a Discord profile picture is 512x512 pixels at a 1:1 square ratio. This keeps your image sharp across desktop monitors and high-resolution phones.'
      },
      {
        question: 'Do I need Discord Nitro to use an animated GIF PFP?',
        answer: 'Yes. Static PNG, JPEG, and WebP avatars are completely free for everyone, while animated GIF avatars require an active Discord Nitro or Nitro Basic subscription.'
      },
      {
        question: 'How much of my avatar is clipped by Discord circular cropping?',
        answer: 'Discord circular mask cuts off about 21.46% of your square image at the four corners. Keep faces, logos, and focal art in the center to keep them visible.'
      },
      {
        question: 'What is the maximum file size for Discord avatar uploads?',
        answer: 'Discord allows avatar image files up to 8.0 MB (8,388,608 bytes) for both static pictures and animated GIFs.'
      }
    ]
  },
  {
    slug: 'how-to-put-spoiler-on-discord-image',
    title: 'How to Put a Spoiler on Discord Image | Hide Media | Studio',
    heading: 'How to Put a Spoiler on Discord Images',
    howToSteps: [
      { name: 'Attach the image', text: 'In the Discord message box, attach the image you want to hide — but do not send it yet.' },
      { name: 'Mark as spoiler on desktop', text: 'Hover over the attachment and click the eye / "Mark as spoiler" icon before sending.' },
      { name: 'Mark as spoiler on mobile', text: 'On iOS or Android, tap the attached image and choose "Mark as Spoiler".' },
      { name: 'Or use the SPOILER_ prefix', text: 'Rename the file so it begins with SPOILER_ and Discord blurs it automatically on upload.' }
    ],
    metaDescription: 'Learn how to put a spoiler on Discord image files on desktop and mobile. Master SPOILER_ file naming tricks and size limits under 25 MB.',
    primaryKeyword: 'how to put a spoiler on discord image',
    secondaryKeywords: [
      'spoiler discord image',
      'discord image spoiler',
      'how to put spoiler on discord image'
    ],
    longTailKeywords: [
      'discord image compressor',
      'discord image size limit',
      'discord image downloader'
    ],
    category: 'Tutorials',
    readTime: '5 min read',
    datePublished: '2026-02-25T10:00:00Z',
    dateModified: '2026-03-04T12:00:00Z',
    author: {
      name: 'Discord Asset Studio Community Engineering',
      role: 'Platform Operations Specialist'
    },
    summary: 'Do not want to ruin movie endings or share sensitive memes unexpectedly? Here is how to put a spoiler on Discord image files on desktop, iPhone, Android, and the web, plus a handy filename trick.',
    toolCta: {
      name: 'Discord Image Resizer & Studio',
      headline: 'Format & Compress Media Before Sharing',
      description: 'Resize large screenshots, strip camera metadata, and compress images under Discord 25 MB limit right in your browser.',
      buttonText: 'Open Image Studio',
      href: '/tools/image-resizer/',
      badge: 'Free In-Browser Utility'
    },
    sections: [
      {
        id: 'desktop-and-web-spoiler-method',
        heading: '1. How to Spoiler Discord Images on Desktop & Web Browser',
        content: `Discord lets you <a href="/tools/spoiler/" class="text-[#3368A0] dark:text-[#66A3BF] font-semibold hover:underline">blur sensitive images</a> behind a dark overlay so people only see them if they click to uncover them.

Here is the quickest way to do it on desktop:
1. Drag and drop your image into the Discord chat box, or click the **+ (Plus)** button next to the message input and select **Upload a File**.
2. Before pressing Enter, look at the preview box above your text box.
3. Click the small **Eye Icon** (labeled *Mark as Spoiler*) in the top-right corner of the attachment thumbnail.
4. Alternatively, click the **Pencil Icon** (*Modify Attachment*) to open settings, check the box labeled **Mark as Spoiler**, and click Save.
5. The image preview will blur with an eye symbol in the center. Type any text you want and press Enter to send.`,
        callout: {
          type: 'tip',
          title: 'Quick Eye Icon Shortcut',
          text: 'Hover your mouse over any image you attached in Discord desktop to see the eye icon. One click marks it as a spoiler without opening extra menus.'
        }
      },
      {
        id: 'mobile-app-spoiler-method-ios-android',
        heading: '2. Spoilering Images on Discord Mobile (iOS & Android)',
        content: `Marking an image as a spoiler on your phone takes just a couple of taps:

1. Tap the **+** button next to the chat bar and choose a photo from your camera roll.
2. Tap the thumbnail of the attached image before sending it.
3. Turn on the **Mark as Spoiler** switch (on iPhone) or check the **Mark as spoiler** box (on Android).
4. Tap outside the menu to return to your chat. The preview will now show a blurred shield.
5. Tap the send button to share your spoiler-protected photo.`
      },
      {
        id: 'the-universal-spoiler-file-naming-hack',
        heading: '3. The Automatic "SPOILER_" Filename Trick',
        content: `You do not even have to click any buttons to hide an image. If you add \`SPOILER_\` to the beginning of any filename, Discord automatically marks the upload as a spoiler!

### Why this filename trick is so useful:
- **Example Names**: \`SPOILER_boss_fight.png\` or \`SPOILER_ending.jpg\`.
- **Case Does Not Matter**: Even lowercase \`spoiler_photo.png\` works on modern versions of Discord.
- **Great for Multiple Photos**: If you want to send several images at once, naming them this way means every single image is blurred automatically without clicking each one.`,
        code: {
          language: 'bash',
          snippet: '# Terminal / Scripting batch spoiler rename\nmv screenshot.png SPOILER_screenshot.png',
          caption: 'Prefixing filenames with SPOILER_ forces automatic spoiler protection on upload.'
        }
      },
      {
        id: 'discord-image-size-limits-and-compression',
        heading: '4. Discord Image Size Limits: When to Compress Media',
        content: `Large photos or high-res screenshots can fail to send if they pass Discord file limits:
- **Free Accounts**: 25.0 MB max file size (increased from the older 8 MB limit).
- **Discord Nitro Basic**: 50.0 MB max file size.
- **Discord Nitro**: 500.0 MB max file size.

If your photo or capture is larger than 25 MB, using a browser-based <a href="/tools/image-compressor/" class="text-[#3368A0] dark:text-[#66A3BF] font-semibold hover:underline">discord image compressor</a> lets you resize or compress the file so it uploads quickly without needing a paid Nitro subscription.`
      }
    ],
    faqs: [
      {
        question: 'How do you put a spoiler on an image in Discord mobile?',
        answer: 'Pick your photo in the mobile app, tap the image thumbnail above the text bar to open options, toggle on "Mark as Spoiler", and send your message.'
      },
      {
        question: 'What is the secret file name trick for Discord spoilers?',
        answer: 'Adding "SPOILER_" to the start of your file name (like SPOILER_photo.png) tells Discord to mark the image as a spoiler automatically when you upload it.'
      },
      {
        question: 'Can you un-spoiler an image after sending it?',
        answer: 'No. Once a message with a spoiler image is sent, you cannot remove the spoiler tag. You would need to delete the message and upload the image again.'
      },
      {
        question: 'What is the file size limit for image uploads on Discord?',
        answer: 'Free accounts can upload files up to 25 MB. Nitro Basic raises the limit to 50 MB, and full Discord Nitro allows up to 500 MB per file.'
      }
    ]
  },
  {
    slug: 'how-to-change-discord-server-banner',
    title: 'How to Change Discord Server Banner | Boost Guide | Studio',
    heading: 'How to Change Discord Server Banner (Step-by-Step)',
    howToSteps: [
      { name: 'Confirm Boost Level 2', text: 'A server banner requires Boost Level 2, so verify your server has reached the required boost tier first.' },
      { name: 'Prepare a 960×540 image', text: 'Create a 16:9 banner at 960×540 pixels, keeping key artwork clear of the top 48px header overlap.' },
      { name: 'Open Server Settings → Overview', text: 'On desktop, open Server Settings and select the Overview tab.' },
      { name: 'Upload the banner', text: 'Under Server Banner Background, click to upload your image and save changes.' }
    ],
    metaDescription: 'Step-by-step guide on how to change Discord server banner settings. Master 16:9 dimensions (960x540), Boost Level 2 & 3 rules, and header occlusion zones.',
    primaryKeyword: 'how to change discord server banner',
    secondaryKeywords: [
      'how to change server banner discord',
      'how to change server discord banner',
      'discord server banner dimensions'
    ],
    longTailKeywords: [
      'discord server banner background',
      'discord animated banner',
      'discord server banner maker'
    ],
    category: 'Specifications & Guides',
    readTime: '6 min read',
    datePublished: '2026-02-28T09:00:00Z',
    dateModified: '2026-03-05T14:30:00Z',
    author: {
      name: 'Discord Asset Studio Community Engineering',
      role: 'Server Infrastructure Architect'
    },
    summary: 'Learn how to change your Discord server banner step by step. We cover the boost levels needed for static and animated banners, 960×540 dimensions, and how to keep text out of the top 48px header.',
    toolCta: {
      name: 'Discord Banner Maker',
      headline: 'Format Your Server Banner in Seconds',
      description: 'Crop and inspect your 960×540 server banner with top 48px header occlusion overlays in our free client-side studio.',
      buttonText: 'Open Banner Studio',
      href: '/tools/banner/',
      badge: '960 × 540 px • 16:9 Aspect Ratio'
    },
    sections: [
      {
        id: 'server-boost-requirements-for-banners',
        heading: '1. Discord Server Banner Boost Level Requirements',
        content: `Before looking at how to change server banner discord settings, remember that server banners require Discord Server Boosts. While <a href="/tools/server-icon/" class="text-[#3368A0] dark:text-[#66A3BF] font-semibold hover:underline">server icons</a> are free for every server, banners unlock through community boosts.

There are two levels of server banner perks:
1. **Static Server Banner (Boost Level 2)**:
   - Requires **7 Server Boosts** from members.
   - Allows uploading static PNG, JPEG, or WebP banners.
   - Dimensions: 960×540 minimum (16:9 ratio).
2. **Animated Server Banner (Boost Level 3)**:
   - Requires **14 Server Boosts**.
   - Unlocks animated GIF banners that play continuously at the top of your channel sidebar.
   - Supports files up to 10.0 MB.`,
        table: {
          headers: ['Guild Feature', 'Boost Level Required', 'Total Boosts Needed', 'Allowed Formats', 'Resolution'],
          rows: [
            ['Server Icon', 'Free (Level 0)', '0 Boosts', 'PNG, JPG, WebP, GIF', '512 × 512 px'],
            ['Server Invite Splash', 'Boost Level 1', '2 Boosts', 'PNG, JPG, WebP', '1920 × 1080 px'],
            ['Static Server Banner', 'Boost Level 2', '7 Boosts', 'PNG, JPG, WebP', '960 × 540 px (16:9)'],
            ['Animated Server Banner', 'Boost Level 3', '14 Boosts', 'Animated GIF, PNG, JPG', '960 × 540 px (16:9)']
          ]
        },
        callout: {
          type: 'warning',
          title: 'Grace Period Warning',
          text: 'If your server loses boosts and falls below the threshold, Discord gives you a 3-day grace period before removing the custom banner from view.'
        }
      },
      {
        id: 'step-by-step-how-to-change-server-banner',
        heading: '2. Step-by-Step: <mark class="bg-[#C8DFDB]/60 dark:bg-[#66A3BF]/20 text-[#192538] dark:text-white font-semibold px-1 rounded">How to Change Discord Server Banner</mark> Settings',
        content: `To upload or update your server banner on desktop (design it first in our <a href="/tools/banner/" class="text-[#3368A0] dark:text-[#66A3BF] font-semibold hover:underline">Discord banner maker</a>):

1. Open Discord and go to your server (make sure you have Administrator or "Manage Server" permissions).
2. Click your **Server Name** at the very top of the channel sidebar to open the menu.
3. Select **Server Settings** (the gear icon).
4. On the **Overview** page, scroll down past the Server Name and Icon until you find **Server Banner Background**.
5. Click **Upload Image** (or *Change Banner* if you already have one).
6. Pick your 16:9 image (960×540 or 1920×1080 px).
7. Use the preview slider to frame your image if needed, then click **Apply**.
8. Click **Save Changes** in the bottom green bar. Your new banner is now visible to everyone on your server!`
      },
      {
        id: 'how-to-add-server-banner-on-mobile',
        heading: '3. How to Add a Server Banner on Discord Mobile',
        content: `The steps to add a banner to your Discord server on the mobile app (iOS and Android) mirror the desktop flow, but the menus live in a different place:

1. Open the Discord app and tap into the server you manage.
2. Tap the **server name** at the top of the channel list to open the server menu.
3. Tap the **Settings** gear icon, then choose **Overview**.
4. Scroll to **Server Banner Background** and tap it.
5. Grant photo access if prompted, then pick your 960×540 (16:9) image from your camera roll.
6. Drag to reposition inside the preview frame, then tap **Save** in the top corner.

You still need **Manage Server** permission and at least **Boost Level 2** for the banner option to appear on mobile. If you only see the server icon field and no banner slot, your server has not reached 7 boosts yet.`,
        callout: {
          type: 'info',
          title: 'Mobile Upload Tip',
          text: 'Phones often shoot photos in wide-gamut Display P3. Export or resize to a standard sRGB 960×540 image first so the banner colors match what desktop members see.'
        }
      },
      {
        id: 'designing-safe-zones-for-server-headers',
        heading: '4. Keeping Important Artwork Below the Top 48px Header',
        content: `A common mistake is putting text or a logo right at the top of the canvas. For layout inspiration before you upload, browse our <a href="/blog/discord-banner-ideas-templates/" class="text-[#3368A0] dark:text-[#66A3BF] font-semibold hover:underline">Discord banner ideas and templates</a>.

When members view your server:
- The top **48 pixels** has a dark gradient overlay so the server name, notification bell, and dropdown arrow stay readable.
- If you place lettering in this top strip, the server name will sit right on top of your text.
- Keep your community mascot, slogans, and main illustrations in the lower two-thirds of the banner so everything stays clean and legible.`
      }
    ],
    faqs: [
      {
        question: 'How many server boosts do you need to change a Discord server banner?',
        answer: 'You need Boost Level 2 (7 boosts) for static banners, and Boost Level 3 (14 boosts) for animated GIF banners.'
      },
      {
        question: 'What are the official Discord server banner dimensions?',
        answer: 'Discord server banners require a 16:9 aspect ratio. The minimum size is 960x540 pixels, and 1920x1080 pixels gives the sharpest look on high-resolution monitors.'
      },
      {
        question: 'Why can I not change my server banner in Discord settings?',
        answer: 'You need either Administrator or "Manage Server" permissions, and your server must have at least Boost Level 2 (7 boosts).'
      },
      {
        question: 'Can you upload an animated GIF banner without Boost Level 3?',
        answer: 'No. At Boost Level 2, uploading a GIF will only show the first static frame. You need Boost Level 3 to play the full animation.'
      },
      {
        question: 'How do you add a banner to a Discord server?',
        answer: 'Open Server Settings > Overview, scroll to Server Banner Background, click Upload Image, pick a 960×540 (16:9) file, then click Save Changes. The banner slot only appears once your server reaches Boost Level 2 (7 boosts) and you have Manage Server permission.'
      },
      {
        question: 'How do you add a banner to your Discord server on mobile?',
        answer: 'In the Discord mobile app, tap the server name > Settings > Overview, tap Server Banner Background, choose a 960×540 image from your photos, reposition it in the preview, and tap Save. You still need Boost Level 2 and Manage Server permission for the option to show.'
      }
    ]
  },
  {
    slug: 'how-to-change-discord-username',
    title: 'How to Change Discord Username | 2026 Guide | Studio',
    heading: 'How to Change Discord Username',
    howToSteps: [
      { name: 'Open User Settings', text: 'Click the gear icon next to your name in the bottom-left of Discord on desktop, or tap your avatar then the gear on mobile.' },
      { name: 'Go to My Account', text: 'Select the "My Account" tab (or "Account" on mobile) to see your username and display name fields.' },
      { name: 'Edit your username', text: 'Click Edit next to Username, then type a new handle using only lowercase a–z, 0–9, underscores, and periods (2–32 characters).' },
      { name: 'Check availability', text: 'Discord shows a red warning if the handle is taken. Unique usernames are first-come, first-served, so try variations if yours is gone.' },
      { name: 'Confirm and save', text: 'Enter your password to confirm, then click Save. Your new @username updates everywhere instantly.' }
    ],
    metaDescription: 'How to change Discord username on desktop and mobile in 2026 — the new unique @handle rules, display name vs username, change limits, and errors fixed.',
    primaryKeyword: 'how to change discord username',
    secondaryKeywords: [
      'how to change your name on discord',
      'discord username vs display name',
      'change discord display name',
      'discord username change limit'
    ],
    longTailKeywords: [
      'how to change discord username on mobile',
      'how often can you change your discord username',
      'why cant i change my discord username',
      'change discord name on iphone'
    ],
    category: 'Tutorials',
    readTime: '5 min read',
    datePublished: '2026-03-05T08:00:00Z',
    dateModified: '2026-03-05T08:00:00Z',
    author: {
      name: 'Discord Asset Studio Engineering',
      role: 'Client Architecture Specialist'
    },
    summary: 'A clear walkthrough of how to change your Discord username on desktop and mobile under the new unique-handle system. Learn the difference between your @username and your display name, the character rules, how often you can change it, and how to fix the most common errors.',
    toolCta: {
      name: 'Discord Username Generator',
      headline: 'Stuck on a New Handle? Generate One',
      description: 'Get twelve valid username ideas across nine styles — with a 3 & 4-letter mode — all following Discord’s handle rules. Click to copy, star to save.',
      buttonText: 'Open Username Generator',
      href: '/tools/username-generator/',
      badge: '2–32 chars • a-z 0-9 _ .'
    },
    sections: [
      {
        id: 'username-vs-display-name',
        heading: '1. Username vs Display Name: What You Are Actually Changing',
        content: `Before learning <mark class="bg-[#C8DFDB]/60 dark:bg-[#66A3BF]/20 text-[#192538] dark:text-white font-semibold px-1 rounded">how to change your Discord username</mark>, it helps to know that Discord now has two separate names, and most people actually want to change the second one.

- **Username (@handle)**: Your unique, lowercase identity — like <code>@aurora.dev</code>. No two accounts can share one. This replaced the old <code>Name#1234</code> discriminator system.
- **Display Name**: The friendly name shown in bold above your messages. It allows capital letters, spaces, and emoji, and it does <strong>not</strong> have to be unique.

If you just want a prettier name in chat, change your <strong>display name</strong> — it is far less restrictive and has no availability conflicts. If you want a new <em>@handle</em> people use to find and mention you, change your <strong>username</strong>. Need a fresh handle idea? Our <a href="/tools/username-generator/" class="text-[#3368A0] dark:text-[#66A3BF] font-semibold hover:underline">Discord username generator</a> only produces handles that follow the rules below.`,
        table: {
          headers: ['Attribute', 'Username (@handle)', 'Display Name'],
          rows: [
            ['Must be unique', 'Yes', 'No'],
            ['Allowed characters', 'a–z, 0–9, _ and .', 'Almost anything + emoji'],
            ['Capital letters', 'Not allowed', 'Allowed'],
            ['Length', '2–32 characters', 'Up to 32 characters'],
            ['Used for @mentions', 'Yes', 'No']
          ]
        },
        callout: {
          type: 'info',
          title: 'Most People Want the Display Name',
          text: 'If your goal is a stylish name with capitals or emoji shown in chat, change your Display Name — not your username. The username is the unique @handle used to add and mention you.'
        }
      },
      {
        id: 'change-username-desktop',
        heading: '2. How to Change Your Discord Username on Desktop',
        content: `On the desktop app or discord.com in a browser, changing your <mark class="bg-[#C8DFDB]/60 dark:bg-[#66A3BF]/20 text-[#192538] dark:text-white font-semibold px-1 rounded">Discord username</mark> takes about thirty seconds:

1. Click the <strong>gear icon</strong> (User Settings) next to your name in the bottom-left corner.
2. Open the <strong>My Account</strong> tab.
3. Click <strong>Edit</strong> next to your username (or the pencil icon on your profile card).
4. Type your new handle. Only lowercase <code>a–z</code>, digits <code>0–9</code>, underscores <code>_</code>, and periods <code>.</code> are valid — 2 to 32 characters.
5. If the handle is taken, Discord shows it in red. Try a variation or add a number.
6. Enter your <strong>password</strong> to confirm and click <strong>Save</strong>.

To change only the name shown in chat, edit the <strong>Display Name</strong> field on the same screen instead — no password required. Want a matching aesthetic across your profile? Pair a new handle with a <a href="/tools/fonts/" class="text-[#3368A0] dark:text-[#66A3BF] font-semibold hover:underline">fancy font display name</a>.`,
        callout: {
          type: 'tip',
          title: 'Handle Rules at a Glance',
          text: 'Valid usernames use only lowercase letters, numbers, one or more underscores, and periods. No spaces, no capitals, no emoji — save those for your display name.'
        }
      },
      {
        id: 'change-username-mobile',
        heading: '3. How to Change Your Discord Username on Mobile (iPhone & Android)',
        content: `The steps for <mark class="bg-[#C8DFDB]/60 dark:bg-[#66A3BF]/20 text-[#192538] dark:text-white font-semibold px-1 rounded">how to change Discord username on mobile</mark> are nearly identical on iOS and Android:

1. Tap your <strong>profile avatar</strong> in the bottom-right of the app.
2. Tap the <strong>gear / Settings</strong> icon, then choose <strong>Account</strong>.
3. Tap <strong>Username</strong>, type your new handle, and follow the same lowercase <code>a–z 0–9 _ .</code> rules.
4. Tap <strong>Save</strong> and confirm with your password.

On iPhone specifically, if the Save button looks greyed out, make sure the handle contains no capital letters or spaces — that is the most common reason a valid-looking name is rejected on iOS.`,
        callout: {
          type: 'success',
          title: 'Display Name Changes Are Instant',
          text: 'Editing your display name on mobile takes effect immediately and does not count against any username limit, so experiment freely.'
        }
      },
      {
        id: 'username-change-limits-errors',
        heading: '4. Change Limits & Why You Can’t Change Your Username',
        content: `Discord rate-limits <mark class="bg-[#C8DFDB]/60 dark:bg-[#66A3BF]/20 text-[#192538] dark:text-white font-semibold px-1 rounded">how often you can change your Discord username</mark> to stop abuse. If a change is blocked, one of these is usually why:

- **Rate limit hit**: Discord restricts frequent username edits (historically about two per hour). Wait an hour and try again. Display-name edits are not limited the same way.
- **Handle already taken**: Unique usernames are first-come, first-served. If your ideal <em>@handle</em> is gone, add a period, underscore, or number — or generate fresh options.
- **Invalid characters**: Capitals, spaces, and emoji are rejected in the username field. Move those to your display name.
- **Too short or too long**: Handles must be 2–32 characters.

If you keep colliding with taken handles, skip the guesswork — the <a href="/tools/username-generator/" class="text-[#3368A0] dark:text-[#66A3BF] font-semibold hover:underline">username generator</a> spins up a dozen rule-valid ideas at a time, and you can lock in a short 3- or 4-letter handle before someone else grabs it.`,
        callout: {
          type: 'warning',
          title: 'The Old #1234 Tag Is Gone',
          text: 'Discord retired the four-digit discriminator. Everyone now has a single unique @username, which is why popular short handles are claimed so quickly.'
        }
      }
    ],
    faqs: [
      {
        question: 'How do I change my Discord username?',
        answer: 'Open User Settings (the gear icon), go to My Account, click Edit next to Username, type a new handle using only lowercase a–z, 0–9, underscores, and periods (2–32 characters), then confirm with your password and save. On mobile, tap your avatar, then Settings, then Account, then Username.'
      },
      {
        question: 'What is the difference between a Discord username and display name?',
        answer: 'Your username is your unique @handle used to add and mention you — it must be lowercase and unique across all of Discord. Your display name is the bold name shown above your messages; it allows capitals, spaces, and emoji and does not have to be unique.'
      },
      {
        question: 'How often can you change your Discord username?',
        answer: 'Discord rate-limits username changes to prevent abuse (historically around two changes per hour). If you hit the limit, wait about an hour and try again. Display-name changes are effectively unlimited.'
      },
      {
        question: 'Why can’t I change my Discord username?',
        answer: 'The usual reasons are that the handle is already taken (usernames are unique and first-come, first-served), it contains invalid characters like capitals, spaces, or emoji, it is shorter than 2 or longer than 32 characters, or you have hit the hourly change limit.'
      },
      {
        question: 'Do I need Nitro to change my Discord username?',
        answer: 'No. Changing your username or display name is free for every account. Discord Nitro is not required to update either name.'
      }
    ]
  },
  {
    slug: 'discord-text-formatting-guide',
    title: 'Discord Text Formatting Guide | Bold, Spoiler & More',
    heading: 'Discord Text Formatting Guide: Bold, Spoiler & Big Text',
    metaDescription: 'This Discord text formatting guide covers every markdown trick — bold, italic, strikethrough, spoilers, big header text, and small subtext.',
    primaryKeyword: 'discord text formatting guide',
    secondaryKeywords: [
      'discord bold text',
      'discord strikethrough',
      'discord spoiler text',
      'discord subtext'
    ],
    longTailKeywords: [
      'how to bold text in discord',
      'how to cross out text in discord',
      'how to make text small in discord',
      'how to spoiler text on discord',
      'how to make text big in discord',
      'how to make discord text bigger',
      'how to make discord text smaller',
      'how to censor text on discord',
      'how to hide text in discord'
    ],
    category: 'Specifications & Guides',
    readTime: '8 min read',
    datePublished: '2026-09-24T08:00:00Z',
    dateModified: '2026-09-24T08:00:00Z',
    author: {
      name: 'Discord Asset Studio Engineering',
      role: 'Client Architecture Specialist'
    },
    summary: 'Discord uses a lightweight Markdown syntax in chat. This guide shows every text formatting trick — how to bold, italicize, underline, cross out, spoiler, and censor text, plus the only ways to make Discord text bigger (headers) or smaller (subtext) — with copy-paste examples for desktop, web, and mobile.',
    toolCta: {
      name: 'Discord Text Formatting Generator',
      headline: 'Skip the Syntax — Generate Every Style',
      description: 'Type your message once and copy the bold, italic, strikethrough, spoiler, header, and subtext versions as ready-to-paste cards.',
      buttonText: 'Open Text Formatting Generator',
      href: '/tools/text-formatting/',
      badge: 'Native Markdown • No Nitro'
    },
    sections: [
      {
        id: 'what-is-discord-text-formatting',
        heading: '1. What Discord Text Formatting Is (and Where It Works)',
        content: `<mark class="bg-[#C8DFDB]/60 dark:bg-[#66A3BF]/20 text-[#192538] dark:text-white font-semibold px-1 rounded">Discord text formatting</mark> runs on a lightweight version of Markdown — the same shorthand used on GitHub and Reddit. You type a few symbols around your words and Discord renders the style the moment the message posts.

The single most important rule: formatting only renders inside **messages** (and message-adjacent fields like embeds). It does **not** work in your username, nickname, or About Me bio — those stay plain text. For a styled name you need Unicode glyphs from a <a class="text-[#3368A0] dark:text-[#66A3BF] font-semibold hover:underline" href="/tools/fonts/">Discord font generator</a>, not Markdown.

Everything below works with no Nitro on Discord desktop, the web app, and mobile. When you want the styled output without memorizing symbols, our <a class="text-[#3368A0] dark:text-[#66A3BF] font-semibold hover:underline" href="/tools/text-formatting/">Discord text formatting generator</a> prints every style as a copy-paste card.`,
        table: {
          headers: ['Location', 'Markdown works?', 'Use instead'],
          rows: [
            ['Chat messages', 'Yes — full Markdown', '—'],
            ['Embeds & webhooks', 'Yes', '—'],
            ['Username (@handle)', 'No', 'Lowercase text only'],
            ['Display name / nickname', 'No', 'Unicode font glyphs'],
            ['About Me bio', 'No', 'Unicode font glyphs']
          ]
        },
        callout: {
          type: 'info',
          title: 'Formatting vs Fonts',
          text: 'Markdown styles (bold, spoiler, headers) only render inside messages. To style a username or bio you need Unicode "font" glyphs — special characters, not Markdown.'
        }
      },
      {
        id: 'bold-italic-underline',
        heading: '2. How to Bold, Italicize & Underline Text',
        content: `Bold is the most-requested style. To **bold text in Discord**, wrap the words in two asterisks on each side. Italics use one asterisk (or one underscore), and underline uses two underscores — a Discord extension that plain Markdown does not have.

You can stack them: two asterisks plus two underscores gives underlined bold, and three asterisks gives bold italic. The wrappers just nest.

- **Bold:** two asterisks around the words.
- **Italic:** one asterisk (or one underscore) around the words.
- **Underline:** two underscores around the words.
- **Bold italic:** three asterisks around the words.`,
        table: {
          headers: ['Style', 'What you type', 'What posts'],
          rows: [
            ['Bold', '**hello**', 'hello (bold)'],
            ['Italic', '*hello* or _hello_', 'hello (italic)'],
            ['Underline', '__hello__', 'hello (underlined)'],
            ['Bold italic', '***hello***', 'hello (bold + italic)'],
            ['Underlined bold', '__**hello**__', 'hello (underlined bold)']
          ]
        },
        callout: {
          type: 'tip',
          title: 'Asterisk vs Underscore',
          text: 'A single asterisk and a single underscore both italicize. But two underscores underline while two asterisks bold — so once you double them, _ and * are no longer interchangeable.'
        }
      },
      {
        id: 'strikethrough-cross-out',
        heading: '3. How to Cross Out Text (Strikethrough)',
        content: `To **cross out text in Discord**, wrap it in two tildes on each side. The tilde key (~) usually sits at the top-left of the keyboard, on the same key as the backtick.

Strikethrough is ideal for corrections, crossed-off checklist items, or a fake-dramatic edit — for example, striking out one word and following it with the real one.

- Type two tildes, your text, then two more tildes.`,
        table: {
          headers: ['Goal', 'What you type', 'Result'],
          rows: [
            ['Cross out a word', '~~wrong~~', 'wrong (struck through)'],
            ['Correction joke', '~~hate~~ love', 'hate love']
          ]
        },
        callout: {
          type: 'info',
          title: 'Both Sides Need Two Tildes',
          text: 'Strikethrough is a single style — there is no partial or half strike. The opening and closing must each be exactly two tildes, or the text posts unformatted.'
        }
      },
      {
        id: 'spoiler-hide-censor',
        heading: '4. How to Spoiler, Hide & Censor Text',
        content: `Spoiler tags black out text until a reader clicks it — this is how you **hide text in Discord** or **censor text on Discord** for plot twists, quiz answers, or sensitive words. Wrap the text in two vertical bars (pipes) on each side.

On desktop and web you can also select the text and click the eye / spoiler icon in the small formatting popup that appears above the selection. Readers then see a grey block that reveals on click.

- Type two pipes, your secret, then two more pipes.
- The pipe key is Shift + backslash on most keyboards.
- To hide an image instead of text, rename the file with a SPOILER_ prefix — see our <a class="text-[#3368A0] dark:text-[#66A3BF] font-semibold hover:underline" href="/blog/how-to-put-spoiler-on-discord-image/">spoiler image guide</a>.`,
        table: {
          headers: ['Goal', 'What you type', 'Result'],
          rows: [
            ['Hide a plot twist', '||he is the villain||', 'grey block (click to reveal)'],
            ['Censor a word', 'that is ||classified||', 'that is + grey block']
          ]
        },
        callout: {
          type: 'tip',
          title: 'Hide vs Censor',
          text: 'Spoilers do not delete or encrypt text — anyone can click to reveal it. Use them to prevent accidental reading, not to keep secrets from determined readers.'
        }
      },
      {
        id: 'big-text-headers',
        heading: '5. How to Make Text Bigger (Headers)',
        content: `There is exactly one way to **make text bigger in Discord**: headers. Start a line with one, two, or three hash symbols followed by a space. One hash is the biggest; three is the smallest header size but still larger than normal chat text.

Headers must sit at the **start of a line** — you cannot enlarge a single word in the middle of a sentence. They are perfect for message titles, section breaks in long posts, and announcements.

- **Biggest:** one hash, a space, then your title.
- **Medium:** two hashes, a space, then your text.
- **Small header:** three hashes, a space, then your text (still bigger than the body).`,
        table: {
          headers: ['Size', 'What you type', 'Rendered size'],
          rows: [
            ['Header 1 (biggest)', '# Big title', 'Largest'],
            ['Header 2', '## Medium title', 'Large'],
            ['Header 3', '### Small header', 'Slightly enlarged']
          ]
        },
        callout: {
          type: 'warning',
          title: 'Headers Need a Trailing Space',
          text: 'A hash with no space after it (like #news) is treated as plain text. You must type the hash, then a space, then your words for the header to render larger.'
        }
      },
      {
        id: 'small-text-subtext',
        heading: '6. How to Make Text Smaller (Subtext)',
        content: `The counterpart to headers is subtext, and it is the only way to **make text smaller in Discord**. Start a line with a hyphen, a hash, and a space (the -# prefix). Subtext renders in muted grey at a smaller size than normal chat text — ideal for footnotes, captions, disclaimers, and credits.

Like headers, subtext must begin a line and applies to the whole line, not a single word.

- Type a hyphen, then a hash, then a space, then your small text.`,
        table: {
          headers: ['Goal', 'What you type', 'Result'],
          rows: [
            ['Footnote / caption', '-# posted from mobile', 'small grey text'],
            ['Disclaimer line', '-# not affiliated with Discord', 'small grey text']
          ]
        },
        callout: {
          type: 'info',
          title: 'Subtext Is the Only "Small" Option',
          text: 'Discord has no font-size slider in chat. Subtext (the -# prefix) is the single built-in way to shrink text; every other style — bold, italic, spoiler — keeps the normal body size.'
        }
      },
      {
        id: 'code-quotes-lists-links',
        heading: '7. Code, Quotes, Lists & Masked Links',
        content: `Beyond styling words, Discord Markdown structures whole blocks of a message:

- **Inline code:** wrap a snippet in single backticks for a monospace highlight.
- **Code block:** wrap several lines in triple backticks; add a language name after the opening backticks for colour syntax highlighting.
- **Block quote:** start a line with a greater-than sign and a space to quote one line; three of them quote everything that follows.
- **Bullet list:** start each line with a hyphen or asterisk and a space.
- **Numbered list:** start each line with a number, a dot, and a space.
- **Masked link:** [visible text](https://example.com) hides a long URL behind clickable text — but it only works inside embeds and some bot messages, not normal chat.

For a live side-by-side editor of all of these, use our <a class="text-[#3368A0] dark:text-[#66A3BF] font-semibold hover:underline" href="/tools/markdown/">Discord markdown previewer</a>; for one-tap copyable style cards, use the <a class="text-[#3368A0] dark:text-[#66A3BF] font-semibold hover:underline" href="/tools/text-formatting/">text formatting generator</a>.`,
        table: {
          headers: ['Structure', 'What you type', 'Notes'],
          rows: [
            ['Inline code', '`code`', 'Monospace, does not wrap'],
            ['Code block', '```js ... ```', 'Optional language for colours'],
            ['Quote', '> quoted line', '>>> quotes everything after it'],
            ['Masked link', '[text](https://...)', 'Embeds / bots only, not chat']
          ]
        },
        callout: {
          type: 'tip',
          title: 'Escape a Symbol',
          text: 'To show a literal asterisk or underscore instead of triggering a style, put a backslash before it (\\*not italic\\*). The backslash tells Discord to print the symbol as-is.'
        }
      }
    ],
    faqs: [
      {
        question: 'How do you bold text in Discord?',
        answer: 'Wrap the words in two asterisks on each side — for example, **hello** posts as bold. Two asterisks bold the text, while a single asterisk italicizes it instead.'
      },
      {
        question: 'How do you cross out text in Discord?',
        answer: 'Wrap the text in two tildes on each side, like ~~this~~. It renders as strikethrough on Discord desktop, the web app, and mobile.'
      },
      {
        question: 'How do you make text smaller in Discord?',
        answer: 'Start the line with a hyphen, a hash, and a space (the -# prefix), then your text. This subtext style is the only built-in way to make Discord text smaller — it shows as muted grey text below the normal size.'
      },
      {
        question: 'How do you make text bigger in Discord?',
        answer: 'Start a line with one to three hash symbols followed by a space. One hash is the biggest header, two hashes are medium, and three are the smallest header — headers are the only way to enlarge text in chat.'
      },
      {
        question: 'How do you spoiler or hide text in Discord?',
        answer: 'Wrap the text in two vertical bars (pipes) on each side, like ||secret||. Discord blacks it out until a reader clicks to reveal it. You can also select text and use the spoiler icon in the formatting popup.'
      },
      {
        question: 'How do you censor text on Discord?',
        answer: 'Use a spoiler tag: wrap the word in double pipes, like ||classified||. It hides the word behind a grey block that only shows when clicked. Spoilers are not encryption, so anyone can reveal them.'
      },
      {
        question: 'Does Discord text formatting work in usernames or your bio?',
        answer: 'No. Markdown formatting only renders inside messages and embeds. Usernames, display names, and About Me bios are plain text — to style those you need Unicode font glyphs from a font generator, not Markdown.'
      },
      {
        question: 'Why is my Discord text formatting not showing?',
        answer: 'The usual causes are a missing space after a header hash, using single instead of double symbols, or an unclosed wrapper. Also confirm you are typing in a message — formatting is ignored in usernames and bios.'
      }
    ]
  },
  {
    slug: 'what-font-does-discord-use',
    title: 'What Font Does Discord Use? gg sans, Explained',
    heading: 'What Font Does Discord Use? Meet gg sans',
    metaDescription: "What font does Discord use? Since late 2022, the app's UI and chat run on gg sans, a custom typeface that replaced Whitney. Full story inside.",
    primaryKeyword: 'what font does discord use',
    secondaryKeywords: ['gg sans', 'discord font name', 'discord typeface', 'whitney discord font', 'discord app font'],
    longTailKeywords: ['what font does discord use for usernames', 'what happened to the old discord font', 'can you change the font in discord', 'is gg sans free to download'],
    category: 'Design & Inspiration',
    readTime: '7 min read',
    datePublished: '2026-09-24T09:00:00Z',
    dateModified: '2026-09-24T09:00:00Z',
    author: { name: 'Discord Asset Studio Engineering', role: 'Client Architecture Specialist' },
    summary: "Discord's interface and chat run on gg sans, a custom font it rolled out from December 2022 to replace Whitney — while the logo keeps the Ginto wordmark. Here is what each font is, why the switch happened, and how to style your own name when the app itself gives you no font switcher.",
    toolCta: {
      name: 'Font Generator',
      headline: 'Style Your Name with the Font Generator',
      description: "You can't swap gg sans, but you can paste bold, italic, and script Unicode into a name or bio. Generate every style in one click.",
      buttonText: 'Open Font Generator',
      href: '/tools/fonts/',
      badge: 'Fancy Fonts • No Nitro'
    },
    sections: [
      {
        id: 'what-font-does-discord-use',
        heading: '1. What Font Does Discord Use Today?',
        content: `So **what font does Discord use**? Across the desktop app, the web client, and mobile, Discord's interface and every chat message are set in **gg sans** — a custom sans-serif typeface Discord commissioned and began rolling out on December 1, 2022. It is the font you read in menus, channel lists, message text, and settings.

gg sans is not a font you already have installed. Discord designed it specifically for on-screen legibility at small sizes and for better accessibility than the font it replaced. Because it is proprietary, it renders inside Discord's own apps and is not distributed for general use on your system.

The one place gg sans does not appear is the logo. Discord's wordmark and marketing headlines use a separate branding typeface called **Ginto** — so the letters in the logo are intentionally chunkier than the text inside the app.`,
        table: {
          headers: ['Where you see it', 'Typeface'],
          rows: [
            ['App menus & UI', 'gg sans (custom)'],
            ['Chat messages', 'gg sans (custom)'],
            ['Logo & wordmark', 'Ginto (branding)'],
            ['Code blocks', 'System monospace']
          ]
        },
        callout: {
          type: 'info',
          title: 'gg sans Since December 2022',
          text: 'Discord started replacing its old font with gg sans on December 1, 2022. If you still saw the previous typeface for a while after that, it was because the change rolled out gradually across clients.'
        }
      },
      {
        id: 'gg-sans-explained',
        heading: '2. gg sans: The Custom Discord Font',
        content: `gg sans is what most people mean when they ask which font Discord uses, because it is the one you actually read all day. Discord introduced it as part of a 2022 brand refresh, describing goals of sharper legibility, a friendlier feel, and stronger accessibility — especially for smaller UI text and long message threads.

Being a bespoke typeface gives Discord full control: no per-platform licensing limits, consistent rendering across desktop, web, and mobile, and freedom to tune weights and spacing for its own layout. The trade-off for users is that you cannot legitimately download or install gg sans to use elsewhere; it lives inside Discord's apps.

If a designer wants a close free stand-in for mockups, humanist sans-serifs like Inter or Open Sans read as visually comparable, though they are not the same font.`,
        callout: {
          type: 'tip',
          title: 'Want the Look, Not the Font?',
          text: 'You cannot install gg sans, but you can copy its clean, modern vibe in graphics by pairing a humanist sans-serif with generous line spacing.'
        }
      },
      {
        id: 'whitney-old-discord-font',
        heading: '3. Whitney: The Old Discord Font',
        content: `Before gg sans, Discord used **Whitney**, a humanist sans-serif licensed from the type foundry Hoefler & Co. For years Whitney gave Discord its soft, rounded, approachable look, and long-time users still associate it with the app's early identity.

The move away from Whitney was not cosmetic alone. Licensing a third-party font means ongoing terms and constraints, and Whitney was never tuned specifically for Discord's dense, dark-mode interface. Commissioning gg sans let Discord own its typeface outright, optimize it for its exact UI, and improve accessibility — the reasons a switch made sense despite Whitney's popularity.`,
        table: {
          headers: ['Era', 'Font', 'Notes'],
          rows: [
            ['Before Dec 2022', 'Whitney', 'Licensed from Hoefler & Co.'],
            ['Dec 2022 onward', 'gg sans', 'Custom, owned by Discord']
          ]
        },
        callout: {
          type: 'info',
          title: 'Miss the Old Look?',
          text: 'Whitney is a commercial font you would have to license separately from its foundry. Discord will not bring it back as a toggle — gg sans is now the single UI typeface.'
        }
      },
      {
        id: 'ginto-logo-font',
        heading: '4. Ginto: The Font in the Discord Logo',
        content: `The bold letters in the Discord wordmark are not gg sans — they are **Ginto**, a geometric grotesque family Discord uses for branding and large marketing headlines. That is why the logo looks heavier and more distinctive than the text inside the app.

Keeping a separate display font for the logo is normal brand practice: a punchy typeface for the mark and a highly legible one (gg sans) for the interface you actually read. So if you are matching the logo specifically rather than the app text, Ginto — not gg sans — is the family to look at.`,
        callout: {
          type: 'tip',
          title: 'Logo vs. App Text',
          text: 'Ginto styles the wordmark and headlines; gg sans styles everything you read inside the app. Two different fonts, two different jobs.'
        }
      },
      {
        id: 'can-you-change-discord-font',
        heading: '5. Can You Change the Font in Discord?',
        content: `The honest answer: **no, Discord has no built-in font switcher.** There is no setting to swap gg sans for another typeface, and because gg sans is proprietary you cannot install it elsewhere either. Third-party client mods that restyle Discord exist, but they violate Discord's Terms of Service and can put your account at risk, so they are not recommended.

What you *can* change is the styling of the text you type and the text in your own name or bio — using two different, fully allowed tricks:

- **Inside messages:** Discord Markdown handles bold, italic, underline, strikethrough, and more. Our <a class="text-[#3368A0] dark:text-[#66A3BF] font-semibold hover:underline" href="/blog/discord-text-formatting-guide/">text formatting guide</a> covers every code.
- **In names and bios:** paste look-alike Unicode letters (the "fancy font" trick) from a <a class="text-[#3368A0] dark:text-[#66A3BF] font-semibold hover:underline" href="/tools/fonts/">Discord font generator</a>.`,
        callout: {
          type: 'warning',
          title: 'Avoid Client Mods',
          text: 'Tools that patch the Discord client to change its font break the Terms of Service and can get your account actioned. The Unicode and Markdown methods here are safe and need no download.'
        }
      },
      {
        id: 'unicode-font-trick',
        heading: '6. How to Get a "Fancy Font" in Your Name',
        content: `Since you cannot change gg sans, the way people get stylish nicknames is a Unicode trick, not a real font. The Unicode standard already contains styled look-alike letters — bold (𝐛), italic (𝑖), script (𝓼), fraktur, monospace, and more. A font generator maps your ordinary letters to these characters, and because the result is plain text, you can paste it anywhere that accepts text.

Type your text once in our <a class="text-[#3368A0] dark:text-[#66A3BF] font-semibold hover:underline" href="/tools/fonts/">font generator</a>, tap Copy on a style, and paste it into a display name, server nickname, or your About Me. Two caveats: it does **not** work in the lowercase @username handle, and heavily decorative styles can render as boxes on older devices and are read aloud as symbol names by screen readers.`,
        table: {
          headers: ['Location', 'Fancy Unicode font works?'],
          rows: [
            ['Display name / nickname', 'Yes'],
            ['About Me bio', 'Yes'],
            ['Channel & role names', 'Yes'],
            ['Chat messages', 'Yes'],
            ['@username handle', 'No — a-z, 0-9, _ and . only']
          ]
        },
        callout: {
          type: 'tip',
          title: 'Use Styles Sparingly',
          text: 'Bold and italic stay readable on every device; fraktur, script, and upside-down styles are best as a one-word accent, not a whole name.'
        }
      }
    ],
    faqs: [
      {
        question: 'What font does Discord use?',
        answer: 'Discord uses gg sans, a custom sans-serif typeface it began rolling out on December 1, 2022, for its app UI and chat. The Discord logo wordmark uses a separate branding font called Ginto.'
      },
      {
        question: 'What was the old Discord font?',
        answer: 'Before gg sans, Discord used Whitney, a humanist sans-serif licensed from the foundry Hoefler & Co. Discord replaced it with its own gg sans in late 2022.'
      },
      {
        question: 'Can I download or install gg sans?',
        answer: 'No. gg sans is proprietary to Discord and is not distributed for general use. For a free look-alike in your own designs, humanist sans-serifs like Inter or Open Sans are close visual stand-ins.'
      },
      {
        question: 'Can you change the font in Discord?',
        answer: 'Discord has no built-in font switcher, so you cannot change gg sans in the app itself. You can only style text you type (via Markdown) or use Unicode "fancy font" glyphs in your name and bio.'
      },
      {
        question: 'What font is the Discord logo?',
        answer: 'The Discord wordmark and marketing headlines use Ginto, a geometric grotesque family — not gg sans, which is reserved for the interface and chat text.'
      },
      {
        question: 'Why did Discord change its font?',
        answer: 'Discord commissioned gg sans for better on-screen legibility and accessibility across sizes, and to own its typeface outright instead of licensing a third-party font built for other uses.'
      },
      {
        question: 'How do I get a different font in my Discord username?',
        answer: 'Use a Unicode font generator: type your text, copy a bold, italic, or script style, and paste it into your display name or nickname. Note the lowercase @username handle only allows a-z, 0-9, underscore, and period, so styled glyphs show only in display names, nicknames, and bios.'
      },
      {
        question: 'Does gg sans look the same on mobile and desktop?',
        answer: 'Yes. Because gg sans is bundled inside Discord\'s own apps, it renders consistently across the desktop app, the web client, and mobile — you do not need the font installed on your own device.'
      }
    ]
  },
  {
    slug: 'discord-video-size-limit',
    title: 'Discord Video Size Limit: Upload, Call & Stream Guide',
    heading: 'Discord Video Size Limit: How to Upload, Call, and Stream',
    metaDescription: 'Discord video size limit explained: 10 MB free, 50 MB Nitro Basic, 500 MB Nitro. How to shrink big clips, plus video calls and Prime Video streaming.',
    primaryKeyword: 'discord video size limit',
    secondaryKeywords: ['discord video upload limit', 'discord video limit', 'discord file size limit', 'discord upload limit', 'max video size discord'],
    longTailKeywords: ['can you video call on discord', 'can you stream prime video on discord', 'how to send large videos on discord', 'discord video size limit without nitro', 'why is my discord stream a black screen'],
    category: 'Specifications & Guides',
    readTime: '8 min read',
    datePublished: '2026-09-24T10:00:00Z',
    dateModified: '2026-09-24T10:00:00Z',
    author: { name: 'Discord Asset Studio Engineering', role: 'Client Architecture Specialist' },
    summary: "Discord limits video uploads to 10 MB on a free account, 50 MB with Nitro Basic, and 500 MB with full Nitro — and a boosted server can lift the whole channel to 50 MB or 100 MB. Here is every cap in one place, how to send a clip that's too big, and clear answers on video calls and streaming Prime Video.",
    toolCta: {
      name: 'Video Compressor',
      headline: 'Squeeze Any Clip Under the Limit',
      description: 'Drop in an MP4 and our in-browser compressor shrinks it under 10 MB — resolution, quality, and audio controls, and nothing is ever uploaded.',
      buttonText: 'Open Video Compressor',
      href: '/tools/video-compressor/',
      badge: 'H.264 • Client-Side'
    },
    howToSteps: [
      { name: 'Check the limit that applies to you', text: 'Confirm whether you are on free (10 MB), Nitro Basic (50 MB), or full Nitro (500 MB), and whether the server is boosted to Level 2 (50 MB) or Level 3 (100 MB). Your real ceiling is the higher of your Nitro tier and the server boost level.' },
      { name: 'Open the Video Compressor', text: 'Go to the in-browser Discord Video Compressor and drop your MP4, WebM, or MOV file onto the dropzone. Nothing is uploaded — the file is processed locally in your browser.' },
      { name: 'Set a target size and quality', text: 'Pick the target (10, 50, or 500 MB), drop the resolution to 720p or 480p if needed, and nudge the CRF slider higher for a smaller file. Strip the audio track if the clip does not need sound.' },
      { name: 'Compress and upload', text: 'Run the compression, download the smaller MP4, and drag it into Discord. If it still exceeds the cap, lower the resolution one more step or raise CRF and re-run.' }
    ],
    sections: [
      {
        id: 'discord-video-size-limit',
        heading: '1. What Is the Discord Video Size Limit?',
        content: `The **Discord video size limit** is the same as its file upload limit, because Discord caps every attachment by byte size regardless of type. On a free account you can upload files up to **10 MB**. Discord Nitro Basic raises that to **50 MB**, and full Discord Nitro raises it to **500 MB**. There is no separate, larger allowance for video — a 10 MB clip and a 10 MB PDF hit the exact same wall.

That 10 MB ceiling is genuinely tight for video. A one-minute 1080p screen recording at 30 fps routinely lands between 150 MB and 500 MB straight out of the recorder, so even a 20-second clip usually needs compressing before a free account will accept it.

The limit is per file, not per message, and it applies everywhere you attach media: DMs, group DMs, and server channels.`,
        table: {
          headers: ['Account / Tier', 'Max upload per file'],
          rows: [
            ['Free (no Nitro)', '10 MB'],
            ['Nitro Basic', '50 MB'],
            ['Nitro', '500 MB']
          ]
        },
        callout: {
          type: 'info',
          title: 'One Limit for Every File Type',
          text: 'Discord measures the raw byte size of the attachment. Video, images, audio, PDFs, and zips all share the same per-file cap for your tier — there is no video-only exception.'
        }
      },
      {
        id: 'why-discord-limits-video',
        heading: '2. Why the Cap Exists (and What Counts Against It)',
        content: `Discord stores and serves every attachment from its own CDN, so a hard per-file cap keeps storage and bandwidth costs predictable and stops a single upload from degrading a channel for everyone. Paid tiers exist partly to offset that cost, which is why the ceiling climbs with Nitro.

What counts against the limit is the **encoded file size on disk**, not the resolution or the length on their own. A short 4K clip can be larger than a long 480p one. That matters because it means you have three independent levers to get under the cap: resolution, quality (bitrate), and duration.

Discord also transcodes and may show a compressed preview after upload, but that happens *after* it accepts the file — it never lets you exceed the cap on the way in.`,
        callout: {
          type: 'tip',
          title: 'Three Levers, Not One',
          text: 'To shrink a video you can lower the resolution (1080p to 720p), lower the quality/bitrate (a higher CRF value), or trim the length. Combining two usually beats hammering one.'
        }
      },
      {
        id: 'server-boost-vs-nitro',
        heading: '3. Server Boost vs. Nitro: Which Limit Wins?',
        content: `There are two separate ways the upload ceiling can go up, and they work in your favour — Discord uses **whichever is higher**.

- **Your Nitro tier** travels with you: Nitro Basic (50 MB) or Nitro (500 MB) applies in every server and DM you are in.
- **Server Boost level** applies to one specific server for everyone in it: **Level 2 raises the whole server to 50 MB**, and **Level 3 raises it to 100 MB** — with no Nitro required to benefit.

So a free user in a Level 3 server can upload up to 100 MB there, while a Nitro subscriber still gets their 500 MB anywhere. If you only ever get blocked in one community, pushing that server to Level 2 or 3 can be cheaper than everyone buying Nitro.`,
        table: {
          headers: ['How you raise it', 'New limit', 'Scope'],
          rows: [
            ['Nitro Basic', '50 MB', 'You, everywhere'],
            ['Nitro', '500 MB', 'You, everywhere'],
            ['Server Boost Level 2', '50 MB', 'Everyone in that server'],
            ['Server Boost Level 3', '100 MB', 'Everyone in that server']
          ]
        },
        callout: {
          type: 'info',
          title: 'The Higher Number Applies',
          text: 'If you have Nitro (500 MB) in a Level 2 server (50 MB), you still get 500 MB. Discord takes the larger of your personal tier and the server boost level.'
        }
      },
      {
        id: 'how-to-send-large-video',
        heading: "4. How to Send a Video That's Too Big",
        content: `When a clip is over your cap, you have three realistic options: compress it, host it elsewhere and paste a link, or raise the limit (Nitro or a boosted server). Compression is the one that keeps the video *inside* Discord, and it is usually enough.

1. **Compress it in your browser.** Our <a class="text-[#3368A0] dark:text-[#66A3BF] font-semibold hover:underline" href="/tools/video-compressor/">Discord video compressor</a> re-encodes MP4, WebM, and MOV files locally with resolution, CRF quality, and audio-strip controls — nothing is uploaded to a server.
2. **Drop the resolution first.** Going from 1080p to 720p roughly halves the file at the same quality setting; 480p halves it again. This is the single biggest lever for gameplay and screen recordings.
3. **Then raise CRF for fine control.** A higher CRF (around 28 to 30) trades a little visual quality for a much smaller file. Strip the audio track entirely if the clip does not need sound.
4. **Or paste a link instead.** Upload to a host like YouTube (unlisted), Streamable, or Google Drive and paste the URL — Discord unfurls a player card. This sidesteps the size cap entirely for long videos.

For animated clips destined to be emoji or reactions, the <a class="text-[#3368A0] dark:text-[#66A3BF] font-semibold hover:underline" href="/tools/gif-compressor/">GIF compressor</a> targets the stricter 256 KiB emoji ceiling instead.`,
        callout: {
          type: 'tip',
          title: 'Leave a Little Headroom',
          text: 'Target a size just under the limit, not exactly on it. A file that measures 10.0 MB can still be rejected by a 10 MB cap once container overhead is counted — aim for about 9 MB.'
        }
      },
      {
        id: 'can-you-video-call-on-discord',
        heading: '5. Can You Video Call on Discord?',
        content: `**Yes — video calling is free and built in, with no Nitro required.** You can start a camera call in three places:

- **Direct messages:** open any DM and click the camera icon for a one-to-one video call.
- **Group DMs:** start a video call with the whole group — up to **50 people** can be on the same call.
- **Server voice channels:** turn your camera on inside a voice channel, or use **Go Live** to share your screen to others in the channel.

The free tier streams and screen-shares at up to **720p / 30 fps**. Nitro raises Go Live and screen-share quality up to **1080p / 60 fps** (with higher source options), which is the main call-quality difference between free and paid.`,
        table: {
          headers: ['Where', 'Video call?', 'Cap'],
          rows: [
            ['1:1 DM', 'Yes', '2 people'],
            ['Group DM', 'Yes', 'Up to 50'],
            ['Server voice channel', 'Yes (+ Go Live)', 'Channel members'],
            ['Go Live quality (free)', '720p / 30fps', '—'],
            ['Go Live quality (Nitro)', '1080p / 60fps', '—']
          ]
        },
        callout: {
          type: 'info',
          title: 'Calls Are Not Uploads',
          text: 'Video calls and Go Live are live streams, so the file upload size limit does not apply to them — it only applies to attachments you send in chat.'
        }
      },
      {
        id: 'can-you-stream-prime-video-on-discord',
        heading: '6. Can You Stream Prime Video on Discord?',
        content: `**Yes, you can screen-share Prime Video (or Netflix, Disney+, Hulu) to friends in a voice channel — but you will often hit a black screen.** That black screen is not a Discord bug: streaming services wrap their video in **DRM (digital rights management)**, and when a browser plays DRM content with **hardware acceleration** on, the protected frames are deliberately excluded from screen capture. Discord captures everything *except* the movie.

The usual fix is to turn hardware acceleration off so the video renders in software, where capture can see it:

1. **Disable hardware acceleration in your browser** (Chrome/Edge: Settings → System; Firefox: Settings → Performance). Restart the browser afterwards.
2. **Disable hardware acceleration in Discord** (Settings → Advanced, and Settings → Voice & Video). Restart Discord.
3. **Share the browser window** via Go Live — pick the browser as the source rather than the whole desktop, then play the title.
4. **Try a different browser** if one still shows black. Firefox and Chrome behave differently with different services.

Keep expectations realistic: DRM is designed to block exactly this, so some services or app updates will still refuse to capture, and there is no reliable permanent workaround. Only stream content you are entitled to watch, and treat this as a personal watch-party feature — not a way to redistribute anything.`,
        callout: {
          type: 'warning',
          title: 'Black Screen = DRM, Not a Setting You Missed',
          text: 'If only the movie is black while the rest of the browser shows fine, that is DRM protection kicking in. Disabling hardware acceleration is the fix that works most often; nothing on the Discord side can unlock protected video.'
        }
      },
      {
        id: 'upload-streaming-troubleshooting',
        heading: '7. Quick Fixes for Upload & Stream Errors',
        content: `Most "your files are too powerful" and black-screen problems come down to a handful of causes. Run through these before assuming something is broken:

- **"Your files are too powerful" on upload:** the clip is over your cap. Compress it under the limit or paste an external link.
- **Upload fails right at the limit:** container overhead pushed it over. Re-encode to about 10% under the cap.
- **Black screen sharing a streaming service:** DRM plus hardware acceleration. Disable hardware acceleration in both the browser and Discord.
- **Black screen sharing a game or app:** often the opposite — some capture paths *need* hardware acceleration or admin rights. Toggle it the other way, or run Discord as administrator on Windows.
- **Video uploads but will not play inline:** use MP4 with H.264 video and AAC audio; exotic codecs upload but may not preview.`,
        callout: {
          type: 'tip',
          title: 'MP4 (H.264 + AAC) Is the Safe Bet',
          text: 'For maximum compatibility across desktop, web, and mobile, export or compress to an MP4 with H.264 video and AAC audio. Our video compressor outputs exactly that by default.'
        }
      }
    ],
    faqs: [
      {
        question: 'What is the maximum video size on Discord?',
        answer: 'Discord caps uploads at 10 MB on a free account, 50 MB with Nitro Basic, and 500 MB with full Nitro. Video uses the same per-file limit as any other attachment — there is no separate, larger video allowance.'
      },
      {
        question: 'How do I increase the Discord upload limit without Nitro?',
        answer: 'Two ways: be in a boosted server (Level 2 raises the whole server to 50 MB, Level 3 to 100 MB for everyone), or keep the file inside the free 10 MB cap by compressing it. For long videos, uploading elsewhere and pasting a link avoids the cap entirely.'
      },
      {
        question: 'Can you video call on Discord for free?',
        answer: 'Yes. Video calls are free with no Nitro required, in DMs, group DMs (up to 50 people), and server voice channels. The free tier streams at up to 720p/30fps; Nitro raises that to 1080p/60fps.'
      },
      {
        question: 'How many people can be on a Discord video call?',
        answer: 'A group DM video call supports up to 50 participants. In a server voice channel, everyone in the channel can turn on their camera or watch a Go Live screen share.'
      },
      {
        question: 'Can you stream Prime Video on Discord without a black screen?',
        answer: 'Usually yes, by disabling hardware acceleration in both your browser and Discord, then sharing the browser window via Go Live. Because Prime Video uses DRM, some titles or updates may still refuse to capture — DRM is built to block screen recording.'
      },
      {
        question: 'Why is my Discord stream just a black screen?',
        answer: 'For streaming services (Prime Video, Netflix, Disney+), a black screen is DRM combined with hardware acceleration — disable hardware acceleration to fix it. For games or apps, the cause is often the reverse: enable hardware acceleration or run Discord as administrator.'
      },
      {
        question: 'Does compressing a video for Discord reduce its quality?',
        answer: 'Some, but far less than you would expect. Lowering resolution to 720p and using a moderate CRF (around 28) can cut a file by 80 to 90% while staying visually clean for chat playback. You control the trade-off with the resolution and CRF settings.'
      },
      {
        question: 'What is the best video format for Discord?',
        answer: 'MP4 with H.264 video and AAC audio. It uploads, previews inline, and plays on desktop, web, and mobile without extra codecs. Our video compressor outputs H.264 MP4 by default.'
      }
    ]
  },
];
