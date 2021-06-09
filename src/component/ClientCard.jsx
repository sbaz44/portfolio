import React, { useState } from "react";
import $ from "jquery";
export default function ClientCard(props) {
  // const [activeClient, setactiveClient] = useState("");

  return (
    <div
      className="client-card"
      onClick={props.onClick}
      onMouseEnter={() => {
        $("body").css("background-color", props.data.bg);
        $(".card").css("background-color", props.data.bg);
        props.passChildData(props.data.screen[0]);
      }}
      onMouseLeave={() => {
        $("body").css("background-color", "black");
        $(".card").css("background-color", "");
        props.passChildData("");
      }}
    >
      <div className="card">
        <img src={props.data.logo} className="client-logo" alt="client-logo" />
        <p>{props.data.name}</p>
      </div>
    </div>
  );
}
