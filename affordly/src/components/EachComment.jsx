// Created by Anish Tuli (B00843522, anish.tuli@dal.ca)
// Component that makes individual comments on the screen
// Uses name based avatar api (https://ui-avatars.com/)

import React from "react";

export default function EachComment(props) {
  const { name, message, dateCreated } = props.comment;
  var today = new Date();
  var commentDate = new Date(dateCreated);
  var diff = today-commentDate  //Difference in date object
  var d = today.getDate()-commentDate.getDate();  //Difference in days
  var h = Math.floor(diff/(1000*60*60)); //Difference in hours
  var m = Math.floor(diff/(1000*60)); //Difference in minutes
  var s = Math.floor(diff/(1000));  //Difference in seconds
  var time = "";
  if (isNaN(s)) //Async handling
  {
    time = "just now";
  }
  else if (s< 60) //Less than a minute
  {
    time = "just now";
  }
  else if (h===0){  //Less than an hour
  time = m + (m > 1 ? " minutes ago" : " minute ago");
  }
  else if (d===0){  //Less than a day
  time = h + (h > 1 ? " hours ago" : " hour ago");
  }
  else {  //Greater than a day
  time = d + (d > 1 ? " days ago" : " day ago");
  }
  return (
    <div className="media mb-3">
      <img
        className="mr-3 bg-light rounded"
        width="48"
        height="48"
        src={`https://ui-avatars.com/api/?name=`+name}  //API to get name avatar
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