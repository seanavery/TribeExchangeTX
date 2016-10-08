import React from 'react'
import {render} from 'react-dom'

class Bid extends React.Component {
  render () {
    return (
      <div>
        {this.props.type}
        {this.props.price}
      </div>
    )
  }
}

module.exports = Bid
