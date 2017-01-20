import React from 'react'

let NextPost = props => {
  let {next} = props
  return (
    <div>
      <span onClick={next}>下一页</span>
    </div>
  )
}

export default NextPost
