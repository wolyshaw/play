import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {getPosts} from '../../actions/posts'
import setHint from '../../actions/common/hint'
import Hint from '../common/hint'

let Posts = props => {
  return (
    <div>
      <div>
        posts
      </div>
    </div>
  )
}

export default Posts
