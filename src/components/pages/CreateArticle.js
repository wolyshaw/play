import React, { Component } from 'react'
import { render } from 'react-dom'
import { convertToRaw } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html'
import { apiFetch } from 'util/util'
import Select, {Option, OptGroup} from 'rc-select'
import 'rc-select/assets/index.css'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import styles from 'static/createArticle.less'

class CreateArticle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editorState: null,
      title: '',
      excerpt: '',
      tag: []
    }
    this.onEditorStateChange = this._onEditorStateChange.bind(this)
    this.submit = this._submit.bind(this)
  }

  _onEditorStateChange(editorState) {
    this.setState({ editorState })
  }

  _submit(e) {
    e.preventDefault()
    let content
    let { editorState } = this.state
    if (editorState && editorState.getCurrentContent) {
      content = draftToHtml(convertToRaw(editorState.getCurrentContent()))
    }
    let { title, excerpt, tag } = this.state
    apiFetch({
      url: '/front/article/create',
      body: {
        content,
        title,
        excerpt,
        tag
      }
    })
  }

  componentWillMount() {
    apiFetch({
      url: '/front/tag/list',
      hint: false,
      success: r => this.setState({ tagList: r.list.rows || [] })
    })
  }

  render() {
    const { editorState, tagList = [] } = this.state
    return (
      <form className={ styles.controller } onSubmit={ this.submit }>
        <input
          type={ 'text' }
          className={ styles.title }
          placeholder={ '请输入内容标题' }
          onChange={ e => this.setState({ title: e.target.value }) }
          value={ this.state.title }
        />
        <textarea
          className={ styles.excerpt }
          placeholder={ '请输入内容摘要' }
          onChange={ e => this.setState({ excerpt: e.target.value }) }
          value={ this.state.excerpt }
        ></textarea>
        <Select
          className={ styles.select }
          multiple={ true }
          onChange={ values => this.setState({ tag: values}) }
          value={ this.state.tag }
        >
          {
            tagList.map(item => <Option key={ item.id } value={ item.id } title={ item.title }>{ item.title }</Option>)
          }
        </Select>
        <Editor
          editorClassName={ styles.editorContent }
          editorState={ editorState }
          onEditorStateChange={ this.onEditorStateChange }
        />
      <input type={ 'submit' } value={ '提交' }/>
      </form>
    )
  }
}

export default CreateArticle
