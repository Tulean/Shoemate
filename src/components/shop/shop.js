import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import Card from './card';
import '../../css/shop.css';
class shop extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row className="shop_grid">
            {/* //temporary solution, later pulling from database and map through */}
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Row>
        </Container>
      </div>
    );
  }
}

export default shop;
