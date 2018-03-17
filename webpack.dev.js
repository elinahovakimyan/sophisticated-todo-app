const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devServer: {
        inline: true,
        contentBase: './dist',
        port: process.env.port || 3000
    },
});
