var webpack = require('webpack')
var path = require('path')

var publicPath = 'http://localhost:8080/'
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true'

module.exports = {
  entry: {
    index: ['./index.js', hotMiddlewareScript]
  },
  output: {
    filename: './index.min.js',
    path: path.resolve('./dist'),
    publicPath: publicPath
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader?presets[]=es2015&presets[]=react'
    }]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}
