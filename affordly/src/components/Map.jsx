/**
 * Developed by-
 *
 * Name : Sarabjeet Singh
 * Banner ID : B00847541
 * Email ID : sarabjeet.singh@dal.ca
 *
 * Feature Covered:
 * This file is a front-end for map visualization on Posting page.
 */

import React, { Component } from "react";
import axios from "axios";
import Geo from "react-geocode";
// Simple map component which enables the embed map for the posting page.

/**
 * We have a feature of visualizing the google map for the location of an item in our item posting page.
 * Since we don't have our back-end with us, so to show static google image. I have used the dalhousie coordinates
 * in map and have shown the same map on all the 5 variants pages of posting.
 *
 * For Embed-Map : I have used basic and simple framework provided by "https://www.embedgooglemap.net/en/" UI with some tweaks.
 *
 * Tweaks :
 *
 * 1. Changed the location to Dalhousie coordinates.
 * 2. I already have my image container on page, I tweaked the iframe html for width and height adjustments.
 * 3. Edited the css file to adjust the postion of the map-frame.
 */

class Map extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const location = this.props.address;

    /**
     * Commenting out the Geocoding process as any API with key will give only fixed number of hits
     * which gets expired soon. Hence passing the location string directly to the google maps api.
     * The commented code contains the locationiq api which is working fine and provides lat/long for address.
     *
     *
     * let lat = "";
     * let long = "";
     * axios
     * .get("https://us1.locationiq.com/v1/search.php", {
     * params: {
     * key: "6ea08a5a848f1d",
     * q: location,
     * country: "Canada",
     * format: "json",
     * },
     * })
     * .then((response) => {
     * lat = response.data[0].lat;
     * long = response.data[0].lon;
     * console.log(response.data[0].lat, response.data[0].lon);
     * this.setState({
     * lat: response.data[0].lat,
     * long: response.data[0].lon,
     * });
     * })
     * .catch((err) => {
     * console.log(err);
     * });
     *
     */

    // creating the source string for google map using location string only.
    let src1 =
      "https://maps.google.com/maps?q=" +
      location +
      "&t=&z=13&ie=UTF8&iwloc=&output=embed";

    return (
      <section className="map">
        <section className="canvas">
          <iframe
            width="500"
            height="500"
            id="gmap_canvas"
            src={src1}
            //src="https://maps.google.com/maps?q=42.6555376522037,-83.1421847749559&t=&z=13&ie=UTF8&iwloc=&output=embed"
            //src="https://maps.google.com/maps?q=44.640659,-63.578350&t=&z=13&ie=UTF8&iwloc=&output=embed"
            //src="https://maps.google.com/maps?q=Dalhousie%20University&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            title="Pick up location"
          ></iframe>
          <a href="https://www.embedgooglemap.net/blog/nordvpn-coupon-code/">
            {" "}
          </a>
        </section>
        <style></style>
      </section>
    );
  }
}

export default Map;
