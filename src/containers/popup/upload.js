import React, {Component} from 'react'
import {render} from 'react-dom'
import {connect} from 'react-redux'
import setHint from '../../actions/common/hint'
import {getToken} from '../../actions/popup/upload'
import styles from '../../static/popup.css'
import {fileSize} from '../../util/util'

let form, file

class Upload extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: '',
      filename: '选择图片'
    }
  }

  changeFile() {
    let {name, size, type} = file.files[0]
    console.log(fileSize(size))
    this.setState({
      filename: name
    })
  }

  formSubmit(e) {
    e.preventDefault()
    let formData = new FormData()
    formData.append('file', file.files[0])
    formData.append('name', 'name')
    this.props.dispatch(
      getToken({
        body: formData,
        success: r => {
          form.reset()
        }
      })
    )
  }

  render() {
    let {upload, hideUpload} = this.props,
      popupClass = styles.popup + (upload.isShow ? ' ' + styles.popupShow : '')
    return (
      <div className={popupClass}>
        <span
          className={styles.close}
          onClick={() => hideUpload()}
        >关闭</span>
        <form
          className={styles.upload}
          ref={n => form = n}
          onSubmit={e => this.formSubmit(e)}
        >
          <label className={styles.text}>
            <span>{this.state.filename}</span>
            <input
              className={styles.file}
              type="file"
              onChange={this.changeFile.bind(this)}
              ref={n => file = n}
              required
            />
          </label>
          <input className={styles.submit} type="submit" value="submit"/>
        </form>
      </div>
    )
  }
}

export default connect()(Upload)
