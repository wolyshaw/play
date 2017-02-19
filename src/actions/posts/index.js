import {apiFetch} from '../../util/util'
import setLoading from '../common/loading'

export const getPosts = data => {
  return dispatch => {
    let set = {
      url: '/get/posts',
      hint: false,
      success: r => {
        dispatch({
          type: 'get_posts',
          data: r
        })
      }
    }
    apiFetch(set, dispatch)
  }
}

export const createPost = data => {
  return dispatch => {
    let set = {
      url: '/post/post',
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

export const getPost = data => {
  return dispatch => {
    let set = {
      url: '/get/post',
      body: {
        id: data.id
      },
      success: data.success,
      hint: false
    }
    apiFetch(set, dispatch)
  }
}
