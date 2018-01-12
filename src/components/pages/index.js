import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Bundle from '../elements/Bundle'
const HomeLazy = require('bundle-loader?lazy&name=Home!components/pages/Home')
const NotFundLazy = require('bundle-loader?lazy&name=NotFund!components/pages/NotFund')

const Home = props => (
  <Bundle load={ HomeLazy }>
    { (Container) => <Container { ...props }/> }
  </Bundle>
)

const NotFund = props => (
  <Bundle load={ NotFundLazy }>
    { (Container) => <Container { ...props }/> }
  </Bundle>
)

export default class Pages extends Component {
  constructor(props) {
    super(...props)
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' component={ Home }/>
        <Route component={ NotFund }/>
      </Switch>
    )
  }
}
