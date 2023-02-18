import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "./component/Header";
import $ from "jquery";
import pc from "./assests/img/pc.png";
import mobile from "./assests/img/mobile.png";
import ClientCard from "./component/ClientCard";
import tcc from "./assests/img/client/tcc.png";
import devo from "./assests/img/client/devo.png";
import mani from "./assests/img/client/mani.png";
import fluid from "./assests/img/client/fluid.png";
import maheshwari from "./assests/img/client/maheshwari.png";
import silver from "./assests/img/client/silver.png";
import sambhav from "./assests/img/client/sambhav.png";
import japan from "./assests/img/client/japan.png";
import bonono from "./assests/img/client/bonono.png";
import alfa from "./assests/img/client/alfa.png";
import japan1 from "./assests/img/screen/japan1.jpg";
import devo1 from "./assests/img/screen/devo1.jpg";
import devo2 from "./assests/img/screen/devo2.jpg";
import devo3 from "./assests/img/screen/devo3.jpg";
import devo4 from "./assests/img/screen/devo4.jpg";
import devo5 from "./assests/img/screen/devo5.jpg";
import alfa1 from "./assests/img/screen/alfa1.jpg";
import mani1 from "./assests/img/screen/mani1.jpg";
import tcg1 from "./assests/img/screen/tcg1.jpg";
import tcg2 from "./assests/img/screen/tcg2.jpg";
import tcg3 from "./assests/img/screen/tcg3.jpg";
import tcg6 from "./assests/img/screen/tcg6.jpg";
import tcg7 from "./assests/img/screen/tcg7.jpg";
import fluid1 from "./assests/img/screen/fluid1.jpg";
import fluid2 from "./assests/img/screen/fluid2.jpg";
import fluid3 from "./assests/img/screen/fluid3.jpg";
import fluid4 from "./assests/img/screen/fluid4.jpg";
import fluid5 from "./assests/img/screen/fluid5.jpg";
import mah1 from "./assests/img/screen/mah1.jpg";
import mah2 from "./assests/img/screen/mah2.jpg";
import mah3 from "./assests/img/screen/mah3.jpg";
import mah4 from "./assests/img/screen/mah4.jpg";
import mah5 from "./assests/img/screen/mah5.jpg";
import mah6 from "./assests/img/screen/mah6.jpg";
import sam1 from "./assests/img/screen/sam1.jpg";
import sam2 from "./assests/img/screen/sam2.jpg";
import sam3 from "./assests/img/screen/sam3.jpg";
import sam4 from "./assests/img/screen/sam4.jpg";
import sam6 from "./assests/img/screen/sam6.jpg";
import silver1 from "./assests/img/screen/silver1.jpg";
import silver2 from "./assests/img/screen/silver2.jpg";
import silver4 from "./assests/img/screen/silver4.jpg";
import silver5 from "./assests/img/screen/silver5.jpg";
import silver6 from "./assests/img/screen/silver6.jpg";
import bon1 from "./assests/img/screen/bon1.jpg";
import bon2 from "./assests/img/screen/bon2.jpg";
import bon3 from "./assests/img/screen/bon3.jpg";
import bon4 from "./assests/img/screen/bon4.jpg";
import appj1 from "./assests/img/screen/appj1.jpeg";
import appa1 from "./assests/img/screen/appa1.jpeg";
import Footer from "./component/Footer";

var scroll = 0;
export default class Portfolio extends Component {
  state = {
    Client: [
      {
        name: "Treasure INC.",
        logo: japan,
        bg: "rgba(32, 41, 160,0.8)",
        screen: [japan1],
        role: [
          "Identified web based user interactions and developed highly-responsive user interface component via React concepts.",
          "Translated design and wireframes into high quality code without using any CSS framework.",
          "API Integration with Authorization and Authentication",
          "Built custom components for UX-Library consisting Button, Inputbox, Table many other components required exclusively for this project.",
          "Developed custom function to handle CRUD operation, JWT token manangement and handled token expiry using axios interceptors.",
          "Implemented out of scope tasks.",
          "Technologies used: React, Redux, HTML5, CSS3, SASS, jquery",
        ],
        desc: "A web application for pill management used by patient to show daily report and statistics.",
        teamStrength: 2,
        duration: " Dec 2019 - Present",
      },
      {
        name: "Alfa Carpeting",
        logo: alfa,
        bg: "rgba(81, 168, 177,0.8)",
        screen: [alfa1],
        role: [
          "Working closely with client to fully understand the requirement and deliver accordingly.",
          "Translated design and wireframes into high quality code without using any CSS framework.",
          "API Integration with Authorization and Authentication",
          "Reusing custom components that were built in earlier project.",
          "Developed custom function to handle CRUD operation, JWT token manangement and handled token expiry using axios interceptors.",
          "Technologies used: React, Redux, HTML5, CSS3, SASS, jquery",
        ],
        desc: "A web application for managing leads across different states in India.",
        teamStrength: 3,
        duration: " Jan 2020 - Oct-2020",
      },
      {
        name: "Devomark",
        logo: devo,
        bg: "rgba(255, 153, 0, 0.88)",
        screen: [devo1, devo2, devo3, devo4, devo5],
        role: [
          "Translated design and wireframes into high quality code without using any CSS framework.",
          "Developed and implemented responsive website",
          "Reusing custom components that were built in earlier project.",
          "Added SEO tags.",
          "Deployment on GoDaddy",
          "Technologies used: React, Redux, HTML5, CSS3, SASS, jquery",
        ],
        desc: "Portfolio website",
        teamStrength: 1,
        duration: " Oct 2019 - Dec-2019",
      },
      {
        name: "Manipadma",
        logo: mani,
        bg: "rgba(167, 36, 33,0.8)",
        screen: [mani1],
        role: [
          "Translated design and wireframes into high quality code without using any CSS framework.",
          "Developed and implemented responsive website",
          "Added SEO tags.",
          "Deployment on GoDaddy",
          "Technologies used: HTML5, CSS3, SASS, jquery",
        ],
        desc: "Manipadma Human Development Foundation is a organization that is trying to solve all the problems of humanity from its root cause",
        teamStrength: 1,
        duration: " May 2019 - Aug-2019",
      },
      {
        name: "The College Guidance Co",
        logo: tcc,
        bg: "rgba(249, 198, 26,0.8)",
        screen: [tcg1, tcg2, tcg3, tcg6, tcg7],
        role: [
          "Working closely with client to fully understand the requirement and deliver accordingly.",
          "Translated design and wireframes into high quality code without using any CSS framework.",
          "Developed and implemented responsive website",
          "Built custom components for UX-Library consisting Button, Inputbox, Table many other components required exclusively for this project.",
          "Added SEO tags.",
          "Deployment on AWS",
          "Technologies used: React, Redux, HTML5, CSS3, SASS, jquery",
        ],
        desc: "The College Guidance Co. provides a boutique university guidance service, helping students throughout the process, right from building a strong profile, to shortlisting universities, essay and personal statement writing, putting in a strong application, and then selecting which school to finally attend.",
        teamStrength: 1,
        duration: " Apr 2020 - May-2020",
      },
      {
        name: "Fluid AI",
        logo: fluid,
        bg: "rgba(54, 54, 54,0.8)",
        screen: [fluid1, fluid2, fluid3, fluid4, fluid5],
        role: [
          "Working closely with client to fully understand the requirement and deliver accordingly.",
          "Translated design and wireframes into high quality code without using any CSS framework.",
          "Developed and implemented responsive website",
          "Built custom components for UX-Library consisting Button, Inputbox, Table many other components required exclusively for this project.",
          "Technologies used: React, Redux, HTML5, CSS3, SASS, jquery",
        ],
        desc: "Fluid AI is an AI-first company in the digital-first world, we believe the power of artificial intelligence can be harnessed to change the way we live and work, for the better. ",
        teamStrength: 2,
        duration: " Nov 2019 - Mar-2020",
      },
      {
        name: "Maheshwari and Associates",
        logo: maheshwari,
        bg: "rgba(46, 45, 42,0.8)",
        screen: [mah1, mah2, mah3, mah4, mah5, mah6],
        role: [
          "Working closely with client to fully understand the requirement and deliver accordingly.",
          "Translated design and wireframes into high quality code without using any CSS framework.",
          "Developed and implemented responsive website",
          "Built custom components for UX-Library consisting Button, Inputbox, Table many other components required exclusively for this project.",
          "Added SEO tags.",
          "Deployment on GoDaddy",
          "Technologies used: React, Redux, HTML5, CSS3, SASS, jquery",
        ],
        desc: "M&A has design studios in Mumbai and Kolkata with over 50+ experienced architects, interior designers, site engineers, 3D visualizers and other allied staff.",
        teamStrength: 1,
        duration: " Oct 2019 - Dec-2019",
      },
      {
        name: "Sambhav Group",
        logo: sambhav,
        bg: "rgba(91, 63, 54,0.8)",
        screen: [sam1, sam2, sam3, sam4, sam6],
        role: [
          "Translated design and wireframes into high quality code without using any CSS framework.",
          "Developed and implemented responsive website",
          "Built custom components for UX-Library consisting Button, Inputbox, Table many other components required exclusively for this project.",
          "Added SEO tags.",
          "Deployment on GoDaddy",
          "Technologies used: React, Redux, HTML5, CSS3, SASS, jquery",
        ],
        desc: "Sambhav group brings together modernity, heritage, comfort and an unfathomable creativity in their developments.Sambhav goes beyond just development. It acts as a multi-functional entity responsible for analytics, designing, investment, finance, construction and management for each of its projects. These attributes have made it possible for the group to capitalize on a range of commercial and residential opportunities.",
        teamStrength: 1,
        duration: " Jan 2020 - Mar-2020",
      },
      {
        name: "Silver House",
        logo: silver,
        bg: "rgba(0, 0, 0,0.8)",
        screen: [silver1, silver2, silver4, silver5, silver6],
        role: [
          "Working closely with client to fully understand the requirement and deliver accordingly.",
          "Translated design and wireframes into high quality code without using any CSS framework.",
          "Developed and implemented responsive website",
          "Built custom components for UX-Library consisting Button, Inputbox, Table many other components required exclusively for this project.",
          "Deployment on AWS",
          "Technologies used: React, Redux, HTML5, CSS3, SASS, jquery",
        ],
        desc: "Silver House is the largest luxury jewellery and gift articles showroom in Colaba, Mumbai.",
        teamStrength: 1,
        duration: "Nov 2019 - Dec-2019",
      },
      {
        name: "Bonono",
        logo: bonono,
        bg: "rgba(0, 0, 1,0.8)",
        screen: [bon1, bon2, bon3, bon4],
        role: [
          "Translated design and wireframes into high quality code without using any CSS framework.",
          "Built custom components for UX-Library consisting Button, Inputbox, Table many other components required exclusively for this project.",
          "Technologies used: React, Redux, HTML5, CSS3, SASS, jquery",
        ],
        desc: "Ecommerce website",
        teamStrength: 2,
        duration: "Mar 2021 - Present",
      },
    ],
    AppClient: [
      {
        name: "Treasure INC.",
        logo: japan,
        bg: "rgba(32, 41, 160,0.8)",
        screen: [appj1],
        role: [
          "Translated design and wireframes into high quality code.",
          "API Integration with Authorization and Authentication.",
          "Notification handling using firebase.",
          "Built custom components for UX-Library consisting Button, Inputbox and many other components required exclusively for this project.",
          "Developed custom function to handle CRUD operation, JWT token manangement and handled token expiry using axios interceptors.",
          "Handled app state management using Redux.",
        ],
        desc: "A mobile application for pill management used by patient to show daily report and statistics.",
        teamStrength: 2,
        duration: " Dec 2019 - Present",
      },
      {
        name: "Alfa Carpeting",
        logo: alfa,
        bg: "rgba(81, 168, 177,0.8)",
        screen: [appa1],
        role: [
          "Translated design and wireframes into high quality code.",
          "Notification handling using firebase.",
          "API Integration with Authorization and Authentication",
          "Built custom components for UX-Library consisting Button, Inputbox and many other components required exclusively for this project.",
          "Developed custom function to handle CRUD operation, JWT token manangement and handled token expiry using axios interceptors.",
          "Handled app state management using Redux.",
        ],
        desc: "A mobile application for managing leads.",
        teamStrength: 2,
        duration: " Jan 2020 - Oct 2020",
      },
    ],
    HoveredClient: "",
    isPop: false,
    ActiveClient: {},
    touchStart: 0,
    touchEnd: 0,
  };
  setChildData = (data) => {
    this.setState({ HoveredClient: data });
  };
  scrollHandler = () => {
    scroll = window.scrollY;
    if (window.location.hash !== "#/about") {
      if (scroll >= 200) {
        $("body").css("background-color", "#000");
      } else {
        $("body").css("background-color", "#fff");
      }
    }
  };
  tab1Click = () => {
    $(".indicator").css("left", "0%");
    const reel = document.querySelector(".tabs");
    reel.style.transform = "translateX(0%)";
    $(".tab1").animate(
      {
        scrollTop: 0,
      },
      100
    );
  };

  tab2Click = () => {
    $(".indicator").css("left", "50%");
    const reel = document.querySelector(".tabs");
    reel.style.transform = "translateX(-50%)";

    $(".tab2").animate(
      {
        scrollTop: 0,
      },
      100
    );
  };
  componentDidMount() {
    document.title = "Portfolio • Shahbaz Shaikh";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    if (window.location.hash !== "#/about") {
      window.addEventListener("scroll", this.scrollHandler, false);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollHandler, true);
  }

  render() {
    return (
      <div className="portfolio-container">
        <Header link="/about" />
        <div className="quote">
          <div className="text">
            while(!(succeed=try())); <span>|</span>
          </div>
        </div>

        <div className="desktop-wrapper">
          <div className="title">
            <div className="icon-wrapper">
              <img src={pc} alt="PC" className="pc-icon" />
              {this.state.HoveredClient && (
                <img
                  src={this.state.HoveredClient}
                  alt="PC"
                  className="snap ani-show"
                />
              )}
            </div>
            <h1>Web Development</h1>
          </div>
          <div className="clients">
            {this.state.Client.map((item, index) => (
              <ClientCard
                passChildData={this.setChildData}
                key={index + 22}
                data={item}
                onClick={() => {
                  document.body.style.overflow = "hidden";
                  this.setState({
                    isPop: true,
                    ActiveClient: item,
                    isApp: false,
                  });
                }}
              />
            ))}
          </div>
        </div>
        <div className="app-wrapper">
          <div className="clients">
            {this.state.AppClient.map((item, index) => (
              <ClientCard
                passChildData={this.setChildData}
                key={index + 25}
                data={item}
                onClick={() => {
                  document.body.style.overflow = "hidden";
                  this.setState({
                    isPop: true,
                    ActiveClient: item,
                    isApp: true,
                  });
                }}
              />
            ))}
          </div>
          <div className="title">
            <div className="icon-wrapper">
              <img src={mobile} alt="mobile" className="pc-icon" />
              {this.state.HoveredClient && (
                <img
                  src={this.state.HoveredClient}
                  alt="App"
                  className="snap ani-show"
                />
              )}
            </div>
            <h1>App Development</h1>
          </div>
        </div>
        <Footer />

        {this.state.isPop && (
          <div className="popup-container ani-show">
            <div
              className="overlay"
              onClick={() => {
                document.body.style.overflow = "";
                $(".slider-wrapper").css("height", 0);
                $(".tabs").css("display", "none");
                $(".tab").css("display", "none");
                $(".info h1").css("display", "none");
                $(".slider").css("height", 0);
                $(".info").css("height", 0);
                $(".thumbs-wrapper").css("margin", 0);
                $(".thumbs-wrapper").css("height", 0);
                $(".popUp").animate(
                  {
                    "min-height": "0",
                    padding: "0",
                    display: "none",
                  },
                  300,
                  () => {
                    $(".line").css({ display: "block" }).animate(
                      {
                        width: "0%",
                        left: "50%",
                      },
                      400
                    );
                  }
                );
                setTimeout(() => {
                  this.setState({ isPop: false });
                }, 600);
              }}
            />
            <div className="popUp">
              <div className="line" />
              <div className="slider">
                <Carousel
                  autoPlay
                  infiniteLoop
                  showArrows={false}
                  showStatus={false}
                  showIndicators={false}
                  thumbWidth={120}
                >
                  {this.state.ActiveClient.screen.map((item, index) => (
                    <img
                      key={index + 699}
                      alt="Client"
                      src={item}
                      className={this.state.isApp ? "app-image" : ""}
                    />
                  ))}
                </Carousel>
              </div>
              <div className="info">
                <h1>{this.state.ActiveClient.name}</h1>
                <div className="tab">
                  <div className="tab-header" onClick={this.tab1Click}>
                    <p>Roles and Responsibilities</p>
                  </div>
                  <div className="tab-header" onClick={this.tab2Click}>
                    <p>Description</p>
                  </div>
                  <div
                    className="indicator"
                    style={{ backgroundColor: this.state.ActiveClient.bg }}
                  />
                </div>
                <div className="tabs">
                  <div
                    className="tab1"
                    onTouchStart={(e) =>
                      this.setState({ touchStart: e.targetTouches[0].clientX })
                    }
                    onTouchMove={(e) =>
                      this.setState({ touchEnd: e.targetTouches[0].clientX })
                    }
                    onTouchEnd={() => {
                      if (this.state.touchStart - this.state.touchEnd > 50) {
                        // do your stuff here for left swipe
                        this.tab2Click();
                      }

                      if (this.state.touchStart - this.state.touchEnd < -50) {
                        // do your stuff here for right swipe
                        this.tab1Click();
                      }
                    }}
                  >
                    <ul>
                      {this.state.ActiveClient.role.map((item, index) => (
                        <li key={index + 2}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className="tab2"
                    onTouchStart={(e) =>
                      this.setState({ touchStart: e.targetTouches[0].clientX })
                    }
                    onTouchMove={(e) =>
                      this.setState({ touchEnd: e.targetTouches[0].clientX })
                    }
                    onTouchEnd={() => {
                      if (this.state.touchStart - this.state.touchEnd > 50) {
                        // do your stuff here for left swipe
                        this.tab2Click();
                      }

                      if (this.state.touchStart - this.state.touchEnd < -50) {
                        // do your stuff here for right swipe
                        this.tab1Click();
                      }
                    }}
                  >
                    <div className="desc">
                      <p>{this.state.ActiveClient.desc}</p>
                      <p>
                        Team Strength:{" "}
                        <strong>{this.state.ActiveClient.teamStrength}</strong>
                      </p>
                      <p>
                        Duration:{" "}
                        <strong>{this.state.ActiveClient.duration}</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
