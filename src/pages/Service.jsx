import React from "react";
import Appointment from "../components/appointment/Appointment";
import Canals from "../components/canals/Canal";
import Gallery from "../components/gallery/Gallery";
import Symptoms from "../components/symptoms/Symptoms";

const Service = () => {
  return (
    <div id="service">
      <Canals />
      <Symptoms />
      <Gallery />
      <Appointment />
    </div>
  );
};

export default Service;
