const fs = require('fs');

fs.writeFileSync('dist/package.json', 
  fs.readFileSync('package.json').toString()
);

fs.writeFileSync('dist/readme.md',
  fs.readFileSync('readme.md').toString()
);
