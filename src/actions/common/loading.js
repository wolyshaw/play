export const loading = show => ({
  type: 'set_loading',
  show
})

const setLoading = show => dispatch(loading(show))

export default setLoading
