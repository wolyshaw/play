const user = (state = null, action) => {
  switch (action.type) {
    case 'SET_USER_INFO':
      return action.data
    default:
      return state
  }
}

export default user
