import React, {Component} from 'react'
import { render } from 'react-dom'
import {Link} from 'react-router'
import {objToStr, ajax} from '../util/util'

export default class ShowTag extends Component{
  constructor(props) {
    super(props)
  }
  render(){
    let tags = this.props.tags
    return (
      <div>
        {
          tags.map(tag => {
            return <a key={tag.id}>{tag.title}</a>
          })
        }
      </div>
    )
  }
}
