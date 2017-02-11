import React from 'react'
import PostItem from './postItem'

let Posts = props => {
  let {posts} = props,
    list = posts.data || []
  return (
    <div className="w-pagewidth">
      {
        list.map(item => <PostItem item={item} key={item._id}/>)
      }
    </div>
  )
}

export default Posts
