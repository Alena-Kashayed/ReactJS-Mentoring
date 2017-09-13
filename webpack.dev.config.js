const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonConfig = require('./webpack.common.js');

module.exports = merge(commonConfig, {
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        localIdentName: '[path][name]__[local]--[hash:base64:5]'
                    }
                }
                , 'sass-loader'
            ]
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'dev', 'index_[hash].html'),
            files: {
                css: ['style_[hash].css'],
                js: ['[name]_[hash].js']
            }
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        hot: true,
        inline: true,
        port: 9000
    }
});