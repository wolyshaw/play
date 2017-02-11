import React, {Component} from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import store from './reducers'
import Main from './containers/main'
import Add from './containers/add'
import Home from './components/home'
import Post from './containers/Post'
import style from './static/common.css'
import './static/index.css'
let appStore = createStore(
	store,
	applyMiddleware(thunk)
)

render(
	<Provider store={appStore}>
		<Router history={browserHistory}>
			<Route path="/" component={Main}>
				<IndexRoute component={Home}/>
				<Route path="/add" component={Add}/>
				<Route path="/post/:id" component={Post}/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
)
