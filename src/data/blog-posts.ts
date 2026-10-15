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
- **Action Stills**: Clean, high-contrast dynamic action frames with supernatural visual effects.
- **Black-and-White Manga Panels**: Crisp ink drawings that stand out clearly against Discord dark background.

### B. Character and Retro Game PFPs
- **Pixel Art & Retro Gaming**: Vintage 8-bit sprites, platformer speedster icons, or 3D low-poly models.
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
  {
    slug: 'how-to-do-colored-text-discord',
    title: 'How to Do Colored Text in Discord | ANSI Code Guide',
    heading: 'How to Do Colored Text in Discord',
    howToSteps: [
      { name: 'Open the ansi code block', text: 'Type three backticks followed by ansi on a fresh line in your chat input.' },
      { name: 'Insert the ANSI color escape sequence', text: 'Add the escape character sequence followed by your chosen color integer and the letter m.' },
      { name: 'Type your message and add reset', text: 'Write your text, then append the reset code sequence so following text stays clean.' },
      { name: 'Close with three backticks', text: 'End the message with three backticks on a new line and press Enter to send.' }
    ],
    metaDescription: 'Learn how to do colored text in discord using ANSI codes and syntax highlighting. Copy copy-paste code blocks or use our interactive visual generator tool.',
    primaryKeyword: 'how to do colored text in discord',
    secondaryKeywords: [
      'discord colored text code',
      'ansi color discord',
      'colored text discord copy paste',
      'discord text formatting color'
    ],
    longTailKeywords: [
      'how to write colored text in discord mobile',
      'discord colored text generator online',
      'discord bash color codes',
      'colored text discord bot'
    ],
    category: 'Tutorials',
    readTime: '6 min read',
    datePublished: '2026-10-04T08:00:00Z',
    dateModified: '2026-10-04T08:00:00Z',
    author: {
      name: 'Discord Asset Studio Engineering',
      role: 'Client Architecture Specialist'
    },
    summary: 'Discord does not provide a native color picker button, but you can tint text using ANSI terminal escape sequences inside triple-backtick code blocks. Here is how the syntax works, the 16-color palette, and how to copy ready-to-paste blocks without memorizing control codes.',
    toolCta: {
      name: 'Discord Colored Text Generator',
      headline: 'Generate ANSI Colored Discord Text in Seconds',
      description: 'Pick colors, style words with bold or underline, and copy ready-to-paste ANSI code blocks formatted directly for Discord chat.',
      buttonText: 'Open Colored Text Studio',
      href: '/tools/colored-text/',
      badge: 'ANSI 16-Color • Code Blocks'
    },
    sections: [
      {
        id: 'why-discord-has-no-color-picker',
        heading: 'Why Discord Chat Uses ANSI Codes Instead of a Color Picker',
        content: `Discord chat does not include a color picker button or rich-text palette in its interface. While you can easily type asterisks for bold or italics, tinting text requires terminal escape codes inside an \`ansi\` syntax fence.

When Discord added ANSI terminal styling to desktop and web builds, it gave community moderators, bot developers, and creators a way to highlight important announcements, build warning boxes, and create distinct status messages.

The technique relies on standard ANSI SGR (Select Graphic Rendition) sequences. When enclosed inside three backticks tagged with \`ansi\`, the Discord client parses the numbers and colors the text instead of rendering plain monospaced characters. To format your messages without typing control codes manually, use our in-browser <a href="/tools/colored-text/" class="text-[#3368A0] dark:text-[#66A3BF] font-semibold hover:underline">Discord colored text generator</a>. If you need standard markdown styling like bold or strikethrough, check out our <a href="/tools/text-formatting/" class="text-[#3368A0] dark:text-[#66A3BF] font-semibold hover:underline">Discord text formatting tool</a>.`,
        callout: {
          type: 'info',
          title: 'The Basic ANSI Fence Pattern',
          text: 'Every colored message must start with ```ansi on its own line and end with ``` on its own line. Without the ansi tag, Discord treats your escape sequences as raw text.'
        }
      },
      {
        id: 'ansi-escape-code-syntax-breakdown',
        heading: 'The ANSI Escape Sequence Formula for Discord',
        content: `An ANSI color command in Discord follows a strict pattern:

\`\`\`
\\u001b[{format};{color}m{your text here}\\u001b[0m
\`\`\`

Here is how each piece works:
- **\\u001b (ESC)**: The non-printable ASCII escape character (code 27). Because modern keyboards have no key to type this character directly, you have to paste it from an editor or generate it using our tool.
- **[**: The Control Sequence Introducer (CSI) bracket.
- **{format}**: The text attribute code. 0 is normal text, 1 is bold, and 4 is underline.
- **;**: A semicolon separating the attribute from the color number.
- **{color}**: The 2-digit integer for foreground text (30 through 37) or background highlight (40 through 47).
- **m**: The terminator that tells Discord the code is complete.
- **\\u001b[0m**: The reset code. Always place this at the end of your colored phrase so subsequent words return to default gray.`,
        code: {
          language: 'ansi',
          snippet: `\`\`\`ansi
[0;31mThis is red text[0m
[1;32mThis is bold green text[0m
[4;34mThis is underlined blue text[0m
\`\`\``,
          caption: 'Basic 3-line ANSI colored text block in Discord'
        }
      },
      {
        id: 'full-ansi-color-palette-table',
        heading: 'Complete Discord ANSI Color Code Reference',
        content: `Discord implements a Solarized-style color palette rather than harsh neon primaries. This means green leans slightly olive, blue looks like soft denim, and yellow appears as warm gold.

You can set foreground text colors (codes 30-37) and background fill colors (codes 40-47). Here is the reference table of every available color in Discord:`,
        table: {
          headers: ['Color Name', 'Text Code (FG)', 'Background Code (BG)', 'Visual Appearance in Discord'],
          rows: [
            ['Dark Gray / Charcoal', '30', '40', 'Dark slate tone, subtle contrast against dark theme'],
            ['Red / Crimson', '31', '41', 'Warm salmon red, ideal for warnings and alert tags'],
            ['Green / Olive', '32', '42', 'Earthy forest olive, perfect for success messages and online tags'],
            ['Yellow / Amber', '33', '43', 'Warm gold yellow, great for cautions and highlighted notes'],
            ['Blue / Periwinkle', '34', '44', 'Soft periwinkle blue, excellent for info callouts'],
            ['Pink / Magenta', '35', '45', 'Soft rose pink, popular for aesthetic headers'],
            ['Cyan / Teal', '36', '46', 'Vibrant aquamarine teal, high visibility in dark theme'],
            ['White / Light Gray', '37', '47', 'Clean off-white, strong contrast on dark backgrounds']
          ]
        }
      },
      {
        id: 'legacy-syntax-highlighting-tricks',
        heading: 'Legacy Markdown Color Tricks vs Modern ANSI Blocks',
        content: `Before Discord supported ANSI blocks, communities relied on language syntax highlighting hacks to introduce color into chat. While these tricks still work, they apply color to whole lines rather than specific words:

- **diff**: Lines starting with \`+\` turn light green; lines starting with \`-\` turn light red.
- **ini**: Text inside square brackets \`[Like This]\` turns bright blue; numbers turn orange.
- **css**: Text preceded by a dot \`.selector\` or curly braces turns teal and blue.
- **yaml**: Keys before a colon \`key:\` turn yellow; numbers turn cyan.

While syntax highlighting hacks are easy to type without escape codes, ANSI blocks are far more versatile. With ANSI, you can color a single word in the middle of a sentence, combine bold with underline, and even apply background fills. For complex layouts, try our <a href="/tools/markdown/" class="text-[#3368A0] dark:text-[#66A3BF] font-semibold hover:underline">Discord markdown editor</a>.`,
        code: {
          language: 'markdown',
          snippet: `\`\`\`diff
+ Green line using diff syntax
- Red line using diff syntax
\`\`\`

\`\`\`ini
[Blue Header inside ini syntax]
\`\`\``,
          caption: 'Older syntax highlighting workarounds in Discord'
        }
      },
      {
        id: 'mobile-and-dark-mode-quirks',
        heading: 'Mobile App Support and Theme Considerations',
        content: `Recent versions of Discord on both iOS and Android render ANSI colored text inside code blocks. However, members on older client versions will see the message as monospaced white text inside a gray box. The content remains completely readable, though without color.

Colors also look distinct depending on the viewer's theme:
- **Dark Mode (#313338)**: Cyan (36), yellow (33), and pink (35) offer the highest legibility. Dark gray (30) blends closely into the chat background and should be avoided for crucial text.
- **Light Mode (#FFFFFF)**: Red (31), blue (34), and dark gray (30) look crisp, while cyan and yellow can appear faint.

If you are setting up community rules or channel banners, pair colored text blocks with our <a href="/tools/colors/" class="text-[#3368A0] dark:text-[#66A3BF] font-semibold hover:underline">Discord background color inspector</a> to verify color contrast across both themes.`,
        callout: {
          type: 'warning',
          title: 'Not Supported in Profiles or Bios',
          text: 'ANSI color codes only render inside message code blocks. They do not work in your username, server nickname, or About Me bio.'
        }
      }
    ],
    faqs: [
      {
        question: 'How do you do colored text in Discord without Nitro?',
        answer: 'You do not need Nitro. Colored text uses standard ANSI escape codes inside a triple-backtick ansi code block, which is available to all Discord users on desktop, web, and mobile.'
      },
      {
        question: 'Why is my Discord colored text showing raw escape codes like [31m?',
        answer: 'This happens if you omit the ansi tag after the opening triple backticks, or if you accidentally deleted the invisible ESC character before the bracket. Use our colored text generator to copy a clean, validated block.'
      },
      {
        question: 'Can you use colored text in your Discord bio or About Me?',
        answer: 'No. Profile bios and server nicknames only accept plain text and Unicode characters. Code block syntax does not render in user profiles.'
      },
      {
        question: 'Does colored text work on the Discord mobile app?',
        answer: 'Yes, modern Discord updates on iOS and Android render ANSI colors. If a mobile user is on an older app release, the text simply displays as clean monospaced plain text.'
      },
      {
        question: 'What is the fastest way to write colored text in Discord?',
        answer: 'Use our free in-browser Discord Colored Text Generator. Type your message, click your preferred color and style, and copy the formatted code block directly into Discord.'
      }
    ]
  },
  {
    slug: 'discord-timestamp-code-guide',
    title: 'Discord Timestamp Code Guide | Dynamic Chat Formats',
    heading: 'Discord Timestamp Code Guide & Formats',
    howToSteps: [
      { name: 'Determine event date and time', text: 'Choose the exact date, time, and time zone for your scheduled event or deadline.' },
      { name: 'Convert to UNIX epoch seconds', text: 'Convert your calendar date into a 10-digit UNIX timestamp using our browser generator.' },
      { name: 'Select your format flag', text: 'Pick a display flag such as R for countdown or F for full date and time.' },
      { name: 'Paste into Discord chat', text: 'Send the string in the format <t:TIMESTAMP:FLAG> in any Discord channel, DM, or embed.' }
    ],
    metaDescription: 'Master every discord timestamp code format for events and countdowns. Learn UNIX conversion, copy syntax tags, or generate dynamic timestamps instantly.',
    primaryKeyword: 'discord timestamp code',
    secondaryKeywords: [
      'discord relative timestamp',
      'how to send timestamps in discord',
      'discord timestamp generator',
      'discord time format'
    ],
    longTailKeywords: [
      'discord timestamp countdown tag',
      'discord timestamp format list',
      'how to make discord timestamp in chat',
      'discord unix timestamp command'
    ],
    category: 'Tutorials',
    readTime: '5 min read',
    datePublished: '2026-10-04T08:00:00Z',
    dateModified: '2026-10-04T08:00:00Z',
    author: {
      name: 'Discord Asset Studio Engineering',
      role: 'Client Architecture Specialist'
    },
    summary: 'Discord timestamp codes automatically display dates and times in each viewer local time zone and can even update live countdowns. Here is how the <t:UNIX:FLAG> syntax works, all 7 format styles, and how to post them in chat.',
    toolCta: {
      name: 'Discord Timestamp Generator',
      headline: 'Build Dynamic Discord Timestamps Without Math',
      description: 'Pick a date and time zone to generate live countdowns, short times, and full dates that auto-sync to every user local device clock.',
      buttonText: 'Open Timestamp Generator',
      href: '/tools/timestamp/',
      badge: '7 Dynamic Formats • Timezone Auto-Sync'
    },
    sections: [
      {
        id: 'what-is-a-discord-timestamp-code',
        heading: 'How Discord Dynamic Timestamps Solve Time Zone Confusion',
        content: `When organizing community game nights, server tournaments, or team meetings, typing "Starts at 8 PM EST" creates confusion for members in other parts of the world. Readers have to calculate offsets manually, leading to missed events.

Discord solved this by adding native dynamic timestamp tags. Instead of writing plain text times, you write a short code containing a UNIX epoch number:

\`\`\`
<t:1728000000:R>
\`\`\`

When posted in chat, Discord replaces the tag with a localized time based on each reader's computer or phone settings. Someone in New York sees Eastern Time, someone in London sees GMT, and someone in Tokyo sees JST.

You can generate these tags instantly with our in-browser <a href="/tools/timestamp/" class="text-[#3368A0] dark:text-[#66A3BF] font-semibold hover:underline">Discord timestamp generator</a>, or assemble them manually using the guide below.`,
        callout: {
          type: 'info',
          title: 'Direct Chat Conversion',
          text: 'Timestamps do not require bots or server permissions. Anyone can type a timestamp code directly into regular chat messages, thread titles, and forum posts.'
        }
      },
      {
        id: 'the-seven-discord-timestamp-formats',
        heading: 'The Seven Discord Timestamp Format Styles Compared',
        content: `Discord provides seven distinct format flags that change how your timestamp renders. You append the single-letter flag at the end of the tag after a colon:

\`\`\`
<t:1728000000:FLAG>
\`\`\`

Here is how each flag behaves in chat:`,
        table: {
          headers: ['Flag', 'Format Style', 'Rendered Output Example', 'Best Usage Scenario'],
          rows: [
            ['t', 'Short Time', '9:41 PM', 'Daily recurring voice calls and casual meetings'],
            ['T', 'Long Time', '9:41:00 PM', 'Exact countdown moments and competitive match starts'],
            ['d', 'Short Date', '10/04/2026', 'Submission deadlines and calendar milestones'],
            ['D', 'Long Date', 'October 4, 2026', 'Birthdays, major releases, and holidays'],
            ['f', 'Short Date/Time', 'October 4, 2026 9:41 PM', 'General event announcements (Discord default)'],
            ['F', 'Long Date/Time', 'Sunday, October 4, 2026 9:41 PM', 'Official server announcements and rules'],
            ['R', 'Relative Time', 'in 2 hours / 15 minutes ago', 'Dynamic live countdowns and recent activity notes']
          ]
        }
      },
      {
        id: 'how-relative-countdowns-work',
        heading: 'Using Relative Timestamps (:R) as Live Countdowns',
        content: `The \`:R\` flag is the most popular Discord timestamp style because it acts as an automatic live countdown.

Unlike static text that becomes outdated as time passes, a relative timestamp updates in real time on the viewer's screen. If an event is scheduled for two hours from now, Discord displays "in 2 hours". As time ticks down, the tag smoothly shifts to "in 45 minutes", "in 5 minutes", "in a few seconds", and eventually "5 minutes ago".

The client updates this text locally without sending extra network requests or editing messages.

For major server announcements, combine the full date style \`:F\` with the countdown style \`:R\`:

\`\`\`
Server Maintenance: <t:1728000000:F> (<t:1728000000:R>)
\`\`\`

This pattern gives your community both the exact calendar time and a quick relative sense of urgency.`,
        callout: {
          type: 'tip',
          title: 'Pairing Absolute and Relative Times',
          text: 'Using both styles side-by-side ensures mobile users with small screens get the exact date while seeing how soon the event happens at a single glance.'
        }
      },
      {
        id: 'calculating-unix-timestamps',
        heading: 'How UNIX Timestamps Work and Common Formatting Mistakes',
        content: `A UNIX timestamp represents the number of seconds that have elapsed since midnight Coordinated Universal Time (UTC) on January 1, 1970.

The most common mistake when building Discord timestamps is using milliseconds instead of seconds. In JavaScript and web development, \`Date.now()\` returns a 13-digit number (e.g., \`1728000000000\`). If you paste a 13-digit number into Discord, the client fails to parse it and leaves the tag as raw code.

To fix this, divide milliseconds by 1,000 and round down to a 10-digit integer.

If you omit the colon and letter flag at the end (e.g., \`<t:1728000000>\`), Discord falls back to the short date/time format (\`:f\`).`,
        code: {
          language: 'javascript',
          snippet: `// Converting JavaScript date to Discord timestamp seconds:
const eventDate = new Date('2026-10-04T20:00:00Z');
const unixSeconds = Math.floor(eventDate.getTime() / 1000);

console.log(\`<t:\${unixSeconds}:R>\`);
// Output: <t:1791144000:R>`,
          caption: 'Converting milliseconds to seconds for Discord'
        }
      },
      {
        id: 'using-timestamps-in-announcements',
        heading: 'Formatting Timestamps in Server Announcements and Embeds',
        content: `Timestamps integrate smoothly with Discord Markdown formatting. You can wrap them in bold asterisks, place them in bulleted lists, or insert them inside bot webhook embeds.

Here is an example announcement template you can copy and adjust:

\`\`\`
📢 **COMMUNITY TOURNAMENT**
📅 Date: <t:1728000000:F>
⏳ Countdown: **<t:1728000000:R>**
📍 Voice Channel: General Stage
\`\`\`

Notice that timestamps work inside bold formatting: \`**<t:1728000000:R>**\` will render the dynamic countdown in bold text. If you want to build rich Discord announcement embeds with colors and custom fields, check out our <a href="/tools/embed-builder/" class="text-[#3368A0] dark:text-[#66A3BF] font-semibold hover:underline">Discord embed builder</a>.`,
        callout: {
          type: 'info',
          title: 'Embed Support',
          text: 'Timestamps can be placed inside embed descriptions, field values, and footers when sending messages through webhooks or bot libraries.'
        }
      }
    ],
    faqs: [
      {
        question: 'Do Discord timestamps update automatically without refreshing?',
        answer: 'Yes. Relative timestamps (<t:TIMESTAMP:R>) update live on screen as time passes. Discord client handles the countdown in local memory without editing the message.'
      },
      {
        question: 'Why is my Discord timestamp showing as raw code like <t:1728000000:R>?',
        answer: 'This happens if your timestamp has 13 digits instead of 10 (milliseconds instead of seconds), or if there are typos in the brackets. Discord requires a 10-digit UNIX second timestamp.'
      },
      {
        question: 'Can you use Discord timestamp codes on mobile phones?',
        answer: 'Yes. You can paste timestamp codes into chat on iPhone and Android apps. They render as clickable localized times just like on desktop.'
      },
      {
        question: 'What happens if you omit the style flag at the end of the tag?',
        answer: 'If you leave off the flag and type <t:1728000000>, Discord automatically applies the default short date and time format (:f), showing month, day, year, and time.'
      },
      {
        question: 'Can I put dynamic timestamps in channel names or server bios?',
        answer: 'No. Dynamic timestamps only render inside chat messages, forum posts, threads, and embeds. Channel names and server descriptions treat the tag as plain literal text.'
      }
    ]
  },
  {
    slug: 'discord-about-me-ideas-aesthetic',
    title: 'Discord About Me Ideas Aesthetic | Bio Templates',
    heading: 'Discord About Me Ideas Aesthetic: Bio Templates',
    metaDescription: 'Browse discord about me ideas aesthetic templates with symbols, spacing, and clean layouts. Copy minimalist bios that fit the 190-character limit cleanly.',
    primaryKeyword: 'discord about me ideas aesthetic',
    secondaryKeywords: [
      'discord bio templates copy paste',
      'discord bio character limit',
      'aesthetic discord bio',
      'cute discord bio ideas'
    ],
    longTailKeywords: [
      'discord about me symbols copy and paste',
      'minimalist discord about me ideas',
      'discord bio ideas for gamers',
      'short discord bio templates'
    ],
    category: 'Design & Inspiration',
    readTime: '5 min read',
    datePublished: '2026-10-04T08:00:00Z',
    dateModified: '2026-10-04T08:00:00Z',
    author: {
      name: 'Discord Asset Studio Engineering',
      role: 'Client Architecture Specialist'
    },
    summary: 'An aesthetic Discord About Me bio frames your profile card and gives people a quick look at your personality. Here are tested bio templates, clean Unicode dividers, and layout ideas designed to stay safely within Discord 190-character ceiling.',
    toolCta: {
      name: 'Discord Bio Generator',
      headline: 'Build Aesthetic Discord Bios Under 190 Chars',
      description: 'Mix aesthetic symbols, borders, and custom bio templates with a live character counter to craft your Discord profile.',
      buttonText: 'Open Bio Generator',
      href: '/tools/bio-generator/',
      badge: '190 Chars • Aesthetic Symbols'
    },
    sections: [
      {
        id: 'discord-bio-rules-and-190-character-limit',
        heading: 'Discord About Me Character Limits and Technical Rules',
        content: `Your Discord About Me bio appears when another member clicks your profile picture in a server member list or chat window. Creating an aesthetic bio requires understanding three technical rules:

1. **The 190-Character Ceiling**: Discord limits your bio to exactly 190 characters. Spaces, punctuation, and line breaks count against this total.
2. **Line Break Limits**: On desktop popout cards, Discord displays approximately 5 to 6 lines of text before adding a scrollbar. Bios that rely on excessive empty lines get cut off.
3. **No Markdown Styling**: Standard Discord Markdown (like \`**bold**\` or \`*italics*\`) does not work in bios. Typing asterisks displays literal asterisks.

To get stylized lettering in your bio, you need to use Unicode character replacements from our <a href="/tools/fonts/" class="text-[#3368A0] dark:text-[#66A3BF] font-semibold hover:underline">Discord font generator</a> or structure your bio with our <a href="/tools/bio-generator/" class="text-[#3368A0] dark:text-[#66A3BF] font-semibold hover:underline">Discord bio generator</a>.`,
        callout: {
          type: 'warning',
          title: 'Emoji Byte Counting',
          text: 'Custom Discord server emojis cannot be used in bios unless you have Discord Nitro. Standard Unicode emojis count as 2 or more characters toward your 190-character limit.'
        }
      },
      {
        id: 'curated-aesthetic-bio-templates',
        heading: 'Copy-and-Paste Aesthetic Discord Bio Templates',
        content: `Here are copy-ready bio templates formatted to fit within the 190-character limit:

### Minimalist & Clean (124 chars)
\`\`\`text
name / age / pronouns
✦ listening to music
↳ sleeping or studying
offline most of the day
\`\`\`

### Cozy Lo-Fi / Soft Aesthetic (158 chars)
\`\`\`text
☕ warm tea & cloudy mornings
⋆｡˚ reading fantasy novels
ʚɞ dms open for book recs
time zone: est / student
\`\`\`

### Gamer & Co-Op (142 chars)
\`\`\`text
🎮 valorant • apex • rpgs
peak rank: diamond
duo partner wanted
streaming on weekends
feel free to send an invite
\`\`\`

### Dark / Minimalist Monospace (136 chars)
\`\`\`text
[sys.init]
status: idle
interests: code, hardware, ambient sound
don't ping unless urgent
[connection closed]
\`\`\`

Each of these templates leaves sufficient character budget so you can add your pronouns, favorite game, or social handle without hitting the limit.`,
        code: {
          language: 'text',
          snippet: `✦ ─── name ─── ✦
she / her • 20 • infp
listening to lo-fi beats
dms: open for friends
─── ･ ｡ﾟ☆: *.☽ .* :☆ﾟ. ───`,
          caption: 'Full-width aesthetic framed bio template (148 chars)'
        }
      },
      {
        id: 'aesthetic-dividers-and-unicode-symbols',
        heading: 'Safe Unicode Dividers, Stars, and Line Spacers',
        content: `Aesthetic bios often use subtle Unicode symbols to divide sections. It is important to pick symbols that render reliably across Windows, macOS, iOS, and Android without turning into empty square boxes.

Here is a collection of tested aesthetic symbols you can paste into your bio:`,
        table: {
          headers: ['Category', 'Unicode Symbols', 'Recommended Placement'],
          rows: [
            ['Stars & Sparkles', '✦ ✧ ★ ☆ ⋆ ˚｡⋆ ｡˚', 'Surrounding your name or heading lines'],
            ['Brackets & Quotes', '『 』 〖 〗 〘 〙 「 」', 'Framing status words or age/pronoun badges'],
            ['Arrows & Pointers', '↳ ↬ ⇢ ➔ ➤ ➜', 'Bulleting hobbies, social links, or game handles'],
            ['Separators & Lines', '• ◦ ─ │ ┊ ┈', 'Dividing short words on a single horizontal line'],
            ['Decorative Borders', '─── ･ ｡ﾟ☆: *.☽ .* :☆ﾟ. ───', 'Header and footer borders for structured cards']
          ]
        }
      },
      {
        id: 'matching-your-bio-with-pfp-and-banner',
        heading: 'Coordinating Your Bio with Profile Banners and PFPs',
        content: `A strong Discord profile works as a cohesive unit. When someone opens your profile card, your avatar, banner, profile theme color, and bio appear together.

- **Theme Palette**: Pick a profile color that matches the primary shade of your banner. If your banner features a purple anime landscape, set your profile theme to muted lavender.
- **Tone Consistency**: If your avatar is dark and cyberpunk, a playful bio filled with flower symbols creates a visual mismatch. Choose monospace brackets and tech dividers instead.
- **Keep Space for About Me**: Discord displays your About Me text directly over the secondary profile theme color. High-contrast white or light symbols maintain readability against darker backgrounds.

To create matching graphics for your profile header, explore our <a href="/tools/banner/" class="text-[#3368A0] dark:text-[#66A3BF] font-semibold hover:underline">Discord banner maker</a> and <a href="/tools/avatar/" class="text-[#3368A0] dark:text-[#66A3BF] font-semibold hover:underline">Discord avatar creator</a>.`,
        callout: {
          type: 'tip',
          title: 'Profile Card Contrast',
          text: 'Avoid using gray or dim symbols if your profile theme is set to dark charcoal, as the text can blend in and become unreadable.'
        }
      },
      {
        id: 'troubleshooting-broken-symbols-in-bios',
        heading: 'Why Some Symbols Turn into Empty Boxes on Mobile',
        content: `If you copy symbols from random internet generators, you might notice that friends on older Android devices or iPads see empty rectangles (\`□\`), known as "tofu" glyphs.

This happens when a font generator uses uncommon Unicode mathematical alphanumeric blocks that lack system font coverage on older operating systems.

To avoid broken glyphs:
- Stick to standard symbols from the Basic Multilingual Plane (like stars \`★\`, arrows \`↳\`, and bullets \`•\`).
- Avoid heavily distorted pseudo-alphabets that convert regular letters into obscure mathematical symbols.
- Test your finished profile card on both your computer and mobile phone before finalizing.

For clean, widely supported icons and symbols, browse our <a href="/tools/emoji-copy-paste/" class="text-[#3368A0] dark:text-[#66A3BF] font-semibold hover:underline">Discord emoji copy paste collection</a>.`,
        callout: {
          type: 'info',
          title: 'Cross-Device Verification',
          text: 'Always open your own profile on your smartphone to ensure your dividers and symbols display cleanly on mobile screens.'
        }
      }
    ],
    faqs: [
      {
        question: 'What is the character limit for a Discord About Me bio?',
        answer: 'The Discord About Me bio limit is exactly 190 characters. Spaces, letters, numbers, and line breaks all count toward this total.'
      },
      {
        question: 'Does Discord Markdown work in the About Me bio?',
        answer: 'No. Markdown formatting like **bold**, *italics*, and code blocks does not work in bios. Discord renders asterisks and backticks as literal text.'
      },
      {
        question: 'Can you add clickable links in a Discord bio?',
        answer: 'Yes. If you paste a valid URL starting with https:// into your bio, Discord automatically turns it into a clickable link for viewers.'
      },
      {
        question: 'Why do some fancy font characters show up as boxes in Discord?',
        answer: 'This happens when an obscure Unicode character is not supported by the viewer operating system font set. Stick to widely supported symbols like stars, simple arrows, and clean bullets.'
      },
      {
        question: 'How do you change your Discord About Me bio?',
        answer: 'On desktop, click the gear icon for User Settings, go to Profiles, and type into the About Me text box. On mobile, tap your profile avatar, tap Edit Profile, and update About Me.'
      }
    ]
  },
  {
    slug: 'discord-role-icon-size-guide',
    title: 'Discord Role Icon Size Guide | 64x64 Specs & Rules',
    heading: 'Discord Role Icon Size Guide & Specifications',
    howToSteps: [
      { name: 'Verify Server Boost Level 2', text: 'Confirm your server has reached at least Boost Level 2 with 7 active community boosts.' },
      { name: 'Create a 64x64 transparent canvas', text: 'Draw or crop your badge on a 64×64 square canvas with a transparent background.' },
      { name: 'Export under 256 KiB', text: 'Save the icon as a PNG under the 256 KiB file limit.' },
      { name: 'Assign in Server Settings', text: 'Navigate to Server Settings, click Roles, choose the role, and upload the icon under Role Icon.' }
    ],
    metaDescription: 'Everything about discord role icon size limits and badge requirements. Master the 64x64 pixel dimensions, 256 KiB cap, and Server Boost Level 2 rules.',
    primaryKeyword: 'discord role icon size',
    secondaryKeywords: [
      'how to add role icons in discord',
      'role icon dimensions discord',
      'discord role icon format',
      'discord custom role badge'
    ],
    longTailKeywords: [
      'discord role icon size 64x64',
      'discord server boost level 2 role icons',
      'transparent discord role icon png',
      'role icon size limit discord'
    ],
    category: 'Specifications & Guides',
    readTime: '5 min read',
    datePublished: '2026-10-04T08:00:00Z',
    dateModified: '2026-10-04T08:00:00Z',
    author: {
      name: 'Discord Asset Studio Engineering',
      role: 'Client Architecture Specialist'
    },
    summary: 'Role icons display next to member display names in chat and server member lists. Here are the exact 64×64 pixel dimensions, 256 KiB upload ceiling, Server Boost Level 2 unlock rules, and practical badge design habits.',
    toolCta: {
      name: 'Discord Role Icon Maker',
      headline: 'Crop and Export 64×64 Role Icons Instantly',
      description: 'Format custom role icons to exact 64×64 pixel dimensions under 256 KiB with high contrast and transparent backgrounds.',
      buttonText: 'Open Role Icon Maker',
      href: '/tools/role-icon/',
      badge: '64 × 64 px • 256 KiB Max'
    },
    sections: [
      {
        id: 'official-role-icon-size-specifications',
        heading: 'Official Discord Role Icon Size and File Specifications',
        content: `Discord role icons are custom visual badges that display beside a member's name in chat messages, voice channels, and the right-hand server member roster.

Because these icons appear in compact UI locations, Discord enforces strict dimension and file size rules:`,
        table: {
          headers: ['Technical Specification', 'Official Requirement', 'Best Practice Recommendation'],
          rows: [
            ['Recommended Dimensions', '64×64 pixels', 'Export at 64×64 or 128×128 pixels (square 1:1)'],
            ['Rendered Display Size', '~16×16 to 20×20 pixels', 'Design with bold silhouettes visible at 16px'],
            ['Maximum File Size', '256 KiB', 'Keep PNG files under 100 KiB for instant loading'],
            ['Accepted File Formats', 'PNG, JPG, WEBP', 'Always use 24-bit transparent PNG'],
            ['Animation Support', 'Static only (no animated GIFs)', 'Use clean vector shapes with crisp outlines'],
            ['Server Requirement', 'Server Boost Level 2', 'Requires 7 boosts from community members']
          ]
        },
        callout: {
          type: 'info',
          title: 'Instant Sizing',
          text: 'If your source artwork is rectangular or high resolution, format it instantly with our in-browser <a href="/tools/role-icon/" class="text-[#3368A0] dark:text-[#66A3BF] font-semibold hover:underline">Discord role icon maker</a>.'
        }
      },
      {
        id: 'server-boost-level-2-requirements',
        heading: 'Server Boost Level 2 Requirements and Retention Rules',
        content: `Unlike server icons which are free for every server, custom uploaded role icons require the server to reach **Server Boost Level 2** (currently 7 community boosts).

Key rules regarding role icon boosts:
- **Server Boost Threshold**: Level 2 unlocks custom role icons, 50 additional custom emoji slots, and 1080p 60fps streaming.
- **Grace Period if Boosts Drop**: If member boosts expire and your server drops below Level 2, your configured role icons are not deleted. They remain saved in role settings, but become hidden from member names until the server regains Level 2.
- **Using Server Emojis as Role Icons**: Even if you do not upload a custom image file, Level 2 allows you to select any existing server emoji or standard Unicode emoji as a role badge.

If you are also setting up server branding, see our guides on <a href="/tools/server-icon/" class="text-[#3368A0] dark:text-[#66A3BF] font-semibold hover:underline">server icon sizing</a> and <a href="/guides/discord-sizes/" class="text-[#3368A0] dark:text-[#66A3BF] font-semibold hover:underline">complete Discord dimension specs</a>.`,
        callout: {
          type: 'tip',
          title: 'Boost Tier Verification',
          text: 'Always check Server Settings → Server Boost Status to verify that your boost tier is stable before announcing new custom role icons to staff.'
        }
      },
      {
        id: 'how-to-upload-and-assign-role-icons',
        heading: 'How to Add Role Icons in Discord Server Settings',
        content: `Adding a role icon takes less than a minute once your server reaches Boost Level 2:

1. Open Discord desktop or web, right-click your server icon, and select **Server Settings**.
2. Click **Roles** in the left sidebar.
3. Select the role you want to customize (e.g., "Moderator", "VIP", or "Tournament Winner").
4. Under the **Display** tab, locate the **Role Icon** section.
5. Click **Choose Image** to upload your 64×64 PNG, or choose an emoji from your server emoji list.
6. Click **Save Changes** at the bottom of the screen.

Make sure your account has the **Manage Roles** permission, and ensure your own highest role is higher in the hierarchy than the role you are editing.`,
        callout: {
          type: 'warning',
          title: 'Permission Hierarchy',
          text: 'You cannot edit roles higher than your own highest role, even if you are an administrator, unless you are the server owner.'
        }
      },
      {
        id: 'design-habits-for-tiny-16px-displays',
        heading: 'Design Habits for Crisp 16px Role Badges',
        content: `Because role icons render at roughly 16 to 20 pixels in chat, designs that look gorgeous at 500 pixels can turn into an illegible blur in Discord.

Keep these design principles in mind:
- **Avoid Words and Numbers**: At 16 pixels, letters turn into smudged pixels. Use symbolic shapes like crowns, shields, stars, swords, or badges instead.
- **Maintain High Contrast**: Your icon will sit against dark mode (#313338) and light mode (#FFFFFF). Add a thin 1px contrasting border around dark artwork.
- **Fill the 64×64 Canvas**: Do not leave massive empty margins around your symbol. Let the graphic occupy 85% to 90% of the canvas.
- **Use Transparent Backgrounds**: Square white boxes behind icons look amateurish in dark mode. Always export as PNG with alpha transparency.

For resizing existing icons without losing sharpness, use our <a href="/tools/image-resizer/" class="text-[#3368A0] dark:text-[#66A3BF] font-semibold hover:underline">Discord image resizer</a>.`,
        code: {
          language: 'css',
          snippet: `/* Recommended role icon export parameters */
canvas-width: 64px;
canvas-height: 64px;
color-depth: 32-bit PNG (RGBA);
compression: lossless;
safe-padding: 4px;`,
          caption: 'Optimal export settings for Discord role badges'
        }
      },
      {
        id: 'role-hierarchy-and-chat-display-order',
        heading: 'Role Hierarchy and Chat Icon Precedence',
        content: `A Discord member can hold dozens of server roles at the same time. If several of those roles have custom icons assigned, Discord will only display **one single icon** next to their name in chat.

Discord determines which icon to display based strictly on **Role Hierarchy**:
- The role placed highest in Server Settings → Roles takes priority.
- If a member has both a "Moderator" role (higher) and a "Supporter" role (lower), only the Moderator icon displays beside their chat messages.
- The only way to change which icon appears is to drag the preferred role higher in the server role list.

Keep this in mind when organizing role rewards so higher staff and contributor tiers do not get overridden by lower cosmetic roles.`,
        callout: {
          type: 'info',
          title: 'Single Icon Display',
          text: 'Discord chat does not stack multiple role icons side-by-side. The highest positioned role in your hierarchy always claims the slot.'
        }
      }
    ],
    faqs: [
      {
        question: 'What is the exact Discord role icon size?',
        answer: 'The recommended size for Discord role icons is 64×64 pixels, with a maximum file size of 256 KiB. Discord accepts PNG, JPG, and WEBP formats.'
      },
      {
        question: 'Do role icons require Server Boost Level 2?',
        answer: 'Yes. Custom role icons require Server Boost Level 2, which requires 7 active boosts from server members. Once unlocked, you can assign icons to unlimited roles.'
      },
      {
        question: 'Can Discord role icons be animated GIFs?',
        answer: 'No. Discord role icons must be static images. Animated GIFs are not supported for role icons, even with Server Boost Level 3.'
      },
      {
        question: 'Why is only one role icon showing if a member has multiple roles?',
        answer: 'Discord only displays the icon from the highest role in your server role hierarchy. To change which icon shows, drag that role higher in Server Settings.'
      },
      {
        question: 'Can I use custom server emojis as role icons?',
        answer: 'Yes. When editing a role in Server Settings, you can choose to select any existing custom server emoji or standard Unicode emoji instead of uploading a file.'
      }
    ]
  },
  {
    slug: 'how-to-fit-image-to-discord-banner',
    title: 'Fit Image to Discord Banner Size | Safe Zone Guide',
    heading: 'How to Fit Image to Discord Banner Size Perfectly',
    howToSteps: [
      { name: 'Check your banner destination', text: 'Determine if your graphic is for a Server Banner (960×540) or a Profile Banner (680×240).' },
      { name: 'Format to the exact aspect ratio', text: 'Resize your canvas to 16:9 or 5:2 in our banner editor to prevent automatic stretching.' },
      { name: 'Position focal subjects in the safe zone', text: 'Move logos and faces away from the bottom-left avatar cutout and top headers.' },
      { name: 'Export and upload', text: 'Save as PNG or JPG under 10 MB and upload via User Settings or Server Settings.' }
    ],
    metaDescription: 'Learn how to fit image to discord banner size without cropping. Master 16:9 and 5:2 aspect ratios, mobile safe margins, and profile banner dimensions.',
    primaryKeyword: 'fit image to discord banner size',
    secondaryKeywords: [
      'discord banner safe zone',
      'why is my discord banner cropped',
      'discord banner aspect ratio',
      'discord profile banner dimensions'
    ],
    longTailKeywords: [
      'how to make a picture fit discord banner',
      'discord server banner safe zone template',
      'discord banner cut off on phone',
      'discord banner size 960x540'
    ],
    category: 'Tutorials',
    readTime: '6 min read',
    datePublished: '2026-10-04T08:00:00Z',
    dateModified: '2026-10-04T08:00:00Z',
    author: {
      name: 'Discord Asset Studio Engineering',
      role: 'Client Architecture Specialist'
    },
    summary: 'Discord banners often crop heads, logos, and edges unexpectedly because server banners, user profile cards, and mobile apps use completely different proportions. Here is how to fit any image to Discord banner dimensions with safe zone guides.',
    toolCta: {
      name: 'Discord Banner Maker',
      headline: 'Fit Any Image to Discord Banners with Safe Zones',
      description: 'Resize, reposition, and preview your image across 960×540 server headers and 680×240 profile banners with interactive safe zone overlays.',
      buttonText: 'Open Banner Studio',
      href: '/tools/banner/',
      badge: 'Server & Profile • Safe Margin Grid'
    },
    sections: [
      {
        id: 'why-discord-crops-your-banner-images',
        heading: 'Why One Image Rarely Fits Both Discord Banner Types',
        content: `One of the most frustrating experiences on Discord is uploading a great picture only to discover that Discord cut off half the graphic or zoomed in on an empty background.

This happens because Discord uses two completely different banners with different proportions:

1. **Server Banners**: Use a **16:9 aspect ratio** with a minimum recommended size of **960×540 pixels**.
2. **Profile Banners**: Use a roughly **5:2 aspect ratio (2.83:1)** with a recommended size of **680×240 pixels**.

If you upload a 16:9 image as your profile banner, Discord forces a horizontal crop that cuts off roughly 40% of the vertical height. Furthermore, profile cards place your round avatar over the bottom-left corner, covering whatever artwork sits behind it.

You can adjust and preview any picture with our in-browser <a href="/tools/banner/" class="text-[#3368A0] dark:text-[#66A3BF] font-semibold hover:underline">Discord banner maker</a>, which overlays safe zones before you upload.`,
        callout: {
          type: 'info',
          title: 'Two Different Ratios',
          text: 'Server banners are 16:9 widescreen (960×540), while personal profile banners are ultra-wide 5:2 strips (680×240). Always format artwork for the specific destination.'
        }
      },
      {
        id: 'server-banner-vs-profile-banner-spec-table',
        heading: 'Server Banner vs Profile Banner Dimensions and Specs',
        content: `Before editing your artwork, confirm which banner you are targeting using this specification comparison:`,
        table: {
          headers: ['Feature', 'Server Banner', 'Personal Profile Banner'],
          rows: [
            ['Aspect Ratio', '16:9 widescreen', '~5:2 ultra-wide (approx. 2.83:1)'],
            ['Recommended Resolution', '960×540 pixels (or 1920×1080)', '680×240 pixels (or 1360×480)'],
            ['Minimum Resolution', '960×540 pixels', '680×240 pixels'],
            ['Max File Size', '10 MB', '10 MB'],
            ['Unlock Requirement', 'Server Boost Level 2', 'Discord Nitro or Nitro Basic'],
            ['Animated GIF Support', 'Requires Boost Level 3', 'Requires Discord Nitro'],
            ['Primary UI Obstruction', 'Top-left server name pill & menu', 'Bottom-left avatar circle cutout']
          ]
        }
      },
      {
        id: 'safe-zones-and-avatar-cutouts',
        heading: 'Mapping Safe Zones: Avoiding Avatar and Header Cutouts',
        content: `A safe zone is the portion of your canvas guaranteed to remain visible without being obscured by UI elements or responsive screen resizing.

### Profile Banner Safe Zones
On desktop and mobile profile popout cards, your circular avatar sits over the bottom-left area of the banner:
- **Left Margin**: Keep critical faces, logos, and text at least **140 pixels away from the left edge** on a 680×240 canvas.
- **Bottom Margin**: Leave the bottom 50 pixels clear of important text.
- **The Sweet Spot**: Place your focal artwork in the upper-right two-thirds of the canvas.

### Server Banner Safe Zones
Server banners display above the channel list on the desktop app:
- **Top Bar**: Discord renders a dark gradient overlay and the server title pill across the top 20% of the banner.
- **Keep Logos Centered**: Position server logos and titles slightly below center so they remain unobstructed.

For more templates and banner inspiration, explore our guide on <a href="/blog/discord-banner-ideas-templates/" class="text-[#3368A0] dark:text-[#66A3BF] font-semibold hover:underline">Discord banner ideas and templates</a>.`,
        callout: {
          type: 'tip',
          title: 'The Upper-Right Focus Rule',
          text: 'Because the avatar always sits on the bottom-left, placing character artwork and text on the right side produces an uncluttered profile header every time.'
        }
      },
      {
        id: 'three-techniques-to-fit-any-image-without-stretching',
        heading: 'Three Ways to Fit Square or Portrait Art onto Wide Banners',
        content: `If you have a vertical fanart piece or a square illustration that you want to use as a Discord banner, stretching it horizontally will distort the image. Instead, use one of these three techniques:

1. **Ambient Blurred Background**: Duplicate the original image, scale it to fill the entire 16:9 or 5:2 canvas, apply a 25px Gaussian blur, and place the uncropped subject sharply in the center or right side.
2. **Solid Color Canvas Extension**: Use Discord dark background (#141A24 or #1E293B) as the canvas base. Place your artwork neatly on the right side and feather the left edge into the background with a soft gradient.
3. **Smart Rule-of-Thirds Cropping**: If your source image has high resolution, zoom in to crop around the focal point (such as a character eyes or emblem) rather than trying to fit the full full-body pose into a narrow banner strip.

You can also use our <a href="/tools/image-resizer/" class="text-[#3368A0] dark:text-[#66A3BF] font-semibold hover:underline">Discord image resizer</a> to crop and pad assets locally.`,
        callout: {
          type: 'info',
          title: 'Zero Upload Processing',
          text: 'Our banner studio processes all canvas sizing, padding, and safe zone previews directly in your browser, keeping your personal artwork private.'
        }
      },
      {
        id: 'step-by-step-upload-and-crop-slider-guide',
        heading: 'Uploading and Adjusting Zoom in Discord Settings',
        content: `Once your image matches the recommended dimensions, follow these steps to upload it cleanly:

### Profile Banner (Desktop)
1. Open **User Settings** (gear icon) and select **Profiles**.
2. Click **Change Banner** on your User Profile card.
3. Choose **Upload Image** and select your formatted file.
4. Discord displays a crop preview modal with a zoom slider. Because you pre-sized the image, leave the zoom slider at its default minimum position and click **Apply**.
5. Click **Save Changes**.

### Server Banner (Desktop)
1. Open **Server Settings** and navigate to the **Overview** tab.
2. Scroll to the **Server Banner Background** section.
3. Click **Upload Image**, position your 960×540 file, and save.

If your server has reached Level 3, you can upload an animated GIF banner following the same steps. For full server guidelines, see our tutorial on <a href="/blog/how-to-change-discord-server-banner/" class="text-[#3368A0] dark:text-[#66A3BF] font-semibold hover:underline">how to change a Discord server banner</a>.`,
        callout: {
          type: 'warning',
          title: 'Avoid Discord Auto-Zoom',
          text: 'If you drag Discord built-in zoom slider too far to the right, your banner will pixelate on high-DPI screens. Always resize to the exact canvas dimensions before uploading.'
        }
      }
    ],
    faqs: [
      {
        question: 'What is the best size to fit image to discord banner size?',
        answer: 'For a personal profile banner, use 680×240 pixels (5:2 ratio). For a server banner, use 960×540 pixels (16:9 ratio). Pre-sizing prevents Discord from forcing an unwanted crop.'
      },
      {
        question: 'Why does Discord zoom in on my banner image when uploading?',
        answer: 'Discord zooms in when the image aspect ratio does not match the banner frame. Pre-sizing your image to 680×240 or 960×540 ensures the entire image fits without automatic zoom.'
      },
      {
        question: 'How much of my profile banner is covered by my avatar?',
        answer: 'Your circular avatar covers approximately the bottom-left 120 pixels of your profile banner. Keep faces, logos, and text positioned toward the right side.'
      },
      {
        question: 'Can free Discord users upload a profile banner?',
        answer: 'No. Custom image profile banners require Discord Nitro or Nitro Basic. Free users can only customize their banner with a solid profile theme color.'
      },
      {
        question: 'What is the maximum file size for a Discord banner?',
        answer: 'Both profile banners and server banners have a maximum file size limit of 10 MB. PNG or JPG files under 5 MB load fastest for community members.'
      }
    ]
  }
];
