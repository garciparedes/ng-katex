const del = require('del');
let extensions = '(*.d.ts|*.metadata.json|*.umd.js|*.esm.js|*.umd.js.map|\
                   *.esm.js.map)';

del(['./dist/!' + extensions]).then(paths => {
    console.log('Files and folders that would be deleted:\n', paths.join('\n'));
});
