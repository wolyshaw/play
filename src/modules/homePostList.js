import React, {Component} from 'react'
import { render } from 'react-dom'

export default class HomePostList extends Component{
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <div>HomePostList</div>
        { this.props.children }
      </div>
    )
  }
}
