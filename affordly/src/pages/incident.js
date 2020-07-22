/**
 * Ownership details
 *
 * Name : Sarabjeet Singh
 * Banner ID : B00847541
 * Contact : sarabjeet.singh@dal.ca
 *
 *
 * Feature Covered:
 *
 * This file is a front-end for "Raise a Support Ticket" feature where user can raise a support query
 * and the support team will look into it as per the ticket severity.
 *
 * The file is sending request to backend server to send an email to user and storing the ticket details in database.
 */

import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";
import Header from "../components/navbar";
import "../stylesheets/incident.css";
import { Col } from "react-bootstrap";
import InputGroup from "react-bootstrap/Form";
import axios from "axios";

// user is only allowed to add valid email which is email@email.com
// where "email" can be upper / lower case and numeric only and "com can only be alphabet".
var emailCheck = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

class RaiseASupportTicket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      severity: "",
      query: "",
      contact_number: "",
      mode: "",

      error: {
        name: "",
        email: "",
        contact_number: "",
        query: "",
        mode: "",
      },
    };
  }
  validateForm = (errors) => {
    let valid = true;
    if (this.state.email === "" || this.state.query === "") return false;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.validateForm(this.state.error)) {
      const emailInfo = {
        name: this.state.name,
        email: this.state.email,
        severity: this.state.severity,
        query: this.state.query,
        mode: this.state.mode,
        contact_number: this.state.contact_number,
      };
      // alert("Your ticket has been raised successfully");
      axios
        .post("http://localhost:3000/support/sendSupportTicket", emailInfo)
        .then((res) => {
          if (res.data.status === "success") {
            alert("An email has been sent");
          } else if (res.data.status === "fail") {
            alert("Failed to send the mail");
          }
        });
      axios
        .post("http://localhost:3000/support/createTicket", emailInfo)
        .then((res) => {
          if (res.data.success) {
            console.log("Entry has been added");
          } else {
            console.log(res.data.Message);
          }
        });
      this.form.reset();
      this.setState({
        name: "",
        email: "",
        severity: "",
        query: "",
        contact_number: "0",
        mode: "",
      });
    } else {
      alert("Invalid Details Entered...");
    }
  };

  handleOnChange = (element) => {
    element.preventDefault();
    const name = element.target.name;
    const value = element.target.value;
    let error = this.state.error;
    switch (name) {
      case "name":
        if (document.getElementsByClassName("name").value === "") {
          error.name = "";
          break;
        }
        error.name =
          value.length < 3
            ? "First Name must be at least 3 characters long..."
            : "";
        break;
      case "email":
        if (document.getElementsByClassName("mail").value === "") {
          error.email = "";
          break;
        }
        error.email = emailCheck.test(value) ? "" : "Invalid Email Address...";
        break;

      case "contact_number":
        if (document.getElementsByClassName("contact_number").value === "") {
          error.contact_number = "";
          break;
        }
        error.contact_number =
          value.length < 10
            ? "Contact number must be at least 10 digits long..."
            : "";
        break;

      case "query":
        if (document.getElementsByClassName("query").value === "") {
          error.query = "";
          break;
        }
        error.query =
          value.length < 15
            ? "Query must be at least 15 characters long..."
            : "";
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
    return (
      <>
        <Header />
        <section className="container my_container">
          <section className="jumbotron box_layout">
            <h2 className="heading"> Raise A Support Ticket </h2>
            <p className="heading"> Your voice is important to us.</p>

            <section className="fields">
              <Form
                onSubmit={this.handleSubmit}
                ref={(form) => (this.form = form)}
                method="POST"
              >
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label className="form_lab">
                      First Name <span className="mandatory">*</span>{" "}
                    </Form.Label>
                    <Form.Control
                      className="name"
                      name="name"
                      type="text"
                      pattern="[A-Za-z\\s]*"
                      placeholder="Enter your first name"
                      value={this.state.name}
                      onChange={this.handleOnChange}
                      required
                    />
                    {error.name.length > 0 && (
                      <span className=" spn">{error.name}</span>
                    )}
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label className="form_lab">Last Name</Form.Label>
                    <Form.Control
                      name="lastName"
                      type="text"
                      placeholder="Enter your last name"
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label className="form_lab">
                      {" "}
                      E-mail Address <span className="mandatory">*</span>{" "}
                    </Form.Label>
                    <Form.Control
                      className="mail"
                      name="email"
                      type="email"
                      placeholder=" Enter your email address, preferably registered one."
                      value={this.state.email}
                      required
                      onChange={this.handleOnChange}
                    />
                    {error.email.length > 0 && (
                      <span className=" spn">{error.email}</span>
                    )}
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridContact">
                    <Form.Label className="form_lab">Contact Number</Form.Label>
                    <Form.Control
                      type="number"
                      name="contact_number"
                      className="contact_number"
                      placeholder="Enter your mobile phone number"
                      value={this.state.contact_number}
                      onChange={this.handleOnChange}
                    />
                    {error.contact_number.length > 0 && (
                      <span className=" spn">{error.contact_number}</span>
                    )}
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label className="form_lab">
                      Preferred Mode of Contact{" "}
                      <span className="mandatory">*</span>{" "}
                    </Form.Label>
                    <Form.Control
                      className="mode"
                      name="mode"
                      as="select"
                      defaultValue="Choose..."
                      onChange={this.handleOnChange}
                      required
                    >
                      <option value="">Select...</option>
                      <option value="mail">Email</option>
                      <option value="phone">Phone</option>
                    </Form.Control>
                    {error.mode.length > 0 && (
                      <span className=" spn">{error.mode}</span>
                    )}
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridCountry">
                    <Form.Label className="form_lab">
                      Severity <span className="mandatory">*</span>{" "}
                    </Form.Label>
                    <Form.Control
                      name="severity"
                      as="select"
                      defaultValue="Select..."
                      onChange={this.handleOnChange}
                      required
                    >
                      <option value="">Choose...</option>
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label className="form_lab">
                    Query <span className="mandatory">*</span>{" "}
                  </Form.Label>
                  <Form.Control
                    className="query"
                    name="query"
                    as="textarea"
                    rows="3"
                    placeholder="We would love to hear your voice!"
                    onChange={this.handleOnChange}
                    required
                  />
                  {error.query.length > 0 && (
                    <span className=" spn">{error.query}</span>
                  )}
                </Form.Group>

                <section className="tncbutton">
                  <Button variant="primary" type="submit">
                    SUBMIT
                  </Button>
                </section>
              </Form>
            </section>
          </section>
        </section>
        <Footer />
      </>
    );
  }
}

export default RaiseASupportTicket;
