export const posts = (state = {data: {}}, action) => {
  switch (action.type) {
    case 'get_posts':
      return {
        data: action.data
      }
    default:
      return state
  }
}
