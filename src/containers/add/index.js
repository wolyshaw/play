import React, {Component} from 'react'
import {connect} from 'react-redux'
import setHint from '../../actions/common/hint'
import {createPost} from '../../actions/posts'
import {showLogin} from '../../actions/popup/login'
import {showReg} from '../../actions/popup/reg'
import Editor from '../../components/common/editor'

const LoginInfoHint = props => {
  let {dispatch} = props
  return (
    <div className="w-login-hint">
      <p>您暂未登录，<a onClick={() => dispatch(showLogin())}>登录</a>或<a onClick={() => dispatch(showReg())}>注册</a>后继续操作。</p>
    </div>
  )
}

const AddPost = props => {
  let {dispatch} = props
  let postData = {
    title: undefined,
    summary: undefined,
    tags: undefined,
    ctegory: undefined
  }
  let editor
  let submiutPost = e => {
    e.preventDefault()
    if (!postData.title.value.trim()) {
      dispatch(setHint({
        message: '文章标题必填'
      }))
      return
    }
    if (!editor.content.innerHTML.trim()) {
      dispatch(setHint({
        message: '文章内容必填'
      }))
      return
    }
    dispatch(createPost({
      title: postData.title.value.trim(),
      content: encodeURIComponent(editor.content.innerHTML.trim()),
      summary: postData.summary.value.trim(),
      success: r => console.log(r)
    }))
  }

  return (
    <form className="w-form w-add-post-form" onSubmit={e => submiutPost(e)}>
      <input className="w-input" type="text" ref={title => postData.title = title} placeholder="标题"/>
      <textarea className="w-textarea w-summary" ref={summary => postData.summary = summary} placeholder="摘要"></textarea>
      <Editor ref={n => editor = n}  placeholder="内容"/>
      <input className="w-submit w-button" type="submit" value="submit"/>
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
      <div className="w-pagewidth w-marginauto">
        {user ? <AddPost dispatch={dispatch}/> : <LoginInfoHint dispatch={dispatch}/>}
      </div>
    )
  }
}

export default connect(
  mapStateToProps
)(Add)
