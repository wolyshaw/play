const webpack = require('webpack')
const path = require('path')
const config = require('./config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanPlugin = require("clean-webpack-plugin")
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    vendor: ['react', 'history', 'react-dom', 'react-router-dom', 'redux', 'react-redux', 'redux-thunk', 'isomorphic-fetch'],
    bundle: './src/index.js'
  },
  output: {
    filename: '[hash:5].[name].js',
    path: path.resolve('./dist'),
    publicPath: '/dist/',
    chunkFilename: '[chunkhash:5].[name].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react'
      },
      {
        test: /\.(css|less)$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader?minimize&modules&localIdentName=[name]--[local]--[hash:base64:5]', 'less-loader']
        })
      },
      {
        test: /\.(css|less)$/,
        include: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?minimize!less-loader'
        })
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: '[hash:base64:5]--[name].[ext]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      util: path.resolve(path.join(__dirname, 'src', 'util')),
      static: path.resolve(path.join(__dirname, 'src', 'static')),
      actions: path.resolve(path.join(__dirname, 'src', 'actions')),
      containers: path.resolve(path.join(__dirname, 'src', 'containers')),
      components: path.resolve(path.join(__dirname, 'src', 'components'))
    }
  },
  plugins: [
    new CleanPlugin(['dist'], {
      root: path.join(__dirname),
      verbose: true
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'static', 'index_default.html'),
      title: config.site.title,
      keywords: config.site.keywords,
      description: config.site.description,
      header: config.site.header
    }),
    new ExtractTextPlugin('static/[hash:5].[name].css'),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    })
  ]
}
