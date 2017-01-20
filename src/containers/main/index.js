import React from 'react'
import {connect} from 'react-redux'
import setHint from '../../actions/common/hint'
import Hint from '../../components/common/hint'
import Loading from '../../components/common/loading'

let mapStateToProps = state => {
  return ({
    hintShow: state.common.hint.show,
    message: state.common.hint.message,
    delay: state.common.hint.delay,
    status: state.common.hint.status,
    loadingShow: state.common.loading.show
  })
}

let Main = props => {
  let {hintShow, children, message, propsSetHint, delay, status, loadingShow} = props
  return (
    <div>
      <div onClick={() => propsSetHint()}>main</div>
      {children}
      <Loading show={loadingShow}/>
      <Hint message={message} status={status} delay={delay} show={hintShow}/>
    </div>
  )
}

export default connect(
  mapStateToProps
)(Main)
