import React, {Component} from 'react'
import {connect} from 'react-redux'
import setHint from '../../actions/common/hint'
import {showReg, toReg} from '../../actions/popup/reg'

let regData = {
  nice_name: undefined,
  password: undefined,
  email: undefined
}

class Reg extends Component {
  constructor(props) {
    super(props)
  }

  submitReg(e) {
    e.preventDefault()
    if (!regData.nice_name.value.trim()) {
      this.props.dispatch(setHint({
        message: '用户名未填写'
      }))
      return
    }
    if (!regData.password.value.trim()) {
      this.props.dispatch(setHint({
        message: '密码未填写'
      }))
      return
    }
    if (!regData.email.value.trim()) {
      this.props.dispatch(setHint({
        message: 'email未填写'
      }))
      return
    }
    this.props.dispatch(toReg({
      nice_name: regData.nice_name.value.trim(),
      password: regData.password.value.trim(),
      email: regData.email.value.trim()
    }))
    regData.nice_name.value = ''
    regData.password.value = ''
    regData.email.value = ''
  }

  render() {
    let {submit, reg, hideReg} = this.props
    return (
      <div className={'w_popup reg' + (reg.isShow ? ' w_popup_show' : '')}>
        <span className="close" onClick={() => hideReg()}>关闭</span>
        <form onSubmit={e => this.submitReg(e)}>
          <label><span>昵称：</span><input ref={nice_name => regData.nice_name = nice_name} type="text" /></label>
          <label><span>密码：</span><input ref={password => regData.password = password} type="password" /></label>
          <label><span>邮箱：</span><input ref={email => regData.email = email} type="email" /></label>
          <input type="submit" className="w-btn" value="提交" />
        </form>
      </div>
    )
  }
}

export default connect()(Reg)
