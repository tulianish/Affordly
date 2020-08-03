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

import React, { Component } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import Map from "../components/Map";
import "../stylesheets/Posting.css";
import "font-awesome/css/font-awesome.min.css";
import CurrencyConverter from '../components/CurrencyConverter'
import axios from 'axios';

class Posting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: [],
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
    let id = window.location.href.split("/", 5)[4];
    this.setState({postId:id});
    let currentPost = axios.get("https://the-affordly.herokuapp.com/api/post?id=" + id)
      .then(curPost => curPost.data)
      .then(data => this.setState({ post: data[0] }))
      .catch(error => window.location.replace("https://the-affordly.herokuapp.com"));
      console.log("hello")
    axios.get("http://localhost:3000/feedback/getfeedback?id="+id)
      .then(feedbackdata => feedbackdata.data)
      .then(feedback => {
        this.setState({ comments: feedback })
      })
    // .catch(error => window.location.replace("https://the-affordly.herokuapp.com"));

    let clickAPI = axios.get("http://35.153.255.72/clicked?post_id=" + id)

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
        alert("Please login again to access this feature");
      }
      this.setState({username : response.first_name});  //Sets the username from API response
    })
    }
  else {
    window.location.replace('/login');
  }
  }

addComment = (e) => {
  let receivedcomment = e.target[0].value;
  
  let comment = {
  postid : this.state.postId,
  comment : receivedcomment,
  user : this.state.username,
  }
  

  console.log(comment);

  this.state.comments.push(comment)
  
  fetch("http://localhost:3000/feedback/addfeedback" , {
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
              <Map />
            </section>
            <section className="col-md-6 desc">
              <section className="img-thumbnail img-fluid">
                {/* image of the product*/}
                <figure>
                  <img
                    clasName="img-responsive"
                    alt="item images"
                    style={{ width: "50%", height: "50%" }}
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
                    <CurrencyConverter />
                  </section>
                </section>
              </section>

              {/* visitor feedback section of the product*/}
              <section className="card card-body bg-light">
                <section className="row">
                  <section className="col-md-6">
                    <button
                      className="btn btn-outline-primary float-left"
                      style={{ marginLeft: "5px" }}
                    >
                      <i className="fa fa-share-alt">Share</i>{" "}
                    </button>
                    <a
                      href="/payment"
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
                  <textarea type="text" placeholder="PLease leave a comment for the product" rows="4" cols="60"/>
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
                         <strong> <p className="float-left">
                           <div>{value.user}</div> <div>{value.comment}</div>
                          </p> </strong>
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
