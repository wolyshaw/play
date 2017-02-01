import React, {Component} from 'react'
import {connect} from 'react-redux'
import setHint from '../../actions/common/hint'
import {showLogin, hideLogin} from '../../actions/popup/login'

const AddPost = props => {
  let {dispatch} = props
  let postData = {
    title: undefined,
    content: undefined,
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
    console.log(postData.title.value.trim())
  }

  return (
    <form onSubmit={e => submiutPost(e)}>
      <input type="text" ref={title => postData.title = title}/>
      <textarea ref={content => postData.content = content}></textarea>
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
        {user ? <AddPost dispatch={dispatch}/> : '暂未登录'}
      </div>
    )
  }
}

export default connect(
  mapStateToProps
)(Add)
