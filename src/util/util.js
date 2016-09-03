util = {
  ajax: function(set) {
    var url = set.url,
      data = set.data === undefined ? null : set.data,
      type = set.type || 'get',
      success = set.success,
      complete = set.complete,
      xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          success(JSON.parse(xhr.responseText))
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
}
