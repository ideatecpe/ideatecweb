const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../src');

function getFilesRecursively(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getFilesRecursively(filePath, fileList);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.tsx', '.jsx', '.css', '.html'].includes(ext)) {
        fileList.push(filePath);
      }
    }
  }
  return fileList;
}

function replaceRefs() {
  console.log(`Replacing image references in: ${srcDir}`);
  const files = getFilesRecursively(srcDir);
  
  // Also add index.html in root
  const rootHtml = path.join(__dirname, '../index.html');
  if (fs.existsSync(rootHtml)) {
    files.push(rootHtml);
  }

  let replacedCount = 0;

  for (const filePath of files) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Regexp to find image paths pointing to assets with .png, .jpg, .jpeg extensions
    // Examples: ./assets/brand/logo.png, /assets/datos/ruc.png, etc.
    // Note: We don't want to replace "JPG, PNG, PSD" text inside descriptions (e.g. in Pricing.tsx)
    // So we match paths starting with /assets/ or ./assets/ or assets/
    
    // Pattern 1: match paths containing /assets/ or ./assets/ and ending in .png, .jpg, or .jpeg
    // Let's replace specifically occurrences like `assets/.../*.png`
    content = content.replace(/(['"\/]|^|\b)([\.\/]*assets\/[^'"\(\)]+?)\.(png|jpg|jpeg)(['"\/]|$|\b)/gi, (match, p1, p2, p3, p4) => {
      console.log(`  Replacing in ${path.relative(srcDir, filePath)}: ${match} -> ${p1}${p2}.webp${p4}`);
      replacedCount++;
      return `${p1}${p2}.webp${p4}`;
    });

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated: ${path.relative(srcDir, filePath)}`);
    }
  }

  console.log(`Finished replacing references! Replaced ${replacedCount} references.`);
}

replaceRefs();
