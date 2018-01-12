import React, { PureComponent } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import Application from 'components'
import { appStore } from 'util/store'

render(
  <Provider store={ appStore(window.__INITIAL_STATE__) }>
    <Router>
      <Application/>
    </Router>
  </Provider>
,
  document.getElementById('app')
)
