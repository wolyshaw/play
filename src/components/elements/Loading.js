import React, { Component } from 'react'
// import classNames from 'classnames/bind'
import { connect } from 'react-redux'

import styles from 'static/main.less'
// const cx = classNames.bind(styles)

class Loading extends Component {
  constructor(props) {
    super(...props)
  }

  render() {
    let { loading } = this.props
    console.log(loading)
    return (
      <div className={ [styles.loading, (loading ? styles.visibility : '')].join(' ') }>
        <div>
          <span></span>
          <p>loading</p>
        </div>
      </div>
    )
  }
}

export default connect(state => state)(Loading)
