import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { withRouter } from 'react-router-dom'
import { Fetch } from 'util'
import Pages from './pages'
import Header from './elements/Header'
import config from '../../config'
import 'static/style/application.less'

class Application extends Component {
  constructor(props) {
    super(...props)
  }

  componentWillMount() {
    // Fetch('/common/user')
    //   .then(r => console.log(r))
  }

  render() {
    return (
      <span>
        <Helmet
          htmlAttributes={{lang: 'en', amp: undefined}}
          titleTemplate={`%s - ${config.site.title}`}
          titleAttributes={{itemprop: 'name', lang: 'en'}}
          meta={[
            {name: 'keywords', content: config.site.keywords},
            {name: 'description', content: config.site.description},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
          ]}
        />
        <Header/>
        <Pages/>
      </span>
    )
  }
}

export default withRouter(Application)
