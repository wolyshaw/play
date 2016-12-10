import React, {Component} from 'react'
import { Router, Route, Link } from 'react-router'
import {showLoading, ajax} from '../util/util'

export class PostItem extends Component {
  constructor(s) {
    super(s)
  }
  render(){
    return(
      <div>
        '123'
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
