import React, { Fragment, PureComponent } from 'react'
import { Helmet } from 'react-helmet'
import { withRouter } from 'react-router-dom'
import { mode } from '@/utils'
import Pages from './pages'
// import Header from './elements/Header'
import config from '../../config'
import '@/static/style/application.less'

@withRouter
export default class Application extends PureComponent {
  render() {
    return (
      <Fragment>
        <Helmet
          htmlAttributes={{lang: 'zh-CN'}}
          titleTemplate={`%s - ${config[mode].title}`}
          titleAttributes={{itemprop: 'name', lang: 'zh-CN'}}
          meta={[
            {name: 'keywords', content: config[mode].keywords},
            {name: 'description', content: config[mode].description},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
          ]}
        />
        <Pages/>
      </Fragment>
    )
  }
}
