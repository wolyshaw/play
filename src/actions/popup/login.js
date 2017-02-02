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

export const toLogin = set => {
  return dispatch => {
    dispatch(setLoading(true))
    fetch(config.apiHost + '/login', {
      method: 'post',
      credentials: 'include',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: 'nice_name=' + set.nice_name + '&password=' + set.password
    })
      .then(res => res.json())
      .then(r => {
        dispatch(setLoading(false))
        dispatch(setHint({
          message: r.msg
        }))
        dispatch(hideLogin())
        return dispatch({
          type: 'get_user',
          data: r.data
        })
      })
  }
}
