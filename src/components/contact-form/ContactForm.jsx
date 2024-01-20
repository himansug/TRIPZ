import React from "react";
import "./style.css";

const ContactForm = () => {
  return (
    <div className="form-container">
      <h1>Send a message to us!</h1>
      <form>
        <input placeholder="Full Name" />
        <input placeholder="e-Mail Address" />
        <input placeholder="Subject" />
        <textarea placeholder="Message..." rows="4"></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
