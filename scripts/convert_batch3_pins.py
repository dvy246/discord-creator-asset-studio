import os, subprocess
from PIL import Image

out_banners_dir = 'public/assets/animated'
out_pfps_dir = 'public/assets/pfps'

clips = [
    # (name, mp4, ss, banner_vf, pfp_vf, duration)
    ('kawaii-panda-grass-nap', '/tmp/pins_batch3/pin_a.mp4', '00:00:01',
     'fps=16,scale=720:300:force_original_aspect_ratio=increase,crop=720:300',
     'fps=16,scale=320:320:force_original_aspect_ratio=increase,crop=320:320', 3.0),
    ('totoro-forest-belly-nap', '/tmp/pins_batch3/pin_b.mp4', '00:00:34',
     'fps=16,scale=720:300:force_original_aspect_ratio=increase,crop=720:300',
     'fps=16,scale=320:320:force_original_aspect_ratio=increase,crop=320:320', 3.5),
    ('ocean-whale-sunburst-abyss', '/tmp/pins_batch3/pin_c.mp4', '00:00:02',
     'fps=16,scale=720:300:force_original_aspect_ratio=increase,crop=720:300',
     'fps=16,scale=320:320:force_original_aspect_ratio=increase,crop=320:320', 3.0)
]

for name, src, ss, vf_b, vf_p, dur in clips:
    # Banner
    b_out = os.path.join(out_banners_dir, f'{name}.webp')
    pat_b = f'/tmp/b3_{name}_%03d.png'
    subprocess.run([
        'ffmpeg', '-y', '-ss', ss, '-i', src, '-t', str(dur),
        '-vf', vf_b, pat_b
    ], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    
    frames_b = []
    pref_b = f'b3_{name}_'
    for f in sorted(os.listdir('/tmp')):
        if f.startswith(pref_b) and f.endswith('.png'):
            fp = os.path.join('/tmp', f)
            frames_b.append(Image.open(fp).copy())
            os.remove(fp)
    if frames_b:
        frames_b[0].save(
            b_out, format='WEBP', save_all=True, append_images=frames_b[1:],
            duration=65, loop=0, optimize=True
        )
        print(f'✅ Saved Banner {name}.webp: {len(frames_b)} frames, {os.path.getsize(b_out)/1024:.1f} KB')

    # PFP
    p_out = os.path.join(out_pfps_dir, f'{name}-animated.webp')
    pat_p = f'/tmp/p3_{name}_%03d.png'
    subprocess.run([
        'ffmpeg', '-y', '-ss', ss, '-i', src, '-t', str(dur),
        '-vf', vf_p, pat_p
    ], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    
    frames_p = []
    pref_p = f'p3_{name}_'
    for f in sorted(os.listdir('/tmp')):
        if f.startswith(pref_p) and f.endswith('.png'):
            fp = os.path.join('/tmp', f)
            frames_p.append(Image.open(fp).copy())
            os.remove(fp)
    if frames_p:
        frames_p[0].save(
            p_out, format='WEBP', save_all=True, append_images=frames_p[1:],
            duration=65, loop=0, optimize=True
        )
        print(f'✅ Saved PFP {name}-animated.webp: {len(frames_p)} frames, {os.path.getsize(p_out)/1024:.1f} KB')

print('Batch 3 pins conversion complete!')
