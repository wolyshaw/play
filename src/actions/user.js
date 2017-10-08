import { apiFetch } from 'util/util'

export const clearUser = callback => {
  if (callback && typeof callback === 'function') {
    callback()
  }
  return { type: 'clear_user' }
}

export const setUser = data => {
  return dispatch => {
    return apiFetch({
      url: '/common/user',
      hint: false,
      success: r => {
        dispatch({ type: 'set_user', data: r.list })
      }
    })
  }
}
