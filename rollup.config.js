import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/index.ts',
  output: [
    { file: 'dist/bundle.cjs.js', format: 'cjs' },
    { file: 'dist/bundle.esm.js', format: 'esm' },
  ],  
  plugins: [resolve({extensions: ['.js', '.ts']}), terser(), typescript({ tsconfig: './tsconfig.json' }), babel({ babelHelpers: 'bundled', extensions: ['.js', '.ts']})]
};