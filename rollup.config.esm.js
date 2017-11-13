import config from './rollup.config.umd.js';
import {nameLibrary,PATH_DIST} from './config.js'
config.format = "es";
config.dest = PATH_DIST + nameLibrary + ".esm.js";
export default config;
