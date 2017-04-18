import React from 'react'

import PostItem from 'components/home/postItem'
import styles from 'static/posts.css'

let Posts = props => {
  let {posts} = props,
    list = posts.data || []
  return (
    <div className={styles.postList}>
      {
        list.map(item => <PostItem item={item} key={item._id}/>)
      }
    </div>
  )
}

export default Posts
