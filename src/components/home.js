import React, { Component } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import '../css/home.css';
class home extends Component {
  render() {
    return (
      <div className="home">
        <Container>
          <Carousel fade={true} indicators={false} interval={null}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/slider1.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h1>First slide label</h1>
                <h6>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </h6>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/slider2.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/slider3.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>
    );
  }
}

export default home;
