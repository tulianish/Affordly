/*
 * File developed by Guneet Singh Dhillon (guneet@dal.ca, B00843346) using the Login.js template 
 * which was originally developed by Piyush (piyus@dal.ca, B00844563)
 * 
 * Feature:
 * This page is the front end of successful reset link request and is a part of password recovery feature
 * 
 */

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";
import Header from "../components/navbar";
import "../stylesheets/login.css";


class Forgot_password extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      redirect:null,
      error: {
        email: "",
      },
    };
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container my_container">
          <div className="jumbotron box_layout">
            <h2 style={{ textAlign: "center" }}> Email sent successfully</h2>
            <p style={{ textAlign: "center" }}>
              {" "}
              If the provided email is registered, you will receive a password reset link shortly. Please follow the instructions in the email to generate a new password. Thank you.
            </p>
            <div></div>
            <br></br><br></br>
            <div></div>
          </div>
        </div>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br>
        <Footer />
      </div>
    );
  }
}

export default Forgot_password;
