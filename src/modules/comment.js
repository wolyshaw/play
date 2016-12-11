import React, {Component} from 'react'
import { Router, Route, Link } from 'react-router'
import {showLoading, ajax, addObj} from '../util/util'

export class CreateComment extends Component {
  constructor(s){
    super(s)
    this.state = {
      name: '',
      email: '',
      content: ''
    }
  }
  pushComment(e){
    e.preventDefault()
    console.log(addObj([this.state, {json: 'submit_comment', postId: this.props.postId}]))
    ajax({
      data: addObj([this.state, {json: 'submit_comment', post_id: this.props.postId}]),
      success: r => console.log(r)
    })
  }
  // componentWillMount(){
  //   console.log(this.props.postId)
  //   this.setState({post_id: this.props.postId})
  // }
  render(){
    let item = this.props.item
    return(
      <form className="comment-create" onSubmit={this.pushComment.bind(this)}>
        <label><span>名字：</span><input type="text" dedaultValue={this.state.name} onChange={e => this.setState({name: e.target.value})}/></label>
        <label><span>邮箱：</span><input type="email" dedaultValue={this.state.email} onChange={e => this.setState({email: e.target.value})}/></label>
        <label><span>内容：</span><textarea dedaultValue={this.state.name} onChange={e => this.setState({content: e.target.value})}></textarea></label>
        <input type="submit" value="submit"/>
    </form>
    )
  }
}

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
        <CreateComment postId={this.props.postId}/>
      </div>
    )
  }
}
