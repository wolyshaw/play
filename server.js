const path = require('path')
const signale = require('signale')
const express = require('express')

const env = process.env.NODE_ENV || 'development'
const config = require('./config')

const app = express()
const { port, staticDirName } = config[env]

app.use(`/${staticDirName}`, express.static(`./${staticDirName}`))

if(env === 'development') {
  const proxy = require('http-proxy-middleware')
  const webpack = require('webpack')
  const devServer = require('webpack-dev-middleware')
  const hotServer = require('webpack-hot-middleware')
  const devConfig = require('./scripts/webpack/webpack.config.dev')
  const compiler = webpack(devConfig)
  const instance = devServer(compiler, {
    publicPath: devConfig.output.publicPath,
    serverSideRender: true,
    writeToDisk: path => /\.html$/.test(path),
    stats: {
      colors: true,
      chunks: false,
      chunkModules: false,
      children: false,
      modules: false,
      version: false
    }
  })
  const filter = (pathname, req) => req.method === 'POST'
  app.use(proxy(filter, {target: config[env].apiHost, changeOrigin: true, secure: false}))
  app.use(hotServer(compiler))
  app.use(instance)
  // instance.waitUntilValid(() => {
  //   console.log(chalk.green(`successfully, online in http://localhost:${port}`))
  // })
} else if(env === 'production') {
  const proxy = require('http-proxy-middleware')
  const filter = (pathname, req) => req.method === 'POST'
  app.use(proxy(filter, {target: config[env].apiHost, changeOrigin: true, secure: false}))
} else if(env === 'ssr') {
  const proxy = require('http-proxy-middleware')
  const filter = (pathname, req) => req.method === 'POST'
  app.use(proxy(filter, {target: config[env].apiHost, changeOrigin: true, secure: false}))
}

if(env === 'ssr') {
  const render = require('./dist/render')
  app.get('*', render.default)
} else {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, staticDirName, 'index.html'))
  })
}

app.listen(port, (err) => {
  if(err) throw err
  signale.success(`successfully, online in http://localhost:${port}`)
})
