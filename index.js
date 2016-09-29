import React, {Component} from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import home from './src/home/home'
import page from './src/page/page'
import post from './src/post/post'
import postItem from './src/post/postItem'
import headerNav from './src/modules/siteHeader/headerNav'

render((
  <Router history={browserHistory}>
    <Route path="/" component={headerNav}>
      <IndexRoute component={home}/>
      <Route path="/page" component={page}/>
      <Route path="/post/:id" component={postItem} />
    </Route>
  </Router>
), document.getElementById('app'))
