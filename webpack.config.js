const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpack = require('webpack');
const path = require('path');

const config = {

    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: './',
        filename: 'main.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        //contentBase: path.resolve(__dirname, 'dist/'),
        //publicPath: path.resolve(__dirname, 'dist/'),
        // hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/assets/index.html",
            meta: {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'},
        }),
    ],
};

module.exports = config;