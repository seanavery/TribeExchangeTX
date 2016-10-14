import React from 'react'
import {render} from 'react-dom'
import BidLedger from './BidLedger'
import { PageHeader } from 'react-bootstrap'
import BidForm from './BidForm'
class BidBox extends React.Component {
  render () {
    return (
      <div>
        <PageHeader><small>Bid Ledger</small></PageHeader>
        <BidLedger />
        <BidForm />
      </div>
    )
  }
}

module.exports = BidBox
