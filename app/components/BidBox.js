import React from 'react'
import {render} from 'react-dom'
import BidLedger from './BidLedger'
import { PageHeader } from 'react-bootstrap'

class BidBox extends React.Component {
  render () {
    return (
      <div>
        <PageHeader><small>Bid Ledger</small></PageHeader>
        <BidLedger />
      </div>
    )
  }
}

module.exports = BidBox
