// Created by Anish Tuli (B00843522, anish.tuli@dal.ca)

import React, { Component } from "react";

export default class addCommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      username : "",
      comment: {
        name: "",
        message: ""
      }
    };

    this.reactToChange = this.reactToChange.bind(this);
    this.reactToSubmit = this.reactToSubmit.bind(this);
  }

  reactToChange = event => {
    const { value, name } = event.target;

    this.setState({error : ""});
    console.log(this.state.error);
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
          fetch("https://the-affordly.herokuapp.com/api/current_user", {
            method:"post",
            body:JSON.stringify(this.state),
          headers:{
            'Content-Type':'application/json',
            'x-auth-token': token
          }
          })
          .then(res => res.json())
          .then((result) => {
            if(result.msg==='Token is not valid!'){
              alert("Please login to access this feature");
              window.location.replace('/login');
            }
            this.setState({username : result.first_name});  //Sets the email from local storage token
          })
          }
        else {
          window.location.replace('/login');
        }
  }

  reactToSubmit(e) {
    e.preventDefault();

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
          this.setState({ error: res.error });
        } else {
          this.setState({ error : ""})
          this.props.postComment(comment);
          this.setState({
            comment: { ...comment, message: "" }
          });
        }
      })
      .catch(err => {
        this.setState({
          error: "Unable to post comments"
        });
      });
  }

  renderError() {
    return this.state.error ? (
      <div className="alert alert-danger">{this.state.error}</div>
    ) : null;
  }

  render() {
    return (
      <React.Fragment>
        <form method="post" onSubmit={this.reactToSubmit}>
          <div className="form-group">
            <input
              onChange={this.reactToChange}
              value={this.state.username}
              className="form-control"
              name="name"
              type="text"
            />
          </div>

          <div className="form-group">
            <textarea
              onChange={this.reactToChange}
              value={this.state.comment.message}
              className="form-control"
              placeholder=" Your Message"
              name="message"
              rows="5"
            />
          </div>

          {this.renderError()}

          <div className="form-group">
            <button className="btn btn-primary">
              Post Discussion &#10148;
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}