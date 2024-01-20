import React from "react";
import "./style.css";
import { aboutData } from "./AboutData";

const AboutUs = () => {
  return (
    <div className="about-us">
      {aboutData.map((item) => (
        <>
          <h1>{item.heading}</h1>
          <p>{item.text}</p>
        </>
      ))}
    </div>
  );
};

export default AboutUs;
