import {defineConfig} from '@rsbuild/core';
import {pluginReact} from '@rsbuild/plugin-react';
import {pluginSass} from "@rsbuild/plugin-sass";
import {pluginSvgr} from "@rsbuild/plugin-svgr";

export default defineConfig({
    output: {
        polyfill: 'usage',
        distPath: {
            root: 'build',
        },
        assetPrefix: "./",
    },
    performance: {
        chunkSplit: {
            strategy: 'split-by-size',
            minSize: 512 * 1000,
            maxSize: (1000 * 1000 * 2) - 1,
        },
    },
    plugins: [
        pluginReact({
            splitChunks: {
                react: true,
                router: true,
            },
        }),
        pluginSass(),
        pluginSvgr({
            svgrOptions: {
                replaceAttrValues: {
                    "#000": "black",
                },
            },
            mixedImport: true,
        })
    ],
    html: {
        template: './public/index.html',
        title: '', //hide title
    },
});
