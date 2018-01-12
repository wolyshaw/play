import config from '../../config'
import { openLoading, closeLoading } from 'components/elements/Loading'
import Notification from 'rc-notification'

export const isNodejs = typeof window === 'undefined'

export const Fetch = (url, option = {}) => {
  let init = {
    method: 'post',
    body: option.body || {}
  }
  !isNodejs && openLoading()
  return fetch(config.apiHost + url, init)
    .then(res => {
      if(res.status === 200) {
        return res.json()
      } else {
        return Promise.reject('http status error')
      }
    })
    .then(r => {
      !isNodejs && closeLoading()
      if(!isNodejs && option.hint) {
        Notification.newInstance({prefixCls: 'hint'}, notification => {
          notification.notice({
            content: r.msg,
            onClose: () => notification.destroy()
          })
        })
      }
      return r
    })
    .catch(err => {
      !isNodejs && closeLoading()
      if(!isNodejs) {
        Notification.newInstance({prefixCls: 'hint'}, notification => {
          notification.notice({
            content: err,
            onClose: () => notification.destroy()
          })
        })
      }
    })
}
