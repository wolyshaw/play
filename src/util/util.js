import config from '../../config'
import fetch from 'isomorphic-fetch'
import { openNotification } from 'components/elements/common'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import store from '../reducers'
import { showLoading, hideLoading } from 'actions/loading'

const middleware = [
  thunk
]

export const appStore = createStore(
  store,
  applyMiddleware(...middleware)
)

const { getState, dispatch } = appStore

const addZreo = n => (n < 10 ? '0' : '') + n

export const fortmatTime = (time, type) => {
  let m = new Date(time), d = [], t = []
  d.push(m.getFullYear())
  d.push(addZreo(m.getMonth() + 1))
  d.push(addZreo(m.getDate()))
  t.push(addZreo(m.getHours()))
  t.push(addZreo(m.getMinutes()))
  t.push(addZreo(m.getSeconds()))
  return !type ? [d.join('-'), t.join(':')].join(' ') : d.join('-')
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
    mode: 'cors',
    type: 'cors',
    method: 'post',
    // credentials: 'include'
  }
  if (!isFormData) {
    Object.assign(init, initHeader)
  }
  setting = Object.assign({}, init, {
    body: isFormData ? set.body : JSON.stringify(set.body)
  })
  isHint = set.hint === undefined ? true : set.hint

  dispatch(showLoading())

  fetch((/\/\//.test(set.url) ? set.url : config.apiHost + set.url), setting)
    .then(res => {
      // dispatch(hideLoading())
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

      if (set.complete && typeof set.complete === 'function') {
        set.complete(r)
      }
    })
    .catch(err => {
      // dispatch(hideLoading())
      openNotification({content: err})
    })
}
