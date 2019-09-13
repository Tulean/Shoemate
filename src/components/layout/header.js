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
      <div className="header">
        <Container>
          <Row>
            <Col xs={12} sm={3} md={3} className="header-info">
              <h6>Need Help?</h6>
              <FontAwesomeIcon icon={faPhone} />
              <div>Call 415-999-9999</div>
            </Col>
            <Col xs={12} sm={6} md={6} className="header-title">
              <h1 className="title">Bootmate</h1>
            </Col>
            <Col xs={12} sm={3} md={3} className="header-cart">
              <Button className="header-cart-button" variant="outline-dark">
                <FontAwesomeIcon
                  className="header-user"
                  icon={faUser}
                  style={{ color: '#ff4e00' }}
                />
              </Button>
              <Button className="header-cart-button" variant="outline-dark">
                <FontAwesomeIcon icon={faCartArrowDown} />
              </Button>
            </Col>
          </Row>
          <hr width="90%" />
          <Row className="navbar-wrap">
            <Col md={12}>
              <NavBar />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default header;
