import React, {Component} from 'react'
import {connect} from 'react-redux'
import setHint from '../../actions/common/hint'
import Login from '../../components/popup/login'
import Reg from '../../components/popup/reg'
import {hideLogin} from '../../actions/popup/login'
import {hideReg} from '../../actions/popup/reg'

let mapStateToProps = state => ({
  popup: state.popup
})

class Popup extends Component {
  constructor(props) {
    super(props)
  }

  hideLogin() {
    this.props.dispatch(hideLogin())
  }

  hideReg() {
    this.props.dispatch(hideReg())
  }

  render() {
    let {popup, dispatch} = this.props
    console.log(dispatch)
    return (
      <div>
        <Login login={popup.login} hideLogin={this.hideLogin.bind(this)} dispatch={dispatch}/>
        <Reg reg={popup.reg} hideReg={this.hideReg.bind(this)} dispatch={dispatch}/>
      </div>
    )
  }
}

export default connect(
  mapStateToProps
)(Popup)
