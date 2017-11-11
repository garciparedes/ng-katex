const fs = require('fs');
let copy_1 = fs.readFileSync('package.json').toString();
fs.writeFileSync('dist/package.json', copy_1);
let copy_2 = fs.readFileSync('readme.md').toString();
fs.writeFileSync('dist/readme.md', copy_2);
