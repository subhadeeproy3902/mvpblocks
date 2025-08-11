const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Directories to exclude
const excludeDirs = ['.next', 'node_modules'];

// Function to find all image files
function findImageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip excluded directories
      if (!excludeDirs.includes(file)) {
        findImageFiles(filePath, fileList);
      }
    } else {
      // Check if file is a PNG, JPG, or JPEG
      const ext = path.extname(file).toLowerCase();
      if (['.webp', '.jpg', '.jpeg'].includes(ext)) {
        fileList.push(filePath);
      }
    }
  });

  return fileList;
}

// Function to convert image to WebP
async function convertToWebP(filePath) {
  try {
    const webpPath = filePath.replace(/\.(png|jpg|jpeg)$/i, '.webp');

    // Check if WebP version already exists
    if (fs.existsSync(webpPath)) {
      console.log(`WebP version already exists for ${filePath}, skipping...`);
      return true;
    }

    // Get file stats to check size
    const stats = fs.statSync(filePath);
    const fileSizeInMB = stats.size / (1024 * 1024);

    // Adjust quality based on file size
    let quality = 80;
    if (fileSizeInMB > 2) {
      quality = 60; // Lower quality for larger files
    } else if (fileSizeInMB > 1) {
      quality = 70;
    }

    // Convert image to WebP with optimized settings
    await sharp(filePath)
      .webp({
        quality,
        effort: 6, // Higher effort for better compression
        lossless: false
      })
      .toFile(webpPath);

    const webpStats = fs.statSync(webpPath);
    const compressionRatio = ((stats.size - webpStats.size) / stats.size * 100).toFixed(1);

    console.log(`Converted ${filePath} to WebP (${compressionRatio}% smaller)`);
    return true;
  } catch (error) {
    console.error(`Error converting ${filePath} to WebP:`, error);
    return false;
  }
}

// Main function
async function main() {
  // Find all image files
  const imageFiles = findImageFiles('.');
  console.log(`Found ${imageFiles.length} image files to convert`);

  // Convert each image to WebP
  for (const filePath of imageFiles) {
    const success = await convertToWebP(filePath);

    // Remove original file if conversion was successful
    if (success) {
      try {
        fs.unlinkSync(filePath);
        console.log(`Removed original file: ${filePath}`);
      } catch (error) {
        console.error(`Error removing original file ${filePath}:`, error);
      }
    }
  }

  console.log('Image conversion complete!');
}

main().catch(console.error);
