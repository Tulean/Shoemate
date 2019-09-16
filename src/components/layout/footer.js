import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Button
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../../css/footer.css';

class footer extends Component {
  render() {
    return (
      <div className="footer">
        <Container fluid={true}>
          <Row>
            <Col md={12} lg={3} className="footer-section">
              <h3 className="footer-title">About Us</h3>
              <p>
                Shoemate proudly provides quality products at an affordable
                price. We have been in business for over 120 years and still
                going strong. All of our boots are handmade and have a lifetime
                limited warranty.
              </p>
            </Col>
            <Col md={12} lg={3} className="footer-section">
              <h3 className="footer-title">Get in touch</h3>
              <h4 className="footer-h4">Location :</h4>
              <p>456 Vanness Street, San Fracisco, California</p>
              <h4 className="footer-h4">Contact :</h4>
              <p>Phone: +1 415-999-9999</p>
              <p>Email: info@bootmate.com</p>
            </Col>
            <Col md={12} lg={3} className="footer-section">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                <li>Home</li>
                <li>About</li>
                <li>Shop</li>
                <li>Contact Us</li>
              </ul>
            </Col>
            <Col md={12} lg={3} className="footer-section">
              <h3 className="footer-title">Sign up for your offers</h3>
              <p>
                By subscribing to our mailing list, you will always get the
                latest news and updates from us.
              </p>
              <Form className="footer-email">
                <FormControl
                  type="text"
                  placeholder="Enter your email..."
                  className="mr-sm-2 email-input"
                  style={{
                    border: 'none',
                    float: 'left',
                    backgroundColor: 'transparent'
                  }}
                />
                <Button variant="none" style={{ textAlign: 'center' }}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{
                      color: '#ff4e00'
                    }}
                  />
                </Button>
              </Form>
            </Col>
          </Row>
          <Row>
            <p className="copyright">
              2019 Shoemate. All Rights Reserved | Design inspired by W3layouts
              & Sephora | Built by Tuan
            </p>
          </Row>
        </Container>
      </div>
    );
  }
}

export default footer;
