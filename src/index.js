import React, {Component} from 'react'
import {render} from 'react-dom'
import { routerMiddleware } from 'react-router-redux'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

import store from './reducers'
import Main from 'containers/main'
import Home from 'components/home'
import 'static/common.css'

const middleware = [
  thunk,
  routerMiddleware(history)
]

const appStore = createStore(
  store,
  applyMiddleware(...middleware)
)



render(
  <Provider store={appStore}>
    <Main/>
  </Provider>,
  document.getElementById('app')
)
