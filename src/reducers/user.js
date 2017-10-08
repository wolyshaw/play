const user = (state = null, action) => {
  switch (action.type) {
    case 'set_user':
      return action.data
      break
    case 'clear_user':
      return null
      break
    default:
      return state
  }
}

export default user
