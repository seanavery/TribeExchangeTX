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
        <Bid type = {this.props.type} price='20' />
        <Bid type = {this.props.type} price="25" />
        <AuctionForm />
      </div>
    )
  }
}

module.exports = AuctionLedger
