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
      tag: [],
      token: ''
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
      url: '/common/file/token',
      hint: false,
      success: r => this.setState({ token: r.list.token || '' })
    })
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
          required
        />
        <textarea
          className={ styles.excerpt }
          placeholder={ '请输入内容摘要' }
          onChange={ e => this.setState({ excerpt: e.target.value }) }
          value={ this.state.excerpt }
          required
        ></textarea>
        <Select
          className={ styles.select }
          multiple={ true }
          onChange={ values => this.setState({ tag: values}) }
          value={ this.state.tag }
          placeholder='请选择标签'
        >
          {
            tagList.map(item => <Option key={ item.id } value={ item.id } title={ item.title }>{ item.title }</Option>)
          }
        </Select>
        <Editor
          editorClassName={ styles.editorContent }
          editorState={ editorState }
          onEditorStateChange={ this.onEditorStateChange }
          toolbar={{
            options: ['inline', 'list', 'blockType', 'link', 'image'],
            inline: {
              options: ['bold', 'italic', 'underline']
            },
            list: {
              options: ['unordered', 'ordered']
            },
            image: {
              className: undefined,
              component: undefined,
              popupClassName: undefined,
              urlEnabled: false,
              uploadEnabled: true,
              alignmentEnabled: true,
              uploadCallback: e => {
                return new Promise((resolve, reject) => {
                  let formData = new FormData()
                  formData.append('token', this.state.token)
                  formData.append('file', e)
                  apiFetch({
                    url: '//upload.qiniu.com',
                    hint: false,
                    body: formData,
                    complete: r => (r ? resolve({ data: { link: `//o5baw8a4k.qnssl.com/${r.key}!size_webp`}}) : reject('error'))
                  })
                })
              },
              inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
              alt: { present: true, mandatory: true },
              defaultSize: {
                height: 'auto',
                width: 'auto',
              },
            }
          }}
        />
      <input type={ 'submit' } value={ '提交' } className={'button'} style={{ width: '100%', marginTop: '15px'}}/>
      </form>
    )
  }
}

export default CreateArticle
