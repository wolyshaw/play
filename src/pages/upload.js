import React, {Component} from 'react'
import { Router, Route, Link } from 'react-router'
import TagList from '../modules/tagList'
import CategorieList from '../modules/categorieList'
// import Upfile from '../modules/upfile'
import {showLoading, ajax} from '../util/util'

export class Upfile extends Component{
  constructor(s){
    super(s)
    this.state = {
      token: undefined,
      file: undefined,
      fileName: '',
      bucket: '',
      path: ''
    }
  }

  upFile(form){
    let file = new FormData(),
      date = new Date(), year = date.getFullYear(), month = (date.getMonth() + 1),
      path = this.state.path,
      key = path ? path + '/' + this.state.fileName : year + '/' + month + '/' + this.state.fileName
    file.append('file', this.state.file)
    file.append('token', this.state.token)
    file.append('key', key)
    ajax({
      url: 'http://upload.qiniu.com/',
      type: 'post',
      data: file,
      success: r => {
        this.setState({
          token: undefined,
          file: undefined,
          fileName: '',
          bucket: '',
          path: ''
        })
        console.log(r)
      }
    })
  }

  getToken(e){
    let form = e.target
    e.preventDefault()
    ajax({
      // url: 'http://api.abcdea.net/token',
      url: 'http://localhost:8000/token',
      type: 'post',
      data: this.state,
      success: r => {
        this.setState({
          token: r.data ? r.data.token : undefined
        })
        this.upFile(form)
      }
    })
  }

  changeFile(e){
    this.setState({
      file: e.target.files[0] ? e.target.files[0] : undefined,
      fileName: e.target.files[0] ? e.target.files[0].name : ''
    })
  }

  changeName(e){
    this.setState({
      fileName: e.target.value
    })
  }

  changeBucket(e){
    this.setState({
      bucket: e.target.value
    })
  }

  changePath(e){
    this.setState({
      path: e.target.value
    })
  }

  render(){
    let token = this.state.token
    return(
      <form className="upfile_form w_form" onSubmit={this.getToken.bind(this)}>
        <label className="file">
          <span>{this.state.fileName ? this.state.fileName : '选择文件'}</span>
          <input type="file" required onChange={this.changeFile.bind(this)}/>
        </label>
        <label className="file_name">
          <span>文件名称：</span>
          <input type="text" required onChange={this.changeName.bind(this)} value={this.state.fileName}/>
        </label>
        <label className="file_bucket">
          <span>存放空间：</span>
          <input type="text" required onChange={this.changeBucket.bind(this)} value={this.state.bucket}/>
        </label>
        <label className="file_path">
          <span>文件前缀：</span>
          <input type="text" required onChange={this.changePath.bind(this)} value={this.state.path}/>
        </label>
        <input className="w-btn" type="submit" value="提交文件"/>
      </form>
    )
  }
}

export default class Upload extends Component{
  constructor(s){
    super(s)
    this.state = {
      token: ''
    }
  }
  render(){
    return(
      <div className="up-wrap">
        <Upfile/>
      </div>
    )
  }
}
