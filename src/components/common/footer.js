import React from 'react'
import {Link} from 'react-router'

let Footer = props => {
  let {year} = props
  return (
    <footer className="w-footer">
      <div className="w-marginauto w-comwidth">
        <a href="https://xwlong.com">wolyshaw</a>
      </div>
    </footer>
  )
}

export default Footer
