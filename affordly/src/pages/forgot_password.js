/*
 * File developed by Guneet Singh Dhillon (guneet@dal.ca, B00843346) using the Login.js template 
 * which was originally developed by Piyush (piyus@dal.ca, B00844563)
 * 
 * Feature:
 * This page is the front end of creating a password reset request and is a part of password recovery feature
 * 
 */

import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";
import Header from "../components/navbar";
import { Redirect } from "react-router-dom";
import "../stylesheets/login.css";
import { Col } from "react-bootstrap";


const emailCheck = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

class Forgot_password extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      // fields added by guneet
      password:"",
      login:false,
      token:null,
      store:null,
      redirect:null,
      error: {
        email: "",
      },
    };
  }


// the code for the validation is referred from https://dev.to/oluwadareseyi/build-dynamic-forms-and-perform-validation-using-react-hooks-with-no-external-package-3i5

  validateForm = (errors) => {
    let valid = true;
    if (this.state.email === "") return false;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // Code of API call to generate a forgot password request goes here
    fetch("http://localhost:3000/api/forgot_password", {
      method:"post",
      body:JSON.stringify(this.state),
    headers:{
      'Content-Type':'application/json',
    }
    }).then(res => res.json())
    .then((result) => {
      if(result.success){
        alert("If your email is registered, you will receive a link to reset the password.")
        this.setState({ redirect: "/reset_link_sent" });
      }
      else {
        alert('Something went wrong, please try again.');
      }
    })

    if (this.validateForm(this.state.error)) {
      // alert("User Has Been Logged In Successfully...");
      this.form.reset();
    } else {
      alert("Invalid Details Entered...");
    }
  };
  
  handleOnChange = (element) => {
    element.preventDefault();
    const name = element.target.name;
    const value = element.target.value;
    // console.log("inside " + name + value);
    let error = this.state.error;
    switch (name) {
      case "email":
        if (document.getElementById("mail").value === "") {
          error.email = "";
          break;
        }
        error.email = emailCheck.test(value) ? "" : "Invalid Email Address";
        break;
      default:
        break;
    }
    this.setState({
      error,
      [name]: value,
    });
  };
  render() {
    const { error } = this.state;
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <div>
        <Header />
        <div className="container my_container">
          <div className="jumbotron box_layout">
            <h2 style={{ textAlign: "center" }}> Reset Password</h2>
            <p style={{ textAlign: "center" }}>
              {" "}
              Please enter your registered email to get the password reset link.
            </p>

            <div className="fields">
              <Form
                onSubmit={this.handleSubmit}
                ref={(form) => (this.form = form)}
              >
                {/* removed controlId="formGridEmail" from <Form.Group> */}
                <Form.Group as={Col} >
                  <Form.Label className="form_lab">
                    {" "}
                    E-mail Address <span className="mandatory">*</span>{" "}
                  </Form.Label>
                  <Form.Control
                    id="mail"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    required
                    onChange={this.handleOnChange}
                  />

                  {error.email.length > 0 && (
                    <span className=" spn">{error.email}</span>
                  )}
                </Form.Group>

                <div className="tncbutton">
                  <Button variant="primary" type="submit">
                    Submit Email
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Forgot_password;
