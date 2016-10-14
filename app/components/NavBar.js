import React from 'react'
import {render} from 'react-dom'
// import {Navbar} from 'react-bootstrap'
import  { Navbar } from 'react-bootstrap'
// require("react-bootstrap/lib/NavbarHeader")


class NavBar extends React.Component {
  render () {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Tribe Exchange TX</a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    )
  }
}

module.exports = NavBar
