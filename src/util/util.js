import config from '../../config'

export function objToStr(obj){
  var strArr = []
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      strArr.push(key + '=' + obj[key])
    }
  }
  return strArr.join('&')
}

export function addObj(objList){
  var data = {}, objList = objList || [], i, k
  for (i = 0; i < objList.length; i++) {
    for (var k in objList[i]) {
      if (objList[i].hasOwnProperty(k)) {
        data[k] = objList[i][k]
      }
    }
  }
  return data
}

export function showLoading(show){
  if(show){
    document.querySelector('.w-loading-warp').classList.add('w-loading-show')
  }else{
    document.querySelector('.w-loading-warp').classList.remove('w-loading-show')
  }
}

export function ajax(set) {
  var url = set.url || '/',
    initData = {json: 1},
    setData = set.data === undefined ? initData : addObj([initData, set.data]),
    data = objToStr(setData),
    type = set.type || 'get',
    success = set.success,
    complete = set.complete,
    xhr = new XMLHttpRequest()
  showLoading(true)
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(JSON.parse(xhr.responseText))
        showLoading(false)
      }
      if (complete) {
        complete(JSON.parse(xhr.responseText))
      }
    }
  }
  if (type === 'get') {
    xhr.open(type, config.apiHost + url + '?' + data, true)
    xhr.send(null)
  } else {
    xhr.open(type, config.apiHost + url, true)
    xhr.send(data)
  }
}
