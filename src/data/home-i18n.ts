/**
 * home-i18n.ts — shared EN/ES content for the homepage.
 *
 * FAQ entries live here so the visible <details> list (rendered in
 * HomeContent.astro) and the FAQPage JSON-LD (built in each index page) draw
 * from a single source per language — they can never drift apart.
 */

export type Lang = 'en' | 'es';

export interface HomeFaq {
  q: string;
  a: string;
}

export const homeFaqs: Record<Lang, HomeFaq[]> = {
  en: [
    {
      q: 'Why did Discord reject my custom emoji under 256 KB?',
      a: 'Discord enforces a strict binary limit of 256 KiB (262,144 bytes). Operating systems frequently display file sizes in decimal kilobytes (1 KB = 1,000 bytes). An emoji showing as 256 KB on your computer might actually be 262,500 bytes, causing Discord to reject it. Discord Asset Studio measures the exact encoded Blob byte count.'
    },
    {
      q: 'What are the exact dimensions for Discord server banners?',
      a: 'Discord recommends a minimum size of 960x540 pixels with a 16:9 aspect ratio, though 1920x1080 is commonly used. Remember that Discord overlays channel headers and navigation across the top 48 pixels of the banner on desktop, so important content should remain below that zone.'
    },
    {
      q: 'Are my images uploaded to any server when I use this tool?',
      a: 'No. Discord Asset Studio runs 100% client-side in your browser. All resizing, cropping, and compression happens locally inside your device memory using Web Workers and the HTML5 Canvas API. No media or filenames are ever sent to an external server.'
    },
    {
      q: 'What are the rules for animated Discord stickers?',
      a: 'Discord custom stickers must be exactly 320x320 pixels and under 512 KiB (524,288 bytes). Animated stickers must use APNG (Animated PNG), have a maximum duration of 5 seconds, and run at 60 frames per second or lower.'
    },
    {
      q: 'What is the correct Discord avatar size, and can I add avatar decorations?',
      a: 'Discord avatars display best at 512x512 pixels and are cropped to a circle in the client. Our avatar cropper previews the exact circular mask before you export. Avatar decorations are separate transparent PNG overlays that frame your profile picture — the customizer lets you preview popular decoration styles live on your avatar so you can see the framing before you commit.'
    },
    {
      q: 'How do I make an animated Discord banner GIF that stays under 10MB?',
      a: "Discord profile and server banners use a 960x540 (16:9) canvas, and animated banner GIFs must stay under Discord's 10MB Nitro limit. The studio renders a live file-size indicator while you compose, then auto-downsamples the export so every animated Discord banner is guaranteed to land under the 10.0MB ceiling without freezing your browser."
    },
    {
      q: 'Can I convert a video into a Discord GIF?',
      a: 'Yes. The Discord GIF maker converts short video clips into looping GIFs sized and compressed for Discord. Because everything runs client-side in a Web Worker, your video is never uploaded — the conversion, trimming, and compression to fit the Discord GIF size limit all happen locally on your device.'
    },
    {
      q: 'How do I find and copy my Discord profile theme color hex code?',
      a: 'Discord profile theme colors are stored as hex codes. When you drop artwork into the customizer, it samples the dominant background and accent colors directly from the image on the canvas and gives you a one-click Copy Discord Nitro Theme Hex button, so your custom Discord background and banner match perfectly.'
    },
    {
      q: 'What size should a Discord role icon be?',
      a: 'Discord role icons render at 64x64 pixels and should stay under 256 KB. The role icon maker formats a crisp circular badge at the exact 64x64 size, and the exporter reports the encoded file size so you know it will be accepted before you upload it to your server settings.'
    }
  ],
  es: [
    {
      q: '¿Por qué Discord rechazó mi emoji personalizado de menos de 256 KB?',
      a: 'Discord impone un límite binario estricto de 256 KiB (262,144 bytes). Los sistemas operativos suelen mostrar los tamaños en kilobytes decimales (1 KB = 1,000 bytes). Un emoji que aparece como 256 KB en tu computadora puede tener en realidad 262,500 bytes, lo que hace que Discord lo rechace. Discord Asset Studio mide el recuento exacto de bytes del Blob codificado.'
    },
    {
      q: '¿Cuáles son las dimensiones exactas de los banners de servidor de Discord?',
      a: 'Discord recomienda un tamaño mínimo de 960x540 píxeles con relación de aspecto 16:9, aunque 1920x1080 es de uso común. Recuerda que Discord superpone los encabezados de canal y la navegación sobre los 48 píxeles superiores del banner en escritorio, así que el contenido importante debe quedar por debajo de esa zona.'
    },
    {
      q: '¿Se suben mis imágenes a algún servidor cuando uso esta herramienta?',
      a: 'No. Discord Asset Studio funciona 100% del lado del cliente en tu navegador. Todo el redimensionado, recorte y compresión ocurre localmente en la memoria de tu dispositivo mediante Web Workers y la API HTML5 Canvas. Nunca se envía ningún archivo ni nombre de archivo a un servidor externo.'
    },
    {
      q: '¿Cuáles son las reglas para los stickers animados de Discord?',
      a: 'Los stickers personalizados de Discord deben medir exactamente 320x320 píxeles y pesar menos de 512 KiB (524,288 bytes). Los stickers animados deben usar APNG (PNG animado), tener una duración máxima de 5 segundos y funcionar a 60 fotogramas por segundo o menos.'
    },
    {
      q: '¿Cuál es el tamaño correcto de un avatar de Discord y puedo añadir decoraciones?',
      a: 'Los avatares de Discord se ven mejor a 512x512 píxeles y el cliente los recorta en círculo. Nuestro recortador de avatares muestra la máscara circular exacta antes de exportar. Las decoraciones de avatar son superposiciones PNG transparentes que enmarcan tu foto de perfil: el personalizador te permite previsualizar estilos populares de decoración en vivo sobre tu avatar para ver el encuadre antes de decidir.'
    },
    {
      q: '¿Cómo hago un banner GIF animado de Discord que se mantenga por debajo de 10MB?',
      a: 'Los banners de perfil y de servidor de Discord usan un lienzo de 960x540 (16:9), y los banners GIF animados deben mantenerse por debajo del límite de 10MB de Nitro. El estudio muestra un indicador de tamaño de archivo en vivo mientras compones y luego reduce automáticamente la exportación para que todo banner animado de Discord quede garantizado por debajo del techo de 10.0MB sin congelar tu navegador.'
    },
    {
      q: '¿Puedo convertir un video en un GIF de Discord?',
      a: 'Sí. El creador de GIF de Discord convierte clips de video cortos en GIF en bucle, dimensionados y comprimidos para Discord. Como todo funciona del lado del cliente en un Web Worker, tu video nunca se sube: la conversión, el recorte y la compresión para ajustarse al límite de tamaño de GIF de Discord ocurren localmente en tu dispositivo.'
    },
    {
      q: '¿Cómo encuentro y copio el código hex del color de tema de mi perfil de Discord?',
      a: 'Los colores de tema del perfil de Discord se guardan como códigos hex. Cuando sueltas una imagen en el personalizador, este muestrea los colores de fondo y de acento dominantes directamente de la imagen en el lienzo y te da un botón de un clic para copiar el hex del tema Nitro de Discord, así tu fondo y banner personalizados combinan perfectamente.'
    },
    {
      q: '¿Qué tamaño debe tener un icono de rol de Discord?',
      a: 'Los iconos de rol de Discord se muestran a 64x64 píxeles y deben pesar menos de 256 KB. El creador de iconos de rol formatea una insignia circular nítida al tamaño exacto de 64x64, y el exportador informa el tamaño del archivo codificado para que sepas que será aceptado antes de subirlo a la configuración de tu servidor.'
    }
  ]
};
