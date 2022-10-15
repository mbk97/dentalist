import React from "react";
import AboutUs from "../components/about/AboutUs";
import Accordion from "../components/accordion/Accordion";
import Priority from "../components/priority/Priority";
import Safety from "../components/safety/Safety";
import Team from "../components/team/Team";

const About = () => {
  return (
    <div>
      <AboutUs />
      <Priority />
      <Safety />
      <Team />
      <Accordion />
    </div>
  );
};

export default About;
