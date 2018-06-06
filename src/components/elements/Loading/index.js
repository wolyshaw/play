import React from 'react'
import { render } from 'react-dom'
import LoadingContent from './LoadingContent'
import styles from './loading.less'

let div

export const getHint = () => {
  return document.querySelector('.' + styles.loading)
}

export const openLoading = () => {
  let oldHint = getHint()
  if(oldHint) {
    oldHint.parentElement.style.display = ''
    return
  }
  div = document.createElement('div')
  render(<LoadingContent/>, div)
  document.body.appendChild(div)
}

export const closeLoading = () => {
  let oldHint = getHint()
  if(oldHint) {
    oldHint.parentElement.style.display = 'none'
    return
  }
}
