import React, { Component } from 'react'

export default class Paging extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { pagenum, pageindex, count } = this.props
    return (
      <div>
        Paging
      </div>
    )
  }
}
