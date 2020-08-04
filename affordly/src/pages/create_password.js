/*
 * File developed by Guneet Singh Dhillon (guneet@dal.ca, B00843346) using the Login.js template 
 * which was originally developed by Piyush (piyus@dal.ca, B00844563)
 * 
 * Feature:
 * This page is the front end of creating a new password and is a part of password recovery feature
 * 
 */

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
import jwt from "jsonwebtoken";


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

// This code for componentDidMount function was taken and modified from https://www.youtube.com/watch?v=X48nCyp_91s 
  async componentDidMount(){
    let slugParam=this.props.match.params.token;
    // console.log("slug param ", slugParam); 
    // var creds = jwt_decode(slugParam);
    // console.log("creds ", creds);
    try {
      const decoded = jwt.verify(slugParam, "aalokhaalo");
      let email = decoded.user.email;
      // console.log("decoded ems ", email);
      await this.setState({email:email});
      
    } catch(e) {
        console.log(e.message);
        // console.log("token has expired.");
    }
    
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
    // Code of API call to create password goes here
    fetch("https://the-affordly.herokuapp.com/api/create_password", {
      method:"post",
      body:JSON.stringify(this.state),
    headers:{
      'Content-Type':'application/json',
    }
    }).then(res => res.json())
    .then((result) => {
      if(result.success){
        this.setState({ redirect: "/login" });
        // console.log("after success", this.state.redirect);
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
    if (this.state.redirect) {
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
                
                {/* removed controlId="formGridEmail" from <Form.Group>s */}
                <Form.Group as={Col} >
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

                <Form.Group as={Col} >
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