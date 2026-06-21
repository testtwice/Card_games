from PIL import Image, ImageDraw, ImageFont
import os

def create_icon(size, filename):
    img = Image.new('RGB', (size, size), color='#1e1e2f')
    d = ImageDraw.Draw(img)
    
    try:
        # Try finding a font with good suit glyphs
        font_path = "C:/Windows/Fonts/segoeui.ttf"
        fnt = ImageFont.truetype(font_path, int(size * 0.4))
    except Exception as e:
        print("Font error:", e)
        fnt = ImageFont.load_default()

    text_color_black = '#c0caf5'
    text_color_red = '#f77a7a'
    
    def draw_centered_text(draw, text, x_center, y_center, font, fill):
        bbox = draw.textbbox((0, 0), text, font=font)
        tw = bbox[2] - bbox[0]
        th = bbox[3] - bbox[1]
        # Adjust Y to center the glyph vertically within the box
        draw.text((x_center - tw/2, y_center - th/2 - (bbox[1])), text, font=font, fill=fill)

    dx = size * 0.22
    dy = size * 0.22
    
    draw_centered_text(d, "♠", size/2 - dx, size/2 - dy, fnt, text_color_black)
    draw_centered_text(d, "♥", size/2 + dx, size/2 - dy, fnt, text_color_red)
    draw_centered_text(d, "♦", size/2 - dx, size/2 + dy, fnt, text_color_red)
    draw_centered_text(d, "♣", size/2 + dx, size/2 + dy, fnt, text_color_black)
    
    img.save(filename)
    print(f"Created {filename}")

create_icon(512, "icon-512.png")
create_icon(192, "icon-192.png")
create_icon(180, "apple-touch-icon.png")
