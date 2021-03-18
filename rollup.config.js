import resolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import { babel } from '@rollup/plugin-babel'
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';
import copy from 'rollup-plugin-copy'
import glob from 'glob'

// find all pages in src/preact/pages directory
// so we can build separate bundles for each page.
const pageConfigs = glob.sync('./src/preact/pages/*.js').map(file => ({
    input: file,
    output: {
        file: `public/${file.split('/').slice(-1)[0]}`,
        format: 'es',
        watch: 'src/**/**/*'
    },
    plugins: [
        resolve(), 
        json(), 
        babel({ babelHelpers: 'bundled', plugins: [['@babel/plugin-transform-react-jsx', { pragma: 'h', pragmaFrag: 'Fragment' }]] })],
}))

export default [
    {
        input: 'src/server/index.js',
        output: {
            file: 'build/server.js',
            format: 'cjs',
            watch: 'src/**/**/*'
        },
        plugins: [
            copy({ targets: [{ src: 'src/assets/*', dest: 'public' }] }),
            resolve(),
            json(), 
            babel({ babelHelpers: 'bundled', plugins: [['@babel/plugin-transform-react-jsx', { pragma: 'h', pragmaFrag: 'Fragment' }]] }),
            dynamicImportVars()
        ]
    },
    ...pageConfigs
]
