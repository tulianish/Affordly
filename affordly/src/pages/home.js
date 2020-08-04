/**
 * Developed by-
 *
 * Name : PIYUSH PIYUSH
 * Banner ID : B00844563
 * Email ID : piyush@dal.ca
 *
 *
 * Feature Covered:
 * This is the frontend for our Home page.
 *
 */
 // Modified by Anish Tuli (B00843522, anish.tuli@dal.ca)
// Modified by Rahul Anand (B00841310, rahul.anand@dal.ca)

import React from "react";
import "react-dropdown/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Footer from "../components/Footer";
import Header from "../components/navbar";
import "../stylesheets/home.css";
import axios from 'axios';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange=this.handleOnChange.bind(this);
    this.searchKeyword=this.searchKeyword.bind(this);
    this.state = {
      posts : [],
      trending : [],
      keyword: "",
      searchResult: [],
      error: "",
    }
  }

  componentDidMount(){
  axios.get("https://the-affordly.herokuapp.com/api/activePosts")
  .then(actPosts => actPosts)
  .then(data => this.setState({posts:data.data}));

  axios.get("https://affordly-flask.herokuapp.com/trending")
  .then(trendPost => trendPost.data)
  .then(data => {
    this.setState({trending:data})
  });

    }
  searchKeyword(e){
    axios.get("https://affordly-flask.herokuapp.com/search?keyword="+this.state.keyword)
  .then(posts => posts.data)
  .then(data => {
    if(data.message)
    {this.setState({error:"No results found"})}
    this.setState({posts:data, error:""})
  });
  }

  handleOnChange = (element) => {
    element.preventDefault();
    const name = element.target.name;
    const value = element.target.value;
    this.setState({
      "keyword": value
    });
  };
  render() {
    let error=this.state.error;
    return (
      <div className="home">
        <Header />

        <div className="container ">
          <div className="ctr">
            <Carousel>
            {this.state.trending.map((value) => {
              return (
                <Carousel.Item>
                <a href={"/posting/"+value.id}><img className="d-block w-100" src={value.image} alt="First slide" /></a>
                <Carousel.Caption>
                  <h2>Trendings</h2>
                  <p>Sell items on just a click.</p>
                </Carousel.Caption>
              </Carousel.Item>
              )
            })}
              
            </Carousel>
          </div>

          <div className="search_bar">
            <input
              name="keyword"
              className="search_field"
              type="text"
              placeholder="Search an item..."
              onChange={this.handleOnChange}
            />
            <div className="btn btn-primary search_button" onClick={this.searchKeyword}> Search  </div>
          </div>

          <div className="row">
          {error ? (
            <section className="container alert alert-danger" role="alert">
              No results found
            </section>
          ) :     
          
               this.state.posts.map((value) => {  //Renders all the active posts
              return(
            <div className="col-md-4 crd">
              <Card style={{ width: "21" }}>
                <Card.Img
                  variant="top"
                  src={value.img}
                />
                <Card.Body>
                  <Card.Title>{value.title}</Card.Title>
                  <Card.Text>
                    {value.description}
                  </Card.Text>
                </Card.Body>
              </Card>
              <a class="btn btn-primary buy_button" href={"posting/"+value._id}>
                Details
              </a>
            </div>
)
          })} 
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Home;
