import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'

const ArticleItem = props => {
  let { article } = props
  return (
    <article>
      <Link to={ `/article/${article.id}` }>{ article.title }</Link>
    </article>
  )
}

export default ArticleItem
