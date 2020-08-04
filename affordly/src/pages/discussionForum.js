// Created by Anish Tuli, B00843522 (anish.tuli@dal.ca)

import React from "react";
import NavigationBar from "../components/navbar";
import Discussion from "../components/discussion";
import Footer from "../components/Footer";

function discussionForum() {
  return (
    <>
      <NavigationBar />
      <Discussion />
      <Footer />
    </>
  );
}

export default discussionForum;
