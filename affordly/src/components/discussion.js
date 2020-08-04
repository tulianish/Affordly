// Created by Anish Tuli (B00843522, anish.tuli@dal.ca)
//Parent component that houses CommentGroup and AddCommentBox

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../stylesheets/discussion.css";
import CommentGroup from "./CommentGroup";
import AddCommentBox from "./AddCommentBox";

class App extends Component {
  constructor(props) {
    super(props);

    this.postComment = this.postComment.bind(this);

    this.state = {
      comments: [],
    };
  }

  postComment(comment) {	//Function that adds the comment to the state
    this.setState({
      comments: [comment, ...this.state.comments]
    });
  }

  onSubmit(e) {
    e.preventDefault();

    this.setState({ error: "" });

    let {comment} = this.state.comments;
    fetch("https://the-affordly.herokuapp.com/api/comment/postComment", {	//Posts the comment
      method: "post",
      body: comment
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          this.setState({ error: res.error });
        } 
        else {
          comment.time = res.time;
          this.props.postComment(comment);
          this.setState({
            comment: { ...comment, message: "" }
          });
        }
      })
      .catch(err => {
        this.setState({
          error: "Form submission encountered an error",
        });
      });
  }

  componentDidMount() {
    fetch("https://the-affordly.herokuapp.com/api/comment/")	//Fetches comments
    .then(res => res.json())
    .then(res => {
      this.setState({
          comments: res,
        });
    })
    
}

  render() {
    return (
      <div className="main-box container bg-light shadow">
        <div className="row">
          <div className="col-4  pt-3 border-right">
            <h6>Please enter message for new discussion</h6>
             <AddCommentBox postComment={this.postComment} />
          </div>
          <div className="col-8  pt-3 bg-white">
            <CommentGroup
              comments={this.state.comments}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;