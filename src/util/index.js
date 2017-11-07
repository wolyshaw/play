import config from '../../config'
import { openLoading, closeLoading } from 'components/elements/Loading'
import Notification from 'rc-notification'

export const fetchs = (url, option = {}) => {
  let init = {
    method: 'post',
    body: option.body || {}
  }
  openLoading()
  return fetch(config.apiHost + url, init)
    .then(res => {
      if(res.status === 200) {
        return res.json()
      }
    })
    .then(r => {
      closeLoading()
      if(option.hint) {
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
      closeLoading()
      return err
    })
}
