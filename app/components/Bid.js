import React from 'react'
import {render} from 'react-dom'

class Bid extends React.Component {
  render () {
    return (
      <div>
        {this.props.id}
        {this.props.price}
        {this.props.amount}
      </div>
    )
  }
}

module.exports = Bid
