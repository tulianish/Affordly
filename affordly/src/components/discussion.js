// Created by Anish Tuli (B00843522, anish.tuli@dal.ca)

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../stylesheets/discussion.css";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

class App extends Component {
  constructor(props) {
    super(props);

    this.addComment = this.addComment.bind(this);

    this.state = {
      comments: [],
      loading: false
    };
  }

  addComment(comment) {
    this.setState({
      loading: false,
      comments: [comment, ...this.state.comments]
    });
  }

  onSubmit(e) {
    // prevent default form submission
    e.preventDefault();

    if (!this.isFormValid()) {
      this.setState({ error: "All fields are required." });
      return;
    }

    // loading status and clear error
    this.setState({ error: "", loading: true });

    // persist the comments on server
    let {comment} = this.state.comments;
    fetch("http://localhost:3001/api/comment/postComment", {
      method: "post",
      body: comment
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

  isFormValid() {
    return this.state.comment.name !== "" && this.state.comment.message !== "";
  }

  componentDidMount() {
    // loading
    this.setState({ loading: true });

    // get all the comments
    fetch("http://localhost:3001/api/comment/")
    .then(res => res.json())
    .then(res => {
      this.setState({
          comments: res,
          loading: false
        });
    })
    
}

  render() {
    return (
      <div className="main-box container bg-light shadow">
        <div className="row">
          <div className="col-4  pt-3 border-right">
            <h6>Say something about React</h6>
             <CommentForm addComment={this.addComment} />
          </div>
          <div className="col-8  pt-3 bg-white">
            <CommentList
              loading={this.state.loading}
              comments={this.state.comments}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;