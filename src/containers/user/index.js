import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUser} from '../../actions/common/user'

class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
  }

  success(r) {
    this.setState({
      user: r.data
    })
  }

  componentWillMount() {
    console.log('gjhghjjh')
    this.props.dispatch(getUser({
      id: this.props.params.id,
      success: this.success.bind(this)
    }))
  }

  render() {
    let {params} = this.props
    let {title, summary, content} = this.state.user
    return (
      <div>
        User
      </div>
    )
  }
}

export default connect()(User)
