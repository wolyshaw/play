import React, { Component } from 'react'
import { render } from 'react-dom'
import { apiFetch } from 'util/util'
import { closePopup } from 'actions/popup'
import { setUser } from 'actions/user'
import { appStore } from 'util'

import styles from 'static/popups/login.less'

const { dispatch } = appStore

class Login extends Component {
  constructor(props) {
    super(props)
    this.submit = this._submit.bind(this)
  }

  _submit(e) {
    e.preventDefault()
    apiFetch({
      url: '/common/login',
      hint: false,
      body: {
        nice_name: this.refs.nice_name.value,
        password: this.refs.password.value
      },
      success: r => {
        localStorage.setItem('token', r.list)
        dispatch(setUser())
        dispatch(closePopup())
      }
    })
  }

  render() {
    return (
      <form className={ styles.wrap } onSubmit={ this.submit }>
        <label>
          用户名：<input type="text" ref="nice_name"/>
        </label>
        <label>
          密码：<input type="password" ref="password"/>
        </label>
        <input type="submit" value="登录"/>
      </form>
    )
  }
}

export default Login
