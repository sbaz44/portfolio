import React, { Component } from "react";
import { Transition } from "react-transition-group";
import Header from "./component/Header";
import $ from "jquery";
import { TweenLite } from "gsap/all";
import me from "./assests/img/me.png";
import js from "./assests/img/JS.png";
import rn from "./assests/img/rn.png";
import rjs from "./assests/img/rjs.png";
import html from "./assests/img/html.png";
import css from "./assests/img/css.png";
import redux from "./assests/img/redux.png";
import flutter from "./assests/img/flutter.png";
import fastapi from "./assests/img/fastapi.png";
import mongodb from "./assests/img/mongo.png";
import node from "./assests/img/node.png";
import git from "./assests/img/git.png";
import xd from "./assests/img/xd.png";
import Footer from "./component/Footer";
let scroll = 0;
const startState = { autoAlpha: 0, x: 500 };
export default class About extends Component {
  scrollHandler2 = () => {
    scroll = window.scrollY;
    if (window.location.pathname === "/about") {
      if (window.innerWidth > 768) {
        if (scroll >= 200) {
          $("body").css("background-color", "#fff");
          $(".info").css("background-color", "rgba(0, 0, 0, 0.8)");
          $(".intro h1").css("color", "#fff");
        } else {
          $(".info").css("background-color", "");
          $("body").css("background-color", "#fff");
          $(".intro h1").css("color", "#000");
        }
      } else {
        if (scroll >= 100) {
          console.log("else");

          $("body").css("background-color", "#fff");
          $(".info").css("background-color", "rgba(0, 0, 0, 0.8)");
          $(".intro h1").css("color", "#fff");
        } else {
          $(".info").css("background-color", "");
          $("body").css("background-color", "#fff");
          $(".intro h1").css("color", "#000");
        }
      }
    }
  };

  componentDidMount() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
    if (window.location.pathname === "/about") {
      window.addEventListener("scroll", this.scrollHandler2, false);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollHandler2, false);
  }

  render() {
    const Language = (data) => {
      return (
        <div
          className="p-lang"
          onMouseEnter={() => {
            $("." + data.text.replace(/\s/g, "")).css("opacity", 1);
          }}
          onMouseLeave={() => {
            $("." + data.text.replace(/\s/g, "")).css("opacity", 0);
          }}
        >
          <h2>{data.text}</h2>
          <h3>{data.level}</h3>
          <img
            src={data.img}
            className={"p-icon " + data.text.replace(/\s/g, "")}
            alt="Javascript"
          />
        </div>
      );
    };
    return (
      // <Transition
      //   unmountOnExit
      //   in={this.props.show}
      //   timeout={3000}
      //   onEnter={(node) => TweenLite.set(node, startState)}
      //   addEndListener={(node, done) => {
      //     TweenLite.to(node, 2, {
      //       autoAlpha: this.props.show ? 1 : 0,
      //       x: this.props.show ? 0 : 500,
      //       onComplete: done,
      //     });
      //   }}
      // >
      <div className="about-container">
        <Header link="/" />
        <div
          className="parallax"
          style={{ backgroundImage: "url(" + me + ")" }}
        >
          <div className="info">
            <div className="intro">
              <h1>
                Enthusiastic developer eager to contribute to team success
                through hardwork, attention to detail.
              </h1>
            </div>
            <div className="row">
              <div className="education">
                <h1>Education</h1>

                <h2>
                  Sadhana Vidhyalaya,
                  <br /> Secondary Education, SSC,
                  <br />
                  2010
                </h2>
                <h2>
                  Vidyalankar Polytechnic,
                  <br /> Diploma in Information Technology,
                  <br /> 2010-2013
                </h2>
                <h2>
                  Shah & Anchor Kutchhi Engineering College, <br />
                  B.E in Information Technology, <br />
                  2014-2018
                </h2>
                <div className="sizedbox" />
                <h1>Langauge</h1>

                <h2>English</h2>
                <h2>Hindi</h2>
              </div>
              <div className="language">
                <h1>Work Experience</h1>
                <h2>
                  Devomark Enterprises
                  <br />
                  April 2019 - May 2021
                </h2>
                <div className="sizedbox" />
                <h1>Hobbies</h1>
                <h2>Gym</h2>
                <h2>Cooking</h2>
                <h2>Cricket</h2>
                <h2>Computer Gaming</h2>
                <h2>Football</h2>
                <h2>Trekking</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="skills">
          <h1 className="header">SKILLS</h1>

          <div className="row">
            <div className="column">
              <Language text="HTML" level="PROFICIENT" img={html} />
              <Language text="CSS" level="PROFICIENT" img={css} />
              <Language text="JAVASCRIPT" level="PROFICIENT" img={js} />
              <Language text="REACT" level="PROFICIENT" img={rjs} />
              <Language text="REACT NATIVE" level="PROFICIENT" img={rn} />
              <Language text="REDUX" level="PROFICIENT" img={redux} />
            </div>
            <div className="column">
              <Language text="FLUTTER" level="PROFICIENT" img={flutter} />
              <Language text="FASTAPI" level="NOVICE" img={fastapi} />
              <Language text="MONGODB" level="PROFICIENT" img={mongodb} />
              <Language text="NODEJS" level="NOVICE" img={node} />
              <Language text="GIT" level="NOVICE" img={git} />
              <Language text="ADOBE XD" level="PROFICIENT" img={xd} />
            </div>
          </div>
        </div>
        <div className="about-footer">
          <Footer />
        </div>
      </div>
      // </Transition>
    );
  }
}
