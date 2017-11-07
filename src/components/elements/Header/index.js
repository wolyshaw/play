import React, { PureComponent } from 'react'
import { NavLink, Link } from 'react-router-dom'
import classnames from 'classnames/bind'
import styles from './header.less'
const cx = classnames.bind(styles)

export default class Header extends PureComponent {
  constructor(props) {
    super(...props)
  }

  render() {
    return (
      <header className={ cx('clearfix', { header: true }) }>
        <Link to='/'></Link>
        <nav className={ styles.menu }>
          <NavLink to='/' activeClassName={ styles.active }>首页</NavLink>
          <NavLink to='/tag' activeClassName={ styles.active }>标签</NavLink>
          <NavLink to='/cat' activeClassName={ styles.active }>分类</NavLink>
        </nav>
      </header>
    )
  }
}
