const path = require('path');

module.exports = {
    mode: "production",
    entry: './packages/vue/src/index.ts',
    output: {
        path: path.resolve(__dirname, './packages/vue/dist'),
        filename: 'mini-vue.cjs.js',
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
        }
    }
};