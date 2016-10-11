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
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    console.log('change has occrued')
    this.setState({price: event.target.price})
  }
  handleSubmit(event) {
    // var price = this.state.price;
    // var amount = this.state.amount;
    console.log('Submitting: ' + this.state.price);
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          defaultValue = "$0"
          onChange={this.handleChange}
        />
        <input type="submit" value="Post" />
      </form>
    )
  }
}

module.exports = AuctionForm
