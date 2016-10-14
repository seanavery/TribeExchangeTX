import React from 'react'
import {render} from 'react-dom'
import AskLedger from './AskLedger'
import { PageHeader } from 'react-bootstrap'

class AskBox extends React.Component {
  render () {
    return (
      <div>
        <PageHeader><small>Ask Ledger</small></PageHeader>
        <AskLedger />
      </div>
    )
  }
}

module.exports = AskBox
