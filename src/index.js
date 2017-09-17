import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Main from 'components/common/Main'
import Application from 'components'
import 'static/common.less'

import { appStore } from 'util'

render(
  <Provider store={ appStore }>
    <Application/>
  </Provider>,
  document.getElementById('app')
)
