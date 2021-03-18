import resolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import { babel } from '@rollup/plugin-babel'

export default [
    {
        input: 'src/server.js',
        output: {
            file: 'build/server.js',
            format: 'cjs',
            watch: 'src/**/**/*'
        },
        plugins: [resolve(), json(), babel({ babelHelpers: 'bundled', plugins: [['@babel/plugin-transform-react-jsx', { pragma: 'h', pragmaFrag: 'Fragment' }]] })],
    },
    {
        input: 'src/client.js',
        output: {
            file: 'public/client.js',
            format: 'es',
            name: 'client',
            watch: 'src/**/**/*'
        },
        plugins: [resolve(), json(), babel({ babelHelpers: 'bundled', plugins: [['@babel/plugin-transform-react-jsx', { pragma: 'h', pragmaFrag: 'Fragment' }]] })],
    },
]
