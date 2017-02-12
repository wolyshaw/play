import React, {Component} from 'react'
import render from 'react-dom'
import '../../static/editor.css'

export default class Editor extends Component {
  constructor(props) {
    super(props)
    this.content = ''
  }
  render() {
    return (
      <div className="editor-wrap">
        <div className="editor-ctrl">
          <span draggable="true" onClick={() => document.execCommand('bold')}>B</span>
        </div>
        <div
          className="editor-content"
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
