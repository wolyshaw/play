import 'rc-notification/assets/index.css'
import styles from 'static/common.less'
import 'static/nomodules/common.less'

import Notification from 'rc-notification'
const notification = Notification.newInstance()

export const openNotification = set => {
  let { content, duration = 3, style = style, onClose, closable, key } = set
  notification.notice({
    content,
    duration,
    style,
    onClose,
    closable,
    key
  })
}
