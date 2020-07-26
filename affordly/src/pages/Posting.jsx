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
      post : []
    }
  }

  componentDidMount(){
  let id = window.location.href.split("/",5)[4];
  let currentPost = axios.get("https://the-affordly.herokuapp.com/api/post?id="+id)
  .then(curPost => curPost.data)
  .then(data => this.setState({post:data[0]}))
  .catch(error => window.location.replace("https://the-affordly.herokuapp.com"));

  let clickAPI = axios.get("http://35.153.255.72/clicked?post_id="+id)
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
                    src= {this.state.post.img}
                  />
                </figure>

                {/* caption and description of the product*/}
                <section className="caption">
                  <h4 className="float-right" style={{ color: "green" }}>
                    {this.state.post.price}
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
                    <button className="btn btn-outline-primary float-left">
                      <i className="fa fa-thumbs-up">Like</i>{" "}
                    </button>
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
                  <section className="col-md-6">
                    <button className="btn btn-outline-success btn-md float-right">
                      {" "}
                      Add a comment{" "}
                    </button>
                  </section>
                </section>
                <hr />
                <section className="row">
                  <section className="col-md-6">
                    <strong className="float-left"> Sarabjeet </strong>
                  </section>
                  <section className="col-md-6">
                    <span class="float-right"> 10 days ago </span>
                  </section>
                </section>
                <section className="row">
                  <section className="col-md-12">
                    <p className="float-left">
                      I am interested in buying this item. It looks really
                      beautiful...
                    </p>
                  </section>

                </section>
              </section>
            </section>
          </section>
          {/* Pagination */}
          {/* <section className="row justify-content-center">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                {this.props.match.params.id === "0" ? (
                  <li className="page-item active">
                    <a className="page-link" href="/posting/0">
                      1
                    </a>
                  </li>
                ) : (
                  <li className="page-item">
                    <a className="page-link" href="/posting/0">
                      1
                    </a>
                  </li>
                )}

                {this.props.match.params.id === "1" ? (
                  <li className="page-item active">
                    <a className="page-link" href="/posting/1">
                      2
                    </a>
                  </li>
                ) : (
                  <li className="page-item">
                    <a className="page-link" href="/posting/1">
                      2
                    </a>
                  </li>
                )}

                {this.props.match.params.id === "2" ? (
                  <li className="page-item active">
                    <a className="page-link" href="/posting/2">
                      3
                    </a>
                  </li>
                ) : (
                  <li className="page-item">
                    <a className="page-link" href="/posting/2">
                      3
                    </a>
                  </li>
                )}

                {this.props.match.params.id === "3" ? (
                  <li className="page-item active">
                    <a className="page-link" href="/posting/3">
                      4
                    </a>
                  </li>
                ) : (
                  <li className="page-item">
                    <a className="page-link" href="/posting/3">
                      4
                    </a>
                  </li>
                )}

                {this.props.match.params.id === "4" ? (
                  <li className="page-item active">
                    <a className="page-link" href="/posting/4">
                      5
                    </a>
                  </li>
                ) : (
                  <li className="page-item">
                    <a className="page-link" href="/posting/4">
                      5
                    </a>
                  </li>
                )}
                {this.props.match.params.id === "5" ? (
                  <li className="page-item active">
                    <a className="page-link" href="/posting/5">
                      6
                    </a>
                  </li>
                ) : (
                  <li className="page-item">
                    <a className="page-link" href="/posting/5">
                      6
                    </a>
                  </li>
                )}
                {this.props.match.params.id === "6" ? (
                  <li className="page-item active">
                    <a className="page-link" href="/posting/6">
                      7
                    </a>
                  </li>
                ) : (
                  <li className="page-item">
                    <a className="page-link" href="/posting/6">
                      7
                    </a>
                  </li>
                )}
                {this.props.match.params.id === "7" ? (
                  <li className="page-item active">
                    <a className="page-link" href="/posting/7">
                      8
                    </a>
                  </li>
                ) : (
                  <li className="page-item">
                    <a className="page-link" href="/posting/7">
                      8
                    </a>
                  </li>
                )}
                {this.props.match.params.id === "8" ? (
                  <li className="page-item active">
                    <a className="page-link" href="/posting/8">
                      9
                    </a>
                  </li>
                ) : (
                  <li className="page-item">
                    <a className="page-link" href="/posting/8">
                      9
                    </a>
                  </li>
                )}
              </ul>
            </nav>
          </section> */}
        </section>
        <Footer />
      </>
    );
  }
}

export default Posting;
