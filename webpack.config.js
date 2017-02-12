const webpack = require('webpack')
const path = require('path')
const config = require('./config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: 'index.min.js',
    path: path.resolve('./dist'),
    publicPath: '/'
  },
  module: {
    loaders: [
      {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader?presets[]=es2015&presets[]=react'
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        fullbackLoader: 'style-loader',
        loader: ['css-loader?modules&localIdentName=[name]--[local]--[hash:base64:5]']
      })
    }
  ]
  },
  plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'static', 'index_default.html'),
			title: config.site.title,
			keywords: config.site.keywords,
			description: config.site.description,
			header: config.site.header
		}),
    new ExtractTextPlugin({
      filename: 'static/play.css',
      allChunks: true
    }),
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
