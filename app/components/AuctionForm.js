import React from 'react'
import {render} from 'react-dom'
import fs from 'fs'
import jsonfile from 'jsonfile'

class AuctionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      price : 0,
      amount : 0
    }
    console.log(this.state)
    this.handlePriceChange = this.handlePriceChange.bind(this)
    this.handleAmountChange = this.handleAmountChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handlePriceChange(e) {
    this.setState({
      price: e.target.value,
    })
  }
  handleAmountChange(e) {
    this.setState({
      amount: e.target.value,
    })
  }
  handleSubmit(event) {
    event.preventDefault();
    var price = this.state.price.trim();
    var amount = this.state.amount.trim();
    if (!price || !amount) {
      return;
    }
    //update info in BidData.json
    var file = '../data/BidData.json';
    var obj = {price: price, amount: amount}
    jsonfile.writeFile(file, obj, {spaces: 2}, function(err) {
      console.error(err)
    })
    // clear state
    this.setState = {
      price : '0',
      amount : '0'
    }
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Enter Price"
          value={this.state.price}
          onChange={this.handlePriceChange}
        />
        <input
          type="text"
          placeholder="Enter Amount"
          value={this.state.amount}
          onChange={this.handleAmountChange}
        />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

module.exports = AuctionForm
