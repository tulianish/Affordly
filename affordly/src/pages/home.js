// Built by PIYUSH PIYUSH (B00844563, piyush@dal.ca)


import React from "react";
import "react-dropdown/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Footer from "../components/Footer";
import Header from "../components/navbar";
import "../stylesheets/home.css";
import a from "../a.jpg";
import b from "../b.jpg";
import c from "../c.jpg";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Header />

        <div className="container ">
          <div className="ctr">
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src={a} alt="First slide" />
                <Carousel.Caption>
                  <h2>Trendings</h2>
                  <p>Sell items on just a click.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={b} alt="Second slide" />
                <Carousel.Caption>
                  <h2>Trendings</h2>
                  <p>Buy items as you need.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={c} alt="Third slide" />
                <Carousel.Caption>
                  <h2>Trendings</h2>
                  <p>Items in your reach.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>

          <div className="search_bar">
            <input
              className="search_field"
              type="text"
              placeholder="Search an item..."
            />
            <div className="btn btn-primary search_button"> Search </div>
          </div>

          <div className="row">
            <div className="col-md-4 crd">
              <Card style={{ width: "21" }}>
                <Card.Img
                  variant="top"
                  src="https://secure.img1-fg.wfcdn.com/im/43099659/resize-h500-w500%5Ecompr-r85/1052/105291484/Product+Miltonvale+Outdoor+Square+Pillow+Cover+%2528Set+of+2%2529.jpg"
                />
                <Card.Body>
                  <Card.Title>Cushions</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <a class="btn btn-primary buy_button" href="posting/0">
                Details
              </a>
            </div>

            <div className="col-md-4 crd">
              <Card style={{ width: "21" }}>
                <Card.Img
                  variant="top"
                  src="https://secure.img1-fg.wfcdn.com/im/08872942/resize-h500-w500%5Ecompr-r85/5238/52389965/Product+Kater+29%2522+Table+Lamp.jpg"
                />
                <Card.Body>
                  <Card.Title>Lamp</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <a class="btn btn-primary buy_button" href="posting/1">
                Details
              </a>
            </div>

            <div className="col-md-4 crd">
              <Card style={{ width: "21" }}>
                <Card.Img
                  variant="top"
                  src="https://secure.img1-fg.wfcdn.com/im/06914522/resize-h500-w500%5Ecompr-r85/7080/70801423/Product+Byler+10+-+Light+Sputnik+Sphere+Chandelier.jpg"
                />
                <Card.Body>
                  <Card.Title>Fan</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <a class="btn btn-primary buy_button" href="posting/2">
                Details
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 crd">
              <Card style={{ width: "21" }}>
                <Card.Img
                  variant="top"
                  src="https://secure.img1-fg.wfcdn.com/im/51216393/resize-h500-w500%5Ecompr-r85/5446/54463800/Product+Chelsea+Gray+Area+Rug.jpg"
                />
                <Card.Body>
                  <Card.Title>Mat</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <a class="btn btn-primary buy_button" href="posting/3">
                Details
              </a>
            </div>

            <div className="col-md-4 crd">
              <Card style={{ width: "21" }}>
                <Card.Img
                  variant="top"
                  src="https://secure.img1-fg.wfcdn.com/im/98087601/resize-h500-w500%5Ecompr-r85/1000/100057854/Product+Devito+Cross+Legs+Coffee+Table.jpg"
                />
                <Card.Body>
                  <Card.Title>Table</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <a class="btn btn-primary buy_button" href="posting/4">
                Details
              </a>
            </div>

            <div className="col-md-4 crd">
              <Card style={{ width: "21" }}>
                <Card.Img
                  variant="top"
                  src="https://secure.img1-fg.wfcdn.com/im/98302936/resize-h310-w310%5Ecompr-r85/9717/97170047/28%2522+Counter+Depth+French+Door+15+cu.+ft.+Refrigerator.jpg"
                />
                <Card.Body>
                  <Card.Title>Fridge</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <a class="btn btn-primary buy_button" href="posting/5">
                Details
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 crd">
              <Card style={{ width: "21" }}>
                <Card.Img
                  variant="top"
                  src="https://secure.img1-fg.wfcdn.com/im/33053223/resize-h800%5Ecompr-r85/1013/101378543/Wydmire+25.5%2522+Armchair.jpg"
                />
                <Card.Body>
                  <Card.Title>Chair</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <a class="btn btn-primary buy_button" href="posting/6">
                Details
              </a>
            </div>

            <div className="col-md-4 crd">
              <Card style={{ width: "21" }}>
                <Card.Img
                  variant="top"
                  src="https://secure.img1-fg.wfcdn.com/im/55972120/resize-h500-w500%5Ecompr-r85/8648/86489828/Product+Knutsen+Chevron+Semi-Sheer+Grommet+Single+Curtain+Panel.jpg"
                />
                <Card.Body>
                  <Card.Title>Curtains</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <a class="btn btn-primary buy_button" href="posting/7">
                Details
              </a>
            </div>

            <div className="col-md-4 crd">
              <Card style={{ width: "21" }}>
                <Card.Img
                  variant="top"
                  src="https://secure.img1-fg.wfcdn.com/im/66402025/resize-h500-w500%5Ecompr-r85/9191/91916729/Product+Pecora+32%2522+Table+Lamp.jpg"
                />
                <Card.Body>
                  <Card.Title>Lamp</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <a class="btn btn-primary buy_button" href="posting/8">
                Details
              </a>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Home;
