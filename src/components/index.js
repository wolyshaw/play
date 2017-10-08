import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
import { BrowserRouter, Switch } from 'react-router-dom'
import Pages from 'components/pages'
import Popups from 'components/popups'
import { setUser } from 'actions/user'
import Loading from 'components/elements/Loading'
import { appStore } from 'util'

class Application extends Component {
  constructor(props) {
    super(...props)
  }

  componentWillMount() {
    appStore.dispatch(setUser())
  }

  render() {
    return (
      <Provider store={ appStore }>
        <BrowserRouter>
          <div>
            <Pages/>
            <Popups/>
            <Loading/>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default connect(state => state)(Application)
