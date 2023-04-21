import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="lightgreen"  expand="lg" id="MyNavbar" >
      <Navbar.Brand href="#home">Savr </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="home">Home</Nav.Link>
          <Nav.Link href="login">Login</Nav.Link>
          <Nav.Link href="signup">Signup</Nav.Link>
          <Nav.Link href="dashboard">Dashboard</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
