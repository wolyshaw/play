import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { posts } from './home'
import common from './common'
import popup from './popup'

export default combineReducers({
  posts,
  common,
  popup,
  router: routerReducer
})
