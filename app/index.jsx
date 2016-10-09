import React from 'react';
import {render} from 'react-dom';
import AuctionLedger from './components/AuctionLedger'
import ClearingLedger from './components/ClearingLedger'

class App extends React.Component {
  render () {
    return (
      <div>
        <AuctionLedger type="Bids" />
        <AuctionLedger type="Asks" />
        <ClearingLedger />
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
