import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Main from 'components/common/Main'
import 'static/common.less'

import { appStore } from 'util'

render(
  <Provider store={ appStore }>
    <Main/>
  </Provider>,
  document.getElementById('app')
)
