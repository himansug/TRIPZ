import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Footer from "../components/footer/Footer";
import Trip from "../components/trip/Trip";
import munnar from "../assets/images/munnar.jpg";

const Services = () => {
  return (
    <div>
      <Navbar />
      <Hero
        className="hero-mid"
        heroImg={munnar}
        title="Services"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </div>
  );
};

export default Services;
