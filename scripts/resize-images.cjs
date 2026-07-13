const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function resizeImage(filePath, maxWidth, maxHeight = null) {
  if (!fs.existsSync(filePath)) return;
  const tempPath = filePath + '.tmp';
  try {
    // Read the file into a buffer to prevent file locking
    const buffer = fs.readFileSync(filePath);
    
    let pipeline = sharp(buffer);
    const metadata = await pipeline.metadata();
    
    // Only resize if original is larger
    if ((maxWidth && metadata.width > maxWidth) || (maxHeight && metadata.height > maxHeight)) {
      console.log(`Resizing: ${path.relative(process.cwd(), filePath)} (${metadata.width}x${metadata.height})`);
      
      const resizeOptions = {};
      if (maxWidth) resizeOptions.width = maxWidth;
      if (maxHeight) {
        resizeOptions.height = maxHeight;
        resizeOptions.fit = 'inside';
      }
      
      await pipeline
        .resize(resizeOptions)
        .toFile(tempPath);
        
      fs.unlinkSync(filePath);
      fs.renameSync(tempPath, filePath);
      
      const newSize = fs.statSync(filePath).size;
      console.log(`  Done! New size: ${(newSize/1024).toFixed(2)} KB`);
    }
  } catch (err) {
    console.error(`Error resizing ${filePath}:`, err.message);
    if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
  }
}

async function run() {
  console.log('Starting image resizing process...');
  
  // 1. Logo (displayed at 36x36, max 72px)
  await resizeImage(path.join(__dirname, '../public/assets/brand/logo.webp'), 72);
  
  // 2. Mascot (displayed at 72x72, max 144px)
  await resizeImage(path.join(__dirname, '../public/assets/brand/mascota.webp'), 144);
  
  // 3. Cards images (displayed at small sizes on desktop, max 400px width is perfect)
  const cardsDir = path.join(__dirname, '../public/assets/cards');
  if (fs.existsSync(cardsDir)) {
    const files = fs.readdirSync(cardsDir);
    for (const file of files) {
      if (file.endsWith('.webp')) {
        await resizeImage(path.join(cardsDir, file), 400);
      }
    }
  }
  
  // 4. Sponsors (displayed at max height 28px, max 56px height for retina)
  const sponsorsDir = path.join(__dirname, '../public/assets/sponsors');
  if (fs.existsSync(sponsorsDir)) {
    const files = fs.readdirSync(sponsorsDir);
    for (const file of files) {
      if (file.endsWith('.webp')) {
        await resizeImage(path.join(sponsorsDir, file), null, 56);
      }
    }
  }
  
  console.log('Resizing complete!');
}

run();
