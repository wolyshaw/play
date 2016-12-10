import React, {Component} from 'react'
import { Router, Route, Link } from 'react-router'
import {showLoading, ajax} from '../util/util'

export class PostItem extends Component {
  constructor(s) {
    super(s)
  }
  render(){
    let post = this.props.item
    let postItemImageStyle = {
      backgroundImage: 'url( '+ (post.attachments[0] ? post.attachments[0].url : "") + ')'
    }
    return(
      <div className="post-item">
        {
          post.attachments[0] ? <Link to={'/post/' + post.id}><span className="image" style={postItemImageStyle}></span></Link> : ''
        }
        <h3><Link to={'/post/' + post.id}>{post.title}</Link></h3>
        <div><Link to={post.author.url ? post.author.url : '/author/' + post.author.nickname}>{post.author.nickname}</Link></div>
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
      <div className="post-list">
        {
          posts.map(item => <PostItem key={item.id} item={item}/>)
        }
      </div>
    )
  }
}
