import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {showLogin, hideLogin} from '../../actions/popup/login'
import {showReg, hideReg} from '../../actions/popup/reg'
import {getUser} from '../../actions/common/user'

const mapStateToProps = state => {
  return ({
    posts: state.posts.data
  })
}

const LoginBox = props => {
  let {dispatch} = props
  return (
    <div className="right">
      <div className="login-btn">
        <a onClick={() => dispatch(showLogin())}>登录</a>
        <span>|</span>
        <a onClick={() => dispatch(showReg())}>注册</a>
      </div>
    </div>
  )
}

class Header extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.dispatch(getUser())
  }

  render() {
    let {posts, dispatch} = this.props
    return (
      <header className="header clearfix">
        <div className="logo"><Link to="/">wolyshaw</Link></div>
        <nav className='clearfix'>
          <Link to="/">首页</Link>
        </nav>
        <LoginBox dispatch={dispatch}/>
      </header>
    )
  }
}

export default connect(
  mapStateToProps
)(Header)
