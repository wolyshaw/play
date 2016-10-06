import React, {Component} from 'react'
import { render } from 'react-dom'
import {Link} from 'react-router'
import {objToStr, ajax} from '../util/util'

export default class post extends Component{
  constructor(props) {
    super(props)
    this.state = {
      item: {
        post: {}
      }
    }
  }
  componentWillMount(){
    ajax({
      url: '/',
      data: {
        p: this.props.routeParams.id
        json: '1'
      },
      success: (r) => {
        this.setState({
          item: r
        })
      }
    })
  }
  render() {
    let data = this.state.item
    return (
      <article>
        <h3>{data.post.title}</h3>
        <date>{data.post.date}</date>
        <div className="post-content" dangerouslySetInnerHTML={{__html: data.post.content}}></div>
      </article>
    )
  }
}
