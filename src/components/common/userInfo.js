import React, { Component } from 'react'
import { render } from 'react-dom'

import styles from 'static/header.css'

class Entrance extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    const showBody = e => {
      let { body } = this.refs
      body.classList.toggle(styles.show)
    }

    return (
      <div className={ styles.entrance } onMouseEnter={ showBody } onMouseLeave={ () => setTimeout(() => showBody(), 1000) }>
        <span className={ styles.toLogin }>请登录▲</span>
        <div className={ styles.loginMore } ref={ 'body' }>
          <span>注册</span>
        </div>
      </div>
    )
  }
}

class UserMenu extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    const showBody = e => {
      let { body } = this.refs
      body.classList.toggle(styles.show)
    }

    return (
      <div className={ styles.entrance } onMouseEnter={ showBody } onMouseLeave={ () => setTimeout(() => showBody(), 1000) }>
        <span className={ styles.toLogin }>wolyshaw▲</span>
        <div className={ styles.loginMore } ref={ 'body' }>
          <span>创建文章</span>
        </div>
      </div>
    )
  }
}

const UserInfo = props => {

  const { user } = props

  return (
    <div className={ styles.info }>
      {
        user ? <UserMenu/> : <Entrance/>
      }
    </div>
  )
}

export default UserInfo
