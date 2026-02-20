import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const imagesDir = path.join(__dirname, '..', 'public', 'images');

async function convertToWebP(inputPath, outputPath) {
  try {
    const stats = await fs.promises.stat(inputPath);
    const outputStats = await fs.promises.stat(outputPath).catch(() => null);
    
    // Skip if WebP already exists and is newer
    if (outputStats && outputStats.mtime > stats.mtime) {
      console.log(`⏭️  Skipping ${path.basename(inputPath)} (WebP already exists)`);
      return;
    }

    await sharp(inputPath)
      .rotate() // Auto-rotate based on EXIF orientation
      .webp({ quality: 85, effort: 6 })
      .toFile(outputPath);
    
    const originalSize = stats.size;
    const newStats = await fs.promises.stat(outputPath);
    const newSize = newStats.size;
    const savings = ((1 - newSize / originalSize) * 100).toFixed(1);
    
    console.log(`✅ Converted ${path.basename(inputPath)} (${(originalSize / 1024).toFixed(1)}KB → ${(newSize / 1024).toFixed(1)}KB, ${savings}% smaller)`);
    return true;
  } catch (error) {
    console.error(`❌ Error converting ${inputPath}:`, error.message);
    return false;
  }
}

async function processDirectory(dir) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const webpPath = fullPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
        await convertToWebP(fullPath, webpPath);
      }
    }
  }
}

async function main() {
  console.log('🖼️  Converting images to WebP format...\n');
  
  if (!fs.existsSync(imagesDir)) {
    console.error(`❌ Images directory not found: ${imagesDir}`);
    process.exit(1);
  }
  
  await processDirectory(imagesDir);
  
  console.log('\n✅ Conversion complete!');
}

main().catch(console.error);

