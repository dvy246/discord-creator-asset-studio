/**
 * layout-i18n.ts — Shared EN/ES translations for Layout.astro (Header, Mobile Menu, Cookie Banner & Footer).
 *
 * Keeps Spanish pages 100% in Spanish, preventing mixed-boilerplate language issues
 * and duplicate English text on /es/ URLs per Google international SEO guidelines.
 */

export type Lang = 'en' | 'es';

export interface LayoutDict {
  brand: {
    unofficialBadge: string;
    zeroUploads: string;
  };
  nav: {
    tools: string;
    assets: string;
    resources: string;
    company: string;
    searchPlaceholder: string;
    quickLaunch: string;
    guidesAndArticles: string;
    colorPalette: string;
    supportKofi: string;
    followX: string;
  };
  toolsMenu: {
    visualHeading: string;
    chatHeading: string;
    banner: { title: string; desc: string };
    avatar: { title: string; desc: string };
    serverIcon: { title: string; desc: string };
    badgeMaker: { title: string; desc: string };
    gifMaker: { title: string; desc: string };
    gifCompressor: { title: string; desc: string };
    videoCompressor: { title: string; desc: string };
    fakeMessage: { title: string; desc: string };
    snowflake: { title: string; desc: string };
    permissions: { title: string; desc: string };
    username: { title: string; desc: string };
    bio: { title: string; desc: string };
    textFormatting: { title: string; desc: string };
    colors: { title: string; desc: string };
    emojiCopyPaste: { title: string; desc: string };
    emoji: { title: string; desc: string };
    sticker: { title: string; desc: string };
    roleIcon: { title: string; desc: string };
    imageCompressor: { title: string; desc: string };
    imageResizer: { title: string; desc: string };
    spoiler: { title: string; desc: string };
    timestamp: { title: string; desc: string };
    fonts: { title: string; desc: string };
    coloredText: { title: string; desc: string };
    markdown: { title: string; desc: string };
    embedBuilder: { title: string; desc: string };
  };
  assetsMenu: {
    heading: string;
    badge: string;
    bannersTitle: string;
    bannersDesc: string;
    pfpsTitle: string;
    pfpsDesc: string;
    iconsTitle: string;
    iconsDesc: string;
  };
  resourcesMenu: {
    specsHeading: string;
    sizesTitle: string;
    sizesDesc: string;
    gifTitle: string;
    gifDesc: string;
    blogTitle: string;
    blogDesc: string;
    popularHeading: string;
    howToStickers: string;
    bannerIdeas: string;
    animePfp: string;
    changeServerBanner: string;
  };
  companyMenu: {
    aboutTitle: string;
    aboutDesc: string;
    contactTitle: string;
    contactDesc: string;
    privacy: string;
    terms: string;
    copyright: string;
  };
  mobileNav: {
    toggleMenuAria: string;
    toolsAndGenerators: string;
    assetLibrary: string;
    assetLibraryBadge: string;
    pfps: string;
    pfpsBadge: string;
    tools: {
      imageResizer: string;
      banner: string;
      gifMaker: string;
      gifCompressor: string;
      videoCompressor: string;
      fakeMessage: string;
      snowflake: string;
      permissions: string;
      username: string;
      bio: string;
      textFormatting: string;
      avatar: string;
      serverIcon: string;
      badgeMaker: string;
      emoji: string;
      sticker: string;
      roleIcon: string;
      imageCompressor: string;
      spoiler: string;
      colors: string;
      timestamp: string;
      emojiCopyPaste: string;
      fonts: string;
      coloredText: string;
      markdown: string;
      embedBuilder: string;
    };
    guidesAndArticles: string;
    sizes: string;
    gifGuide: string;
    blog: string;
    colorPalette: string;
    companyAndLegal: string;
    about: string;
    contact: string;
    privacy: string;
    terms: string;
    copyright: string;
    supportKofi: string;
  };
  cookieBanner: {
    ariaLabel: string;
    text: string;
    privacyLink: string;
    decline: string;
    accept: string;
  };
  footer: {
    tagline: string;
    coreUtilities: string;
    assetLibrary: string;
    documentation: string;
    trustGovernance: string;
    tools: {
      imageResizer: string;
      emoji: string;
      sticker: string;
      banner: string;
      avatar: string;
      roleIcon: string;
      imageCompressor: string;
      spoiler: string;
      colors: string;
      timestamp: string;
      emojiCopyPaste: string;
      fonts: string;
      coloredText: string;
      markdown: string;
      embedBuilder: string;
      serverIcon: string;
      badgeMaker: string;
      gifMaker: string;
      gifCompressor: string;
      videoCompressor: string;
      fakeMessage: string;
      snowflake: string;
      permissions: string;
      username: string;
      bio: string;
      textFormatting: string;
    };
    allPresets: string;
    pfps: string;
    animeBanners: string;
    gamingBanners: string;
    cyberpunkBanners: string;
    darkBanners: string;
    aestheticBanners: string;
    roleIcons2D: string;
    sizeGuide: string;
    gifGuide: string;
    blog: string;
    langSwitch: {
      label: string;
      href: string;
    };
    sitemap: string;
    rss: string;
    robots: string;
    privacy: string;
    terms: string;
    copyright: string;
    about: string;
    contact: string;
    supportKofi: string;
    followX: string;
    copyrightNotice: (year: number) => string;
    verifiedDoc: string;
  };
}

export const layoutI18n: Record<Lang, LayoutDict> = {
  en: {
    brand: {
      unofficialBadge: 'Unofficial Tools',
      zeroUploads: 'Zero Server Uploads',
    },
    nav: {
      tools: 'Tools',
      assets: 'Assets',
      resources: 'Resources',
      company: 'Company',
      searchPlaceholder: 'Search Tools & Assets...',
      quickLaunch: 'Quick Launch Utilities',
      guidesAndArticles: 'Guides & Articles',
      colorPalette: 'Color Palette',
      supportKofi: 'Support Divy on Ko-fi',
      followX: 'Follow @aiwithme0001',
    },
    toolsMenu: {
      visualHeading: 'Visual & Profile',
      chatHeading: 'Server & Chat Assets',
      banner: { title: 'Banner Maker', desc: 'Server & profile safe zones' },
      avatar: { title: 'Avatar Cropper', desc: '512×512 circular mask' },
      serverIcon: { title: 'Server Icon Maker', desc: '512×512 rounded-square icon' },
      badgeMaker: { title: 'Logo & Badge Maker', desc: 'Text & emoji server badges' },
      gifMaker: { title: 'GIF Maker', desc: 'Video to GIF under 10MB' },
      gifCompressor: { title: 'GIF Compressor', desc: 'Shrink animated GIFs to fit' },
      videoCompressor: { title: 'Video Compressor', desc: 'Shrink video under 10MB' },
      fakeMessage: { title: 'Fake Message Maker', desc: 'Fictional chat screenshots' },
      snowflake: { title: 'Snowflake Decoder', desc: 'ID to date, worker & process' },
      permissions: { title: 'Permission Calculator', desc: 'Role & bot permission integers' },
      username: { title: 'Username Generator', desc: 'Ideas & 3–4 letter handles' },
      bio: { title: 'Bio Generator', desc: 'Templates & copy-paste ideas' },
      textFormatting: { title: 'Text Formatting Generator', desc: 'Bold, spoiler, headers & code' },
      colors: { title: 'Color & Hex Codes', desc: 'Background & blurple palette' },
      emojiCopyPaste: { title: 'Emoji Copy & Paste', desc: 'Unicode emoji & kaomoji board' },
      emoji: { title: 'Emoji Maker', desc: '128×128 · 32px preview' },
      sticker: { title: 'Sticker Maker', desc: 'Photo to 320×320 sticker' },
      roleIcon: { title: 'Role Icon Maker', desc: '64×64 server badges' },
      imageCompressor: { title: 'Image Compressor', desc: 'Shrink files under 10 MB' },
      imageResizer: { title: 'Image Resizer', desc: 'Exact avatar, banner & emoji sizes' },
      spoiler: { title: 'Spoiler Maker', desc: 'Hide text & blur image spoilers' },
      timestamp: { title: 'Timestamp Generator', desc: 'Dynamic <t:> time codes' },
      fonts: { title: 'Font Generator', desc: 'Fancy Unicode text styles' },
      coloredText: { title: 'Colored Text Generator', desc: 'ANSI colors, bold & underline' },
      markdown: { title: 'Markdown Previewer', desc: 'Live formatting preview' },
      embedBuilder: { title: 'Embed Builder', desc: 'Webhook JSON + live preview' },
    },
    assetsMenu: {
      heading: 'Free Asset Library',
      badge: '110+',
      bannersTitle: 'Animated Banners & Themes',
      bannersDesc: '110+ matching banner & PFP sets',
      pfpsTitle: 'Discord PFPs',
      pfpsDesc: '50+ profile picture presets',
      iconsTitle: '2D Role & Server Icons',
      iconsDesc: 'Crisp badge icon presets',
    },
    resourcesMenu: {
      specsHeading: 'Specs & Guides',
      sizesTitle: 'Discord Size Guide',
      sizesDesc: 'Every asset dimension & limit',
      gifTitle: 'Discord GIF Guide',
      gifDesc: 'Make GIFs under 10MB',
      blogTitle: 'All Articles',
      blogDesc: 'Tutorials & design ideas',
      popularHeading: 'Popular Tutorials',
      howToStickers: 'How to Make Stickers',
      bannerIdeas: 'Banner Ideas & Templates',
      animePfp: 'Anime PFP & Avatars',
      changeServerBanner: 'Change Server Banner',
    },
    companyMenu: {
      aboutTitle: 'About Us',
      aboutDesc: 'Our mission & independent tooling',
      contactTitle: 'Contact Us',
      contactDesc: 'Feedback & spec-change reports',
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions',
      copyright: 'Copyright & DMCA',
    },
    mobileNav: {
      toggleMenuAria: 'Toggle navigation menu',
      toolsAndGenerators: 'Tools & Generators',
      assetLibrary: 'Asset Library & Customizer',
      assetLibraryBadge: '110+ Free',
      pfps: 'Discord PFPs & Avatars',
      pfpsBadge: '50+ Free',
      tools: {
        imageResizer: 'Discord Image Resizer',
        banner: 'Banner Studio',
        gifMaker: 'GIF Maker',
        gifCompressor: 'GIF Compressor',
        videoCompressor: 'Video Compressor',
        fakeMessage: 'Fake Messages',
        snowflake: 'Snowflake Decoder',
        permissions: 'Permission Calculator',
        username: 'Username Generator',
        bio: 'Bio Generator',
        textFormatting: 'Text Formatting',
        avatar: 'Avatar Studio',
        serverIcon: 'Server Icon Maker',
        badgeMaker: 'Logo & Badge Maker',
        emoji: 'Emoji Maker',
        sticker: 'Sticker Studio',
        roleIcon: 'Role Icon Resizer (64×64)',
        imageCompressor: 'Image Compressor (10 MB Limit)',
        spoiler: 'Image & Text Spoiler Maker',
        colors: 'Discord Color & Hex Codes',
        timestamp: 'Timestamp Generator',
        emojiCopyPaste: 'Emoji Copy & Paste Board',
        fonts: 'Fancy Font Generator',
        coloredText: 'Colored Text Generator',
        markdown: 'Markdown Previewer',
        embedBuilder: 'Embed Builder',
      },
      guidesAndArticles: 'Guides & Articles',
      sizes: 'Size Cheat Sheet (2026)',
      gifGuide: 'Discord GIF Guide',
      blog: 'Creator Blog & Guides',
      colorPalette: 'Color Palette',
      companyAndLegal: 'Company & Legal',
      about: 'About Us',
      contact: 'Contact Us',
      privacy: 'Privacy Policy',
      terms: 'Terms',
      copyright: 'Copyright & DMCA',
      supportKofi: 'Support Divy on Ko-fi',
    },
    cookieBanner: {
      ariaLabel: 'Cookie consent',
      text: 'We use privacy-friendly analytics cookies to understand how creators use these tools. Your images never leave your device. See our',
      privacyLink: 'Privacy Policy',
      decline: 'Decline',
      accept: 'Accept',
    },
    footer: {
      tagline: 'Free, browser-only tools to crop, resize, and format your Discord assets. Everything runs right on your computer without uploading images to any server.',
      coreUtilities: 'Core Utilities',
      assetLibrary: 'Asset Library',
      documentation: 'Documentation',
      trustGovernance: 'Trust & Governance',
      tools: {
        imageResizer: 'Discord Image Resizer',
        emoji: 'Emoji Maker & Validator',
        sticker: 'Sticker Compressor (512 KiB)',
        banner: 'Profile & Server Banners',
        avatar: 'Avatar Optimizer',
        roleIcon: 'Role Icon Resizer (64x64)',
        imageCompressor: 'Image Compressor (Under 10 MB)',
        spoiler: 'Spoiler Maker (Text & Image)',
        colors: 'Color Palette & Hex Codes',
        timestamp: 'Timestamp Generator',
        emojiCopyPaste: 'Emoji Copy & Paste Board',
        fonts: 'Fancy Font & Text Generator',
        coloredText: 'Colored Text Generator (ANSI)',
        markdown: 'Markdown Previewer',
        embedBuilder: 'Embed Builder',
        serverIcon: 'Server Icon Maker (512x512)',
        badgeMaker: 'Logo & Badge Maker',
        gifMaker: 'Discord GIF Maker (10MB)',
        gifCompressor: 'GIF Compressor (256 KiB)',
        videoCompressor: 'Video Compressor (10 MB)',
        fakeMessage: 'Fake Message Maker',
        snowflake: 'Snowflake Decoder',
        permissions: 'Permission Calculator (Roles & Bots)',
        username: 'Username Generator (Ideas)',
        bio: 'Bio Generator (Templates)',
        textFormatting: 'Text Formatting (Bold, Spoiler)',
      },
      allPresets: 'All Presets Hub (110+)',
      pfps: '👤 Discord PFPs & Avatars (50+)',
      animeBanners: 'Anime Banners & PFPs',
      gamingBanners: 'Gaming & Esports Sets',
      cyberpunkBanners: 'Cyberpunk & Neon Tech',
      darkBanners: 'Dark & Gothic Banners',
      aestheticBanners: 'Aesthetic & Pastel Vibes',
      roleIcons2D: '🎨 2D Server Role Icons',
      sizeGuide: 'Discord Size Cheat Sheet (2026)',
      gifGuide: 'Discord GIF Guide',
      blog: 'Creator Blog & Tutorials',
      langSwitch: {
        label: 'Versión en Español (ES)',
        href: '/es/',
      },
      sitemap: 'XML Sitemap',
      rss: 'RSS Feed',
      robots: 'Robots.txt',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      copyright: 'Copyright & DMCA',
      about: 'About the Project',
      contact: 'Contact & Feedback',
      supportKofi: 'Support on Ko-fi',
      followX: 'Follow @aiwithme0001',
      copyrightNotice: (year: number) => `© ${year} Discord Asset Studio. Not affiliated with or endorsed by Discord, Inc.`,
      verifiedDoc: 'Verified against official Discord documentation. 100% Client-Side.',
    },
  },
  es: {
    brand: {
      unofficialBadge: 'Herramientas No Oficiales',
      zeroUploads: 'Cero Subidas al Servidor',
    },
    nav: {
      tools: 'Herramientas',
      assets: 'Assets',
      resources: 'Recursos',
      company: 'Proyecto',
      searchPlaceholder: 'Buscar herramientas y assets...',
      quickLaunch: 'Utilidades de Inicio Rápido',
      guidesAndArticles: 'Guías y Artículos',
      colorPalette: 'Paleta de Color',
      supportKofi: 'Apoyar a Divy en Ko-fi',
      followX: 'Seguir a @aiwithme0001',
    },
    toolsMenu: {
      visualHeading: 'Visual y Perfil',
      chatHeading: 'Servidor y Chat',
      banner: { title: 'Creador de Banners', desc: 'Zonas seguras de servidor y perfil' },
      avatar: { title: 'Recortador de Avatares', desc: 'Máscara circular 512×512' },
      serverIcon: { title: 'Icono de Servidor', desc: 'Icono cuadrado redondeado 512×512' },
      badgeMaker: { title: 'Creador de Insignias', desc: 'Insignias de texto y emoji' },
      gifMaker: { title: 'Creador de GIF', desc: 'Vídeo a GIF bajo 10MB' },
      gifCompressor: { title: 'Compresor de GIF', desc: 'Reduce GIFs animados para Discord' },
      videoCompressor: { title: 'Compresor de Vídeo', desc: 'Reduce vídeo bajo 10MB' },
      fakeMessage: { title: 'Mensajes Falsos', desc: 'Capturas de chat ficticio' },
      snowflake: { title: 'Decodificador Snowflake', desc: 'ID a fecha, worker y proceso' },
      permissions: { title: 'Calculadora de Permisos', desc: 'Enteros de permisos de roles y bots' },
      username: { title: 'Generador de Nombres', desc: 'Ideas y nombres de 3–4 letras' },
      bio: { title: 'Generador de Bio', desc: 'Plantillas e ideas para copiar' },
      textFormatting: { title: 'Formato de Texto', desc: 'Negrita, spoiler, títulos y código' },
      colors: { title: 'Colores y Códigos Hex', desc: 'Paleta de fondo y blurple' },
      emojiCopyPaste: { title: 'Copiar y Pegar Emojis', desc: 'Tablero de emojis y kaomojis' },
      emoji: { title: 'Creador de Emojis', desc: '128×128 con vista previa a 32px' },
      sticker: { title: 'Creador de Stickers', desc: 'Foto a sticker de 320×320' },
      roleIcon: { title: 'Iconos de Rol', desc: 'Insignias de rol de 64×64' },
      imageCompressor: { title: 'Compresor de Imágenes', desc: 'Reduce archivos bajo 10 MB' },
      imageResizer: { title: 'Redimensionador de Imágenes', desc: 'Tamaños exactos de avatar, banner y emoji' },
      spoiler: { title: 'Creador de Spoilers', desc: 'Oculta texto y difumina imágenes' },
      timestamp: { title: 'Marcas de Tiempo', desc: 'Códigos dinámicos de tiempo <t:>' },
      fonts: { title: 'Generador de Fuentes', desc: 'Estilos de texto Unicode' },
      coloredText: { title: 'Texto de Colores', desc: 'Colores ANSI, negrita y subrayado' },
      markdown: { title: 'Previsualizador de Markdown', desc: 'Vista previa en vivo del formato' },
      embedBuilder: { title: 'Creador de Embeds', desc: 'JSON de webhook y vista previa en vivo' },
    },
    assetsMenu: {
      heading: 'Biblioteca Gratuita de Assets',
      badge: '110+',
      bannersTitle: 'Banners Animados y Temas',
      bannersDesc: '110+ sets combinados de banners y PFP',
      pfpsTitle: 'PFPs de Discord',
      pfpsDesc: '50+ fotos de perfil predefinidas',
      iconsTitle: 'Iconos 2D de Rol y Servidor',
      iconsDesc: 'Insignias e iconos nítidos',
    },
    resourcesMenu: {
      specsHeading: 'Guías y Especificaciones',
      sizesTitle: 'Guía de Tamaños de Discord',
      sizesDesc: 'Dimensiones y límites oficiales',
      gifTitle: 'Guía de GIF de Discord',
      gifDesc: 'Crea GIFs bajo 10MB',
      blogTitle: 'Todos los Artículos',
      blogDesc: 'Tutoriales e ideas de diseño',
      popularHeading: 'Tutoriales Populares',
      howToStickers: 'Cómo Crear Stickers',
      bannerIdeas: 'Ideas de Banners y Plantillas',
      animePfp: 'PFPs de Anime y Avatares',
      changeServerBanner: 'Cambiar Banner de Servidor',
    },
    companyMenu: {
      aboutTitle: 'Sobre Nosotros',
      aboutDesc: 'Nuestra misión y herramientas libres',
      contactTitle: 'Contacto',
      contactDesc: 'Sugerencias y reportes',
      privacy: 'Política de Privacidad',
      terms: 'Términos y Condiciones',
      copyright: 'Copyright y DMCA',
    },
    mobileNav: {
      toggleMenuAria: 'Abrir o cerrar menú de navegación',
      toolsAndGenerators: 'Herramientas y Generadores',
      assetLibrary: 'Biblioteca de Assets y Personalizador',
      assetLibraryBadge: '110+ Gratis',
      pfps: 'PFPs y Avatares de Discord',
      pfpsBadge: '50+ Gratis',
      tools: {
        imageResizer: 'Redimensionador de Imágenes',
        banner: 'Estudio de Banners',
        gifMaker: 'Creador de GIF',
        gifCompressor: 'Compresor de GIF',
        videoCompressor: 'Compresor de Vídeo',
        fakeMessage: 'Mensajes Falsos',
        snowflake: 'Decodificador Snowflake',
        permissions: 'Calculadora de Permisos',
        username: 'Generador de Nombres',
        bio: 'Generador de Biografías',
        textFormatting: 'Formato de Texto',
        avatar: 'Estudio de Avatares',
        serverIcon: 'Icono de Servidor',
        badgeMaker: 'Creador de Insignias y Logos',
        emoji: 'Creador de Emojis',
        sticker: 'Estudio de Stickers',
        roleIcon: 'Iconos de Rol (64×64)',
        imageCompressor: 'Compresor de Imágenes (Límite 10 MB)',
        spoiler: 'Creador de Spoilers (Texto e Imagen)',
        colors: 'Colores de Discord y Códigos Hex',
        timestamp: 'Marcas de Tiempo',
        emojiCopyPaste: 'Copiar y Pegar Emojis',
        fonts: 'Generador de Fuentes',
        coloredText: 'Texto en Color',
        markdown: 'Previsualizador de Markdown',
        embedBuilder: 'Creador de Embeds',
      },
      guidesAndArticles: 'Guías y Artículos',
      sizes: 'Tabla de Tamaños (2026)',
      gifGuide: 'Guía de GIF de Discord',
      blog: 'Blog y Guías de Creadores',
      colorPalette: 'Paleta de Colores',
      companyAndLegal: 'Proyecto y Legal',
      about: 'Sobre Nosotros',
      contact: 'Contacto',
      privacy: 'Política de Privacidad',
      terms: 'Términos',
      copyright: 'Copyright y DMCA',
      supportKofi: 'Apoyar a Divy en Ko-fi',
    },
    cookieBanner: {
      ariaLabel: 'Consentimiento de cookies',
      text: 'Usamos cookies analíticas respetuosas con la privacidad para entender cómo se usan estas herramientas. Tus imágenes nunca salen de tu dispositivo. Consulta nuestra',
      privacyLink: 'Política de Privacidad',
      decline: 'Rechazar',
      accept: 'Aceptar',
    },
    footer: {
      tagline: 'Herramientas gratuitas en el navegador para recortar, redimensionar y formatear tus assets de Discord. Todo se procesa en tu dispositivo sin subir imágenes a ningún servidor.',
      coreUtilities: 'Utilidades Principales',
      assetLibrary: 'Biblioteca de Assets',
      documentation: 'Documentación',
      trustGovernance: 'Confianza y Términos',
      tools: {
        imageResizer: 'Redimensionador de Imágenes Discord',
        emoji: 'Creador y Validador de Emojis',
        sticker: 'Compresor de Stickers (512 KiB)',
        banner: 'Banners de Perfil y Servidor',
        avatar: 'Optimizador de Avatares',
        roleIcon: 'Redimensionador de Iconos de Rol (64x64)',
        imageCompressor: 'Compresor de Imágenes (Menos de 10 MB)',
        spoiler: 'Creador de Spoilers (Texto e Imagen)',
        colors: 'Paleta de Colores y Códigos Hex',
        timestamp: 'Generador de Marcas de Tiempo',
        emojiCopyPaste: 'Tablero para Copiar y Pegar Emojis',
        fonts: 'Generador de Fuentes y Texto Elegante',
        coloredText: 'Generador de Texto en Color (ANSI)',
        markdown: 'Previsualizador de Markdown',
        embedBuilder: 'Creador de Embeds',
        serverIcon: 'Creador de Iconos de Servidor (512x512)',
        badgeMaker: 'Creador de Logos e Insignias',
        gifMaker: 'Creador de GIF para Discord (10MB)',
        gifCompressor: 'Compresor de GIF (256 KiB)',
        videoCompressor: 'Compresor de Vídeo (10 MB)',
        fakeMessage: 'Generador de Mensajes Falsos',
        snowflake: 'Decodificador Snowflake',
        permissions: 'Calculadora de Permisos (Roles y Bots)',
        username: 'Generador de Nombres de Usuario',
        bio: 'Generador de Biografías (Plantillas)',
        textFormatting: 'Formato de Texto (Negrita, Spoilers)',
      },
      allPresets: 'Todos los Presets (110+)',
      pfps: '👤 PFPs y Avatares de Discord (50+)',
      animeBanners: 'Banners y PFPs de Anime',
      gamingBanners: 'Sets de Gaming y Esports',
      cyberpunkBanners: 'Cyberpunk y Neón Tech',
      darkBanners: 'Banners Oscuros y Góticos',
      aestheticBanners: 'Estética Pastel y Vibes',
      roleIcons2D: '🎨 Iconos 2D de Rol y Servidor',
      sizeGuide: 'Tabla de Tamaños de Discord (2026)',
      gifGuide: 'Guía de GIF de Discord',
      blog: 'Blog y Tutoriales de Creadores',
      langSwitch: {
        label: 'English Version (EN)',
        href: '/',
      },
      sitemap: 'Mapa del Sitio XML',
      rss: 'Feed RSS',
      robots: 'Robots.txt',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Servicio',
      copyright: 'Copyright y DMCA',
      about: 'Sobre el Proyecto',
      contact: 'Contacto y Sugerencias',
      supportKofi: 'Apoyar en Ko-fi',
      followX: 'Seguir a @aiwithme0001',
      copyrightNotice: (year: number) => `© ${year} Discord Asset Studio. No afiliado ni respaldado por Discord, Inc.`,
      verifiedDoc: 'Verificado con la documentación oficial de Discord. 100% en el cliente.',
    },
  },
};
