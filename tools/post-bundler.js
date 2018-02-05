const fs      = require('fs');
const rimraf  = require('rimraf');

// package.json Cleaner
const packageJson = JSON.parse(
  fs.readFileSync('./dist/package.json').toString()
);
delete packageJson.devDependencies;
delete packageJson.scripts;
fs.writeFileSync('./dist/package.json',
  JSON.stringify(packageJson, null, 2)
);

// File Remover
rimraf('./dist/node_modules', function(e) {
  if (e) console.log(e);
});
rimraf('./**/*.ngfactory.ts', function(e) {
  if (e) console.log(e);
});
