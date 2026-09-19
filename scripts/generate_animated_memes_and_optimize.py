import os, math
from PIL import Image, ImageDraw, ImageFilter, ImageEnhance

out_banners_dir = 'public/assets/animated'
out_pfps_dir = 'public/assets/pfps'

# 1. Animate Minecraft Sunset Cat (pin6)
base_cat = Image.open('/tmp/pins_mp4/pin6.jpg').convert('RGB')
# Crop/scale for banner 720x300
w, h = base_cat.size
# For 720x300 (ratio 2.4):
target_w, target_h = 720, 300
scale = max(target_w / w, target_h / h)
nw, nh = int(w * scale), int(h * scale)
scaled_cat = base_cat.resize((nw, nh), Image.Resampling.LANCZOS)
left = (nw - target_w) // 2
top = (nh - target_h) // 2
banner_base = scaled_cat.crop((left, top, left + target_w, top + target_h))

# For 320x320 PFP:
scale_p = max(320 / w, 320 / h)
nw_p, nh_p = int(w * scale_p), int(h * scale_p)
scaled_p = base_cat.resize((nw_p, nh_p), Image.Resampling.LANCZOS)
# Focus on cat's face (lower-left quadrant in original)
left_p = int(nw_p * 0.1)
top_p = int(nh_p * 0.3)
pfp_base = scaled_p.crop((left_p, top_p, left_p + 320, top_p + 320))

banner_frames = []
pfp_frames = []
num_frames = 24

for i in range(num_frames):
    t = i / num_frames
    phase = math.sin(2 * math.pi * t)
    
    # Banner frame
    bf = banner_base.copy()
    overlay = Image.new('RGBA', (target_w, target_h), (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    
    # Sun flare pulse at sun pos (approx x=400, y=140 in banner)
    sun_x, sun_y = 405, 145
    pulse_r = int(60 + 20 * phase)
    draw.ellipse([sun_x - pulse_r, sun_y - pulse_r, sun_x + pulse_r, sun_y + pulse_r],
                 fill=(255, 220, 100, int(35 + 20 * phase)))
    
    # Floating golden dust motes
    for m in range(12):
        mx = (int(m * 65 + t * 90)) % target_w
        my = int(120 + 70 * math.sin(m * 1.5 + t * 2 * math.pi))
        msize = 2 if m % 2 == 0 else 3
        draw.ellipse([mx - msize, my - msize, mx + msize, my + msize], fill=(255, 240, 180, 160))
        
    bf.paste(Image.alpha_composite(bf.convert('RGBA'), overlay).convert('RGB'))
    banner_frames.append(bf)
    
    # PFP frame
    pf = pfp_base.copy()
    p_overlay = Image.new('RGBA', (320, 320), (0, 0, 0, 0))
    p_draw = ImageDraw.Draw(p_overlay)
    # Subtle eye sparkle on cat
    eye_x, eye_y = 135, 150
    er = int(3 + 1.5 * phase)
    p_draw.ellipse([eye_x - er, eye_y - er, eye_x + er, eye_y + er], fill=(255, 255, 255, int(120 + 80 * phase)))
    pf.paste(Image.alpha_composite(pf.convert('RGBA'), p_overlay).convert('RGB'))
    pfp_frames.append(pf)

banner_cat_path = os.path.join(out_banners_dir, 'minecraft-sunset-staring-cat.webp')
banner_frames[0].save(banner_cat_path, format='WEBP', save_all=True, append_images=banner_frames[1:], duration=70, loop=0, optimize=True)
pfp_cat_path = os.path.join(out_pfps_dir, 'minecraft-sunset-cat-animated.webp')
pfp_frames[0].save(pfp_cat_path, format='WEBP', save_all=True, append_images=pfp_frames[1:], duration=70, loop=0, optimize=True)
print(f'✅ Saved Minecraft Cat: Banner {os.path.getsize(banner_cat_path)/1024:.1f} KB, PFP {os.path.getsize(pfp_cat_path)/1024:.1f} KB')

# 2. Animate Rainbow Unicorn Meme (pin7)
base_uni = Image.open('/tmp/pins_mp4/pin7.jpg').convert('RGB')
w, h = base_uni.size
scale_u = max(720 / w, 300 / h)
nw_u, nh_u = int(w * scale_u), int(h * scale_u)
scaled_u = base_uni.resize((nw_u, nh_u), Image.Resampling.LANCZOS)
left_u = (nw_u - 720) // 2
top_u = (nh_u - 300) // 2
banner_uni_base = scaled_u.crop((left_u, top_u, left_u + 720, top_u + 300))

uni_frames = []
for i in range(num_frames):
    t = i / num_frames
    phase = math.sin(2 * math.pi * t)
    
    # Slight bobbing
    dy = int(3 * math.sin(2 * math.pi * t * 2))
    uf = banner_uni_base.copy()
    overlay = Image.new('RGBA', (720, 300), (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    
    # Twinkling sparkle stars across rainbow
    stars = [(180, 70), (280, 45), (420, 40), (520, 75), (350, 110)]
    for idx, (sx, sy) in enumerate(stars):
        s_phase = math.sin(2 * math.pi * (t + idx * 0.2))
        if s_phase > 0:
            sr = int(3 + 3 * s_phase)
            draw.ellipse([sx - sr, sy - sr, sx + sr, sy + sr], fill=(255, 255, 255, int(180 * s_phase)))
            draw.line([sx - sr * 2, sy, sx + sr * 2, sy], fill=(255, 255, 200, int(150 * s_phase)), width=1)
            draw.line([sx, sy - sr * 2, sx, sy + sr * 2], fill=(255, 255, 200, int(150 * s_phase)), width=1)
            
    uf.paste(Image.alpha_composite(uf.convert('RGBA'), overlay).convert('RGB'))
    uni_frames.append(uf)

banner_uni_path = os.path.join(out_banners_dir, 'rainbow-unicorn-meadow-meme.webp')
uni_frames[0].save(banner_uni_path, format='WEBP', save_all=True, append_images=uni_frames[1:], duration=70, loop=0, optimize=True)
print(f'✅ Saved Rainbow Unicorn Meme: Banner {os.path.getsize(banner_uni_path)/1024:.1f} KB')

# 3. Optimize heavy webps (>1MB) down to crisp ~500-800KB
heavy_banners = [
    ('lone-samurai-purple-blossoms.webp', 30),
    ('celestial-butterfly-flower-meadow.webp', 30),
    ('alpine-warrior-mountain-meadow.webp', 30),
    ('kawaii-panda-guitar-stroll.webp', 32)
]

for bname, target_frames in heavy_banners:
    bp = os.path.join(out_banners_dir, bname)
    if os.path.exists(bp):
        img = Image.open(bp)
        n = getattr(img, 'n_frames', 1)
        if n > target_frames:
            step = n / target_frames
            sampled = []
            for fi in range(target_frames):
                img.seek(int(fi * step))
                sampled.append(img.copy())
            sampled[0].save(bp, format='WEBP', save_all=True, append_images=sampled[1:], duration=80, loop=0, optimize=True)
            print(f'⚡ Optimized {bname}: {os.path.getsize(bp)/1024:.1f} KB ({target_frames} frames)')

print("Complete!")
