import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'
import { apiFetch } from 'util/util'

import ArticleItem from 'components/common/ArticleItem'
import styles from 'static/articleList.less'

class ArticleList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
    this.loading = false
  }

  componentWillMount() {
    let params = this.props.params || {}
    this.loading = true
    apiFetch({
      url: this.props.api,
      hint: false,
      body: Object.assign(params,{
        pageindex: '1',
        pagenum: '10'
      }),
      success: r => {
        this.loading = false
        this.setState({
          list: r.list.rows
        })
      }
    })
  }

  render() {
    return (
      <div className={ styles.articleList }>
        {
          this.state.list.map(item => <ArticleItem key={ item.id } article={ item }/>)
        }
      </div>
    )
  }
}

export default ArticleList
