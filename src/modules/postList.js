import React, {Component} from 'react'
import { Router, Route, Link } from 'react-router'
import {showLoading, ajax} from '../util/util'

export class PostItem extends Component {
  constructor(s) {
    super(s)
  }
  render(){
    let post = this.props.item
    return(
      <div>
        <h3>{post.title}</h3>
        {
          post.attachments[0] ? <img src={post.attachments[0].url}/> : ''
        }
        <div dangerouslySetInnerHTML={{__html: post.excerpt}}></div>
      </div>
    )
  }
}

export default class PostList extends Component{
  constructor(s){
    super(s)
    this.state = {
      postList: {}
    }
  }
  componentWillMount(){
    ajax({
      success: r => {
        this.setState({
          postList: r
        })
      }
    })
  }
  render(){
    let posts = this.state.postList.posts || []
    return(
      <div>
        {
          posts.map(item => <PostItem key={item.id} item={item}/>)
        }
      </div>
    )
  }
}
