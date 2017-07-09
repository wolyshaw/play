import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'
import { apiFetch } from 'util/util'
import ArticleList from 'components/common/ArticleList'

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
    let { title } = this.state
    return (
      <article>
        <h3>{ title }</h3>
      </article>
    )
  }
}

export default Article
