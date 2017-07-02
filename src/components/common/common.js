import React, { Component } from 'react'
import { render } from 'react-dom'

import styles from 'static/common.less'

const HintList = props => {
  let { hint, status } = props
  return (
    <div className={ styles.hint }>
      { props.hint }
    </div>
  )
}

export const openHint = (text = '', time = 5000) => {
  let timer,
    div = document.createElement('div')
  render(
    <HintList hint={ text }/>,
    div
  )
  document.body.append(div)
}
