import React from 'react'
import {render} from 'react-dom'
import AskLedger from './AskLedger'
import AskForm from './AskForm'
import { PageHeader } from 'react-bootstrap'

class AskBox extends React.Component {
  render () {
    return (
      <div>
        <PageHeader><small>Ask Ledger</small></PageHeader>
        <AskLedger />
        <AskForm />
      </div>
    )
  }
}

module.exports = AskBox
