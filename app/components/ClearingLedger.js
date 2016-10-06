import React from 'react';
import {render} from 'react-dom';

class ClearingLedger extends React.Component {
  render () {
    return (
      <div>
        <h1>{this.props.type}</h1>
        <Submit type = {this.props.type} price='20' />
        <Submit type = {this.props.type} price="25" />
      </div>
    )
  }
}

module.exports = ClearingLedger
