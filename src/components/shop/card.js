import React from 'react';
import { Card, Col } from 'react-bootstrap';
import '../../css/card.css';
const card = () => {
  return (
    <Col align="center">
      <Card className="card">
        <Card.Img variant="top" src="https://via.placeholder.com/379x569.png" />
        <Card.Body style={{ textAlign: 'center' }}>
          <Card.Title>Shoe name</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default card;
