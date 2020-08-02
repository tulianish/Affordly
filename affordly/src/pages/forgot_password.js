/**
 * Developed by-
 *
 * Name : Guneet Singh Dhillon
 * Banner ID : B00843346
 * Email ID : guneet@dal.ca
 *
 * 
 * Feature Covered:
 * This is the frontend of Forgot password page
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

// this code for the validation is referred from https://dev.to/oluwadareseyi/build-dynamic-forms-and-perform-validation-using-react-hooks-with-no-external-package-3i5

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

  // This combination of componentDidMount and storeCollector function is for maintaining log in state after refresh
  componentDidMount(){
    this.storeCollector(); 
  }

  storeCollector() {
    // console.warn("hello from storecollector")
    let store = JSON.parse(localStorage.getItem('login'));
    this.setState({store:store});
    if(localStorage.getItem('login') !== null){
      this.setState({login:true})
    }
    // console.warn(store);
  }

  // this login function calls the backend login API (also coded by me) with email and password of user
  // and stores the JWT returned in the localStorage to establish a session.
  // Reference for this section of code : 2020. [Online]. Available: https://www.youtube.com/watch?v=I3PC8pV1SBM. [Accessed: 25- Jul- 2020].  
  async login() {
    // console.warn("Form formData", this.state);
    fetch("https://the-affordly.herokuapp.com/api/login", {
      method:"post",
      body:JSON.stringify(this.state),
    headers:{
      'Content-Type':'application/json',
    }
    }).then(res => res.json())
    .then((result) => {
      // console.warn("jatt da token", result.token);
      if(result.token){
        localStorage.setItem('login',JSON.stringify({
          login:true,
          token:result.token
        }))
        this.setState({login:true})
        this.setState({ redirect: "/" });

      }
      else {
        alert('Invalid Credentials');
      }
    })

    // redirect to home
    // history.push
    if(this.state.token){
      // console.log("redirect ")
      await this.setState({ redirect: "/" });
    }
    
  }

  validateForm = (errors) => {
    let valid = true;
    if (this.state.email === "") return false;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.login();
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
    // console.log("yahan pe hai ",this.state.redirect);
    if (this.state.redirect === "/") {
      // console.log("Insid it");
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
                <Form.Group as={Col} controlId="formGridEmail">
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
                  {/* gg int */}
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
