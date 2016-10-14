import React from 'react';
import {render} from 'react-dom';
import  { Grid, Row, Col } from 'react-bootstrap'
import BidBox from './components/BidBox'
import AskBox from './components/AskBox'
import NavBar from './components/NavBar'

class App extends React.Component {
  render () {
    return (
      <div>
        <NavBar />
        <Grid>
          <Row>
            <Col xs={12} md={6}>
              <BidBox />
            </Col>
            <Col xs={12} md={6}>
              <AskBox />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
