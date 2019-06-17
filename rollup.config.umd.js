import angular from 'rollup-plugin-angular';
import typescript from 'rollup-plugin-typescript2';
import copy from 'rollup-plugin-copy';
import { uglify } from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

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
    name: nameLibrary,
    format: 'umd',
    file: PATH_DIST + nameLibrary + ".umd.js",
    sourcemap: true,
    globals: {
      '@angular/core': '@angular/core',
      '@angular/common': '@angular/common',
      'katex': 'katex',
    },
  },
  external: [
    '@angular/core',
    '@angular/common',
    'katex',
  ],
  plugins: [
    angular(
      {
        replace: true,
        preprocessors:{
          template: template =>  minifyHtml(template, htmlminOpts),
          style: scss => cssmin.minify(
            sass.renderSync({ data: scss }).css
          ).styles
        }
      }
    ),
    copy({
      "README.md": "./dist/README.md",
      "package.json": "./dist/package.json"
    }),
    uglify({}, minify),
    typescript({
        clean: true
    }),
  ],
  onwarn: warning => {
    console.error(warning);
  }
};
