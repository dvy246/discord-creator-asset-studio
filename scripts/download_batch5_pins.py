import os, requests, json

os.makedirs('/tmp/pins_batch5', exist_ok=True)

with open('/tmp/pins_batch5.json', 'r') as f:
    pins = json.load(f)

headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

for p in pins:
    idx = p['index']
    mp4 = p['mp4']
    if mp4:
        dst = f"/tmp/pins_batch5/pin_{idx}.mp4"
        if not os.path.exists(dst) or os.path.getsize(dst) == 0:
            print(f"Downloading Pin {idx} from {mp4}...")
            r = requests.get(mp4, headers=headers, stream=True)
            with open(dst, 'wb') as out:
                for chunk in r.iter_content(chunk_size=16384):
                    out.write(chunk)
            print(f"  -> Saved {dst} ({os.path.getsize(dst)/1024:.1f} KB)")
        else:
            print(f"Pin {idx} already exists ({os.path.getsize(dst)/1024:.1f} KB)")

print("All Batch 5 MP4s downloaded!")
