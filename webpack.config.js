var path = require('path');

module.exports = {
    entry: {
        index: './src/js/index.js'
    },
    output: {
        path: __dirname,
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.less/,
            loader: 'style!css!less'
        }, {
            test: /\.html/,
            loader: 'html'
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: 'url-loader'
        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        }]
    },
    plugins: [
    ]
};