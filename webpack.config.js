var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        index: [
            './src/js/index.js'
        ]
    },
    output: {
        path: path.join(__dirname, 'resource'),
        filename: '[name].js',
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
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     },
        //     output: {
        //         comments: false
        //     }
        // }),
        // new webpack.EnvironmentPlugin(["NODE_ENV"]),
        new webpack.BannerPlugin('created by jogiter in ' + new Date().toLocaleString(), {

        }),

    ]
};