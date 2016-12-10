const webpack = require('webpack')
const path = require('path')
const publicPath = 'http://localhost:8080/'
const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true'
module.exports = {
  entry: ['./index.js', hotMiddlewareScript],
  output: {
    filename: './dist/index.min.js',
    path: path.resolve('./dist'),
    publicPath: publicPath
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets:  ['react', 'es2015']
        }
      },
      {
        test: /\.less$/,
        loader: 'style!css?importLoaders=1!less'
      },
      {
        test: /\.css$/,
        loader: 'style!css?importLoaders=1'
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    })
  ]
}
