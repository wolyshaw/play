import React, {Component} from 'react'
import {connect} from 'react-redux'
import setHint from '../../actions/common/hint'
import {showLogin, toLogin} from '../../actions/popup/login'
import styles from '../../static/popup.css'

let loginData = {
  nice_name: undefined,
  password: undefined
},
loginForm

const mapStateToProps = state => ({})

class Login extends Component {
  constructor(props) {
    super(props)
  }

  submitLogin(e) {
    e.preventDefault()
    if (!loginData.nice_name.value.trim()) {
      this.props.dispatch(setHint({
        message: '登录名未填写'
      }))
      return
    }
    if (!loginData.password.value.trim()) {
      this.props.dispatch(setHint({
        message: '密码未填写'
      }))
      return
    }
    this.props.dispatch(toLogin({
      nice_name: loginData.nice_name.value.trim(),
      password: loginData.password.value.trim(),
      success: r => {
        loginForm.reset()
        this.props.dispatch({
          type: 'user_info',
          data: r.data
        })
        this.props.hideLogin()
      }
    }))
  }

  render() {
    let {login, hideLogin} = this.props
    return (
      <div className={styles.popup + (login.isShow ? ' ' + styles.popupShow : '')}>
        <span className={styles.close} onClick={() => hideLogin()}>关闭</span>
        <form ref={n => loginForm = n} className={styles.form} onSubmit={e => this.submitLogin(e)}>
          <label className={styles.label}>
            <span className={styles.span}>昵称：</span><input className={styles.input} ref={nice_name => loginData.nice_name = nice_name} type="text" />
          </label>
          <label className={styles.label}>
            <span className={styles.span}>密码：</span><input className={styles.input} ref={password => loginData.password = password} type="password" />
          </label>
          <input type="submit" className={styles.submit} value="提交" />
        </form>
      </div>
    )
  }
}

export default connect(
  mapStateToProps
)(Login)
