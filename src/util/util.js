import config from '../../config'
import fetch from 'isomorphic-fetch'
import { openNotification } from 'components/common/common'

import { appStore } from 'util'

const { getState, dispatch } = appStore

export const formatTime = time => {
  let depositTime = new Date(time),
    Y = depositTime.getFullYear(),
    M = (depositTime.getMonth() + 1) < 10 ? '0' + (depositTime.getMonth() + 1) : (depositTime.getMonth() + 1),
    D = depositTime.getDate() < 10 ? '0' + depositTime.getDate() : depositTime.getDate(),
    h = depositTime.getHours() < 10 ? '0' + depositTime.getHours() : depositTime.getHours(),
    m = depositTime.getMinutes() < 10 ? '0' + depositTime.getMinutes() : depositTime.getMinutes(),
    s = depositTime.getSeconds() < 10 ? '0' + depositTime.getSeconds() : depositTime.getSeconds()
  return Y + '-' + M + '-' + D + ' ' + h + ':' + m + ':' + s
}

export const objToStr = obj => {
  let strArr = []
  for (let k in obj) {
    if (obj.hasOwnProperty(k)) {
      strArr.push(k + '=' + obj[k])
    }
  }
  return strArr.join('&')
}

export const setFromData = form => {
  let fromData = new FormData()

  for(name in data) {
    formData.append(name, data[name]);
  }

  return fromData
}

export const fileSize = size => {
  size = Math.floor(size)

  if (size < 1000) {

    return Math.floor(size) + 'B'

  } else if (size >= 1000 && size < 1000000) {

    return Math.floor(size / 1000) + 'KB'

  } else {

    return Math.floor(size / 1000000) + 'MB'

  }

}

export const apiFetch = set => {
  let init, setting, isHint,
    isFormData = set.body instanceof FormData,
    initHeader = {
      headers: {
        'Content-Type': 'application/json',
        'token': localStorage.getItem('token')
      }
    }
  init = {
    method: 'post',
    credentials: 'include'
  }
  if (!isFormData) {
    Object.assign(init, initHeader)
  }
  setting = Object.assign({}, init, {
    body: set.body
  })
  isHint = set.hint === undefined ? true : set.hint

  // dispatch(setLoading(true))

  fetch(set.url, setting)
    .then(res => {
      // dispatch(setLoading(false))
      return res.json()
    })
    .then(r => {
      if (isHint) {
        openNotification({content: r.msg})
      }
      if (r.code === 200) {
        if (set.success && typeof set.success === 'function') {
          set.success(r)
        }
      }
    })
    .catch(err => {
        // dispatch(setLoading(false))
      openNotification({content: err})
    })
}
