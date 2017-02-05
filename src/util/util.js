import config from '../../config'
import fetch from 'isomorphic-fetch'
import setLoading from '../actions/common/loading'
import setHint from '../actions/common/hint'

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

export const apiFetch = (set, dispatch) => {
  let init, setting, isHint
  init = {
    method: 'post',
    credentials: 'include',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  }
  setting = Object.assign({}, init, {
    body: objToStr(set.body)
  })
  isHint = set.hint === undefined ? true : set.hint
  dispatch(setLoading(true))
  fetch(set.url, setting)
    .then(res => res.json())
    .then(r => {
      dispatch(setLoading(false))
      if (isHint && dispatch) {
        dispatch(setHint({
          message: r.msg
        }))
      }
      if (r.code === 200) {
        if (set.success && typeof set.success === 'function') {
          set.success(r)
        }
      }
    })
}
