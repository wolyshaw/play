import React, {Component} from 'react'
import { Router, Route, Link } from 'react-router'
import TagList from '../modules/tagList'
import CategorieList from '../modules/categorieList'

export class PostItem extends Component {
  constructor(s) {
    super(s)
  }
  render(){
    let post = this.props.item
    let postItemImageStyle = {
      backgroundImage: 'url( '+ (post.thumbnail ? post.thumbnail : "") + ')'
    }
    return(
      <div className="post-item">
        {
          post.thumbnail ? <Link to={'/post/' + post.id}><span className="image" style={postItemImageStyle}></span></Link> : ''
        }
        <h3><Link to={'/post/' + post.id}>{post.title}</Link></h3>
        <div>
          <Link to={post.author.url ? post.author.url : '/author/' + post.author.nickname}>{post.author.nickname}</Link>
          {post.categories ? <CategorieList list={post.categories}/> : ''}
          {post.tags ? <TagList list={post.tags}/> : ''}
          </div>
        <div dangerouslySetInnerHTML={{__html: post.excerpt}}></div>
      </div>
    )
  }
}

export default class PostList extends Component{
  constructor(s){
    super(s)
  }
  render(){
    let posts = this.props.postList || []
    return(
      <div className="post-list">
        {
          posts.map(item => <PostItem key={item.id} item={item}/>)
        }
      </div>
    )
  }
}
