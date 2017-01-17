export const showHint = text => ({
  type: 'show_hint',
  text
})

export const hideHint = () => ({
  type: 'hide_hint',
  text: '',
  show: false
})

const setHint = text => {
  return (dispatch) => {
    dispatch(showHint(text))
    setTimeout(() => {
      dispatch(hideHint())
    }, 1000)
  }
}

export default setHint
