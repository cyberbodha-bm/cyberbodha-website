"""Generate the Open Graph share images (1200x630) for the site and the CEH landing page.

Layout: left-aligned text column, brand logo card on the right, divider above the footer.
Every type size is fitted to the available width, so long strings shrink instead of overflowing.
"""
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

OUT = Path(__file__).resolve().parent.parent / "public" / "og"
LOGO = Path(__file__).resolve().parent.parent / "public" / "cyberbodha-logo.png"
OUT.mkdir(parents=True, exist_ok=True)

W, H = 1200, 630
BG = (11, 18, 32)
GRID = (17, 26, 43)
CYAN = (34, 211, 238)
WHITE = (255, 255, 255)
MUTED = (148, 163, 184)
RULE = (30, 41, 59)
CARD = (4, 8, 14)

BOLD = "/Windows/Fonts/arialbd.ttf"
REG = "/Windows/Fonts/arial.ttf"

TEXT_LEFT = 60
TEXT_RIGHT = 830  # logo card starts at 870


def font(path: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(path, size)


def fit(draw, text, path, size, max_width):
    """Largest font size <= `size` that keeps `text` inside `max_width`."""
    while size > 12:
        f = font(path, size)
        if draw.textlength(text, font=f) <= max_width:
            return f, size
        size -= 2
    return font(path, 12), 12


def logo_card(img, size=280, radius=38):
    """Paste the square logo into a rounded card so its black background reads as intent."""
    x1, y1 = W - 50 - size, (H - size) // 2 - 20
    x2, y2 = x1 + size, y1 + size

    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    gd.rounded_rectangle([x1 - 6, y1 - 6, x2 + 6, y2 + 6], radius + 6, fill=(34, 211, 238, 28))
    img.alpha_composite(glow)

    d = ImageDraw.Draw(img)
    d.rounded_rectangle([x1, y1, x2, y2], radius, fill=CARD + (255,), outline=(34, 211, 238, 120), width=2)

    logo = Image.open(LOGO).convert("RGB")
    inner = size - 28
    logo = logo.resize((inner, inner), Image.LANCZOS)

    mask = Image.new("L", (inner, inner), 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, inner - 1, inner - 1], radius - 12, fill=255)
    img.paste(logo, (x1 + 14, y1 + 14), mask)


def card(badge, title_lines, subhead, footer, filename, subhead_size=38):
    img = Image.new("RGBA", (W, H), BG + (255,))
    d = ImageDraw.Draw(img)

    for x in range(0, W, 40):
        d.line([(x, 0), (x, H)], fill=GRID)
    for y in range(0, H, 40):
        d.line([(0, y), (W, y)], fill=GRID)

    d.rectangle([0, 0, 12, H], fill=CYAN)
    d.rectangle([TEXT_LEFT, 92, TEXT_LEFT + 120, 98], fill=CYAN)

    max_w = TEXT_RIGHT - TEXT_LEFT

    d.text((TEXT_LEFT, 116), badge, font=font(BOLD, 27), fill=CYAN)

    y = 158
    for text, size in title_lines:
        f, used = fit(d, text, BOLD, size, max_w)
        d.text((TEXT_LEFT, y), text, font=f, fill=WHITE)
        y += used + 10

    f, used = fit(d, subhead, REG, subhead_size, max_w)
    d.text((TEXT_LEFT, y + 18), subhead, font=f, fill=MUTED)

    d.line([(TEXT_LEFT, 508), (TEXT_RIGHT, 508)], fill=RULE, width=2)
    f, _ = fit(d, footer, BOLD, 30, max_w)
    d.text((TEXT_LEFT, 526), footer, font=f, fill=CYAN)

    logo_card(img)

    img.convert("RGB").save(OUT / filename, optimize=True)
    print(f"written: {OUT / filename} ({(OUT / filename).stat().st_size} bytes)")


card(
    badge="CYBERBODHA",
    title_lines=[("Cybersecurity Training", 62), ("& Cyber Range", 62)],
    subhead="Learn · Practice · Simulate · Certify",
    footer="cyberbodha.com",
    filename="cyberbodha-og.png",
)

card(
    badge="CERTIFIED PATHWAY",
    title_lines=[("CEH v13", 82), ("Ethical Hacking · 60 Hours", 50)],
    subhead="Training only ₹20,000 · With certification ₹45,000",
    footer="cyberbodha.com/programs/ethical-hacking",
    filename="ceh-v13-og.png",
    subhead_size=32,
)
