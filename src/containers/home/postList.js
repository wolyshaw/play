import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getPosts} from '../../actions/posts'
import setHint from '../../actions/common/hint'
import NextPost from '../../components/home/nextPost'
import Posts from '../../components/home/posts'
import styles from '../../static/posts.css'

let mapStateToProps = state => {
  return ({
    posts: state.posts.data
  })
}

class PostsList extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.dispatch(getPosts())
  }

  render() {
    let {posts, dispatch} = this.props
    return (
      <div className={styles.home}>
        <Posts posts={posts}/>
        {
          // <NextPost next={() => dispatch(getPosts())}/>
        }
      </div>
    )
  }
}

export default connect(
  mapStateToProps
)(PostsList)
