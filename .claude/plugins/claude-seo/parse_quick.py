import json
from bs4 import BeautifulSoup

with open("render.json") as f:
    data = json.load(f)

html = data.get("content") or data.get("raw_content")
soup = BeautifulSoup(html, "html.parser")

title = soup.title.string if soup.title else None
desc = soup.find("meta", {"name": "description"})
canonical = soup.find("link", {"rel": "canonical"})
robots = soup.find("meta", {"name": "robots"})

print(f"Title: {title}")
print(f"Description: {desc['content'] if desc else None}")
print(f"Canonical: {canonical['href'] if canonical else None}")
print(f"Robots: {robots['content'] if robots else None}")

h1s = [h1.text.strip() for h1 in soup.find_all("h1")]
print(f"H1s: {h1s}")
