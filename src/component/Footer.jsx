import React from "react";
import $ from "jquery";

export default function Footer() {
  const Social = (data) => {
    return (
      <div className="link-wrapper">
        <a href={data.link} target="_blank" rel="noopener noreferrer">
          <div
            className={"social " + data.name}
            onMouseEnter={() => $("." + data.name).css("color", data.color)}
            onMouseLeave={() => $("." + data.name).css("color", "")}
          >
            {data.name}
          </div>
        </a>
        <p className="dot" style={{ color: data.color }}>
          .
        </p>
      </div>
    );
  };
  return (
    <div className="footer">
      <h2>GET IN TOUCH</h2>
      <div className="social-links">
        <Social
          color="#0a66c2"
          name="LN"
          link="https://www.linkedin.com/in/shahbaz-shaikh-83988515a/"
        />
        <Social color="#928e8e" name="GH" link="https://github.com/sbaz44" />
        <Social
          color="#E112FC"
          name="IG"
          link="https://www.instagram.com/sbaz44/"
        />
        <Social
          color="#1877f2"
          name="FB"
          link="https://www.facebook.com/sbaz44"
        />
      </div>
      <div className="move-forward">
        <p>
          WANT TO MOVE FORWARD? <br />
          {window.innerWidth < 768 && <br />}
          <a className="underline" href="mailto:shaikhshahbaz44@gmail.com">
            DROP A LINE.
          </a>
        </p>
      </div>
    </div>
  );
}
