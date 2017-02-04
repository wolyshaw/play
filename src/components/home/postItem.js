import React from 'react'
import {Link} from 'react-router'
import {formatTime} from '../../util/util'

let postItem = props => {
  let {item} = props
  return (
    <article className="w-article">
      <header className="w-article-header clearfix"><Link to={'/post/' + item._id}><h3>{item.title}</h3></Link></header>
      {item.summary ? <div className="w-article-content"><p>{item.summary}</p></div> : ''}
      <footer className="w-article-footer">
        <div><span>last update At {formatTime(item.update_at)}</span><span> By {item.author.nice_name} </span></div>
      </footer>
    </article>
  )
}

export default postItem
