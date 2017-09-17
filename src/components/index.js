import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
import { BrowserRouter, Switch } from 'react-router-dom'
import Pages from 'components/pages'
import { appStore } from 'util'

class Application extends Component {
  constructor(props) {
    super(...props)
  }

  render() {
    return (
      <Provider store={ appStore }>
        <BrowserRouter>
          <div>
            <Pages/>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default connect(state => state)(Application)
