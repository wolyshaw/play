import React, {Component} from 'react'
import { render } from 'react-dom'

export default class post extends Component{
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h1>dsgdfhgf</h1>
        { this.props.children }
      </div>
    )
  }
}
