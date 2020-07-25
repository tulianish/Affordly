// Modified by PIYUSH PIYUSH (B00844563, piyush@dal.ca)


/*============================================================

Built keeping in reference Bootstrap Jumbotron, forms:

https://getbootstrap.com/docs/4.0/components/jumbotron/
https://getbootstrap.com/docs/4.0/components/forms/

Validations done with the help of :

https://learnetto.com/blog/react-form-validation

==============================================================*/

import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../stylesheets/Payment.css";
import "font-awesome/css/font-awesome.min.css";
import axios from "axios";

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.checkValidations = this.checkValidations.bind(this);
    this.state = {
      cardname: "",
      cardnum: "",
      month: "",
      year: "",
      cvv: "",
      errors: {
        cardname: "",
        cardnum: "",
      },
    };
  }

  checkValidations = (errors) => {
    let valid = true;

    if (this.state.cardname === null || this.state.cardnum === null)
      return false;
    Object.values(errors).forEach(
      (value) => value.length > 0 && (valid = false)
    );
    // console.log(valid);
    return valid;
  };

  reactToChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "cardname":
        if (document.getElementById("cardnameField").value === "") {
          errors.cardname = "";
          break;
        }
        errors.cardname =
          value.length < 3 ? "Name must be atleast 3 characters long" : "";
        break;
      case "cardnum":
        if (document.getElementById("cardnumField").value === "") {
          errors.cardnum = "";
          break;
        }
        errors.cardnum =
          value.length !== 16 ? "Card number must be 16 characters long" : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  reactToSubmit = (event) => {
    // console.log(this.state.errors);
    event.preventDefault();
    if (this.checkValidations(this.state.errors)) {
      const form_data = {
        cardname: this.state.cardname,
        cardnum: this.state.cardnum,
        month: this.state.month,
        year: this.state.year,
        cvv: this.state.cvv
      }
      axios
        .post("http://localhost:3000/payment/", form_data)
        .then((res) => {
          if (res.data.code === 200) {
            alert("Payment Successful - Payment Confirmation Email Sent");
          } else if (res.data.code === 400) {
            alert("Payment Failed - Invalid Card Details Entered");
          }
        });
      this.form.reset();

    } else {
      alert("Payment failed");
    }
  };

  render() {
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

                  <option value="" >Select a Month</option>
                  <option value="jan">January</option>
                  <option value="feb">February</option>
                  <option value="march">March</option>
                  <option value="april">April</option>
                  <option value="may">May</option>
                  <option value="june">June</option>
                  <option value="july">July</option>
                  <option value="august">August</option>
                  <option value="sept">September</option>
                  <option value="oct">October</option>
                  <option value="nov">November</option>
                  <option value="dec">December</option>

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