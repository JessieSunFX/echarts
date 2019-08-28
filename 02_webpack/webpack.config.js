const path = require('path')

module.exports = {
    mode: "development",
    // 开启监听
    watch: true,
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
}