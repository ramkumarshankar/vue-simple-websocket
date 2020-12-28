import { babel } from '@rollup/plugin-babel';
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: 'src/Main.js',
    output: {
      file: 'dist/VueSimpleWebSocket.module.js',
      name: 'VueSimpleWebSocket',
      format: 'esm',
      sourcemap: true
    },
    plugins: [
      babel({
        exclude: 'node_modules/**'
      }),
      terser()
    ]
  },
  {
    input: 'src/Main.js',
    output: {
      file: 'dist/VueSimpleWebSocket.js',
      name: 'VueSimpleWebSocket',
      format: 'cjs',
      sourcemap: true
    },
    plugins: [
      babel({
        exclude: 'node_modules/**'
      }),
      terser()
    ]
  }
]
