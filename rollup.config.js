export default [
  {
    input: 'src/Main.js',
    output: {
      file: 'dist/VueSimpleWebSocket.module.js',
      name: 'VueSimpleWebSocket',
      format: 'esm',
      sourcemap: true
    }
  },
  {
    input: 'src/Main.js',
    output: {
      file: 'dist/VueSimpleWebSocket.js',
      name: 'VueSimpleWebSocket',
      format: 'cjs',
      sourcemap: true
    }
  }
]
