import React from 'react'
import {showReg} from '../../actions/popup/reg'

let regData = {}

let submitReg = e => {
  e.preventDefault()
}

let Reg = props => {
  let {submit, reg, hideReg} = props
  return (
    <div className={'w_popup reg' + (reg.isShow ? ' w_popup_show' : '')}>
      <span className="close" onClick={() => hideReg()}>关闭</span>
      <form onSubmit={e => submitReg(e)}>
        <label><span>昵称：</span><input type="text" /></label>
        <label><span>密码：</span><input type="password" /></label>
        <label><span>邮箱：</span><input type="email" /></label>
        <input type="submit" className="w-btn" value="提交" />
      </form>
    </div>
  )
}

export default Reg
