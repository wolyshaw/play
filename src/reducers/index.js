import {combineReducers} from 'redux'
import {posts} from './home'
import common from './common'
import popup from './popup'

export default combineReducers({
  posts,
  common,
  popup
})
