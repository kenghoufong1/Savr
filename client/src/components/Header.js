import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";

function Header(props) {
  const { authService } = props;
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(authService.loggedIn());
  }); // Runs everytime something changes visually

  return (
    <>
      <Navbar bg="lightgreen" expand="lg" id="MyNavbar">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {!loggedIn ? (
              <>
                <Nav.Link href="login">Login</Nav.Link>
                <Nav.Link href="signup">Signup</Nav.Link>
                <Nav.Link href="me">My Profile</Nav.Link>
              </>
            ) : (
              ""
            )}
            <Nav.Link href="shareddeal">Deals</Nav.Link>
            {loggedIn ? (
              <Nav.Link href="/" onClick={()=>{authService.logout()}}>
                Log out
              </Nav.Link>
            ) : (
              ""
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
