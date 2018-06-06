import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import Item from './item'
import styles from './list.less'

export default class Article extends PureComponent {

  static propTypes = {
    rows: propTypes.array
  }

  render() {
    let { rows = [] } = this.props
    return (
      <div className={ styles.list }>
        { rows.map(row => <Item key={row.id} row={row}/>) }
      </div>
    )
  }
}
