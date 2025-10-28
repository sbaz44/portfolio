import React, { Component } from "react";
import Header from "../component/Header";
// import me from "../assests/img/me.png";
import js from "../assests/img/JS.png";
import rn from "../assests/img/rn.png";
import rjs from "../assests/img/rjs.png";
import html from "../assests/img/html.png";
import css from "../assests/img/css.png";
import redux from "../assests/img/redux.png";
import flutter from "../assests/img/flutter.png";
import fastapi from "../assests/img/fastapi.png";
import mongodb from "../assests/img/mongo.png";
import node from "../assests/img/node.png";
import git from "../assests/img/git.png";
import xd from "../assests/img/xd.png";
import Footer from "../component/Footer";
import { getElement } from "../utils";
let scroll = 0;
export default class About extends Component {
  scrollHandler2 = () => {
    console.log("first");
    scroll = window.scrollY;
    if (window.location.hash === "#/") {
      const shouldChange = scroll >= (window.innerWidth > 768 ? 200 : 100);

      document.body.style.backgroundColor = "#fff";
      getElement(".info").style.backgroundColor = shouldChange
        ? "rgba(0, 0, 0, 0.8)"
        : "";
      getElement(".intro h1").style.color = shouldChange ? "#fff" : "#000";

      //   const scrollThreshold = window.innerWidth > 768 ? 200 : 100;
      //   const infoElement = document.querySelector(".info");
      //   const introTitle = document.querySelector(".intro h1");

      //   if (scroll >= scrollThreshold) {
      //     document.body.style.backgroundColor = "#fff";
      //     if (infoElement)
      //       infoElement.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
      //     if (introTitle) introTitle.style.color = "#fff";
      //   } else {
      //     if (infoElement) infoElement.style.backgroundColor = "";
      //     document.body.style.backgroundColor = "#fff";
      //     if (introTitle) introTitle.style.color = "#000";
      //   }
      //   if (window.innerWidth > 768) {
      //     if (scroll >= 200) {
      //       $("body").css("background-color", "#fff");
      //       $(".info").css("background-color", "rgba(0, 0, 0, 0.8)");
      //       $(".intro h1").css("color", "#fff");
      //     } else {
      //       $(".info").css("background-color", "");
      //       $("body").css("background-color", "#fff");
      //       $(".intro h1").css("color", "#000");
      //     }
      //   } else {
      //     if (scroll >= 100) {
      //       $("body").css("background-color", "#fff");
      //       $(".info").css("background-color", "rgba(0, 0, 0, 0.8)");
      //       $(".intro h1").css("color", "#fff");
      //     } else {
      //       $(".info").css("background-color", "");
      //       $("body").css("background-color", "#fff");
      //       $(".intro h1").css("color", "#000");
      //     }
      //   }
    }
  };

  componentDidMount() {
    document.title = "About • Shahbaz Shaikh";
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
    console.log(window.location.hash);
    // if (window.location.hash === "#/projects") {
    window.addEventListener("scroll", this.scrollHandler2, false);
    // }
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
            const ele = getElement("." + data.text.replace(/\s/g, ""));
            ele && (ele.style.opacity = 1);
            // $("." + data.text.replace(/\s/g, "")).css("opacity", 1);
          }}
          onMouseLeave={() => {
            const ele = getElement("." + data.text.replace(/\s/g, ""));
            ele && (ele.style.opacity = 0);

            // $("." + data.text.replace(/\s/g, "")).css("opacity", 0);
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
      <div className="about-container">
        <Header link="/projects" />
        <div
          className="parallax"
          //   style={{ backgroundImage: "url(" + me + ")" }}
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
                <div className="sizedbox" />
                <h1 className="download">
                  <a
                    href="https://drive.google.com/file/d/1Uw7Wkq2oxGGPJ6vfy9cueX7Ef2_DhBkb/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download Resume
                  </a>
                </h1>
              </div>
              <div className="language">
                <h1>Work Experience</h1>
                <h2>
                  Devomark Enterprises
                  <br />
                  April 2019 - May 2021
                </h2>

                <h2>
                  Ease My AI
                  <br />
                  May 2021 - Dec 2025
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
              <Language text="NODEJS" level="PROFICIENT" img={node} />
              <Language text="GIT" level="PROFICIENT" img={git} />
              <Language text="ADOBE XD" level="PROFICIENT" img={xd} />
            </div>
          </div>
        </div>
        <div className="about-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

// .about-container {
//   // height: 500vh;
//   .parallax {
//     // height: 150vh;
//     background-attachment: fixed;
//     background-position: right;
//     background-position-y: bottom;
//     background-repeat: no-repeat;
//     background-size: 38vw;
//     @media (min-width: 768px) and (max-width: 1024px) {
//     }
//     @media only screen and (max-width: 768px) {
//       background-position: center;
//       // height: 208vh;
//       background-size: cover;
//       background-position-x: center;
//     }
//     .info {
//       height: 100%;
//       transition: all 400ms ease-in-out;
//       .intro {
//         display: flex;
//         align-items: center;
//         padding: 6vw;
//         padding-top: 70vh;
//         @media only screen and (max-width: 768px) {
//           padding-top: 0;
//         }
//         h1 {
//           font-family: "Black Han Sans", sans-serif;
//           width: 50%;
//           font-size: 50px;
//           text-transform: uppercase;
//           transition: all 400ms ease-in-out;
//           line-height: 0.9;
//           color: #000;
//           @media (min-width: 768px) and (max-width: 1024px) {
//           }
//           @media only screen and (max-width: 768px) {
//             font-size: 35px;
//             width: 80%;
//             margin-top: 120%;
//           }
//         }
//       }
//       .row {
//         display: flex;
//         // height: 10vh;
//         color: #fff;
//         padding: 0 6vw;
//         @media (min-width: 768px) and (max-width: 1024px) {
//         }
//         @media only screen and (max-width: 768px) {
//           flex-direction: column;
//           padding-bottom: 4vw;
//         }
//         h1 {
//           font-family: "Staatliches", "Roboto";
//           letter-spacing: 8px;
//           font-weight: 100;
//           font-size: 0.875rem;
//           margin-bottom: 20px;
//           // font-size: 20px;
//         }
//         h2 {
//           font-family: "Black Han Sans", sans-serif;
//           text-transform: uppercase;
//           margin-bottom: 10px;
//           font-size: 1rem;
//           font-weight: 500;
//         }
//         .download {
//           --border-color: #858585;
//           --border-width: 5px;
//           --bottom-distance: 0px; /* you can increase this */
//           display: inline-block;
//           background-image: linear-gradient(
//             var(--border-color),
//             var(--border-color)
//           );
//           cursor: pointer;
//           background-size: 100% var(--border-width);
//           background-repeat: no-repeat;
//           transition: background-size 0.5s;
//           background-position: 50% calc(100% - var(--bottom-distance));
//           a {
//             color: #fff !important;
//           }
//         }

//         .sizedbox {
//           height: 30px;
//         }
//         .education {
//           flex: 1;
//         }
//         .language {
//           flex: 1;
//           @media only screen and (max-width: 768px) {
//             margin-top: 30px;
//           }
//         }
//       }
//     }
//   }
//   .skills {
//     padding: 02vw 6vw;

//     .header {
//       font-family: "Black Han Sans", sans-serif;
//       font-size: 70px;
//       margin-bottom: 30px;
//       @media only screen and (max-width: 768px) {
//         margin-bottom: 10px;
//         margin-top: 20px;
//       }
//     }
//     .row {
//       display: flex;
//       @media only screen and (max-width: 768px) {
//         flex-direction: column;
//       }
//       .column {
//         display: flex;
//         flex-direction: column;
//         align-items: flex-start;
//         flex: 1;
//         .p-lang {
//           position: relative;
//           line-height: 0.8;
//           cursor: pointer;
//           margin-bottom: 40px;
//           h2 {
//             font-family: "Black Han Sans", sans-serif;
//             font-weight: 400;
//             font-size: 30px;
//           }
//           h3 {
//             font-family: "Staatliches", "Roboto";
//             font-weight: 100;
//             font-size: 0.875rem;
//           }
//           .p-icon {
//             width: 40px;
//             position: absolute;
//             right: -10%;
//             top: 50%;
//             opacity: 0;
//             z-index: 10;
//           }
//           .REACT {
//             width: 80px;
//             right: -70%;
//           }
//           .REDUX {
//             width: 80px;
//             right: -70%;
//           }
//           .FLUTTER {
//             width: 80px;
//             right: -70%;
//           }
//           .FASTAPI {
//             width: 80px;
//             right: -70%;
//           }
//           .MONGODB {
//             width: 80px;
//             right: -50%;
//           }
//           .NODEJS {
//             width: 80px;
//             right: -50%;
//           }
//           .GIT {
//             width: 80px;
//             right: -90%;
//           }
//           .HTML {
//             right: -50%;
//           }
//           .CSS {
//             right: -60%;
//           }
//         }
//       }
//     }

//     @supports (-webkit-text-stroke: 1px #383838) {
//       .header {
//         -webkit-text-stroke: 1px #383838;
//         -webkit-text-fill-color: white;
//       }
//     }
//   }

//   .about-footer {
//     padding: 20px;
//     background-color: rgba($color: #000000, $alpha: 0.8);
//   }
// }
