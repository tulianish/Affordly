import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Grid } from "react-bootstrap";
import FormControl from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Footer from "../components/Footer";
import Header from "../components/navbar";
import "../stylesheets/home.css";
import a from "../a.jpg";
import b from "../b.jpg";
import c from "../c.jpg";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

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
                  <h3>Trust Afford.ly</h3>
                  <p>Sell items on just a click.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={b} alt="Second slide" />
                <Carousel.Caption>
                  <h3>Customer Satisfaction</h3>
                  <p>Buy items as you need.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={c} alt="Third slide" />
                <Carousel.Caption>
                  <h3>Affordable Items</h3>
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
              <Card style={{ width: "21rem" }}>
                <Card.Img
                  variant="top"
                  src="https://secure.img1-fg.wfcdn.com/im/43099659/resize-h500-w500%5Ecompr-r85/1052/105291484/Product+Miltonvale+Outdoor+Square+Pillow+Cover+%2528Set+of+2%2529.jpg"
                />
                <Card.Body>
                  <Card.Title>Item 1</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Button className="buy_button" variant="primary">
                Buy Now
              </Button>
            </div>

            <div className="col-md-4 crd">
              <Card style={{ width: "21rem" }}>
                <Card.Img
                  variant="top"
                  src="https://secure.img1-fg.wfcdn.com/im/08872942/resize-h500-w500%5Ecompr-r85/5238/52389965/Product+Kater+29%2522+Table+Lamp.jpg"
                />
                <Card.Body>
                  <Card.Title>Item 2</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Button className="buy_button" variant="primary">
                Buy Now
              </Button>
            </div>

            <div className="col-md-4 crd">
              <Card style={{ width: "21rem" }}>
                <Card.Img
                  variant="top"
                  src="https://secure.img1-fg.wfcdn.com/im/06914522/resize-h500-w500%5Ecompr-r85/7080/70801423/Product+Byler+10+-+Light+Sputnik+Sphere+Chandelier.jpg"
                />
                <Card.Body>
                  <Card.Title>Item 3</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Button className="buy_button" variant="primary">
                Buy Now
              </Button>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 crd">
              <Card style={{ width: "21rem" }}>
                <Card.Img
                  variant="top"
                  src="https://secure.img1-fg.wfcdn.com/im/51216393/resize-h500-w500%5Ecompr-r85/5446/54463800/Product+Chelsea+Gray+Area+Rug.jpg"
                />
                <Card.Body>
                  <Card.Title>Item 4</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Button className="buy_button" variant="primary">
                Buy Now
              </Button>
            </div>

            <div className="col-md-4 crd">
              <Card style={{ width: "21rem" }}>
                <Card.Img
                  variant="top"
                  src="https://secure.img1-fg.wfcdn.com/im/98087601/resize-h500-w500%5Ecompr-r85/1000/100057854/Product+Devito+Cross+Legs+Coffee+Table.jpg"
                />
                <Card.Body>
                  <Card.Title>Item 5</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Button className="buy_button" variant="primary">
                Buy Now
              </Button>
            </div>

            <div className="col-md-4 crd">
              <Card style={{ width: "21rem" }}>
                <Card.Img
                  variant="top"
                  src="https://secure.img1-fg.wfcdn.com/im/98302936/resize-h310-w310%5Ecompr-r85/9717/97170047/28%2522+Counter+Depth+French+Door+15+cu.+ft.+Refrigerator.jpg"
                />
                <Card.Body>
                  <Card.Title>Item 6</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Button className="buy_button" variant="primary">
                Buy Now
              </Button>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 crd">
              <Card style={{ width: "21rem" }}>
                <Card.Img
                  variant="top"
                  src="https://secure.img1-fg.wfcdn.com/im/33053223/resize-h800%5Ecompr-r85/1013/101378543/Wydmire+25.5%2522+Armchair.jpg"
                />
                <Card.Body>
                  <Card.Title>Item 7</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Button className="buy_button" variant="primary">
                Buy Now
              </Button>
            </div>

            <div className="col-md-4 crd">
              <Card style={{ width: "21rem" }}>
                <Card.Img
                  variant="top"
                  src="https://secure.img1-fg.wfcdn.com/im/55972120/resize-h500-w500%5Ecompr-r85/8648/86489828/Product+Knutsen+Chevron+Semi-Sheer+Grommet+Single+Curtain+Panel.jpg"
                />
                <Card.Body>
                  <Card.Title>Item 8</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Button className="buy_button" variant="primary">
                Buy Now
              </Button>
            </div>

            <div className="col-md-4 crd">
              <Card style={{ width: "21rem" }}>
                <Card.Img
                  variant="top"
                  src="https://secure.img1-fg.wfcdn.com/im/66402025/resize-h500-w500%5Ecompr-r85/9191/91916729/Product+Pecora+32%2522+Table+Lamp.jpg"
                />
                <Card.Body>
                  <Card.Title>Item 9</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Button className="buy_button" variant="primary">
                Buy Now
              </Button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Home;
