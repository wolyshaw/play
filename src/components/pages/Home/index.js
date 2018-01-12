import React, { PureComponent } from 'react'
import { Fetch } from 'util'
import Article from 'components/elements/Article'

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
    Fetch('/front/article/list')
      .then(r => this.setState({ list: r.list.rows }))
  }


  render() {
    return (
      <div>
        { <Article rows={this.state.list}/> }
      </div>
    )
  }
}
