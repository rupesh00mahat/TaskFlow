const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
        publicPath: '/',
    },
    resolve: {
        extensions: ['.ts', '.js','.tsx','.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/, 
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    mode: process.env.NODE_ENV ||'development',
    devServer: {
        historyApiFallback: {
            disableDotRule: true,
            index: '/index.html'
        },
        static: path.resolve(__dirname, "dist"),
        port: 3000,
        open: true,
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({template: './public/index.html'})
    ]
}