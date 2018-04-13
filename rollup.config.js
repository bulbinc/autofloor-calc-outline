// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    external: ['uuid']
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    }),
  ],  
};