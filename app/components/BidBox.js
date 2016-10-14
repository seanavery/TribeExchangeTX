import React from 'react'
import {render} from 'react-dom'
import BidLedger from './BidLedger'

class BidBox extends React.Component {
  render () {
    return (
      <div>
        <BidLedger />
      </div>
    )
  }
}

module.exports = BidBox
