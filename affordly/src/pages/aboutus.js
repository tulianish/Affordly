<<<<<<< HEAD
/**
 * Developed by-
 *
 * Name : PIYUSH PIYUSH
 * Banner ID : B00844563
 * Email ID : piyush@dal.ca
 *
 * 
 * Feature Covered:
 * This is the frontend for our About Us page.
 * 
 */
=======
// Developed by PIYUSH PIYUSH (B00844563, piyush@dal.ca)

/* 
  Modified by - Tejasvi Vig
  Banner number - B00833705
  Email id - tj252001@dal.ca
*/
>>>>>>> ef98a344373bc12e42887f21f2b3012fafb09661

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";
import Header from "../components/navbar";
import "../stylesheets/signup.css";
import "../stylesheets/aboutus.css";

// const emailCheck = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />

        <div className="container">
          <div className="jumbotron box_layout">
            <h1> Our Mission </h1>
            <p>
              The mission of Affordly is to provide its users a flexible and an easy way to purchase and sell 
              their products. We are proud to provide a platform that connects people and solves their e-commerce problems. 
              In near future, we also plan out to reach multi-nations and hence broaden our scope.
            </p>
            <br />
            <p className="ceo_name"> - Affordly  </p>
          </div>

          <div className="jumbotron box_layout">
            <h1>  Target Audience </h1>
            <img
              id="ach_image"
              src="https://www.vigfurniture.com/media/catalog/product/cache/1/image/1200x/17f82f742ffe127f42dca9de82fb58b1/3/0/3087-black--white.jpg"
            />
            <p className="random_text">
            The application proposed is a one stop portal for anyone who is trying to buy or sell
furniture, clothes, home accessories, or any other used goods. For now, we will be focusing
on the population of Halifax Regional Municipality (HRM). Our segments will include people
who are looking to buy cheap and readily available goods from people in their
neighborhood. These people could be university students moving in Halifax and trying to
gather as much stuff as possible for minimal prices, or the students moving out after
completing their degrees, seeking to sell their stuff and earn some extra money. Hence,
this website will provide a platform where buyers and sellers can connect and engage in
easy, cheap and accessible trade. This goes beyond just students. People moving in and
out of the city always find themselves shopping and then discarding the items. We believe
that most of our users will be from the above-mentioned segments, however people trying
to get rid of their old stuff will find the ease and accessibility of using our application helpful.
            </p>
            <br />
            <br />

            <h1> Brand Attribute </h1>
            <img
              id="ach_image"
              src="https://www.vigfurniture.com/media/catalog/product/cache/1/image/1200x/17f82f742ffe127f42dca9de82fb58b1/3/0/3087-black--white.jpg"
            />
            <p className="random_text">
            As a brand, our application tends to communicate the message of ‘reuse and save’. Our
application resonates with the idea of being thrifty yet living a luxurious life. The message
ties well with our primary target audience i.e. people who are living temporarily in HRM, like
students, migrant workers etc.
Another important idea behind the brand is dependability and trustworthiness. The well
thought out and prudently designed application will inspire a sense of trust among the
users. The idea behind the practice is to make users feel secure about the information they
are entering on our website. The website is also designed in an aesthetic manner, which
ensures that users can navigate through key features seamlessly.

            </p>
            <br />
            <br />

            <h1> Competitive Landscape </h1>
            <img
              id="ach_image"
              src="https://www.vigfurniture.com/media/catalog/product/cache/1/image/1200x/17f82f742ffe127f42dca9de82fb58b1/3/0/3087-black--white.jpg"
            />
            <p className="random_text">
            Our application has several competitors in the market. Some of the top competition that we
face is from already established companies like Kijiji, Wayfair, used.ca and legto [1][2][3][4].
We also face competition from the retail sector, Value Village in NS being our biggest
competitor.
We believe that our application will be better as we follow an aesthetic and minimalist
design with focus on the goal we want to achieve. We provide a discussion forum, which is
a first of its kind feature in a website. The discussion forum will allow users to discuss the
quality of the product and make decisions in general. Apart from that, we also have a
like/dislike counter (similar to Facebook) This will help determine the quality of the product
or reputation of the seller in general. In terms of query optimization, we are using Sequelize
ORM and Django ORM to effectively reduce the query timings by prefetching and caching
data at application level.

            </p>
            <br />
            <br />

            
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default AboutUs;
