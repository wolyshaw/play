import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {getPosts} from '../../actions/posts'
import setHint from '../../actions/common/hint'
import Hint from '../common/hint'

let mapStateToProps = state => {
  console.log(state)
  return ({
    show: state.hint.show
  })
}

let mapDispatchToProps = dispatch => ({
  propsGetPosts: () => dispatch(getPosts({text: '456'})),
  propsSetHint: () => dispatch(setHint({text: '456'}))
})

let Posts = (props) => {
  let {propsGetPosts, propsSetHint, show} = props
  return (
    <div>
      <div onClick={propsSetHint}>
        posts
        <Hint show={show}/>
      </div>
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts)
