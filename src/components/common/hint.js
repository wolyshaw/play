import React from 'react'

let Hint = (props) => {
  let {message, delay, show} = props
  return (
    <div className="w-hint-warp" style={{display: show ? 'block' : 'none'}}>{message}</div>
  )
}

export default Hint
