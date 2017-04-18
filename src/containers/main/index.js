import React from 'react'
import { connect } from 'react-redux'
import { Router } from 'react-router'
import { Route, Link } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import Header from 'components/common/header'
import Posts from 'components/home/posts'

const history = createHistory()

const mapStateToProps = state => {
  return ({
    common: state.common,
    popup: state.popup,
    hintShow: state.common.hint.show,
    message: state.common.hint.message,
    delay: state.common.hint.delay,
    status: state.common.hint.status,
    loadingShow: state.common.loading.show
  })
}

const Test = props => {
  return (
    <div>test</div>
  )
}

let Main = props => {
  let {
    hintShow,
    children,
    message,
    delay,
    status,
    loadingShow,
    common,
    popup
  } = props

  return (
    <Router history={ history }>
      <div>
        <Header/>
        <Route path={ '/' } exact component={ Posts }/>
      </div>
    </Router>
  )
}

export default connect(
  mapStateToProps
)(Main)
