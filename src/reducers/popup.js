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
    default:
      return state
  }
}

export default combineReducers({
  login
})
