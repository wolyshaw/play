import { combineReducers } from 'redux'
import loading from './loading'
import common from './common'
import popup from './popup'
import token from './token'
import user from './user'

const reducers = {
  loading,
  common,
  popup,
  token,
  user
}

export default combineReducers(reducers)
