const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/client/index.js',
    mode: 'development',
    resolve: {
      extensions: ['.js']
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'), // Output directory
    },
    devtool: 'source-map',
    devServer: {
      contentBase: './dist', // Serve from the dist directory
      writeToDisk: true,     // Write files to disk even when serving from memory
    },
    stats: 'minimal'
}