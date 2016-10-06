import React, {Component} from 'react'
import { render } from 'react-dom'
import {Link} from 'react-router'
import {objToStr, ajax} from '../util/util'
import ShowTag from '../post/ShowTag'

class PostList extends Component{
  constructor(props) {
    super(props)
  }
  render(){
    let item = this.props.item
    return (
      <article className="post-item">
        <h3><Link to={'/post/' + item.id}>{item.title}</Link></h3>
        <date>{item.date}</date>
        <ShowTag tags={item.tags}/>
        <p dangerouslySetInnerHTML={{__html: item.excerpt}} />
        {
          item.attachments.length > 0 ? <img src={item.attachments[0].images.full.url} /> : ''
        }
      </article>
    )
  }
}

export default class HomePostList extends Component{
  constructor(props) {
    super(props)
    this.state = {
      items: {
        data: {},
        posts: []
      }
    }
  }

  componentWillMount(){
    ajax({
      url: this.props.url,
      data: {
        json: '1'
      },
      success: (r) => {
        this.setState({
          items: {
            data: r,
            posts: r.posts
          }
        })
      }
    })
  }

  render() {
    let items = this.state.items.posts
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
