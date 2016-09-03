import React, {Component} from 'react'
import {Link} from 'react-router'

export default class page extends Component{
  constructor(props) {
    super(props)
  }
  test() {
    console.log(this)
  }
  render() {
    return (
      <div>
        <Link to="/" onClick={this.test}>kljilsfdes</Link>
        {this.props.children}
      </div>
    )
  }
}
