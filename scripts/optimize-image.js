const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputPath = path.join(__dirname, '../public/founder.jpg');
const outputPath = path.join(__dirname, '../public/founder_optimized.jpg');

async function optimizeImage() {
    try {
        const metadata = await sharp(inputPath).metadata();
        console.log(`Original: ${metadata.width}x${metadata.height}, Size: ${(fs.statSync(inputPath).size / 1024 / 1024).toFixed(2)}MB`);

        await sharp(inputPath)
            .resize(1600, null, { // Resize to max width 1600px, creating responsive layout
                width: 1600,
                withoutEnlargement: true
            })
            .jpeg({
                quality: 85,
                mozjpeg: true
            })
            .toFile(outputPath);

        const newStats = fs.statSync(outputPath);
        console.log(`Optimized: Saved to ${outputPath}`);
        console.log(`New Size: ${(newStats.size / 1024).toFixed(2)}KB`);
    } catch (error) {
        console.error("Error optimizing image:", error);
    }
}

optimizeImage();
