import config from '../../config'
import { openLoading, closeLoading } from '@/components/elements/Loading'

export const isNodejs = typeof window === 'undefined'

export const mode = process.env.NODE_ENV || 'development'

export const Fetch = (url, option = {}) => {
  let init = {
    method: 'post',
    body: option.body || {}
  }
  !isNodejs && openLoading()
  return fetch(config[mode].apiPreFix + url, init)
    .then(res => {
      if(res.status === 200) {
        return res.json()
      } else {
        return Promise.reject('http status error')
      }
    })
    .then(r => {
      !isNodejs && closeLoading()
      // if(!isNodejs && option.hint) {
      //   Notification.newInstance({prefixCls: 'hint'}, notification => {
      //     notification.notice({
      //       content: r.msg,
      //       onClose: () => notification.destroy()
      //     })
      //   })
      // }
      return r
    })
    .catch(() => {
      !isNodejs && closeLoading()
      // if(!isNodejs) {
      //   Notification.newInstance({prefixCls: 'hint'}, notification => {
      //     notification.notice({
      //       content: err,
      //       onClose: () => notification.destroy()
      //     })
      //   })
      // }
    })
}
