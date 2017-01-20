import React from 'react'
import {Link} from 'react-router'

let postItem = props => {
  let {item} = props
  return (
    <div className="post-item">
      <Link to={'/post/' + item._id}><h3>{item.title}</h3></Link>
    </div>
  )
}

export default postItem
