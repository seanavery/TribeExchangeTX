import React from 'react'
import {render} from 'react-dom'
import jsonfile from 'jsonfile'

class AuctionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      price : '0',
      amount : '0'
    }
    this.handlePriceChange = this.handlePriceChange.bind(this)
    this.handleAmountChange = this.handleAmountChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handlePriceChange(event) {
    console.log('change has occrued')
    this.setState({
      price: event.target.price,
    })
    console.log('state price is ' + this.state.price)
  }
  handleAmountChange(event) {
    console.log('change has occrued')
    this.setState({
      amount: event.target.amount,
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
