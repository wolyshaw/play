import { combineReducers } from 'redux'
import loading from './loading'
import common from './common'
import token from './token'
import user from './user'

const reducers = {
  loading,
  common,
  token,
  user
}

export default combineReducers(reducers)
