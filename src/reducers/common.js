const common = (state = {}, action) => {
  switch (action.type) {
    case 'set_common':
      return '123'
      break
    default:
      return {}
  }
}

export default common
