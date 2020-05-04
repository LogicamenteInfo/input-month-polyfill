require('@babel/register');
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({ template: './src/demo.html', hash: true });

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/input-month-polyfill.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: (process.env.NODE_ENV === 'production') ? 'input-month-polyfill.min.js' : 'input-month-polyfill.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        type: 'javascript/auto',
        test: /modernizrrc(\.json)?$/,
        use: ['modernizr-loader', 'json-loader'],
      }
    ]
  },
  resolve: {
    alias: {
      modernizr$: path.resolve(__dirname, '.modernizrrc'),
    }
  },
  node: { fs: 'empty' },
  plugins: [HTMLWebpackPluginConfig],
  devtool: 'source-map'
};