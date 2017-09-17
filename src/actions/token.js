export const clearToken = callback => {
  if (callback && typeof callback === 'function') {
    callback()
  }
  return { type: 'clear_token' }
}

export const setToken = data => {
  return { type: 'set_token', data }
}
