import React, { Component } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import Map from "../components/Map";
import "../stylesheets/Posting.css";
import "font-awesome/css/font-awesome.min.css";

class Posting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // hack to handle the backend functionality and using the static array/list of the products similar to homepage.
      /*
       * Please note : for maintaining the list, I hav used five images which are being downloaded from Internet.
       * As suggested by TAs in the meeting, I have used the direct copied image addresses below so as to give the
       * appropriate referenced to the parent.
       *
       * Below five images have been used :
       *
       * 1. Chair Image => https://images.crateandbarrel.com/is/image/Crate/GraysonChairCitronS13/$web_zoom$/190411135102/grayson-chair.jpg
       * 2. Table Image => https://lh4.googleusercontent.com/proxy/BiSWN8AoNI0JuLANd2rfqNcwx5j7_i9RcVgZebLyC46OxxQS3TMiC1_9qpv84Aj7aJbS-hIIy56ul5pY0zsAhXZJjCKLN8xx38sPVf_5Hn0cJq9B6qEJqOKegmwHzXq6VdhZJnwuOmo=w1200-h630-p-k-no-nu
       * 3. Couch Image => https://www.sunpatio.net/wp-content/uploads/2019/02/14-598x598.jpg
       * 4. Tablet Image => https://uno.ma/media/catalog/product/cache/1/image/598x598/9df78eab33525d08d6e5fb8d27136e95/a/p/apple-ipad-air2-gris-uno-1_1__1.jpg
       * 5. Jacket Image => https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNNSXwJ3Qx2A5WPfmlioYwmdEmf6prMtc9J9OVAATRS12nwpgP&usqp=CAU
       */
      cards: [
        {
          title: "Cushions",
          price: 50,
          desc:
            "Some quick example text to describe the item and make it a bit more intuitive.",
          image:
            "https://images.crateandbarrel.com/is/image/Crate/GraysonChairCitronS13/$web_zoom$/190411135102/grayson-chair.jpg",
        },

        {
          title: "Lamp",
          price: 70,
          desc:
            "A beautiful wooden lamp to make your dining area more beautiful. Newly polished and well maitained.",
          image:
            "https://secure.img1-fg.wfcdn.com/im/08872942/resize-h500-w500%5Ecompr-r85/5238/52389965/Product+Kater+29%2522+Table+Lamp.jpg",
        },
        {
          title: "Fan",
          price: 20,
          desc:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          image:
            "https://secure.img1-fg.wfcdn.com/im/06914522/resize-h500-w500%5Ecompr-r85/7080/70801423/Product+Byler+10+-+Light+Sputnik+Sphere+Chandelier.jpg",
        },
        {
          title: "Mat",
          price: 90,
          desc:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          image:
            "https://secure.img1-fg.wfcdn.com/im/51216393/resize-h500-w500%5Ecompr-r85/5446/54463800/Product+Chelsea+Gray+Area+Rug.jpg",
        },
        {
          title: "Table",
          price: 55,
          desc:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          image:
            "https://secure.img1-fg.wfcdn.com/im/98087601/resize-h500-w500%5Ecompr-r85/1000/100057854/Product+Devito+Cross+Legs+Coffee+Table.jpg",
        },
        {
          title: "Fridge",
          price: 75,
          desc:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          image:
            "https://secure.img1-fg.wfcdn.com/im/98302936/resize-h310-w310%5Ecompr-r85/9717/97170047/28%2522+Counter+Depth+French+Door+15+cu.+ft.+Refrigerator.jpg",
        },
        {
          title: "Chair",
          price: 35,
          desc:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          image:
            "https://secure.img1-fg.wfcdn.com/im/33053223/resize-h800%5Ecompr-r85/1013/101378543/Wydmire+25.5%2522+Armchair.jpg",
        },
        {
          title: "Curtains",
          price: 20,
          desc:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          image:
            "https://secure.img1-fg.wfcdn.com/im/55972120/resize-h500-w500%5Ecompr-r85/8648/86489828/Product+Knutsen+Chevron+Semi-Sheer+Grommet+Single+Curtain+Panel.jpg",
        },
        {
          title: "Lamp",
          price: 15,
          desc:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          image:
            "https://secure.img1-fg.wfcdn.com/im/66402025/resize-h500-w500%5Ecompr-r85/9191/91916729/Product+Pecora+32%2522+Table+Lamp.jpg",
        },
      ],
    };
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
                    src={this.state.cards[0].image}
                    //  src={this.state.cards[this.props.match.params.id].image}
                  />
                </figure>

                {/* caption and description of the product*/}
                <section className="caption">
                  <h4 className="float-right" style={{ color: "green" }}>
                    ${this.state.cards[this.props.match.params.id].price}.00
                  </h4>
                  <h4 className="float-left" style={{ color: "navy" }}>
                    {/* {this.state.cards[this.props.match.params.id].title} */}
                    Article Title
                  </h4>
                  <hr />
                  <section style={{ marginTop: "8%" }}>
                    <p>{this.state.cards[0].desc}</p>
                    <p>
                      <em> Submitted by Dalhousie </em>
                    </p>
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
          <section className="row justify-content-center">
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
          </section>
        </section>
        <Footer />
      </>
    );
  }
}

export default Posting;
