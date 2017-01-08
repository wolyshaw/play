import React, {Component} from 'react'
import { Router, Route, Link } from 'react-router'
import {showLoading, ajax} from '../util/util'
import Header from './header'
import Footer from './footer'
export default class Main extends Component{
  constructor(s){
    super(s)
  }
  componentWillMount(){
    ajax({
      url: '/userinfo',
      success: r => {
        console.log(r)
      }
    })
  }
  render(){
    return(
      <div className="main">
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    )
  }
}
