import React, {Component} from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import home from './src/home/home'
import page from './src/page/page'
import post from './src/post/post'
import headerNav from './src/common/siteHeader/headerNav'

render((
  <Router history={browserHistory}>
    <Route path="/" component={headerNav}>
      <IndexRoute component={home}/>
      <Route path="/page" component={page}/>
      <Route path="/post/:id" component={post} />
    </Route>
  </Router>
), document.getElementById('app'))
