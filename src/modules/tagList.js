import React, {Component} from 'react'
import { Router, Route, Link } from 'react-router'

export default class TagList extends Component {
  constructor(s){
    super(s)
  }
  render(){
    let list = this.props.list
    return(
      <div className="tagList">
        {
          list.map(item => <Link to={'/tag/' + item.id}>{item.title}</Link>)
        }
      </div>
    )
  }
}
