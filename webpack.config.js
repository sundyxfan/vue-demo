var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

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
        }, {
            test: /bootstrap\/js\//,
            loader: 'imports?jQuery=jquery'
        }, { // [how-to-integrate-bootstrap-to-vue-js](http://forum.vuejs.org/topic/1403/how-to-integrate-bootstrap-to-vue-js/4)
            test: /\.(woff|woff2)$/,
            loader: "url?limit=10000&minetype=application/font-woff"
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=application/octet-stream"
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: "file"
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=image/svg+xml"
        }]
    },
    plugins: []
};
