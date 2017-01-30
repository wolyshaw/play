import React, {Component} from 'react'
import {connect} from 'react-redux'
import setHint from '../../actions/common/hint'
import {showLogin, toLogin} from '../../actions/popup/login'

let loginData = {
  nice_name: undefined,
  password: undefined
}

const mapStateToProps = state => ({})

const popupHint = set => setHint(set)

class Login extends Component {
  constructor(props) {
    super(props)
  }

  submitLogin(e) {
    e.preventDefault()
    if (!loginData.nice_name.value.trim()) {
      this.props.dispatch(popupHint({
        message: '登录名未填写'
      }))
      return
    }
    if (!loginData.password.value.trim()) {
      this.props.dispatch(popupHint({
        message: '密码未填写'
      }))
      return
    }
    this.props.dispatch(toLogin({
      nice_name: loginData.nice_name.value.trim(),
      password: loginData.password.value.trim()
    }))
    loginData.nice_name.value = ''
    loginData.password.value = ''
  }

  render() {
    let {login, hideLogin} = this.props
    return (
      <div className={'w_popup login' + (login.isShow ? ' w_popup_show' : '')}>
        <span className="close" onClick={() => hideLogin()}>关闭</span>
        <form onSubmit={e => this.submitLogin(e)}>
          <label><span>昵称：</span><input ref={nice_name => loginData.nice_name = nice_name} type="text" /></label>
          <label><span>密码：</span><input ref={password => loginData.password = password} type="password" /></label>
          <input type="submit" className="w-btn" value="提交" />
        </form>
      </div>
    )
  }
}

export default connect(
  mapStateToProps
)(Login)
