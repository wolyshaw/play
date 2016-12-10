import React, {Component} from 'react'
import { Router, Route, Link } from 'react-router'
import {showLoading, ajax} from '../util/util'
import PostList from '../modules/postList'

export class CategorieInfo extends Component{
  render(){
    let info = this.props.info
    return(
      <div className="categorie-info top-info">
        <div>
          <div>
            <h3>{info.title}</h3>
            <span>下共{info.post_count}篇文章</span>
          </div>
          <p>{info.description}</p>
        </div>
      </div>
    )
  }
}

export default class Categorie extends Component{
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
          postList: r,
          category: r.category
        })
      }
    })
  }
  render(){
    return(
      <div className="categorie">
        <CategorieInfo info={this.state.category}/>
        <PostList postList={this.state.postList.posts}/>
      </div>
    )
  }
}
