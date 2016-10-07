import React, {Component} from 'react'
import {Link} from 'react-router'
import config from '../../../config'

class NavList extends Component{
  render(){
    return (
      <ul className="p-nav-warp clearfix">
        {
          config.navs.map((nav, eq) => {
            return (
              <li key={eq}>
                <Link to={nav.path}>{nav.title}</Link>
              </li>
            )
          })
        }
    </ul>
    )
  }
}

export default class headerNav extends Component{
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <header className="p-header">
          <NavList/>
        </header>
        {this.props.children}
      </div>
    )
  }
}
