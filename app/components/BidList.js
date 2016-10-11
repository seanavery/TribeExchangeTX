import fs from 'fs'
import React from 'react'
import {render} from 'react-dom'
import BidData from '!json!../data/BidData.json'
import Bid from './Bid'

  // import json from 'json-loader'
// import BidData from  'json!../data/BidData.json'

class BidList extends React.Component {
  render() {
    var bidNodes = BidData.map((bid, i) => {
      return (
        <Bid key={i} price={bid.price} amount={bid.amount}>
          {bid.price}
          {bid.amount}
        </Bid>
      )
    })
    return (
      <div>
        {bidNodes}
      </div>
    )
  }
}

// class BidList extends React.Component {
//   render () {
//     return (
//       <div>
//         <p>this is Bid List</p>
//       </div>
//     )
//   }
// }

module.exports = BidList
