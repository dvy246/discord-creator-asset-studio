import os, math, subprocess
from PIL import Image, ImageEnhance

out_banners_dir = 'public/assets/animated'
out_pfps_dir = 'public/assets/pfps'
os.makedirs(out_banners_dir, exist_ok=True)
out_pfps_dir = 'public/assets/pfps'
os.makedirs(out_pfps_dir, exist_ok=True)

# List of pins to convert:
# (slug, src, ss, dur, banner_vf, pfp_vf)
tasks = [
    (
        'celestial-libra-blade-maiden',
        '/tmp/pins_batch4/pin_1.mp4',
        '00:00:01',
        3.0,
        'fps=16,scale=720:300:force_original_aspect_ratio=increase,crop=720:300',
        'fps=16,scale=320:320:force_original_aspect_ratio=increase,crop=320:320:(in_w-320)/2:(in_h-320)/2'
    ),
    (
        'crimson-sun-samurai-twilight',
        '/tmp/pins_batch4/pin_2.mp4',
        '00:00:01',
        3.0,
        'fps=16,scale=720:1280,crop=720:300:0:300',
        'fps=16,scale=720:1280,crop=400:400:160:250,scale=320:320'
    ),
    (
        'spiderman-sunset-skyline-romance',
        '/tmp/pins_batch4/pin_3.mp4',
        '00:00:02',
        3.0,
        'fps=16,scale=720:1280,crop=720:300:0:400',
        'fps=16,scale=720:1280,crop=450:450:135:360,scale=320:320'
    ),
    (
        'cyber-valkyrie-neo-tokyo',
        '/tmp/pins_batch4/pin_4.mp4',
        '00:00:01',
        3.0,
        'fps=16,scale=720:300:force_original_aspect_ratio=increase,crop=720:300',
        'fps=16,scale=320:320:force_original_aspect_ratio=increase,crop=320:320'
    ),
    (
        'kratos-blades-of-chaos-blizzard',
        '/tmp/pins_batch4/pin_6.mp4',
        '00:00:01',
        3.0,
        'fps=16,scale=720:300:force_original_aspect_ratio=increase,crop=720:300',
        'fps=16,scale=320:320:force_original_aspect_ratio=increase,crop=320:320'
    ),
    (
        'jon-snow-battle-bastards-charge',
        '/tmp/pins_batch4/pin_7.mp4',
        '00:00:01',
        3.0,
        'fps=16,scale=720:1280,crop=720:300:0:350',
        'fps=16,scale=720:1280,crop=450:450:135:300,scale=320:320'
    ),
    (
        'night-king-ice-spear-dragon',
        '/tmp/pins_batch4/pin_8.mp4',
        '00:00:01',
        3.0,
        'fps=16,scale=720:1280,crop=720:300:0:400',
        'fps=16,scale=720:1280,crop=450:450:135:350,scale=320:320'
    ),
    (
        'amazing-spiderman-spire-golden-dusk',
        '/tmp/pins_batch4/pin_9.mp4',
        '00:00:02',
        3.0,
        'fps=16,scale=720:1280,crop=720:300:0:150',
        'fps=16,scale=720:1280,crop=450:450:135:100,scale=320:320'
    )
]

for slug, src, ss, dur, vf_b, vf_p in tasks:
    # 1. Banner
    b_out = os.path.join(out_banners_dir, f'{slug}.webp')
    pat_b = f'/tmp/b4_{slug}_%03d.png'
    subprocess.run([
        'ffmpeg', '-y', '-ss', ss, '-i', src, '-t', str(dur),
        '-vf', vf_b, pat_b
    ], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    
    frames_b = []
    pref_b = f'b4_{slug}_'
    for f in sorted(os.listdir('/tmp')):
        if f.startswith(pref_b) and f.endswith('.png'):
            fp = os.path.join('/tmp', f)
            frames_b.append(Image.open(fp).copy())
            os.remove(fp)
    if frames_b:
        frames_b[0].save(
            b_out, format='WEBP', save_all=True, append_images=frames_b[1:],
            duration=62, loop=0, optimize=True
        )
        print(f'✅ Banner: {slug}.webp ({len(frames_b)} frames, {os.path.getsize(b_out)/1024:.1f} KB)')

    # 2. PFP
    p_out = os.path.join(out_pfps_dir, f'{slug}-animated.webp')
    pat_p = f'/tmp/p4_{slug}_%03d.png'
    subprocess.run([
        'ffmpeg', '-y', '-ss', ss, '-i', src, '-t', str(dur),
        '-vf', vf_p, pat_p
    ], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    
    frames_p = []
    pref_p = f'p4_{slug}_'
    for f in sorted(os.listdir('/tmp')):
        if f.startswith(pref_p) and f.endswith('.png'):
            fp = os.path.join('/tmp', f)
            frames_p.append(Image.open(fp).copy())
            os.remove(fp)
    if frames_p:
        frames_p[0].save(
            p_out, format='WEBP', save_all=True, append_images=frames_p[1:],
            duration=62, loop=0, optimize=True
        )
        print(f'✅ PFP: {slug}-animated.webp ({len(frames_p)} frames, {os.path.getsize(p_out)/1024:.1f} KB)')

# 3. Handle Pin 5 (Goku static 4K -> Animated Banner & PFP with aura pulse)
slug_goku = 'ultra-instinct-goku-focus-aura'
goku_src = '/tmp/pins_batch4/pin_5.jpg'
im_goku = Image.open(goku_src).convert('RGB')
# Crop to 16:9 banner: 2614x1470 -> scale to 720x300
b_goku = im_goku.resize((720, 405), Image.Resampling.LANCZOS)
b_goku = b_goku.crop((0, 52, 720, 352)) # 720x300

# Crop to 1:1 PFP centered on Goku's chest/head
w, h = im_goku.size
size = min(w, h)
p_goku = im_goku.crop(((w-size)//2, 0, (w+size)//2, size)).resize((320, 320), Image.Resampling.LANCZOS)

# Generate 32 frames of subtle breathing / silver aura pulsation
frames_gb = []
frames_gp = []
for f_idx in range(32):
    # Sine wave pulse factor between 0.95 and 1.08
    theta = 2 * math.pi * f_idx / 32
    factor = 1.0 + 0.08 * math.sin(theta)
    
    # Banner frame
    enh_b = ImageEnhance.Brightness(b_goku).enhance(factor)
    frames_gb.append(enh_b)
    
    # PFP frame
    enh_p = ImageEnhance.Brightness(p_goku).enhance(factor)
    frames_gp.append(enh_p)

b_goku_out = os.path.join(out_banners_dir, f'{slug_goku}.webp')
p_goku_out = os.path.join(out_pfps_dir, f'{slug_goku}-animated.webp')

frames_gb[0].save(b_goku_out, format='WEBP', save_all=True, append_images=frames_gb[1:], duration=65, loop=0, optimize=True)
frames_gp[0].save(p_goku_out, format='WEBP', save_all=True, append_images=frames_gp[1:], duration=65, loop=0, optimize=True)
print(f'✅ Goku Banner: {slug_goku}.webp ({len(frames_gb)} frames, {os.path.getsize(b_goku_out)/1024:.1f} KB)')
print(f'✅ Goku PFP: {slug_goku}-animated.webp ({len(frames_gp)} frames, {os.path.getsize(p_goku_out)/1024:.1f} KB)')

print("Batch 4 conversion completed successfully!")
