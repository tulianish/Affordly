/**
 * Developed by-
 *
 * Name : PIYUSH PIYUSH
 * Banner ID : B00844563
 * Email ID : piyush@dal.ca
 *
 * 
 * Feature Covered:
 * This is the frontend for our Share functionality page.
 * 
 */

import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";
import Header from "../components/navbar";
import { Redirect } from "react-router-dom";
import "../stylesheets/share.css";
import { Col } from "react-bootstrap";
import axios from 'axios';


// this code for the validation is referred from https://dev.to/oluwadareseyi/build-dynamic-forms-and-perform-validation-using-react-hooks-with-no-external-package-3i5


const emailCheck = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
class Share extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      error: {
        email: "",
      }
    }
  }


  validateForm = (errors) => {
    let valid = true;
    if (this.state.email === "") return false;
    Object.values(errors).forEach(
      (val) => val.length > 0 && (valid = false));
    return valid;
  }


  handleSubmit = (event) => {
    event.preventDefault();
    if (this.validateForm(this.state.error)) {
      alert('Congrats! Posting has been shared successfully...');
      this.form.reset();
    } else {
      alert('Invalid Details Entered...')
    }
  }


  handleOnChange = (element) => {
    element.preventDefault();
    const name = element.target.name;
    const value = element.target.value;
    console.log("inside " + name + value);
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
      [name]: value
    });
  };


  render() {
    const { error } = this.state;
    return (
      <div>
        <Header />
        <div className="container my_container">
          <div className="jumbotron box_layout">


            <h2 style={{ textAlign: "center" }}> Share</h2>
            <p style={{ textAlign: "center" }}> We would love to help share this post </p>

            <div className="fields">
              <Form onSubmit={this.handleSubmit} ref={form => this.form = form}>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label className="form_lab" > E-mail Address <span className="mandatory">*</span> </Form.Label>
                  <Form.Control id="mail" name="email" type="email" placeholder="Enter your email address" required onChange={this.handleOnChange} />

                  {error.email.length > 0 && (
                    <span className=" spn" >{error.email}</span>
                  )}
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="form_lab">Custom Message</Form.Label>
                    <Form.Control
                      id="bio"
                      name="msg"
                      as="textarea"
                      rows="3"
                      placeholder="Add a custom message"
                      onChange={this.onChange}
                    />
                  </Form.Group>

                <div className="tncbutton">

                  <Button variant="primary" type="submit">
                    Share
                  </Button>

                </div>

              </Form>
            </div>
          </div>
        </div>
        <Footer />

      </div>

    )

  }
}

export default Share;