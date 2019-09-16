import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
class card extends Component {
  render() {
    return (
      <div>
        <Card>
          <Card.Img variant="top" src={this.props.srcImg} />
          <Card.Title>{this.props.cardText}</Card.Title>
          <Card.Text>{this.props.cardPrice}</Card.Text>
          <Button>Add to cart</Button>
        </Card>
      </div>
    );
  }
}

export default card;
