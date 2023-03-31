import { Component } from "react";
import { Row, Col } from "react-bootstrap";

class MyFooter extends Component {
  render() {
    return (
      <footer className="container-fluid bg-dark py-2">
        <div className="social d-flex justify-content-start text-white-50 fs-3 mb-3">
          <i className="pe-4 bi bi-facebook"></i>
          <i className="pe-4 bi bi-instagram"></i>
          <i className="pe-4 bi bi-twitter"></i>
          <i className="bi bi-youtube"></i>
        </div>
        <Row className="text-white-50">
          <Col xs={3}>
            <p>Audio and Subtitles</p>
            <p>Media Center</p>
            <p>Privacy</p>
            <p>Contact Us</p>
          </Col>
          <Col xs={3}>
            <p>Audio Description</p>
            <p>Investor Relations</p>
            <p>Legal Notices</p>
          </Col>
          <Col xs={3}>
            <p>Help Center</p>
            <p>Jobs</p>
            <p>Cookie Preferences</p>
          </Col>
          <Col xs={3}>
            <p>Gift Cards</p>
            <p>Terms of Use</p>
            <p>Corporate Information</p>
          </Col>
        </Row>
        <div className="text-white-50 mt-5">
          <p className="fs-6 mt-4">© 1997-2019 Netflix Inc.</p>
        </div>
      </footer>
    );
  }
}

export default MyFooter;
