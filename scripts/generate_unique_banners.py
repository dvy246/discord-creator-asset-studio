import math, random, os
from PIL import Image, ImageDraw, ImageFilter

out_dir = 'public/assets/animated'
os.makedirs(out_dir, exist_ok=True)
W, H = 720, 300

# =========================================================================
# 1. Celestial Shinkai: Meteor Shower Sky
# =========================================================================
def make_celestial_meteor():
    frames = []
    num_frames = 30
    random.seed(101)
    stars = [(random.randint(0, W), random.randint(0, H - 40), random.uniform(0.5, 2.0), random.uniform(0, math.pi*2)) for _ in range(140)]
    meteors = [
        {'start_x': 620, 'start_y': 20, 'speed': 28, 'angle': math.radians(220), 'len': 100, 'delay': 0},
        {'start_x': 480, 'start_y': 15, 'speed': 32, 'angle': math.radians(225), 'len': 120, 'delay': 11},
        {'start_x': 690, 'start_y': 45, 'speed': 24, 'angle': math.radians(215), 'len': 80, 'delay': 21}
    ]
    for f in range(num_frames):
        im = Image.new('RGB', (W, H))
        draw = ImageDraw.Draw(im)
        # Sky gradient
        for y in range(H):
            ratio = y / H
            r = int(12 + ratio * 32)
            g = int(8 + ratio * 18)
            b = int(32 + ratio * 65)
            draw.line([(0, y), (W, y)], fill=(r, g, b))
        # Crescent Moon
        mx, my, mr = 570, 70, 36
        for gr in range(55, 34, -4):
            alpha = int((55 - gr) * 3)
            draw.ellipse([mx - gr, my - gr, mx + gr, my + gr], fill=(255, 245, 210))
        draw.ellipse([mx - mr, my - mr, mx + mr, my + mr], fill=(255, 252, 235))
        draw.ellipse([mx - mr + 13, my - mr - 5, mx + mr + 8, my + mr - 2], fill=(int(12 + 70/H*32), int(8 + 70/H*18), int(32 + 70/H*65)))
        # Twinkling Stars
        for sx, sy, sz, sphase in stars:
            tw = (math.sin(f / num_frames * math.pi * 4 + sphase) + 1) / 2
            b_val = int(150 + tw * 105)
            draw.ellipse([sx - sz, sy - sz, sx + sz, sy + sz], fill=(b_val, b_val, 255))
        # Meteors
        for m in meteors:
            step = (f - m['delay']) % num_frames
            if 0 <= step < 10:
                dist = step * m['speed']
                hx = m['start_x'] + math.cos(m['angle']) * dist
                hy = m['start_y'] + math.sin(m['angle']) * dist
                tx = hx - math.cos(m['angle']) * m['len']
                ty = hy - math.sin(m['angle']) * m['len']
                draw.line([(tx, ty), (hx, hy)], fill=(210, 235, 255), width=2)
                draw.ellipse([hx - 3, hy - 3, hx + 3, hy + 3], fill=(255, 255, 255))
        # Mountains
        m_pts = [(0, H)]
        for x in range(0, W + 1, 10):
            my_val = H - 55 - math.sin(x * 0.008) * 25 - math.cos(x * 0.02) * 15
            m_pts.append((x, int(my_val)))
        m_pts.append((W, H))
        draw.polygon(m_pts, fill=(5, 5, 14))
        # Torii gate silhouette (x=280)
        tx, ty = 280, H - 75
        draw.rectangle([tx - 2, ty - 35, tx + 2, ty], fill=(2, 2, 8))
        draw.rectangle([tx + 28, ty - 35, tx + 32, ty], fill=(2, 2, 8))
        draw.rectangle([tx - 10, ty - 36, tx + 40, ty - 31], fill=(2, 2, 8))
        draw.rectangle([tx - 6, ty - 26, tx + 36, ty - 23], fill=(2, 2, 8))
        # Drifting stardust particles
        for p_idx in range(25):
            px = (p_idx * 31 + f * 3) % W
            py = (H - 40 - (p_idx * 17 + math.sin(f / num_frames * math.pi * 2 + p_idx) * 15)) % (H - 30)
            draw.ellipse([px - 1, py - 1, px + 1, py + 1], fill=(190, 225, 255))
        frames.append(im)
    out = os.path.join(out_dir, 'celestial-meteor-shinkai.webp')
    frames[0].save(out, format='WEBP', save_all=True, append_images=frames[1:], optimize=True, duration=50, loop=0)
    print(f'✅ Generated {out}: {len(frames)} frames, {os.path.getsize(out)} bytes')

# =========================================================================
# 2. Neon Shibuya: Cyberpunk Rain Mirage
# =========================================================================
def make_neon_shibuya():
    frames = []
    num_frames = 24
    random.seed(202)
    rain_drops = [(random.randint(0, W + 100), random.randint(0, H), random.randint(15, 30)) for _ in range(100)]
    for f in range(num_frames):
        im = Image.new('RGB', (W, H))
        draw = ImageDraw.Draw(im)
        # Dark Cyber City Background
        for y in range(H):
            ratio = y / H
            draw.line([(0, y), (W, y)], fill=(int(6 + ratio*8), int(8 + ratio*14), int(16 + ratio*26)))
        # City Skyline Silhouettes with glowing windows
        draw.rectangle([120, 80, 220, H], fill=(10, 12, 20))
        draw.rectangle([210, 50, 340, H], fill=(14, 16, 26))
        draw.rectangle([330, 90, 440, H], fill=(11, 13, 22))
        draw.rectangle([430, 40, 560, H], fill=(15, 18, 30))
        draw.rectangle([550, 70, 680, H], fill=(12, 14, 24))
        # Animated Neon Signs (Flickering & Pulsing)
        flicker1 = (math.sin(f * 0.8) + 1) / 2
        flicker2 = (math.cos(f * 0.6) + 1) / 2
        cyan_glow = (int(6 + flicker1 * 30), int(182 + flicker1 * 73), int(212 + flicker1 * 43))
        pink_glow = (int(244 + flicker2 * 11), int(63 + flicker2 * 50), int(148 + flicker2 * 80))
        # Cyber Neon Billboard 1 (Cyan)
        draw.rectangle([250, 80, 310, 160], outline=cyan_glow, width=2)
        draw.text((260, 90), '電', fill=cyan_glow)
        draw.text((260, 110), '気', fill=cyan_glow)
        draw.text((260, 130), '街', fill=cyan_glow)
        # Cyber Neon Billboard 2 (Hot Pink)
        draw.rectangle([470, 70, 530, 150], outline=pink_glow, width=2)
        draw.text((480, 80), '夜', fill=pink_glow)
        draw.text((480, 100), '光', fill=pink_glow)
        draw.text((480, 120), '城', fill=pink_glow)
        # Wet Asphalt Street Reflection (Bottom 80px)
        for y in range(H - 80, H):
            reflect_ratio = (y - (H - 80)) / 80
            draw.line([(0, y), (W, y)], fill=(int(12 + reflect_ratio*12), int(14 + reflect_ratio*18), int(26 + reflect_ratio*30)))
        # Neon Reflections on Wet Road
        draw.ellipse([240, H - 60 + int(math.sin(f)*3), 320, H - 20], fill=(0, int(80 + flicker1*40), int(120 + flicker1*60)))
        draw.ellipse([460, H - 65 + int(math.cos(f)*3), 540, H - 25], fill=(int(120 + flicker2*50), int(20 + flicker2*20), int(70 + flicker2*40)))
        # Kinetic Angled Rain Streaks
        angle_dx = -6
        for rx, ry, rlen in rain_drops:
            cur_y = (ry + f * 18) % (H + rlen)
            cur_x = (rx + f * angle_dx) % W
            draw.line([(cur_x, cur_y), (cur_x + angle_dx, cur_y + rlen)], fill=(120, 180, 220), width=1)
        frames.append(im)
    out = os.path.join(out_dir, 'neon-shibuya-rain-mirage.webp')
    frames[0].save(out, format='WEBP', save_all=True, append_images=frames[1:], optimize=True, duration=50, loop=0)
    print(f'✅ Generated {out}: {len(frames)} frames, {os.path.getsize(out)} bytes')

# =========================================================================
# 3. Blood Moon Eclipse: Abyssal Ember Rift
# =========================================================================
def make_blood_moon():
    frames = []
    num_frames = 24
    random.seed(303)
    embers = [{'x': random.randint(180, W - 100), 'y': random.randint(120, H), 'size': random.uniform(1.0, 2.5), 'speed': random.uniform(2, 5), 'drift': random.uniform(-1, 1)} for _ in range(60)]
    for f in range(num_frames):
        im = Image.new('RGB', (W, H))
        draw = ImageDraw.Draw(im)
        # Deep Red/Black Void Gradient
        pulse = math.sin(f / num_frames * math.pi * 2)
        for y in range(H):
            ratio = y / H
            draw.line([(0, y), (W, y)], fill=(int(20 + ratio * 15 + pulse * 4), int(4 + ratio * 4), int(6 + ratio * 6)))
        # Blood Moon Eclipse Center-Right (x=480, y=110)
        cx, cy, rad = 480, 110, 48
        # Pulsing Red Solar Corona
        for r_glow in range(95, rad, -5):
            glow_intensity = int(140 * (1.0 - (r_glow - rad) / 50) + pulse * 25)
            draw.ellipse([cx - r_glow, cy - r_glow, cx + r_glow, cy + r_glow], fill=(min(255, glow_intensity), 20, 30))
        # Inner Eclipse Shadow
        draw.ellipse([cx - rad, cy - rad, cx + rad, cy + rad], fill=(10, 2, 4))
        # Corona Flares
        draw.ellipse([cx - rad - 2, cy - rad - 2, cx + rad + 2, cy + rad + 2], outline=(255, 60, 60), width=2)
        # Jagged Obsidian Crags Silhouettes
        crags = [(0, H), (0, H - 40), (140, H - 90), (280, H - 60), (380, H - 110), (480, H - 70), (580, H - 100), (660, H - 55), (W, H - 75), (W, H)]
        draw.polygon(crags, fill=(6, 1, 3))
        # Rising Fire Embers
        for emb in embers:
            ey = (emb['y'] - f * emb['speed']) % H
            ex = emb['x'] + math.sin((f + ey) * 0.1) * 8 * emb['drift']
            sz = emb['size']
            e_color = (255, int(120 + pulse * 50), 30)
            draw.ellipse([ex - sz, ey - sz, ex + sz, ey + sz], fill=e_color)
        frames.append(im)
    out = os.path.join(out_dir, 'blood-moon-abyssal-ember.webp')
    frames[0].save(out, format='WEBP', save_all=True, append_images=frames[1:], optimize=True, duration=50, loop=0)
    print(f'✅ Generated {out}: {len(frames)} frames, {os.path.getsize(out)} bytes')

# =========================================================================
# 4. Sakura Reverie: Twilight Petals Windrift
# =========================================================================
def make_sakura_reverie():
    frames = []
    num_frames = 28
    random.seed(404)
    petals = [{'x': random.randint(0, W), 'y': random.randint(0, H), 'w': random.uniform(4, 9), 'h': random.uniform(2, 5), 'angle': random.uniform(0, math.pi*2), 'speed_x': random.uniform(3.5, 7.0), 'speed_y': random.uniform(1.2, 3.0)} for _ in range(50)]
    for f in range(num_frames):
        im = Image.new('RGB', (W, H))
        draw = ImageDraw.Draw(im)
        # Pastel Sunset Sky: Peach to Lavender
        for y in range(H):
            ratio = y / H
            r = int(245 - ratio * 40)
            g = int(160 + ratio * 20)
            b = int(190 + ratio * 45)
            draw.line([(0, y), (W, y)], fill=(r, g, b))
        # Big Soft Sunset Sun (x=460, y=140)
        sx, sy, srad = 460, 140, 65
        for sr in range(95, srad, -5):
            draw.ellipse([sx - sr, sy - sr, sx + sr, sy + sr], fill=(255, 230, 200))
        draw.ellipse([sx - srad, sy - srad, sx + srad, sy + srad], fill=(255, 245, 225))
        # Japanese Pagoda Temple Silhouette (x=300)
        px, py = 300, H - 30
        draw.polygon([(px - 35, py - 40), (px + 35, py - 40), (px + 45, py - 35), (px - 45, py - 35)], fill=(35, 20, 35))
        draw.polygon([(px - 28, py - 70), (px + 28, py - 70), (px + 38, py - 65), (px - 38, py - 65)], fill=(35, 20, 35))
        draw.polygon([(px - 20, py - 95), (px + 20, py - 95), (px + 28, py - 90), (px - 28, py - 90)], fill=(35, 20, 35))
        draw.line([(px, py - 95), (px, py - 120)], fill=(35, 20, 35), width=2)
        # Gentle Rolling Hills & Cherry Tree Branches
        hill_pts = [(0, H), (0, H - 40), (220, H - 55), (450, H - 45), (W, H - 65), (W, H)]
        draw.polygon(hill_pts, fill=(28, 15, 30))
        # Drifting and Rotating Sakura Petals
        for p in petals:
            cur_x = (p['x'] + f * p['speed_x']) % (W + 20)
            cur_y = (p['y'] + f * p['speed_y'] + math.sin(f * 0.3 + p['x']) * 4) % H
            rot = p['angle'] + f * 0.15
            pw = p['w'] * math.cos(rot)
            ph = p['h']
            draw.ellipse([cur_x - abs(pw), cur_y - ph, cur_x + abs(pw), cur_y + ph], fill=(255, 182, 205))
        frames.append(im)
    out = os.path.join(out_dir, 'sakura-reverie-floating-petals.webp')
    frames[0].save(out, format='WEBP', save_all=True, append_images=frames[1:], optimize=True, duration=50, loop=0)
    print(f'✅ Generated {out}: {len(frames)} frames, {os.path.getsize(out)} bytes')

# =========================================================================
# 5. Midnight Lo-Fi Window: Rainy Bedroom Glow
# =========================================================================
def make_lofi_window():
    frames = []
    num_frames = 24
    random.seed(505)
    trickle_drops = [{'x': random.randint(160, W - 80), 'y': random.randint(20, H - 60), 'speed': random.uniform(2.5, 6.0), 'len': random.randint(6, 16)} for _ in range(35)]
    steam_particles = [{'x': 540 + random.randint(-10, 10), 'y': H - 55, 'drift': random.uniform(-0.5, 0.5), 'id': i} for i in range(15)]
    for f in range(num_frames):
        im = Image.new('RGB', (W, H))
        draw = ImageDraw.Draw(im)
        # Room Ambient: Dark Slate Navy
        for y in range(H):
            ratio = y / H
            draw.line([(0, y), (W, y)], fill=(int(14 + ratio * 10), int(16 + ratio * 12), int(28 + ratio * 20)))
        # Window Pane with City Night Glow Outside (x=160 to W-60, y=20 to H-50)
        wx1, wy1, wx2, wy2 = 180, 25, W - 60, H - 55
        for y in range(wy1, wy2):
            w_ratio = (y - wy1) / (wy2 - wy1)
            draw.line([(wx1, y), (wx2, y)], fill=(int(20 + w_ratio * 15), int(25 + w_ratio * 25), int(45 + w_ratio * 40)))
        # Outside Blurred City Bokeh Lights
        bokeh = [(240, 100, 16), (360, 80, 22), (450, 120, 14), (520, 90, 18), (600, 130, 20)]
        for bx, by, br in bokeh:
            draw.ellipse([bx - br, by - br, bx + br, by + br], fill=(255, 210, 140))
        # Window Grids
        mid_x = (wx1 + wx2) // 2
        mid_y = (wy1 + wy2) // 2
        draw.line([(mid_x, wy1), (mid_x, wy2)], fill=(12, 14, 24), width=4)
        draw.line([(wx1, mid_y), (wx2, mid_y)], fill=(12, 14, 24), width=4)
        draw.rectangle([wx1 - 4, wy1 - 4, wx2 + 4, wy2 + 4], outline=(12, 14, 24), width=4)
        # Rainy Droplets Trickling Down Glass
        for drop in trickle_drops:
            dy = (drop['y'] + f * drop['speed']) % (wy2 - wy1) + wy1
            dx = drop['x']
            draw.line([(dx, dy), (dx, dy + drop['len'])], fill=(160, 200, 230), width=1)
            draw.ellipse([dx - 1.5, dy + drop['len'] - 1, dx + 1.5, dy + drop['len'] + 2], fill=(200, 230, 255))
        # Warm Amber Desk Lamp Glow on Right Desk
        draw.rectangle([0, H - 55, W, H], fill=(18, 20, 32)) # Desk ledge
        lamp_x, lamp_y = 620, H - 120
        # Warm yellow radial glow
        for lr in range(70, 20, -5):
            draw.ellipse([lamp_x - lr, lamp_y + 30 - lr, lamp_x + lr, lamp_y + 30 + lr], fill=(45 + (70 - lr), 35 + (70 - lr)//2, 20))
        # Steaming Coffee Mug on Desk (x=540)
        draw.rectangle([532, H - 55, 552, H - 35], fill=(220, 220, 230))
        # Animated Steam Trails
        for st in steam_particles:
            step = (f + st['id'] * 2) % num_frames
            sy = H - 55 - step * 2.2
            sx = st['x'] + math.sin(step * 0.4 + st['id']) * 5
            draw.ellipse([sx - 1.5, sy - 1.5, sx + 1.5, sy + 1.5], fill=(220, 220, 240))
        frames.append(im)
    out = os.path.join(out_dir, 'midnight-lofi-rainy-window.webp')
    frames[0].save(out, format='WEBP', save_all=True, append_images=frames[1:], optimize=True, duration=50, loop=0)
    print(f'✅ Generated {out}: {len(frames)} frames, {os.path.getsize(out)} bytes')

# =========================================================================
# 6. Abyssal Bioluminescence: Deep Oceanic Jellyfish
# =========================================================================
def make_abyssal_jellyfish():
    frames = []
    num_frames = 26
    random.seed(606)
    spores = [{'x': random.randint(0, W), 'y': random.randint(0, H), 'size': random.uniform(1.0, 2.5), 'phase': random.uniform(0, math.pi*2)} for _ in range(45)]
    jellies = [
        {'x': 450, 'base_y': 160, 'rad': 32, 'color': (34, 211, 238), 'speed': 1.0},
        {'x': 320, 'base_y': 210, 'rad': 24, 'color': (168, 85, 247), 'speed': 1.2},
        {'x': 580, 'base_y': 190, 'rad': 22, 'color': (56, 189, 248), 'speed': 0.9}
    ]
    for f in range(num_frames):
        im = Image.new('RGB', (W, H))
        draw = ImageDraw.Draw(im)
        # Midnight Abyssal Deep Marine Gradient
        for y in range(H):
            ratio = y / H
            draw.line([(0, y), (W, y)], fill=(int(4 + ratio * 8), int(8 + ratio * 16), int(22 + ratio * 34)))
        # Floating Bioluminescent Spores
        for sp in spores:
            pulse = (math.sin(f / num_frames * math.pi * 2 + sp['phase']) + 1) / 2
            b_val = int(140 + pulse * 115)
            draw.ellipse([sp['x'] - sp['size'], sp['y'] - sp['size'], sp['x'] + sp['size'], sp['y'] + sp['size']], fill=(30, b_val, b_val))
        # Animated Pulsing & Floating Jellyfish
        for j in jellies:
            undulate = math.sin((f * j['speed'] / num_frames) * math.pi * 2)
            cur_y = j['base_y'] - undulate * 16
            cur_rad = j['rad'] * (1.0 + undulate * 0.12)
            jx = j['x']
            c = j['color']
            # Glowing Umbrella Bell Dome
            draw.chord([jx - cur_rad, cur_y - cur_rad, jx + cur_rad, cur_y + cur_rad * 0.5], 180, 360, fill=c)
            # Trailing Tentacles Undulating with Wave Math
            for t_idx in range(-3, 4):
                t_base_x = jx + t_idx * (cur_rad // 3.5)
                tentacle_pts = [(t_base_x, cur_y)]
                for seg in range(1, 6):
                    seg_y = cur_y + seg * 14
                    seg_x = t_base_x + math.sin(f * 0.4 + seg * 0.8 + t_idx) * (4 + seg * 2)
                    tentacle_pts.append((seg_x, seg_y))
                for pt_idx in range(len(tentacle_pts) - 1):
                    draw.line([tentacle_pts[pt_idx], tentacle_pts[pt_idx + 1]], fill=c, width=1)
        frames.append(im)
    out = os.path.join(out_dir, 'abyssal-bioluminescent-jellyfish.webp')
    frames[0].save(out, format='WEBP', save_all=True, append_images=frames[1:], optimize=True, duration=50, loop=0)
    print(f'✅ Generated {out}: {len(frames)} frames, {os.path.getsize(out)} bytes')

# =========================================================================
# 7. Outrun 80s: Cyber Synth Grid Highway
# =========================================================================
def make_synthwave_outrun():
    frames = []
    num_frames = 20
    for f in range(num_frames):
        im = Image.new('RGB', (W, H))
        draw = ImageDraw.Draw(im)
        # Retro Purple to Deep Blue Horizon Gradient
        for y in range(H // 2 + 10):
            ratio = y / (H // 2 + 10)
            draw.line([(0, y), (W, y)], fill=(int(24 - ratio * 12), int(8 + ratio * 8), int(42 + ratio * 30)))
        # Giant Striped Retro Sun (x=460, y=H//2 + 5, r=60)
        sun_x, sun_y, sun_r = 460, H // 2 + 5, 58
        for sr in range(sun_r, 0, -1):
            draw.ellipse([sun_x - sr, sun_y - sr, sun_x + sr, sun_y + sr], fill=(255, int(220 - sr*2.5), int(50 + sr*1.5)))
        # Horizontal Sun Blinds / Cutouts
        for stripe_idx in range(1, 6):
            s_y = sun_y - 25 + stripe_idx * 9
            s_thick = max(2, stripe_idx)
            draw.rectangle([sun_x - sun_r - 5, s_y, sun_x + sun_r + 5, s_y + s_thick], fill=(16, 8, 38))
        # 3D Wireframe Perspective Grid (Bottom Half of Screen)
        grid_top = H // 2 + 10
        # Dark grid floor base
        draw.rectangle([0, grid_top, W, H], fill=(10, 6, 24))
        # Perspective vertical lines converging at sun center (sun_x, grid_top)
        vanish_x, vanish_y = sun_x, grid_top
        for b_x in range(-200, W + 300, 45):
            draw.line([(vanish_x, vanish_y), (b_x, H)], fill=(217, 70, 239), width=1)
        # Moving horizontal perspective lines (speeding forward)
        phase = (f / num_frames)
        for line_idx in range(10):
            norm_p = ((line_idx + phase) / 10.0) ** 2.2 # Exponential perspective spacing
            line_y = int(grid_top + norm_p * (H - grid_top))
            if grid_top <= line_y <= H:
                draw.line([(0, line_y), (W, line_y)], fill=(6, 182, 212), width=1 if line_y < H - 50 else 2)
        frames.append(im)
    out = os.path.join(out_dir, 'outrun-cyber-synth-grid.webp')
    frames[0].save(out, format='WEBP', save_all=True, append_images=frames[1:], optimize=True, duration=50, loop=0)
    print(f'✅ Generated {out}: {len(frames)} frames, {os.path.getsize(out)} bytes')

# =========================================================================
# 8. Phantom Blade: Cursed Katana Aura
# =========================================================================
def make_phantom_blade():
    frames = []
    num_frames = 24
    random.seed(808)
    flame_sparks = [{'x': random.randint(220, 600), 'y': 150, 'speed': random.uniform(2, 5), 'drift': random.uniform(-1, 1), 'id': i} for i in range(40)]
    for f in range(num_frames):
        im = Image.new('RGB', (W, H))
        draw = ImageDraw.Draw(im)
        # Dark Cursed Fog Background
        for y in range(H):
            ratio = y / H
            draw.line([(0, y), (W, y)], fill=(int(10 + ratio * 8), int(6 + ratio * 4), int(18 + ratio * 16)))
        # Floating Katana Blade (Horizontal Center: y=150, x=220 to 620)
        blade_y = 150 + int(math.sin(f / num_frames * math.pi * 2) * 4)
        # Purple/Crimson Cursed Aura Wave around the Steel
        pulse = (math.sin(f / num_frames * math.pi * 2) + 1) / 2
        for aura_w in range(18, 4, -3):
            draw.line([(220, blade_y), (620, blade_y)], fill=(int(120 + pulse * 60), 20, int(180 + pulse * 75)), width=aura_w)
        # Katana Steel Blade
        draw.line([(220, blade_y), (620, blade_y)], fill=(240, 245, 255), width=4)
        # Katana Hilt (Tsuka) on Left (x=220 to 280)
        draw.line([(220, blade_y), (280, blade_y)], fill=(20, 20, 26), width=6)
        # Tsuba (Handguard) at x=280
        draw.line([(280, blade_y - 12), (280, blade_y + 12)], fill=(212, 175, 55), width=3)
        # Cursed Flame Wisps & Spirit Orbs Licking Upward
        for spk in flame_sparks:
            step = (f + spk['id']) % num_frames
            sy = blade_y - step * spk['speed']
            sx = spk['x'] + math.sin(f * 0.3 + spk['id']) * 8 * spk['drift']
            fade = 1.0 - (step / num_frames)
            sz = max(1, int(3 * fade))
            draw.ellipse([sx - sz, sy - sz, sx + sz, sy + sz], fill=(int(160 * fade), 40, int(255 * fade)))
        frames.append(im)
    out = os.path.join(out_dir, 'phantom-blade-cursed-aura.webp')
    frames[0].save(out, format='WEBP', save_all=True, append_images=frames[1:], optimize=True, duration=50, loop=0)
    print(f'✅ Generated {out}: {len(frames)} frames, {os.path.getsize(out)} bytes')

# Generate all 8 unique animated banners
make_celestial_meteor()
make_neon_shibuya()
make_blood_moon()
make_sakura_reverie()
make_lofi_window()
make_abyssal_jellyfish()
make_synthwave_outrun()
make_phantom_blade()
print("🎉 All 8 unique aesthetic animated banners successfully generated!")
