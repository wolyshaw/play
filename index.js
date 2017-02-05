import React, {Component} from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import Home from './src/components/home'
import Post from './src/containers/post'
import User from './src/containers/user'
import Main from './src/containers/main'
import Add from './src/containers/add'
import store from './src/reducers'

let playStore = createStore(
	store,
	applyMiddleware(thunk)
)
render(
	<Provider store={playStore}>
    <Router history={browserHistory}>
			<Route path="/" component={Main}>
        <IndexRoute component={Home}/>
				<Route path="/add" component={Add}/>
				<Route path="/post/:id" component={Post}/>
				<Route path="/user/:id" component={User}/>
      </Route>
    </Router>
	</Provider>,
	document.getElementById('app')
)
