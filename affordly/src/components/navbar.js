// Built by PIYUSH PIYUSH (B00844563, piyush@dal.ca)

import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "../stylesheets/navbar.css";

class Header extends React.Component {
  render() {
    return (
      <>
        <Navbar expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/"> Afford.ly </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link active href="/">
                Home
              </Nav.Link>
              <Nav.Link active href="/login">
                Log In
              </Nav.Link>
              <Nav.Link active href="/signup">
                Sign Up
              </Nav.Link>
              <Nav.Link active href="/sell">
                Sell
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default Header;
