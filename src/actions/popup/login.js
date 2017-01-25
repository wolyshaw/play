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
    return {
      type: 'to_login',
      data: {}
    }
  }
}
