import typescript from '@rollup/plugin-typescript';
import {generateDtsBundle} from 'rollup-plugin-dts-bundle-generator'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: './index.mjs',
      format: 'es'
    },
    {
      file: './index.cjs.js',
      format: 'cjs'
    },
    {
      file: './index.umd.js',
      format: 'iife',
    },
  ],
  plugins: [typescript(), generateDtsBundle()]
};
