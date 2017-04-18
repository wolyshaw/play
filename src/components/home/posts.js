import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'

import { fetchPosts } from 'util/fetch'
import PostItem from 'components/home/postItem'
import styles from 'static/posts.css'

const ListTip = props => {
  let { item } = props
  return (
    <div className={ styles.listTip }>{ props.tip || '最新文章' }</div>
  )
}

class Posts extends Component{
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  componentWillMount() {
    fetchPosts(r => this.setState({posts: r.data}))
  }

  render() {
    let list = this.state.posts
    return (
      <div className={styles.postList}>
        <ListTip/>
        {
          list.map(item => <PostItem item={item} key={item._id}/>)
        }
      </div>
    )
  }
}

export default Posts
