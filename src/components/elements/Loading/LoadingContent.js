import React, { PureComponent } from 'react'
import styles from './loading.less'
import { closeLoading } from './index'

export default class LoadingContent extends PureComponent {
  constructor(props) {
    super(...props)
  }

  render() {
    return (
      <div className={ styles.wrap } onClick={ () => closeLoading() }>
        <div className={ styles.loading }>
          <span className={ styles.l_o }></span>
          <span className={ styles.l_t }></span>
          <span className={ styles.l_s }></span>
        </div>
      </div>
    )
  }
}
