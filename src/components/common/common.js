import 'rc-notification/assets/index.css'
import styles from 'static/common.less'
import 'static/nomodules/common.less'

import Notification from 'rc-notification'
const notification = Notification.newInstance()

const hintStyle = {
  padding: 10,
  borderRadius: 5,
  transform: 'translateX(-50%)',
  fontSize: 12
}

export const openNotification = set => {
  let { content, duration = 3, style = hintStyle, onClose, closable, key } = set
  return notification.notice({ content, duration, style, onClose, closable, key })
}
