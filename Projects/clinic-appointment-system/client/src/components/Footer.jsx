import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

const Footer = () => {
  return (
    <footer className="bg-light text-light pt-5 pb-4 mt-auto">
      <Container>
        <Row className="gy-4">
          {/* Column 1: Brand & About */}
          <Col lg="4" md="6" className="text-center text-md-start">
            <h5 className="text-uppercase fw-bold mb-3 text-primary">DocEase</h5>
            <p className="text-muted small">
              Seamlessly schedule your next service in just a few clicks. Your time, your convenience, our priority.
            </p>
            <div className="mt-4">
              <Button color="primary" size="sm" className="px-4 fw-semibold rounded-pill">
                Book Appointment Now
              </Button>
            </div>
          </Col>

          {/* Column 2: Quick Navigation */}
          <Col lg="2" md="6" className="text-center text-md-start">
            <h6 className="text-uppercase fw-bold mb-3">Explore</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2"><a href="#services" className="text-muted text-decoration-none small hover-link">Our Services</a></li>
              <li className="mb-2"><a href="#team" className="text-muted text-decoration-none small hover-link">Meet the Experts</a></li>
              <li className="mb-2"><a href="#pricing" className="text-muted text-decoration-none small hover-link">Pricing & Plans</a></li>
              <li className="mb-2"><a href="#faq" className="text-muted text-decoration-none small hover-link">FAQs</a></li>
            </ul>
          </Col>

          {/* Column 3: Hours of Operation */}
          <Col lg="3" md="6" className="text-center text-md-start">
            <h6 className="text-uppercase fw-bold mb-3">Business Hours</h6>
            <ul className="list-unstyled mb-0 text-muted small">
              <li className="mb-2 d-flex justify-content-between">
                <span>Mon - Fri:</span> <span>9:00 AM - 7:00 PM</span>
              </li>
              <li className="mb-2 d-flex justify-content-between">
                <span>Saturday:</span> <span>10:00 AM - 4:00 PM</span>
              </li>
              <li className="mb-2 d-flex justify-content-between">
                <span>Sunday:</span> <span className="text-danger">Closed</span>
              </li>
            </ul>
          </Col>

          {/* Column 4: Contact & Help */}
          <Col lg="3" md="6" className="text-center text-md-start">
            <h6 className="text-uppercase fw-bold mb-3">Contact Support</h6>
            <address className="text-muted small mb-0">
              <p className="mb-2">📍 742 Evergreen Terrace, Springfield</p>
              <p className="mb-2">📞 +1 (555) 019-2834</p>
              <p className="mb-0">✉️ support@DocEase.com</p>
            </address>
          </Col>
        </Row>

        <hr className="my-4 border-secondary" />

        {/* Bottom Bar */}
        <Row className="align-items-center">
          <Col md="6" className="text-center text-md-start mb-2 mb-md-0">
            <p className="text-muted small mb-0">
              &copy; {new Date().getFullYear()} DocEase Inc. All rights reserved.
            </p>
          </Col>
          <Col md="6" className="text-center text-md-end">
            <a href="#privacy" className="text-muted text-decoration-none small me-3">Privacy Policy</a>
            <a href="#terms" className="text-muted text-decoration-none small">Terms of Service</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
