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
    typescript()
  ],
  onwarn: warning => {
    const skip_codes = [
      'MISSING_GLOBAL_NAME'
    ];
    if (skip_codes.indexOf(warning.code) != -1) return;
    console.error(warning);
  }
};
