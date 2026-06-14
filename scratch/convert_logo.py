from PIL import Image
import os

input_path = r"C:\Users\karim\.gemini\antigravity-ide\brain\5c494dcf-7a91-4c17-ae4e-81729a5bf8d1\media__1781447488599.jpg"
output_path = r"c:\Users\karim\Desktop\afaq-alquran\public\logo.png"

def make_transparent(img_path, out_path, tolerance=240):
    img = Image.open(img_path).convert("RGBA")
    datas = img.getdata()
    
    newData = []
    for item in datas:
        # item is (R, G, B, A)
        # if pixel is close to white, make it transparent
        if item[0] >= tolerance and item[1] >= tolerance and item[2] >= tolerance:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)
            
    img.putdata(newData)
    img.save(out_path, "PNG")
    print(f"Saved transparent logo to {out_path}")

if __name__ == "__main__":
    make_transparent(input_path, output_path)
