import React, {Component} from 'react'
import {connect} from 'react-redux'
import {apiFetch} from '../../util/util'
import {getPost} from '../../actions/posts'
import styles from '../../static/post.css'

class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: {}
    }
  }

  success(r) {
    this.setState({
      post: r.data
    })
  }

  componentWillMount() {
    this.props.dispatch(getPost({
      id: this.props.params.id,
      success: this.success.bind(this)
    }))
  }

  render() {
    let {params} = this.props
    let {title, summary, content} = this.state.post
    return (
      <div className={styles.articleWarp}>
        <article className={styles.article}>
          <header className={styles.header}><h3>{title}</h3></header>
          <div className={styles.articleContent} dangerouslySetInnerHTML={{__html: content}}></div>
        </article>
      </div>
    )
  }
}

export default connect()(Post)
