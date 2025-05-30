import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'

export default defineConfig({
    plugins: [pluginReact()],
    source: {
        entry: {
            index: './src/index.tsx',
        },
    },
    html: {
        template: './public/index.html',
    },
    dev: {
        hmr: true,
        liveReload: true,
        progressBar: true,
        cliShortcuts: true,
    },
    server: {
        port: 3000,
    },
    output: {
        distPath: {
            root: 'build',
            js: 'static/js',
            css: 'static/css',
            assets: 'static/assets',
        },
    },
})
