import React, {Component} from 'react'
import { Router, Route, Link } from 'react-router'
import {showLoading, ajax} from '../util/util'

export default class PostList extends Component{
  constructor(s){
    super(s)
  }
  componentWillMount(){
    ajax({
      success: r => console.log(r)
    })
  }
  render(){
    return(
      <div>
        top Homejlkkl
      </div>
    )
  }
}
