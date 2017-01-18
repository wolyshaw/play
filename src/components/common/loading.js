import React from 'react'

let Loading = props => {
  let {show} = props
  return (
    <div className={'w-loading-warp' + (show ? ' w-loading-show': '')}>
      <div className="w-loading">
        <span className="w-loading-f"></span>
        <span className="w-loading-s"></span>
        <span className="w-loading-t"></span>
      </div>
    </div>
  )
}

export default Loading
