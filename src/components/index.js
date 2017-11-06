import React, { PureComponent } from 'react'
import Pages from './pages'
import 'static/style/application.less'

export default class Application extends PureComponent {
  constructor(props) {
    super(...props)
  }

  render() {
    return (
      <div>
        <Pages/>
      </div>
    )
  }
}
