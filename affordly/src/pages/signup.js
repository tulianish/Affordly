// Developed by PIYUSH PIYUSH (B00844563, piyush@dal.ca)


import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";
import Header from "../components/navbar";
import "../stylesheets/signup.css";
import { Col } from "react-bootstrap";
import { Redirect } from "react-router-dom";

// this code for the validation is referred from https://dev.to/oluwadareseyi/build-dynamic-forms-and-perform-validation-using-react-hooks-with-no-external-package-3i5

const emailCheck = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirm: "",
      first_name: "",
      last_name: "",
      address:"",
      bio:"",
      zip:"",
      country:"",
      state:"",
      gender:"",
      redirect: null,
      error: {
        email: "",
        password: "",
        confirm: "",
      },
    };
  }
  register(event) {
    event.preventDefault();
    console.warn("Form formData", this.state);
    fetch("http://the-affordly.herokuapp.com/api/user", {
      method:"post",
      body:JSON.stringify(this.state),
    headers:{
      'Content-Type':'application/json'
    }
    }).then(res => res.json())
    .then((result) => {
      console.warn("jatt da token", result);
      if(result.msg === "Registration successful") {
        alert("You have successfully sighned up!");
        this.setState({ redirect: "/login" });
      }
      else {
        alert("Something went wrong. Please try again.");
      }
    })
  }

  validateForm = (errors) => {
    let valid = true;
    if (
      this.state.email === "" ||
      this.state.password === "" ||
      this.state.confirm === ""
    )
      return false;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };

  handleSubmit = (event) => {
    this.register(event);
    event.preventDefault();
    if (this.validateForm(this.state.error)) {
      alert("User Has Been Registered Successfully...");
      this.form.reset();
    } else {
      alert("Invalid Details Entered...");
    }
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
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
        error.email = emailCheck.test(value) ? "" : "Invalid Email Address...";
        break;
      case "password":
        if (document.getElementById("password").value === "") {
          error.password = "";
          break;
        }
        error.password =
          value.length < 6
            ? "Pasword must be atleast 6 characters long..."
            : "";
        if (error.password === "") {
          this.setState({
            password: value,
          });
        }
        break;
      case "confirm":
        if (document.getElementById("confirm").value === "") {
          error.confirm = "";
          break;
        }
        error.confirm =
          value === this.state.password ? "" : "Password does not match...";
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
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    else {
      const { error } = this.state;
      return (
        <>
          <Header />
          <div className="container my_container">
            <div className="jumbotron box_layout">
              <h2 className="heading"> Registration Form </h2>
              <p className="heading">
                {" "}
                Please fill in the form below to register.
              </p>

              <div className="fields">
                <Form
                  onSubmit={this.handleSubmit}
                  ref={(form) => (this.form = form)}
                >
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridFirstName">
                      <Form.Label className="form_lab">
                        First Name <span className="mandatory">*</span>{" "}
                      </Form.Label>
                      <Form.Control
                        id="firstName"
                        name="first_name"
                        type="text"
                        placeholder="Enter your first name"
                        required
                        onChange={this.onChange}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                      <Form.Label className="form_lab">Last Name</Form.Label>
                      <Form.Control
                        id="lastName"
                        name="last_name"
                        type="text"
                        placeholder="Enter your last name"
                        onChange={this.onChange}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                  <Form.Group controlId="formGridEmail">
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

                  <Form.Group controlId="formGridGender">
                    <Form.Label className="form_lab">Gender </Form.Label>
                    <Form.Control 
                      name="gender"
                      as="select" 
                      defaultValue="Choose..."
                      onChange={this.onChange}
                    >
                      <option>Choose...</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Choose not to respond</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="formGridPassword">
                    <Form.Label className="form_lab">
                      Password <span className="mandatory">*</span>{" "}
                    </Form.Label>
                    <Form.Control
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Must be at least 6 characters"
                      required
                      onChange={this.handleOnChange}
                    />
                  </Form.Group>
                  {error.password.length > 0 && (
                    <span className=" spn">{error.password}</span>
                  )}

                  <Form.Group controlId="formGridConfirmPassword">
                    <Form.Label className="form_lab">
                      Confirm Password <span className="mandatory">*</span>{" "}
                    </Form.Label>
                    <Form.Control
                      id="confirm"
                      name="confirm"
                      type="password"
                      placeholder="Re-enter your password"
                      required
                      onChange={this.handleOnChange}
                    />
                  </Form.Group>
                  {error.confirm.length > 0 && (
                    <span className=" spn">{error.confirm}</span>
                  )}

                  <Form.Group controlId="formGridAddress1">
                    <Form.Label className="form_lab">
                      Address <span className="mandatory">*</span>{" "}
                    </Form.Label>
                    <Form.Control 
                      id="address"
                      name="address"
                      placeholder="Address" 
                      required
                      onChange={this.onChange}
                    />
                  </Form.Group>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label className="form_lab">
                        Country <span className="mandatory">*</span>{" "}
                      </Form.Label>
                      <Form.Control 
                        name="country"
                        as="select" 
                        defaultValue="Choose..." 
                        required
                        onChange={this.onChange}
                      >
                        <option>Choose...</option>
                        <option>Canada</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCountry">
                      <Form.Label className="form_lab">
                        State <span className="mandatory">*</span>{" "}
                      </Form.Label>
                      <Form.Control 
                        name="state"
                        as="select"
                        defaultValue="Choose..." 
                        required
                        onChange={this.onChange}
                      >
                        <option>Choose...</option>
                        <option>Alberta</option>
                        <option>British Columbia</option>
                        <option>Manitoba</option>
                        <option>New Brunskwick</option>
                        <option>Newfoundland and Labrador</option>
                        <option>Nova Scotia</option>
                        <option>Ontario</option>
                        <option>Prince Edward Island</option>
                        <option>Quebec</option>
                        <option>Saskatchewan</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Label className="form_lab">
                        Zip <span className="mandatory">*</span>{" "}
                      </Form.Label>
                      <Form.Control 
                        name="zip"
                        placeholder="E.g. B2K 3H8" 
                        required
                        onChange={this.onChange} 
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="form_lab">User Bio</Form.Label>
                    <Form.Control
                      id="bio"
                      name="bio"
                      as="textarea"
                      rows="3"
                      placeholder="We would love to know about you!"
                      onChange={this.onChange}
                    />
                  </Form.Group>

                  <div className="tncbutton">
                    <Form.Group controlId="termsCondition">
                      <Form.Check
                        type="checkbox"
                        label="Agree to the Terms and Condition"
                        required
                      />
                      <textarea id="bioBox" name="bioBox" rows="4" cols="50">
                        This Privacy and Legal Notice summarizes your privacy
                        rights regarding our collection, use, sharing, and
                        protection of your personal information. It applies to any
                        Affordly Application Service (App) where this Privacy and
                        Legal Notice is referenced. BY USING THIS APP YOU
                        EXPRESSLY ACKNOWLEDGE AND AGREE TO OUR COLLECTION, USE,
                        AND SHARING OF YOUR PERSONAL INFORMATION AS SUMMARIZED
                        BELOW AND AS FULLY DESCRIBED IN OUR USER PRIVACY POLICY,
                        AND YOU AGREE TO BE BOUND BY OUR TERMS OF USE. WE RESERVE
                        THE RIGHT TO UPDATE OUR USER PRIVACY POLICY AND TERMS OF
                        USE FROM TIME TO TIME IN ACCORDANCE WITH THAT PRIVACY
                        POLICY/TERMS OF USE.
                      </textarea>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                      SIGN UP
                    </Button>

                    <p id="message">
                      {" "}
                      Already Registered?{" "}
                      <a href="/login" id="login">
                        Click Here To LogIn
                      </a>{" "}
                    </p>
                  </div>
                </Form.Row>
                </Form>
              </div>
            </div>
          </div>
          <Footer />
        </>
      );
    }
  }
}

export default Signup;
