import React, { PureComponent } from 'react'
import { Fetch } from '@/utils'
import Article from '@/components/elements/Article'

export default class Home extends PureComponent {
  constructor(props) {
    super(...props)
    this.state = {
      list: []
    }
  }

  static Fetchs() {
    return []
  }

  componentDidMount() {
    Fetch('/article/list')
      .then(r => this.setState({ list: r.data.rows }))
  }

  render() {
    return (
      this.state.list ? <Article rows={this.state.list}/> : null
    )
  }
}
