import React, {Component} from 'react'
import {connect} from 'react-redux'
import Login from './login'
import Reg from './reg'
import Upload from './upload'
import setHint from '../../actions/common/hint'
import {hideLogin} from '../../actions/popup/login'
import {hideReg} from '../../actions/popup/reg'
import {hideUpload} from '../../actions/popup/upload'

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

  hideUpload() {
    this.props.dispatch(hideUpload())
  }

  popupHint(set) {
    this.props.dispatch(setHint({
      message: set.message
    }))
  }

  render() {
    let {popup, dispatch} = this.props
    return (
      <div>
        <Login login={popup.login} hideLogin={this.hideLogin.bind(this)} popupHint={this.popupHint.bind(this)}/>
        <Reg reg={popup.reg} hideReg={this.hideReg.bind(this)} popupHint={this.popupHint.bind(this)}/>
        <Upload upload={popup.upload} hideUpload={this.hideUpload.bind(this)}/>
      </div>
    )
  }
}

export default connect(
  mapStateToProps
)(Popup)
