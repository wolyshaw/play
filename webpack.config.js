const webpack = require('webpack')
const path = require('path')
const config = require('./config')
const lessConfig = require('./less.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanPlugin = require("clean-webpack-plugin")
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    bundle: './src/index.js'
  },
  output: {
    filename: '[hash:5].[name].js',
    path: path.resolve('./dist'),
    publicPath: '//dn-abcdea.qbox.me/dist/',
    chunkFilename: '[chunkhash:5].[name].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets:  ['react', 'env', 'latest'],
          plugins: ['transform-runtime']
        }
      },
      {
        test: /\.(css|less)$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader?modules&localIdentName=[name]--[local]--[hash:base64:5]'
            },
            {
              loader: 'less-loader',
              options: lessConfig
            }
          ]
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
      name: 'common',
      minChunks: Infinity
    })
  ]
}
