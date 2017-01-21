import React from 'react'
import {Link} from 'react-router'

let Footer = props => {
  let {year} = props
  return (
    <footer>
      <Link to="https://xwlong.com">wolyshaw</Link>
    </footer>
  )
}

export default Footer
