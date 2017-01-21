export const loading = show => ({
  type: 'set_loading',
  show
})

const setLoading = show => (dispatch => dispatch(loading(show)))

export default setLoading
