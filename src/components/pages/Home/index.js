import React, { PureComponent } from 'react'
import { fetchs } from 'util'

export default class Home extends PureComponent {
  constructor(props) {
    super(...props)
    this.state = {
      list: {}
    }
  }

  componentWillMount() {
    fetchs('/front/article/list')
      .then(r => this.setState({ list: r.list.rows }))
  }

  render() {
    console.log(this.state.list)
    return (
      <div>
        Home
      </div>
    )
  }
}
