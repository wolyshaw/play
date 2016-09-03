const webpack = require('webpack')


module.exports = {
  entry: './index.js',

  output: {
    path: 'dist',
    filename: './index.min.js',
    publicPath: ''
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader?presets[]=es2015&presets[]=react'
    }]
  }
}
