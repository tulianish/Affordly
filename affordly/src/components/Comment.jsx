// Created by Anish Tuli (B00843522, anish.tuli@dal.ca)

import React from "react";

export default function Comment(props) {
  const { name, message, dateCreated } = props.comment;
  var today = new Date();
  var commentDate = new Date(dateCreated);
  var d = today.getDate()-commentDate.getDate()
  var h = Math.floor( parseInt(today - commentDate)/ 1000 / 60 / 60);
  var m = today.getMinutes()-commentDate.getMinutes();
  var s = Math.floor( parseInt(today - commentDate)/1000);
  console.log(m);
  var time = "";
  if (isNaN(s))
  {
    time = "just now";
  }
  else if (s< 60)
  {
    time = "just now";
  }
  else if (h===0){
  time = m + (m > 1 ? " minutes ago" : " minute ago");
  }
  else if (d===0){
  time = h + (h > 1 ? " hours ago" : " hour ago");
  }
  else {
  time = d + (d > 1 ? " days ago" : " day ago");
  }
  return (
    <div className="media mb-3">
      <img
        className="mr-3 bg-light rounded"
        width="48"
        height="48"
        src={`https://api.adorable.io/avatars/48/${name.toLowerCase()}@adorable.io.png`}
        alt={name}
      />

      <div className="media-body p-2 shadow-sm rounded bg-light border">
        <small className="float-right text-muted">{time}</small>
        <h6 className="float-left mt-0 mb-1 text-muted">{name}</h6>
        {message}
      </div>
    </div>
  );
}