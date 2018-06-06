import React, { PureComponent } from 'react'
import propTypes from 'prop-types'

export default class NotFund extends PureComponent {

  static propTypes = {
    staticContext: propTypes.object
  }

  constructor(props) {
    super(...props)
    const { staticContext } = this.props
    if (staticContext) {
      staticContext.status = 404
    }
  }

  render() {
    return (
      <div>暂无此页面</div>
    )
  }
}
