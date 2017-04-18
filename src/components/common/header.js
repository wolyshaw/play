import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import UserInfo from 'components/common/userInfo'
import styles from 'static/header.css'

const Header = props => {
  const { user } = props
  return (
    <header className={ styles.siteHeader }>
      <div className={ styles.content }>
        <h1 className={ styles.logo }>
          <Link to={ '/' }>abcdea</Link>
        </h1>
        <nav className={ styles.menu }>
          <NavLink to={ '/home' } activeClassName={ styles.active }>home</NavLink>
        </nav>
        <UserInfo user={ user }/>
      </div>
    </header>
  )
}

export default Header
