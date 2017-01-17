export const posts = (state = {posts: [{title: '123'}]}, action) => {
  switch (action.type) {
    case 'get_posts':
    console.log(action)
      return {
        posts: [
          {
            title: '456'
          }
        ]
      }
    default:
      return state
  }
}
