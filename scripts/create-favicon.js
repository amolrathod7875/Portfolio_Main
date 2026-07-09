import sharp from 'sharp';

const inputPath = 'src/assets/profile.jpg';
const outputPath = 'public/favicon.png';
const size = 256;

async function createFavicon() {
  try {
    // Get image metadata
    const { width, height } = await sharp(inputPath).metadata();
    const minDimension = Math.min(width, height);
    const radius = Math.floor(minDimension / 2);
    
    // Create circular mask SVG with matching dimensions
    const circleSvg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
        <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="white"/>
      </svg>
    `;
    
    // Process: resize to square, then to favicon size, apply circular mask
    await sharp(inputPath)
      .resize(minDimension, minDimension, { fit: 'fill' })
      .resize(size, size)
      .composite([{
        input: Buffer.from(circleSvg),
        blend: 'dest-in'
      }])
      .png()
      .toFile(outputPath);
    
    console.log(`✓ Favicon created: ${outputPath}`);
  } catch (error) {
    console.error('Error:', error);
  }
}

createFavicon();