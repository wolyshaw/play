const popup = (state = {name: '', params: {}}, action) => {
  switch (action.type) {
    case 'open_popup':
      return action.data
      break
    case 'close_popup':
      return {name: '', params: {}}
      break
    default:
      return state
  }
  if (action.callback && typeof action.callback === 'function') {
    action.callback()
  }
}

export default popup
