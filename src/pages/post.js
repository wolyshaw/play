import React, {Component} from 'react'
import { Router, Route, Link } from 'react-router'
import {showLoading, ajax} from '../util/util'

export class PostInfo extends Component{
  render(){
    let info = this.props.info,
        hasImage = info.attachments && info.attachments[0],
        postItemImageStyle = {
          backgroundImage: 'url( '+ (hasImage ? info.attachments[0].url : "") + ')'
        }
    return(
      <div className={'post-info top-info' + (hasImage ? ' image-info' : '')} style={postItemImageStyle}>
        <div>
          <h3>{info.title}</h3>
          <p dangerouslySetInnerHTML={{__html: info.excerpt}}></p>
        </div>
      </div>
    )
  }
}

export default class Post extends Component{
  constructor(s){
    super(s)
    this.state = {
      post: {}
    }
  }
  componentWillMount(){
    ajax({
      data: {
        p: this.props.params.id
      },
      success: r => {
        this.setState({
          post: r
        })
      }
    })
  }
  render(){
    let post = this.state.post.post || {}
    return(
      <div className={'post-wrap ' + post.type}>
        <PostInfo info={post}/>
        <div className="post-content" dangerouslySetInnerHTML={{__html: post.content}}></div>
      </div>
    )
  }
}
