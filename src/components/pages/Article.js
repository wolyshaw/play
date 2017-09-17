import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'
import { apiFetch, fortmatTime } from 'util/util'
import ArticleList from 'components/elements/ArticleList'
import classNames from 'classNames/bind'
import styles from 'static/article.less'

const cx = classNames.bind(styles)

class Article extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    apiFetch({
      url: '/front/article/view',
      hint: false,
      body: {
        id: this.props.match.params.id
      },
      success: r => this.setState(r.list || {})
    })
  }

  render() {
    let { title, excerpt, pic, createdAt, author = {}, tags = [], content } = this.state
    return (
      <article className={ styles.controller }>
        <Helmet title={ this.state.title || '' }/>
        <div className={cx(styles.head, { pic: pic })}>
          <div className={ styles.mate }>
            <h3 className={ styles.title }>{ title }</h3>
            <div className={ cx({ excerpt }) }>{ excerpt }</div>
            <div className={ styles.tags }>
              { tags.map(item => <Link key={ item.id } to={ `/tag/${item.id}` }>{ item.title }</Link>) }
            </div>
            <div className={ styles.user }>
              <Link to={ `/user/${author.id}` }><img src={ author.avatar }/>{ author.nice_name }</Link>
              <span>发布时间：{ fortmatTime(createdAt) }</span>
            </div>
          </div>
        </div>
        <div className={ styles.content } dangerouslySetInnerHTML={{__html: content}}></div>
      </article>
    )
  }
}

export default Article
