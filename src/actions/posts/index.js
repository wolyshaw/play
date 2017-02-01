import fetch from 'isomorphic-fetch'
import config from '../../../config'
import setLoading from '../common/loading'
export const getPosts = () => {
  return (dispatch) => {
    dispatch(setLoading(true))
    fetch(config.apiHost + '/get/posts', {method: 'post'})
      .then(res => res.json())
      .then(r => {
        dispatch(setLoading(false))
        dispatch({
          type: 'get_posts',
          data: r
        })
      })
  }
}
