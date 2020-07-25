// Modified by Guneet Singh Dhillon
//   I modified this file to add a Logout button in the Navbar. 
//   This Logout button is only visible when some is logged in the website.
//   Likewise, navbar shows Login and SignUp options when no one is logged in. 
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "../stylesheets/navbar.css";
import { Redirect } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect:null
    };
  }

  async logout() {
    localStorage.clear();
    await this.setState({ redirect: "/" });
    console.warn("State after setting the redirect", this.state);
    
    // redirect to home
  }

  render()
  {
    if(localStorage.getItem('login') === null){
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
    else {
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
                {/* <Nav.Link active href="/login">
                  Log In
                </Nav.Link>
                <Nav.Link active href="/signup">
                  Sign Up
                </Nav.Link> */}
                <Nav.Link active href="/sell">
                  Sell
                </Nav.Link>
                <Nav.Link active to="/" onClick={(e)=>{this.logout(e)}}>
                  Logout
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </>
      );  
    }
    
  }
}

export default Header;
