import React from 'react'
import {showLogin, toLogin} from '../../actions/popup/login'

let loginData = {
  nice_name: undefined,
  password: undefined
}

let submitLogin = (e, popupHint) => {
  e.preventDefault()
  if (!loginData.nice_name.value.trim()) {
    popupHint({
      message: '登录名未填写'
    })
    return
  }
  if (!loginData.password.value.trim()) {
    popupHint({
      message: '密码未填写'
    })
    return
  }
  toLogin()
}

let Login = props => {
  let {popupHint, login, hideLogin} = props
  return (
    <div className={'w_popup login' + (login.isShow ? ' w_popup_show' : '')}>
      <span className="close" onClick={() => hideLogin()}>关闭</span>
      <form onSubmit={e => submitLogin(e, popupHint)}>
        <label><span>昵称：</span><input ref={nice_name => loginData.nice_name = nice_name} type="text" /></label>
        <label><span>密码：</span><input ref={password => loginData.password = password} type="password" /></label>
        <input type="submit" className="w-btn" value="提交" />
      </form>
    </div>
  )
}

export default Login
