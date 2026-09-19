import os, math, subprocess
from PIL import Image, ImageEnhance, ImageDraw

out_banners_dir = 'public/assets/animated'
out_pfps_dir = 'public/assets/pfps'
os.makedirs(out_banners_dir, exist_ok=True)
os.makedirs(out_pfps_dir, exist_ok=True)

# 1. Process Video Pins to Banners and PFPs
video_clips = [
    # (name, mp4_src, vf_banner, vf_pfp, duration_sec)
    ('golden-hour-prairie-reverie', '/tmp/pins_mp4/pin1.mp4', 
     'fps=16,scale=720:300:force_original_aspect_ratio=increase,crop=720:300', 
     None, 3.5),
    ('lone-samurai-purple-blossoms', '/tmp/pins_mp4/pin2.mp4', 
     'transpose=2,fps=16,scale=720:300:force_original_aspect_ratio=increase,crop=720:300', 
     'transpose=2,fps=16,scale=320:320:force_original_aspect_ratio=increase,crop=320:320', 3.5),
    ('alpine-warrior-mountain-meadow', '/tmp/pins_mp4/pin3.mp4', 
     'fps=16,scale=720:300:force_original_aspect_ratio=increase,crop=720:300', 
     None, 3.5),
    ('celestial-butterfly-flower-meadow', '/tmp/pins_mp4/pin4.mp4', 
     'fps=16,scale=720:300:force_original_aspect_ratio=increase,crop=720:300', 
     None, 3.5),
    ('floating-calico-cat-koi-ripples', '/tmp/pins_mp4/pin5.mp4', 
     'fps=16,scale=720:300:force_original_aspect_ratio=increase,crop=720:300', 
     'fps=16,scale=320:320:force_original_aspect_ratio=increase,crop=320:320', 3.5),
    ('t-pose-dancing-kittens', '/tmp/pins_mp4/pin8.mp4', 
     'fps=16,scale=720:300:force_original_aspect_ratio=increase,crop=720:300', 
     'fps=16,scale=320:320:force_original_aspect_ratio=increase,crop=320:320', 3.5),
    ('kawaii-panda-guitar-stroll', '/tmp/pins_mp4/pin9.mp4', 
     'fps=16,scale=720:300:force_original_aspect_ratio=increase,crop=720:300', 
     'fps=16,scale=320:320:force_original_aspect_ratio=increase,crop=320:320', 3.5),
]

for name, mp4_src, vf_banner, vf_pfp, duration in video_clips:
    # Banner
    if vf_banner:
        banner_out = os.path.join(out_banners_dir, f'{name}.webp')
        frame_pat = f'/tmp/b_{name}_%03d.png'
        subprocess.run([
            'ffmpeg', '-y', '-ss', '00:00:00.5', '-i', mp4_src, '-t', str(duration),
            '-vf', vf_banner, frame_pat
        ], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        
        frames = []
        prefix = f'b_{name}_'
        for f in sorted(os.listdir('/tmp')):
            if f.startswith(prefix) and f.endswith('.png'):
                fp = os.path.join('/tmp', f)
                frames.append(Image.open(fp).copy())
                os.remove(fp)
        if frames:
            frames[0].save(
                banner_out,
                format='WEBP',
                save_all=True,
                append_images=frames[1:],
                optimize=True,
                duration=62, # ~16fps
                loop=0
            )
            print(f'✅ Saved Banner {name}.webp: {len(frames)} frames, {os.path.getsize(banner_out)/1024:.1f} KB')

    # PFP
    if vf_pfp:
        pfp_out = os.path.join(out_pfps_dir, f'{name}-animated.webp')
        frame_pat = f'/tmp/p_{name}_%03d.png'
        subprocess.run([
            'ffmpeg', '-y', '-ss', '00:00:00.5', '-i', mp4_src, '-t', str(duration),
            '-vf', vf_pfp, frame_pat
        ], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        
        frames = []
        prefix = f'p_{name}_'
        for f in sorted(os.listdir('/tmp')):
            if f.startswith(prefix) and f.endswith('.png'):
                fp = os.path.join('/tmp', f)
                frames.append(Image.open(fp).copy())
                os.remove(fp)
        if frames:
            frames[0].save(
                pfp_out,
                format='WEBP',
                save_all=True,
                append_images=frames[1:],
                optimize=True,
                duration=62, # ~16fps
                loop=0
            )
            print(f'✅ Saved PFP {name}-animated.webp: {len(frames)} frames, {os.path.getsize(pfp_out)/1024:.1f} KB')

print("All video pins converted successfully!")
