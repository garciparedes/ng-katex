import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import angular from 'rollup-plugin-angular';
import typescript from 'rollup-plugin-typescript2';

import sass from 'node-sass';
import CleanCSS from 'clean-css';

const cssmin = new CleanCSS();
const htmlminOpts = {
    caseSensitive: true,
    collapseWhitespace: true,
    removeComments: true,
};

import { nameLibrary, PATH_SRC, PATH_DIST } from './config.js';
export default {
  input: PATH_SRC + nameLibrary + '.ts',
  output: {
    format: 'umd',
    file: PATH_DIST + nameLibrary + ".umd.js",
  },
  name: nameLibrary,
  sourcemap: true,
  external: [
    '@angular/core',
    'katex',
    'rxjs',
    'zone.js'
  ],
  plugins: [
    angular(
      {
        replace: true,
        preprocessors:{
          template: template =>  minifyHtml(template, htmlminOpts),
          style: scss => cssmin.minify(sass.renderSync({ data: scss }).css).styles
        }
      }
    ),
    typescript(),
    resolve(),
    commonjs({
      include: 'node_modules/**'
    })
  ],
  onwarn: warning => {
    const skip_codes = [
      'THIS_IS_UNDEFINED',
      'MISSING_GLOBAL_NAME'
    ];
    if (skip_codes.indexOf(warning.code) != -1) return;
    console.error(warning);
  }
};
