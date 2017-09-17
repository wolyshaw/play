import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { apiFetch } from 'util/util'
import Helmet from 'react-helmet'
import Header from 'components/common/Header'
import Bundle from 'components/common/Bundle'

import styles from 'static/main.less'

const HomeLazy = require('bundle-loader?lazy&name=Home!components/pages/Home')
const ArticleLazy = require('bundle-loader?lazy&name=Article!components/pages/Article')
const UserLazy = require('bundle-loader?lazy&name=User!components/pages/User')
const CreateArticleLazy = require('bundle-loader?lazy&name=CreateArticle!components/pages/CreateArticle')

const NotFind = props => {
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
  <Bundle load={ ArticleLazy } title={ 'Article' }>
    { (Container) => <Container { ...props }/> }
  </Bundle>
)

const User = props => (
  <Bundle load={ UserLazy } title={ 'User' }>
    { (Container) => <Container { ...props }/> }
  </Bundle>
)

const CreateArticle = props => (
  <Bundle load={ CreateArticleLazy } title={ '创建新的内容' }>
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
            <Route path={ '/create/article' } exact component={ CreateArticle }/>
            <Route component={ NotFind }/>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default Main
