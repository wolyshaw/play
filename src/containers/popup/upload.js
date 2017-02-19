import React, {Component} from 'react'
import {render} from 'react-dom'
import {connect} from 'react-redux'
import setHint from '../../actions/common/hint'
import {getToken} from '../../actions/popup/upload'
import styles from '../../static/popup.css'

let form, file

class Upload extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: ''
    }
  }

  // componentWillMount() {
  //   this.props.dispatch(
  //     getToken({
  //       success: r => console.log(r)
  //     })
  //   )
  // }

  formSubmit(e) {
    e.preventDefault()
    console.log(file.files[0])
    let formData = new FormData()
    formData.append('file', file.files[0])
    formData.append('name', 'name')
    this.props.dispatch(
      getToken({
        body: formData,
        success: r => {
          form.reset()
          console.log(r)
        }
      })
    )
  }

  render() {
    let {upload, hideUpload} = this.props
    return (
      <div className={styles.popup + (upload.isShow ? ' ' + styles.popupShow : '')}>
        <span className={styles.close} onClick={() => hideUpload()}>关闭</span>
        <form ref={n => form = n} onSubmit={e => this.formSubmit(e)}>
          <label><span>选择图片</span><input type="file" ref={n => file = n} /></label>
          <input type="submit" value="submit"/>
        </form>
      </div>
    )
  }
}

export default connect()(Upload)
