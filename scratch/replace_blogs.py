import re

file_path = r"c:\Users\karim\Desktop\afaq-alquran\src\data\blogs.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace Walamnaho Academy with Afaq Al-Quran Academy
content = content.replace("Walamnaho Academy", "Afaq Al-Quran Academy")

# Replace Walamnaho with Afaq Al-Quran
content = content.replace("Walamnaho", "Afaq Al-Quran")

# Replace ولمناهو with آفاق القرآن
content = content.replace("ولمناهو", "آفاق القرآن")

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Blogs data updated successfully!")
