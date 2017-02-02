import fetch from 'isomorphic-fetch'
import config from '../../../config'
import {apiFetch} from '../../util/util'
import setLoading from '../common/loading'

export const getPosts = () => {
  return dispatch => {
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

export const createPost = data => {
  return dispatch => {
    let set = {
      url: config.apiHost + '/post/post',
      body: {
        title: data.title,
        content: data.content,
        summary: data.summary
      },
      success: data.success
    }
    apiFetch(set, dispatch)
  }
}
