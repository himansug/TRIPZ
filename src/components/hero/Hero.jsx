import React from "react";
import "./style.css";

const Hero = (props) => {
  return (
    <div className={props.className}>
      <img alt="Hero Banner" src={props.heroImg} />
      <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnClass}>
          {props.btnText}
        </a>
      </div>
    </div>
  );
};

export default Hero;
