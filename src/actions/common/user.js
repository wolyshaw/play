import fetch from 'isomorphic-fetch'
import config from '../../../config'
import {apiFetch} from '../../util/util'

export const userInfo = r => {
  return dispatch => {
    fetch(config.apiHost + '/userinfo', {
      method: 'post',
      credentials: 'include'
    })
      .then(res => res.json())
      .then(r => dispatch({
        type: 'user_info',
        data: r.data
      })
    )
  }
}

export const logout = () => {
  return dispatch => {
    fetch(config.apiHost + '/logout', {
      method: 'post',
      credentials: 'include'
    })
      .then(res => res.json())
      .then(r => dispatch({
        type: 'user_info',
        data: undefined
      }))
  }
}

export const getUser = data => {
  return dispatch => {
    let set = {
      url: config.apiHost + '/get/user',
      body: {
        id: data.id
      },
      success: data.success,
      hint: false
    }
    apiFetch(set, dispatch)
  }
}
