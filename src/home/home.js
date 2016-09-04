import React, {Component} from 'react'
import {render} from 'react-dom'
import {Link} from 'react-router'
import homePostList from '../modules/homePostList'
import {ajax} from '../util/util'
import headerNav from '../modules/siteHeader/headerNav'

export default class home extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Link to="/page" onClick={() => {console.log(ajax)}}>to page</Link>
        <homePostList/>
        {this.props.children}
      </div>
    )
  }
}
