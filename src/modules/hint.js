import React, {Component} from 'react'
import { Router, Route, Link } from 'react-router'
import config from '../../config'

export default class Hint extends Component{
  render(){
    return(
      <div>提示内容 + {this.props.hint}</div>
    )
  }
}
