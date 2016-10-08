var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: {
    index: './index.js'
  },
  output: {
    filename: './index.min.js',
    path: path.resolve('./dist'),
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader?presets[]=es2015&presets[]=react'
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    })
  ]
}
