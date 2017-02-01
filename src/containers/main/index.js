import React from 'react'
import {connect} from 'react-redux'
import setHint from '../../actions/common/hint'
import Hint from '../../components/common/hint'
import Header from '../common/header'
import Loading from '../../components/common/loading'
import Footer from '../../components/common/footer'
import Popup from '../popup'

let mapStateToProps = state => {
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
  let {hintShow, children, message, delay, status, loadingShow, common, popup} = props
  return (
    <div>
      <Header common={common}/>
      {children}
      <Popup/>
      {loadingShow ? <Loading show={loadingShow}/> : ''}
      {hintShow ? <Hint message={message} status={status} delay={delay} show={hintShow}/> : ''}
      <Footer year={2017}/>
    </div>
  )
}

export default connect(
  mapStateToProps
)(Main)
