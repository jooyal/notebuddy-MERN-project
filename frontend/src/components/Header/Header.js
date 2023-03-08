import React from "react";
import { Navbar, Nav, Container, NavDropdown, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate()
  return (
    <Navbar className="header-container" bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand className="fw-bolder navbar-logo">
          <Link className="link-default-style-remove" to={"/"}>
            Note Buddy
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="m-auto">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Nav>

          <Nav>
            <Nav.Link as={Link} className="link-default-style-remove header-item" to={"/mynotes"}>
              {" "}
              My Notes
            </Nav.Link>
            <NavDropdown className="header-item" title="Joseph Joyal" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action1" className="header-item">
                My Profile
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() => {
                    localStorage.removeItem("userInfo");
                    navigate('/')
                  }
                }
                className="header-item"
              >
                Log Out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
