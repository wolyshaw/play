import React, {Component} from 'react'
import { render } from 'react-dom'
import {Link} from 'react-router'
import {objToStr, ajax} from '../util/util'

export default class post extends Component{
  constructor(props) {
    super(props)
    this.state = {
      item: {}
    }
  }
  componentWillMount(){
    ajax({
      url: this.props.location.pathname,
      data: {
        json: '1'
      },
      success: (r) => {
        this.setState({
          item: r.post
        })
      }
    })
  }
  render() {
    let post = this.state
    return (
      <div>
        <h3>{post.item.title}</h3>
      </div>
    )
  }
}
