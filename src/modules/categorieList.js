import React, {Component} from 'react'
import { Router, Route, Link } from 'react-router'

export default class CategorieList extends Component {
  constructor(s){
    super(s)
  }
  render(){
    let list = this.props.list
    return(
      <div className="categorieList">
        {
          list.map(item => <Link to={'/categorie/' + item.id}>{item.title}</Link>)
        }
      </div>
    )
  }
}
