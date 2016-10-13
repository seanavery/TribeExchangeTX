import React from 'react';
import {render} from 'react-dom';
import BidBox from './components/BidBox'
import AskBox from './components/AskBox'

class App extends React.Component {
  render () {
    return (
      <div>
        <BidBox />
        <AskBox />
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
