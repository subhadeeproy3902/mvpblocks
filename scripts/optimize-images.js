const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const EXTENSIONS = ['.webp', '.jpeg', '.webp', '.webp'];
const MAX_WIDTH = 1920;

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!EXTENSIONS.includes(ext)) return;

  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();
    
    // Skip if already optimized or SVG
    if (metadata.format === 'svg') return;
    
    // Only resize if larger than MAX_WIDTH
    if (metadata.width > MAX_WIDTH) {
      console.log(`Resizing ${filePath} from ${metadata.width}x${metadata.height}`);
      
      // Create optimized version
      await image
        .resize(MAX_WIDTH)
        .webp({ quality: 80 })
        .toFile(filePath.replace(ext, '.webp'));
      
      console.log(`✅ Created optimized version of ${path.basename(filePath)}`);
    } else {
      // Just convert to webp if not already
      if (ext !== '.webp') {
        await image
          .webp({ quality: 80 })
          .toFile(filePath.replace(ext, '.webp'));
        
        console.log(`✅ Converted ${path.basename(filePath)} to WebP`);
      }
    }
  } catch (error) {
    console.error(`❌ Error optimizing ${filePath}:`, error.message);
  }
}

async function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      await processDirectory(filePath);
    } else {
      await optimizeImage(filePath);
    }
  }
}

// Main function
async function main() {
  console.log('🔍 Starting image optimization...');
  await processDirectory(PUBLIC_DIR);
  console.log('✨ Image optimization complete!');
}

main().catch(console.error);
