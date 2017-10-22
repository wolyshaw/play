const loading = (state = null, action) => {
  switch (action.type) {
    case 'show_loading':
      return true
      break
    case 'hide_loading':
      return false
      break
    default:
      return null
  }
}

export default loading
