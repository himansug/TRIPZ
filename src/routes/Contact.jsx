import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Footer from "../components/footer/Footer";
import ContactForm from "../components/contact-form/ContactForm";
import kerala from "../assets/images/kerala.jpg";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Hero
        className="hero-mid"
        heroImg={kerala}
        title="Contact"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
