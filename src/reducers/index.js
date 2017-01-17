import {combineReducers} from 'redux'
import {posts} from './home'
import {hint} from './common'

export default combineReducers({
  posts,
  hint
})
