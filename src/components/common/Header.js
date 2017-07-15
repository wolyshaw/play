import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link, NavLink } from 'react-router-dom'
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

    return (
      <header className={ styles.header + ' clearfix' }>
        <Link to={ '/' } className={ styles.logo }><img src='//play-static.oss-cn-shanghai.aliyuncs.com/common/abcdea.png?x-oss-process=style/h_400'/></Link>
        <nav>
          <NavLink to={ '/' } activeClassName={ styles.active }>首页</NavLink>
          <NavLink to={ '/404' } activeClassName={ styles.active }>404</NavLink>
        </nav>
        <div className={ styles.userCtrl }>
          { token ? <UserButtons/> : <LoginButtons/> }
        </div>
      </header>
    )
  }
}
