import React from 'react'
import {showLogin} from '../../actions/popup/login'
import setHint from '../../actions/common/hint'

let loginData = {
  nice_name: undefined,
  password: undefined
}

let submitLogin = (e, dispatch) => {
  e.preventDefault()
  if (!loginData.nice_name.value.trim()) {
    dispatch(setHint({
      message: '登录名未填写'
    }))
    return
  }
  if (!loginData.password.value.trim()) {
    dispatch(setHint({
      message: '密码未填写'
    }))
    return
  }
}

let Login = props => {
  let {dispatch, login, hideLogin} = props
  return (
    <div className={'w_popup login' + (login.isShow ? ' w_popup_show' : '')}>
      <span className="close" onClick={() => hideLogin()}>关闭</span>
      <form onSubmit={e => submitLogin(e, dispatch)}>
        <label><span>昵称：</span><input ref={nice_name => loginData.nice_name = nice_name} type="text" /></label>
        <label><span>密码：</span><input ref={password => loginData.password = password} type="password" /></label>
        <input type="submit" className="w-btn" value="提交" />
      </form>
    </div>
  )
}

export default Login
