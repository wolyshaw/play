import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import store from '../reducers'

const middleware = [
  thunk
]

export const appStore = createStore(
  store,
  applyMiddleware(...middleware)
)

console.log(appStore.getState())
