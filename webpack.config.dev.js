const webpack = require('webpack')
const path = require('path')
const config = require('./config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const publicPath = 'http://localhost:' + config.port + '/'
const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true'
module.exports = {
  entry: ['./src/index.js', hotMiddlewareScript],
  output: {
    filename: 'index.min.js',
    path: path.resolve('./dev'),
    publicPath: publicPath
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets:  ['react', 'es2015']
        }
      },
      {
        test: /\.(css|less)$/,
        exclude: /node_modules|nomodules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader?modules&localIdentName=[name]--[local]--[hash:base64:5]', 'less-loader']
        })
      },
      {
        test: /\.(css|less)$/,
        include: /node_modules|nomodules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!less-loader'
        })
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: '[name].[ext]'
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
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'static', 'index_default.html'),
      title: config.site.title,
      keywords: config.site.keywords,
      description: config.site.description,
      header: config.site.header
    }),
    new ExtractTextPlugin('static/play.css')
  ]
}
