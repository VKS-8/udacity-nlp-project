const path = require('path');
const { fileURLToPath } = require('url'); // https://codingbeautydev.com/blog/javascript-dirname-is-not-defined-in-es-module-scope/
const HtmlWebPackPlugin = require ('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/client/index.js',
    mode: 'production', // Change to 'production' for production build
    resolve: {
      extensions: ['.js']
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'), // Output directory
    },
    stats: {
      children: true,
    },
    devtool: process.env.NODE_ENV === 'production' ? 'none' : 'source-map',
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: ['@babel/preset-env'],
                },
              },
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['**/*'], // Clean the entire output directory before each build
            verbose: true,
        })
    ]
};
