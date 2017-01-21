import React from 'react'
import {connect} from 'react-redux'
import setHint from '../../actions/common/hint'
import Login from '../../components/popup/login'

let mapStateToProps = state => ({
  popup: state.popup
})

let Popup = props => {
  let {popup} = props
  return (
    <div>
      <Login login={popup.login}/>
    </div>
  )
}

export default connect(
  mapStateToProps
)(Popup)
