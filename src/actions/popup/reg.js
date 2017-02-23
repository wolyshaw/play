import fetch from 'isomorphic-fetch'
import setLoading from '../common/loading'
import {apiFetch} from '../../util/util'
import setHint from '../common/hint'

export const showReg = () => {
  return {
    type: 'show_reg'
  }
}

export const hideReg = () => ({
  type: 'hide_reg'
})

export const toReg = data => {
  return dispatch => {
    let set = {
      url: '/post/user',
      body: {
        nice_name: data.nice_name,
        password: data.password,
        email: data.email
      },
      success: data.success
    }
    apiFetch(set, dispatch)
  }
}
