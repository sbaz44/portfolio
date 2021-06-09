import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logoblack from "../assests/img/name-black.png";
import whitelogo from "../assests/img/name-white.png";
import $ from "jquery";
export default function Header(props) {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    $(window).scroll(function () {
      setScroll($(window).scrollTop());
    });
    return () => {
      $(window).off("scroll", function () {
        setScroll($(window).scrollTop());
      });
    };
  }, [scroll]);
  return (
    <header>
      <NavLink to="/">
        <div className="logo">
          <img
            src={scroll >= 200 ? whitelogo : logoblack}
            alt="logo"
            className="logo-icon"
          />
          <p
            className="name-text"
            style={scroll >= 200 ? { color: "white" } : { color: "black" }}
          >
            Shahbaz Shaikh
          </p>
        </div>
      </NavLink>
      <NavLink to={props.link}>
        <div
          className="link"
          style={scroll >= 200 ? { color: "white" } : { color: "black" }}
        >
          {props.link === "/" ? "PORFOLIO" : "ABOUT"}
        </div>
      </NavLink>
    </header>
  );
}
