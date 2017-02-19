import {apiFetch} from '../../util/util'

export const hideUpload = () => ({
  type: 'hide_upload'
})

export const showUpload = () => ({
  type: 'show_upload'
})

export const getToken = data => {
  return dispatch => {
    let set = {
      url: '/token',
      body: data.body,
      success: data.success
    }
    apiFetch(set, dispatch)
  }
}
