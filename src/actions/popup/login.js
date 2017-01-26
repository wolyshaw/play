import fetch from 'isomorphic-fetch'
import config from '../../../config'
import setLoading from '../common/loading'

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
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: 'nice_name=shaw&password=123456'
    })
      .then(res => res.json())
      .then(r => {
        dispatch(setLoading(false))
        return {
          type: 'to_login',
          data: r.data
        }
      })
  }
}
