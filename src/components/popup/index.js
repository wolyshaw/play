import React from 'react'
import Login from './login'

let Popup = props => {
  let {isShow, children} = props
  return (
    <div className="popup">
      <Login/>
    </div>
  )
}

export default Popup
