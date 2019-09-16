import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from './card';
class itemGrid extends Component {
  render() {
    return (
      <div>
        <Container>
            <Card srcImg="" cardText="blabla" cardPrice="12"/>
        </Container>
      </div>
    );
  }
}

export default itemGrid;
