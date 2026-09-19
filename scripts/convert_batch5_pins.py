import os, sys, subprocess
from PIL import Image

out_banners_dir = 'public/assets/animated'
out_pfps_dir = 'public/assets/pfps'
out_gifs_dir = 'public/assets/gifs'
out_videos_dir = 'public/assets/videos'

os.makedirs(out_banners_dir, exist_ok=True)
os.makedirs(out_pfps_dir, exist_ok=True)
os.makedirs(out_gifs_dir, exist_ok=True)
os.makedirs(out_videos_dir, exist_ok=True)

# List of all 14 tasks with verified TRUE HORIZONTAL upright crops
# (slug, pin_file, ss, dur, banner_crop, gif_crop, video_crop, pfp_crop)
tasks = [
    (
        'amazing-spiderman-spire-golden-dusk',
        '/tmp/pins_batch5/pin_1.mp4',
        '00:00:03', 3.0,
        'transpose=2,scale=720:300:force_original_aspect_ratio=increase,crop=720:300',
        'transpose=2,scale=480:200:force_original_aspect_ratio=increase,crop=480:200',
        'transpose=2,scale=720:300:force_original_aspect_ratio=increase,crop=720:300',
        'transpose=2,scale=-1:320,crop=320:320'
    ),
    (
        'iron-spider-infinity-war-hero',
        '/tmp/pins_batch5/pin_2.mp4',
        '00:00:03', 3.0,
        'transpose=2,scale=720:300:force_original_aspect_ratio=increase,crop=720:300',
        'transpose=2,scale=480:200:force_original_aspect_ratio=increase,crop=480:200',
        'transpose=2,scale=720:300:force_original_aspect_ratio=increase,crop=720:300',
        'transpose=2,scale=-1:320,crop=320:320'
    ),
    (
        'miles-morales-neon-descent',
        '/tmp/pins_batch5/pin_3.mp4',
        '00:00:02', 3.0,
        'scale=720:1280,crop=720:300:0:500',
        'scale=480:853,crop=480:200:0:333',
        'scale=720:1280,crop=720:300:0:500',
        'scale=320:569,crop=320:320:0:160'
    ),
    (
        'spiderverse-leap-of-faith-sunset',
        '/tmp/pins_batch5/pin_4.mp4',
        '00:00:03', 3.0,
        'transpose=1,scale=720:300:force_original_aspect_ratio=increase,crop=720:300',
        'transpose=1,scale=480:200:force_original_aspect_ratio=increase,crop=480:200',
        'transpose=1,scale=720:300:force_original_aspect_ratio=increase,crop=720:300',
        'transpose=1,scale=-1:320,crop=320:320'
    ),
    (
        'amazing-spiderman-skyward-dive',
        '/tmp/pins_batch5/pin_5.mp4',
        '00:00:02', 3.0,
        'transpose=2,scale=720:300:force_original_aspect_ratio=increase,crop=720:300',
        'transpose=2,scale=480:200:force_original_aspect_ratio=increase,crop=480:200',
        'transpose=2,scale=720:300:force_original_aspect_ratio=increase,crop=720:300',
        'transpose=2,scale=-1:320,crop=320:320'
    ),
    (
        'tony-stark-mark85-snap',
        '/tmp/pins_batch5/pin_7.mp4',
        '00:00:08', 3.0,
        'scale=720:300:force_original_aspect_ratio=increase,crop=720:300',
        'scale=480:200:force_original_aspect_ratio=increase,crop=480:200',
        'scale=720:300:force_original_aspect_ratio=increase,crop=720:300',
        'scale=-1:320,crop=320:320'
    ),
    (
        'iron-man-nanotech-armor-assemble',
        '/tmp/pins_batch5/pin_8.mp4',
        '00:00:03', 3.0,
        'transpose=2,scale=720:300:force_original_aspect_ratio=increase,crop=720:300',
        'transpose=2,scale=480:200:force_original_aspect_ratio=increase,crop=480:200',
        'transpose=2,scale=720:300:force_original_aspect_ratio=increase,crop=720:300',
        'transpose=2,scale=-1:320,crop=320:320'
    ),
    (
        'attack-on-titan-eren-rumbling',
        '/tmp/pins_batch5/pin_9.mp4',
        '00:00:01', 3.0,
        'transpose=2,scale=720:300:force_original_aspect_ratio=increase,crop=720:300',
        'transpose=2,scale=480:200:force_original_aspect_ratio=increase,crop=480:200',
        'transpose=2,scale=720:300:force_original_aspect_ratio=increase,crop=720:300',
        'transpose=2,scale=-1:320,crop=320:320'
    ),
    (
        'wuwa-chixia-flaming-sakura',
        '/tmp/pins_batch5/pin_10.mp4',
        '00:00:03', 3.0,
        'transpose=2,scale=720:300:force_original_aspect_ratio=increase,crop=720:300',
        'transpose=2,scale=480:200:force_original_aspect_ratio=increase,crop=480:200',
        'transpose=2,scale=720:300:force_original_aspect_ratio=increase,crop=720:300',
        'transpose=2,scale=-1:320,crop=320:320'
    ),
    (
        'bleach-ichigo-bankai-tybw',
        '/tmp/pins_batch5/pin_11.mp4',
        '00:00:03', 3.0,
        'transpose=2,scale=720:300:force_original_aspect_ratio=increase,crop=720:300',
        'transpose=2,scale=480:200:force_original_aspect_ratio=increase,crop=480:200',
        'transpose=2,scale=720:300:force_original_aspect_ratio=increase,crop=720:300',
        'transpose=2,scale=-1:320,crop=320:320'
    ),
    (
        'wuwa-sanhua-glacio-lotus',
        '/tmp/pins_batch5/pin_12.mp4',
        '00:00:03', 3.0,
        'transpose=2,scale=720:300:force_original_aspect_ratio=increase,crop=720:300',
        'transpose=2,scale=480:200:force_original_aspect_ratio=increase,crop=480:200',
        'transpose=2,scale=720:300:force_original_aspect_ratio=increase,crop=720:300',
        'transpose=2,scale=-1:320,crop=320:320'
    ),
    (
        'wuwa-changli-phoenix-gaze',
        '/tmp/pins_batch5/pin_13.mp4',
        '00:00:03', 3.0,
        'transpose=2,scale=720:300:force_original_aspect_ratio=increase,crop=720:300',
        'transpose=2,scale=480:200:force_original_aspect_ratio=increase,crop=480:200',
        'transpose=2,scale=720:300:force_original_aspect_ratio=increase,crop=720:300',
        'transpose=2,scale=-1:320,crop=320:320'
    ),
    (
        'lord-krishna-divine-flute-cosmos',
        '/tmp/pins_batch5/pin_14.mp4',
        '00:00:03', 3.0,
        'transpose=2,scale=720:300:force_original_aspect_ratio=increase,crop=720:300',
        'transpose=2,scale=480:200:force_original_aspect_ratio=increase,crop=480:200',
        'transpose=2,scale=720:300:force_original_aspect_ratio=increase,crop=720:300',
        'transpose=2,scale=-1:320,crop=320:320'
    ),
    (
        'ghost-of-yotei-ronin-blades',
        '/tmp/pins_batch5/pin_15.mp4',
        '00:00:03', 3.0,
        'transpose=2,scale=720:300:force_original_aspect_ratio=increase,crop=720:300',
        'transpose=2,scale=480:200:force_original_aspect_ratio=increase,crop=480:200',
        'transpose=2,scale=720:300:force_original_aspect_ratio=increase,crop=720:300',
        'transpose=2,scale=-1:320,crop=320:320'
    )
]

def convert():
    os.makedirs('public/assets/banners', exist_ok=True)
    for idx, (slug, src, ss, dur, banner_crop, gif_crop, video_crop, pfp_crop) in enumerate(tasks, 1):
        print(f"[{idx}/{len(tasks)}] Processing {slug} (Horizontal widescreen banner & matching PFP)...")
        
        # 1. Video MP4 export (True horizontal banner frame 720x300 video loop)
        v_out = os.path.join(out_videos_dir, f'{slug}.mp4')
        subprocess.run([
            'ffmpeg', '-y', '-ss', ss, '-i', src, '-t', str(dur),
            '-vf', video_crop,
            '-c:v', 'libx264', '-crf', '20', '-preset', 'fast',
            '-movflags', '+faststart', '-an', v_out
        ], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        
        # 2. Banner WebP (720x300 edge-to-edge horizontal banner)
        b_out = os.path.join(out_banners_dir, f'{slug}.webp')
        pat_b = f'/tmp/b5_b_{slug}_%03d.png'
        fc_b = f'fps=16,{banner_crop}'
        cmd_b = ['ffmpeg', '-y', '-ss', ss, '-i', src, '-t', str(dur), '-vf', fc_b, pat_b]
        subprocess.run(cmd_b, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        
        frames_b = []
        pref_b = f'b5_b_{slug}_'
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
        
        # 3. Discord GIF (480x200 horizontal crop with palettegen, <10MB)
        gif_out = os.path.join(out_gifs_dir, f'{slug}.gif')
        fc_g = f'{gif_crop},fps=14,split[s0][s1];[s0]palettegen=max_colors=128[p];[s1][p]paletteuse=dither=bayer:bayer_scale=3'
        cmd_g = ['ffmpeg', '-y', '-ss', ss, '-i', src, '-t', str(dur), '-filter_complex', fc_g, gif_out]
        subprocess.run(cmd_g, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        
        # 4. PFP WebP (320x320 1:1 Avatar Loop)
        p_out = os.path.join(out_pfps_dir, f'{slug}-animated.webp')
        pat_p = f'/tmp/b5_p_{slug}_%03d.png'
        vf_p = f'fps=16,{pfp_crop}'
        subprocess.run([
            'ffmpeg', '-y', '-ss', ss, '-i', src, '-t', str(dur),
            '-vf', vf_p, pat_p
        ], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        
        frames_p = []
        pref_p = f'b5_p_{slug}_'
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

        # 5. Static Banner PNG & PFP PNG Fallbacks
        b_png = f'public/assets/banners/{slug}.png'
        p_png = f'public/assets/pfps/{slug}.png'
        subprocess.run(['ffmpeg', '-y', '-ss', ss, '-i', src, '-vf', banner_crop, '-vframes', '1', b_png], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        subprocess.run(['ffmpeg', '-y', '-ss', ss, '-i', src, '-vf', pfp_crop, '-vframes', '1', p_png], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

        print(f"  ✓ MP4 (720x300): {os.path.getsize(v_out)/1024:.1f} KB")
        print(f"  ✓ Banner WebP (720x300): {os.path.getsize(b_out)/1024:.1f} KB")
        print(f"  ✓ GIF (480x200): {os.path.getsize(gif_out)/1024:.1f} KB")
        print(f"  ✓ PFP WebP (320x320): {os.path.getsize(p_out)/1024:.1f} KB")
        print(f"  ✓ Banner PNG (720x300): {os.path.getsize(b_png)/1024:.1f} KB")
        print(f"  ✓ PFP PNG (320x320): {os.path.getsize(p_png)/1024:.1f} KB")

    print("\nAll 14 presets successfully converted in true horizontal widescreen format!")

if __name__ == '__main__':
    convert()
