import React, {Component} from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import Home from './src/components/home'
import Main from './src/containers/main'
import store from './src/reducers'

let playStore = createStore(
	store,
	applyMiddleware(thunk)
)
console.log(playStore.getState())
render(
	<Provider store={playStore}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home}/>
      </Route>
    </Router>
	</Provider>,
	document.getElementById('app')
)
