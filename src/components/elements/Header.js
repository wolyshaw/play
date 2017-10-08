import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { appStore } from 'util'
import { connect } from 'react-redux'
import { openPopup } from 'actions/popup'
import { clearUser } from 'actions/user'
import styles from 'static/header.less'

const LoginButtons = props => {
  return (
    <div>
      <span onClick={ () => appStore.dispatch(openPopup({name: 'login'})) }>登录</span>
    </div>
  )
}

const UserButtons = props => {
  let { data } = props.user
  return (
    <div>
      <Link to={ `/user/${data.id}` }>
        <img src={data.avatar} className={ styles.avatar }/>{data.nice_name}
      </Link>
      <span onClick={
        () => {
          localStorage.removeItem('token')
          appStore.dispatch(clearUser())}
        }
      >
        退出
      </span>
    </div>
  )
}

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { user } = this.props
    return (
      <header className={ styles.header + ' clearfix' }>
        <Link to={ '/' } className={ styles.logo }><img src='//play-static.oss-cn-shanghai.aliyuncs.com/common/abcdea.png?x-oss-process=style/h_400'/></Link>
        <nav>
          <NavLink to={ '/' } activeClassName={ styles.active }>首页</NavLink>
          <NavLink to={ '/create/article' } activeClassName={ styles.active }>创建内容</NavLink>
          <NavLink to={ '/404' } activeClassName={ styles.active }>404</NavLink>
        </nav>
        <div className={ styles.userCtrl }>
          { user ? <UserButtons user={ user }/> : <LoginButtons/> }
        </div>
      </header>
    )
  }
}

export default connect(state => state)(Header)
