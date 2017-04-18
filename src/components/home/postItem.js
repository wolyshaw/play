import React from 'react'
import { Link } from 'react-router-dom'
import { formatTime } from '../../util/util'
import styles from '../../static/posts.css'

let postItem = props => {
  let { item } = props
  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <Link to={'/post/' + item._id}><h3>{item.title}</h3></Link>
      </header>
      {item.summary ? <div className={styles.content}><p>{item.summary}</p></div> : ''}
      <footer className={styles.footer}>
        <div>
          <span>last update At {formatTime(item.update_at)}</span> By
          <Link to={'/user/' + item.author._id}>{item.author.nice_name} </Link>
        </div>
      </footer>
    </article>
  )
}

export default postItem
