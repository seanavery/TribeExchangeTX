import React from 'react'
import {render} from 'react-dom'
import AskLedger from './AskLedger'

class AskBox extends React.Component {
  render () {
    return (
      <div>
        <AskLedger />
      </div>
    )
  }
}

module.exports = AskBox
