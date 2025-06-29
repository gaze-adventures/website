// Requires: npm install heic-convert fs-extra path
const fs = require('fs-extra');
const path = require('path');
const heicConvert = require('heic-convert');

const inputDir = path.join(__dirname, 'public');
const outputDir = inputDir;

(async () => {
  const files = await fs.readdir(inputDir);
  for (const file of files) {
    if (file.toLowerCase().endsWith('.heic')) {
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, path.parse(file).name + '.JPG');
      try {
        const inputBuffer = await fs.readFile(inputPath);
        const outputBuffer = await heicConvert({
          buffer: inputBuffer,
          format: 'JPEG',
          quality: 1
        });
        await fs.writeFile(outputPath, outputBuffer);
        console.log(`Converted ${file} -> ${path.basename(outputPath)}`);
      } catch (e) {
        console.error(`Failed to convert ${file}:`, e.message);
      }
    }
  }
  console.log('Conversion complete.');
})();