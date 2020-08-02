// Created by Anish Tuli (B00843522, anish.tuli@dal.ca)

import React, { Component } from "react";

export default class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: "",
      username : "",
      comment: {
        name: "",
        message: ""
      }
    };

    // bind context to methods
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  /**
   * Handle form input field changes & update the state
   */
  handleFieldChange = event => {
    const { value, name } = event.target;

    this.setState({
      ...this.state,
      comment: {
        ...this.state.comment,
        [name]: value
      }
    });
  };

  componentDidMount()
  {
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
            this.setState({username : result.first_name});  //Sets the email from local storage token
          })
          }
        else {
          alert("Please login to access this feature");
          window.location.replace('/login');
        }
  }

  /**
   * Form submit handler
   */
  onSubmit(e) {
    // prevent default form submission
    e.preventDefault();

    if (!this.isFormValid()) {
      this.setState({ error: "All fields are required." });
      return;
    }


    // persist the comments on server
    let comment = this.state.comment;
    comment.name = this.state.username;
    fetch("http://localhost:3001/api/comment/postComment", {
      method: "post",
      body: JSON.stringify(comment),
      headers:{
            'Content-Type':'application/json',
          }
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          this.setState({ loading: false, error: res.error });
        } else {
          // add time return from api and push comment to parent state
          comment.time = res.time;
          this.props.addComment(comment);

          // clear the message box
          this.setState({
            loading: false,
            comment: { ...comment, message: "" }
          });
        }
      })
      .catch(err => {
        this.setState({
          error: "Something went wrong while submitting form.",
          loading: false
        });
      });
  }

  /**
   * Simple validation
   */
  isFormValid() {
    return this.state.comment.comment !== "";
  }

  renderError() {
    return this.state.error ? (
      <div className="alert alert-danger">{this.state.error}</div>
    ) : null;
  }

  render() {
    return (
      <React.Fragment>
        <form method="post" onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              onChange={this.handleFieldChange}
              value={this.state.username}
              className="form-control"
              name="name"
              type="text"
            />
          </div>

          <div className="form-group">
            <textarea
              onChange={this.handleFieldChange}
              value={this.state.comment.message}
              className="form-control"
              placeholder=" Your Message"
              name="message"
              rows="5"
            />
          </div>

          {this.renderError()}

          <div className="form-group">
            <button disabled={this.state.loading} className="btn btn-primary">
              Post Discussion &#10148;
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}