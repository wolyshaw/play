import React from 'react'
import styles from '../../static/common.css'

let Loading = props => {
  let {show} = props
  return (
    <div className={styles.loadingWarp + (show ? ' ' + styles.loadingShow: '')}>
      <div className={styles.loading}>
        <span className={styles.loadingF}></span>
        <span className={styles.loadingS}></span>
        <span className={styles.loadingT}></span>
      </div>
    </div>
  )
}

export default Loading
