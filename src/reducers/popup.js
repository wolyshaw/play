import {combineReducers} from 'redux'

export const login = (state = {isShow: false}, action) => {
  switch (action.type) {
    case 'show_login':
      return {
        isShow: true
      }
    case 'hide_login':
      return {
        isShow: false
      }
    case 'to_login':
      return {
        data: action.data
      }
    default:
      return state
  }
}

export const reg = (state = {isShow: false}, action) => {
  switch (action.type) {
    case 'show_reg':
      return {
        isShow: true
      }
    case 'hide_reg':
      return {
        isShow: false
      }
    default:
      return state
  }
}

export default combineReducers({
  login,
  reg
})
