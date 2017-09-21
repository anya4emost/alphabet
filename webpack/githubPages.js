import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
import commonConfig from './common.js';
const path = require("path");

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, '../docs'),
        filename: '[name].[chunkhash].js',
        publicPath: './'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {screw_ie8: true},
            compress: {screw_ie8: true, warnings: false},
            comments: false,
            screw_ie8: true
        })
    ]
});