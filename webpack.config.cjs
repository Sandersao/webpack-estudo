const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.html$/i, loader: "html-loader" },
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Webpack implementation'
  })],
  mode: 'development'
  // mode: 'production'
};