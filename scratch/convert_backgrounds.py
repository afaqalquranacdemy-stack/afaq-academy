from PIL import Image

conversions = [
    (
        r"C:\Users\karim\.gemini\antigravity-ide\brain\5c494dcf-7a91-4c17-ae4e-81729a5bf8d1\hero_bg_clean_1781448746383.png",
        r"c:\Users\karim\Desktop\afaq-alquran\public\hero-bg.webp"
    ),
    (
        r"C:\Users\karim\.gemini\antigravity-ide\brain\5c494dcf-7a91-4c17-ae4e-81729a5bf8d1\hero_mobile_bg_clean_1781448900048.png",
        r"c:\Users\karim\Desktop\afaq-alquran\public\hero-mobile-bg.webp"
    ),
    (
        r"C:\Users\karim\.gemini\antigravity-ide\brain\5c494dcf-7a91-4c17-ae4e-81729a5bf8d1\contact_bg_clean_1781449023404.png",
        r"c:\Users\karim\Desktop\afaq-alquran\public\contact-bg.webp"
    ),
    (
        r"C:\Users\karim\.gemini\antigravity-ide\brain\5c494dcf-7a91-4c17-ae4e-81729a5bf8d1\contact_mobile_bg_clean_1781449290196.png",
        r"c:\Users\karim\Desktop\afaq-alquran\public\contact-mobile-bg.webp"
    ),
    (
        r"C:\Users\karim\.gemini\antigravity-ide\brain\5c494dcf-7a91-4c17-ae4e-81729a5bf8d1\hero_bg_clean_1781448746383.png",
        r"c:\Users\karim\Desktop\afaq-alquran\public\promo.webp"
    )
]

for src, dest in conversions:
    try:
        img = Image.open(src)
        img.save(dest, "WEBP", quality=85)
        print(f"Successfully converted and saved {src} -> {dest}")
    except Exception as e:
        print(f"Error converting {src} -> {dest}: {e}")
