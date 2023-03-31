import { Component } from "react";
import { Container, Dropdown, Navbar } from "react-bootstrap";

class MyHeader extends Component {
  render() {
    return (
      <Navbar className="mb-3 px-4">
        <Container fluid className="d-flex justify-content-between align-items-center mx-0 px-0">
          <div className="d-flex justify-content-center mt-3">
            <h2 className="text-light fw-bold pe-5">TV Shows</h2>
            <Dropdown className="d-flex align-items-center">
              <Dropdown.Toggle variant="dark" className="bg-black text-light border px-3">
                Genres
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-dark">
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="d-flex justify-content-center">
            <span className="border px-1">
              <i className="bi bi-list text-white-50"></i>
            </span>
            <span className="border px-1">
              <i className="bi bi-three-dots text-white-50"></i>
            </span>
          </div>
        </Container>
      </Navbar>
    );
  }
}

export default MyHeader;
