import React from 'react'
import {connect} from 'react-redux'
import {getPosts} from '../../actions/posts'
import setHint from '../../actions/common/hint'

let mapStateToProps = state => {
  return ({
    posts: state.posts.data
  })
}

let mapDispatchToProps = dispatch => ({
  propsGetPosts: () => dispatch(getPosts({text: '456'})),
  propsSetHint: () => dispatch(setHint({text: '456'}))
})

let Posts = props => {
  let {propsGetPosts, propsSetHint, show} = props
  return (
    <div>
      <div>
        post-lists
      </div>
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts)
