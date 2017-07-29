import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'
import { apiFetch } from 'util/util'
import ArticleList from 'components/common/ArticleList'
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
    let { title, excerpt, pic } = this.state
    return (
      <article className={ styles.controller }>
        <Helmet title={ this.state.title || '' }/>
        <div className={cx(styles.head, { pic: pic })}>
          <div className={ styles.mate }>
            <h3 className={ styles.title }>{ title }</h3>
          </div>
        </div>
        <div className={ cx({ excerpt }) }>{ excerpt }</div>
      </article>
    )
  }
}

export default Article
