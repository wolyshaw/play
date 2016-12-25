import React, {Component} from 'react'
import { Router, Route, Link } from 'react-router'
import {showLoading, ajax} from '../util/util'
import config from '../../config'
import Login_popup from './login_popup'

export default class Header extends Component{
  constructor(s){
    super(s)
    this.state = {
      box: 'login',
      open: false
    }
  }
  showLogin(){
    this.setState({
      open: !this.state.open,
      box: 'login'
    })
  }
  showReg(){
    this.setState({
      open: !this.state.open,
      box: 'reg'
    })
  }
  render(){
    return(
      <header className="p-header">
        <nav className="p-nav">
          {
            config.navs.map(item => <Link key={item.id} to={item.path}>{item.title}</Link>)
          }
        </nav>
        <div className="reg_btn">
          <a onClick={this.showLogin.bind(this)}>登录</a>
          <span>|</span>
          <a onClick={this.showReg.bind(this)}>注册</a>
        </div>
        <Login_popup open={this.state.open} box={this.state.box} ctrlopen={this.showLogin.bind(this)}/>
      </header>
    )
  }
}
