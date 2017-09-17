const token = (state = null, action) => {
  switch (action.type) {
    case 'set_token':
      return action.data
      break
    default:
      return state
  }
}

export default token
