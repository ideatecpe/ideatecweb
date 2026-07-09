import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const TARGET_DIR = path.resolve('public/assets');

// Helper to recursively list files
function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(filePath));
    } else {
      results.push(filePath);
    }
  });
  return results;
}

async function optimize() {
  console.log(`Searching for images in: ${TARGET_DIR}`);
  const files = getFiles(TARGET_DIR);
  
  let totalSaved = 0;
  let count = 0;

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
      continue;
    }

    const stat = fs.statSync(file);
    const originalSize = stat.size;

    // Skip small files (under 50KB) to avoid unnecessary processing
    if (originalSize < 50 * 1024) {
      continue;
    }

    const tempPath = file + '.tmp';
    console.log(`Optimizing: ${path.relative(process.cwd(), file)} (${(originalSize / 1024 / 1024).toFixed(2)} MB)...`);

    try {
      if (ext === '.png') {
        await sharp(file)
          .png({ quality: 80, compressionLevel: 9, palette: true })
          .toFile(tempPath);
      } else if (ext === '.jpg' || ext === '.jpeg') {
        await sharp(file)
          .jpeg({ quality: 80, mozjpeg: true })
          .toFile(tempPath);
      }

      const tempStat = fs.statSync(tempPath);
      const newSize = tempStat.size;

      if (newSize < originalSize) {
        fs.renameSync(tempPath, file);
        const saved = originalSize - newSize;
        totalSaved += saved;
        count++;
        console.log(`  -> Done! New size: ${(newSize / 1024 / 1024).toFixed(2)} MB (Saved: ${(saved / 1024 / 1024).toFixed(2)} MB / -${((saved / originalSize) * 100).toFixed(1)}%)`);
      } else {
        fs.unlinkSync(tempPath);
        console.log(`  -> Skipped (no size reduction).`);
      }
    } catch (err) {
      console.error(`  -> Error optimizing ${file}:`, err.message);
      if (fs.existsSync(tempPath)) {
        fs.unlinkSync(tempPath);
      }
    }
  }

  console.log(`\nOptimization finished!`);
  console.log(`Optimized ${count} images.`);
  console.log(`Total storage saved: ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);
}

optimize().catch((err) => {
  console.error('Fatal error during optimization:', err);
});
