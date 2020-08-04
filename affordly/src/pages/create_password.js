/**
 * Front End Designed and Developed by-
 *
 * Name : PIYUSH PIYUSH
 * Banner ID : B00844563
 * Email ID : piyush@dal.ca
 *
 * 
 * Feature Covered:
 * This is the frontend for our Log In page.
 * 
 */

// Modified by Guneet Singh Dhillon (B00843346, guneet@dal.ca)
//    I wrote login, storeCollector and get_current user functions to connect the backend login API to React frontend.

import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";
import Header from "../components/navbar";
import { Redirect } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import "../stylesheets/login.css";
import { Col } from "react-bootstrap";
import { NotificationManager, NotificationContainer } from "react-notifications";
import jwt from "jsonwebtoken";

// this code for the validation is referred from https://dev.to/oluwadareseyi/build-dynamic-forms-and-perform-validation-using-react-hooks-with-no-external-package-3i5

const emailCheck = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
class Create_password extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      // fields added by guneet
      password:"",
      confim_password:"",
      token:"",
      error: {
        password: "",
      },
    };
  }

  // This combination of componentDidMount and storeCollector function is for maintaining log in state after refresh
  async componentDidMount(){
    let slugParam=this.props.match.params.token;
    console.log("slug param ", slugParam); 
    var creds = jwt_decode(slugParam);
    console.log("creds ", creds);
    try {
      const decoded = jwt.verify(slugParam, "aalokhaalo");
      let email = decoded.user.email;
      console.log("decoded ems ", email);
      await this.setState({email:email});
      
    } catch(e) {
        console.log(e.message);
        console.log("token has expired.");
    }
    
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
  
  // I wrote this dummy function to test the middleware, protected routes and current login session. 
  // Reference for this section of code : 2020. [Online]. Available: https://www.youtube.com/watch?v=I3PC8pV1SBM. [Accessed: 25- Jul- 2020].
  get_current_user(e) {
    let string = localStorage.getItem('login');
    if(string !== null){
      const token = JSON.parse(string).token;
      // console.warn("pushing ", token);
      fetch("https://the-affordly.herokuapp.com/api/current_user", {
        method:"post",
        body:JSON.stringify(this.state),
      headers:{
        'Content-Type':'application/json',
        'x-auth-token': token
      }
      }).then(res => res.json())
      .then((result) => {
        // console.warn("result", result);
        // teammates code goes here
      })
      }
    else {
      // alert('Please login to access this feature!')
      // teammates code
    }
  };

  validateForm = (errors) => {
    let valid = true;
    if (this.state.email === "") return false;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };
  handleSubmit = (event) => {
    event.preventDefault();
    
    // Code of API call to create password goes here
    fetch("http://localhost:3000/api/create_password", {
      method:"post",
      body:JSON.stringify(this.state),
    headers:{
      'Content-Type':'application/json',
    }
    }).then(res => res.json())
    .then((result) => {
      if(result.success){
        this.setState({ redirect: "/login" });
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
            <h2 style={{ textAlign: "center" }}> Create password</h2>
            <p style={{ textAlign: "center" }}>
              {" "}
              Please create a new password
            </p>

            <div className="fields">
              <Form
                onSubmit={this.handleSubmit}
                ref={(form) => (this.form = form)}
              >
                
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label className="form_lab">
                    New Password <span className="mandatory">*</span>{" "}
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    required
                    onChange={(event)=>{this.setState({password:event.target.value})}}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label className="form_lab">
                    Confirm Password <span className="mandatory">*</span>{" "}
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Re enter your password"
                    required
                    onChange={(event)=>{this.setState({confirm_password:event.target.value})}}
                  />
                </Form.Group>

                <div className="tncbutton">
                  <Button variant="primary" type="submit">
                    Submit
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

export default Create_password;