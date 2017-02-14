import fetch from 'isomorphic-fetch'
import config from '../../../config'
import {apiFetch} from '../../util/util'

export const userInfo = r => {
  return dispatch => {
    let set = {
      url: config.apiHost + '/userinfo',
      hint: false,
      success: r => dispatch({
        type: 'user_info',
        data: r.data
      })
    }
    apiFetch(set, dispatch)
  }
}

export const logout = () => {
  return dispatch => {
    let set = {
      url: config.apiHost + '/logout',
      success: r => dispatch({
        type: 'user_info',
        data: undefined
      })
    }
    apiFetch(set, dispatch)
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
