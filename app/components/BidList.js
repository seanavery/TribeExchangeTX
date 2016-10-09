import fs from 'fs'
import React from 'react'
import {render} from 'react-dom'
var json = require("json!../data/BidData.json");
// import json from 'json-loader'
// import BidData from  'json!../data/BidData.json'


// class BidList extends React.Component {
//   componentDidMount() {
//     var contents = fs.readFileSync(BigData);
//
//   }
//   render() {
//     return (
//       <p> Bid 1: $20 </p>
//     )
//   }
// }

class BidList extends React.Component {
  render () {
    return (
      <div>
        <p>this is Bid List</p>
      </div>
    )
  }
}

module.exports = BidList
