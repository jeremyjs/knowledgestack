var webpack = require('webpack');
var HTMLWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    __dirname + '/src/client/index.js',
  ],
  output: {
    path: __dirname + '/app',
    filename: 'js/bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      // {
      //   test: /\.css$/,
      //   loader: 'style-loader!css-loader',
      // },
      {
        test: /\.css$/,
        loader: 'style!css',
      },
      {
        test: /\.json$/,
        loaders: ['json-loader'],
      },
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
    HTMLWebpackPluginConfig,
  ],
}
