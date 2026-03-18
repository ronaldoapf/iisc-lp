import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const images = [
  "raimundo.jpg",
  "todosjovens1.JPG",
  "convertidamente.png",
  "bateria1.jpg",
  "jovens1.jpg",
  "grupo.jpg",
  "semear.JPG",
  "todosjovens.JPG",
  "bateria.jpg",
  "jovens.jpg"
];

async function optimizeImages() {
  for (const img of images) {
    const inputPath = path.join('public', img);
    const basename = path.basename(img, path.extname(img));
    const outputPath = path.join('public', `${basename}-opt.webp`);
    
    try {
      if (fs.existsSync(inputPath)) {
        console.log(`Optimizing ${img}...`);
        await sharp(inputPath)
          .resize(1024, 768, { fit: 'cover', withoutEnlargement: true })
          .webp({ quality: 75 })
          .toFile(outputPath);
        console.log(`Saved to ${outputPath}`);
      } else {
          console.log(`File not found: ${inputPath}`);
      }
    } catch (err) {
      console.error(`Error processing ${img}:`, err);
    }
  }
}

optimizeImages();
