import React from 'react'
import {render} from 'react-dom'

class AuctionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value : 'Submit Price'}
    this.handleChange = this.handleChange.bind(this)

  }
  handleChange(event) {
    this.setState({value: event.target.value})
  }
  handleSubmit(event) {
    var price = this.state.price;
    var amount = this.state.amount;
    console.log('Submitting: ' + price + '  ' + amount)
  }
  render () {
    return (
      <form onSubmit={this.handleSubmi}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input type="submit" value="Post" />
      </form>
    )
  }
}

module.exports = AuctionForm
