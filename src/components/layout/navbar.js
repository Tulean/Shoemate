import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../../css/navbar.css';

class navbar extends Component {
  render() {
    return (
      <div className="navigation">
        <Navbar bg="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Shop</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default navbar;
