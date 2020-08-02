// Created by Anish Tuli (B00843522, anish.tuli@dal.ca)

import React from "react";
import EachComment from "./EachComment";

export default function CommentGroup(props) {

  return (
    <div className="commentGroup">
      <h5 className="text-muted mb-4">
        <span className="badge badge-success">{props.comments.length}</span>{" "}
        Discussion{props.comments.length > 0 ? "s" : ""}
      </h5>

      {props.comments.length === 0 ? (
        <div className="alert text-center alert-info">
          Time to get a discussion going
        </div>
      ) : null}

      {props.comments.map((comment, index) => (
        <EachComment key={index} comment={comment} />
      ))}
    </div>
  );
}