export const showHint = set => {
  let {message, delay, status} = set
  return {
    type: 'show_hint',
    message,
    status,
    delay,
    show: true
  }
}

export const hideHint = set => ({
  type: 'hide_hint',
  message: undefined,
  show: false
})

const setHint = data => {
  return (dispatch) => {
    dispatch(showHint(data))
    setTimeout(() => {
      dispatch(hideHint())
    }, data.delay || 3000)
  }
}

export default setHint
