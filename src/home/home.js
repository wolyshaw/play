import React from 'react'
import { Link } from 'react-router'
import headerNav from '../modules/siteHeader/headerNav'

export default React.createClass({
  render() {
    return (
      <div>
        <Link to="/page">to page</Link>
        { this.props.children }
      </div>
    )
  }
})
