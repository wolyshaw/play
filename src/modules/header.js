import React, {Component} from 'react'
import { Router, Route, Link } from 'react-router'
import {showLoading, ajax} from '../util/util'
import config from '../../config'

export default class Header extends Component{
  constructor(s){
    super(s)
  }
  render(){
    return(
      <header className="p-header">
        {
          config.navs.map(item => <Link key={item.id} to={item.path}>{item.title}</Link>)
        }
      </header>
    )
  }
}
