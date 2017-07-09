import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { apiFetch } from 'util/util'
import Header from 'components/common/Header'
import Bundle from 'components/common/Bundle'
import Helmet from 'react-helmet'

const HomeLazy = require('bundle-loader?lazy&name=home!components/pages/Home')

const Test = props => {
  return (
    <div>
      <Helmet title={ '当前页面未找到' }/>
      当前页面未找到
    </div>
  )
}

const Home = props => (
  <Bundle load={ HomeLazy } title={ 'Home' }>
    { (Container) => <Container { ...props }/> }
  </Bundle>
)

const TestA = props => {
  return (
    <div>
      TestA
    </div>
  )
}

const Main = props => {
  return (
    <Router>
      <div>
        <Header/>
        <Switch>
          <Route path={ '/' } exact component={ Home }/>
          <Route component={ Test }/>
        </Switch>
      </div>
    </Router>
  )
}

export default Main
