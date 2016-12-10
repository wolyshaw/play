import React, {Component} from 'react'
import { Router, Route, Link } from 'react-router'
import {showLoading, ajax} from '../util/util'
import PostList from '../modules/postList'

export default class Home extends Component{
  constructor(s){
    super(s)
    this.state = {
      postList: [],
      category: {}
    }
  }
  componentWillMount(){
    ajax({
      data: {
        cat: this.props.params.id
      },
      success: r => {
        this.setState({
          postList: r
        })
      }
    })
  }
  render(){
    return(
      <div className="home">
        <PostList postList={this.state.postList.posts}/>
      </div>
    )
  }
}
