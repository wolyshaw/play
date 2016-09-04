import React, {Component} from 'react'
import { render } from 'react-dom'

export default class homePostList extends Component{
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <div>dfhfgjhgfhjhgkhj</div>
        { this.props.children }
      </div>
    )
  }
}
