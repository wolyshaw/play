import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
import { BrowserRouter, Switch } from 'react-router-dom'
import Pages from 'components/pages'
import Loading from 'components/elements/Loading'
import { appStore } from 'util'

class Application extends Component {
  constructor(props) {
    super(...props)
  }

  render() {
    console.log(this.props)
    return (
      <Provider store={ appStore }>
        <BrowserRouter>
          <div>
            <Pages/>
            <Loading/>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default connect(state => state)(Application)
