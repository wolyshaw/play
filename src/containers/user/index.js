import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUser} from '../../actions/common/user'
import {formatTime} from '../../util/util'
import styles from '../../static/user.css'

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
    this.props.dispatch(getUser({
      id: this.props.params.id,
      success: this.success.bind(this)
    }))
  }

  render() {
    let {params} = this.props
    let {nice_name, avatar, create_at} = this.state.user
    return (
      <div className={styles.user}>
        <div className={styles.infoWrap}>
          <div className={styles.info}>
            <img  className={styles.avatar} src={avatar}/>
            <h3 className={styles.niceName}>{nice_name}</h3>
            {create_at ? <p className={styles.createAt}>加入时间：{formatTime(create_at)}</p> : ''}
          </div>
        </div>
      </div>
    )
  }
}

module.exports = connect()(User)
