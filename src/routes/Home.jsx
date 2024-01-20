import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Destination from "../components/destination/Destination";
import Trip from "../components/trip/Trip";
import Footer from "../components/footer/Footer";
import heroImg from "../assets/images/hero.jpg";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero
        className="hero"
        heroImg={heroImg}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        btnText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </div>
  );
};

export default Home;
