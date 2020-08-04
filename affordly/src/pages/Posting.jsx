/**
 * Ownership details
 *
 * Name : Sarabjeet Singh
 * Banner ID : B00847541
 * Contact : sarabjeet.singh@dal.ca
 *
 *
 **/
// Modified by Anish Tuli (B00843522, anish.tuli@dal.ca)
// Modified by Rahul Anand (B00841310, rahul.anand@dal.ca)
// Modified by Piyush Piyush (B00844563, piyush@dal.ca)

/*

Contribution : Tejasvi Vig
 
Name : Tejasvi Vig
Banner ID : B008337057
Email id : tj252001@dal.ca

Feature Name: Feedback

Feature Details: 

This file contains the front end code for the implementation of feedback feature provided to the user in the form of comments. 
User can comment for a particular post and that comment is displayed to the user on the posting page as soon as he submits the comment.
*/

import React, { Component } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import Map from "../components/Map";
import "../stylesheets/Posting.css";
import "font-awesome/css/font-awesome.min.css";
import CurrencyConverter from "../components/CurrencyConverter";
import axios from "axios";

class Posting extends Component {
  constructor(props) {
    super(props);

    this.state = {

      post: [],
        post_id:"",
      comments: [],
      username : "",
      postId: "",
      comment:{
        postid: "",
        comment: "",
        user: ""
      },
      istrue: ""
    }
    this.addComment = this.addComment.bind(this);
  }

  componentDidMount() {
  
  let id = window.location.href.split("/",5)[4];
  this.setState({post_id: id});
  this.setState({postId:id});
  let currentPost = axios.get("https://the-affordly.herokuapp.com/api/post?id="+id)
  axios.get("https://the-affordly.herokuapp.com/api/post?id="+id)
  .then(curPost => curPost.data)
  .then(data => this.setState({post:data[0]}))
  .catch(error => window.location.replace("https://the-affordly.herokuapp.com"));

   axios.get("https://the-affordly.herokuapp.com/feedback/getfeedback?id="+id)
   .then(feedbackdata => feedbackdata.data)
   .then(feedback => {
    this.setState({ comments: feedback })
      })
        
  axios.get("https://affordly-flask.herokuapp.com/clicked?post_id="+id)



    let string = localStorage.getItem('login'); //Check for login
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
    .then((response) => {
      if(response.msg==='Token is not valid!'){
        //alert("Please login again to access this feature");
      }
      this.setState({username : response.first_name});  //Sets the username from API response
    })
    }
  else {
    //window.location.replace('/login');
  }
  }
        
  
addComment = (e) => {
  if(this.state.username == ""){
    window.location.replace('/login');
  }

  let receivedcomment = e.target[0].value;
  
  let comment = {
  postid : this.state.postId,
  comment : receivedcomment,
  user : this.state.username,

  }

  this.state.comments.push(comment)
  
  fetch("https://the-affordly.herokuapp.com/feedback/addfeedback" , {
      method: "post",
      body:JSON.stringify(comment),
      headers:{
        Accept : "application/json",
        "Content-Type" : "application/json"
      }
}).then(res => res.json)
  .then(res => {
    this.setState({istrue: "hello"})
  })
  document.getElementById('comment').value = "";
}

render() {
    return (
      <>
        <Navbar />
        <section className="posting-container">
          <section className="row">
            <section className="col-md-6 map">
              <h4 style={{ color: "navy" }} variant="success">
                Article Location
              </h4>
              <Map address={this.state.post.address} />
            </section>
            <section className="col-md-6 desc">
              <section className="img-thumbnail img-fluid">
                {/* image of the product*/}
                <figure>
                  <img
                    className="img-responsive"
                    alt="item images"
                    style={{ width: "80%", height: "50%" }}
                    src={this.state.post.img}
                  />
                </figure>

                {/* caption and description of the product*/}
                <section className="caption">
                  <h4 className="float-right" style={{ color: "green" }}>
                    ${this.state.post.price}.00
                  </h4>
                  <h4 className="float-left" style={{ color: "navy" }}>
                    {this.state.post.title}
                  </h4>
                  <hr />
                  <section style={{ marginTop: "8%" }}>
                    <CurrencyConverter value={this.state.post.price}/>
                  </section>
                </section>
              </section>

              {/* visitor feedback section of the product*/}
              <section className="card card-body bg-light">
                <section className="row">
                  <section className="col-md-6">
                    
                    <a
                    href={"/share/"+this.state.post_id}>
                    <button
                      className="btn btn-outline-primary float-left"
                      style={{ marginLeft: "5px" }}
                    >
                      <i className="fa fa-share-alt">Share</i>{" "}
                    </button>
                    </a>
                    
                    
                    <a
                      href={"/payment/"+this.state.post_id}
                      className="btn btn-outline-primary float-left"
                      style={{ marginLeft: "5px" }}
                    >
                      <i className="fa fa-shopping-cart">Buy</i>{" "}
                    </a>

                  </section>
                  
                </section>
                <hr />
               <form onSubmit={(e) => {
                  e.preventDefault();
                 this.addComment(e)
               }}>
                 <section className="col-md-17">
                  <textarea type="text" placeholder="Please leave a comment for the product" rows="4" cols="40" id="comment" />
                  <button className="btn btn-outline-success btn-md float-right">
                      Add a comment
                  </button>
                  </section>
                </form>
                <hr />
                

                {this.state.comments.map((value) => {
                  return (
                    <>
                      <section className="row">
                      </section>
                      <section className="row">
                        <section className="col-md-12">
                        
                           <div className="overflow-auto media-body p-2 shadow-sm rounded bg-light border">
                           <h6 className="float-left mt-0 mb-1 text-muted">{value.user}</h6> 
                           <br/>
                           <h6 className="text-left text-break">{value.comment}</h6>
                           </div>
                          
                        </section>
                      </section>
                      <hr/>
                    </>
                  )
                })}
              </section>
            </section>
          </section>
          </section>
          <Footer />
        </>
    );
  }
}

export default Posting;
