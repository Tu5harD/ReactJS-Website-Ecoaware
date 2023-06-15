import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Soilcontain from "./Soilcontain";
import soil from '..//Componets//soil.jpeg'
const Soil = (props) => {
  return (
    <div>
      <Navbar />
      <Soilcontain/>
      <Footer
        firstHeading="Earth"
        lastHeading="Pollution"
        contact="+91 7499833141"
        firstLocation="32 Shirala"
        lastLocation="Maharastra, India"
        email="tushardukane9@gmail.com"
      />
    </div>
  );
};

export default Soil;
