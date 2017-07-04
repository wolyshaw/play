import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { openNotification } from 'components/common/common'

import { appStore } from 'util'

const hintStyle = {
  padding: 0,
  borderRadius: 5,
  minWidth: 40,
  minHeight: 40
}

const Test = props => {
  return (
    <div onClick={ () => openNotification({content: 'test', duration: 10, style: hintStyle})}>
      test
    </div>
  )
}

render(
  <Provider store={ appStore }>
    <Test/>
  </Provider>,
  document.getElementById('app')
)
