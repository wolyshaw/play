import config from '../../config'
import fetch from 'isomorphic-fetch'
import setLoading from '../actions/common/loading'
import setHint from '../actions/common/hint'

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
  let init, setting
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
  dispatch(setLoading(true))
  fetch(set.url, setting)
    .then(res => res.json())
    .then(r => {
      dispatch(setLoading(false))
      dispatch(setHint({
        message: r.msg
      }))
      if (r.code === 200) {
        set.success(r)
      }
    })
}
