import React, { PureComponent } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Bundle from '../elements/Bundle'
const HomeLazy = require('bundle-loader?lazy&name=Home!components/pages/Home')

const NotFind = props => {
  return (
    <div>
      当前页面未找到
    </div>
  )
}

const Home = props => (
  <Bundle load={ HomeLazy } title={ 'Home' }>
    { (Container) => <Container { ...props }/> }
  </Bundle>
)

export default class Pages extends PureComponent {
  constructor(props) {
    super(...props)
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={ Home }/>
          <Route component={ NotFind }/>
        </Switch>
      </Router>
    )
  }
}
