import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {showLogin, hideLogin} from '../../actions/popup/login'
import {showReg, hideReg} from '../../actions/popup/reg'
import {userInfo, logout} from '../../actions/common/user'

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

const UserInfo = props => {
  let {user, dispatch} = props
  return (
    <div className="right">
      <div className="login-btn">
        <img src={user.avatar}/>
        <Link to={'/user/' + user._id}>{user.nice_name}</Link>
        <span>|</span>
        <a onClick={() => dispatch(logout())}>退出</a>
      </div>
    </div>
  )
}

class Header extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.dispatch(userInfo())
  }

  render() {
    let {posts, dispatch, common} = this.props
    return (
      <header className="header clearfix">
        <div className="logo"><Link to="/">wolyshaw</Link></div>
        <nav className='clearfix'>
          <Link to="/">首页</Link>
          <Link to="/add">新增文章</Link>
        </nav>
        {common.user.data ? <UserInfo dispatch={dispatch} user={common.user.data}/> : <LoginBox dispatch={dispatch}/>}
      </header>
    )
  }
}

export default connect(
  mapStateToProps
)(Header)
