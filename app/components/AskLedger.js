import React from 'react'
import { render } from 'react-dom'
import { Table } from 'react-bootstrap'

class AskLedger extends React.Component {
  render () {
    var data = [
      {id: 1, price: 10, amount: 5},
      {id: 2, price: 12, amount: 5}
    ];
    return (
      <Table striped bordered condensed hover>
         <thead>
           <tr>
             <th>#</th>
             <th>Price</th>
             <th>Amount</th>
           </tr>
         </thead>
         <tbody>
           <tr>
             <td>1</td>
             <td>13</td>
             <td>2</td>
           </tr>
           <tr>
             <td>2</td>
             <td>11</td>
             <td>4</td>
           </tr>
           <tr>
             <td>3</td>
             <td>7</td>
             <td>5</td>
           </tr>
         </tbody>
       </Table>
    )
  }
}

module.exports = AskLedger
