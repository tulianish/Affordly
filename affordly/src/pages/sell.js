// Developed by PIYUSH PIYUSH (B00844563, piyush@dal.ca)
// Modified by Anish Tuli (B00843522, anish.tuli@dal.ca)

import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";
import Header from "../components/navbar";
import "../stylesheets/sell.css";
import { Col } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import axios from 'axios';
// this code for the validation is referred from https://dev.to/oluwadareseyi/build-dynamic-forms-and-perform-validation-using-react-hooks-with-no-external-package-3i5

class Sell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      category:"",
      price: 0,
      contactNumber:"",
      address:"",
      zip:"",
      email:"",
      img:"",
      url:"",
      error: {
        title: "",
        description: "",
        price: "",
        contactNumber: "",
      },
    };
  }
  validateForm = (errors) => {
    let valid = true;
    if (
      this.state.title === "" ||
      this.state.description === "" ||
      this.state.price === "" ||
      this.state.contactNumber === ""
    )
      return false;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.validateForm(this.state.error)) {
      let string = localStorage.getItem('login');
        if(string !== null){
          const token = JSON.parse(string).token;
          fetch("https://the-affordly.herokuapp.com/api/current_user", { //
            method:"post",
            body:JSON.stringify(this.state),
          headers:{
            'Content-Type':'application/json',
            'x-auth-token': token
          }
          })
          .then(res => res.json())
          .then((result) => {
            this.setState({email : result.email});  //Sets the 
          })
          }
        else {
          alert('Please login to access this feature!')
        }
      const data = new FormData();
      data.append("file", this.state.img);
      data.append("upload_preset","affordably_preset");
      data.append("cloud_name","doqj6ktj2");
      let result = fetch("https://api.cloudinary.com/v1_1/doqj6ktj2/image/upload",{
        method : "post",
        body:data
      }).then((response) => response.json())
    .then((responseData) => {      
      let request = {
        title : this.state.title,
        description : this.state.description,
        category : document.getElementById("category").value,
        price : this.state.price,
        contactNumber : this.state.contactNumber,
        address : this.state.address,
        city : document.getElementById("city").value,
        zip : this.state.zip,
        email : this.state.email,   //Use session to fetch current logged in user
        img: responseData.secure_url
      }
      let postReply = axios.post("https://the-affordly.herokuapp.com/api/createPost", request);
      alert("Item posted successfully...");
      this.form.reset();
    })
    .catch(error => console.warn(error));

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
      case "title":
        if (document.getElementById("title").value === "") {
          error.title = "";
          break;
        }
        error.title =
          value.length < 2
            ? "Title should be at least 2 characters long..."
            : "";
        break;
      case "description":
        if (document.getElementById("description").value === "") {
          error.description = "";
          break;
        }
        error.description =
          value.length < 25
            ? "Description should be at least 25 characters long..."
            : "";
        break;
      case "price":
        if (document.getElementById("price").value === "") {
          error.price = "";
          break;
        }
        error.price = value < 1 ? "Price should be less than 0..." : "";
        break;
      case "contact_number":
        if (document.getElementById("contact_number").value === "") {
          error.contact_number = "";
          break;
        }
        error.contact_number =
          value.length < 10
            ? "Contact number should be at least 10 digits long..."
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
    const error = this.state.error;
    return (
      <div>
        <Header />

        <div className="container my_container">
          <div className="jumbotron box_layout">
            <h2 className="heading"> Sell an Item </h2>
            <p className="heading"> Please post an ad here and relax.</p>

            <div class="fields">
              <Form
                onSubmit={this.handleSubmit}
                ref={(form) => (this.form = form)}
              >
                <Form.Group controlId="formGridTitle">
                  <Form.Label className="form_lab">
                    {" "}
                    Title <span className="mandatory">*</span>{" "}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    id="title"
                    required
                    onChange={this.handleOnChange}
                  />
                  <Form.Text className="text-muted">
                    Mention the key features of your item (E.g. brand, model,
                    age, type).
                  </Form.Text>

                  {error.title.length > 0 && (
                    <span className=" spn">{error.title}</span>
                  )}
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label className="form_lab">
                    Description <span className="mandatory">*</span>{" "}
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    type="text"
                    name="description"
                    id="description"
                    rows="3"
                    onChange={this.handleOnChange}
                  />
                  <Form.Text className="text-muted">
                    Include condition, features, and reason for selling.
                  </Form.Text>
                  {error.description.length > 0 && (
                    <span className=" spn">{error.description}</span>
                  )}
                </Form.Group>

                <Form.Group controlId="formGridCategory">
                  <Form.Label className="form_lab">
                    Select A Category <span className="mandatory">*</span>{" "}
                  </Form.Label>
                  <Form.Control as="select" defaultValue="Choose..." id="category" required>
                    <option value="">Choose...</option>
                    <option value="properties">Properties</option>
                    <option value="cars">Cars</option>
                    <option value="furniture">Furniture</option>
                    <option value="mobiles">Mobiles</option>
                    <option value="bikes">Bikes</option>
                    <option value="fashion">Fashion</option>
                    <option value="pets">Pets</option>
                    <option value="services">Services</option>
                  </Form.Control>
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridPrice">
                    <Form.Label className="form_lab">
                      {" "}
                      Set A Price <span className="mandatory">*</span>{" "}
                    </Form.Label>
                    <InputGroup className="mb-3" type="number">
                      <InputGroup.Prepend>
                        <InputGroup.Text>$</InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        type="number"
                        onChange={this.handleOnChange}
                        name="price"
                        id="price"
                        placeholder="Enter amount in nearest dollar (CAD)"
                        required
                      />
                      <InputGroup.Append>
                        <InputGroup.Text>.00</InputGroup.Text>
                      </InputGroup.Append>
                    </InputGroup>
                    {error.price.length > 0 && (
                      <span className=" spn">{error.price}</span>
                    )}
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridContact">
                    <Form.Label className="form_lab">
                      {" "}
                      Contact Number <span className="mandatory">*</span>{" "}
                    </Form.Label>
                    <InputGroup className="mb-3" type="number">
                      <InputGroup.Prepend>
                        <InputGroup.Text>+1</InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        type="number"
                        name="contactNumber"
                        id="contactNumber"
                        placeholder="Enter your mobile phone number"
                        required
                        onChange={this.handleOnChange}
                      />
                    </InputGroup>
                    {error.contactNumber.length > 0 && (
                      <span className=" spn">{error.contactNumber}</span>
                    )}
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress">
                  <Form.Label className="form_lab">
                    Address <span className="mandatory">*</span>{" "}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    id="address"
                    name="address" 
                    placeholder="Please enter the address where item is available for pickup"
                    onChange={this.handleOnChange}
                    required
                  />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label className="form_lab">
                      City <span className="mandatory">*</span>{" "}
                    </Form.Label>
                    <Form.Control as="select" defaultValue="Choose..." id="city" required>
                      <option>Choose...</option>
                      <option value="Halifax">Halifax</option>
                      <option value="Dartmouth">Dartmouth</option>
                      <option value="Lunenberg">Lunenberg</option>
                      <option value="Wolfville">Wolfville</option>
                      <option value="Digby">Digby</option>
                      <option value="Sydney">Sydney</option>
                      <option value="Amherst">Amherst</option>
                      <option value="Yarmouth">Yarmouth</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label className="form_lab">
                      Zip <span className="mandatory">*</span>{" "}
                    </Form.Label>
                    <Form.Control name="zip" placeholder="Ex: B2K 3H8" onChange={this.handleOnChange} required />
                  </Form.Group>
                </Form.Row>

                <div className="mb-3">
                  <Form.File id="formcheck-api-regular">
                    <Form.File.Label className="form_lab" >
                      Upload Image
                    </Form.File.Label>
                    <Form.File.Input accept="image/*" name="photo" id="photo" onChange={(e)=> this.setState({ img:e.target.files[0]})}/>
                  </Form.File>
                </div>

                <div className="tncbutton">
                  <Button variant="primary" type="submit">
                    POST NOW
                  </Button>

                  <Form.Control
                    id="read-only"
                    type="text"
                    placeholder="The information provided is true to best of my knowledge!"
                    readOnly
                  />
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

export default Sell;