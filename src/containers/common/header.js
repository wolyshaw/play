import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {showLogin, hideLogin} from '../../actions/popup/login'
import {showReg, hideReg} from '../../actions/popup/reg'

let mapStateToProps = state => {
  return ({
    posts: state.posts.data
  })
}

class Header extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    // this.props.dispatch(getPosts())
  }

  render() {
    let {posts, dispatch} = this.props
    return (
      <header className="header clearfix">
        <div className="logo"><Link to="/">wolyshaw</Link></div>
        <nav className='clearfix'>
          <Link to="/">首页</Link>
        </nav>
        <div className="right">
          <div className="login-btn">
            <a onClick={() => dispatch(showLogin())}>登录</a>
            <span>|</span>
            <a onClick={() => dispatch(showReg())}>注册</a>
          </div>
        </div>
      </header>
    )
  }
}

export default connect(
  mapStateToProps
)(Header)
