import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'
import { apiFetch } from 'util/util'
import ArticleList from 'components/common/ArticleList'

import styles from 'static/user.less'

class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      author: {},
      article: []
    }
  }

  componentWillMount() {
    apiFetch({
      url: '/front/user/view',
      hint: false,
      body: {
        id: this.props.match.params.id
      },
      success: r => this.setState({author: r.list || {}})
    })
  }

  render() {
    let { nice_name, avatar, bio } = this.state.author
    return (
      <div className={ styles.wrap }>
        <div className={ styles.head }>
          <div className={ styles.info }>
            <img src={ avatar }/>
            <h3>{ nice_name }</h3>
            <p>{ bio }</p>
          </div>
        </div>
        <div className={ styles.list }>
          <ArticleList api={ '/front/article/list' } params={{author_id: this.props.match.params.id}}/>
        </div>
      </div>
    )
  }
}

export default User
