import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { apiFetch } from 'util/util'
import Helmet from 'react-helmet'
import Header from 'components/common/Header'
import Bundle from 'components/common/Bundle'

import styles from 'static/main.less'

const HomeLazy = require('bundle-loader?lazy&name=home!components/pages/Home')
const ArticleLazy = require('bundle-loader?lazy&name=home!components/pages/Article')
const UserLazy = require('bundle-loader?lazy&name=home!components/pages/User')

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

const Article = props => (
  <Bundle load={ ArticleLazy } title={ 'Home' }>
    { (Container) => <Container { ...props }/> }
  </Bundle>
)

const User = props => (
  <Bundle load={ UserLazy } title={ 'Home' }>
    { (Container) => <Container { ...props }/> }
  </Bundle>
)


const Main = props => {
  return (
    <Router>
      <div>
        <Header/>
        <div  className={ styles.controller }>
          <Switch>
            <Route path={ '/' } exact component={ Home }/>
            <Route path={ '/page/:id' } exact component={ Home }/>
            <Route path={ '/article/:id' } exact component={ Article }/>
            <Route path={ '/user/:id' } exact component={ User }/>
            <Route component={ Test }/>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default Main
