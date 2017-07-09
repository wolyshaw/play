import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'
import { apiFetch } from 'util/util'
import ArticleList from 'components/common/ArticleList'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <ArticleList api={ '/front/article/list' }/>
      </div>
    )
  }
}

export default Home
