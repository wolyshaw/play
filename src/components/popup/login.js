import React from 'react'

let Login = props => {
  let {submit} = props
  return (
    <div>
      <form>
        <label><span>昵称：</span><input type="text" /></label>
        <label><span>密码：</span><input type="password" /></label>
        <label><span>邮箱：</span><input type="email" /></label>
      </form>
    </div>
  )
}

export default Login
