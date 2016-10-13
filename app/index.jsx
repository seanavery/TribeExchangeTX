import React from 'react';
import {render} from 'react-dom';
import BidBox from './components/BidBox'
import AskBox from './components/AskBox'
import NavBar from './components/NavBar'

class App extends React.Component {
  render () {
    return (
      <div>
        <NavBar />
        <BidBox />
        <AskBox />
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
