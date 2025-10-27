import { getElement } from "../utils";

export default function Footer() {
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

const Social = (data) => {
  const changeColor = (name, color = "") => {
    const element = getElement("." + name);
    element.style.color = color;
  };
  return (
    <div className="link-wrapper">
      <a href={data.link} target="_blank" rel="noopener noreferrer">
        <div
          className={"social " + data.name}
          // onMouseEnter={() => $("." + data.name).css("color", data.color)}
          onMouseEnter={() => changeColor(data.name, data.color)}
          // onMouseLeave={() => $("." + data.name).css("color", "")}
          onMouseLeave={() => changeColor(data.name, "")}
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
