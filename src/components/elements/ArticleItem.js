import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'
import { fortmatTime } from 'util/util'
import styles from 'static/articleList.less'

const ArticleItem = props => {
  let { article } = props
  return (
    <article className={ styles.item }>
      <Link className={ styles.title } to={ `/article/${article.id}` }>{ article.title }</Link>
      <p className={ styles.excerpt }>{ article.excerpt }</p>
      <div className={ styles.info }>
        <Link className={ 'clearfix' } to={ `/user/${article.author.id}` }>
          <img src={ article.author.avatar }/>
          <span>{ article.author.nice_name }</span>
        </Link>
        <span className={ styles.createdAt }>createdAt: { fortmatTime(article.createdAt) }</span>
      </div>
    </article>
  )
}

export default ArticleItem
