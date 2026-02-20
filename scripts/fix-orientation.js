import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const imagesDir = path.join(__dirname, '..', 'public', 'images');

async function fixOrientation(inputPath) {
  try {
    const ext = path.extname(inputPath).toLowerCase();
    const tempPath = inputPath + '.tmp';

    // Read metadata first
    const metadata = await sharp(inputPath).metadata();

    // Check if image has EXIF orientation that needs fixing
    // Orientation 1 = normal, others need rotation
    if (metadata.orientation && metadata.orientation !== 1) {
      console.log(`🔄 Fixing orientation for ${path.basename(inputPath)} (orientation: ${metadata.orientation})`);

      if (ext === '.webp') {
        await sharp(inputPath)
          .rotate() // Auto-rotate based on EXIF
          .webp({ quality: 85, effort: 6 })
          .toFile(tempPath);
      } else if (['.jpg', '.jpeg'].includes(ext)) {
        await sharp(inputPath)
          .rotate() // Auto-rotate based on EXIF
          .jpeg({ quality: 90 })
          .toFile(tempPath);
      } else if (ext === '.png') {
        await sharp(inputPath)
          .rotate() // Auto-rotate based on EXIF
          .png()
          .toFile(tempPath);
      }

      // Replace original with fixed version
      await fs.promises.unlink(inputPath);
      await fs.promises.rename(tempPath, inputPath);

      console.log(`✅ Fixed ${path.basename(inputPath)}`);
      return true;
    } else {
      console.log(`⏭️  ${path.basename(inputPath)} - orientation OK`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error processing ${inputPath}:`, error.message);
    // Clean up temp file if it exists
    const tempPath = inputPath + '.tmp';
    if (fs.existsSync(tempPath)) {
      await fs.promises.unlink(tempPath);
    }
    return false;
  }
}

async function processDirectory(dir) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  let fixed = 0;

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      fixed += await processDirectory(fullPath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
        const wasFixed = await fixOrientation(fullPath);
        if (wasFixed) fixed++;
      }
    }
  }

  return fixed;
}

async function main() {
  console.log('🔄 Checking and fixing image orientations...\n');

  if (!fs.existsSync(imagesDir)) {
    console.error(`❌ Images directory not found: ${imagesDir}`);
    process.exit(1);
  }

  const fixed = await processDirectory(imagesDir);

  console.log(`\n✅ Done! Fixed ${fixed} image(s).`);
}

main().catch(console.error);
