import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const imagesDir = path.join(__dirname, '..', 'public', 'images');

async function checkOrientation(dir) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await checkOrientation(fullPath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        try {
          const metadata = await sharp(fullPath).metadata();
          if (metadata.orientation && metadata.orientation !== 1) {
            console.log(`⚠️  ${entry.name}: orientation=${metadata.orientation} (needs fix)`);
          }
        } catch (e) {
          // Skip files that can't be read
        }
      }
    }
  }
}

async function main() {
  console.log('Checking image orientations...\n');
  await checkOrientation(imagesDir);
  console.log('\nDone. Images listed above need orientation fix.');
}

main().catch(console.error);
