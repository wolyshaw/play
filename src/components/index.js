import React, { PureComponent } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { fetchs } from 'util'
import Header from './elements/Header'
import Pages from './pages'
import 'static/style/application.less'

export default class Application extends PureComponent {
  constructor(props) {
    super(...props)
  }

  componentWillMount() {
    fetchs('/common/user')
      .then(r => console.log(r))
  }

  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Pages/>
        </div>
      </Router>
    )
  }
}
