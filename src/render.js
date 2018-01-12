import fs from 'fs'
import path from 'path'
import React from 'react'
import express from 'express'
import { Helmet } from 'react-helmet'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router'
import { renderToString } from 'react-dom/server'
import config from '../config'
import routes from 'util/routes'
import { appStore } from 'util/store'
import Application from './components'
import { matchRoutes, renderRoutes } from 'react-router-config'

const app = express()

const tpl = fs.readFileSync(
  path.join('dist', 'index.html')
).toString()

const renderFullPage = (html, meta, initialState) => {
  return tpl
    .replace('<meta data-meta="meta">', meta)
    .replace('<div id="app"><div class="loadingContainer"><div><div class="loadingWhirlpool"></div></div></div></div>', `<div id="app">${html}</div>`)
    .replace('<script>window.__INITIAL_STATE__={}</script>', `<script>window.__INITIAL_STATE__=${JSON.stringify(initialState)}</script>`)
}

app.use('/dist', express.static('dist'))

app.post('/render/test', (req, res) => {
  res.json({
    ret: 200,
    data: {
      test: 'this is test data'
    }
  })
})

app.get('/robots.txt', (req, res) => {
  res.send('')
})

app.get('/favicon.ico', (req, res) => {
  res.send('')
})

app.get('*', (req, res) => {
  const store = appStore({})
  const branch = matchRoutes(routes, req.url)
  let fetchs = []
  branch.map(({route, match}) => route.component.Fetchs && typeof route.component.Fetchs === 'function' ? route.component.Fetchs(match.params) : [])
    .map(s => typeof s === 'function' ? fetchs.push(store.dispatch(s)) : s.map(_s => fetchs.push(store.dispatch(_s))))

  Promise.all(fetchs).then(() => {
    let context = {}
    let html = renderToString(
      <Provider store={ store }>
        <StaticRouter
          location={ req.url }
          context={ context }
        >
          <Application/>
        </StaticRouter>
      </Provider>
    )

    const helmet = Helmet.renderStatic()
    if (context.url) {
      res.writeHead(302, { Location: context.url })
      res.end()
    } else if(context.status === 404) {
      res.status(404)
      res.send(renderFullPage(html, ([helmet.title.toString(), helmet.meta.toString()].join('')), store.getState()))
    } else {
      res.send(renderFullPage(html, ([helmet.title.toString(), helmet.meta.toString()].join('')), store.getState()))
    }
  })
})

app.listen(config.port, () => console.log('server online in ' + config.port))
