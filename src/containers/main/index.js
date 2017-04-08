import React from 'react'
import { connect } from 'react-redux'
import { Router } from 'react-router'
import { Route, Link } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import setHint from 'actions/common/hint'
import Hint from 'components/common/hint'
import Header from 'components/common/header'
import Loading from 'components/common/loading'
import Footer from 'components/common/footer'
import Popup from 'containers/popup'

import { getAdd, getPost, getUser } from 'util/getComponent'

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
    <Router>
      <div>
        <Route path={ '/' } exact getComponent={ getAdd }/>
      </div>
    </Router>
  )
}

export default connect(
  mapStateToProps
)(Main)
