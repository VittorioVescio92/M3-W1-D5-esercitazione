import { Component } from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { BiSearch, BiBell } from "react-icons/bi";
import Avatar from "../assets/avatar.png";
import NetflixLogo from "../assets/netflix_logo.png";

class MyNavbar extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="md" className="py-1 px-4 align-items-center">
        <Container fluid className="px-0">
          <Container fluid className="d-flex justify-content-start px-0">
            <Navbar.Brand className="p-0 m-0">
              <img className="netflix" src={NetflixLogo} alt="Netflix-logo" width="130px" />
            </Navbar.Brand>
            <Nav className="d-flex justify-content-center align-items-center mb-0 fw-bold">
              <Nav.Link className="mx-2 px-1 text-white-50" href="index.html">
                Home
              </Nav.Link>
              <Nav.Link id="navItem" className="mx-2 px-1 text-light" href="#">
                TV Shows
              </Nav.Link>
              <Nav.Link id="navItem" className="mx-2 px-1 text-white-50" href="#">
                Movies
              </Nav.Link>
              <Nav.Link id="navItem" className="mx-2 px-1 text-white-50" href="#">
                Recently Added
              </Nav.Link>
              <Nav.Link id="navItem" className="mx-2 px-1 text-white-50" href="#">
                My List
              </Nav.Link>
            </Nav>
          </Container>
          <Container id="navItem" className="d-flex align-items-center text-light mx-auto justify-content-end px-0">
            <span id="navItem">
              <BiSearch className="mx-3" />
            </span>
            <span id="navItem" className="mx-3">
              KIDS
            </span>
            <span id="navItem">
              <BiBell className="mx-3" />
            </span>
            <Dropdown align="end">
              <Dropdown.Toggle variant="transparent" id="dropdown-avatar">
                <img id="navItem" className="ms-3" src={Avatar} alt="avatar" width="40px" />
              </Dropdown.Toggle>
              <Dropdown.Menu align="end" variant="dark">
                <Dropdown.Item href="profile.html">Profile</Dropdown.Item>
                <Dropdown.Item href="#">Settings</Dropdown.Item>
                <Dropdown.Divider />
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Container>
      </Navbar>
    );
  }
}

export default MyNavbar;
