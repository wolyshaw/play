import React, {Component} from 'react'
import { render } from 'react-dom'

export default class post extends Component{
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>{ this.props.children }</div>
    )
  }
}
