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
  render () {
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
      />
    )
  }
}

module.exports = AuctionForm
