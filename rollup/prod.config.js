// import { uglify } from 'rollup-plugin-uglify';
import { terser } from 'rollup-plugin-terser';
import { banner, pkg, resolve, handleMinEsm } from './utils';
import baseConfig from './base.config';

const common = {
  banner: banner,
  extend: false,
  globals: {
  },
};

const config = Object.assign(baseConfig, {
  output: [
    {
      file: resolve(handleMinEsm(pkg.main)),
      format: 'umd',
      name: pkg.namespace,
      ...common,
    }
  ],
  treeshake: true,
});

config.plugins.push(terser());

export default config;
