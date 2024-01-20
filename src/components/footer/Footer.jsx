import React from "react";
import "./style.css";
import { socialsData, linksData } from "./FooterData";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="footer-logo">
          <h1>
            Trippz<span>.</span>
          </h1>
          <p>Choose your favourite destination.</p>
        </div>
        <div className="socials">
          {socialsData.map((item) => (
            <a href={item.href}>
              <i className={item.className}></i>
            </a>
          ))}
        </div>
      </div>
      <div className="bottom">
        {linksData.map((item) => (
          <div className={item.className}>
            <h4>{item.heading}</h4>
            {item.links.map((link) => (
              <a href={link.href}>{link.text}</a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
