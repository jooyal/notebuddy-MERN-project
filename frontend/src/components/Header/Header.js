import React from 'react'
import {Navbar, Nav, Container, NavDropdown, Form} from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar bg="primary" expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand className='fw-bolder navbar-logo' href="/">Note Buddy</Navbar.Brand>
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
            <Nav.Link href="#action1">My Notes</Nav.Link>
            <NavDropdown title="Joseph Joyal" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action1">My Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action2">Log Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>         
                
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header