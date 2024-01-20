import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import AboutUs from "../components/about-us/AboutUs";
import Footer from "../components/footer/Footer";

import keonjhar from "../assets/images/keonjhar.jpg";

const About = () => {
  return (
    <div>
      <Navbar />
      <Hero
        className="hero-mid"
        heroImg={keonjhar}
        title="About"
        btnClass="hide"
      />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default About;
