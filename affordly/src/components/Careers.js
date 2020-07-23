// Created by Anish Tuli, B00843522 (anish.tuli@dal.ca)

/*============================================================

Built keeping in reference Bootstrap Tables & Form :

https://getbootstrap.com/docs/4.0/content/tables/
https://getbootstrap.com/docs/4.0/components/forms/

==============================================================*/

import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../stylesheets/Careers.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "font-awesome/css/font-awesome.min.css";

class Careers extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="jumbotron box_layout customSize">
            <h1> Careers </h1>
            <p>
              We at Afford.ly are on a mission to solve the global waste problem by bringing a platform
              that promotes reusing and reselling among our local community. We are dedicated to provide
              a seamless experience for our users on a budget or tight timelines to find new home for their
              used items. If you are interested in building an extraordinary product with an dedicated team.
            </p>
            <br />
            <p>
              We look forward to have you onboard and value the time and effort you take to apply.
            </p>
            <br/>
            <p className="ceo_name"> -Afford.ly Team</p>
          </div>
        </div>

        <div className="container">
          <div className="jumbotron box_layout customSize">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Job Title</th>
                  <th scope="col">Job Requirments</th>
                  <th scope="col">Office</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Software Developer</td>
                  <td>Knowledge of React, JavaScript, Python, REST</td>
                  <td>Halifax, NS</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>UX Designer</td>
                  <td>Prototyping tools and experience in design</td>
                  <td>Syndey, NS</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>QA Testing</td>
                  <td>Test plan and edge case solving abilities</td>
                  <td>Syndey, NS</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="customSize">
            <Form>
              <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Label>Application for Position #</Form.Label>
                <Form.Control as="select" custom>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </Form.Control>
              </Form.Group>
              <Form.Row>
                <Col>
                  <Form.Control placeholder="First name" required />
                </Col>
                <Col>
                  <Form.Control placeholder="Last name" required />
                </Col>
              </Form.Row>

              <div class="file-field">
                <div class="btn btn-outline-white waves-effect btn-sm SubmitBox">
                  <span>Resume : </span>
                  <input type="file" accept="application/pdf" required />
                </div>
              </div>
              <div class="SubmitBox">
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="I agree to the terms and conditions"
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </div>
          {/* </div> */}
        </div>
      </>
    );
  }
}

export default Careers;
