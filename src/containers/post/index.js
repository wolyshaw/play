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
      <div>
        <h3>{title}</h3>
        <p>{summary}</p>
        <div>{content}</div>
      </div>
    )
  }
}

export default connect()(Post)
