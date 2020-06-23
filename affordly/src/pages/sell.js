import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";
import Header from "../components/navbar";
import "../stylesheets/sell.css";
import { Row, Col, Grid } from "react-bootstrap";
import FormControl from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

// this code for the validation is referred from https://dev.to/oluwadareseyi/build-dynamic-forms-and-perform-validation-using-react-hooks-with-no-external-package-3i5

class Sell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      price: 0,
      contact_number: "",
      error: {
        title: "",
        description: "",
        price: "",
        contact_number: "",
      },
    };
  }
  validateForm = (errors) => {
    let valid = true;
    if (
      this.state.title === "" ||
      this.state.description === "" ||
      this.state.price === "" ||
      this.state.contact_number === ""
    )
      return false;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.validateForm(this.state.error)) {
      alert("Item Posted Successfully...");
      this.form.reset();
    } else {
      alert("Invalid Details Entered...");
    }
  };
  handleOnChange = (element) => {
    element.preventDefault();

    const name = element.target.name;
    const value = element.target.value;

    console.log("inside " + name + value);
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
            <p className="heading"> Please post an add here and relax.</p>

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
                  <Form.Control as="select" defaultValue="Choose..." required>
                    <option>Choose...</option>
                    <option>Properties</option>
                    <option>Cars</option>
                    <option>Furniture</option>
                    <option>Mobiles</option>
                    <option>Bikes</option>
                    <option>Fashion</option>
                    <option>Pets</option>
                    <option>Services</option>
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
                        name="contact_number"
                        id="contact_number"
                        placeholder="Enter your mobile phone number"
                        required
                        onChange={this.handleOnChange}
                      />
                    </InputGroup>
                    {error.contact_number.length > 0 && (
                      <span className=" spn">{error.contact_number}</span>
                    )}
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress">
                  <Form.Label className="form_lab">
                    Address<span className="mandatory">*</span>{" "}
                  </Form.Label>
                  <Form.Control
                    placeholder="Please enter the address where item is available for pickup"
                    required
                  />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label className="form_lab">
                      City <span className="mandatory">*</span>{" "}
                    </Form.Label>
                    <Form.Control as="select" defaultValue="Choose..." required>
                      <option>Choose...</option>
                      <option>Halifax</option>
                      <option>Dartmouth</option>
                      <option>Lunenberg</option>
                      <option>Wolfville</option>
                      <option>Digby</option>
                      <option>Sydney</option>
                      <option>Amherst</option>
                      <option>Yarmouth</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label className="form_lab">
                      Zip <span className="mandatory">*</span>{" "}
                    </Form.Label>
                    <Form.Control placeholder="Ex: B2K 3H8" required />
                  </Form.Group>
                </Form.Row>

                <div className="mb-3">
                  <Form.File id="formcheck-api-regular">
                    <Form.File.Label className="form_lab">
                      Upload Image
                    </Form.File.Label>
                    <Form.File.Input accept="image/*" />
                  </Form.File>
                </div>

                <div className="tncbutton">
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Is the Price Negotiable?"
                  />

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
