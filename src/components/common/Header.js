import React, { Component } from 'react'
import { render } from 'react-dom'
import { NavLink } from 'react-router-dom'
import { appStore } from 'util'
import { openPopup } from 'components/popups'
import styles from 'static/header.less'

const LoginButtons = props => {
  return (
    <div>
      <span onClick={ () => openPopup('login') }>登录</span>
    </div>
  )
}

const UserButtons = props => {
  return (
    <div>
      <span onClick={ () => openPopup('login') }>退出</span>
    </div>
  )
}

export default class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { token } = appStore.getState()
    console.log(token)
    return (
      <header className={ styles.header }>
        <nav>
          <NavLink to={ '/' } activeClassName={ styles.active }>首页</NavLink>
          <NavLink to={ '/404' } activeClassName={ styles.active }>404</NavLink>
        </nav>
        { token ? <UserButtons/> : <LoginButtons/> }
      </header>
    )
  }
}
