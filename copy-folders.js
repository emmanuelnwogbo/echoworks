const fs = require('fs-extra');

// Source folders to be copied to the dist directory
const foldersToCopy = ['webp'];

// Path to the dist directory
const distPath = 'dist';

// Copy each folder to the dist directory
foldersToCopy.forEach((folder) => {
  const sourcePath = `./${folder}`;
  const destinationPath = `./${distPath}/${folder}`;

  fs.copySync(sourcePath, destinationPath);
});

console.log('Folders copied to the dist directory.');
