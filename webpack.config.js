const path = require('path')

// 文档=> https://webpack.js.org/configuration/dev-server/
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 5000,
        allowedHosts: [
            'localhost',
            '192.168.124.95',
            'dev.local',
            '*',
        ],
    },
}
