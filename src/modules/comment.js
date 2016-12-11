import React, {Component} from 'react'
import { Router, Route, Link } from 'react-router'

export class CommentItem extends Component {
  constructor(s){
    super(s)
  }
  render(){
    let item = this.props.item
    return(
      <div className={'comment-item' + (item.parent ? ' comment-reply': '')}>
        <span>{item.url ? <Link to={item.url}>{item.name}</Link>: item.name}：<i>{item.date}</i></span>
        <p dangerouslySetInnerHTML={{__html: item.content}}></p>
      </div>
    )
  }
}

export default class Comment extends Component {
  constructor(s){
    super(s)
  }
  render(){
    let list = this.props.list || []
    return(
      <div className="comment-warp">
        <div className="comment-info">{list.length > 0 ? '目前共' + list.length + '条评论' : '暂无评论'}</div>
        {
          list.length > 0 ? list.map(item => <CommentItem key={item.id} item={item}/>) : ''
        }
      </div>
    )
  }
}
