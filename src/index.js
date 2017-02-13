import React, {Component} from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import store from './reducers'
import Main from './containers/main'
import Home from './components/home'
import './static/common.css'
let appStore = createStore(
	store,
	applyMiddleware(thunk)
)

const getAdd = (location, callback) => {
	require.ensure([], require => {
		callback(null, require('./containers/add'))
	}, 'add')
}

const getPost = (location, callback) => {
	require.ensure([], require => {
		callback(null, require('./containers/Post'))
	}, 'post')
}

render(
	<Provider store={appStore}>
		<Router history={browserHistory}>
			<Route path="/" component={Main}>
				<IndexRoute component={Home}/>
				<Route path="/add" getComponent={getPost}/>
				<Route path="/post/:id" getComponent={getPost}/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
)
