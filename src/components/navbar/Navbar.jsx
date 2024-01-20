import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { menuItems } from "./MenuItem";

const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(true);
  const handleClick = () => {
    setMenuClicked(!menuClicked);
  };

  return (
    <div>
      <nav className="navbar">
        <a className="nav-logo" href="/">
          <h1 className="nav-logo-text">
            Trippz<span>.</span>
          </h1>
        </a>

        <div className="menu-icons" onClick={handleClick}>
          <i
            className={menuClicked ? "fa-solid fa-bars" : "fa-solid fa-xmark"}
          ></i>
        </div>
        <ul className={menuClicked ? "nav-menu" : "nav-menu active"}>
          {menuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.className} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <button>Sign Up</button>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
