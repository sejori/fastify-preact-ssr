import resolve from '@rollup/plugin-node-resolve'

export default [
    {
        input: 'src/client.js',
        output: {
            file: 'public/client.js',
            format: 'es', // ES Module format for modern browsers
            name: 'client',
        },
        plugins: [resolve()],
    }
]