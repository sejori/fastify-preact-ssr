import resolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'

export default [
  {
    input: 'lib/server.js',
    output: {
      file: 'build/server.js',
      format: 'cjs',
    },
    plugins: [resolve(), json()],
  },
  {
    input: 'src/client.js',
    output: {
      file: 'public/client.js',
      format: 'es',
      name: 'client',
    },
    plugins: [resolve(), json()],
  },
]
