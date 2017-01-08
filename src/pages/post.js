import React, {Component} from 'react'
import { Router, Route, Link } from 'react-router'
import TagList from '../modules/tagList'
import CategorieList from '../modules/categorieList'
import Comment from '../modules/comment'
import {showLoading, ajax} from '../util/util'

export class PostInfo extends Component{
  render(){
    let info = this.props.info,
        author = this.props.info.author || {},
        hasImage = info.thumbnail,
        postItemImageStyle = {
          backgroundImage: 'url( '+ (hasImage ? info.thumbnail : "") + ')'
        }
    return(
      <div className={'post-info top-info' + (hasImage ? ' image-info' : '')} style={postItemImageStyle}>
        <div>
          <h3>{info.title}</h3>
          <p dangerouslySetInnerHTML={{__html: info.excerpt}}></p>
          <div>
            <span>文章作者：<Link to={author.url ? author.url : '/author/' + author.id}>{author.nickname}</Link></span>
            <span>发布日期：<data>{info.date}</data></span>
            {info.categories ? <CategorieList list={info.categories}/> : ''}
            {info.tags ? <TagList list={info.tags}/> : ''}
          </div>
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
      url: '/get/post',
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
        <Comment list={post.comments} commentStatus={post.comment_status} postId={post.id}/>
      </div>
    )
  }
}
