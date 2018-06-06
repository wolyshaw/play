import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'

const Loading = () => (
  <div>loading...</div>
)

const Home = Loadable({
  loader: () => import('@/components/pages/Home'),
  loading: Loading,
})

const NotFund = Loadable({
  loader: () => import('@/components/pages/NotFund'),
  loading: Loading,
})

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
