const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CustomJsonLoader = require('./json-loader');

module.exports = {
    mode: process.env.mode == 'development' ? 'development' : 'production',
    entry: './src/index.ts',
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[chunkhash].js',
        clean: true,
    },
    devServer: {
        open: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HTMLWebpackPlugin({
            minify: true,
            template: './index.html'
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /node_modules/,
                    name: "vendors",
                    chunks: "all",
                },
            },
        },
        runtimeChunk: {
            name: "manifest",
        },
        minimizer: [
            new TerserWebpackPlugin({
                parallel: true,
            })
        ],
        minimize: true
    },
    module: {
        rules: [{
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                // loader: 'file-loader',
                type: 'asset/inline',
            },
            {
                test: /\.json$/,
                type: 'asset/inline', // Sound stupid, but PixiJS has build-in loader for Json
                exclude: /node_modules/
                // use: [
                //     {
                //         loader: path.resolve('./json-loader.js')
                //     }
                // ]
            }
        ]
    }
}