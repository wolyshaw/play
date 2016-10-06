import React, {Component} from 'react'
import {render} from 'react-dom'
import {Link} from 'react-router'
import HomePostList from './homePostList'
import {objToStr, ajax} from '../util/util'

export default class home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="post-list home-post-list">
        <HomePostList url='/' />
        {this.props.children}
      </div>
    )
  }
}
