import 'rc-notification/assets/index.css'
import styles from 'static/common.less'
import 'static/nomodules/common.less'

import Notification from 'rc-notification'
const notification = Notification.newInstance()

const hintStyle = {
  padding: 0,
  borderRadius: 5,
  minWidth: 40,
  minHeight: 40
}

export const openNotification = set => {
  let { content, duration = 3, style = hintStyle, onClose, closable, key } = set
  return notification.notice({ content, duration, style, onClose, closable, key })
}
