import fetch from 'isomorphic-fetch'
import config from '../../../config'

export const getUser = r => {
  return dispatch => {
    fetch(config.apiHost + '/userinfo', {
      method: 'post',
      credentials: 'include'
    })
      .then(res => res.json())
      .then(r => dispatch({
        type: 'get_user',
        data: r.data
      })
    )
  }
}
