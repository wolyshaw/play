import React from 'react'

let Hint = (props) => {
  let {open, show} = props
  return (
    <div style={{display: show ? 'block' : 'none'}}>hint</div>
  )
}

export default Hint
