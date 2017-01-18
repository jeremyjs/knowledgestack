const webpack = require('webpack');

module.exports = {
  debug: true,
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
      {
        test: /\.css$/,
        loader: 'style!css',
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
}
