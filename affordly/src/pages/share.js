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
      message: "",
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

    let id = window.location.href.split("/", 5)[4]

    let post_link = "https://the-affordly.herokuapp.com/posting/" + id
    console.log(post_link)
    event.preventDefault();
    if (this.validateForm(this.state.error)) {
      const form_data = { //extracting each details one-by-one
        email: this.state.email,
        message: this.state.message
      }
      console.log(form_data.email)
      console.log(form_data.message)
      // alert('Congrats! Posting has been shared successfully...');
      axios //mentioning the alert message depending on if-else condition
        .post("https://the-affordly.herokuapp.com/share?id=" + window.location.href.split("/", 5)[4], form_data)
        .then((res) => {
          if (res.data.code === 200) {
            console.log(this.state.post_id)

            alert("Shared Successful");
            window.location.replace(post_link);

          } else if (res.data.code === 400) {
            alert("Share Failed - Invalid Details Entered");
            this.form.reset(); //refreshing the form upon failed payment
          }

          else {
            alert("Please Enter Valid Details"); //error message if details entered by the user in not valid as per the frontend
            this.form.reset(); //refreshing the form upon failed payment
          }
        });

    }

    else {
      alert('Invalid Details Entered...')
    }
  }

//adding on chnage function
  handleOnChange = (element) => {
    element.preventDefault();
    const name = element.target.name;
    const value = element.target.value;
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

//frontend for share page
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

                <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                  <Form.Label className="form_lab">Custom Message</Form.Label>
                  <Form.Control
                    id="bio"
                    name="message"
                    as="textarea"
                    type="text"
                    rows="3"
                    placeholder="Add a custom message"
                    onChange={this.handleOnChange}
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