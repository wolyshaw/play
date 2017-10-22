export const hideLoading = callback => {
  if (callback && typeof callback === 'function') {
    callback()
  }
  return { type: 'hide_loading' }
}

export const showLoading = () => {
  return { type: 'show_loading' }
}
