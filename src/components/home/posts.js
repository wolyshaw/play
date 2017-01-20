import React from 'react'
import PostItem from './postItem'

let Posts = props => {
  let {posts} = props,
    list = posts.data || []
  return (
    <div>
      {
        list.map(item => <PostItem item={item}/>)
      }
    </div>
  )
}

export default Posts
