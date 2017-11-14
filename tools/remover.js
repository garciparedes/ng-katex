const del = require('del');
let extensions = '(*.d.ts|*.ngsummary.json|*.metadata.json|*.ngfactory.ts|\
                  *.umd.js|*.esm.js|*.umd.js.map|*.esm.js.map|src)';

/*
del(['./dist/!' + extensions, './dist/src/!' + extensions]).then(paths => {
    console.log('Files and folders that would be deleted:\n', paths.join('\n'));
});
*/
