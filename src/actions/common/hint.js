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

export const hideHint = () => ({
  type: 'hide_hint'
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
