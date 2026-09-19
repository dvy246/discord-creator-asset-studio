import os, requests, json, subprocess

os.makedirs('/tmp/pins_batch4', exist_ok=True)

with open('/tmp/pins_batch4.json', 'r') as f:
    pins = json.load(f)

# Manually add image for pin 5
pins[4]['image'] = 'https://i.pinimg.com/originals/f9/fc/12/f9fc12b0ad806600f59f438440638e89.jpg'

headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

for p in pins:
    idx = p['index']
    mp4 = p['mp4']
    img = p['image']
    
    if mp4:
        dst = f"/tmp/pins_batch4/pin_{idx}.mp4"
        if not os.path.exists(dst) or os.path.getsize(dst) == 0:
            print(f"Downloading MP4 for Pin {idx} from {mp4}...")
            r = requests.get(mp4, headers=headers, stream=True)
            with open(dst, 'wb') as out:
                for chunk in r.iter_content(chunk_size=8192):
                    out.write(chunk)
            print(f"  -> Saved {dst} ({os.path.getsize(dst)/1024:.1f} KB)")
        else:
            print(f"Pin {idx} MP4 already downloaded ({os.path.getsize(dst)/1024:.1f} KB)")
    else:
        # Download image
        dst = f"/tmp/pins_batch4/pin_{idx}.jpg"
        print(f"Downloading Image for Pin {idx} from {img}...")
        r = requests.get(img, headers=headers)
        with open(dst, 'wb') as out:
            out.write(r.content)
        print(f"  -> Saved {dst} ({os.path.getsize(dst)/1024:.1f} KB)")

print("All downloads complete!")
