// Created by Anish Tuli, B00843522 (anish.tuli@dal.ca)
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

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.checkValidations = this.checkValidations.bind(this);
    this.state = {
      cardname: null,
      cardnum: null,
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
    console.log(valid);
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
    console.log(this.state.errors);
    event.preventDefault();
    if (this.checkValidations(this.state.errors)) {
      alert("Payment Sucessful");
      this.form.reset();
    } else {
      alert("Payment failed");
    }
  };

  render() {
    const errors = this.state.errors;
    return (
      <>
        <div class="container">
          <div class="jumbotron jumbotron-fluid customBox text-center">
            <div class="container">
              <h1 class="display-4">Payment Gateway</h1>
            </div>
          </div>

          <form
            className="loginBox"
            ref={(form) => (this.form = form)}
            onSubmit={this.reactToSubmit}
          >
            <div className="form-group">
              <label for="cardname">Card Holder's Name</label>
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
              <label for="cardnum">Card Number</label>
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
                <label for="cardexp">Card Expiry</label>
                <select class="input-block-level">
                  <option>January</option>
                  <option>...</option>
                  <option>December</option>
                </select>
                <select class="input-block-level">
                  <option>2019</option>
                  <option>...</option>
                  <option>2020</option>
                </select>
                <small id="cardexphelp" className="form-text text-muted">
                  Expiry date as on your card
                </small>
              </div>
            </div>
            <div class="form-group">
              <label for="cvv">CVV</label>
              <input
                type="password"
                className="form-control"
                id="passwordField"
                name="cvv"
                maxlength="3"
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
