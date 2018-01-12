import React, { PureComponent } from 'react'
import { NavLink, Link, withRouter } from 'react-router-dom'
import classnames from 'classnames/bind'
import styles from './index.less'
import logo from './logo.png'
const cx = classnames.bind(styles)

class Header extends PureComponent {
  constructor(props) {
    super(...props)
  }

  render() {
    return (
      <header className={ cx('clearfix', { header: true }) }>
        <Link to='/'><img className={ styles.logo } src={ logo }/></Link>
        <nav className={ styles.menu }>
          <NavLink exact to='/' activeClassName={ styles.active }>首页</NavLink>
          <NavLink exact to='/tag' activeClassName={ styles.active }>标签</NavLink>
          <NavLink exact to='/cat' activeClassName={ styles.active }>分类</NavLink>
        </nav>
      </header>
    )
  }
}

export default withRouter(Header)
