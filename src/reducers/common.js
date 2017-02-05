import {combineReducers} from 'redux'
const initHint = {
  message: undefined,
  status: 'success',
  delay: 3000,
  show: false
}
export const hint = (state = initHint, action) => {
  switch (action.type) {
    case 'show_hint':
      return {
        message: action.message,
        status: action.status || 'success',
        delay: action.delay || 3000,
        show: true
      }
    case 'hide_hint':
      return initHint
    default:
      return state
  }
}

export const loading = (state = {show: false}, action) => {
  switch (action.type) {
    case 'set_loading':
      return {
        show: action.show
      }
    default:
      return state
  }
}

export const user = (state = {}, action) => {
  switch (action.type) {
    case 'user_info':
      return {
        data: action.data
      }
    default:
      return state
  }
}

export default combineReducers({
  hint,
  loading,
  user
})
