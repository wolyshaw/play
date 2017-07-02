import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { openHint } from 'components/common/common'

import { appStore } from 'util'

const Test = props => {
  return (
    <div onClick={ () => openHint('click') }>
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
