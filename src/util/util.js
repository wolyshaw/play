export function objToStr(obj){
  var strArr = []
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      strArr.push(key + '=' + obj[key])
    }
  }
  return strArr.join('&')
}
export function showLoading(show){
  if(show){
    document.querySelector('.w-loading-warp').classList.add('w-loading-show')
  }else{
    document.querySelector('.w-loading-warp').classList.remove('w-loading-show')
  }
}
export function ajax(set) {
  var url = 'http://demo.abcdea.net/api/' + set.url,
    data = set.data === undefined ? null : objToStr(set.data),
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
    xhr.open(type, url + '?' + data, true)
    xhr.send(null)
  } else {
    xhr.open(type, url, true)
    xhr.send(data)
  }
}
