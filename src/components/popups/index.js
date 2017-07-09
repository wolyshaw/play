import React, { Component } from 'react'
import { render } from 'react-dom'

import Login from './Login'
import styles from 'static/popups/popup.less'

const popupList = {
  login: <Login/>
}

let div

class Popups extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={ styles.controller }>
        <div className={ styles.shade }></div>
        <div className={ styles.content }>
          <div className={ styles.close } onClick={ () => closePopup() }>close</div>
          { popupList[this.props.popup] || '' }
        </div>
      </div>
    )
  }
}

export const openPopup = (popup, params) => {
  div = document.createElement('div')
  document.body.append(div)
  render(
    <Popups popup={ popup }/>,
    div
  )
}

export const closePopup = () => {
  if (div) {
    document.body.removeChild(div)
  }
}
