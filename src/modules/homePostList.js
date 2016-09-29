import React, {Component} from 'react'
import { render } from 'react-dom'
import {Link} from 'react-router'
import {objToStr, ajax} from '../util/util'

class PostList extends Component{
  constructor(props) {
    super(props)
  }
  render(){
    let item = this.props.item
    return (
      <div>
        <h3><Link to={'/post/' + item.id}>{item.title}</Link></h3>
        <p dangerouslySetInnerHTML={{__html: item.excerpt}} />
      </div>
    )
  }
}

export default class HomePostList extends Component{
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentWillMount(){
    ajax({
      url: '/',
      data: {
        json: '1'
      },
      success: (r) => {
        this.setState({
          items: r.posts
        })
      }
    })
  }

  render() {
    let items = this.state.items
    return (
      <div>
        {
          items.map(item => <PostList key={item.id} item={item} />)
        }
        { this.props.children }
      </div>
    )
  }
}
