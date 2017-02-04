import React, {Component} from 'react'
import {connect} from 'react-redux'
import setHint from '../../actions/common/hint'
import {createPost} from '../../actions/posts'
import {showLogin} from '../../actions/popup/login'
import {showReg} from '../../actions/popup/reg'

const LoginInfoHint = props => {
  let {dispatch} = props
  return (
    <div>
      <p>您暂未登录，<span onClick={() => dispatch(showLogin())}>登录</span>或<span onClick={() => dispatch(showReg())}>注册</span>后继续操作。</p>
    </div>
  )
}

const AddPost = props => {
  let {dispatch} = props
  let postData = {
    title: undefined,
    content: undefined,
    summary: undefined,
    tags: undefined,
    ctegory: undefined
  }

  let submiutPost = e => {
    e.preventDefault()
    if (!postData.title.value.trim()) {
      dispatch(setHint({
        message: '文章标题必填'
      }))
      return
    }
    if (!postData.content.value.trim()) {
      dispatch(setHint({
        message: '文章内容必填'
      }))
      return
    }
    dispatch(createPost({
      title: postData.title.value.trim(),
      content: postData.content.value.trim(),
      summary: postData.summary.value.trim(),
      success: r => console.log(r)
    }))
  }

  return (
    <form onSubmit={e => submiutPost(e)}>
      <input type="text" ref={title => postData.title = title}/>
      <textarea ref={summary => postData.summary = summary}></textarea>
      <textarea ref={content => postData.content = content}></textarea>
      <input type="submit" value="submit"/>
    </form>
  )
}

const mapStateToProps = state => ({
  user: state.common.user.data
})

class Add extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let {dispatch, user} = this.props
    return (
      <div>
        {user ? <AddPost dispatch={dispatch}/> : <LoginInfoHint dispatch={dispatch}/>}
      </div>
    )
  }
}

export default connect(
  mapStateToProps
)(Add)
