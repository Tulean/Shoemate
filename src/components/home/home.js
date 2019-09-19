import React, { Component } from 'react';
import Carousel from './carousel';
import { Container, Row, Col } from 'react-bootstrap';
import '../../css/home.css';
import MultiCarousel from './multiCarousel';
import Countdown from './clockCounter';

class home extends Component {
  constructor(props) {
    super(props);
    this.state = { deadline: 'November, 18, 2019' };
  }
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
                className="homeImages counterImage"
                alt="home-grid-3"
              />
              <h1 className="summer_sale_title">SUMMER FLASH SALE</h1>
              <Countdown deadline={this.state.deadline} />
            </Col>
          </Row>
          <Row className="homeRows" style={{ marginBottom: '2em' }}>
            <Col className="homeCols">
              <h1
                className="arrivals_title"
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
