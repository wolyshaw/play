import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from 'components/common/Header'

const Test = props => {
  return (
    <div>
      test
    </div>
  )
}

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
          <Route path={ '/' } exact component={ TestA }/>
          <Route component={ Test }/>
        </Switch>
      </div>
    </Router>
  )
}

export default Main
