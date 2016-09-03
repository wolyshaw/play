import React, {Component} from 'react'
import {Link} from 'react-router'
import homePostList from '../modules/homePostList'

export default class home extends Component{
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Link to="/page"><homePostList/></Link>
        {this.props.children}
      </div>
    )
  }
}
