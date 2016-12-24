import React, {Component} from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import Home from './src/pages/home'
// import Page from './src/pages/page'
// import Events from './src/pages/events'
import Post from './src/pages/post'
import Main from './src/modules/main'
import Upload from './src/pages/upload'
import Header from './src/modules/header'
import Categorie from './src/pages/categorie'

render((
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home}/>
      <Route path="/categorie/:id" component={Categorie}/>
      <Route path="/post/:id" component={Post}/>
      <Route path="/upload" component={Upload}/>
      {
        // <Route path="/events/:id" component={events}/>
        // <Route path="/page/:id" component={page}/>
      }
    </Route>
  </Router>
), document.getElementById('app'))
