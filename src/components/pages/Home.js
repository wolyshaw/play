import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'
import { apiFetch } from 'util/util'
import ArticleList from 'components/elements/ArticleList'

import styles from 'static/home.less'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={ styles.wrap }>
        <ArticleList api={ '/front/article/list' }/>
      </div>
    )
  }
}

export default Home
