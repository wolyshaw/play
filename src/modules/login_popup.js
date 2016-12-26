import React, {Component} from 'react'
import { Router, Route, Link } from 'react-router'
import {showLoading, ajax} from '../util/util'
import config from '../../config'

export class Reg_box extends Component{
  constructor(s){
    super(s)
    this.state = {
      nice_name: '',
      email: '',
      password: ''
    }
  }
  reg(e){
    e.preventDefault()
    ajax({
      url: 'http://localhost:8000/post/user',
      type: 'post',
      data: this.state,
      success: r => {
        this.setState({
          nice_name: '',
          email: '',
          password: ''
        })
      }
    })
  }
  render(){
    return(
      <form className="w_form w_reg_box" onSubmit={this.reg.bind(this)}>
        <label className="file">
          <span>头像：</span>
          <input type="file"/>
        </label>
        <label>
          <span>昵称：</span>
          <input required type="text" value={this.state.nice_name} onChange={e => this.setState({nice_name: e.target.value})}/>
        </label>
        <label>
          <span>邮箱：</span>
          <input required type="email" value={this.state.email} onChange={e => this.setState({email: e.target.value})}/>
        </label>
        <label>
          <span>密码：</span>
          <input required type="password" value={this.state.password} onChange={e => this.setState({password: e.target.value})}/>
        </label>
        <input className="w-btn" type="submit" value="提交"/>
      </form>
    )
  }
}

export class Login_box extends Component{
  render(){
    return(
      <form className="w_form w_login_box">
        <label>
          <span>账号：</span>
          <input required type="text"/>
        </label>
        <label>
          <span>密码：</span>
          <input required type="password"/>
        </label>
        <input className="w-btn" type="submit" value="提交"/>
      </form>
    )
  }
}

export default class Login_popup extends Component{
  constructor(s){
    super(s)
  }
  render(){
    return(
      <div className={'w_popup login_popup' + (this.props.open ? ' w_popup_show' : '')}>
        <span className="close" onClick={this.props.ctrlopen}>关闭</span>
        {
          this.props.box === 'reg' ? <Reg_box/> : <Login_box/>
        }
      </div>
    )
  }
}
