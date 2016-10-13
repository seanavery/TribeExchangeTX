import React from 'react';
import {render} from 'react-dom';
import Bid from './Bid'
import AuctionForm from './AuctionForm'
import BidList from './BidList'

class AuctionLedger extends React.Component {
  render () {
    var data = [
      {id: 1, price: 10, amount: 5},
      {id: 2, price: 12, amount: 5}
    ];
    return (
      <div>
        <h1>{this.props.type}</h1>
        <BidList data={data} />
        <AuctionForm />
      </div>
    )
  }
}

module.exports = AuctionLedger
