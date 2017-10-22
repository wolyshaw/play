import React, { Component } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import Bundle from 'components/elements/Bundle'

const LoginLazy = require('bundle-loader?lazy&name=Login!components/popups/Login/index')
import styles from './popup.less'

const Login = props => (
  <Bundle load={ LoginLazy }>
    { (Container) => <Container { ...props }/> }
  </Bundle>
)

const SetActionPopup = popup => {
  let name = popup.name.toUpperCase()
  switch (name) {
    case 'LOGIN':
      return <Login {...popup}/>
      break;
    default:
      ''
  }
}

class Popups extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { popup } = this.props
    return (
      <div className={ styles.controller }>
        { SetActionPopup(popup) }
      </div>
    )
  }
}

export default connect(state => state)(Popups)
