export const hideLoading = callback => {
  if (callback && typeof callback === 'function') {
    callback()
  }
  return { type: 'hide_loading' }
}

export const showLoading = (data = {}) => {
  return { type: 'show_loading', data }
}
