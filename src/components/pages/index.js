import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Bundle from 'components/elements/Bundle'
import Header from 'components/elements/Header'
import Helmet from 'react-helmet'

const HomeLazy = require('bundle-loader?lazy&name=Home!components/pages/Home/index')
const ArticleLazy = require('bundle-loader?lazy&name=Article!components/pages/Article/index')
const UserLazy = require('bundle-loader?lazy&name=User!components/pages/User/index')
const CreateArticleLazy = require('bundle-loader?lazy&name=CreateArticle!components/pages/CreateArticle/index')

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

const Pages = props => {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path={ '/article/:id' } exact component={ Article }/>
        <Route path={ '/user/:id' } exact component={ User }/>
        <Route path={ '/create/article' } exact component={ CreateArticle }/>
        <Route component={ NotFind }/>
      </Switch>
    </div>
  )
}

export default Pages
