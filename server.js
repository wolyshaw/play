var express = require('express')
var path = require('path')
var compression = require('compression')

var app = express()

app.use(compression())

var webpack = require('webpack'),
  webpackDevMiddleware = require('webpack-dev-middleware'),
  webpackHotMiddleware = require('webpack-hot-middleware'),
  webpackDevConfig = require('./webpack.config.js');

var compiler = webpack(webpackDevConfig);

// attach to the compiler & the server
app.use(webpackDevMiddleware(compiler, {

  // public path should be the same with webpack config
  publicPath: webpackDevConfig.output.publicPath,
  noInfo: true,
  stats: {
    colors: true
  }
}));
app.use(webpackHotMiddleware(compiler));

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'dist')))

// send all requests to index.html so browserHistory works
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '', 'index.html'))
})

var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})
