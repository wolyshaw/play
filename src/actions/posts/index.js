export const getPosts = (ajaxData) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: 'get_posts',
        text: ajaxData.text
      })
    }, 1000)
  }
}
