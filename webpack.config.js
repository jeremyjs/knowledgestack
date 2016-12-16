var webpack = require('webpack');
var HTMLWebpackPlugin = require('html-webpack-plugin');

// var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
//   template: __dirname + '/public/index.html',
//   filename: 'index.html',
//   inject: 'body',
// });

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    __dirname + '/src/client/index.js',
  ],
  output: {
    path: __dirname + '/public/js',
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // HTMLWebpackPluginConfig,
  ],
}
