import React, { Component } from 'react'

export default class EmptyList extends Component {
  constructor(props) {
    super(...props)
  }

  render() {
    return (
      <div className='clearfix' style={{ textAlign: 'center' }}>
        <span style={ styles.empty }>暂无数据</span>
      </div>
    )
  }
}

const styles = {
  empty: {
    display: 'inline-block',
    height: '48px',
    lineHeight: '48px',
    background: 'url('+require('static/elements/empty.png')+') left center no-repeat',
    paddingLeft: '83px'
  }
}
