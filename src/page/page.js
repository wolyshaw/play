import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  test: function() {
    console.log(this)
  },
  render() {
    return (
      <div>
        <Link to="/" onClick={this.test}>kljilsfdes</Link>
        {this.props.children}
      </div>
    )
  }
})
