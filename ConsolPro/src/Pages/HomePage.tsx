import React, { Fragment } from "react";
import Header from "../components/Header";
import HomeSlider from "../components/HomeSlider";
import BusinessIdeas from "../components/BusinessIdeas";
import Video from "../components/Video";
import Testimonials from "../components/Testimonials";
import Blogs from "../components/Blogs";

const HomePage = () => {
  return (
    <Fragment>
      <div className="bg-dark min-h-[100vh]">
        <Header />
        <HomeSlider />
        <BusinessIdeas />
        <Video />
        <Testimonials />
        <Blogs />
      </div>
    </Fragment>
  );
};

export default HomePage;
