import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
const card = () => {
  return (
    <Col>
      <Card style={{ width: '18rem', margin: '1rem' }}>
        <Card.Img variant="top" src="https://via.placeholder.com/379x569.png" />
        <Card.Body style={{ textAlign: 'center' }}>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default card;
