import React, {Component} from 'react'
import {render} from 'react-dom'
import {Link} from 'react-router'
import HomePostList from '../modules/homePostList'
import {objToStr, ajax} from '../util/util'

export default class home extends Component {
  constructor(props) {
    super(props)
  }

  getData() {
    ajax({
      url: 'https://api.github.com/repos/vmg/redcarpet/issues',
      data: {
        state: 'closed'
      },
      success: r => {
        console.log(r)
      }
    })
  }

  render() {
    return (
      <div>
        <Link to="/page">to page</Link>
        <div onClick={() => {console.log(HomePostList)}}>dfhdfhfgjghjgtyiuyoiupi</div>
        <HomePostList/>
        {this.props.children}
      </div>
    )
  }
}
