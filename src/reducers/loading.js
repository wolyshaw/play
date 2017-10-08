const loading = (state = false, action) => {
  switch (action.type) {
    case 'show_loading':
      return action.data
      break
    default:
      return state
  }
}

export default loading
