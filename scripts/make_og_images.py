"""Generate Open Graph share images (1200x630) for the site and the CEH landing page."""
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

OUT = Path("public/og")
OUT.mkdir(parents=True, exist_ok=True)

BG = (11, 18, 32)
CYAN = (34, 211, 238)
WHITE = (255, 255, 255)
MUTED = (148, 163, 184)

BOLD = "/Windows/Fonts/arialbd.ttf"
REG = "/Windows/Fonts/arial.ttf"


def font(path: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(path, size)


def card(title_lines, subtitle, footer, badge, filename):
    img = Image.new("RGB", (1200, 630), BG)
    d = ImageDraw.Draw(img)

    # subtle grid
    for x in range(0, 1200, 40):
        d.line([(x, 0), (x, 630)], fill=(17, 26, 43))
    for y in range(0, 630, 40):
        d.line([(0, y), (1200, y)], fill=(17, 26, 43))

    # accent bars
    d.rectangle([0, 0, 12, 630], fill=CYAN)
    d.rectangle([60, 96, 60 + 120, 102], fill=CYAN)

    d.text((60, 130), badge, font=font(BOLD, 30), fill=CYAN)

    y = 190
    for line, size in title_lines:
        d.text((60, y), line, font=font(BOLD, size), fill=WHITE)
        y += size + 22

    d.text((60, y + 14), subtitle, font=font(REG, 33), fill=MUTED)

    d.text((60, 552), footer, font=font(BOLD, 30), fill=CYAN)

    img.save(OUT / filename, optimize=True)
    print(f"written: {OUT / filename} ({(OUT / filename).stat().st_size} bytes)")


card(
    title_lines=[("Cybersecurity Training", 74), ("& Cyber Range", 74)],
    subtitle="Learn · Practice · Simulate · Certify — Hyderabad, India",
    footer="cyberbodha.com",
    badge="CYBERBODHA",
    filename="cyberbodha-og.png",
)

card(
    title_lines=[("CEH v13", 92), ("Ethical Hacking — 60 Hours", 56)],
    subtitle="Training only ₹20,000  ·  With certification ₹45,000",
    footer="cyberbodha.com/programs/ethical-hacking",
    badge="CERTIFIED PATHWAY",
    filename="ceh-v13-og.png",
)
