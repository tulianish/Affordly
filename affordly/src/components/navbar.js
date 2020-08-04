/**
 * Developed by-
 *
 * Name : PIYUSH PIYUSH
 * Banner ID : B00844563
 * Email ID : piyush@dal.ca
 *
 * 
 * Feature Covered:
 * 
 * This is the navbar which is used in our project throughout on each page.
 */


// Modified by Guneet Singh Dhillon B00843346 guneet@dal.ca
//   I modified this file to add a Logout button in the Navbar. 
//   This Logout button is only visible when some is logged in the website.
//   Likewise, navbar shows Login and SignUp options when no one is logged in. 


import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "../stylesheets/navbar.css";


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect:null
    };
  }

  // This function will clear the JWT stored in local storage of browser and login session will end.
  async logout(element) {
    element.preventDefault();
    localStorage.clear();
    await this.setState({ redirect: "/" });
    window.location.replace("/");
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

                <Nav.Link active href="/" onClick={(element)=>{this.logout(element)}}>
                <Nav.Link active href="/discussion">
                  Discussion Forum
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
