import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import styles from './item.less'

export default class Item extends PureComponent {
  constructor(props) {
    super(...props)
  }

  render() {
    let { row } = this.props
    return (
      <article className={styles.item}>
        <div>
          <h2><Link to={`/article/${row.id}`}>{ row.title }</Link></h2>
          <p>{ row.excerpt }</p>
          <div>
            <span className={ styles.tags }>{ row.tags.map(tag => <span key={ tag.id }>{ tag.title }</span>) }</span>
            <span>{ row.createdAt }</span>
            <span>{ row.author.nice_name }</span>
          </div>
        </div>
      </article>
    )
  }
}
