import React, {Component} from 'react'
import { Router, Route, Link } from 'react-router'
import {showLoading, ajax} from '../util/util'
import PostList from '../modules/postList'

export default class Categorie extends Component{
  constructor(s){
    super(s)
  }
  render(){
    return(
      <div className="categorie">
        <PostList ajaxData={{cat: this.props.params.id}}/>
      </div>
    )
  }
}
