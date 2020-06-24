import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css"
import Foot from './foot';
import Header from './navbar';
import "./index.css"
import { Row, Col, Grid } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/Form'

// this code for the validation is referred from https://dev.to/oluwadareseyi/build-dynamic-forms-and-perform-validation-using-react-hooks-with-no-external-package-3i5

const emailCheck = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
class RaiseASupportTicket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            contact_number: "", 

            error: {
                email: "",
                contact_number: "", 
            }
        }
    }
  validateForm = (errors) => {
    let valid = true;
    if (this.state.email === "" || || this.state.contact_number === "") return false;
    Object.values(errors).forEach(
        (val) => val.length > 0 && (valid = false)
    );
    return valid;
} 
handleSubmit = (event) => {
  event.preventDefault();
  if (this.validateForm(this.state.error)) {
      alert('User Has Been Registered Successfully...');
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
    switch(name) {
      case "email":
        if(document.getElementById("mail").value === "") 
        {
          error.email = "";
          break;
        }
        error.email = emailCheck.test(value) ? "" : "Invalid Email Address...";
        break;

        case "contact_number":
          if(document.getElementById("contact_number").value === "") 
          {
            error.contact_number = "";
            break;
          }
          error.contact_number = value.length < 10 ? "Contact number should be at least 10 digits long..." : "";
          break;
          default:
          break;
    }
    this.setState ({
      error,
      [name]: value
    });
  };

  render() {
    const {error} = this.state;
    return (
      <>
        <Header />
        <div className="container my_container">
        <div className="jumbotron box_layout">
          

          <h2 className = "heading"> Raise A Support Ticker </h2>
          <p className = "heading"> Your voice is important to us.</p>

          <div className="fields">
            <Form onSubmit={this.handleSubmit} ref={form => this.form = form}>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridFirstName">
                  <Form.Label className= "form_lab" >First Name <span className="mandatory">*</span> </Form.Label>
                  <Form.Control name="firstName" type="text" placeholder="Enter your first name" required />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastName">
                  <Form.Label className= "form_lab" >Last Name</Form.Label>
                  <Form.Control name="lastName" type="text" placeholder="Enter your last name" />
                </Form.Group>
              </Form.Row>

              <Form.Row> 
                <Form.Group as= {Col} controlId="formGridEmail">
                  <Form.Label className= "form_lab" > E-mail Address <span className="mandatory">*</span> </Form.Label>
                  <Form.Control id="mail" name="email" type="email" placeholder="Enter your email address" required onChange={this.handleOnChange} />
                  {error.email.length > 0 && (
                   <span className=" spn" >{error.email}</span>
                  )}
                </Form.Group>

              <Form.Group as={Col} controlId="formGridContact">
                  <Form.Label className="form_lab" > Contact Number <span className="mandatory">*</span> </Form.Label>
                  <InputGroup className="mb-3" type = "number">

                    {/* { <InputGroup.Prepend> 
                      <InputGroup.Text>+1</InputGroup.Text>
                    </InputGroup.Prepend> } */}
                    <Form.Control type="number" name= "contact_number" id = "contact_number" placeholder="Enter your mobile phone number" required onChange={this.handleOnChange} />
                  </InputGroup>
                  {error.contact_number.length > 0 && (
                   <span className=" spn" >{error.contact_number}</span>
                  )}
                </Form.Group>
            </Form.Row> 


              <Form.Row>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label className= "form_lab" >Preferred Mode of Contact <span className="mandatory">*</span> </Form.Label>
                  <Form.Control as="select" defaultValue="Choose..." required>
                    <option>Choose...</option>
                    <option>Email</option>
                    <option>Phone</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCountry">
                  <Form.Label className= "form_lab" >Severity <span className="mandatory">*</span> </Form.Label>
                  <Form.Control as="select" defaultValue="Choose..." required>
                    <option>Choose...</option>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label className= "form_lab" >Query <span className="mandatory">*</span> </Form.Label>
                <Form.Control as="textarea" rows="3" placeholder="We would love to hear your voice!" />
              </Form.Group>

              <div className="tncbutton">

               

                <Button variant="primary" type="submit">
                  SUBMIT
  </Button>

                
              </div>

            </Form>
          </div>
        </div>
        </div>
        <Foot />

      </>

    )

  }
}

export default RaiseASupportTicket;