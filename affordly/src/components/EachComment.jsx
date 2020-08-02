// Created by Anish Tuli (B00843522, anish.tuli@dal.ca)

import React from "react";

export default function EachComment(props) {
  const { name, message, dateCreated } = props.comment;
  var today = new Date();
  var commentDate = new Date(dateCreated);
  var diff = today-commentDate
  var d = today.getDate()-commentDate.getDate();
  var h = Math.floor(diff/(1000*60*60));
  var m = Math.floor(diff/(1000*60));
  var s = Math.floor(diff/(1000));
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
        src={`https://ui-avatars.com/api/?name=`+name}
        alt={name}
      />

      <div className=" overflow-auto media-body p-2 shadow-sm rounded bg-light border">
        <small className="float-right text-muted">{time}</small>
        <h6 className="float-left mt-0 mb-1 text-muted">{name}</h6>
        <br/>
        <h6 className="text-left text-break">{message}</h6>
      </div>
    </div>
  );
}