import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand to="#home">Todods List</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="#home">Home</Nav.Link>
            <Nav.Link to="/about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}
