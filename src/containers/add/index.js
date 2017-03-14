import React, {Component} from 'react'
import {connect} from 'react-redux'
import setHint from '../../actions/common/hint'
import {createPost} from '../../actions/posts'
import {showLogin} from '../../actions/popup/login'
import {showReg} from '../../actions/popup/reg'
import {showUpload} from '../../actions/popup/upload'
import Editor from 'react-html-editor'
import styles from '../../static/add.css'
import editorStyle from 'react-html-editor/dist/static/editor.css'

const LoginInfoHint = props => {
  let {dispatch} = props
  return (
    <div className={styles.loginHint}>
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
  let editor, form
  let submiutPost = e => {
    e.preventDefault()
    if (!postData.title.value.trim()) {
      dispatch(setHint({
        message: '文章标题必填'
      }))
      return
    }
    if (!editor.getContent()) {
      dispatch(setHint({
        message: '文章内容必填'
      }))
      return
    }
    dispatch(createPost({
      title: postData.title.value.trim(),
      content: editor.getContent(),
      summary: postData.summary.value.trim(),
      success: r => {
        form.reset()
        editor.innerHTML = ''
      }
    }))
  }

  let setUpload = () => {
    dispatch(showUpload())
  }

  return (
    <form ref={n => form = n} className={styles.addForm} onSubmit={e => submiutPost(e)}>
      <input className={styles.input} type="text" ref={title => postData.title = title} placeholder="标题"/>
      <textarea className={styles.textarea} ref={summary => postData.summary = summary} placeholder="摘要"></textarea>
      <Editor ref={n => editor = n} classObject={editorStyle} setImage={() => setUpload()}/>
      <input className={styles.submit} type="submit" value="提交"/>
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
      <div className={styles.addWrap}>
        {user ? <AddPost dispatch={dispatch}/> : <LoginInfoHint dispatch={dispatch}/>}
      </div>
    )
  }
}

module.exports = connect(
  mapStateToProps
)(Add)
