import React, {Component} from 'react'
import {connect} from 'react-redux'
import {apiFetch} from '../../util/util'
import {getPost} from '../../actions/posts'

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
      <article className="w-article">
        <header className="w-article-header clearfix"><h3>{title}</h3></header>
        <div className="w-article-content"><p>{content}</p></div>
      </article>
    )
  }
}

export default connect()(Post)
