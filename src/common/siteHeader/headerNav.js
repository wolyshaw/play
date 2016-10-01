import React, {Component} from 'react'
import {Link} from 'react-router'

export default class headerNav extends Component{
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <header className="p-header">
          <ul className="p-nav-warp clearfix">
            <li>
              <Link to="/">主页</Link>
            </li>
            <li>
              <Link to="/page">页面</Link>
            </li>
            <li>
              <Link to="/post">文章</Link>
            </li>
          </ul>
        </header>
        {this.props.children}
      </div>
    )
  }
}
