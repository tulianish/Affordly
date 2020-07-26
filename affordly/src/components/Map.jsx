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
  render() {
    return (
      <section class="map">
        <section class="canvas">
          <iframe
            width="500"
            height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Dalhousie%20University&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
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
