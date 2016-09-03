import React, {Component} from 'react'
import {
  render
} from 'react-dom'

export default class homePostList extends Component{
  constructor(props) {
    super(props)
  }
  test() {
    () => 1
  }
  render() {
    return ( <
      div onClick = {
        this.test
      } > homePost < /div>
    )
  }
}
