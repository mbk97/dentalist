import React from "react";
import Header from "../components/header/Header";
import Intro from "../components/intro/Intro";
import Services from "../components/services/Services";
import Dental from "../components/dental/Dental";
import Features from "../components/features/Features";
import Expert from "../components/expert/Expert";
import Testimonial from "../components/testimonial/Testimonial";
import Appointment from "../components/appointment/Appointment";
// import LatestNews from "../components/latestNews/LatestNews";

const Home = () => {
  return (
    <div>
      <Header />
      <Intro />
      <Services />
      <Dental />
      <Features />
      <Expert />
      <Testimonial />
      {/*
       <LatestNews />
    */}
      <Appointment />
    </div>
  );
};

export default Home;
