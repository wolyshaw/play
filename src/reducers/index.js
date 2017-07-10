import { combineReducers } from 'redux'
import common from './common'
import token from './token'
import user from './user'

const reducers = {
  common,
  token,
  user
}

export default combineReducers(reducers)
