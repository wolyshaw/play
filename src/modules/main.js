import React, {Component} from 'react'
import { Router, Route, Link } from 'react-router'
import {showLoading, ajax} from '../util/util'
import Header from './header'
export default class Main extends Component{
  constructor(s){
    super(s)
  }
  render(){
    return(
      <div>
        <Header/>
        {this.props.children}
      </div>
    )
  }
}
