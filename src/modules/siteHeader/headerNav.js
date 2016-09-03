import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <ul className="navWarp clearfix">
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
        {this.props.children}
      </div>
    )
  }
})
