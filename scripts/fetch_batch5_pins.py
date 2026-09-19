import requests
import re
import json

urls = [
    'https://pin.it/3YlF1foZf',
    'https://pin.it/72PXhkIuu',
    'https://pin.it/6qR9CSj0Z',
    'https://pin.it/7CCvYI37R',
    'https://pin.it/4gOdpPihH',
    'https://pin.it/3O2sRGT0N',
    'https://pin.it/6fipBtZsf',
    'https://pin.it/26m1JiP4R',
    'https://pin.it/4Qs1lSSRq',
    'https://pin.it/2slwcNny4',
    'https://pin.it/4rRwc6uQL',
    'https://pin.it/6etqezyiu',
    'https://pin.it/5w8AN5XNY',
    'https://pin.it/5V6rB5Kzh',
    'https://pin.it/6F0JFRuWV'
]

headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

results = []

for i, u in enumerate(urls, 1):
    try:
        r = requests.get(u, headers=headers, allow_redirects=True, timeout=15)
        html = r.text
        
        # Look for video mp4 URLs in HTML or JSON
        mp4_matches = re.findall(r'https://[^"\'>\s]+?\.mp4', html)
        clean_mp4s = []
        for m in mp4_matches:
            c = m.replace('\\/', '/')
            if 'v1.pinimg.com' in c or 'pinimg' in c or '.mp4' in c:
                clean_mp4s.append(c)
        
        # Search for og:title and og:image
        og_title = re.search(r'<meta property="og:title" content="([^"]+)"', html)
        og_img = re.search(r'<meta property="og:image" content="([^"]+)"', html)
        
        title = og_title.group(1) if og_title else 'No Title'
        img = og_img.group(1) if og_img else 'No Image'
        best_mp4 = clean_mp4s[0] if clean_mp4s else None
        
        item = {
            'index': i,
            'short_url': u,
            'final_url': r.url,
            'title': title,
            'mp4': best_mp4,
            'all_mp4s': list(set(clean_mp4s)),
            'image': img
        }
        results.append(item)
        print(f"[{i}] {title}")
        print(f"    URL: {r.url}")
        print(f"    MP4: {best_mp4}")
        print(f"    Img: {img}")
    except Exception as e:
        print(f"[{i}] {u} -> Error: {e}")

with open('/tmp/pins_batch5.json', 'w') as f:
    json.dump(results, f, indent=2)

print(f"\nSaved {len(results)} pin metadata results to /tmp/pins_batch5.json")
