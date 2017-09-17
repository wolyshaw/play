import { apiFetch } from 'util/util'

const fetchPosts = success => {
  let set = {
    url: '/get/posts',
    success
  }
  apiFetch(set)
}

export { fetchPosts }
