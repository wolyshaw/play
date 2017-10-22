import React, { Component } from 'react'
import classNames from 'classnames/bind'
import { connect } from 'react-redux'

import styles from './loading.less'
const cx = classNames.bind(styles)

class Loading extends Component {
  constructor(props) {
    super(...props)
  }

  render() {
    let { loading } = this.props
    return (
      <div className={ cx('loading', {visibility: loading}) }>
        <div>
          <span></span>
        </div>
      </div>
    )
  }
}

export default connect(state => state)(Loading)
