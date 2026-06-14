const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const images = [
  { input: 'public/images/courses/courses-bg.jpeg', output: 'public/images/courses/courses-bg.webp' },
  { input: 'public/images/courses/courses-bg-mobail.jpeg', output: 'public/images/courses/courses-bg-mobail.webp' }
];

async function convert() {
  for (const img of images) {
    const inputPath = path.resolve(img.input);
    const outputPath = path.resolve(img.output);
    
    if (fs.existsSync(inputPath)) {
      console.log(`Converting ${img.input} to ${img.output}...`);
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);
      console.log(`Done: ${img.output}`);
    } else {
      console.error(`File not found: ${inputPath}`);
    }
  }
}

convert().catch(console.error);
