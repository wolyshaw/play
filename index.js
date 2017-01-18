import React, {Component} from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import Home from './src/components/home'
// import Post from './src/pages/post'
import Main from './src/containers/main'
import Upload from './src/pages/upload'
// import Header from './src/modules/header'
// import Categorie from './src/pages/categorie'
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
        <Route path="/upload" component={Upload}/>
      </Route>
    </Router>
	</Provider>,
	document.getElementById('app')
)
