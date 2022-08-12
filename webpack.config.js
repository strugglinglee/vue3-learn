const path = require('path');

module.exports = {
    mode: "production",
    entry: './packages/vue/src/index.ts',
    experiments: {
        outputModule: true,
    },
    output: {
        path: path.resolve(__dirname, './packages/vue/dist'),
        filename: 'strugglinglee.esm-bundler.js',
        library: {
            type: "module"
        }
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        // options for resolving module requests
        // (does not apply to resolving of loaders)
        // modules: ["node_modules", path.resolve(__dirname, "app")],
        // directories where to look for modules (in order)
        extensions: [".js", ".json", ".jsx", ".css", '.ts'],
        // 使用的扩展名
        alias: {
            '@strugglinglee/shared': path.resolve(__dirname, '', 'packages/shared/src'),
            '@strugglinglee/compiler-core': path.resolve(__dirname, '', 'packages/compiler-core/src'),
            '@strugglinglee/runtime-dom': path.resolve(__dirname, '', 'packages/runtime-dom/src'),
            '@strugglinglee/runtime-core': path.resolve(__dirname, '', 'packages/runtime-core/src'),
            '@strugglinglee/reactivity': path.resolve(__dirname, '', 'packages/reactivity/src'),
        }
    }
};