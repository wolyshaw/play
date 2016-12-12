import React, {Component} from 'react'
import { Router, Route, Link } from 'react-router'
import {showLoading, ajax} from '../util/util'
import config from '../../config'

export default class Footer extends Component{
  constructor(s){
    super(s)
  }
  render(){
    return(
      <footer className="p-footer">
        <div>by <a href="https://xwlong.com">wolyshaw</a></div>
      </footer>
    )
  }
}
