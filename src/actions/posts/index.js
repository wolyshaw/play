import fetch from 'isomorphic-fetch'
import config from '../../../config'
export const getPosts = () => {
  return (dispatch) => {
    fetch(config.apiHost + '/get/posts', {method: 'post'})
      .then(res => res.json())
      .then(r => {
        return dispatch({
          type: 'get_posts',
          data: r
        })
      })
  }
}
