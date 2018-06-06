const signale = require('signale')
const webpack = require('webpack')
const env = process.env.NODE_ENV || 'development'
const clearWindow = () => process.stdout.write(process.platform === 'win32' ? '\x1Bc' : '\x1B[2J\x1B[3J\x1B[H')

clearWindow()

const startBuild = config => {
  webpack(config, (error, stats) => {
    if(error) {
      return signale.fatal(error.stack || error)
    }

    const info = stats.toJson()

    stats.toString({
      color: true,
      assets: false,
      hash: true,
      progress: true,
      profile: true
    })

    if (stats.hasErrors()) {
      return signale.fatal(info.errors)
    }

    if (stats.hasWarnings()) {
      signale.watch(info.warnings)
    }

    signale.success('you project build success')
  })
}

if(env === 'development') {
  startBuild(require('./webpack/webpack.config.dev'))
} else {
  startBuild(require('./webpack/webpack.config.prod'))
}
