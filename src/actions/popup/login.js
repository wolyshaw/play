import fetch from 'isomorphic-fetch'
import config from '../../../config'
import setLoading from '../common/loading'
import {apiFetch} from '../../util/util'
import setHint from '../common/hint'

export const showLogin = () => {
  return {
    type: 'show_login'
  }
}

export const hideLogin = () => ({
  type: 'hide_login'
})

export const toLogin = data => {
  return dispatch => {
    let set = {
      url: config.apiHost + '/login',
      body: {
        nice_name: data.nice_name,
        password: data.password
      },
      success: r => {
        dispatch(hideLogin())
        dispatch({
          type: 'user_info',
          data: r.data
        })
      }
    }
    apiFetch(set, dispatch)
  }
}
