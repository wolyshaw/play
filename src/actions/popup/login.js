import fetch from 'isomorphic-fetch'
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
      url: '/login',
      body: {
        nice_name: data.nice_name,
        password: data.password
      },
      success: data.success
    }
    apiFetch(set, dispatch)
  }
}
