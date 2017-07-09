import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'
import styles from 'static/articleList.less'

const ArticleItem = props => {
  let { article } = props
  return (
    <article className={ styles.item }>
      <Link to={ `/article/${article.id}` }>{ article.title }</Link>
    </article>
  )
}

export default ArticleItem
