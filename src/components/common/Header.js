import React, { Component } from 'react'
import { render } from 'react-dom'
import { NavLink } from 'react-router-dom'

import styles from 'static/header.less'

export default class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header className={ styles.header }>
        <nav>
          <NavLink to={ '/' } activeClassName={ styles.active }>首页</NavLink>
          <NavLink to={ '/a' } activeClassName={ styles.active }>首页</NavLink>
        </nav>
      </header>
    )
  }
}
