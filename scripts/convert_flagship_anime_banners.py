import urllib.request, subprocess, os
from PIL import Image

clips = [
    ('lucy-cyberpunk-moon-dream.webp', 'https://media.tenor.com/b9VJcecqEugAAAPo/cyberpunk-cyberpunk-anime.mp4', 3),
    ('kaneki-spider-lily-awakening.webp', 'https://media.tenor.com/8_n83hWT-1EAAAPo/tokyo-ghoul-ken-kaneki.mp4', 3),
    ('sukuna-malevolent-shrine-domain.webp', 'https://media.tenor.com/hp1qKBQclPMAAAPo/jujutsu-kaisen-shibuya-arc-sukuna-domain-expansion.mp4', 3),
    ('makima-hypnotic-golden-gaze.webp', 'https://media.tenor.com/hJa9StBduMcAAAPo/makima-chainsaw-man.mp4', 3),
    ('gojo-infinite-void-six-eyes.webp', 'https://media.tenor.com/84Y17eI-b0oAAAPo/infinite-void-gojo.mp4', 3)
]

out_dir = 'public/assets/animated'
os.makedirs(out_dir, exist_ok=True)

for fname, url, duration in clips:
    mp4_tmp = f'/tmp/{fname}.mp4'
    frame_pat = f'/tmp/f_{fname}_%03d.png'
    out_path = os.path.join(out_dir, fname)
    
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req) as resp:
            data = resp.read()
            with open(mp4_tmp, 'wb') as f:
                f.write(data)
        
        # Extract frames with ffmpeg, scale and crop to 720x300 banner ratio
        subprocess.run([
            'ffmpeg', '-y', '-i', mp4_tmp, '-t', str(duration),
            '-vf', 'fps=16,scale=720:300:force_original_aspect_ratio=increase,crop=720:300',
            frame_pat
        ], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        
        # Read frames into PIL
        frames = []
        prefix = f'f_{fname}_'
        for f_img in sorted(os.listdir('/tmp')):
            if f_img.startswith(prefix) and f_img.endswith('.png'):
                fp = os.path.join('/tmp', f_img)
                frames.append(Image.open(fp).copy())
                os.remove(fp)
                
        if frames:
            frames[0].save(
                out_path,
                format='WEBP',
                save_all=True,
                append_images=frames[1:],
                optimize=True,
                duration=62, # ~16fps
                loop=0
            )
            print(f'✅ Converted & Saved {fname}: {len(frames)} frames, {os.path.getsize(out_path)} bytes')
        if os.path.exists(mp4_tmp):
            os.remove(mp4_tmp)
    except Exception as e:
        print(f'❌ Error processing {fname}: {e}')
