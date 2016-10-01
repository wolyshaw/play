import React, {Component} from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import home from './src/home/'
import page from './src/page/'
import events from './src/events/'
import post from './src/post/'
import headerNav from './src/common/siteHeader/headerNav'

console.log(events)

render((
  <Router history={browserHistory}>
    <Route path="/" component={headerNav}>
      <IndexRoute component={home}/>
      <Route path="/events/:id" component={events}/>
      <Route path="/page/:id" component={page}/>
      <Route path="/post/:id" component={post} />
    </Route>
  </Router>
), document.getElementById('app'))
