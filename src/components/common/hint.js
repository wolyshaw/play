import React from 'react'
import styles from '../../static/common.css'

let Hint = (props) => {
  let {message, delay, show} = props
  return (
    <div className={styles.hintWarp + ' ' + (show ? styles.hintWarpShow : '')}>{message}</div>
  )
}

export default Hint
