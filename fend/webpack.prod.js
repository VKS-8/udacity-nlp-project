const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')


module.exports = {
    entry: './src/client/index.js',
    mode: 'production',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'), // Output directory
    },
    optimization: {
      minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})]
    },
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
            use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
          }
        ]
    },
    plugins: [
      new HtmlWebpackPlugin({
          template: "./src/client/views/index.html",
          filename: "./index.html",
      }),
      new CleanWebpackPlugin({
        // Simulate the removal of files
        dry: true,
        // Write Logs to Console
        verbose: true,
        // Automatically remove all unused webpack assets on rebuild
        cleanStaleWebpackAssets: true,
        protectWebpackAssets: false
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css"
      }),
      // new WorkboxPlugin.GenerateSW()
    ]
}