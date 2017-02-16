import React, {Component} from 'react'
import render from 'react-dom'
import styles from '../../static/editor.css'

export default class Editor extends Component {
  constructor(props) {
    super(props)
    this.content = ''
  }
  render() {
    return (
      <div className={styles.editorWrap}>
        <div className={styles.editorCtrl}>
          <span draggable="true" onClick={() => document.execCommand('bold')}>B</span>redo
          <span draggable="true" onClick={() => document.execCommand('removeFormat')}>移除格式</span>
          <span draggable="true" onClick={() => document.execCommand('undo')}>撤销</span>
          <span draggable="true" onClick={() => document.execCommand('unlink')}>移除A</span>
          <span draggable="true" onClick={() => document.execCommand('insertUnorderedList')}>li</span>
          <span draggable="true" onClick={() => document.execCommand('insertOrderedList')}>ol</span>
        </div>
        <div
          className={styles.editorContent}
          contentEditable="true"
          spellCheck="false"
          ref={n => this.content = n}
          data-placeholder={this.props.placeholder}
        >
        </div>
      </div>
    )
  }
}
