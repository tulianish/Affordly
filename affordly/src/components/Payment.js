/**
 * Modified by-
 *
 * Name : PIYUSH PIYUSH
 * Banner ID : B00844563
 * Email ID : piyush@dal.ca
 *
 * 
 * Modifications Made:
 * 
 * 1. Added (*) in red color to indicate that the fields are mandatory.
 * 2. Shifted all the fields label to the left to make it look more appealing and sync it with the frontend of other pages used in our project.
 * 3. Displayed all the frontend validation error messages in red color.
 * 4. Modified the eroor messages on click of "Pay Now" button to make it more comprehensive.
 * 5. Added months and years manually in the dropdown menu.
 * 6. Added logic to extract the details entered by users in the payment form.
 */


/*============================================================

Built keeping in reference Bootstrap Jumbotron, forms:

https://getbootstrap.com/docs/4.0/components/jumbotron/
https://getbootstrap.com/docs/4.0/components/forms/

Validations done with the help of :

https://learnetto.com/blog/react-form-validation

==============================================================*/

// importing necessary packages
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../stylesheets/Payment.css";
import "font-awesome/css/font-awesome.min.css";
import axios from "axios";



class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.checkValidations = this.checkValidations.bind(this);
    this.state = { //defining state to extract the user details and also for frontedn validation
      cardname: "",
      cardnum: "",
      month: "",
      year: "",
      cvv: "",
      email: "",
      fname: "",
      lname: "",
      post_id: "",
      product_price: "",
      product_city: "",
      product_zip: "",
      product_address: "",
      product_name: "",
      product_contactNumber: "",
      product_email: "",
      errors: {
        cardname: "",
        cardnum: "",
      },
    };
  }

  //logic for frontend validation
  checkValidations = (errors) => {
    let valid = true;

    if (this.state.cardname === null || this.state.cardnum === null)
      return false;
    Object.values(errors).forEach(
      (value) => value.length > 0 && (valid = false)
    );
    return valid;
  };

  //logic to extrcat user entered details while entering in real time
  reactToChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) { //switch case defined for card name - for frontend validation
      case "cardname":
        if (document.getElementById("cardnameField").value === "") {
          errors.cardname = "";
          break;
        }
        errors.cardname =
          value.length < 3 ? "Name must be atleast 3 characters long" : "";
        break;
      case "cardnum": //switch case defined for card number - for frontend validation
        if (document.getElementById("cardnumField").value === "") {
          errors.cardnum = "";
          break;
        }
        errors.cardnum =
          value.length !== 16 ? "Card number must be 16 characters long" : ""; //checking if card number is of 16 digits
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };


  componentDidMount() {
    let string = localStorage.getItem('login');
    if (string !== null) {
      const token = JSON.parse(string).token;
      fetch("https://the-affordly.herokuapp.com/api/current_user", { //
        method: "post",
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token
        }
      })
        .then(res => res.json())
        .then((result) => {
          this.setState({ email: result.email, fname: result.first_name, lname: result.last_name })
        })
    }
    else {
      window.location.replace("/login");
    }
    let id = window.location.href.split("/", 5)[4]
    console.log(id)
    this.setState({post_id: id})
    axios.get ("http://the-affordly.herokuapp.com/api/post?id=" + id)
    .then((product_details) => {
      console.log(product_details);
    this.setState({ product_price: product_details.data[0].price, 
      product_city: product_details.data[0].city,
      product_zip: product_details.data[0].zip,
      product_address: product_details.data[0].address,
      product_name: product_details.data[0].title,
      product_contactNumber: product_details.data[0].contactNumber,
      product_email: product_details.data[0].email})
        })
  }

  reactToSubmit = (event) => { //logic to store the details entered by user in form_data object
    event.preventDefault();
    console.log("STATE: "+ this.state)
    if (this.checkValidations(this.state.errors)) {
      const form_data = { //extracting each details one-by-one
        cardname: this.state.cardname,
        cardnum: this.state.cardnum,
        month: this.state.month,
        year: this.state.year,
        cvv: this.state.cvv,
        email: this.state.email,
        fname: this.state.fname,
        lname: this.state.lname,
        product_price: this.state.product_price,
        product_city: this.state.product_city,
        product_zip: this.state.product_zip,
        product_address: this.state.product_address,
        product_name: this.state.product_name,
        product_contactNumber: this.state.product_contactNumber,
        product_email: this.state.product_email,
      } 
      
      console.log("PRICE : " + this.state.product_price);
      axios //mentioning the alert message depending on if-else condition
        .post("http://the-affordly.herokuapp.com/payment", form_data)
        .then((res) => {
          if (res.data.code === 200) {
            console.log(this.state.post_id)

            alert("Payment Successful - Payment Confirmation Email Sent");
            axios.put("http://the-affordly.herokuapp.com/api/post?id=" + this.state.post_id)
            .then((output) => {
              console.log(output)
            })
            window.location.replace("/");
          } else if (res.data.code === 400) {
            alert("Payment Failed - Invalid Card Details Entered");
            this.form.reset(); //refreshing the form upon failed payment
          }
        });


    } else {
      alert("Please Enter Valid Card Details"); //error message if details entered by the user in not valid as per the frontend
      this.form.reset(); //refreshing the form upon failed payment
    }
  };


  render() { //rendering the components for frontend of payment page  
    const errors = this.state.errors;
    return (
      <>
        <div className="container">
          <div className="jumbotron jumbotron-fluid customBox text-center">
            <div className="container">
              <h2>Payment Gateway</h2>
              <p> A secure way to transfer your money </p>
            </div>
          </div>

          <form

            // adding frontend for fields

            className="loginBox"
            ref={(form) => (this.form = form)}
            onSubmit={this.reactToSubmit}
          >
            <div className="form-group">
              <label for="cardname">Card Holder's Name <span className="mandatory">*</span> </label>
              <input
                type="text"
                class="form-control"
                id="cardnameField"
                name="cardname"
                onChange={this.reactToChange}
                required
              />
              <small id="cardnamehelp" className="form-text text-muted">
                Type as on your card
              </small>
              {errors.cardname.length > 0 && (
                <span className="error">{errors.cardname}</span>
              )}
            </div>

            {/* adding card number for frontend */}

            <div className="form-group">
              <label for="cardnum">Card Number <span className="mandatory">*</span> </label>
              <input
                type="number"
                class="form-control"
                id="cardnumField"
                name="cardnum"
                onChange={this.reactToChange}
                required
              />
              <small id="cardnumhelp" className="form-text text-muted">
                16 Digit Number found on your card
              </small>
              {errors.cardnum.length > 0 && (
                <span className="error">{errors.cardnum}</span>
              )}
            </div>
            <div className="form-group">
              <div className="form-group">
                <label for="cardexp">Card Expiry <span className="mandatory">*</span> </label>
                <select class="input-block-level" name="month" id="month_block" onChange={this.reactToChange} required>

                  {/* adding months for dropdown menu */}

                  <option value="" >Select a Month</option>
                  <option value="Jan">January</option>
                  <option value="Feb">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="Sept">September</option>
                  <option value="Oct">October</option>
                  <option value="Nov">November</option>
                  <option value="Dec">December</option>

                  {/* adding years for dropdown menu */}

                </select>
                <select class="input-block-level" name="year" id="year_block" onChange={this.reactToChange} required>
                  <option value="" >Select an Year</option>
                  <option value="2030">2030</option>
                  <option value="2029">2029</option>
                  <option value="2028">2028</option>
                  <option value="2027">2027</option>
                  <option value="2026">2026</option>
                  <option value="2025">2025</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                </select>
                {/* <small id="cardexphelp" className="form-text text-muted">
                  Expiry date as on your card
                </small> */}
              </div>
            </div>

            {/* defining class for cvv  */}

            <div class="form-group">
              <label for="cvv">CVV <span className="mandatory">*</span> </label>
              <input
                type="password"
                className="form-control"
                id="passwordField"
                name="cvv"
                maxLength="3"
                onChange={this.reactToChange}
                required
              />
              <small id="cvvhelp" className="form-text text-muted">
                3 digit code at the back of your card
              </small>
            </div>
            <div class="form-group submitButton">
              <button type="submit" className="btn btn-primary">
                Pay Now
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Payment;