import React from 'react'
import {Link} from 'react-router'
import Posts from './posts'
import NextPost from './nextPost'
import PostsList from '../../containers/home/postList'

let Home = (props) => {
  return (
    <div>
      <PostsList/>
    </div>
  )
}

export default Home
