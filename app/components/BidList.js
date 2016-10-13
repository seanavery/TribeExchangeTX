// import fs from 'fs'
import React from 'react'
import {render} from 'react-dom'
// import BidData from '!json!../data/BidData.json'
import Bid from './Bid'

  // import json from 'json-loader'
// import BidData from  'json!../data/BidData.json'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'

class BidList extends React.Component {
  render() {
    var bidNodes = this.props.data.map((bid) => {
      return (
        <Bid key={bid.id} price={bid.price} amount={bid.amount}>

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
