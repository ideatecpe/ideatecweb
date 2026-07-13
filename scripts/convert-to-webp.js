const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const targetDir = path.join(__dirname, '../public/assets');

function getFilesRecursively(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getFilesRecursively(filePath, fileList);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        fileList.push(filePath);
      }
    }
  }
  return fileList;
}

async function convertAll() {
  console.log(`Searching for images in: ${targetDir}`);
  const images = getFilesRecursively(targetDir);
  console.log(`Found ${images.length} images to convert.`);
  
  let totalSavedBytes = 0;
  
  for (const imgPath of images) {
    const ext = path.extname(imgPath);
    const baseName = imgPath.slice(0, -ext.length);
    const webpPath = `${baseName}.webp`;
    
    try {
      const originalSize = fs.statSync(imgPath).size;
      
      // Convert to webp
      await sharp(imgPath)
        .webp({ quality: 80 })
        .toFile(webpPath);
        
      const newSize = fs.statSync(webpPath).size;
      const saved = originalSize - newSize;
      totalSavedBytes += saved;
      
      console.log(`Converted: ${path.relative(targetDir, imgPath)}`);
      console.log(`  Size: ${(originalSize/1024).toFixed(2)} KB -> ${(newSize/1024).toFixed(2)} KB (Saved: ${(saved/1024).toFixed(2)} KB / -${((saved/originalSize)*100).toFixed(1)}%)`);
    } catch (err) {
      console.error(`Failed to convert ${imgPath}:`, err.message);
    }
  }
  
  console.log(`Conversion finished! Saved total: ${(totalSavedBytes / (1024 * 1024)).toFixed(2)} MB`);
}

convertAll();
