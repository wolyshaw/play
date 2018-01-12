import React, { PureComponent } from 'react'

export default class NotFund extends PureComponent {
  constructor(props) {
    super(...props)
  }

  componentWillMount() {
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
