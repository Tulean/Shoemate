import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faCartArrowDown,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { Button, Container, Row, Col } from 'react-bootstrap';
import '../../css/header.css';
import NavBar from './navbar';
class header extends Component {
  render() {
    return (
      <Container className="header" fluid="true">
        <Row>
          <Col xs={12} sm={3} md={3} className="header-info">
            <h6>Need Help?</h6>
            <FontAwesomeIcon icon={faPhone} />
            <div>Call 415-999-9999</div>
          </Col>
          <Col xs={12} sm={6} md={6} className="header-title">
            <h1 className="title">Googles</h1>
          </Col>
          <Col xs={12} sm={3} md={3} className="header-cart">
            <FontAwesomeIcon
              className="header-user"
              icon={faUser}
              style={{ color: 'orange' }}
            />
            <Button className="header-cart-button" variant="outline-dark">
              My Cart
              <FontAwesomeIcon icon={faCartArrowDown} />
            </Button>
          </Col>
        </Row>
        <hr width="90%" />
        <NavBar />
      </Container>
    );
  }
}

export default header;
