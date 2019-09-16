import React, { Component } from 'react';
import Carousel from './carousel';
import { Container, Row, Col } from 'react-bootstrap';
import '../../css/home.css';
import MultiCarousel from './multiCarousel';

class home extends Component {
  render() {
    return (
      <div className="home">
        <Carousel />
        <Container className="content">
          <Row className="homeRows">
            <Col md={6} className="homeCols">
              <img
                src="/images/home_gif.gif"
                className="homeImages"
                alt="home-grid-1"
              />
            </Col>
            <Col md={6} className="homeCols">
              <img
                src="/images/home_img_colors.jpg"
                className="homeImages"
                alt="home-grid-2"
              />
            </Col>
          </Row>
          <Row className="homeRows">
            <Col className="homeCols">
              <img
                src="/images/home_img_countdown.jpg"
                className="homeImages"
                alt="home-grid-3"
              />
            </Col>
          </Row>
          <Row className="homeRows" style={{ marginBottom: '2em' }}>
            <Col className="homeCols">
              <h1
                style={{
                  textAlign: 'center',
                  marginBottom: '30px',
                  fontSize: '50px'
                }}
              >
                NEW ARRIVALS
              </h1>

              <MultiCarousel />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default home;
