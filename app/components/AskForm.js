import React from 'react'
import { render } from 'react-dom'
import { FormControl, FormGroup} from 'react-bootstrap'

class AskForm extends React.Component {
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
  handleSubmit() {
    console.log(this.state)
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

module.exports = AskForm
