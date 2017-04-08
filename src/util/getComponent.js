const getAdd = (location, callback) => {
  require.ensure([], require => {
    callback(null, require('./containers/add'))
  }, 'add')
}

export getAdd

const getPost = (location, callback) => {
  require.ensure([], require => {
    callback(null, require('./containers/post'))
  }, 'post')
}

export getPost

const getUser = (location, callback) => {
  require.ensure([], require => {
    callback(null, require('./containers/user'))
  }, 'user')
}

export getUser
