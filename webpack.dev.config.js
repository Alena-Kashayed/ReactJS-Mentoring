const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const commonConfig = require('./webpack.common.config');

module.exports = merge(commonConfig, {
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        localIdentName: '[path][name]__[local]--[hash:base64:5]'
                    }
                },
                'sass-loader'
            ]
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
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