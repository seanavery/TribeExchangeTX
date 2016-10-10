import React from 'react';
import {render} from 'react-dom';
import Bid from './Bid'
import AuctionForm from './AuctionForm'
import BidList from './BidList'

class AuctionLedger extends React.Component {
  render () {
    return (
      <div>
        <h1>{this.props.type}</h1>
        <BidList />
        <AuctionForm />
      </div>
    )
  }
}

module.exports = AuctionLedger
