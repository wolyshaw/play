import {combineReducers} from 'redux'
import {posts} from './home'
import common from './common'

export default combineReducers({
  posts,
  common
})
