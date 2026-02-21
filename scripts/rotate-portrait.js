import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const imagesDir = path.join(__dirname, '..', 'public', 'images');

// Images that should remain portrait (not rotated)
const keepPortrait = [
  // Add any image names here that are actually meant to be portrait
];

async function rotateImage(inputPath) {
  const filename = path.basename(inputPath);
  const ext = path.extname(inputPath).toLowerCase();

  // Skip if in keep portrait list
  if (keepPortrait.some(p => filename.includes(p))) {
    console.log(`⏭️  Skipping ${filename} (marked as portrait)`);
    return false;
  }

  try {
    const metadata = await sharp(inputPath).metadata();

    // Only rotate if portrait (height > width)
    if (metadata.height > metadata.width) {
      console.log(`🔄 Rotating ${filename} (${metadata.width}x${metadata.height} -> ${metadata.height}x${metadata.width})`);

      const tempPath = inputPath + '.tmp';

      if (ext === '.webp') {
        await sharp(inputPath)
          .rotate(90)
          .webp({ quality: 85, effort: 6 })
          .toFile(tempPath);
      } else if (['.jpg', '.jpeg'].includes(ext)) {
        await sharp(inputPath)
          .rotate(90)
          .jpeg({ quality: 90 })
          .toFile(tempPath);
      } else if (ext === '.png') {
        await sharp(inputPath)
          .rotate(90)
          .png()
          .toFile(tempPath);
      }

      await fs.promises.unlink(inputPath);
      await fs.promises.rename(tempPath, inputPath);

      console.log(`✅ Rotated ${filename}`);
      return true;
    } else {
      console.log(`⏭️  ${filename} - already landscape`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error rotating ${filename}:`, error.message);
    const tempPath = inputPath + '.tmp';
    if (fs.existsSync(tempPath)) {
      await fs.promises.unlink(tempPath);
    }
    return false;
  }
}

async function processDirectory(dir) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  let rotated = 0;

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      // Only process polebarns and projects folders
      if (entry.name === 'polebarns' || entry.name === 'projects') {
        rotated += await processSubdir(fullPath);
      }
    }
  }

  return rotated;
}

async function processSubdir(dir) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  let rotated = 0;

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
        const wasRotated = await rotateImage(fullPath);
        if (wasRotated) rotated++;
      }
    }
  }

  return rotated;
}

async function main() {
  console.log('🔄 Rotating portrait images to landscape...\n');
  console.log('Processing polebarns and projects folders...\n');

  if (!fs.existsSync(imagesDir)) {
    console.error(`❌ Images directory not found: ${imagesDir}`);
    process.exit(1);
  }

  const rotated = await processDirectory(imagesDir);

  console.log(`\n✅ Done! Rotated ${rotated} image(s).`);
}

main().catch(console.error);
