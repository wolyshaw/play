import React, {Component} from 'react'
import { Router, Route, Link } from 'react-router'
import {showLoading, ajax} from '../util/util'
import PostList from '../modules/postList'

export class Next extends Component{
  render(){
    let pages = this.props.pages,
      page = this.props.page
    return (
      <div className="post_next">
        {
          pages >= page ? <span onClick={this.props.getData}>下一页</span> : ''
        }
      </div>
    )
  }
}

export default class Home extends Component{
  constructor(s){
    super(s)
    this.state = {
      data: {},
      postList: [],
      category: {},
      page: 1
    }
  }
  getPosts(){
    ajax({
      data: {
        page: this.state.page
      },
      success: r => {
        this.setState({
          data: r,
          postList: this.state.postList.concat(r.posts),
          page: this.state.page + 1
        })
      }
    })
  }
  componentWillMount(){
    this.getPosts(this.state.page)
  }
  render(){
    let pages = this.state.data.pages,
      page = this.state.page
    return(
      <div className="home">
        <PostList postList={this.state.postList}/>
        <Next pages={pages} page={page} getData={this.getPosts.bind(this)}/>
      </div>
    )
  }
}
