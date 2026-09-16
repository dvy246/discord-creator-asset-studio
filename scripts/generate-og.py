import math
from PIL import Image, ImageDraw, ImageFont

def create_og_image():
    width, height = 1200, 630
    
    # 1. Base image with Discord Blurple to Dark Navy gradient
    img = Image.new("RGBA", (width, height), (25, 37, 56, 255))
    draw = ImageDraw.Draw(img)
    
    # Create smooth diagonal gradient
    # Blurple: (88, 101, 242) -> Deep Studio Navy: (18, 25, 38)
    for y in range(height):
        for x in range(0, width, 4): # step 4 for fast fill then we can smooth or fill boxes
            factor = (x / width) * 0.4 + (y / height) * 0.6
            r = int(88 * (1 - factor) + 18 * factor)
            g = int(101 * (1 - factor) + 25 * factor)
            b = int(242 * (1 - factor) + 38 * factor)
            draw.rectangle([x, y, x + 3, y], fill=(r, g, b, 255))
            
    # Add an ambient glow in top-left
    glow_center_x, glow_center_y = 300, 150
    for radius in range(350, 0, -10):
        alpha = int(25 * (1 - radius / 350))
        draw.ellipse(
            [glow_center_x - radius, glow_center_y - radius, glow_center_x + radius, glow_center_y + radius],
            outline=(88, 225, 255, alpha),
            width=5
        )

    # Frame Border
    draw.rounded_rectangle([24, 24, width - 24, height - 24], radius=24, outline=(102, 163, 191, 100), width=3)

    # Corner safe-zone reticles
    reticle_color = (255, 255, 255, 140)
    # Top-Left
    draw.line([(48, 48), (80, 48)], fill=reticle_color, width=3)
    draw.line([(48, 48), (48, 80)], fill=reticle_color, width=3)
    # Top-Right
    draw.line([(width - 80, 48), (width - 48, 48)], fill=reticle_color, width=3)
    draw.line([(width - 48, 48), (width - 48, 80)], fill=reticle_color, width=3)
    # Bottom-Left
    draw.line([(48, height - 48), (80, height - 48)], fill=reticle_color, width=3)
    draw.line([(48, height - 48), (48, height - 80)], fill=reticle_color, width=3)
    # Bottom-Right
    draw.line([(width - 80, height - 48), (width - 48, height - 48)], fill=reticle_color, width=3)
    draw.line([(width - 48, height - 48), (width - 48, height - 80)], fill=reticle_color, width=3)

    # Draw Badge
    badge_x, badge_y = 80, 70
    draw.rounded_rectangle([badge_x, badge_y, badge_x + 360, badge_y + 40], radius=20, fill=(32, 46, 66, 220), outline=(102, 163, 191, 120), width=1)
    # Green status dot
    draw.ellipse([badge_x + 18, badge_y + 14, badge_x + 30, badge_y + 26], fill=(13, 148, 136, 255))
    
    # Try system fonts
    font_large = None
    font_title = None
    font_subtitle = None
    font_badge = None
    
    for font_path in [
        "/System/Library/Fonts/SFProDisplay-Bold.otf",
        "/System/Library/Fonts/SFPro-Bold.ttf",
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
        "/System/Library/Fonts/Supplemental/HelveticaBold.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
        "/System/Library/Fonts/Supplemental/Arial.ttf"
    ]:
        try:
            font_title = ImageFont.truetype(font_path, 64)
            font_large = ImageFont.truetype(font_path, 40)
            font_subtitle = ImageFont.truetype(font_path, 26)
            font_badge = ImageFont.truetype(font_path, 16)
            break
        except Exception:
            continue
            
    if font_title is None:
        font_title = ImageFont.load_default()
        font_large = font_title
        font_subtitle = font_title
        font_badge = font_title

    # Badge text
    draw.text((badge_x + 40, badge_y + 11), "100% CLIENT-SIDE • ZERO UPLOADS", fill=(88, 225, 255, 255), font=font_badge)

    # Mascot Clyde Icon container
    clyde_box_x, clyde_box_y = 80, 140
    box_size = 110
    draw.rounded_rectangle([clyde_box_x, clyde_box_y, clyde_box_x + box_size, clyde_box_y + box_size], radius=28, fill=(88, 101, 242, 255), outline=(255, 255, 255, 160), width=2)
    
    # Clyde Eyes and Face inside box
    cx, cy = clyde_box_x + box_size // 2, clyde_box_y + box_size // 2
    # Clyde head shape approximation
    draw.rounded_rectangle([cx - 36, cy - 24, cx + 36, cy + 24], radius=16, fill=(255, 255, 255, 255))
    draw.polygon([(cx - 32, cy - 24), (cx - 20, cy - 36), (cx - 10, cy - 24)], fill=(255, 255, 255, 255))
    draw.polygon([(cx + 32, cy - 24), (cx + 20, cy - 36), (cx + 10, cy - 24)], fill=(255, 255, 255, 255))
    # Eyes
    draw.ellipse([cx - 20, cy - 8, cx - 8, cy + 8], fill=(88, 101, 242, 255))
    draw.ellipse([cx + 8, cy - 8, cx + 20, cy + 8], fill=(88, 101, 242, 255))

    # Main Title
    draw.text((clyde_box_x + box_size + 30, clyde_box_y + 8), "Discord Creator", fill=(255, 255, 255, 255), font=font_title)
    draw.text((clyde_box_x + box_size + 30, clyde_box_y + 75), "Asset Studio", fill=(88, 225, 255, 255), font=font_title)

    # Subtitle
    sub_y = 290
    draw.text((80, sub_y), "Verified Sizing & Local Validation Suite for Creators", fill=(242, 239, 231, 255), font=font_large)
    draw.text((80, sub_y + 55), "Pixel-perfect specs, binary 256 KiB limits, safe zones & lossless conversion", fill=(200, 223, 219, 240), font=font_subtitle)
    draw.text((80, sub_y + 95), "for Emojis, Stickers, Profile & Server Banners, Avatars, and Role Icons.", fill=(200, 223, 219, 240), font=font_subtitle)

    # 4 Feature Pills at bottom
    pills = [
        ("😀 Emojis (128px • 256 KiB)", 80),
        ("🏷️ Stickers (320px • 512 KiB)", 350),
        ("🖼️ Banners (48px Safe Zone)", 645),
        ("👤 Avatars (512px Circle)", 925)
    ]
    pill_y = 510
    for text, px in pills:
        draw.rounded_rectangle([px, pill_y, px + 250, pill_y + 50], radius=12, fill=(26, 38, 56, 230), outline=(102, 163, 191, 100), width=1)
        draw.text((px + 14, pill_y + 16), text, fill=(255, 255, 255, 240), font=font_badge)

    # Save PNG and JPEG
    rgb_img = img.convert("RGB")
    rgb_img.save("public/og-image.jpg", quality=95)
    img.save("public/og-image.png")
    print("Successfully generated public/og-image.png and public/og-image.jpg")

if __name__ == "__main__":
    create_og_image()
