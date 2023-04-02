import { Component } from "react";
import { Container, Row, Col, Button, DropdownButton, Dropdown, Form } from "react-bootstrap";
import Avatar from "../assets/avatar.png";

class ProfilePage extends Component {
  render() {
    return (
      <Container fluid className="container-fluid mega-container d-flex justify-content-center flex-column px-1 mb-5">
        <header className="container d-flex justify-content-center">
          <h1 className="text-light border-bottom w-50">Edit Profile</h1>
        </header>
        <Row id="first-row" className="justify-content-start border-bottom my-3">
          <Col md={3}>
            <div className="position-relative shadow-sm">
              <img className="w-100 ps-3 position-relative" src={Avatar} alt="avatar" />
              <a>
                <i id="bi-pen" className="bi bi-pen text-body rounded-circle px-1 bg-secondary position-absolute"></i>
              </a>
            </div>
          </Col>
          <Col md={3} className="d-flex flex-column w-50">
            <div className="mb-3">
              <Form.Control type="text" id="name" placeholder="Ajeje Brazorv" />
            </div>
            <p className="text-light">Language</p>
            <DropdownButton
              id="dropdown-basic-button"
              title="English"
              variant="black"
              className="border text-light bg-black"
            >
              <Dropdown.Item href="#">Italiano</Dropdown.Item>
              <Dropdown.Item href="#">Français</Dropdown.Item>
              <Dropdown.Item href="#">Español</Dropdown.Item>
            </DropdownButton>
            <hr className="text-light" />
            <p className="text-light">Maturity Settings:</p>
            <Button variant="dark" className="px-2 text-start w-75">
              ALL MATURITY RATINGS
            </Button>
            <p className="text-light">
              Show titles of <span>all maturity ratings</span> for this profile
            </p>
            <Button variant="dark" className="px-2 text-start w-75">
              EDIT
            </Button>
            <hr className="text-light" />
            <h3 className="text-light mt-3">Autoplay controls</h3>
            <div className="form-check text-light">
              <Form.Check
                type="checkbox"
                id="flexCheckDefault"
                label="Autoplay next episode in a series on all devices."
              />
            </div>
            <div className="form-check text-light">
              <Form.Check
                type="checkbox"
                id="flexCheckChecked"
                label="Autoplay previews while browsing on all devices."
              />
            </div>
          </Col>
        </Row>
        <Row id="second-row">
          <Col md={4}>
            <Button variant="success">save</Button>
          </Col>
          <Col md={4}>
            <Button variant="danger">cancel</Button>
          </Col>
          <Col md={4}>
            <Button variant="warning">delete profile</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ProfilePage;
